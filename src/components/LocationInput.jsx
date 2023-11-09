import { useState } from "react";
import PropTypes from "prop-types";

export default function LocationInput({ saveLocation }) {
  const [input, setInput] = useState("");

  function changeInput(e) {
    let newInput = e.target.value;

    setInput(newInput);
  }

  function handleSubmission(e) {
    e.preventDefault();

    if (input === "") return;

    saveLocation(input);
    setInput("");
  }

  return (
    <form onSubmit={handleSubmission}>
      <input
        type="text"
        name="location"
        id="location"
        placeholder="Enter a location..."
        value={input}
        onChange={changeInput}
      />

      <input type="submit" value="Search" />
    </form>
  );
}

LocationInput.propTypes = {
  saveLocation: PropTypes.func.isRequired,
};
