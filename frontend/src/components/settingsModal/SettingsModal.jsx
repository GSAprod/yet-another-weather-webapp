import { func } from "prop-types";
import FullScreenMenu from "../FullScreenMenu";

export default function SettingsModal({ closeFunction }) {
  return (
    <FullScreenMenu closeFunction={closeFunction} fullHeight={true}>
      Settings
    </FullScreenMenu>
  );
}

SettingsModal.propTypes = {
  closeFunction: func.isRequired,
};
