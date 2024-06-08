import LocationSearchResult from "./LocationSearchResult";
import PropTypes from "prop-types";

export default function LocationSearchResultsList({ resultsList }) {
  return (
    // TODO Enable scrolling
    <div>
      {resultsList.map(result => (
        <LocationSearchResult
          key={result.id}
          name={result.name}
          description={result.description}
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
};
