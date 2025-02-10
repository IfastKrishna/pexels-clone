"use client";
import api from "@/utils/api";
import { useQuery } from "@tanstack/react-query";

const useSearchPhotos = ({
  search,
  per_page = 20,
  page = 1,
  orientation = "",
  size = "",
  color = "",
  sortby = "newest",
}) =>
  useQuery({
    queryKey: [
      "searchPhotos",
      search,
      per_page,
      page,
      orientation,
      size,
      color,
      sortby,
    ],
    queryFn: async () => {
      const response = await api.get(
        `/v1/${
          sortby == "newest" ? "search" : "curated"
        }?query=${search}&per_page=${per_page}&page=${page}&orientation=${orientation}&size=${size}&color=${color}`
      );

      if (response.data.photos && response.data.photos.length > 0) {
        // Extract and process keywords
        const keywords = response.data.photos.flatMap((photo) =>
          photo.alt ? photo.alt.split(" ") : []
        );

        const filteredKeywords = keywords
          .map((word) => word.toLowerCase())
          .filter((word) => word.length > 5); // Only include words longer than 5 characters
        const uniqueKeywords = [...new Set(filteredKeywords)];
        response.data.keywords = uniqueKeywords;
      }

      return response.data;
    },
    staleTime: Infinity,
    refetchOnWindowFocus: false,
  });

export default useSearchPhotos;
