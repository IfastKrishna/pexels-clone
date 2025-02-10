"use client";

import { ChevronDown, ChevronUp, Image, Search, Video } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useIsSmallDevice } from "@/context/isSmallDevise";
import { useSelectedOption } from "@/context/selectedOption";

function SearchBar({
  isLoading = false,
  handleSubmit = (e) => e.preventDefault(),
  search = "",
  setSerch = () => {},
  ...props
}) {
  const isSmallDevice = useIsSmallDevice();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { selectedOption, changeSelectedOption } = useSelectedOption();

  return (
    <form
      className={`relative ${
        isSmallDevice ? "max-w-full" : "max-w-4xl"
      } mx-auto w-full`}
      onSubmit={handleSubmit}
    >
      <motion.div
        initial={{ opacity: 0, y: 0 }} // y: 20
        animate={{ opacity: 1, y: 0 }}
        className={`flex items-center rounded-2xl shadow p-1.5 ${
          isSmallDevice ? "bg-gray-100" : "bg-gray-50"
        } border border-gray-100 transition-all duration-300 ${
          props.className
        }`}
      >
        <motion.button
          type="button"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="flex items-center gap-2 px-4 py-3 focus:outline-none bg-white hover:bg-gray-800/5 rounded-xl transition-all duration-300"
          onMouseEnter={() => setDropdownOpen(true)}
          onMouseLeave={() => setDropdownOpen(false)}
        >
          <motion.div animate={{ rotate: dropdownOpen ? 180 : 0 }}>
            {selectedOption === "Photos" ? (
              <Image className="h-4 w-4 text-gray-600" />
            ) : (
              <Video className="h-4 w-4 text-gray-600" />
            )}
          </motion.div>
          {!isSmallDevice && (
            <span className="font-medium text-gray-700">{selectedOption}</span>
          )}

          {dropdownOpen ? (
            <ChevronUp className="h-4 w-4 text-gray-500 font-medium transition-transform duration-300" />
          ) : (
            <ChevronDown className="h-4 w-4 text-gray-500 font-medium transition-transform duration-300" />
          )}
        </motion.button>

        <div className="flex-1 relative">
          <motion.input
            value={search}
            onChange={(e) => setSerch(e.target.value)}
            whileFocus={{ scale: 1.01 }}
            type="text"
            placeholder={`Search for free ${selectedOption.toLowerCase()}`}
            className="w-full px-4 py-2.5 rounded-xl focus:outline-none bg-transparent text-gray-700 placeholder-gray-400 font-medium transition-all duration-300"
          />
          <AnimatePresence>
            {isLoading && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute right-16 top-1/2 transform -translate-y-1/2"
              >
                <div className="animate-spin h-5 w-5 border-2 border-gray-300 border-t-gray-600 rounded-full" />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="p-2.5  hover:bg-gray-800/10 rounded-xl transition-colors duration-300"
        >
          <Search className="h-5 w-5" />
        </motion.button>
      </motion.div>

      <AnimatePresence>
        {dropdownOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
            className={`absolute left-0 mt-2 p-2 bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden z-50 w-auto`}
          >
            {["Photos", "Videos"].map((option) => (
              <motion.div
                key={option}
                whileHover={{ x: 5 }}
                className={`flex items-center px-4 py-2 rounded-xl hover:bg-gray-800/5 cursor-pointer transition-colors ${
                  selectedOption === option
                    ? option === "Photos"
                      ? "text-green-400"
                      : "text-blue-300"
                    : "text-gray-600"
                }`}
                onClick={() => changeSelectedOption(option)}
              >
                {option === "Photos" ? (
                  <Image className="h-5 w-5" />
                ) : (
                  <Video className="h-5 w-5" />
                )}
                <span className="ml-3 font-medium">{option}</span>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </form>
  );
}

export default SearchBar;
