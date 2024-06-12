import { func, bool, node } from "prop-types";
import { useEffect } from "react";

/***
 * Generic prop, used to show modals that hide the rest of the page using a
 * blurred background.
 * For example, the <LocationPicker> component uses this modal
 */
export default function FullScreenMenu({
  closeFunction,
  fullHeight,
  children,
}) {
  function onBackgroundClick(event) {
    // ckeck if the user clicked on the background and not on a child element
    if (event.target === event.currentTarget) {
      closeFunction();
    }
  }

  useEffect(() => {
    // check if the user pressed the escape key
    // If this is the case, close the menu
    function onEscapeKeyDown(event) {
      if (event.key === "Escape") {
        closeFunction();
      }
    }

    document.addEventListener("keydown", onEscapeKeyDown);
    return () => {
      // After the escape key is pressed and the modal is closed, remove the listener.
      document.removeEventListener("keydown", onEscapeKeyDown);
    };
  });

  return (
    <div
      className="fixed left-0 top-0 w-full h-full backdrop-blur-md backdrop-brightness-90
        max-md:px-10 p-20 flex flex-col items-center max-sm:p-0"
      onClick={onBackgroundClick}>
      <div
        className={
          "w-full max-w-screen-md rounded-xl backdrop-brightness-75 " +
          "shadow shadow-black/25 sm:border border-white/20 max-sm:rounded-none overflow-hidden min-h-0 flex flex-col " +
          (fullHeight === true ? "h-full " : "") +
          "max-sm:min-h-screen"
        }>
        {children}
      </div>
    </div>
  );
}

FullScreenMenu.propTypes = {
  fullHeight: bool,
  closeFunction: func.isRequired,
  children: node,
};
