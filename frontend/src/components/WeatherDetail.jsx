import PropTypes, { string } from "prop-types";

/**
 * Shows a single property of the current weather, such as humidity and wind speed.
 * Displayed in the top-right of the webpage, below the location label.
 */
export default function WeatherDetail(props) {
  return (
    <div
      className="w-fit grid grid-cols-[auto auto] gap-x-2 max-md:flex 
    max-md:items-center max-md:gap-1">
      <props.icon className="w-4 h-auto my-auto fill-white max-md:fill-white/50" />

      <div className="align-baseline mb-0 max-md:text-white/50 max-md:order-1">
        {props.name}
      </div>
      <div className="col-start-2 md:text-lg md:font-bold max-md:text-white/50">
        {props.value}
      </div>
    </div>
  );
}

WeatherDetail.propTypes = {
  icon: PropTypes.elementType,
  name: string,
  value: string,
};
