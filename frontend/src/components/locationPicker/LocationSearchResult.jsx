import { string, func, bool } from "prop-types";
import { useEffect, useRef } from "react";

export default function LocationSearchResult({
  name,
  description,
  onSelect,
  changeFocus,
  focused,
}) {
  const item = useRef(null);

  useEffect(() => {
    if (focused) {
      item.current.focus();
    }
  }, [focused]);

  function handleKeyDown(e) {
    switch (e.key) {
      case "Enter":
        onSelect();
        break;
      case "ArrowDown":
        e.preventDefault();
        changeFocus("down");
        break;
      case "ArrowUp":
        e.preventDefault();
        changeFocus("up");
        break;
      default:
        break;
    }
  }

  return (
    <div
      className={
        "px-5 py-2 my-1 hover:bg-black/20 focus:bg-black/20 outline-none " +
        "active:bg-black/30 cursor-pointer"
      }
      ref={item}
      tabIndex={0}
      onClick={onSelect}
      onKeyDown={handleKeyDown}>
      <div className="font-bold">{name}</div>
      <div className="text-sm">{description}</div>
    </div>
  );
}

LocationSearchResult.propTypes = {
  name: string.isRequired,
  description: string,
  onSelect: func.isRequired,
  changeFocus: func.isRequired,
  focused: bool,
};
