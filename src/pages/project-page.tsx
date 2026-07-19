import React from "react";
import ProjectsHeader from "../components/sections/project-header";
import ValuesMarquee from "../components/sections/value-marque";
import ProjectGrid from "../components/sections/projects-grid";
import {
  Maximize,
  Handshake,
  Eye,
  Lightbulb,
  BarChart3,
  Zap,
  Layers,
  Sun,
  PenTool,
} from "lucide-react";

interface ValueItem {
  icon: React.ReactNode;
  label: string;
}

const ProjectPage: React.FC = () => {
  const values: ValueItem[] = [
    { icon: <Maximize className="w-4 h-4" />, label: "Clear process" },
    { icon: <Handshake className="w-4 h-4" />, label: "Smooth Handoff" },
    { icon: <Eye className="w-4 h-4" />, label: "Clarity" },
    { icon: <Lightbulb className="w-4 h-4" />, label: "Intentionality" },
    { icon: <BarChart3 className="w-4 h-4" />, label: "Top quality" },
    { icon: <Zap className="w-4 h-4" />, label: "Fast execution" },
    { icon: <Layers className="w-4 h-4" />, label: "System thinking" },
    { icon: <Sun className="w-4 h-4" />, label: "On brand every-time" },
    { icon: <PenTool className="w-4 h-4" />, label: "Solution oriented" },
  ];

  return (
    <div className="w-full min-h-screen bg-[#f9f9f9] flex flex-col gap-4">
      <ProjectsHeader />
      <ValuesMarquee values={values} />
      <ProjectGrid />
    </div>
  );
};

export default ProjectPage;
