import PropTypes from "prop-types";
import { v4 as uuid } from "uuid";
import { CheckSquare } from "@phosphor-icons/react";
import WeatherAlert from "./WeatherAlert";

export default function AlertsArea({ alerts }) {
  // Alerts will be shown if the prop is a non-empty list. Otherwise, 
  // we will just show a "No warnings issued" text
  return alerts && alerts.length != [] ? (
    <div className="flex flex-col gap-3">
      {alerts.map((item) => (
        <WeatherAlert alertData={item} key={uuid()} />
      ))}
    </div>
  ) : (
    <div className="flex gap-3 justify-end h-fit">
      <div className="text-white/50 text-end">No warnings issued</div>

      <CheckSquare className="w-4 h-auto my-auto fill-white/50 shrink-0" />
    </div>
  );
}

AlertsArea.propTypes = {
  alerts: PropTypes.arrayOf(
    PropTypes.exact({
      name: PropTypes.string,
      description: PropTypes.string,
      severity: PropTypes.string,
    })
  ),
};
