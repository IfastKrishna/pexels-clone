"use client";
import { useEffect, useState } from "react";
import Container from "@/components/container";
import Footer from "@/components/Footer";
import Header from "@/components/Header/Main";
import {
  MasonryContainer,
  MasonryLoading,
  MasonryVideoCard,
} from "@/components/Masonry";
import useSearchVideos from "@/lib/query/useSearchVideos";
import { useParams } from "next/navigation";
import KeywordSearch from "@/components/Filter/keywords";
import FilterQuery from "@/components/Filter/QueryFilter";

export default function Page() {
  const [page, setPage] = useState(1);
  const [limit] = useState(20);
  const query = useParams();

  const [videos, setVideos] = useState([]);

  const { data, refetch, isPending } = useSearchVideos({
    search: query.search,
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
      <div className="sticky top-0 z-50 bg-white border-b">
        <Header />
      </div>

      <div className="px-4 py-4 sm:flex sm:justify-center">
        <KeywordSearch
          keywords={[
            "nature",
            "city",
            "people",
            "food",
            "animals",
            "business",
            "technology",
            "industry",
            "science",
            "health",
            "sports",
            "arts",
            "culture",
            "history",
            "education",
            "religion",
            "politics",
          ]}
        />
      </div>

      <h1 className="text-4xl font-medium  text-gray-800 my-5 px-4 md:px-8">
        {query.search ? `Free ${query.search} Videos` : "Trending Videos"}{" "}
      </h1>

      <Container className="mx-4 py-2">
        <FilterQuery />
      </Container>

      <Container className="py-4 sm:py-8">
        {!isPending && (
          <MasonryContainer>
            {videos?.map((video, index) => (
              <MasonryVideoCard key={`${video.id}-${index}`} video={video} />
            ))}
          </MasonryContainer>
        )}

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
