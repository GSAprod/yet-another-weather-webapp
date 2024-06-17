import { node, string } from "prop-types";

export default function SettingsSection({ title, children }) {
  return (
    <div className="px-4 pb-8">
      <h2 className="uppercase text-sm font-bold text-white/50 px-1 pb-2">
        {title}
      </h2>

      <div className="px-1">{children}</div>
    </div>
  );
}

SettingsSection.propTypes = {
  title: string.isRequired,
  children: node,
};
