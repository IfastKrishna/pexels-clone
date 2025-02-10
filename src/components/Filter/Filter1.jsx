import { useSelectedOption } from "@/context/selectedOption";
import React from "react";
import Popover from "../Popover";
import { Check } from "lucide-react";
import Link from "next/link";

function NewTrendingFilter({ filter = "Newest", setFilter = () => {} }) {
  // Default to "" = 'New' -> 'Trending'
  const { selectedOption } = useSelectedOption();
  return (
    <div className="flex justify-between items-center w-full">
      <h1 className="text-2xl font-medium text-gray-900">
        {filter == "New" ? "" : filter} Free Stock {selectedOption}
      </h1>

      <Popover
        position="bottom"
        triggerName={filter}
        triggerClassName="border hover:border-gray-800 hover:bg-gray-100 font-medium py-3 px-6 rounded-xl duration-300 transition-colors"
        content={["Newest", "Trending"].map((v) => (
          <div
            key={v}
            onClick={() => setFilter(v)}
            className={`flex gap-2 text-nowrap items-center justify-between text-gray-800 hover:bg-gray-100 w-full py-3 px-4 cursor-pointer font-medium duration-300 transition-colors`}
          >
            {v} {filter == v && <Check className="h-4 w-4 font-bold" />}
          </div>
        ))}
        contentClassName="bg-white border border-gray-100 rounded-xl shadow p-0 overflow-hidden border-gray-200"
      />
    </div>
  );
}

export default NewTrendingFilter;
