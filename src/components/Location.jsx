import MapPinIcon from "../assets/icons/map-pin-fill.svg?react";
import { string } from "prop-types";

export default function Location({ locationName }) {
  return (
    <div
      className="group w-fit h-fit grid grid-cols-[auto auto] gap-x-2 
    max-sm:flex max-sm:flex-col max-sm:text-center cursor-pointer">
      <MapPinIcon className="w-4 h-auto my-auto fill-white max-sm:hidden" />

      <div className="align-baseline">{locationName}</div>

      <div
        className="col-start-2 text-xs font-bold uppercase text-white/50 
      group-hover:text-white/90 group-hover:duration-200">
        Edit location
      </div>
    </div>
  );
}

Location.propTypes = {
  locationName: string,
};
