import CheckSquareIcon from "../assets/icons/check-square-bold.svg?react";

export default function AlertsArea() {
  return (
    <div className="flex gap-3 justify-end h-fit">
      <div className="text-white/50 text-end">No warnings issued</div>

      <CheckSquareIcon className="w-4 h-auto my-auto fill-white/50 shrink-0" />
    </div>
  );
}
