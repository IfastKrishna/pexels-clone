"use client";
import React from "react";
import { motion } from "framer-motion";
const Button = ({ children, onClick, className = "", ...props }) => {
  return (
    <motion.button
      //   whileHover={{ backgroundColor: "rgba(31, 41, 55, 0.1)" }} // gray-800/10
      whileTap={{ scale: 0.9 }}
      {...props}
      className={`bg-white text-black font-bold py-2 px-4 rounded ${className}`}
      onClick={onClick}
    >
      {children}
    </motion.button>
  );
};

export default Button;
