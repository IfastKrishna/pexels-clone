import React from "react";

function Container({ className, children }) {
  return <div className={`px-4 sm:px-8 ${className}`}>{children}</div>;
}

export default Container;
