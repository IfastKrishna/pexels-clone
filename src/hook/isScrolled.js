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
            return (number / 100) * window.innerHeight;
          case "pc":
            return (number / 100) * document.documentElement.scrollHeight;
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
