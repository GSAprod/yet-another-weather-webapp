import ListBox from "./inputTypes/ListBox";

export default function SettingsItem() {
  return (
    <div className="py-2 flex justify-between gap-8">
      <div>
        <div className="pb-1">Lorem Ipsum</div>
        <div className="text-sm text-white/50">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </div>
      </div>

      <ListBox options={[
        {
          name: "km/h",
          id: "C"
        },
        {
          name: "mph",
          id: "F"
        },
      ]} />
    </div>
  );
}
