"use client";
import api from "@/utils/api";
import { useQuery } from "@tanstack/react-query";

const usePhotosById = ({ id }) =>
  useQuery({
    queryKey: ["photosById", id],
    queryFn: async () => {
      const response = await api.get(`/photos/${id}`);

      if (response.data) {
        // Extract and process keywords
        const keywords = response.data.alt.split(" ");

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

export default usePhotosById;
