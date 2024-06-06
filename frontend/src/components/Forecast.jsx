import PropTypes from "prop-types";
import WeatherIcon from "./WeatherIcon";

/***
 * Element representing a forecast for one of the next days.
 * Located at the bottom-center of the page.
 */
export default function Forecast({ data }) {

  // Convert the date given into an abbreviated form of a weekday.
  function epochToWeekDay() {
    const date = new Date(data.epoch_sec * 1000);
    const options = {
      weekday: "short",
    };

    return date.toLocaleDateString(undefined, options);
  }

  return (
    <div className="flex flex-col items-center max-sm:flex-row max-sm:justify-around">
      <div>{epochToWeekDay()}</div>

      <div className="flex flex-col items-center max-sm:flex-row max-sm:w-2/5 max-sm:justify-between">
        <div title={data.condition}>
          <WeatherIcon condition={data.condition} size="small" />
        </div>

        <div className="flex flex-col items-center max-sm:items-end">
          <div className="font-bold text-lg mb-1 max-sm:-mb-1">
            {data.temp_max}º C
          </div>
          <div className="max-sm:text-sm">{data.temp_min}º C</div>
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
    temp_min: PropTypes.number,
  }),
};
