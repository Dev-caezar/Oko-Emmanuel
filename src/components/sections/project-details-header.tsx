import React from "react";
import { motion } from "framer-motion";

interface ProjectHeaderProps {
  data: {
    title: string;
    subtitle: string;
    heroImage: string;
    meta: {
      role: string;
      timeline?: string;
      sector: string;
    };
  };
}

const ProjectDetailsHeader: React.FC<ProjectHeaderProps> = ({ data }) => {
  return (
    <header className="w-full max-w-6xl mx-auto pt-12 pb-16 px-6 md:px-12 bg-white text-[#111111] overflow-hidden">
      {/* Top Split Hero Section */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center mb-16">
        {/* Left Text Block */}
        <motion.div
          className="md:col-span-7 flex flex-col justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h1 className="text-6xl md:text-8xl font-semibold tracking-tight text-[#06371B] mb-6">
            {data.title}
          </h1>
          <p className="text-base md:text-lg leading-relaxed text-gray-500 font-medium max-w-md">
            {data.subtitle}
          </p>
        </motion.div>

        {/* Right Phone Mockup Block - Reduced to max-w-xs */}
        <motion.div
          className="md:col-span-5 flex justify-center md:justify-end"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        >
          <img
            src={data.heroImage}
            alt={`${data.title} product preview`}
            className="w-full max-w-sm h-auto object-contain select-none"
            draggable="false"
          />
        </motion.div>
      </div>

      {/* Bottom Horizontal Metadata Row */}
      <motion.div
        className="w-full flex flex-wrap md:flex-nowrap justify-between gap-y-6 gap-x-4 pt-8 border-t border-gray-100"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <div className="w-[45%] sm:w-auto min-w-[120px]">
          <h4 className="text-base font-bold text-[#111111]">{data.title}</h4>
          <p className="text-xs font-semibold text-gray-300 mt-1">Project</p>
        </div>

        <div className="w-[45%] sm:w-auto min-w-[120px]">
          <h4 className="text-base font-bold text-[#111111]">
            {data.meta.role}
          </h4>
          <p className="text-xs font-semibold text-gray-300 mt-1">Role</p>
        </div>

        <div className="w-[45%] sm:w-auto min-w-[120px]">
          <h4 className="text-base font-bold text-[#111111]">
            {data.meta.sector}
          </h4>
          <p className="text-xs font-semibold text-gray-300 mt-1">Industry</p>
        </div>

        <div className="w-[45%] sm:w-auto min-w-[120px]">
          <h4 className="text-base font-bold text-[#111111]">Nigeria</h4>
          <p className="text-xs font-semibold text-gray-300 mt-1">Location</p>
        </div>

        <div className="w-[45%] sm:w-auto min-w-[120px]">
          <h4 className="text-base font-bold text-[#111111]">2025</h4>
          <p className="text-xs font-semibold text-gray-300 mt-1">Year</p>
        </div>
      </motion.div>
    </header>
  );
};

export default ProjectDetailsHeader;
