import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { projectsDetailDataset } from "../data/project-data";
import type { ProjectDetailData } from "../data/project-data";
import DesignProjectView from "../components/sections/design-project-view";
import ResearchProjectView from "../components/sections/research-project-view";

const ProjectDetailsPage: React.FC = () => {
  // Extracting 'title' to match your path configuration: "/project/:title"
  const { title } = useParams<{ title: string }>();
  const navigate = useNavigate();
  const [project, setProject] = useState<ProjectDetailData | null>(null);

  useEffect(() => {
    if (title) {
      // Decode the URL param (e.g., "Reducing%20KYC" becomes "reducing kyc")
      const decodedParamTitle = decodeURIComponent(title).toLowerCase();

      // Find the project matching its internal dataset .title property
      const data = Object.values(projectsDetailDataset).find(
        (proj) => proj.title.toLowerCase() === decodedParamTitle,
      );

      if (data) {
        setProject(data);
      } else {
        // Redirect back to projects page if no title matches
        navigate("/projects");
      }
    }
  }, [title, navigate]);

  if (!project) {
    return (
      <div className="w-full min-h-screen bg-white flex items-center justify-center text-sm font-medium text-gray-400">
        Loading case study...
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen bg-white">
      {project.projectType === "design" ? (
        <DesignProjectView data={project} />
      ) : (
        <ResearchProjectView data={project} />
      )}
    </div>
  );
};

export default ProjectDetailsPage;
