import PropTypes from "prop-types";
import WeatherDetail from "./WeatherDetail";

import WaterDropIcon from "../assets/icons/drop-bold.svg?react";
import WindIcon from "../assets/icons/wind-bold.svg?react";
import UmbrellaIcon from "../assets/icons/umbrella-bold.svg?react";
import SunglassesIcon from "../assets/icons/sunglasses-bold.svg?react";

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
          icon={WaterDropIcon}
          name="Humidity"
          value={`${weatherDetails.humidity}%`}
        />
      )}

      {weatherDetails && weatherDetails.wind_speed && (
        <WeatherDetail
          icon={WindIcon}
          name="Wind speed"
          value={`${weatherDetails.wind_speed} km/h ${getWindDirection()}`}
        />
      )}

      {weatherDetails && weatherDetails.chance_of_rain && (
        <WeatherDetail
          icon={UmbrellaIcon}
          name="Chance of rain"
          value={`${weatherDetails.chance_of_rain}%`}
        />
      )}

      {weatherDetails && weatherDetails.uv_index && (
        <WeatherDetail
          icon={SunglassesIcon}
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
