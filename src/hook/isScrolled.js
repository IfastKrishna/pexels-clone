import { useState, useEffect } from "react";

const useIsScrolled = (initial = "0px") => {
  const [isScrolled, setIsScrolled] = useState(false);

  const parseValue = (value) => {
    if (typeof value === "string") {
      const unit = value.match(/[a-z%]+$/i);
      const number = parseFloat(value);
      if (unit) {
        switch (unit[0]) {
          case "px":
            return number;
          case "vh":
            return (
              (number / 100) *
              (typeof window !== "undefined" ? window.innerHeight : 0)
            );
          case "pc":
            return (
              (number / 100) *
              (typeof document !== "undefined"
                ? document.documentElement.scrollHeight
                : 0)
            );
          default:
            return number; // Default to pixels if unit is not recognized
        }
      }
    }
    return parseFloat(value);
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleScroll = () => {
        setIsScrolled(window.scrollY > parseValue(initial));
      };

      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, [initial]);

  return isScrolled;
};

export default useIsScrolled;
