import React from "react";
import SecondaryHeader from "../Header/Secondary";
import { useRouter } from "next/navigation";
import { useSearch } from "@/context/useSearch";
import SearchBar from "../SearchBar";
import { useSelectedOption } from "@/context/selectedOption";

function HeroPhotos() {
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
    <div className="w-full h-[82.5vh] flex flex-col bg-[url('https://images.pexels.com/photos/30501785/pexels-photo-30501785/free-photo-of-vivid-abstract-light-formations-in-pink-and-blue.jpeg')] bg-cover bg-center">
      <SecondaryHeader />
      <div className="w-full h-full flex-1 relative">
        <div className=" absolute inset-0 w-full h-full bg-black/50"></div>
        <div className="absolute inset-0 w-full h-full ">
          <div className="max-w-2xl px-4 sm:px-0 flex flex-col justify-center items-center h-full mx-auto">
            <h1 className="text-4xl font-medium text-white my-8">
              The best free stock photos, royalty free images & videos shared by
              creators.
            </h1>
            <SearchBar
              isLoading={loading}
              search={searchTerm[selectedOption?.toLowerCase()]}
              setSerch={setSearch}
              handleSubmit={handleSearch}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroPhotos;
