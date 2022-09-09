import type { NextPage } from "next";

import Header from "@/components/header";

const Home: NextPage = () => {
  return (
    <main className="relative h-screen">
      <Header />
      <h1 className="text-3xl font-black">React Movie Database</h1>
    </main>
  );
};

export default Home;
