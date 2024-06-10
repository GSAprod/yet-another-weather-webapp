import { bool, func } from "prop-types";
import { CircleNotch, MagnifyingGlass } from "@phosphor-icons/react";
import { useEffect, useState } from "react";

const SEARCH_DELAY = 1500;

export default function LocationPickerSearchBar({
  closeFunction,
  searchLocation,
  isSearching,
  focusOnResults,
}) {
  const [searchTerm, setSearchTerm] = useState("");
  const [lastSearchTerm, setLastSearchTerm] = useState("");
  const [searchDelay, setSearchDelay] = useState();

  function handleSubmit(e) {
    e.preventDefault();

    if (searchDelay) clearTimeout(searchDelay);
    startSearch();
    focusOnResults();
  }

  // This function sets a timer after a change in the input. This timer triggers
  // the search procedure after it runs out.
  useEffect(() => {
    if (searchDelay) clearTimeout(searchDelay);
    setSearchDelay(setTimeout(startSearch, SEARCH_DELAY));
  }, [searchTerm]);

  function startSearch() {
    // Don't re-run the search if the search term is the same as last time.
    if (searchTerm === lastSearchTerm) return;
    setLastSearchTerm(searchTerm);

    searchLocation(searchTerm);
  }

  return (
    <div className="p-5 flex gap-2">
      {isSearching ? (
        <CircleNotch className="w-6 h-auto fill-white animate-spin" />
      ) : (
        <MagnifyingGlass className="w-6 h-auto fill-white" />
      )}

      <form action="#" className="w-full flex align-center" onSubmit={handleSubmit}>
        <input
          className="w-full bg-transparent outline-none"
          placeholder="Search location"
          type="text"
          name="locationInput"
          id="locationInput"
          autoComplete="off"
          autoFocus
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </form>
      <button
        className="p-1 bg-black/25 rounded text-xs text-white/50 font-bold 
          select-none"
        onClick={closeFunction}>
        ESC
      </button>
    </div>
  );
}

LocationPickerSearchBar.propTypes = {
  closeFunction: func.isRequired,
  searchLocation: func.isRequired,
  isSearching: bool.isRequired,
  focusOnResults: func.isRequired,
};
