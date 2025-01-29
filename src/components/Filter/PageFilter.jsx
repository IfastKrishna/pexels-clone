"use client";
import { useIsSmallDevice } from "@/context/isSmallDevise";
import { useSelectedOption } from "@/context/selectedOption";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

function PageFilter() {
  const { changeSelectedOption } = useSelectedOption();
  const links = [
    { path: "/", name: "Home", onClick: () => changeSelectedOption("Photos") },
    {
      path: "/videos",
      name: "Videos",
      onClick: () => changeSelectedOption("Videos"),
    },
    { path: "/leaderboard", name: "Leaderboard" },
    { path: "/challenges", name: "Challenges" },
  ];
  const pathname = usePathname();
  const scrollContainerRef = useRef(null);
  const [scrollable, setScrollable] = useState({ left: false, right: true });

  const handleScroll = (direction) => {
    if (!scrollContainerRef.current) return;
    const scrollAmount = 200;
    const container = scrollContainerRef.current;

    if (direction === "left") {
      container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    } else {
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }

    setTimeout(() => {
      setScrollable({
        left: container.scrollLeft > 0,
        right:
          container.scrollLeft + container.offsetWidth < container.scrollWidth,
      });
    }, 200);
  };

  return (
    <div className="relative flex items-center">
      {scrollable.left && (
        <button
          onClick={() => handleScroll("left")}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-gradient-to-r from-white to-transparent py-4 px-4 rounded-r-xl transition"
        >
          <ChevronLeft className="w-5 h-5 font-bold text-gray-800" />
        </button>
      )}
      <div
        ref={scrollContainerRef}
        className="flex justify-center items-center gap-4 overflow-x-auto custom-scrollbar snap-x"
        onScroll={() =>
          setScrollable({
            left: scrollContainerRef.current.scrollLeft > 0,
            right:
              scrollContainerRef.current.scrollLeft +
                scrollContainerRef.current.offsetWidth <
              scrollContainerRef.current.scrollWidth,
          })
        }
      >
        {links.map(({ path, name, onClick }) => (
          <Link
            key={path}
            href={path}
            onClick={onClick ? onClick : () => {}}
            className={`${
              pathname === path
                ? "bg-black text-white font-medium"
                : "text-gray-500 hover:bg-gray-100 hover:text-gray-900 font-semibold"
            } py-3 px-6 rounded-full duration-300 transition-colors`}
          >
            {name}
          </Link>
        ))}
      </div>
      {scrollable.right && (
        <button
          onClick={() => handleScroll("right")}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-gradient-to-l from-white to-transparent rounded-l-xl py-4 px-2 transition"
        >
          <ChevronRight className="w-5 h-5 text-gray-800" />
        </button>
      )}
    </div>
  );
}

export default PageFilter;
