import PropTypes, { bool, number, string } from "prop-types";
import ErrorIcon from "../assets/icons/cloud-slash.svg?react";

export default function ErrorPopup({ errorData }) {
  return (
    <div
      className="max-w-screen-md bg-black/20 backdrop-blur-md p-8 rounded-3xl 
        drop-shadow-lg self-center gap-5 flex flex-col text-center items-center">
      <ErrorIcon className="w-12 h-auto fill-white" />
      <p className="font-bold">An error has occurred</p>
      <p>{errorData.reason}</p>

      <div
        className="px-3 py-1 border rounded select-none hover:bg-white/10 
      cursor-pointer active:bg-transparent">
        Refresh
      </div>
    </div>
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
