import OpenWeatherTest from "../examples/open_meteo_json.js";
import OpenWeatherGeocodingTest from "../examples/open_meteo_geocoding_json.js";
import axios from "axios";

//* Change this to true to use the test examples instead of making API calls.
//* Preserves API quota.
const TEST_MODE = (process.env.USE_EXAMPLES === "true") || false;

export default class OpenMeteoAPI {
    constructor() {
        this.endpoint = axios.create({
            baseURL: "https://api.open-meteo.com/v1",
            timeout: 10000
        });
        this.geocoding = axios.create({
            baseURL: "https://geocoding-api.open-meteo.com/v1",
            timeout: 10000
        });
    }

    async format_response(data, location) {
        function translateWeatherCondition(code) {
            const weatherCodes = {
                0: "sunny",
                1: "partly-cloudy",
                2: "partly-cloudy",
                3: "cloudy",
                45: "foggy",
                48: "foggy",
                51: "drizzle",
                53: "drizzle",
                55: "drizzle",
                61: "rain",
                63: "rain",
                65: "rain",
                66: "rain",
                67: "rain",
                71: "snow",
                73: "snow",
                75: "snow",
                77: "snow",
                80: "showers",
                81: "showers",
                82: "showers",
                85: "showers",
                86: "showers",
                95: "thunderstorm",
                96: "thunderstorm",
                99: "thunderstorm"
            }

            return weatherCodes[code];
        }

        function translateWindDirection(degrees) {
            const direction = Math.round(degrees / 45);
            const compassDirections = {
                0: "N",
                1: "NW",
                2: "W",
                3: "SW",
                4: "S",
                5: "SE",
                6: "E",
                7: "NE",
                8: "N"
            }
            return compassDirections[direction];
        }

        const weatherCondition = translateWeatherCondition(data.current.weather_code);
        if (weatherCondition === undefined) {
            console.log("Warning: Weather condition with code " + data.current.weather_code + "is not defined.");
            return null;
        }

        const weatherForecast = [];
        for (let i = 1; i < data.daily.time.length; i++) {
            weatherForecast.push({
                epoch_sec: data.daily.time[i],
                condition: translateWeatherCondition(data.daily.weather_code[i]),
                temp_max: Math.round(data.daily.temperature_2m_max[i]),
                temp_min: Math.round(data.daily.temperature_2m_min[i])
            })
        }
        
        const formattedOutput = {
            location: location,
            current: {
                epoch_sec: data.current.time,
                temp: Math.round(data.current.temperature_2m),
                condition: weatherCondition,
                is_day: data.current.is_day == 1 ? true : false
            },
            details: {
                humidity: data.current.relative_humidity_2m,
                wind_speed: Math.round(data.current.wind_speed_10m),
                wind_direction: translateWindDirection(data.current.wind_direction_10m),
                chance_of_rain: data.daily.precipitation_probability_max[0],
                uv_index: Math.round(data.daily.uv_index_max[0]),
                temp_max: Math.round(data.daily.temperature_2m_max[0]),
                temp_min: Math.round(data.daily.temperature_2m_min[0])
            },
            alerts: [],
            forecast: weatherForecast,
            api_name: "Open-Meteo API",
            api_url: "https://open-meteo.com/"
        }
        return JSON.stringify(formattedOutput);
    }

