import { any, string } from "prop-types";
import ListBox from "./inputTypes/ListBox";
import ToggleSwitch from "./inputTypes/ToggleSwitch";

export default function SettingsItem({ title, description, type, values }) {
  return (
    <div className="py-2 flex justify-between gap-8">
      <div>
        <div className="pb-1">{title}</div>
        <div className="text-sm text-white/50">
          {description}
        </div>
      </div>

      {type === "listbox" && (
        <ListBox options={values} />
      )}

      { type === "switch" && (
        <ToggleSwitch />
      )}
    </div>
  );
}

SettingsItem.propTypes = {
  title: string.isRequired,
  description: string.isRequired,
  type: string.isRequired,
  values: any // TODO Check if this can be changed
}
