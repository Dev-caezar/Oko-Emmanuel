import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import xpress from "../../assets/public/xpress.png";
import najia from "../../assets/public/najia-thread.png";
import kyc from "../../assets/public/kyc.png";
import nexa from "../../assets/public/nexa.png";

interface ProjectItem {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image: string;
  color: string;
}

const projectsData: ProjectItem[] = [
  {
    id: 1,
    title: "Xpress-mart",
    description:
      "An e-commerce product that provides users with a top-notch shopping experience — from discovery through checkout.",
    tags: ["E-commerce", "UI/UX Design"],
    image: xpress,
    color: "hover:bg-[#FFF0F0]",
  },
  {
    id: 2,
    title: "Naija-Thread",
    description:
      "A Nigerian fashion marketplace, designed to end — down and seller issues, provide standard sizes, search and discovery, and a reward system built to keep both sides coming back.",
    tags: ["E-commerce", "UI/UX Design"],
    image: najia,
    color: "hover:bg-[#EAF7EA]",
  },
  {
    id: 3,
    title: "Nexa",
    description:
      "A concept fintech platform redesigned to solve a problem where users were quitting mid-transaction. Includes research, wireframes, decisions, and measurable targets.",
    tags: ["Fintech", "UI/UX Design"],
    image: nexa,
    color: "hover:bg-[#E8F5E9]",
  },
  {
    id: 4,
    title: "Naija-Thread Case Study",
    description:
      "An e-commerce product that provide user with top-notch experience.",
    tags: ["E-commerce", "UI/UX Design"],
    image: kyc,
    color: "hover:bg-[#F3E8FF]",
  },
];

interface CardProps {
  project: ProjectItem;
  index: number;
  totalCards: number;
}

const ProjectCard: React.FC<CardProps> = ({ project, index, totalCards }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const scale = useTransform(
    scrollYProgress,
    [0, 1],
    [1, 0.93 - (totalCards - index) * 0.01],
  );

  return (
    <div
      ref={containerRef}
      className="h-screen flex items-center justify-center sticky top-0"
    >
      <motion.div
        style={{
          scale,
          top: `calc(12% + ${index * 32}px)`,
        }}
        className="w-full max-w-250 bg-white rounded-[10px] border border-gray-100 p-6 md:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.03)] grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center origin-top"
      >
        <div className="md:col-span-6 rounded-2xl bg-[#f5f5f5] aspect-4/3 flex items-center justify-center p-6 md:p-12 overflow-hidden">
          <img
            src={project.image}
            alt={`${project.title} interface mockup`}
            className="w-full h-full object-contain pointer-events-none select-none hover:scale-105 transition-transform duration-500"
          />
        </div>

        <div className="md:col-span-6 flex flex-col justify-center items-start">
          <h3 className="text-3xl md:text-4xl font-bold text-[#111111] mb-4">
            {project.title}
          </h3>
          <p className="text-sm md:text-base text-gray-400 font-medium leading-relaxed mb-8 max-w-md">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2.5 mb-8">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-4 py-2 bg-gray-50 border border-gray-100 text-gray-500 text-xs font-semibold rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>

          <button className="flex items-center justify-center w-12 h-12 rounded-full border border-gray-200 hover:border-black hover:bg-black hover:text-white transition-all duration-300">
            <ArrowUpRight size={20} />
          </button>
        </div>
      </motion.div>
    </div>
  );
};

const Projects: React.FC = () => {
  return (
    <section className="w-full bg-[#f9f9f9] px-6 md:px-12 pb-24">
      <div className="max-w-6xl mx-auto text-center pt-24 pb-8">
        <span className="text-[11px] font-semibold uppercase tracking-widest text-[#6366F1]">
          My Projects
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-[42px] font-medium tracking-tight text-[#111111] mt-3 leading-[1.2]">
          Selected Projects
        </h2>
      </div>

      <div className="max-w-6xl mx-auto relative flex flex-col items-center">
        {projectsData.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={index}
            totalCards={projectsData.length}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
