import { useState, useEffect } from "react";

const useMediaQuery = (query) => {
  const isClient = typeof window !== "undefined";
  const [matches, setMatches] = useState(
    isClient ? window.matchMedia(query).matches : false
  );

  useEffect(() => {
    if (!isClient) {
      return;
    }

    const mediaQuery = window.matchMedia(query);
    const handleChange = () => setMatches(mediaQuery.matches);

    handleChange();
    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, [query, isClient]);

  return matches;
};

export default useMediaQuery;
