import type { NextApiRequest, NextApiResponse } from "next";
import { Movies } from "@/api_tmdb/types";

import { basicFetch } from "@/api_tmdb/fetchFunctions";

import { MOVIE_POPULARITY_URL, MOVIE_SEARCH_URL } from "@/api_tmdb/config";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Movies>
) {
  const { page, search } = req.query;
  const url = search
    ? `${MOVIE_SEARCH_URL}${search}&page=${page}`
    : `${MOVIE_POPULARITY_URL}`;

  const data = await basicFetch<Movies>(url);

  res.status(200).json(data);
}
