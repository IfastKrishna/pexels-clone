import ChallangeCard from "@/components/Challenge/Card";
import Container from "@/components/container";
import PageFilter from "@/components/Filter/PageFilter";
import Footer from "@/components/Footer";
import MainHeader from "@/components/Header/Main";
import { Crown } from "lucide-react";
import React from "react";

function page() {
  return (
    <div className="bg-black w-full min-h-screen">
      <div className="sticky top-0 z-50 bg-white border-b border-gray-100">
        <MainHeader />
      </div>
      <div className="bg-white rounded-b-3xl md:rounded-b-[100px] w-full py-10">
        <Container className="">
          <div className="sm:flex sm:justify-center my-4">
            <PageFilter />
          </div>
          <h1 className="text-4xl font-medium text-center text-gray-800 my-5">
            Challenges
          </h1>
          <p className="text-center text-gray-600 max-w-3xl font-medium py-5 mx-auto">
            Photo and video competitions designed to inspire you to get out
            there, shoot, and share your work with the world. You might even win
            prizes while you do.
          </p>

          <div className="my-12 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 space-y-10 sm:space-y-0 sm:space-x-14">
            <ChallangeCard
              images={[
                "https://images.pexels.com/photos/27869834/pexels-photo-27869834.jpeg?h=400&fit=crop&crop=focalpoint&dpr=1",
                "https://images.pexels.com/photos/11289040/pexels-photo-11289040.jpeg?h=400&fit=crop&crop=focalpoint&dpr=1",
                "https://images.pexels.com/photos/7961670/pexels-photo-7961670.jpeg?h=400&fit=crop&crop=focalpoint&dpr=1",
              ]}
            />
            <div className="flex flex-col justify-center gap-5">
              <div>
                <button className="rounded-full px-4 py-2 font-medium flex items-center gap-1 bg-gray-100 text-gray-800 border">
                  <span className="w-2 h-2 bg-red-500 rounded-full" />2 days
                  left
                </button>
                <p className="text-3xl font-medium text-gray-800 my-5">
                  Mocha Mousse: Homepage Challenge
                </p>
                <p className="text-gray-600 font-medium">
                  Submit your best photos and videos featuring the color mocha!
                </p>
                {/* card */}
                <div className="border py-3 p-4 rounded-xl flex items-center gap-5 w-full mt-5">
                  <div className="bg-gray-100 inline-block p-2 rounded-full">
                    <Crown className="w-8 h-8" />
                  </div>
                  <div className="flex flex-col">
                    <p className="text-gray-800 font-semibold">Prizes</p>
                    <p className="text-xl text-gray-800 font-medium">
                      Homepage Feature
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-5">
                  <button className="border rounded-xl px-4 py-3 mt-5 bg-black hover:bg-black/90 text-white font-medium w-full">
                    Join the Challenge
                  </button>
                  <button className="border rounded-xl px-4 py-3 mt-5 bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium w-full">
                    Learn more
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
      <Container className="py-10">
        <h1 className="text-center text-white text-3xl font-medium">
          Past Challenges
        </h1>

        <div className="my-12 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 space-y-10 sm:space-y-0 sm:space-x-14">
          <ChallangeCard
            images={[
              "https://images.pexels.com/photos/6931839/pexels-photo-6931839.jpeg?auto=compress&cs=tinysrgb&h=392&w=280&fit=crop&crop=focalpoint&dpr=1",
              "https://images.pexels.com/photos/6246651/pexels-photo-6246651.jpeg?auto=compress&cs=tinysrgb&h=200&w=180&fit=crop&crop=focalpoint&dpr=1",
              "https://images.pexels.com/photos/27853687/pexels-photo-27853687.jpeg?auto=compress&cs=tinysrgb&h=200&w=180&fit=crop&crop=focalpoint&dpr=1",
            ]}
          />
          <div className="flex flex-col justify-center gap-5">
            <div>
              <button className="rounded-full px-4 py-2 font-medium flex items-center gap-1 text-white border border-gray-600">
                <span className="w-2 h-2 bg-gray-500 rounded-full" />
                Ended
              </button>
              <p className="text-3xl font-medium text-white my-5">
                Manifesting 2025
              </p>
              <p className="text-white font-medium">
                Submit your best photos and videos featuring the color mocha!
              </p>

              <button className="rounded-xl px-4 py-3 mt-5 bg-[#393939] hover:bg-[#393939]/90 duration-300 transition-colors text-white font-medium w-full">
                Learn more
              </button>
            </div>
          </div>
        </div>
        {/* next Cards */}
        <div className="my-12 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 space-y-10 sm:space-y-0 sm:space-x-14">
          <ChallangeCard
            images={[
              "https://images.pexels.com/photos/6931839/pexels-photo-6931839.jpeg?auto=compress&cs=tinysrgb&h=392&w=280&fit=crop&crop=focalpoint&dpr=1",
              "https://images.pexels.com/photos/6246651/pexels-photo-6246651.jpeg?auto=compress&cs=tinysrgb&h=200&w=180&fit=crop&crop=focalpoint&dpr=1",
              "https://images.pexels.com/photos/27853687/pexels-photo-27853687.jpeg?auto=compress&cs=tinysrgb&h=200&w=180&fit=crop&crop=focalpoint&dpr=1",
            ]}
          />
          <div className="flex flex-col justify-center gap-5">
            <div>
              <button className="rounded-full px-4 py-2 font-medium flex items-center gap-1 text-white border border-gray-600">
                <span className="w-2 h-2 bg-gray-500 rounded-full" />
                Ended
              </button>
              <p className="text-3xl font-medium text-white my-5">
                Manifesting 2025
              </p>
              <p className="text-white font-medium">
                Submit your best photos and videos featuring the color mocha!
              </p>

              <button className="rounded-xl px-4 py-3 mt-5 bg-[#393939] hover:bg-[#393939]/90 duration-300 transition-colors text-white font-medium w-full">
                Learn more
              </button>
            </div>
          </div>
        </div>
      </Container>
      <div className="bg-white">
        <Footer />
      </div>
    </div>
  );
}

export default page;
