import { useState } from "react";
import LocationSearchResult from "./LocationSearchResult";
import PropTypes from "prop-types";

export default function LocationSearchResultsList({ resultsList, onSelect }) {
  const [focusedIndex, setFocusedIndex] = useState(-1);

  function changeFocus(index, direction) {
    const newFocusedIndex =  index + (direction === "up" ? -1 : 1);
    if (newFocusedIndex < 0 || newFocusedIndex >= resultsList.map) return;

    setFocusedIndex(newFocusedIndex);
  }

  return (
    // TODO Enable scrolling
    <div className="min-h-0 overflow-scroll">
      {resultsList.map((result, index) => (
        <LocationSearchResult
          key={result.id}
          name={result.name}
          description={result.description}
          onSelect={() => onSelect(result.id)}
          changeFocus={(direction) => changeFocus(index, direction)}
          focused={focusedIndex === index}
        />
      ))}
    </div>
  );
}

LocationSearchResultsList.propTypes = {
  resultsList: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number,
      latitude: PropTypes.number,
      longitude: PropTypes.number,
      name: PropTypes.string,
      description: PropTypes.string,
    })
  ),
  onSelect: PropTypes.func.isRequired,
};
