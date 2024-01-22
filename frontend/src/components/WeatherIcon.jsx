import PropTypes from "prop-types";

export default function WeatherIcon(props) {
  return props.size == "large" ? (
    <props.icon className="h-16 w-auto fill-white" />
  ) : (
    <props.icon className="w-9 h-auto my-3 fill-white max-sm:my-1" />
  );
}

WeatherIcon.propTypes = {
  icon: PropTypes.elementType,
  size: PropTypes.oneOf(["small", "large"]),
};
