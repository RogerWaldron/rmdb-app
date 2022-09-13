export type Movie = {
  id: number;
  original_title: string;
  status: string;
  overview: string;
  release_date: string;
  original_language: string;
  runtime: number;
  budget: number;
  revenue: number;
  genres: {
    id: number;
    name: string;
  }[];
  backdrop_path: string;
  poster_path: string;
  popularity: number;
  vote_average: number;
  vote_count: number;
};

export type Movies = {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
};
