import { func } from "prop-types";
import FullScreenMenu from "../FullScreenMenu";
import SettingsSection from "./SettingsSection";
import SettingsItem from "./SettingsItem";
import { useSettingsContext } from "../../context/SettingsContext";

export default function SettingsModal({ closeFunction }) {
  const { settings, changeSettings } = useSettingsContext();

  function handleValueChange(settingId, value) {
    const changed = {};
    changed[settingId] = value;
    changeSettings(changed);
  }

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

      <div className="overflow-scroll">
        <SettingsSection title="Units and measures">
          <SettingsItem
            title="Temperature Unit"
            description="Change the unit used for showing temperatures on the app"
            type="listbox"
            values={[
              { name: "ºC", id: "C" },
              { name: "ºF", id: "F" },
            ]}
            activeValue={settings.temp_unit}
            changeValue={(value) => handleValueChange("temp_unit", value)}
          />
          <SettingsItem
            title="Speed Unit"
            description="Change the unit used for showing the wind speed"
            type="listbox"
            values={[
              { name: "km/h", id: "kmh" },
              { name: "mph", id: "mph" },
              { name: "knots", id: "kn" },
            ]}
            activeValue={settings.speed_unit}
            changeValue={(value) => handleValueChange("speed_unit", value)}
          />
        </SettingsSection>

        <SettingsSection title="Background">
          <SettingsItem
            title="Dynamic Background"
            description="Change the background depending on the current weather condition"
            type="switch"
            activeValue={true}
          />
        </SettingsSection>
      </div>
    </FullScreenMenu>
  );
}

SettingsModal.propTypes = {
  closeFunction: func.isRequired,
};
