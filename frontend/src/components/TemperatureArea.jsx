import { number } from "prop-types";
import { useSettingsContext } from "../context/SettingsContext";
import { formatTemperatureUnit } from "../utils/unitFormatters";

/**
 * Component group, used to display the min and max temperatures on a given
 * day. Shown in the top-right corner of the main page.
 */
export default function TemperatureArea({ maxTemp, minTemp }) {
  const { settings } = useSettingsContext();


  return (
    <div className="flex gap-5 justify-end max-md:justify-center">
      <div className="flex flex-col gap-1 max-md:text-center">
        <div>Max. Temp</div>
        <div className="text-lg font-bold">{maxTemp}{formatTemperatureUnit(settings.temp_unit)}</div>
      </div>

      <div className="flex flex-col gap-1 max-md:text-center">
        <div>Min. Temp</div>
        <div className="text-lg font-bold">{minTemp}{formatTemperatureUnit(settings.temp_unit)}</div>
      </div>
    </div>
  );
}

TemperatureArea.propTypes = {
  maxTemp: number,
  minTemp: number,
};
