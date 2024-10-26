import { GearSix as SettingsIcon } from "@phosphor-icons/react";
import { func } from "prop-types";

export default function SettingsButton({ openSettingsFunction }) {
  return (
    <div
      className="p-1 inline-block rounded-md cursor-pointer bg-white/10 hover:bg-black/20 
      hover:duration-300 active:bg-black/40 active:duration-0 w-min h-min 
      backdrop-blur-md shadow shadow-black/25 border border-white/20"
      onClick={openSettingsFunction}>
      <SettingsIcon className="w-6 h-auto my-auto fill-white" />
    </div>
  );
}

SettingsButton.propTypes = {
  openSettingsFunction: func.isRequired,
};
