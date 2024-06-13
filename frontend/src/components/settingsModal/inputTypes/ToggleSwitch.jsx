import { useState } from "react";

export default function ListBox() {
  const [active, setActive] = useState(false);

  return (
    <div
      className="bg-black/20 box-content w-11 h-6 rounded-full border border-black/20
      shadow-md"
      onClick={() => setActive(!active)}>
      <div
        className={
          "w-4 h-4 rounded-full mt-1 duration-200 " +
          (active ? "bg-white ml-6" : "bg-white/40 ml-1")
        }></div>
    </div>
  );
}