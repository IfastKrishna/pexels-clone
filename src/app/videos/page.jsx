"use client";
import { useEffect, useState } from "react";
import Container from "@/components/container";
import NewTrendingFilter from "@/components/Filter/Filter1";
import PageFilter from "@/components/Filter/PageFilter";
import Footer from "@/components/Footer";
import Header from "@/components/Header/Main";
import HeroVideos from "@/components/Hero/Videos";
import {
  MasonryContainer,
  MasonryLoading,
  MasonryVideoCard,
} from "@/components/Masonry";
import useIsScrolled from "@/hook/isScrolled";
import useSearchVideos from "@/lib/query/useSearchVideos";

export default function Page() {
  const scrolled = useIsScrolled("82.5vh");
  const [page, setPage] = useState(1);
  const [limit] = useState(20);
  const [videos, setVideos] = useState([]);

  const { data, refetch, isPending } = useSearchVideos({
    search: "nature",
    page: page,
    limit: limit,
  });

  useEffect(() => {
    if (data?.videos) {
      setVideos((prevVideos) => [...prevVideos, ...data.videos]);
    }
  }, [data]);

  useEffect(() => {
    refetch();
  }, [page, refetch]);

  const loadMoreVideos = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <div className="relative">
      <HeroVideos />

      {scrolled && (
        <div className="sticky top-0 z-50 bg-white shadow-md">
          <Header />
        </div>
      )}

      <Container className="py-4 sm:py-8 flex justify-center">
        <PageFilter />
      </Container>

      <Container className="mx-4 py-2">
        <NewTrendingFilter />
      </Container>

      <Container className="py-4 sm:py-8">
        <MasonryContainer>
          {videos.map((video, i) => (
            <MasonryVideoCard
              key={`pexels-videos-${i}-${video.id}`}
              video={video}
            />
          ))}
        </MasonryContainer>
        {isPending && <MasonryLoading count={limit} />}

        {!isPending && (
          <div className="flex justify-center mt-4">
            <button
              onClick={loadMoreVideos}
              className="px-6 py-3 bg-gray-100 text-black font-medium  rounded-xl hover:bg-gray-200 transition-colors duration-300"
            >
              Load More
            </button>
          </div>
        )}
      </Container>

      <Footer />
    </div>
  );
}
