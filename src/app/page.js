"use client";
import { useState } from "react";
import Container from "@/components/container";
import NewTrendingFilter from "@/components/Filter/Filter1";
import PageFilter from "@/components/Filter/PageFilter";
import Footer from "@/components/Footer";
import Header from "@/components/Header/Main";
import HeroPhotos from "@/components/Hero/Photos";
import {
  MasonryContainer,
  MasonryLoading,
  MasonryPhotoCard,
} from "@/components/Masonry";
import useIsScrolled from "@/hook/isScrolled";
import useSearchPhotos from "@/lib/query/useSearchPhotos";

export default function Home() {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(20);
  const [sortBy, setSortBy] = useState("newest");
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  const {
    data,
    refetch: refetch,
    isPending,
  } = useSearchPhotos({
    search: "current",
    page,
    per_page: limit,
    sortby: sortBy?.toLowerCase(),
  });

  const scrolled = useIsScrolled("82.5vh");

  const loadMorePhotos = async () => {
    setIsLoadingMore(true);
    setPage((prevPage) => prevPage + 1);
    setLimit(20 * page);
    await refetch();
    setIsLoadingMore(false);
  };

  return (
    <div className="w-full">
      {scrolled && (
        <div className="w-full fixed top-0 z-50 bg-white shadow-md">
          <Header />
        </div>
      )}
      <div className="relative">
        <HeroPhotos />

        <div className="my-4 mx-4 sm:flex sm:justify-center">
          <PageFilter />
        </div>

        <Container className="py-2">
          <NewTrendingFilter filter={sortBy} setFilter={setSortBy} />
        </Container>

        <Container className="py-4 sm:py-8">
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
