"use client";
import api from "@/utils/api";
import { useQuery } from "@tanstack/react-query";

const useSearchVideos = ({ search, page, limit }) =>
  useQuery({
    queryKey: ["searchVideos", search, page, limit],
    queryFn: async () => {
      const response = await api.get(
        `/videos/search?query=${search}&per_page=${limit}&page=${page}`
      );
      return response.data;
    },
    staleTime: Infinity,
    retry: false,
    refetchOnWindowFocus: false,
  });

export default useSearchVideos;
