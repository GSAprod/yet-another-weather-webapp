import PropTypes from "prop-types";
import WeatherDetail from "./WeatherDetail";

import { Drop, Wind, Umbrella, Sunglasses } from "@phosphor-icons/react";

/**
 * Component group showing less important weather details about the current forecast,
 * more specifically, the humidity, wind speed, chance of rain and UV index.
 */
export default function WeatherDetailsArea({ weatherDetails }) {
  function getWindDirection() {
    return (
      weatherDetails.wind_direction && `(${weatherDetails.wind_direction})`
    );
  }

  return (
    <div className="flex flex-col gap-3 max-md:items-left max-md:inline-flex max-md:gap-1">
      {weatherDetails && weatherDetails.humidity && (
        <WeatherDetail
          icon={Drop}
          name="Humidity"
          value={`${weatherDetails.humidity}%`}
        />
      )}

      {weatherDetails && weatherDetails.wind_speed && (
        <WeatherDetail
          icon={Wind}
          name="Wind speed"
          value={`${weatherDetails.wind_speed} km/h ${getWindDirection()}`}
        />
      )}

      {weatherDetails && weatherDetails.chance_of_rain != undefined && (
        <WeatherDetail
          icon={Umbrella}
          name="Chance of rain"
          value={`${weatherDetails.chance_of_rain}%`}
        />
      )}

      {weatherDetails && weatherDetails.uv_index && (
        <WeatherDetail
          icon={Sunglasses}
          name="UV Index"
          value={`${weatherDetails.uv_index}`}
        />
      )}
    </div>
  );
}

WeatherDetailsArea.propTypes = {
  weatherDetails: PropTypes.shape({
    humidity: PropTypes.number,
    wind_speed: PropTypes.number,
    wind_direction: PropTypes.string,
    chance_of_rain: PropTypes.number,
    uv_index: PropTypes.number,
  }),
};
