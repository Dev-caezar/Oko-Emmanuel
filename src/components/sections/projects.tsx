import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { projectsData, type BaseProjectData } from "../../data/project-data";

interface CardProps {
  project: BaseProjectData;
  index: number;
  totalCards: number;
}

const ProjectCard: React.FC<CardProps> = ({ project, index, totalCards }) => {
  const navigate = useNavigate();
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
      className={`w-full flex items-start md:items-center justify-center sticky top-0 ${
        index === 0 ? "min-h-[70vh] md:h-screen" : "min-h-[85vh] md:h-screen"
      }`}
    >
      <motion.div
        style={{ scale }}
        onClick={() =>
          navigate(`/project/${encodeURIComponent(project.id.toLowerCase())}`)
        }
        className="w-full max-w-5xl bg-white rounded-2xl md:rounded-[10px] border border-gray-100 p-5 sm:p-6 md:p-10 shadow-[0_15px_35px_rgba(0,0,0,0.05)] grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6 md:gap-12 items-center origin-top cursor-pointer group sticky top-4 sm:top-12 md:top-[12%]"
      >
        {/* Project Visual Container */}
        <div className="md:col-span-6 rounded-xl md:rounded-2xl bg-[#f5f5f5] h-40 sm:h-56 md:h-auto md:aspect-4/3 flex items-center justify-center p-3 sm:p-6 md:p-10 overflow-hidden">
          {project.image && (
            <img
              src={project.image}
              alt={`${project.title} interface mockup`}
              className="w-full h-full object-contain pointer-events-none select-none group-hover:scale-105 transition-transform duration-500"
            />
          )}
        </div>

        {/* Project Details */}
        <div className="md:col-span-6 flex flex-col justify-center items-start">
          <div className="w-full flex items-center justify-between mb-2 md:mb-4">
            <h3 className="text-xl sm:text-2xl md:text-4xl font-bold text-[#111111]">
              {project.title}
            </h3>

            {/* Arrow Button visible on mobile top-right */}
            <div className="flex md:hidden items-center justify-center w-8 h-8 rounded-full border border-gray-200 text-gray-700">
              <ArrowUpRight size={16} />
            </div>
          </div>

          {project.description && (
            <p className="text-xs sm:text-sm md:text-base text-gray-500 font-normal leading-relaxed mb-3 md:mb-8 max-w-md line-clamp-2 sm:line-clamp-3 md:line-clamp-none">
              {project.description}
            </p>
          )}

          {project.tags && project.tags.length > 0 && (
            <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-2 md:mb-8">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 sm:px-4 sm:py-2 bg-gray-50 border border-gray-100 text-gray-600 text-[10px] sm:text-xs font-medium rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* Desktop Arrow Button */}
          <div className="hidden md:flex items-center justify-center w-12 h-12 rounded-full border border-gray-200 group-hover:border-black group-hover:bg-black group-hover:text-white transition-all duration-300">
            <ArrowUpRight size={20} />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const Projects: React.FC = () => {
  return (
    <section className="w-full bg-[#f9f9f9] px-4 sm:px-6 md:px-12 pb-16 sm:pb-24">
      {/* Reduced bottom padding on header container */}
      <div className="max-w-6xl mx-auto text-center pt-12 sm:pt-24 pb-4 sm:pb-12">
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
