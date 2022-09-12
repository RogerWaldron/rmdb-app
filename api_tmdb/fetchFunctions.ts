import { Movies } from "@/api_tmdb/types";

export const basicFetch = async <ReturnType>(
  url: string
): Promise<ReturnType> => {
  const response = await fetch(url);

  if (!response.ok)
    throw new Error(`${response.status} ${response.statusText}`);

  const data = await response.json();
  return data;
};

// fetch for React Query
export const fetchMovies = async (search = "", page = 1): Promise<Movies> => {
  return await basicFetch<Movies>(`/api/movies?search=${search}&page=${page}`);
}