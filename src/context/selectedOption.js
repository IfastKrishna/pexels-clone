"use client";
import { createContext, useContext, useState } from "react";

const SelectedOptionContext = createContext();

const SelectedOptionProvider = ({ children }) => {
  const [selectedOption, setSelectedOption] = useState("Photos"); // Default to 'photos'

  const changeSelectedOption = (val) => {
    setSelectedOption(val);
  };

  return (
    <SelectedOptionContext.Provider
      value={{ selectedOption, changeSelectedOption }}
    >
      {children}
    </SelectedOptionContext.Provider>
  );
};

const useSelectedOption = () => {
  return useContext(SelectedOptionContext);
};

export { SelectedOptionContext, SelectedOptionProvider, useSelectedOption };
