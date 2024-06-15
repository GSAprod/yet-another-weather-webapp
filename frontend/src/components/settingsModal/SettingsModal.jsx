import { func } from "prop-types";
import FullScreenMenu from "../FullScreenMenu";
import SettingsSection from "./SettingsSection";
import SettingsItem from "./SettingsItem";

export default function SettingsModal({ closeFunction }) {
  return (
    <FullScreenMenu closeFunction={closeFunction} fullHeight={true}>
      <div className="mx-5 mt-5 mb-2 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Settings</h1>

        <button
          className="p-1 h-fit bg-black/25 rounded text-xs text-white/50 font-bold 
          select-none uppercase"
          onClick={closeFunction}>
          close
        </button>
      </div>
      <div className="mx-4 border border-transparent border-b-white/20 mb-5" />

      <SettingsSection title="Units and measures">
        <SettingsItem
          title="Temperature Unit"
          description="Change the unit used for showing temperatures on the app"
          type="listbox"
          values={[
            { name: "ºC", id: "C" },
            { name: "ºF", id: "F" },
          ]}
        />
        <SettingsItem
          title="Speed Unit"
          description="Change the unit used for showing the wind speed"
          type="listbox"
          values={[
            { name: "km/h", id: "kmh" },
            { name: "mph", id: "mph" },
            { name: "knots", id: "kn"},
          ]}
        />
      </SettingsSection>

      <SettingsSection title="Background">
        <SettingsItem
          title="Dynamic Background"
          description="Change the background depending on the current weather condition"
          type="switch"
        />
      </SettingsSection>
    </FullScreenMenu>
  );
}

SettingsModal.propTypes = {
  closeFunction: func.isRequired,
};
