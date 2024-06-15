import { useEffect, useState } from "react";

const default_settings = {
  temp_unit: "C",
  speed_unit: "kmh",
}

export default function useSettings() {
  const [settings, setSettings] = useState(default_settings);
  const [loaded, setLoaded] = useState(false);

  // attempt to load stored settings from localStorage when hook is called
  useEffect(() => {
    const settingsData = localStorage.getItem("settings");

    if (settingsData) {
      setSettings(JSON.parse(settingsData));
      setLoaded(true);
    }
  }, []);

  // store the changed setting onto localStorage
  useEffect(() => {
    if (loaded)
      localStorage.setItem("settings", JSON.stringify(settings));
  }, [settings, loaded]);

  function changeSettings(newSettings) {
    setSettings((prev) => ({
      ...prev,
      ...newSettings,
    }));
  }

  return [settings, changeSettings];
}