import { bool, elementType, string } from "prop-types";

export default function MessagePopup(props) {
  return (
    <div
      className="max-w-screen-md bg-black/20 backdrop-blur-md p-8 rounded-3xl 
        drop-shadow-lg self-center gap-5 flex flex-col text-center items-center">
      <div className={props.iconSpin && ("animate-spin")} >
        <props.icon className= {"w-12 h-auto fill-white"} />
      </div>
      <p className="font-bold">{props.title}</p>

      {props.description && (
        <p>{props.description}</p>
      )}

      {props.refreshButton && (
        <div
          className="px-3 py-1 border rounded select-none hover:bg-white/10 
      cursor-pointer active:bg-transparent">
          Refresh
        </div>
      )}
    </div>
  );
}

MessagePopup.propTypes = {
  title: string.isRequired,
  description: string,
  icon: elementType.isRequired,
  iconSpin: bool,
  refreshButton: bool.isRequired,
};
