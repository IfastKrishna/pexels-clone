import {
  AtSign,
  Facebook,
  Globe,
  Instagram,
  Linkedin,
  X,
  Youtube,
} from "lucide-react";
import React from "react";

function Footer() {
  return (
    <div className="py-6 px-4 flex flex-col items-center">
      <div className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          <div>
            <h1 className="text-4xl font-semibold mb-4">
              Where stories come together.
            </h1>
            <div className="flex flex-wrap gap-4">
              <button className="bg-gray-100 hover:bg-gray-200 text-nowrap text-gray-800 font-semibold py-3 px-6 rounded-xl">
                Download on iOS
              </button>
              <button className="bg-gray-100 hover:bg-gray-200 text-nowrap text-gray-800 font-semibold py-3 px-6 rounded-xl">
                Download on Android
              </button>
            </div>
            <div className="flex space-x-4 mt-10">
              <Instagram className="fab fa-instagram text-2xl" />
              <Facebook className="fab fa-facebook text-2xl" />
              <Youtube className="fab fa-youtube text-2xl" />
              <AtSign className="fab fa-tiktok text-2xl" />
              <Linkedin className="fab fa-linkedin text-2xl" />
              <X className="fab fa-xing text-2xl" />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h2 className="text-lg font-semibold text-gray-400 mb-4">
                PEXELS
              </h2>
              <ul className="space-y-2 font-medium">
                <li>Free Stock Photos</li>
                <li>Free Videos</li>
                <li>Popular searches</li>
                <li>Collections</li>
                <li>Challenges</li>
                <li>Leaderboard</li>
                <li>Other plugins & apps</li>
              </ul>
            </div>
            <div>
              <h2 className="text-lg text-gray-400 font-semibold mb-4">
                COMPANY
              </h2>
              <ul className="space-y-2 font-medium">
                <li>About</li>
                <li>Blog</li>
                <li>Help Center</li>
                <li>Report content</li>
                <li>Become a Hero</li>
                <li>Partner with Pexels</li>
                <li>Image & Video API</li>
                <li>Sign Up</li>
              </ul>
            </div>
          </div>
          <div>
            <h2 className="text-lg font-semibold mb-4 text-gray-400">
              FREE STOCK PHOTOS
            </h2>
            <div className="flex flex-wrap gap-4 font-semibold">
              <button className="bg-white text-gray-800 py-2.5 px-6 border hover:bg-gray-100 rounded-xl">
                Black and white photography
              </button>
              <button className="bg-white text-gray-800 py-2.5 px-6 border hover:bg-gray-100 rounded-xl">
                Happy birthday images
              </button>
              <button className="bg-white text-gray-800 py-2.5 px-6 border hover:bg-gray-100 rounded-xl">
                Free business videos
              </button>
              <button className="bg-white text-gray-800 py-2.5 px-6 border hover:bg-gray-100 rounded-xl">
                Happy new year images
              </button>
              <button className="bg-white text-gray-800 py-2.5 px-6 border hover:bg-gray-100 rounded-xl">
                Cool wallpapers
              </button>
              <button className="bg-white text-gray-800 py-2.5 px-6 border hover:bg-gray-100 rounded-xl">
                Best HD wallpapers
              </button>
              <button className="bg-white text-gray-800 py-2.5 px-6 border hover:bg-gray-100 rounded-xl">
                Galaxy wallpaper
              </button>
              <button className="bg-white text-gray-800 py-2.5 px-6 border hover:bg-gray-100 rounded-xl">
                Lock screen wallpaper
              </button>
              <button className="bg-white text-gray-800 py-2.5 px-6 border hover:bg-gray-100 rounded-xl">
                iPhone wallpaper
              </button>
              <button className="bg-white text-gray-800 py-2.5 px-6 border hover:bg-gray-100 rounded-xl">
                4K wallpaper
              </button>
              <button className="bg-white text-gray-800 py-2.5 px-6 border hover:bg-gray-100 rounded-xl">
                Samsung wallpaper
              </button>
              <button className="bg-white text-gray-800 py-2.5 px-6 border hover:bg-gray-100 rounded-xl">
                Love wallpaper
              </button>
              <button className="bg-white text-gray-800 py-2.5 px-6 border hover:bg-gray-100 rounded-xl">
                Mobile wallpaper
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center w-full border-t border-gray-300 pt-4 font-medium">
          <div className="text-sm">&copy; 2025 Pexels</div>
          <div className="flex space-x-4 text-sm  mt-4 md:mt-0">
            <a href="#">Terms of Use</a>
            <a href="#">Privacy Policy</a>
            <a href="#">License</a>
            <a href="#">Imprint</a>
            <a href="#">Cookies Policy</a>
          </div>
          <button className="flex items-center space-x-2 mt-4 md:mt-0 border py-2 px-4 rounded-xl text-sm font-medium">
            <Globe className="w-4 h-5" />
            <span className="text-sm">English</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Footer;
