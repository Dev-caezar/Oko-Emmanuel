import React from "react";
import bag from "../../assets/public/bag.png";

const ProjectsHeader: React.FC = () => {
  return (
    <div className="w-full max-w-6xl mx-auto flex items-center justify-between py-12 px-6 md:px-12">
      {/* Muted/Standard Lato Font for Projects title */}
      <h2 className="text-5xl md:text-7xl font-medium tracking-tight text-[#111111]">
        Projects
      </h2>

      {/* Enlarged Briefcase Image */}
      <img
        src={bag}
        alt="Briefcase"
        className="h-16 w-16 md:h-55 md:w-55 object-contain select-none"
        draggable="false"
      />
    </div>
  );
};

export default ProjectsHeader;
