"use client";
import { useSelectedOption } from "@/context/selectedOption";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import React, { useRef, useState } from "react";

const tags = [
  "Beautiful",
  "Cloud",
  "Flower",
  "Star",
  "Rain",
  "Fire",
  "Water",
  "Beach",
  "Light",
  "Abstract",
  "Ocean",
  "Night",
];

const KeywordSearch = ({ keywords = tags }) => {
  const scrollRef = useRef(null);
  const router = useRouter();
  const [scrollable, setScrollable] = useState({ left: false, right: true });
  const query = useParams();

  const { selectedOption } = useSelectedOption();

  const handleScroll = (direction) => {
    if (!scrollRef.current) return;
    const scrollAmount = 200; // Adjust for smoother scrolling
    const container = scrollRef.current;

    if (direction === "left") {
      container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    } else {
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }

    // Update indicators after scrolling
    setTimeout(() => {
      setScrollable({
        left: container.scrollLeft > 0,
        right:
          container.scrollLeft + container.offsetWidth < container.scrollWidth,
      });
    }, 200); // Delay to allow for smooth scrolling to update
  };

  const handleKeyowrdSearch = (keyword) => {
    keyword = keyword.toLowerCase();
    if (selectedOption === "Photos") {
      router.push(`/search/${keyword}`);
    } else if (selectedOption === "Videos") {
      router.push(`/videos/${keyword}`);
    }
  };

  return (
    <div className="relative w-full mx-auto">
      {/* Left Arrow */}
      {scrollable.left && (
        <button
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-gradient-to-r from-white to-transparent py-4 px-1 transition"
          onClick={() => handleScroll("left")}
        >
          <ChevronLeft className="w-5 h-5 font-bold text-gray-800" />
        </button>
      )}

      {/* Tags Container */}
      <div
        ref={scrollRef}
        className="flex gap-2 overflow-x-auto p-4 rounded-lg will-change-contents scroll-smooth custom-scrollbar snap-x"
        onScroll={() =>
          setScrollable({
            left: scrollRef.current.scrollLeft > 0,
            right:
              scrollRef.current.scrollLeft + scrollRef.current.offsetWidth <
              scrollRef.current.scrollWidth,
          })
        }
      >
        {keywords.map((tag, index) => (
          <span
            key={index}
            onClick={() => handleKeyowrdSearch(tag)}
            className={`px-4 py-3 bg-white border text-gray-800 rounded-xl shadow-sm whitespace-nowrap hover:bg-yellow-300 hover:border-yellow-300 cursor-pointer transition snap-center capitalize font-medium ${
              query.search === tag.toLowerCase() &&
              "border-yellow-300 bg-yellow-300"
            }`}
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Right Arrow */}
      {scrollable.right && (
        <button
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-gradient-to-l from-white to-transparent py-4 px-1 transition"
          onClick={() => handleScroll("right")}
        >
          <ChevronRight className="w-5 h-5 text-gray-800" />
        </button>
      )}
    </div>
  );
};

export default KeywordSearch;
