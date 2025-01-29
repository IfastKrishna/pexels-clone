"use client";
import api from "@/utils/api";
import { useQuery } from "@tanstack/react-query";

const useVideosById = ({ id }) =>
  useQuery({
    queryKey: ["videosById", id],
    queryFn: async () => {
      const response = await api.get(`/videos/${id}`);

      if (response.data.videos && response.data.videos.length > 0) {
        // Extract and process keywords
        const keywords = response.data.videos.flatMap((video) =>
          video.description.split(" ")
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

export default useVideosById;
