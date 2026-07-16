import React from "react";
import Hero from "../components/sections/hero";
import ProjectsCarousel from "../components/sections/project-carousel";
import QuoteSection from "../components/sections/quote-section";
import Services from "../components/sections/services";
import About from "../components/sections/about";
import Process from "../components/sections/process";

const Home: React.FC = () => {
  return (
    <div>
      <Hero />
      <ProjectsCarousel />
      <QuoteSection />
      <Services />
      <About />
      <Process />
    </div>
  );
};

export default Home;
