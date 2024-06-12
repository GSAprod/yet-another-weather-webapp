import { func } from "prop-types";
import FullScreenMenu from "../FullScreenMenu";
import SettingsSection from "./SettingsSection";
import SettingsItem from "./SettingsItem";

export default function SettingsModal({ closeFunction }) {
  return (
    <FullScreenMenu closeFunction={closeFunction} fullHeight={true}>
      <h1 className="px-5 pt-5 pb-2 text-2xl font-bold">Settings</h1>
      <div className="mx-4 border border-transparent border-b-white/20 mb-5" />


      <SettingsSection title="Units and measures">
        <SettingsItem />
        <SettingsItem />
      </SettingsSection>

      <SettingsSection title="Background">
        <SettingsItem />
      </SettingsSection>
    </FullScreenMenu>
  );
}

SettingsModal.propTypes = {
  closeFunction: func.isRequired,
};
