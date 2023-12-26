import { useState } from "react";
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

function App() {
  const [location, setLocation] = useState("Lisbon, Portugal");

  function getBackgroundImage() {
    return imgMetadata.foggy.day[0].path;
  }

  console.log(import.meta.env.VITE_PUBLIC_URL + getBackgroundImage(""));

  return (
    <div
      className="webapp-container p-6 border-box h-full flex flex-col justify-between bg-cover"
      style={{ backgroundImage: `url(${getBackgroundImage("")})` }}>
      <div className="grid grid-cols-5">
        <div className="flex flex-col gap-10">
          <Location locationName={location} />

          <WeatherDetailsArea />
        </div>

        <CurrentWeatherArea />

        <div className="flex flex-col gap-10">
          <TemperatureArea maxTemp="20º C" minTemp="5º C" />
          <AlertsArea />
        </div>
      </div>

      <div className="grid grid-cols-5">
        <div className="flex flex-col justify-end">
          <ApiCredits />
          <UnsplashCredits />
        </div>

        <ForecastArea />

        <SettingsButton />
      </div>
    </div>
  );
}

export default App;
