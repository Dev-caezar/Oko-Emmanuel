import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { projectsData, type BaseProjectData } from "../../data/project-data";

interface MoreProjectsProps {
  currentProjectId: string;
}

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
      className="h-screen flex items-center justify-center sticky top-0"
    >
      <motion.div
        style={{
          scale,
          top: `calc(12% + ${index * 32}px)`,
        }}
        onClick={() =>
          navigate(`/project/${encodeURIComponent(project.id.toLowerCase())}`)
        }
        className="w-full max-w-6xl bg-white rounded-[10px] border border-gray-100 p-6 md:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.03)] grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center origin-top cursor-pointer hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)] transition-all duration-300"
      >
        <div className="md:col-span-7 rounded-2xl bg-[#f5f5f5] aspect-16/10 w-full flex items-center justify-center p-6 md:p-10 overflow-hidden">
          {project.image && (
            <img
              src={project.image}
              alt={`${project.title} interface mockup`}
              className={`object-contain pointer-events-none select-none hover:scale-105 transition-transform duration-500 ${
                project.deviceType === "mobile"
                  ? "h-[90%] max-h-64 md:max-h-80"
                  : "w-full h-full"
              }`}
            />
          )}
        </div>

        <div className="md:col-span-5 flex flex-col justify-center items-start h-full py-2">
          <h3 className="text-3xl md:text-4xl font-bold text-[#111111] mb-4">
            {project.title}
          </h3>

          {project.description && (
            <p className="text-sm md:text-base text-gray-400 font-medium leading-relaxed mb-8 max-w-md">
              {project.description}
            </p>
          )}

          {project.tags && project.tags.length > 0 && (
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
          )}

          <div className="flex items-center justify-center w-12 h-12 rounded-full border border-gray-200 hover:border-black hover:bg-black hover:text-white transition-all duration-300 mt-auto">
            <ArrowUpRight size={20} />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const MoreProjects: React.FC<MoreProjectsProps> = ({ currentProjectId }) => {
  const filteredProjects = projectsData.filter(
    (project) => project.id.toLowerCase() !== currentProjectId.toLowerCase(),
  );

  if (filteredProjects.length === 0) return null;

  return (
    <section className="w-full px-6 md:px-12 pb-24">
      <div className="max-w-6xl mx-auto text-center pt-24 pb-8">
        <span className="text-[11px] font-semibold uppercase tracking-widest text-[#6366F1]">
          Checkout more of my works
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-[42px] font-medium tracking-tight text-[#111111] mt-3 leading-[1.2]">
          More Projects
        </h2>
      </div>

      <div className="max-w-6xl mx-auto relative flex flex-col items-center">
        {filteredProjects.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={index}
            totalCards={filteredProjects.length}
          />
        ))}
      </div>
    </section>
  );
};

export default MoreProjects;
