"use client";
import React from "react";
import Link from "next/link";
import Popover from "../Popover";
import {
  AppWindow,
  AtSign,
  Award,
  Ellipsis,
  Facebook,
  Globe,
  Instagram,
  Linkedin,
  Rocket,
  Search,
  Video,
  X,
  Youtube,
} from "lucide-react";
import NavButton from "../NavButton";
import { useState } from "react";
import SearchBar from "../SearchBar";
import { useSearch } from "@/context/useSearch";
import { useSelectedOption } from "@/context/selectedOption";
import { useRouter } from "next/navigation";

const exploreMenu = [
  {
    name: "Discover Photos",
    icon: <Globe className="h-5 w-5" />,
    selected: false,
  },
  {
    name: "Leaderboard",
    icon: <Rocket className="h-5 w-5" />,
    selected: false,
  },
  {
    name: "Challenges",
    icon: <Award className="h-5 w-5" />,
    selected: false,
  },
  {
    name: "Free Videos",
    icon: <Video className="h-5 w-5" />,
    selected: false,
  },
  {
    name: "Pexels Blog",
    icon: <AppWindow className="h-5 w-5" />,
    selected: false,
  },
];

const actionMenu = [
  {
    name: "Login",
  },
  {
    name: "Image & Video API",
  },
  {
    name: "Apps & Plugins",
  },
  {
    name: "Help Center",
  },
  {
    name: "Report Content",
  },
  {
    name: "Paternships",
  },
  {
    name: "Imprints & Terms",
  },
];

const MainHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { selectedOption } = useSelectedOption();
  const [loading, setLoading] = React.useState(false);
  const router = useRouter();
  const { searchTerm, updateSearchTerm } = useSearch();

  function handleSearch(e) {
    setLoading(true);
    e.preventDefault();
    if (!searchTerm[selectedOption?.toLowerCase()]) return;
    if (selectedOption === "Photos")
      router.push(`/search/${searchTerm["photos"]}`);
    else router.push(`/videos/${searchTerm["videos"]}`);
  }

  const setSearch = (value) => {
    updateSearchTerm(value, selectedOption?.toLowerCase());
  };

  return (
    <header className={`w-full relative bg-white text-black`}>
      {/* Main Header */}
      <div
        className={`flex justify-between items-center gap-4 py-3 px-4 sm:px-8 ${
          isMenuOpen ? "text-black" : "text-white"
        }`}
      >
        <Link href="/" className={`text-2xl font-medium text-black`}>
          <svg
            width="85"
            height="38"
            className="Icon_color-whiteFFFFFF__qY7ST spacing_noMargin__F5u9R spacing_omr50__lktke spacing_dmr30__rqEuC spacing_mmr15__ntge_ spacing_tmr15__EyVWJ"
            viewBox="0 0 512 227"
          >
            <g
              style={{
                mixBlendMode: "luminosity",
              }}
            >
              <path d="M511.187 131.02C509.164 120.486 506.384 114.524 503.211 107.417C501.187 102.884 499.317 98.6027 498.694 95.7914C497.152 88.8342 497.908 80.1165 498.265 76.9559H479.596L476.451 81.9607C469.281 93.3721 453.608 118.338 453.607 118.339C444.924 131.386 434.121 147.618 418.553 153.758C415.613 154.751 409.393 156.767 404.469 151.122C399.777 145.744 400.185 139.937 400.204 139.692L400.223 139.433L400.235 139.275L400.351 139.165L400.543 138.982C421.115 119.456 440.747 98.0267 450.557 84.3877C461.856 68.6797 467.522 55.7517 471.946 44.8671C474.701 38.0835 480.429 21.0609 474.129 9.53638C471.495 4.71716 467.034 1.44608 461.567 0.325525C460.497 0.106481 459.471 0 458.432 0C446.837 0 433.098 14.565 416.43 44.5274C402.557 69.4604 392.695 90.8751 387.12 108.177C384.235 117.129 382.339 128.47 382.339 128.471C381.714 129.595 370.375 142.671 359.178 150.087C355.43 152.569 349.908 155.638 342.002 155.638C334.841 155.638 328.199 151.258 328.197 151.257C328.2 151.256 339.703 145.052 358.243 126.848C368.262 117.009 372.497 103.566 369.295 91.7638C364.27 73.2637 346.588 71.826 341.288 71.826C326.515 71.8713 314.504 81.4527 308.708 89.6434C294.733 109.381 295.344 125.544 297.439 137.419C298.118 141.257 299.355 145.038 301.115 148.654L301.29 149.012C301.288 149.013 279.271 164.432 266.053 146.596C260.98 139.75 253.158 125.537 253.157 125.534L299.238 76.9613H274.472C258.72 93.2817 243.999 108.701 243.996 108.704C243.995 108.701 233.145 87.9123 227.999 76.9559H207.991C209.743 80.4129 211.508 83.9821 213.435 87.8768C219.788 100.719 230.978 122.349 230.979 122.351C230.978 122.353 226.203 127.339 226.202 127.341C223.675 129.967 215.982 137.958 203.609 145.553C196.697 149.788 189.441 152.685 181.427 154.409C175.157 155.759 167.083 155.908 162.222 154.604C159.442 153.858 154.206 151.303 154.206 151.303C154.208 151.301 168.684 142.237 184.317 126.858C194.327 117.011 198.563 103.568 195.371 91.7732C190.344 73.2768 172.662 71.8395 167.362 71.8395C152.593 71.8845 140.578 81.4614 134.777 89.6491C120.804 109.375 121.416 125.547 123.511 137.432C124.127 140.925 126.491 147.497 126.491 147.497C115.785 153.142 105.638 156.512 93.2508 156.956C92.1763 156.995 87.5926 157.012 86.1204 156.934C85.7569 156.915 84.623 156.763 84.623 156.763C84.6237 156.763 87.2107 155.105 87.8157 154.692C103.092 144.267 109.834 125.528 110.298 108.996C110.682 95.3566 107.46 84.338 101.226 77.974C97.3124 73.9742 92.1345 71.9054 85.8352 71.826H85.5688C74.4682 71.826 61.8243 78.4821 53.018 86.7525C50.955 88.6901 45.1151 95.26 45.1149 95.2603L48.7384 76.9532H29.566L0 226.271H19.1834L36.48 138.885C40.2234 122.447 45.9629 112.029 56.9644 101.665L57.1455 101.51C59.8693 99.1994 62.9849 97.0036 65.918 95.328C70.7655 92.5572 75.1511 91.152 78.9529 91.152C81.208 91.152 83.2428 91.6543 85.0023 92.6447C91.2279 96.1683 91.9858 104.727 92.3933 109.326C93.9896 127.445 80.0006 139.727 78.4002 141.068C73.7991 144.917 68.9992 146.788 63.7256 146.788C56.6649 146.788 51.3729 144.284 48.4039 142.896C48.2907 143.445 47.5469 147.095 47.5469 147.095C46.8113 150.765 45.389 158.138 45.3888 158.139C53.0786 164.721 68.412 172.104 88.6396 173.266C90.28 173.362 91.9431 173.41 93.5821 173.41C108.447 173.41 123.012 169.522 136.873 161.854L137.135 161.71L137.36 161.904C142.623 166.436 147.692 168.647 149.358 169.373C159.042 173.596 169.583 173.335 170.617 173.335C183.411 173.335 195.361 169.647 198.718 168.517C219.995 161.354 232.065 147.959 236.609 142.977L240.074 139.324L242.274 143.381C245.181 148.764 248.476 154.865 254.285 161.506C256.697 164.264 265.809 173.26 281.817 173.26C297.013 173.26 312.644 162.989 312.645 162.988C312.648 162.991 317.775 167.024 323.309 169.632C330.243 172.899 338.323 173.252 341.475 173.252C357.227 173.252 370.233 167.39 383.645 154.243L384.105 153.792C384.106 153.794 386.055 158.429 387.734 160.845C396.363 173.254 407.477 173.294 411.374 173.294C414.976 173.294 421.025 172.67 425.577 170.911C445.916 163.047 461.71 141.167 469.314 128.825C469.315 128.823 475.112 119.634 481.964 105.539L483.494 102.455C483.495 102.456 487.147 111.122 487.148 111.125C489.25 116.226 491.21 121.908 492.143 125.6C494.718 135.576 496.443 144.345 491.431 150.591C488.987 153.607 483.95 156.851 478.666 156.851C475.899 156.851 473.29 155.986 470.912 154.279C470.011 153.616 469.077 152.78 468.125 151.79C464.24 156.638 460.211 161.063 456.139 164.956C459.638 167.489 467.811 173.453 480.048 173.453C483.773 173.453 489.075 172.493 492.539 170.772C506.635 163.769 514.679 149.203 511.187 131.02ZM408.648 103.39L410.031 99.942C415.213 87.0267 422.71 71.8007 432.95 53.394C444.791 32.107 452.665 23.6148 456.304 20.4475L457.405 19.4904L458.066 18.9154L458.107 19.782L458.176 21.2241C458.376 25.5125 456.987 31.7896 454.461 38.0155C450.253 48.3681 445.298 59.6522 435.181 73.718C430.12 80.7499 421.854 90.4729 411.905 101.095L409.353 103.823L407.815 105.467L408.648 103.39ZM145.307 136.878L144.861 137.202C144.861 137.202 144.221 135.9 143.86 134.868C142.402 130.693 141.92 123.862 142.646 118.327C143.928 108.754 148.185 102.304 149.957 99.9748C155.245 93.023 161.306 89.2002 166.955 88.538C168.919 88.3079 172.297 88.586 175.232 91.4015C177.994 94.0512 182.867 103.41 172.359 114.719C169.155 118.165 166.306 120.924 159.623 126.442C154.621 130.592 146.82 135.864 145.307 136.878ZM318.664 137.054L318.177 137.379L318.019 136.821L317.469 134.87C315.935 129.43 315.528 123.861 316.26 118.32C317.524 108.782 321.793 102.31 323.569 99.97C328.853 93.0179 334.89 88.9582 340.567 88.5394C340.936 88.5117 341.323 88.4931 341.723 88.4931C344.486 88.4931 346.816 89.4416 348.844 91.3926C351.605 94.0512 356.469 103.424 345.959 114.718C342.751 118.167 339.902 120.927 333.237 126.446C327.744 130.994 318.754 136.994 318.664 137.054Z"></path>
            </g>
          </svg>
        </Link>

        <div className="hidden sm:flex items-center sm:flex-1">
          <SearchBar
            className=" shadow-none border-none text-black"
            isLoading={loading}
            search={searchTerm[selectedOption?.toLowerCase()]}
            setSerch={setSearch}
            handleSubmit={handleSearch}
          />
        </div>
        <div className="flex-1 flex items-center justify-end sm:hidden">
          <Search className="h-6 w-6 text-gray-900 cursor-pointer" />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-4 text-black">
          <Popover
            position="bottom"
            variant="default"
            triggerName="Explore"
            trigger="hover"
            triggerClassName="px-6 py-3 hover:bg-black/40 font-medium duration-300"
            content={
              <div className="flex flex-col gap-2">
                {exploreMenu.map((o, i) => (
                  <div
                    key={`o.name-${i}`}
                    className={`flex items-center text-nowrap gap-3 px-4 py-3 rounded-xl hover:bg-gray-800/10 cursor-pointer transition-colors ${
                      o.selected ? "text-green-400" : "text-gray-600"
                    }`}
                  >
                    {o.icon}
                    <span className="font-medium">{o.name}</span>
                  </div>
                ))}
              </div>
            }
          />
          <button className="font-medium hover:bg-black/40 py-3 px-6 rounded-full transition-colors duration-300">
            License
          </button>
          <Popover
            triggerClassName="font-medium px-3 py-3 hover:bg-black/40"
            triggerName={<Ellipsis className="h-6 w-6" />}
            trigger="hover"
            indicator={false}
            content={
              <div className="flex flex-col">
                {actionMenu.map((o, i) => (
                  <div
                    key={`o.name-${i}`}
                    className="flex text-nowrap items-center gap-3 px-4 py-2.5 rounded-xl hover:bg-gray-800/10 cursor-pointer transition-colors text-gray-600"
                  >
                    <span className="font-medium">{o.name}</span>
                  </div>
                ))}
                <hr />
                <div className="flex items-center gap-3 my-1 px-4 py-2.5 rounded-xl hover:bg-gray-800/10 cursor-pointer transition-colors text-gray-600">
                  <span className="font-medium">Change Language</span>
                </div>
                <hr />
                <div className="flex items-center gap-2 py-2.5 px-4 rounded-xl text-gray-400">
                  <Instagram className="w-5 h-5 hover:text-gray-700 cursor-pointer" />
                  <Facebook className="w-5 h-5 hover:text-gray-700 cursor-pointer" />
                  <Youtube className="w-5 h-5 hover:text-gray-700 cursor-pointer" />
                  <AtSign className="w-5 h-5 hover:text-gray-700 cursor-pointer" />
                  <Linkedin className="w-5 h-5 hover:text-gray-700 cursor-pointer" />
                  <X className="w-5 h-5 hover:text-gray-700 cursor-pointer" />
                </div>
              </div>
            }
          />
          <button className="py-3 px-6 font-medium  bg-black text-white rounded-xl">
            Join
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-4 overflow-auto">
          <button
            className={`py-2 px-4 font-medium rounded-xl $bg-black text-white bg-black`}
          >
            Join
          </button>
          <NavButton isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} />
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full min-h-screen bg-white shadow-lg z-[60]">
          <div className="flex flex-col p-4">
            {exploreMenu.map((item, i) => (
              <div
                key={`mobile-${item.name}-${i}`}
                className="flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-100 rounded-xl"
              >
                {item.icon}
                <span className="font-medium">{item.name}</span>
              </div>
            ))}
            <hr className="my-2" />
            {actionMenu.map((item, i) => (
              <div
                key={`mobile-action-${i}`}
                className="flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-100 rounded-xl"
              >
                <span className="font-medium">{item.name}</span>
              </div>
            ))}
            <hr className="my-2" />
            <div className="flex items-center gap-2 py-2.5 px-4">
              <Instagram className="w-5 h-5 text-gray-400 hover:text-gray-700" />
              <Facebook className="w-5 h-5 text-gray-400 hover:text-gray-700" />
              <Youtube className="w-5 h-5 text-gray-400 hover:text-gray-700" />
              <AtSign className="w-5 h-5 text-gray-400 hover:text-gray-700" />
              <Linkedin className="w-5 h-5 text-gray-400 hover:text-gray-700" />
              <X className="w-5 h-5 text-gray-400 hover:text-gray-700" />
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default MainHeader;
