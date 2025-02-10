"use client";
import { useEffect, useState } from "react";
import Container from "@/components/container";
import NewTrendingFilter from "@/components/Filter/Filter1";
import Footer from "@/components/Footer";
import Header from "@/components/Header/Main";
import {
  MasonryContainer,
  MasonryLoading,
  MasonryPhotoCard,
} from "@/components/Masonry";
import useSearchPhotos from "@/lib/query/useSearchPhotos";
import { useParams } from "next/navigation";
import KeywordSearch from "@/components/Filter/keywords";
import FilterQuery from "@/components/Filter/QueryFilter";

export default function Home() {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(20);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const query = useParams();

  const {
    data,
    refetch: refetch,
    isPending,
  } = useSearchPhotos({
    search: query?.search,
    page,
    per_page: limit,
  });

  const loadMorePhotos = async () => {
    setIsLoadingMore(true);
    setPage((prevPage) => prevPage + 1);
    setLimit(20 * page);
    await refetch();
    setIsLoadingMore(false);
  };

  useEffect(() => {
    refetch();
  }, [page, query.search, refetch]);

  return (
    <div className="w-full">
      <div className="w-full sticky top-0 z-50 bg-white shadow-sm">
        <Header />
      </div>

      <div className="relative">
        <Container className="">
          <KeywordSearch keywords={data?.keywords} />
          {/* Search Query */}
          <h1 className="text-4xl font-medium  text-gray-800 my-5">
            {query.search ? `Free ${query.search} Photos` : "Trending Photos"}{" "}
          </h1>

          {/* Query fileter  */}
          <FilterQuery activetab="Photos" />
          <MasonryContainer>
            {data?.photos?.map((photo) => (
              <MasonryPhotoCard key={photo.id} photo={photo} />
            ))}
          </MasonryContainer>
          {(isPending || isLoadingMore) && <MasonryLoading count={limit} />}
          <div className="flex justify-center mt-4">
            <button
              onClick={loadMorePhotos}
              className="px-4 py-2 bg-blue-500 text-white rounded"
              disabled={isLoadingMore}
            >
              {isLoadingMore ? "Loading..." : "Load More"}
            </button>
          </div>
        </Container>

        <Footer />
      </div>
    </div>
  );
}
