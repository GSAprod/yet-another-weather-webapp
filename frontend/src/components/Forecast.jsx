import PropTypes from "prop-types";
import CloudFogIcon from "../assets/icons/weather/cloud-fog.svg?react";
import WeatherIcon from "./WeatherIcon";

export default function Forecast({ data }) {

  // TODO Test
  function epochToWeekDay() {
    const date = new Date(data.epoch_sec * 1000);
    const options = {
      weekday: "short"
    }

    return date.toLocaleDateString(undefined, options);
  }

  // TODO Make this part configurable using props
  return (
    <div className="flex flex-col items-center max-sm:flex-row max-sm:justify-around">
      <div>Sat</div>

      <div className="flex flex-col items-center max-sm:flex-row max-sm:w-2/5 max-sm:justify-between">
        <WeatherIcon icon={CloudFogIcon} size="small" />

        <div className="flex flex-col items-center max-sm:items-end">
          <div className="font-bold text-lg mb-1 max-sm:-mb-1">21º C</div>
          <div className="max-sm:text-sm">10º C</div>
        </div>
      </div>
    </div>
  );
}

Forecast.propTypes = {
  data: PropTypes.exact({
      epoch_sec: PropTypes.number,
      condition: PropTypes.string,
      temp_max: PropTypes.number,
      temp_min: PropTypes.number
  })
}