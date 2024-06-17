import PropTypes, { bool, number, string } from "prop-types";
import { CloudSlash as ErrorIcon } from "@phosphor-icons/react";
import MessagePopup from "./MessagePopup";

export default function ErrorPopup({ errorData, refreshFunction }) {
  return (
    <MessagePopup
      title="An error has occurred"
      description={errorData.reason}
      icon={ErrorIcon}
      refreshButton={true}
      refreshFunction={refreshFunction}
    />
  );
}

ErrorPopup.propTypes = {
  errorData: PropTypes.exact({
    error: bool,
    type: string,
    status: number,
    reason: string,
  }),
  refreshFunction: PropTypes.func,
};
