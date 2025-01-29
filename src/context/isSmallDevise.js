"use client";
import useMediaQuery from "@/hook/useMediaQuery";
import React, { createContext, useContext } from "react";

// Create a context
const IsSmallDeviceContext = createContext();

// Create a provider component
export const IsSmallDeviceProvider = ({ children }) => {
  const isSmallDevice = useMediaQuery("(max-width:767px)");

  return (
    <IsSmallDeviceContext.Provider value={isSmallDevice}>
      {children}
    </IsSmallDeviceContext.Provider>
  );
};

// Create a custom hook to use the context
export const useIsSmallDevice = () => {
  return useContext(IsSmallDeviceContext);
};
