import PropTypes from "prop-types";
import { v4 as uuid } from "uuid";
import Forecast from "./Forecast";

/***
 * Element group containing <Forecast> components. Shows the forecast for the next
 * couple of days.
 */
export default function ForecastArea({ forecastData }) {
  return (
    <div
      className="col-span-3 justify-center flex gap-10 pb-7 
    max-sm:flex-col max-sm:gap-5">
      {forecastData && forecastData.map(dayForecast => (
        <Forecast key={uuid()} data={dayForecast} />
      ))}
    </div>
  );
}

ForecastArea.propTypes = {
  forecastData: PropTypes.arrayOf(PropTypes.exact({
    epoch_sec: PropTypes.number,
    condition: PropTypes.string,
    temp_max: PropTypes.number,
    temp_min: PropTypes.number
  }))
}