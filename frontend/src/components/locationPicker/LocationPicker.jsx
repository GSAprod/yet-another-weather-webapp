import { func } from "prop-types";
import FullScreenMenu from "../FullScreenMenu";
import MagnifyingGlass from "../../assets/icons/magnifying-glass.svg?react";
import LocationSearchResult from "./LocationSearchResult";

/**
 * Modal for searching and selecting a location for fetching the weather.
 * Appears when the Location label is selected on the main page.
 */
export default function LocationPicker({ closeFunction }) {
  // TODO Change full height to false and add a search results area
  // TODO Add favourite icon toggle
  return (
    <FullScreenMenu closeFunction={closeFunction} fullHeight={false}>
      <div className="p-5 flex gap-2 border border-transparent border-b-white/20">
        <MagnifyingGlass className="w-6 h-auto fill-white" />

        <form action="#" className="w-full flex align-center">
          <input
            className="w-full bg-transparent outline-none"
            placeholder="Search for a city, country or zip code"
            type="text"
            name="locationInput"
            id="locationInput"
          />
        </form>

        <button
          className="p-1 bg-black/25 rounded text-xs text-white/50 font-bold 
          select-none"
          onClick={closeFunction}>
          ESC
        </button>
      </div>

      <LocationSearchResult name={"Lisbon"} description={"Portugal"} />
      <LocationSearchResult name={"Amsterdam"} description={"Netherlands"} />
      <LocationSearchResult name={"Berlin"} description={"Germany"} />
      <LocationSearchResult name={"Madrid"} description={"Spain"} />
    </FullScreenMenu>
  );
}

LocationPicker.propTypes = {
  closeFunction: func.isRequired,
};
