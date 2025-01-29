import Container from "@/components/container";
import PageFilter from "@/components/Filter/PageFilter";
import Footer from "@/components/Footer";
import MainHeader from "@/components/Header/Main";
import LeaderboardProfile from "@/components/Leaderboard/Profile";
import React from "react";

const photographers = [
  {
    profilePicture:
      "https://images.pexels.com/users/avatars/139433722/david-pickup-858.png?auto=compress&fit=crop&h=80&w=80&dpr=1",
    name: "David Pickup",
    country: "GB",
    views: "35.4M views",
    images: [
      "https://images.pexels.com/photos/30387395/pexels-photo-30387395.jpeg?w=200&h=200&fit=crop&dpr=1",
      "https://images.pexels.com/photos/30387389/pexels-photo-30387389.jpeg?w=200&h=200&fit=crop&dpr=1",
      "https://images.pexels.com/photos/30431800/pexels-photo-30431800.jpeg?w=200&h=200&fit=crop&dpr=1",
      "https://images.pexels.com/photos/30412499/pexels-photo-30412499.jpeg?w=200&h=200&fit=crop&dpr=1",
    ],
  },
  {
    profilePicture:
      "https://images.pexels.com/users/avatars/15862958/sergei-starostin-774.jpeg?auto=compress&fit=crop&h=80&w=80&dpr=1",
    name: "Jessica Felz",
    country: "US",
    views: "12.1M views",
    images: [
      "https://images.pexels.com/videos/30281931/pexels-photo-30281931.jpeg?w=200&h=200&fit=crop&dpr=1",
      "https://images.pexels.com/photos/1432669/pexels-photo-1432669.jpeg?w=200&h=200&fit=crop&dpr=1",
      "https://images.pexels.com/photos/1432670/pexels-photo-1432670.jpeg?w=200&h=200&fit=crop&dpr=1",
      "https://images.pexels.com/videos/30281929/pexels-photo-30281929.jpeg?w=200&h=200&fit=crop&dpr=1",
    ],
  },
  {
    profilePicture:
      "https://images.pexels.com/users/avatars/593127578/layg-traveller-825.png?auto=compress&fit=crop&h=80&w=80&dpr=1",
    name: "Mikhail Nilov",
    country: "RU",
    views: "9.8M views",
    images: [
      "https://images.pexels.com/photos/4047034/pexels-photo-4047034.jpeg?w=200&h=200&fit=crop&dpr=1",
      "https://images.pexels.com/photos/4047035/pexels-photo-4047035.jpeg?w=200&h=200&fit=crop&dpr=1",
      "https://images.pexels.com/photos/4047036/pexels-photo-4047036.jpeg?w=200&h=200&fit=crop&dpr=1",
      "https://images.pexels.com/photos/4047037/pexels-photo-4047037.jpeg?w=200&h=200&fit=crop&dpr=1",
    ],
  },
  {
    profilePicture:
      "https://images.pexels.com/users/avatars/351891426/lazarus-ziridis-736.jpeg?auto=compress&fit=crop&h=80&w=80&dpr=1",
    name: "Anna Tarazevich",
    country: "BY",
    views: "7.2M views",
    images: [
      "https://images.pexels.com/photos/30424498/pexels-photo-30424498.jpeg?w=200&h=200&fit=crop&dpr=1",
      "https://images.pexels.com/photos/3691154/pexels-photo-3691154.jpeg?w=200&h=200&fit=crop&dpr=1",
      "https://images.pexels.com/photos/30424496/pexels-photo-30424496.jpeg?w=200&h=200&fit=crop&dpr=1",
      "https://images.pexels.com/photos/30424497/pexels-photo-30424497.jpeg?w=200&h=200&fit=crop&dpr=1",
    ],
  },
  {
    profilePicture:
      "https://images.pexels.com/users/avatars/3143825/altaf-shah-764.jpeg?auto=compress&fit=crop&h=80&w=80&dpr=1",
    name: "cottonbro studio",
    country: "RU",
    views: "5.9M views",
    images: [
      "https://images.pexels.com/photos/4821798/pexels-photo-4821798.jpeg?w=200&h=200&fit=crop&dpr=1",
      "https://images.pexels.com/photos/4821799/pexels-photo-4821799.jpeg?w=200&h=200&fit=crop&dpr=1",
      "https://images.pexels.com/photos/4821800/pexels-photo-4821800.jpeg?w=200&h=200&fit=crop&dpr=1",
      "https://images.pexels.com/photos/4821801/pexels-photo-4821801.jpeg?w=200&h=200&fit=crop&dpr=1",
    ],
  },
  {
    profilePicture:
      "https://images.pexels.com/users/avatars/754620659/dmitrijs-lasko-408.png?auto=compress&fit=crop&h=80&w=80&dpr=1",
    name: "Ron McClain",
    country: "US",
    views: "4.6M views",
    images: [
      "https://images.pexels.com/photos/2387847/pexels-photo-2387847.jpeg?w=200&h=200&fit=crop&dpr=1",
      "https://images.pexels.com/photos/2387848/pexels-photo-2387848.jpeg?w=200&h=200&fit=crop&dpr=1",
      "https://images.pexels.com/photos/2387849/pexels-photo-2387849.jpeg?w=200&h=200&fit=crop&dpr=1",
      "https://images.pexels.com/photos/30409012/pexels-photo-30409012.jpeg?w=200&h=200&fit=crop&dpr=1",
    ],
  },
  {
    profilePicture:
      "https://images.pexels.com/users/avatars/2782849/aksinfo7-972.jpeg?auto=compress&fit=crop&h=80&w=80&dpr=1",
    name: "Julia Volk",
    country: "RU",
    views: "3.8M views",
    images: [
      "https://images.pexels.com/photos/3768167/pexels-photo-3768167.jpeg?w=200&h=200&fit=crop&dpr=1",
      "https://images.pexels.com/photos/3768168/pexels-photo-3768168.jpeg?w=200&h=200&fit=crop&dpr=1",
      "https://images.pexels.com/photos/3768169/pexels-photo-3768169.jpeg?w=200&h=200&fit=crop&dpr=1",
      "https://images.pexels.com/photos/3768170/pexels-photo-3768170.jpeg?w=200&h=200&fit=crop&dpr=1",
    ],
  },
];

function Page() {
  return (
    <div className="w-full">
      <div className="w-full bg-white z-50 sticky top-0">
        <MainHeader />
      </div>
      <Container className="py-4 sm:py-8 ">
        <div className="flex justify-center my-5">
          <PageFilter />
        </div>
        <h1 className="text-3xl font-medium text-center">Leaderboard</h1>
        <p className="font-medium text-center text-gray-600 max-w-3xl my-5 mx-auto">
          Members with the most views on content added in the last 4 weeks.
        </p>

        <div className="flex flex-wrap gap-5">
          <button className="bg-black rounded-full py-3 px-6 hover:bg-black/90 font-medium text-white">
            Recent
          </button>
          <button className="bg-white rounded-full py-3 px-6 hover:bg-gray-100 font-medium transition-colors duration-400">
            All Time
          </button>
        </div>

        {photographers.map((photographer, index) => (
          <LeaderboardProfile key={index} {...photographer} no={index + 1} />
        ))}
      </Container>

      <Footer />
    </div>
  );
}

export default Page;
