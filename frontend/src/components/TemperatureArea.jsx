import { number } from "prop-types";

/**
 * Component group, used to display the min and max temperatures on a given
 * day. Shown in the top-right corner of the main page.
 */
export default function TemperatureArea({ maxTemp, minTemp }) {
  return (
    <div className="flex gap-5 justify-end max-md:justify-center">
      <div className="flex flex-col gap-1 max-md:text-center">
        <div>Max. Temp</div>
        <div className="text-lg font-bold">{maxTemp}º C</div>
      </div>

      <div className="flex flex-col gap-1 max-md:text-center">
        <div>Min. Temp</div>
        <div className="text-lg font-bold">{minTemp}º C</div>
      </div>
    </div>
  );
}

TemperatureArea.propTypes = {
  maxTemp: number,
  minTemp: number,
};
