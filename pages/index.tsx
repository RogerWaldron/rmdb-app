import { useState } from "react";
import type { NextPage } from "next";

import { useFetchMovies } from "@/api_tmdb/fetchHooks";

import Card from "@/components/Card";
import Grid from "@/components/Grid";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Spinner from "@/components/Spinner";

const Home: NextPage = () => {
  const [query, setQuery] = useState("");
  const { data, error, isLoading, isFetching, fetchNextPage } =
    useFetchMovies(query);

  return (
    <main className="relative h-screen">
      <Header />
      {/* <Hero /> */}
      <Grid />
      <Card />
      <Spinner />
    </main>
  );
};

export default Home;
