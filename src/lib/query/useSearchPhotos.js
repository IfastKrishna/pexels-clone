"use client";
import api from "@/utils/api";
import { useQuery } from "@tanstack/react-query";

const useSearchPhotos = ({ search }) =>
  useQuery({
    queryKey: ["searchPhotos"],
    queryFn: async () => {
      const response = await api.get(`/v1/search?query=${search}`);

      if (response.data.photos && response.data.photos.length > 0) {
        // Extract and process keywords
        const keywords = response.data.photos.flatMap((photo) =>
          photo.alt.split(" ")
        );

        const filteredKeywords = keywords
          .map((word) => word.toLowerCase())
          .filter((word) => word.length > 5); // Only include words longer than 5 characters
        const uniqueKeywords = [...new Set(filteredKeywords)];
        response.data.keywords = uniqueKeywords.slice(0, 30);
      }

      return response.data;
    },
    staleTime: Infinity,
    refetchOnWindowFocus: false,
  });

export default useSearchPhotos;
