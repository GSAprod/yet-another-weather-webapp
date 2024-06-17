import { useContext, createContext } from "react";
import useSettings from "../hooks/useSettings";
import { node } from "prop-types";

const SettingsContext = createContext();

export function SettingsProvider({ children }) {
  const [settings, changeSettings] = useSettings();

  return (
    <SettingsContext.Provider value={{ settings, changeSettings }}>
      {children}
    </SettingsContext.Provider>
  );
}

export function useSettingsContext() {
  const context = useContext(SettingsContext);
  if (!context)
    throw new Error(
      "useSettingsContext must be used within a SettingsProvider"
    );
  return context;
}

SettingsProvider.propTypes = {
  children: node.isRequired,
};
