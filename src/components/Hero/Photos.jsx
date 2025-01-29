import React from "react";
import SearchBar from "../SearchBar";
import SecondaryHeader from "../Header/Secondary";
import Container from "../container";

function HeroPhotos() {
  return (
    <div className="w-full h-[82.5vh] flex flex-col bg-[url('https://images.pexels.com/photos/11216404/pexels-photo-11216404.jpeg')] bg-cover bg-center">
      <SecondaryHeader />
      <div className="w-full h-full flex-1 relative">
        <div className=" absolute inset-0 w-full h-full bg-black/50"></div>
        <div className="absolute inset-0 w-full h-full ">
          <div className="max-w-2xl px-4 sm:px-0 flex flex-col justify-center items-center h-full mx-auto">
            <h1 className="text-4xl font-medium text-white my-8">
              The best free stock photos, royalty free images & videos shared by
              creators.
            </h1>
            <SearchBar />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroPhotos;
