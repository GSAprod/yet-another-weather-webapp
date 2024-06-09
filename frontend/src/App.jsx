import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import imgMetadata from "./imgMetadata.json";

import Location from "./components/Location";
import WeatherDetailsArea from "./components/WeatherDetailsArea";
import CurrentWeatherArea from "./components/CurrentWeatherArea";
import TemperatureArea from "./components/TemperatureArea";
import AlertsArea from "./components/AlertsArea";
import ForecastArea from "./components/ForecastArea";
import UnsplashCredits from "./components/UnsplashCredits";
import ApiCredits from "./components/ApiCredits";
import SettingsButton from "./components/SettingsButton";
import ErrorPopup from "./components/ErrorPopup";
import LoadingPopup from "./components/LoadingPopup";
import LocationPicker from "./components/locationPicker/LocationPicker";

function App() {
  const [errorData, setErrorData] = useState(undefined);
  const [weatherData, setWeatherData] = useState();

  const [isLocationPickerOpen, setIsLocationPickerOpen] = useState(false);

  const client = axios.create({
    baseURL: "http://localhost:3000",
  });

  // Fetch the weather data as soon as the page loads up
  useEffect(() => {
    fetchWeatherData();
  }, []);

  // Get the background image as soon as the weather is fetched
  function getBackgroundImage() {
    // TODO Change picture depending on weather forecast
    return imgMetadata.foggy.day[0].path;
  }

  async function fetchWeatherData(attempt = 1) {
    try {
      const response = await client.get("/get_weather", {
        timeout: 5000*(attempt * .75),
      });
      setWeatherData(response.data);
      setErrorData(undefined);
    } catch (error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the 200 range
        console.log("Error: ", error.response.status);
        console.log(error.response.headers);
        console.log(error.response.data);
        setWeatherData(undefined);
        setErrorData(error.response.data);
      } else if (error.request) {
        // The request was sent but no response was received
        if (attempt < 3) {
          // Request timed out. Retry with a longer timeout
          fetchWeatherData(attempt + 1);
          return;
        }
        // After 3 attempts, show an internal error
        setWeatherData(undefined);
        setErrorData({
          error: true,
          type: "internal",
          reason: "Request timed out. Please try again later."
        });
      }
    }
  }

  function refreshWeatherData() {
    // When we want to refresh the page, instead of completely starting the entire page
    // loading process, we will just do another api request
    setWeatherData(undefined);
    setErrorData(undefined);
    fetchWeatherData();
  }

  return (
    <div
      className={`webapp-container p-6 border-box min-h-full flex flex-col 
      bg-cover bg-center ${
        weatherData ? "justify-between" : "justify-center"
      }`}
      style={{ backgroundImage: `url(${getBackgroundImage("")})` }}>
        
      {weatherData && !weatherData.error ? (
        <>
          <div className="grid grid-cols-5 gap-y-10 max-md:grid-cols-2">
            <div className="max-sm:col-span-2 max-sm:flex max-sm:justify-center">
              <Location locationName={weatherData.location} openPickerFunction={() => setIsLocationPickerOpen(true)} />
            </div>

            <div
              className="col-span-3 row-span-2 max-md:order-2 max-md:row-span-1 
        max-md:col-span-2">
              <CurrentWeatherArea
                currentWeather={weatherData.current}
              />
            </div>

            <div className="max-md:order-2 max-md:col-span-2">
              <TemperatureArea
                maxTemp={weatherData.details.temp_max}
                minTemp={weatherData.details.temp_min}
              />
            </div>

            <div
              className="max-md:order-2 max-md:col-span-2 max-md:flex 
        max-md:justify-center max-md:mb-10">
              <WeatherDetailsArea
                weatherDetails={weatherData.details}
              />
            </div>

            <div className="max-md:order-1 max-sm:hidden">
              <AlertsArea alerts={weatherData.alerts} />
            </div>
          </div>

          <div className="grid grid-cols-5">
            <div className="flex flex-col justify-end gap-1 max-sm:col-span-4 max-sm:order-2">
              <ApiCredits
                name={weatherData.api_name}
                href={weatherData.api_url}
              />
              <UnsplashCredits
                meta={{ imageUrl: "#", authorName: "Author", authorUrl: "#" }}
              />
            </div>

            <ForecastArea forecastData={weatherData.forecast} />

            <div className="self-end justify-self-end max-sm:order-2">
              <SettingsButton />
            </div>
          </div>
          { isLocationPickerOpen && <LocationPicker closeFunction={() => setIsLocationPickerOpen(false)} /> }
        </>
      ) : errorData ? (
        <ErrorPopup errorData={errorData} refreshFunction={refreshWeatherData} />
      ) : (
        <LoadingPopup />
      )}
    </div>
  );
}

export default App;
