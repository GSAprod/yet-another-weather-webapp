import PropTypes, { bool, number, string } from "prop-types";
import ErrorIcon from "../assets/icons/cloud-slash.svg?react";
import MessagePopup from "./MessagePopup";

export default function ErrorPopup({ errorData }) {
  return (
    <MessagePopup
      title="An error has occurred"
      description={errorData.reason}
      icon={ErrorIcon}
      refreshButton={true}
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
};
