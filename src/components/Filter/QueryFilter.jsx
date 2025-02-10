import { useState } from "react";
import { Check, ListFilter } from "lucide-react";
import Popover from "../Popover";

export default function FilterQuery({
  activetab = "Videos",
  setOrientation = () => {},
  orientation = "All Orientations",
  sizes = "All Sizes",
  setSizes = () => {},
  colors = "#ffffff",
  setColors = () => {},
  sortBys = "Newest",
  setSortBys = () => {},
}) {
  const [activeTab, setActiveTab] = useState(activetab);
  const [filter, setFilter] = useState(false);

  const tabs = [
    { name: "Photos", count: "313.4K" },
    { name: "Videos", count: "78.3K" },
    { name: "Users", count: "9.5K" },
  ];

  const colorOptions = [
    "#ffffff",
    "#000000",
    "#38a169",
    "#e53e3e",
    "#4299e1",
    "#667eea",
    "#a0aec0",
    "#e53e3e",
    "#ed8936",
    "#d53f8c",
    "#2a4365",
    "#ecc94b",
  ];

  return (
    <>
      <div className="flex items-center justify-between w-full py-4 bg-white">
        {/* Tabs */}
        <div className="flex gap-4">
          {tabs.map((tab) => (
            <button
              key={tab.name}
              onClick={() => setActiveTab(tab.name)}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-200 ${
                activeTab === tab.name
                  ? "bg-black text-white"
                  : "text-gray-500 hover:text-black"
              }`}
            >
              {tab.name}{" "}
              <span className="text-gray-400 text-xs">{tab.count}</span>
            </button>
          ))}
        </div>

        {/* Actions */}
        <div className="flex space-x-4 items-center">
          <button
            className={`px-6 py-3 border rounded-lg text-sm flex items-center transition-all hover:border-black duration-200 font-medium ${
              filter ? "text-gray-400" : "text-gray-900"
            }`}
            onClick={() => setFilter(!filter)}
          >
            <ListFilter
              className={`w-4 h-4 mr-2 transition-transform ${
                filter ? "rotate-180 text-gray" : ""
              }`}
            />{" "}
            Filters
          </button>
          <Popover
            triggerClassName={`px-6 py-3 rounded-full font-medium text-gray-500 hover:text-black border hover:border-black transition-all duration-200 rounded-lg`}
            triggerName={sortBys}
            position="bottom"
            content={
              <div className="flex flex-col gap-1">
                <button
                  className="flex items-center gap-2 px-6 py-2 rounded-lg hover:bg-gray-800/10 cursor-pointer transition-colors"
                  onClick={() => setSortBys("Newest")}
                >
                  <span className="font-medium">Newest</span>
                </button>
                <button
                  className="flex items-center gap-2 px-6 py-2 rounded-lg hover:bg-gray-800/10 cursor-pointer transition-colors"
                  onClick={() => setSortBys("Popular")}
                >
                  <span className="font-medium">Popular</span>
                </button>
              </div>
            }
          />
        </div>
      </div>

      {filter && (
        <div className="grid grid-cols-3 py-4 gap-6">
          {/* Orientation Filter */}
          <Popover
            triggerClassName="px-4 py-2.5 border rounded-md w-full flex justify-between items-center font-medium"
            contentClassName="border rounded-md w-full bg-white p-4"
            triggerName={orientation}
            content={
              <div className="grid gap-2">
                {["All Orientations", "Horizontal", "Vertical", "Square"].map(
                  (item) => (
                    <div
                      key={item}
                      className="font-medium p-1 flex justify-between items-center cursor-pointer"
                      onClick={() => setOrientation(item)}
                    >
                      {item}{" "}
                      {orientation === item && <Check className="w-4 h-4" />}
                    </div>
                  )
                )}
              </div>
            }
          />

          {/* Sizes Filter */}
          <Popover
            triggerClassName="px-4 py-2.5 border rounded-md w-full flex justify-between items-center font-medium"
            contentClassName="border rounded-md w-full bg-white p-4"
            triggerName={sizes}
            content={
              <div className="grid gap-2">
                {["All Sizes", "Large", "Medium", "Small"].map((size) => (
                  <div
                    key={size}
                    className="font-medium p-1 flex justify-between items-center cursor-pointer"
                    onClick={() => setSizes(size)}
                  >
                    {size} {sizes === size && <Check className="w-4 h-4" />}
                  </div>
                ))}
              </div>
            }
          />

          {/* Colors Filter */}
          <Popover
            triggerClassName="px-4 py-2.5 border rounded-md w-full flex justify-between items-center font-medium"
            contentClassName="border rounded-md w-full bg-white p-4"
            triggerName={
              <div
                className="w-5 h-5 rounded-full border"
                style={{ backgroundColor: colors }}
              ></div>
            }
            content={
              <div className="grid grid-cols-7 gap-1">
                {colorOptions.map((color) => (
                  <div
                    key={color}
                    className="w-12 h-8 cursor-pointer border"
                    style={{ backgroundColor: color }}
                    onClick={() => setColors(color)}
                  ></div>
                ))}
              </div>
            }
          />
        </div>
      )}
    </>
  );
}
