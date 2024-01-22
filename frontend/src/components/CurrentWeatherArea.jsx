import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import CloudSunIcon from "../assets/icons/weather/cloud-sun.svg?react";
import WeatherIcon from "./WeatherIcon";

export default function CurrentWeatherArea({ currentWeather }) {
  const [weatherDateFormat, setWeatherDateFormat] = useState("");

  function epochToDateFormat(epoch_sec) {
    const date = new Date(epoch_sec * 1000);
    const format = {
      weekday: "long",
      day: "numeric",
      month: "long"
    };

    setWeatherDateFormat(date.toLocaleDateString(undefined, format));
  }

  // TODO Rewrite this function to update the icon according to currentWeatherData.condition
  function updateWeatherIcon() {
    return CloudSunIcon;
  }

  useEffect(() => {
    return (
      currentWeather && epochToDateFormat(currentWeather.epoch_sec)
    );
  }, [currentWeather]);

  return (
    <div className="flex flex-col items-center">
      <p className="mt-10 mb-4 text-lg max-md:mt-3">{weatherDateFormat}</p>

      <div className="text-8xl font-bold mb-2">
        {currentWeather && currentWeather.temp}º C
      </div>

      <div className="flex items-center gap-2">
        <WeatherIcon icon={updateWeatherIcon()} size="large" />

        <div className="text-5xl capitalize">
          {currentWeather && currentWeather.condition}
        </div>
      </div>
    </div>
  );
}

CurrentWeatherArea.propTypes = {
  currentWeather: PropTypes.exact({
    epoch_sec: PropTypes.number,
    temp: PropTypes.number,
    condition: PropTypes.string,
  }),
};
