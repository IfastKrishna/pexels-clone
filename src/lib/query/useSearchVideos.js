"use client";
import api from "@/utils/api";
import { useQuery } from "@tanstack/react-query";

const useSearchVideos = ({
  search,
  page,
  limit,
  size = "",
  orientation = "",
  sortby = "newest",
}) =>
  useQuery({
    queryKey: ["searchVideos", search, page, limit, size, orientation, sortby],
    queryFn: async () => {
      const response = await api.get(
        `/videos/${
          sortby == "newest"
            ? "search"
            : sortby == "popular"
            ? "popular"
            : "curated"
        }?query=${search}&per_page=${limit}&page=${page}`
      );
      return response.data;
    },
    staleTime: Infinity,
    retry: false,
    refetchOnWindowFocus: false,
  });

export default useSearchVideos;
