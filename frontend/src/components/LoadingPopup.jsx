import LoadingIcon from "../assets/icons/spinner.svg?react";
import MessagePopup from "./MessagePopup";

export default function LoadingPopup() {
  return (
    <MessagePopup
      title="Loading..."
      icon={LoadingIcon}
      iconSpin={true}
      refreshButton={false}
    />
  );
}