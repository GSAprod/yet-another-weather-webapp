import { func, bool } from "prop-types";
import { Component, useEffect } from "react";

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
      document.removeEventListener("keydown", onEscapeKeyDown);
    };
  });

  return (
    <div
      className="fixed left-0 top-0 w-full h-full backdrop-blur-md backdrop-brightness-90
        max-md:px-10 p-20 flex flex-col items-center
        max-sm:p-0"
      onClick={onBackgroundClick}>
      <div
        className={
          "w-full max-w-screen-md rounded-2xl backdrop-brightness-75 " +
          "shadow shadow-black/25 border border-white/20 max-sm:rounded-none " +
          (fullHeight === true ? "h-full" : "")
        }>
        {children}
      </div>
    </div>
  );
}

FullScreenMenu.propTypes = {
  fullHeight: bool,
  closeFunction: func.isRequired,
  children: Component,
};