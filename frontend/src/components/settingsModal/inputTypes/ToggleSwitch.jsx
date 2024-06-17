import { bool, func } from "prop-types";
import { useEffect, useState } from "react";

export default function ToggleSwitch({ changeValue, isTrue }) {
  const [active, setActive] = useState(isTrue);

  useEffect(() => {
    setActive(isTrue);
  }, [isTrue]);

  async function handleToggle() {
    await changeValue(!active);
    setActive((prevVal) => !prevVal);
  }

  return (
    <div
      className={
        "bg-black/20 box-content w-11 h-6 shrink-0 rounded-full shadow-md " +
        "cursor-pointer hover:brightness-90" +
        (active ? " bg-white/20" : "")
      }
      onClick={() => handleToggle()}>
      <div
        className={
          "w-4 h-4 rounded-full mt-1 duration-200 " +
          (active ? "bg-white ml-6" : "bg-white/50 ml-1")
        }></div>
    </div>
  );
}

ToggleSwitch.propTypes = {
  changeValue: func.isRequired,
  isTrue: bool,
};
