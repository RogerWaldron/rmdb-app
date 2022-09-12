// API: https://developers.themoviedb.org/

const API_URL: string = "https://api.themoviedb.org/3/";
const API_KEY: string | undefined = process.env.API_KEY;

// Have Brad Pitt and Edward Norton ever been in a movie together?
// URL: /discover/movie?with_people=287,819
const WORKED_WITH_URL: string = `${API_URL}discover/movie?api_key=${API_KEY}&language=en-US&with_people=`;
const MOVIE_SEARCH_URL: string = `${API_URL}search/movie?api_key=${API_KEY}&language=en-US&query=`;
const MOVIE_POPULARITY_URL: string = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US`;

// For single movie
const movieUrl = (id?: string) => `${API_URL}movie/${id}?api_key=${API_KEY}`;
const creditsUrl = (id?: string) =>
  `${API_URL}movie/${id}/credits?api_key=${API_KEY}`;

const IMAGE_BASE_URL: string = "http://image.tmdb.org/t/p/";
// Sizes: w300, w780, w1280, original
const BACKDROP_SIZE: string = "w1280";
// w92, w154, w185, w342, w500, w780, original
const POSTER_SIZE: string = "w780";

export {
  WORKED_WITH_URL,
  MOVIE_SEARCH_URL,
  MOVIE_POPULARITY_URL,
  API_URL,
  API_KEY,
  IMAGE_BASE_URL,
  BACKDROP_SIZE,
  POSTER_SIZE,
  movieUrl,
  creditsUrl,
};
