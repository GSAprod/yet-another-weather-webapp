import WaterDropIcon from "../assets/icons/drop-bold.svg?react";
import WindIcon from "../assets/icons/wind-bold.svg?react";
import UmbrellaIcon from "../assets/icons/umbrella-bold.svg?react";
import SunglassesIcon from "../assets/icons/sunglasses-bold.svg?react";

import WeatherDetail from "./WeatherDetail";

export default function WeatherDetailsArea() {
  return (
    <div className="flex flex-col gap-3 max-md:items-left max-md:inline-flex max-md:gap-1">
      <WeatherDetail icon={WaterDropIcon} name="Humidity" value="85%" />
      <WeatherDetail icon={WindIcon} name="Wind speed" value="20 km/h (NW)" />
      <WeatherDetail icon={UmbrellaIcon} name="Chance of rain" value="8%" />
      <WeatherDetail icon={SunglassesIcon} name="UV Index" value="3" />
    </div>
  );
}
