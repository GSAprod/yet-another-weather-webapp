import MapPinIcon from "../assets/icons/map-pin-fill.svg?react";
import { string } from "prop-types";

export default function Location({ locationName }) {
  return (
    <div className="w-fit grid grid-cols-[auto auto] gap-x-2">
      <MapPinIcon className="w-4 h-auto my-auto fill-white" />

      <div className="align-baseline">{locationName}</div>

      <div className="col-start-2 text-xs font-bold uppercase text-white/50">
        Edit location
      </div>
    </div>
  );
}

Location.propTypes = {
  locationName: string,
};
