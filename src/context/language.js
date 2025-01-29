import React, { createContext, useState, useContext } from "react";

// Create a Context for the language
export const LanguageContext = createContext();

// Create a provider component
export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("en");

  const changeLanguage = (lang) => {
    setLanguage(lang);
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  return useContext(LanguageContext);
};
