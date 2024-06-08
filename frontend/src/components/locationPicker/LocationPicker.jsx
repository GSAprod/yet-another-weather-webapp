import { useState } from "react";
import axios from "axios";
import { func } from "prop-types";
import FullScreenMenu from "../FullScreenMenu";
import LocationPickerSearchBar from "./LocationPickerSearchBar";
import LocationSearchResultsList from "./LocationSearchResultsList";

/**
 * Modal for searching and selecting a location for fetching the weather.
 * Appears when the Location label is selected on the main page.
 */
export default function LocationPicker({ closeFunction }) {
  // TODO Add favourite icon toggle
  const [isSearching, setIsSearching] = useState(false);
  const [searchResults, setSearchResults] = useState([]);

  const client = axios.create({
    baseURL: "http://localhost:3000",
  });

  async function searchLocation(searchTerm) {
    // Don't call the API if the search term is empty, instead, empty the results array
    if (searchTerm === "") {
      setSearchResults([]);
      return;
    }

    setIsSearching(true);
    try {
      const response = await client.get("/search_location?name=" + searchTerm, {
        timeout: 10000,
      });
      setSearchResults(response.data);
      setIsSearching(false);
    } catch (error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the 200 range
        console.log("Error: ", error.response.status);
        console.log(error.response.headers);
        console.log(error.response.data);
        // TODO
      } else if (error.request) {
        // After 3 attempts, show an internal error
        // TODO
      }
    }
  }

  return (
    <FullScreenMenu closeFunction={closeFunction} fullHeight={true}>
      <LocationPickerSearchBar
        closeFunction={closeFunction}
        searchLocation={searchLocation}
        isSearching={isSearching}
      />

      {searchResults.length > 0 && (
        <div className="border border-transparent border-b-white/20" />
      )}

      {searchResults.length > 0 && (
        <LocationSearchResultsList resultsList={searchResults} />
      )}
    </FullScreenMenu>
  );
}

LocationPicker.propTypes = {
  closeFunction: func.isRequired,
};
