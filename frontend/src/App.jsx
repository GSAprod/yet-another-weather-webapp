import { useState, useEffect } from "react";
import "./App.css";
import imgMetadata from "./imgMetadata.json";
import axios from "axios";

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
  const [location, setLocation] = useState("Lisbon, Portugal");
  const client = axios.create({
    baseURL: "http://localhost:3000"
  })

  useEffect(() => {
    async function fetchWeatherData() {
      await client.get('/get_weather').then((response) => {
        console.log(response.data);
      });
    }
    fetchWeatherData();
  }, []);
  

  function getBackgroundImage() {
    return imgMetadata.foggy.day[0].path;
  }

  return (
    <div
      className="webapp-container p-6 border-box min-h-full flex flex-col 
      justify-between bg-cover bg-center"
      style={{ backgroundImage: `url(${getBackgroundImage("")})` }}>
      <div className="grid grid-cols-5 gap-y-10 max-md:grid-cols-2">
        <div className="max-sm:col-span-2 max-sm:flex max-sm:justify-center">
          <Location locationName={location} />
        </div>

        <div
          className="col-span-3 row-span-2 max-md:order-2 max-md:row-span-1 
        max-md:col-span-2">
          <CurrentWeatherArea />
        </div>

        <div className="max-md:order-2 max-md:col-span-2">
          <TemperatureArea maxTemp="20º C" minTemp="5º C" />
        </div>

        <div
          className="max-md:order-2 max-md:col-span-2 max-md:flex 
        max-md:justify-center max-md:mb-10">
          <WeatherDetailsArea />
        </div>

        <div className="max-md:order-1 max-sm:hidden">
          <AlertsArea />
        </div>
      </div>

      <div className="grid grid-cols-5">
        <div className="flex flex-col justify-end gap-1 max-sm:invisible">
          <ApiCredits name="Example.com" href="#" />
          <UnsplashCredits
            meta={{ imageUrl: "#", authorName: "Author", authorUrl: "#" }}
          />
        </div>

        <ForecastArea />

        <div className="self-end justify-self-end">
          <SettingsButton />
        </div>
      </div>
    </div>
  );
}

export default App;
