import { Warning } from "@phosphor-icons/react";
import { string } from "prop-types";

export default function LocationPickerError({ message }) {
  return (
    <div className="px-5 py-2 bg-yellow-500/20 flex gap-2">
      <Warning className="w-5 h-auto fill-yellow-500" />
      <div className="text-sm text-yellow-200">{message}</div>
    </div>
  );
}

LocationPickerError.propTypes = {
  message: string,
};
