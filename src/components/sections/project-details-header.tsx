import React from "react";
import { motion, type Variants } from "framer-motion";
import type { ProjectDetailData } from "../../data/project-data";

interface ProjectHeaderProps {
  data: ProjectDetailData;
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

const ProjectDetailsHeader: React.FC<ProjectHeaderProps> = ({ data }) => {
  return (
    <header className="w-full max-w-6xl mx-auto pt-12 pb-16 px-6 md:px-12 bg-white text-[#111111] overflow-hidden">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="space-y-16"
      >
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Text Column */}
          <motion.div
            variants={itemVariants}
            className="md:col-span-6 flex flex-col justify-center space-y-6"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-neutral-900 leading-[1.1]">
              {data.title}
            </h1>
            <p className="text-base md:text-lg leading-relaxed text-neutral-500 font-normal max-w-xl">
              {data.subtitle}
            </p>
          </motion.div>

          {/* Right Image Column (Expanded Size) */}
          <motion.div
            variants={itemVariants}
            className="md:col-span-6 flex justify-center md:justify-end"
          >
            <div className="relative group w-full flex justify-center md:justify-end">
              <div className="absolute -inset-2 bg-gradient-to-r from-purple-100 to-blue-100 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition duration-500" />
              <img
                src={data.heroImage}
                alt={`${data.title} product preview`}
                className="relative w-full max-w-md md:max-w-lg lg:max-w-xl h-auto object-contain select-none drop-shadow-md"
                draggable="false"
              />
            </div>
          </motion.div>
        </div>

        {/* Project Meta Info Footer */}
        <motion.div
          variants={itemVariants}
          className="pt-8 border-t border-neutral-100 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6"
        >
          <div>
            <h4 className="text-sm sm:text-base font-semibold text-neutral-900 truncate">
              {data.project}
            </h4>
            <p className="text-xs font-medium text-neutral-400 mt-1 uppercase tracking-wider">
              Project
            </p>
          </div>

          <div>
            <h4 className="text-sm sm:text-base font-semibold text-neutral-900 truncate">
              {data.meta.role}
            </h4>
            <p className="text-xs font-medium text-neutral-400 mt-1 uppercase tracking-wider">
              Role
            </p>
          </div>

          <div>
            <h4 className="text-sm sm:text-base font-semibold text-neutral-900 truncate">
              {data.meta.sector}
            </h4>
            <p className="text-xs font-medium text-neutral-400 mt-1 uppercase tracking-wider">
              Industry
            </p>
          </div>

          <div>
            <h4 className="text-sm sm:text-base font-semibold text-neutral-900 truncate">
              Nigeria
            </h4>
            <p className="text-xs font-medium text-neutral-400 mt-1 uppercase tracking-wider">
              Location
            </p>
          </div>

          <div>
            <h4 className="text-sm sm:text-base font-semibold text-neutral-900 truncate">
              2025
            </h4>
            <p className="text-xs font-medium text-neutral-400 mt-1 uppercase tracking-wider">
              Year
            </p>
          </div>
        </motion.div>
      </motion.div>
    </header>
  );
};

export default ProjectDetailsHeader;
