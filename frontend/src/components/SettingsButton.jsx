import SettingsIcon from "../assets/icons/gear-six.svg?react";

export default function SettingsButton() {
  return (
    <div
      className="p-1 inline-block rounded-md bg-white/10 hover:bg-white/30 
      hover:duration-300 w-min h-min backdrop-blur cursor-pointer">
      <SettingsIcon className="w-6 h-auto my-auto fill-white" />
    </div>
  );
}