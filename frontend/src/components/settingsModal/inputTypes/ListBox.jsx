import PropTypes from "prop-types";
import { useEffect, useState } from "react";

export default function ListBox({ options, active, changeValue }) {
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    setSelected(active);
  }, [active]);

  function handleSelection(id) {
    changeValue(id);
    setSelected(id);
  }

  return (
    <div className="flex w-fit h-fit rounded shadow-md">
      {options.map((option) => (
        <div
          className={
            "px-2.5 py-1 h-fit text-xs text-nowrap w-max first:rounded-l " +
            "last:rounded-r cursor-pointer hover:brightness-90 " +
            (selected === option.id
              ? "bg-white/70 text-black "
              : "bg-black/20 ")
          }
          key={option.id}
          onClick={() => handleSelection(option.id)}>
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
  ).isRequired,
  active: PropTypes.string,
  changeValue: PropTypes.func.isRequired,
};
