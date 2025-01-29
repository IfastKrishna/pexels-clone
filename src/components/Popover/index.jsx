"use client";
import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const Popover = ({
  content,
  triggerName = "Action",
  position = "bottom",
  contentClassName = "bg-white shadow border border-gray-100",
  trigger = "click",
  indicator = true,
  triggerClassName,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const popoverRef = useRef(null);

  const handleClickOutside = (event) => {
    if (popoverRef.current && !popoverRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const togglePopover = () => {
    setIsOpen(!isOpen);
  };

  const handleMouseEnter = () => {
    if (trigger === "hover") {
      setIsOpen(true);
    }
  };

  const handleMouseLeave = () => {
    if (trigger === "hover") {
      setIsOpen(false);
    }
  };

  const animations = {
    top: { y: -20, opacity: 0, scale: 0.95 },
    bottom: { y: -20, opacity: 0, scale: 0.95 },
    left: { x: -20, opacity: 0, scale: 0.95 },
    right: { x: 20, opacity: 0, scale: 0.95 },
  };

  const positionClasses = {
    top: "bottom-full mb-2",
    bottom: "top-full mt-2",
    left: "right-full mr-2",
    right: "left-full ml-2",
    bottomLeft: "top-full left-0",
    bottomRight: "top-full right-0",
    topLeft: "bottom-full left-0",
    topRight: "bottom-full right-0",
  };

  return (
    <motion.div
      className="relative inline-flex flex-col justify-center items-center"
      ref={popoverRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <motion.button
        onClick={trigger === "click" ? togglePopover : undefined}
        className={`cursor-pointer flex items-center gap-1 rounded-full ${triggerClassName}`}
        whileTap={{ scale: 0.95 }}
        aria-expanded={isOpen}
      >
        {triggerName}
        {indicator && (
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <ChevronDown className="h-4 w-4" />
          </motion.div>
        )}
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={animations[position]}
            animate={{ y: 0, x: 0, opacity: 1, scale: 1 }}
            exit={animations[position]}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 20,
            }}
            className={`absolute z-20 p-2 rounded-2xl ${positionClasses[position]}  ${contentClassName} backdrop-blur-sm bg-opacity-95`}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.2 }}
            >
              {content}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Popover;
