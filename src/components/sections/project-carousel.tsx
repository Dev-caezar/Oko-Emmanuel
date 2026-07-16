import React, { useState } from "react";
import { motion } from "framer-motion";
import project1 from "../../assets/public/project1.png";
import project2 from "../../assets/public/project2.png";
import project3 from "../../assets/public/project3.png";
import project4 from "../../assets/public/project4.png";
import project5 from "../../assets/public/project5.png";
import project6 from "../../assets/public/project6.png";

interface ProjectCard {
  id: number;
  image: string;
  title: string;
  isMobile?: boolean;
}

const ProjectsCarousel: React.FC = () => {
  const [isPaused, setIsPaused] = useState(false);

  const projects: ProjectCard[] = [
    { id: 1, image: project1, title: "KoboStack", isMobile: false },
    { id: 2, image: project2, title: "Aurora Fashion", isMobile: true },
    { id: 3, image: project3, title: "Quicklah", isMobile: false },
    { id: 4, image: project4, title: "Lumina Labs", isMobile: true },
    { id: 5, image: project5, title: "Lumina Labs", isMobile: true },
    { id: 6, image: project6, title: "Lumina Labs", isMobile: false },
  ];

  const doubledProjects = [...projects, ...projects];

  return (
    <section className="w-full bg-[#f9f9f9] py-16 overflow-hidden flex flex-col items-center">
      <div className="w-full relative max-w-[1600px]">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-linear-to-r from-[#f9f9f9] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-linear-to-l from-[#f9f9f9] to-transparent z-10 pointer-events-none" />

        <div
          className="flex w-max"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <motion.div
            className="flex gap-6 pr-6"
            animate={{ x: isPaused ? undefined : "-50%" }}
            transition={{
              ease: "linear",
              duration: 25,
              repeat: Infinity,
            }}
            style={{ x: 0 }}
          >
            {doubledProjects.map((project, idx) => (
              <div
                key={`${project.id}-${idx}`}
                className={`bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 shrink-0 select-none h-95 ${
                  project.isMobile ? "w-52.5" : "w-135"
                }`}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover pointer-events-none"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsCarousel;