    async get_weather(locationParams, optionParams) {
        if (TEST_MODE)
            return [200, await this.format_response(OpenWeatherTest, locationParams.name)];

        const temp_unit = {
            "C": "celsius",
            "F": "fahrenheit",
        }[optionParams.temp_unit];

        const speed_unit = {
            "kmh": "kmh",
            "ms": "ms",
            "mph": "mph",
            "kn": "kn",
        }[optionParams.speed_unit];

        try {
            const response = await this.endpoint.get("/forecast", {
                params: {
                    latitude: locationParams.latitude,
                    longitude: locationParams.longitude,
                    timezone: "auto",
                    timeformat: "unixtime",
                    current: "temperature_2m,relative_humidity_2m,is_day,weather_code,wind_speed_10m,wind_direction_10m",
                    daily: "weather_code,temperature_2m_max,temperature_2m_min,uv_index_max,precipitation_probability_max",
                    forecast_days: 7,
                    temperature_unit: temp_unit,
                    wind_speed_unit: speed_unit,
                }
            });
            
            return [response.status, await this.format_response(response.data, locationParams.name)];
        } catch(error) {
            let errorData = {
                error: true
            }

            if (error.response) {
                errorData = {
                    ...errorData,
                    type: error.response.status < 500 ? "internal" : "api",
                    status: error.response.status,
                    reason: `OpenMeteo API - ${error.response.data.reason} (${error.response.status})`
                }
            } else {
                errorData = {
                    ...errorData,
                    type: "axios",
                    reason: `Axios - ${error.message}`
                }
            }
            return [500, JSON.stringify(errorData)];
        }
    }

    async append_administrative_region(admin_num, indexes, data, formattedResponse) {
        const similarResults = {};
        const admin_attr = "admin" + admin_num;
        
        // Append the parameter for each location
        indexes.forEach((index) => {
            if (!data.results[index][admin_attr]) return;   // (continue)

            formattedResponse[index].description = 
                data.results[index][admin_attr] + ", " + 
                formattedResponse[index].description;

            // Attach each result into a list of administrative regions
            const admin_attr_id = data.results[index][admin_attr + "_id"]
            if (!similarResults[admin_attr_id]) {
                similarResults[admin_attr_id] = [index]
            } else {
                similarResults[admin_attr_id].push(index);
            }
        });

        // For each location that is in the same administrative region, 
        // specify it further
        Object.keys(similarResults).forEach(key => {
            if (similarResults[key].length === 1) return;

            this.append_administrative_region(admin_num + 1, similarResults[key], data, formattedResponse);
        })
    }

    async format_geolocation_response(data) {
        const formattedResponse = [];
        const similarResults = {}

        // Add the parameters for each location (location details contain only the country, for now)
        for (let i = 0; i < data.results.length; i++) {
            let result = data.results[i];
            const formattedResult = {
                id: result.id,
                latitude: result.latitude,
                longitude: result.longitude,
                name: result.name,
                description: result.country
            };
            formattedResponse.push(formattedResult);
            
            // Attach each result into a list of countries and names
            let resultType = result.country_id + "/" + result.name
            if (!similarResults[resultType]) {
                similarResults[resultType] = [i];
            } else {
                similarResults[resultType].push(i);
            };
        }

        // For each location that has the same name and is in the same country, 
        // specify the next administrative region in the description
        Object.keys(similarResults).forEach(resType => {
            // no need to specify the region if the resultType is unique
            if (similarResults[resType].length === 1) return;

            this.append_administrative_region(1, similarResults[resType], data, formattedResponse);
        });

        return formattedResponse;
    }

    async search_geolocations(searchTerm) {
        if (TEST_MODE)
            return [200, await this.format_geolocation_response(OpenWeatherGeocodingTest)];

        try {
            const response = await this.geocoding.get("/search", {
                params: {
                    name: searchTerm,
                    count: 10
                }
            });

            if (response.data.results === undefined) {
                return [response.status, []];
            }
            
            return [response.status, await this.format_geolocation_response(response.data)];
        } catch(error) {
            let errorData = {
                error: true
            }

            if (error.response) {
                errorData = {
                    ...errorData,
                    type: error.response.status < 500 ? "internal" : "api",
                    status: error.response.status,
                    reason: `OpenMeteo API - ${error.response.data.reason} (${error.response.status})`
                }
            } else {
                errorData = {
                    ...errorData,
                    type: "axios",
                    reason: `Axios - ${error.message}`
                }
            }
            return [500, JSON.stringify(errorData)];
        }
    }
}