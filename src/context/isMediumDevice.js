"use client";
import useMediaQuery from "@/hook/useMediaQuery";
import React, { createContext, useContext } from "react";

// Create a context
const IsMediumDeviceContext = createContext();

// Create a provider component
export const IsMediumDeviceProvider = ({ children }) => {
  const isMediumDevice = useMediaQuery(
    "(min-width:768px) and (max-width:1024px)"
  );

  return (
    <IsMediumDeviceContext.Provider value={isMediumDevice}>
      {children}
    </IsMediumDeviceContext.Provider>
  );
};

// Create a custom hook to use the context
export const useIsMediumDevice = () => {
  return useContext(IsMediumDeviceContext);
};
