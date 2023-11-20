import { string } from "prop-types";

export default function TemperatureArea({ maxTemp, minTemp }) {
  return (
    <div className="flex gap-5">
      <div className="flex flex-col gap-1">
        <div>Max. Temp</div>
        <div className="text-lg font-bold">{maxTemp}</div>
      </div>
			
      <div className="flex flex-col gap-1">
        <div>Min. Temp</div>
        <div className="text-lg font-bold">{minTemp}</div>
      </div>
    </div>
  );
}

TemperatureArea.propTypes = {
  maxTemp: string,
  minTemp: string,
};
