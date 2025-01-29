import React from "react";
import SearchBar from "../SearchBar";
import SecondaryHeader from "../Header/Secondary";

function HeroVideos() {
  return (
    <div className="w-full h-[82.5vh] flex flex-col relative">
      <div className="w-full h-full flex-1 relative">
        <div className="w-full absolute top-0 left-0 z-10">
          <SecondaryHeader bg="bg-transparent" />
        </div>
        <video
          className="absolute inset-0 w-full h-full object-cover brightness-100 "
          src="https://videos.pexels.com/video-files/29716330/12777302_2560_1440_30fps.mp4"
          autoPlay
          loop
          muted
        />
        <div className="absolute inset-0 w-full h-full bg-black/50"></div>
        <div className="absolute inset-0 w-full h-full">
          <div className="max-w-2xl flex flex-col justify-center items-center h-full mx-auto">
            <div>
              <h1 className="text-4xl font-medium text-white my-8">
                The best free stock photos, royalty free images & videos shared
                by creators.
              </h1>
            </div>
            <SearchBar />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroVideos;
