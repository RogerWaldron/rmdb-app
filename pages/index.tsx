import type { NextPage } from "next";

import Card from "@/components/Card";
import Grid from "@/components/Grid";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Spinner from "@/components/Spinner";

const Home: NextPage = () => {
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
