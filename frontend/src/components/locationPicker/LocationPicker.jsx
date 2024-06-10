import { useState } from "react";
import axios from "axios";
import { func } from "prop-types";
import FullScreenMenu from "../FullScreenMenu";
import LocationPickerSearchBar from "./LocationPickerSearchBar";
import LocationSearchResultsList from "./LocationSearchResultsList";
import LocationPickerError from "./LocationPickerError";

/**
 * Modal for searching and selecting a location for fetching the weather.
 * Appears when the Location label is selected on the main page.
 */
export default function LocationPicker({ closeFunction }) {
  // TODO Add favourite icon toggle
  const [isSearching, setIsSearching] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);

  const client = axios.create({
    baseURL: "http://localhost:3000",
  });

  async function searchLocation(searchTerm) {
    // Don't call the API if the search term is empty, instead, empty the results array
    if (searchTerm === "") {
      setSearchResults([]);
      setErrorMessage(null);
      return;
    }

    setIsSearching(true);
    try {
      const response = await client.get("/search_location?name=" + searchTerm, {
        timeout: 10000,
      });
      console.log(response.data)
      if (response.data.length === 0) {
        setErrorMessage("Could not find results for " + searchTerm + ".");
        setSearchResults([]);
        setIsSearching(false);
      } else {
        setSearchResults(response.data);
        setErrorMessage(null);
        setIsSearching(false);
      }

    } catch (error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the 200 range
        console.log("Error: ", error.response.status);
        console.log(error.response.headers);
        console.log(error.response.data);
        setErrorMessage(error.response.data.reason);
        setSearchResults([]);
        setIsSearching(false);
      } else if (error.request) {
        // After 3 attempts, show an internal error
        setErrorMessage("An internal error has occurred. Please try again later.");
        setSearchResults([]);
        setIsSearching(false);
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

      {(searchResults.length > 0 || errorMessage) && (
        <div className="border border-transparent border-b-white/20" />
      )}

      {errorMessage && (
        <LocationPickerError message={errorMessage} />
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
