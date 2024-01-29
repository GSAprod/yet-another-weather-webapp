import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import imgMetadata from "./imgMetadata.json";
import ErrorIcon from "./assets/icons/cloud-slash.svg?react";

import Location from "./components/Location";
import WeatherDetailsArea from "./components/WeatherDetailsArea";
import CurrentWeatherArea from "./components/CurrentWeatherArea";
import TemperatureArea from "./components/TemperatureArea";
import AlertsArea from "./components/AlertsArea";
import ForecastArea from "./components/ForecastArea";
import UnsplashCredits from "./components/UnsplashCredits";
import ApiCredits from "./components/ApiCredits";
import SettingsButton from "./components/SettingsButton";

function App() {
  const [weatherData, setWeatherData] = useState();
  const client = axios.create({
    baseURL: "http://localhost:3000",
  });

  useEffect(() => {
    async function fetchWeatherData() {
      try {
        const response = await client.get("/get_weather");

        setWeatherData(response.data);
      } catch (error) {
        console.log("Error: ", <error className="response status"></error>);
        console.log(error.response.headers);
        console.log(error.response.data);
        setWeatherData(undefined);
      }
    }
    fetchWeatherData();
  }, []);

  function getBackgroundImage() {
    return imgMetadata.foggy.day[0].path;
  }

  return (
    <div
      className={`webapp-container p-6 border-box min-h-full flex flex-col 
      bg-cover bg-center ${
        weatherData != undefined ? "justify-between" : "justify-center"
      }`}
      style={{ backgroundImage: `url(${getBackgroundImage("")})` }}>
      {weatherData != undefined ? (
        <>
          <div className="grid grid-cols-5 gap-y-10 max-md:grid-cols-2">
            <div className="max-sm:col-span-2 max-sm:flex max-sm:justify-center">
              <Location locationName={weatherData && weatherData.location} />
            </div>

            <div
              className="col-span-3 row-span-2 max-md:order-2 max-md:row-span-1 
        max-md:col-span-2">
              <CurrentWeatherArea
                currentWeather={weatherData && weatherData.current}
              />
            </div>

            <div className="max-md:order-2 max-md:col-span-2">
              <TemperatureArea
                maxTemp={weatherData && weatherData.details.temp_max}
                minTemp={weatherData && weatherData.details.temp_min}
              />
            </div>

            <div
              className="max-md:order-2 max-md:col-span-2 max-md:flex 
        max-md:justify-center max-md:mb-10">
              <WeatherDetailsArea
                weatherDetails={weatherData && weatherData.details}
              />
            </div>

            <div className="max-md:order-1 max-sm:hidden">
              <AlertsArea alerts={weatherData && weatherData.alerts} />
            </div>
          </div>

          <div className="grid grid-cols-5">
            <div className="flex flex-col justify-end gap-1 max-sm:invisible">
              <ApiCredits
                name={weatherData && weatherData.api_name}
                href={weatherData && weatherData.api_url}
              />
              <UnsplashCredits
                meta={{ imageUrl: "#", authorName: "Author", authorUrl: "#" }}
              />
            </div>

            <ForecastArea forecastData={weatherData && weatherData.forecast} />

            <div className="self-end justify-self-end">
              <SettingsButton />
            </div>
          </div>
        </>
      ) : (
        <div className="max-w-screen-md bg-black/20 backdrop-blur-md p-8 rounded-3xl 
        drop-shadow-lg self-center gap-5 flex flex-col text-center items-center">
          <ErrorIcon className="w-12 h-auto fill-white" />
          <p className="font-bold">An error has occurred</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil et
            minima, sequi harum deserunt ipsa laboriosam error quam cupiditate
            ea temporibus, dolorum omnis atque nesciunt in illo alias tempore
            iure.
          </p>

          <div className="px-3 py-1 border rounded">Refresh</div>
        </div>
      )}
    </div>
  );
}

export default App;
