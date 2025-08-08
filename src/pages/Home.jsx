import React from 'react';
import Hero1 from "../components/Hero/Hero1";
import Hero2 from "../components/Hero/Hero2";
import Hero3 from "../components/Hero/Hero3";
import VideoDesign from "../components/Hero/VideoDesign";
const Home = () => {
  return (
    <main className="overflow-x-hidden font-popr bg-[#F0F4F8]">
      <Hero1 />
      <Hero2 />
      <VideoDesign />
      <Hero3 />
    </main>
  );
};

export default Home;
