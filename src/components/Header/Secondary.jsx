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
  Video,
  X,
  Youtube,
} from "lucide-react";
import NavButton from "../NavButton";

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

const SecondaryHeader = ({ bg = "bg-black/50" }) => {
  return (
    <header
      className={`header flex justify-between gap-4 items-center py-3 px-4 sm:px-8 text-white ${bg}`}
    >
      <Link href="/" className="text-2xl font-medium">
        Pexels
      </Link>
      <div className="flex gap-4 items-center">
        <div className="hidden md:flex items-center">
          <Popover
            position="bottom"
            variant="default"
            triggerName="Explore"
            trigger="hover"
            triggerClassName={`px-6 py-3 hover:bg-black/40 font-medium color-transition  duration-300`}
            content={
              <div flex="flex flex-col gap-2 p-4">
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
            children="Explore"
          />
        </div>
        <button className="hidden md:block font-medium hover:bg-black/40 py-3 px-6 rounded-full transition-colors duration-300">
          License
        </button>
        <div className="hidden md:flex items-center">
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
                    className={`flex text-nowrap items-center gap-3 px-4 py-2.5 rounded-xl hover:bg-gray-800/10 cursor-pointer transition-colors text-gray-600`}
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
                  <Linkedin className="fa w-5 h-5 hover:text-gray-700 cursor-pointer" />
                  <X className="fab fa-xing w-5 h-5 hover:text-gray-700 cursor-pointer" />
                </div>
              </div>
            }
          />
        </div>
        <button className="py-3 px-6 font-medium bg-white text-black rounded-xl">
          Join
        </button>
        
        <NavButton />
      </div>
    </header>
  );
};

export default SecondaryHeader;
