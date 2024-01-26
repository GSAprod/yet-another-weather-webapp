import OpenWeatherTest from "../examples/open_weather_api.json" assert { type: "json" };
import axios from "axios";

export default class OpenWeatherAPI {
    constructor() {
        this.endpoint = axios.create({
            baseURL: "https://api.open-meteo.com/v1"
        })
    }

    async format_response(data, location) {
        
    }

    async get_weather() {
        // TODO Remove this line when testing
        return [200, OpenWeatherTest];

        try {
            const response = await this.endpoint.get("/forecast", {
                params: {
                    latitude: 38.7167,
                    longitude: -9.1333,
                    timezone: "auto",
                    timeformat: "unixtime",
                    current: "temperature_2m,relative_humidity_2m,is_day,weather_code,wind_speed_10m,wind_direction_10m",
                    daily: "weather_code,temperature_2m_max,temperature_2m_min,uv_index_max,precipitation_probability_max",
                    forecast_days: 7
                }
            });
            console.log(response.prototype.can);
            return [response.status, response.data];
        } catch(error) {
            if (error.response) {
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
                return [error.status, error.data];
            } else {
                return [500, error.message];
            }
        }
    }
}