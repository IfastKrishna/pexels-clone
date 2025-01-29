"use client";
import Container from "@/components/container";
import NewTrendingFilter from "@/components/Filter/Filter1";
import KeywordSearch from "@/components/Filter/keywords";
import PageFilter from "@/components/Filter/PageFilter";
import Footer from "@/components/Footer";
import Header from "@/components/Header/Main";
import HeroPhotos from "@/components/Hero/Photos";
import { MasonryContainer, MasonryPhotoCard } from "@/components/Masonry";
import useIsScrolled from "@/hook/isScrolled";
import useSearchPhotos from "@/lib/query/useSearchPhotos";

export default function Home() {
  const { data } = useSearchPhotos({ search: "current" });

  console.log(data);
  const scrolled = useIsScrolled("82.5vh");

  return (
    <div className="relative">
      <HeroPhotos />

      {scrolled && (
        <div className="sticky top-0 z-50 bg-white shadow-md">
          <Header />
        </div>
      )}

      {/* <Container>
        <KeywordSearch keywords={data?.keywords} />
      </Container> */}

      <Container className="mx-auto py-4 sm:py-8 flex justify-center">
        <PageFilter />
      </Container>

      <Container className="py-2">
        <NewTrendingFilter />
      </Container>

      <Container className="py-4 sm:py-8">
        <MasonryContainer>
          {data?.photos?.map((photo) => (
            <MasonryPhotoCard key={photo.id} photo={photo} />
          ))}
        </MasonryContainer>
      </Container>

      <Footer />
    </div>
  );
}
