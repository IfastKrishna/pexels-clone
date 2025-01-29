"use client";

import dynamic from "next/dynamic";
import downloadFile from "@/utils/download";
import { Bookmark, Download, Heart, Loader } from "lucide-react";
import React, { useState } from "react";
import avatar from "../../../public/avatar-user.svg";
import Image from "next/image";
const VideoPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });

const MasonryContainer = ({ children }) => {
  return (
    <div className="columns-2 lg:columns-3 gap-4 sm:gap-8">{children}</div>
  );
};

const MasonryPhotoCard = ({ photo = {} }) => {
  const [downloading, setDownloading] = useState(false);
  return (
    <div className="relative group mb-4 sm:mb-6 break-inside-avoid rounded-xl overflow-hidden">
      <div>
        <div className="absolute top-0 left-0 w-full h-full bg-black/10 bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-200 ease-in-out">
          <div className="absolute top-3 flex items-center gap-2 right-3 translate-x-full group-hover:translate-x-0 transition-transform duration-200 ease-in-out">
            <button className="hover:bg-gray-800/50 p-2 rounded-xl duration-200">
              <Bookmark className="w-6 h-6 text-white" />
            </button>
            <button className="hover:bg-gray-800/50 p-2 rounded-xl duration-200">
              <Heart className="w-6 h-6 text-white" />
            </button>
          </div>
        </div>
      </div>
      {/* Static Image */}
      <img
        src={photo.src.large}
        alt="Photo"
        className="w-full h-full object-cover"
        loading="lazy"
      />

      {/* Photographer Section */}
      <div
        className="absolute bottom-0 left-0 w-full text-white p-3 flex items-center justify-between rounded-b-xl 
        translate-y-full group-hover:translate-y-0 transition-transform duration-200 ease-in-out"
      >
        {/* Photographer Info */}
        <div className="flex items-center">
          <div className="profile w-10 h-10 mr-3 bg-slate-50 rounded-full p-1">
            <Image
              src={avatar}
              alt="Photographer"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <h3 className="text-sm font-medium">{photo.photographer}</h3>
        </div>

        {/* Download Button */}
        <button
          className="bg-green-400 hover:bg-green-500 flex gap-2 text-white font-medium px-6 py-3 rounded-xl transition-colors duration-300"
          onClick={() =>
            downloadFile(
              photo.src.original,
              `pexels-photo-${photo.id}.jpg`,
              setDownloading
            )
          } //
          download
          target="_blank"
          rel="noopener noreferrer"
        >
          {downloading ? (
            <Loader className="animate-spin" />
          ) : (
            <Download className="w-5 h-5" />
          )}
          {downloading ? "Downloading" : "Download"}
        </button>
      </div>
    </div>
  );
};

function MasonryVideoCard({ video = {} }) {
  const [downloading, setDownloading] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleMouseEnter = () => {
    setIsPlaying(true); // Play video on hover
  };

  const handleMouseLeave = () => {
    setIsPlaying(false); // Stop video on mouse leave
  };

  return (
    <div
      className="relative group mb-4 sm:mb-6 break-inside-avoid rounded-xl overflow-hidden"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div>
        <div className="absolute top-0 left-0 w-full h-full bg-black/10 bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-200 ease-in-out">
          <div className="absolute top-3 flex items-center gap-2 right-3 translate-x-full group-hover:translate-x-0 transition-transform duration-200 ease-in-out">
            <button className="hover:bg-gray-800/50 p-2 rounded-xl duration-200">
              <Bookmark className="w-6 h-6 text-white" />
            </button>
            <button className="hover:bg-gray-800/50 p-2 rounded-xl duration-200">
              <Heart className="w-6 h-6 text-white" />
            </button>
          </div>
        </div>
      </div>
      <VideoPlayer
        url={video.video_files?.[0]?.link || ""}
        playing={isPlaying}
        width="100%"
        height="100%"
        muted
        loop
      />
      {/* <video
        className="w-full h-full object-cover transition-opacity duration-200 ease-in-out"
        autoPlay={isPlaying}
        loop
        muted
        controls={isPlaying}
      >
        <source src={video.video_files?.[0]?.link || ""} type="video/mp4" />
        Your browser does not support the video tag.
      </video> */}
      {/* Photographer Section */}
      <div
        className="absolute bottom-0 left-0 w-full text-white p-3 flex items-center justify-between rounded-b-xl 
        translate-y-full group-hover:translate-y-0 transition-transform duration-200 ease-in-out"
      >
        {/* Photographer Info */}
        <div className="flex items-center">
          <div className="profile w-10 h-10 mr-3 bg-slate-50 rounded-full p-1">
            <img
              src={avatar}
              alt="Photographer"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <h3 className="text-sm font-medium">{video.user.name}</h3>
        </div>

        {/* Download Button */}
        <button
          className="bg-green-400 hover:bg-green-500 flex gap-2 text-white font-medium px-6 py-3 rounded-xl transition-colors duration-300"
          onClick={() =>
            downloadFile(
              video.video_files[0].link,
              `pexels-video-${video.id}.mp4`,
              setDownloading
            )
          }
          download
          target="_blank"
          rel="noopener noreferrer"
        >
          {downloading ? (
            <Loader className="animate-spin" />
          ) : (
            <Download className="w-5 h-5" />
          )}
          {downloading ? "Downloading" : "Download"}
        </button>
      </div>
    </div>
  );
}

function MasonryLoading({
  columnsBreakPoints = { 640: 1, 768: 2, 1024: 3, 1280: 5 },
  count = 15,
}) {
  return (
    <MasonryContainer>
      {Array(count)
        .fill()
        .map((_, i) => (
          <div
            key={i}
            className="animate-pulse relative rounded-xl overflow-hidden mb-4 sm:mb-6"
            style={{ height: `${200 + Math.random() * 200}px` }}
          >
            <div className="w-full h-full bg-gray-200"></div>
          </div>
        ))}
    </MasonryContainer>
  );
}
export { MasonryContainer, MasonryPhotoCard, MasonryVideoCard, MasonryLoading };
