import { MapPin } from "@phosphor-icons/react";

import { func, string } from "prop-types";

/***
 * Element that shows the selected location for a forecast.
 * When clicked, opens a <LocationPicker> modal.
 */
export default function Location({ locationName, openPickerFunction }) {
  return (
    <div
      className="group w-fit h-fit grid grid-cols-[auto auto] gap-x-2 
    max-sm:flex max-sm:flex-col max-sm:text-center cursor-pointer"
      onClick={openPickerFunction}>
      <MapPin
        weight="fill"
        className="w-4 h-auto my-auto fill-white max-sm:hidden"
      />

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
  openPickerFunction: func.isRequired,
};
