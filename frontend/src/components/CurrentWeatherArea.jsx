import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import WeatherIcon from "./WeatherIcon";
import { useSettingsContext } from "../context/SettingsContext";
import { formatTemperatureUnit } from "../utils/unitFormatters";

/***
 * Component group on the top of the page. Shows the current date, weather status and
 * temperature.
 */
export default function CurrentWeatherArea({ currentWeather }) {
  const { settings } = useSettingsContext();

  const [weatherDateFormat, setWeatherDateFormat] = useState("");

  function epochToDateFormat(epoch_sec) {
    const date = new Date(epoch_sec * 1000);
    const format = {
      weekday: "long",
      day: "numeric",
      month: "long",
    };

    setWeatherDateFormat(date.toLocaleDateString(undefined, format));
  }

  useEffect(() => {
    return currentWeather && epochToDateFormat(currentWeather.epoch_sec);
  }, [currentWeather]);

  return (
    <div className="flex flex-col items-center">
      <p className="mt-10 mb-4 text-lg max-md:mt-3">{weatherDateFormat}</p>

      <div className="text-8xl font-bold mb-2">
        {currentWeather && currentWeather.temp}
        {formatTemperatureUnit(settings.temp_unit)}
      </div>

      <div className="flex items-center gap-2">
        <WeatherIcon
          condition={currentWeather && currentWeather.condition}
          size="large"
        />

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
    is_day: PropTypes.bool,
  }),
};
