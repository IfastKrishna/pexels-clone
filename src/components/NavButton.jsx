import React from "react";

function NavButton({ isOpen, setIsOpen = () => {}, className }) {
  //   const [isOpen, setIsOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <button
      className={`focus:bg-black/40 p-3 md:hidden rounded-full duration-300 transition-colors ${className}`}
    >
      <div
        aria-label="Toggle menu"
        className="w-6 h-6 rounded-full grid place-items-center cursor-pointer"
        onClick={toggleMenu}
      >
        <div className="relative w-full h-full">
          <span
            className={`block absolute w-full border-t-4 transition-transform ${
              isOpen ? "transform rotate-45 top-1/2" : "top-1/4"
            }`}
          ></span>
          <span
            className={`block absolute w-full border-t-4 transition-transform ${
              isOpen ? "transform -rotate-45 top-1/2" : "top-3/4"
            }`}
          ></span>
        </div>
      </div>
    </button>
  );
}

export default NavButton;
