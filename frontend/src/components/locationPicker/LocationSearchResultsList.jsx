import LocationSearchResult from "./LocationSearchResult";
import PropTypes from "prop-types";

export default function LocationSearchResultsList({ resultsList, onSelect }) {
  return (
    // TODO Enable scrolling
    <div className="min-h-0 overflow-scroll">
      {resultsList.map(result => (
        <LocationSearchResult
          key={result.id}
          name={result.name}
          description={result.description}
          onSelect={() => onSelect(result.id)}
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
