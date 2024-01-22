import PropTypes from "prop-types";
import { v4 as uuid } from "uuid";
import CheckSquareIcon from "../assets/icons/check-square-bold.svg?react";
import WeatherAlert from "./WeatherAlert";

export default function AlertsArea({ alerts }) {
  //! Change the if to alerts && alerts != []
  return alerts != undefined && alerts.length > 0 ? (
    <div className="flex flex-col gap-3">
      {alerts.map((item) => (
        <WeatherAlert alertData={item} key={uuid()} />
      ))}
    </div>
  ) : (
    <div className="flex gap-3 justify-end h-fit">
      <div className="text-white/50 text-end">No warnings issued</div>

      <CheckSquareIcon className="w-4 h-auto my-auto fill-white/50 shrink-0" />
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
