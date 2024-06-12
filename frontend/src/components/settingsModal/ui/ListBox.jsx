import PropTypes from "prop-types";
import { useState } from "react";

export default function ListBox({ options }) {
  const [selected, setSelected] = useState(null);

  return (
    <div className="inline-flex w-fit">
      {options.map((option) => (
        <div
          className={"px-2.5 py-1 text-xs bg-black/20 first:rounded-l last:rounded-r " +
            "cursor-pointer " + (selected === option.id ? "bg-white/70 text-black " : "")}
          key={option.id}
          onClick={() => setSelected(option.id)}>
          {option.name}
        </div>
      ))}
    </div>
  );
}

ListBox.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.exact({
      name: PropTypes.string,
      id: PropTypes.string,
    })
  ),
};
