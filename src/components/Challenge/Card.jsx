import React from "react";

function ChallangeCard({ images = [] }) {
  return (
    <div className="flex w-full sm:max-w-lg h-60 sm:h-96 bg-gray-200 rounded-2xl overflow-hidden space-x-1 relative">
      <div className="w-[50%]">
        <img
          src={images[0]}
          alt="image1"
          className="object-cover w-full h-full"
        />
      </div>
      <div className="w-[50%] flex-col space-y-1">
        <div className="w-full h-[50%]">
          <img
            src={images[1]}
            alt="image2"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="w-full h-[50%]">
          <img
            src={images[2]}
            alt="image3"
            className="object-cover w-full h-full"
          />
        </div>
      </div>
      <div className="absolute -left-1 cursor-pointer w-full h-full hover:bg-black/30 transition-all duration-500"></div>
    </div>
  );
}

export default ChallangeCard;
