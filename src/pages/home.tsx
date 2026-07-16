import React from "react";
import Hero from "../components/sections/hero";
import ProjectsCarousel from "../components/sections/project-carousel";
import QuoteSection from "../components/sections/quote-section";

const Home: React.FC = () => {
  return (
    <div>
      <Hero />
      <ProjectsCarousel />
      <QuoteSection />
    </div>
  );
};

export default Home;
