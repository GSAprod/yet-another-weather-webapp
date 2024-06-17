import { Spinner } from "@phosphor-icons/react";
import MessagePopup from "./MessagePopup";

/***
 * A small popup box showing a spinning circle. This is only shown while the forecast
 * data is being fetched.
 */
export default function LoadingPopup() {
  return (
    <MessagePopup
      title="Loading..."
      icon={Spinner}
      iconSpin={true}
      refreshButton={false}
    />
  );
}
