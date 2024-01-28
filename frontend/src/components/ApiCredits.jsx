import { string } from "prop-types";

export default function ApiCredits({ name, href }) {
  return (
    <div className="text-sm">
      Weather by{" "}
      <a href={href} className="hover:underline" target="_blank" rel="noreferrer">
        {name}
      </a>
    </div>
  );
}

ApiCredits.propTypes = {
  name: string.isRequired,
  href: string.isRequired
}