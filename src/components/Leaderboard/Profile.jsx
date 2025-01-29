import { Mail } from "lucide-react";

export default function LeaderboardProfile({
  no = 1,
  profilePicture = "https://images.pexels.com/users/avatars/139433722/david-pickup-858.png?auto=compress&fit=crop&h=80&w=80&dpr=1",
  name = "David Pickup",
  country = "GB",
  views = "35.4M views",
  images = [
    "https://images.pexels.com/photos/30387395/pexels-photo-30387395.jpeg?w=200&h=200&fit=crop&dpr=1",
    "https://images.pexels.com/photos/30387389/pexels-photo-30387389.jpeg?w=200&h=200&fit=crop&dpr=1",
    "https://images.pexels.com/photos/30431800/pexels-photo-30431800.jpeg?w=200&h=200&fit=crop&dpr=1",
    "https://images.pexels.com/photos/30412499/pexels-photo-30412499.jpeg?w=200&h=200&fit=crop&dpr=1",
  ],
}) {
  return (
    <div className="w-full flex flex-col md:flex-row items-center p-4 space-x-0 space-y-10 md:space-y-0 md:space-x-24">
      <div className="md:w-[28%] flex items-center space-x-4">
        <div className="text-3xl font-bold">{no}</div>
        <img
          src={profilePicture}
          alt={`Profile picture of ${name}`}
          className="w-20 h-20 rounded-full"
        />
        <div>
          <div className="flex flex-col">
            <div className="flex items-center space-x-2">
              <span className="text-2xl font-medium">{name}</span>
              <span className="text-sm text-gray-500">{country}</span>
            </div>
            <span className="text-sm text-gray-500">{views}</span>
          </div>
          <div className="flex items-center space-x-2 mt-2">
            <button className="ml-auto px-4 py-2 bg-black text-white rounded">
              Follow
            </button>
            <button className="px-4 py-2 border border-gray-300 rounded">
              <Mail className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
      <div className=" md:w-[72%] flex space-x-2 overflow-x-auto custom-scrollbar">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Image ${index + 1}`}
            className="w-[200px] h-[200px] rounded"
          />
        ))}
      </div>
    </div>
  );
}
