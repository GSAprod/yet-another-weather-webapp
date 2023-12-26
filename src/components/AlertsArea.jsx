import CheckSquareIcon from "../assets/icons/check-square-bold.svg?react";

export default function AlertsArea() {
  return (
    <div className="flex gap-3 justify-end">
      <div>No warnings issued</div>

      <CheckSquareIcon className="w-4 h-auto my-auto fill-white" />
    </div>
  );
}
