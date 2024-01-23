import SunIcon from "../assets/icons/weather/sun.svg?react";
import MoonIcon from "../assets/icons/weather/moon.svg?react";
import CloudSunIcon from "../assets/icons/weather/cloud-sun.svg?react";
import CloudMoonIcon from "../assets/icons/weather/cloud-moon.svg?react";
import CloudIcon from "../assets/icons/weather/cloud.svg?react";
import CloudFogIcon from "../assets/icons/weather/cloud-fog.svg?react";
import CloudRainIcon from "../assets/icons/weather/cloud-rain.svg?react";
import CloudSnowIcon from "../assets/icons/weather/cloud-snow.svg?react";
import CloudLightningIcon from "../assets/icons/weather/cloud-lightning.svg?react";

import PropTypes from "prop-types";

export default function WeatherIcon({ condition, timeOfDay, size }) {
  const iconSizeCss =
    size === "large"
      ? "h-16 w-auto fill-white"
      : "w-9 h-auto my-3 fill-white max-sm:my-1";

  switch (condition) {
    case "sunny":
    default:
      return timeOfDay === "night" ? (
        <MoonIcon className={iconSizeCss} />
      ) : (
        <SunIcon className={iconSizeCss} />
      );
    case "partly-cloudy":
      return timeOfDay === "night" ? (
        <CloudSunIcon className={iconSizeCss} />
      ) : (
        <CloudMoonIcon className={iconSizeCss} />
      );
    case "cloudy":
      return <CloudIcon className={iconSizeCss} />;
    case "foggy":
      return <CloudFogIcon className={iconSizeCss} />;
    case "drizzle":
    case "rain":
    case "showers":
      return <CloudRainIcon className={iconSizeCss} />;
    case "snow":
      return <CloudSnowIcon className={iconSizeCss} />;
    case "thunderstorm":
      return <CloudLightningIcon className={iconSizeCss} />;
  }
}

WeatherIcon.propTypes = {
  condition: PropTypes.string,
  timeOfDay: PropTypes.oneOf(["day", "night"]),
  size: PropTypes.oneOf(["small", "large"]),
};
