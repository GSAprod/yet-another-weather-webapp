import { func } from "prop-types";
import FullScreenMenu from "../FullScreenMenu";
import MagnifyingGlass from "../../assets/icons/magnifying-glass.svg?react";

export default function LocationPicker({ closeFunction }) {
  // TODO Change full height to false and add a search results area
  return (
    <FullScreenMenu closeFunction={closeFunction} fullHeight={true}>
      <div className="p-5 flex align-center gap-2 border border-transparent border-b-white/20">
        <MagnifyingGlass className="w-6 h-auto fill-white" />

        <form action="#" className="w-full">
          <input
            className="w-full bg-transparent outline-none"
            placeholder="Search for a city, country or zip code"
            type="text"
            name="locationInput"
            id="locationInput"
          />
        </form>
      </div>
    </FullScreenMenu>
  );
}

LocationPicker.propTypes = {
  closeFunction: func.isRequired,
};
