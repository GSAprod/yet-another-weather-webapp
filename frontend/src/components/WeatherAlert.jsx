import PropTypes from "prop-types";
import WarningIcon from "../assets/icons/warning-bold.svg?react";

/**
 * Component showing a single weather alert.
 * Displayed below the min and max temperatures, in the top-corner of the main webpage.
 */
export default function WeatherAlert({ alertData }) {
  function selectWarningColor() {
    // Depending on the severity of a situation, we want to show the alert icon
    // using a different color.
    if (alertData == undefined) return "fill-yellow-400";

    switch (alertData.severity) {
      case "very-high":
        return "fill-red-500";
      case "high":
        return "fill-orange-400";
      case "moderate":
      default:
        return "fill-yellow-300";
    }
  }

  return (
    <div className="flex gap-3 justify-end h-fit">
      <div className="text-white text-end">{alertData.name}</div>

      <WarningIcon className={`w-4 h-auto mt-1 mb-auto shrink-0 ${selectWarningColor()}`} />
    </div>
  );
}

WeatherAlert.propTypes = {
  alertData: PropTypes.exact({
    name: PropTypes.string,
    description: PropTypes.string,
    severity: PropTypes.string,
  }),
};
