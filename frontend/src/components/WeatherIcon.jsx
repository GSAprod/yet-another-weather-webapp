import { 
  Sun, Moon,
  CloudSun, CloudMoon,
  Cloud,
  CloudFog,
  CloudRain,
  CloudSnow,
  CloudLightning
} from "@phosphor-icons/react"

import PropTypes from "prop-types";

/**
 * Weather icon selector
 */
export default function WeatherIcon({ condition, timeOfDay = "day", size }) {
  const iconSizeCss =
    size === "large"
      ? "h-16 w-auto fill-white"
      : "w-9 h-auto my-3 fill-white max-sm:my-1";

  switch (condition) {
    case "sunny":
    default:
      return timeOfDay === "day" ? (
        <Sun className={iconSizeCss} />
      ) : (
        <Moon className={iconSizeCss} />
      );
    case "partly-cloudy":
      return timeOfDay === "day" ? (
        <CloudSun className={iconSizeCss} />
      ) : (
        <CloudMoon className={iconSizeCss} />
      );
    case "cloudy":
      return <Cloud className={iconSizeCss} />;
    case "foggy":
      return <CloudFog className={iconSizeCss} />;
    case "drizzle":
    case "rain":
    case "showers":
      return <CloudRain className={iconSizeCss} />;
    case "snow":
      return <CloudSnow className={iconSizeCss} />;
    case "thunderstorm":
      return <CloudLightning className={iconSizeCss} />;
  }
}

WeatherIcon.propTypes = {
  condition: PropTypes.string,
  timeOfDay: PropTypes.oneOf(["day", "night"]),
  size: PropTypes.oneOf(["small", "large"]),
};
