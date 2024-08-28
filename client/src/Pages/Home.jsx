import React from "react";
import Hero from "../Components/Hero";
import CardContainer from "../Components/CardContainer";

const Home = () => {
  return (
    <main className="relative w-screen min-h-screen bg-white">
      <Hero />
      <CardContainer heading={"Featured"} />
      <CardContainer heading={"For Sale"} />
      <CardContainer heading={"For Rent"} />
    </main>
  );
};

export default Home;
