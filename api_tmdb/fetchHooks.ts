import { useInfiniteQuery } from "@tanstack/react-query";
import { fetchMovies } from "./fetchFunctions";
import { Movies } from "./types";

export const useFetchMovies = (search: string) => {
  return useInfiniteQuery<Movies, Error>(
    ["movies", search],
    ({ pageParam = 1 }) => fetchMovies(search, pageParam),
    {
      getNextPageParam: (lastPage: Movies) => {
        lastPage.page < lastPage.total_pages ? lastPage.page + 1 : undefined;
      },
      refetchOnWindowFocus: false,
    }
  );
};
