import { useEffect, useState } from "react";
import type { NextPage } from "next";

import { useFetchMovies } from "@/api_tmdb/fetchHooks";

import Card from "@/components/Card";
import Grid from "@/components/Grid";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Spinner from "@/components/Spinner";
import { BACKDROP_SIZE, IMAGE_BASE_URL } from "@/api_tmdb/config";

const Home: NextPage = () => {
  const [query, setQuery] = useState("");
  const { data, error, isLoading, isFetching, fetchNextPage } =
    useFetchMovies(query);

  return (
    <main className="relative h-screen">
      <Header setQuery={setQuery} />
      {!query && data && data.pages ? (
        <Hero
          imgUrl={
            data.pages[0].results[0].backdrop_path
              ? IMAGE_BASE_URL +
                BACKDROP_SIZE +
                data.pages[0].results[0].backdrop_path
              : ""
          }
          title={data.pages[0].results[0].title}
          text={data.pages[0].results[0].overview}
        />
      ) : null}
      <Grid />
      <Card />
      <Spinner />
    </main>
  );
};

export default Home;
