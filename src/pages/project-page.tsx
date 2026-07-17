import React from "react";
import ProjectsHeader from "../components/sections/project-header";
import ValuesMarquee from "../components/sections/value-marque";
import ProjectGrid from "../components/sections/projects-grid";

const ProjectPage: React.FC = () => {
  return (
    <div>
      <ProjectsHeader />
      <ValuesMarquee />
      <ProjectGrid />
    </div>
  );
};

export default ProjectPage;
