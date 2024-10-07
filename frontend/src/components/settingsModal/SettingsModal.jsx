import { func } from "prop-types";
import FullScreenMenu from "../FullScreenMenu";
import SettingsSection from "./SettingsSection";
import SettingsItem from "./SettingsItem";
import { useSettingsContext } from "../../context/SettingsContext";
import { useEffect, useState } from "react";

export default function SettingsModal({ onClose, onChanged }) {
  const { settings, changeSettings } = useSettingsContext();
  const [loaded, setLoaded] = useState(false);

  const [toChange, setToChange] = useState({});

  function handleValueChange(settingId, value) {
    if (settingId in settings && settings[settingId] === value) {
      // If the value is reverted to the previous settings, delete it from the
      // toChange variable. This will prevent unnecessary writes to localStorage
      // and possible API calls that need to use the altered settings
      setToChange((prev) => {
        const changed = { ...prev };
        delete changed[settingId];
        return changed;
      });
    } else {
      // If the value is different from the previous settings, add it to the list of
      // things to change
      setToChange((prev) => {
        const changed = { ...prev };
        changed[settingId] = value;
        return changed;
      });
    }
  }

  function handleClose() {
    // If no settings are changed, simply close the menu without declaring changes
    // were made
    if (Object.keys(toChange).length === 0) {
      onClose();
      return;
    }

    // In this approach, the settings are only applied when exiting the SettingsModal
    changeSettings(toChange);

    // The useEffect hook below will then close the modal as soon as the
    // "settings" state is changed
  }

  useEffect(() => {
    // Prevent onChanged to be called while settings are loaded
    if (!loaded) {
      setLoaded(true);
      return;
    }
    onChanged();
  }, [settings]);

  return (
    <FullScreenMenu closeFunction={handleClose} fullHeight={true}>
      <div className="mx-5 mt-5 mb-2 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Settings</h1>

        <button
          className="p-1 h-fit bg-black/25 rounded text-xs text-white/50 font-bold 
          select-none uppercase"
          onClick={handleClose}>
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

        <SettingsSection title="About">
          <SettingsItem title="Made by GSA prod." description="Version 0.1.1" />
          <SettingsItem
            title="Developed using React + Vite"
            description="APIs used:           Unsplash, Open-meteo.com"
          />
        </SettingsSection>
        {/*<SettingsSection title="Background">
          <SettingsItem
            title="Dynamic Background"
            description="Change the background depending on the current weather condition"
            type="switch"
            activeValue={true}
          />
        </SettingsSection>*/}
      </div>
    </FullScreenMenu>
  );
}

SettingsModal.propTypes = {
  onClose: func.isRequired,
  onChanged: func.isRequired,
};
