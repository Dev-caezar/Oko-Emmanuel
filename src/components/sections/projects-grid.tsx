import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import xpress from "../../assets/public/xpress.png";
import najia from "../../assets/public/najia-thread.png";
import kyc from "../../assets/public/kyc.png";
import nexa from "../../assets/public/nexa.png";

interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image: string;
  deviceType: "mobile" | "desktop";
  hoverBg: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Xpress-mart",
    description:
      "An e-commerce product that provides users with a top-notch shopping experience — from discovery through checkout.",
    tags: ["E-commerce", "UI/UX Design"],
    image: xpress,
    deviceType: "mobile",
    hoverBg: "hover:bg-[#FFF0F0]",
  },
  {
    id: 2,
    title: "Naija-Thread",
    description:
      "A Nigerian fashion marketplace, designed to end — down and seller issues, provide standard sizes, search and discovery, and a reward system built to keep both sides coming back.",
    tags: ["E-commerce", "UI/UX Design"],
    image: najia,
    deviceType: "desktop",
    hoverBg: "hover:bg-[#EAF7EA]",
  },
  {
    id: 3,
    title: "Nexa",
    description:
      "A concept fintech platform redesigned to solve a problem where users were quitting mid-transaction. Includes research, wireframes, decisions, and measurable targets.",
    tags: ["Fintech", "UI/UX Design"],
    image: nexa,
    deviceType: "mobile",
    hoverBg: "hover:bg-[#E8F5E9]",
  },
  {
    id: 4,
    title: "Naija-Thread Case Study",
    description:
      "An e-commerce product that provide user with top-notch experience.",
    tags: ["E-commerce", "UI/UX Design"],
    image: kyc,
    deviceType: "desktop",
    hoverBg: "hover:bg-[#F3E8FF]",
  },
];

const ProjectGrid: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="w-full bg-white py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            onClick={() =>
              navigate(`/project/${encodeURIComponent(project.title)}`)
            }
            className="group relative bg-white rounded-2xl p-6 md:p-8 border border-transparent hover:border-gray-100 shadow-[0_4px_30px_rgba(0,0,0,0.01)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.04)] transition-all duration-300 flex flex-col md:flex-row gap-6 md:gap-8 items-center cursor-pointer"
          >
            <div
              className={`w-full md:w-[45%] aspect-square bg-[#F5F5F5] rounded-xl flex items-center justify-center p-6 md:p-8 overflow-hidden transition-colors duration-300 ${project.hoverBg}`}
            >
              <img
                src={project.image}
                alt={project.title}
                className={`object-contain select-none transition-transform duration-500 group-hover:scale-105 ${
                  project.deviceType === "mobile"
                    ? "h-[90%] max-h-55 md:max-h-75"
                    : "w-full h-200px"
                }`}
                draggable="false"
              />
            </div>

            <div className="w-full md:w-[55%] flex flex-col justify-between h-full py-2">
              <div>
                <h3 className="text-2xl font-bold tracking-tight text-[#111111] mb-3">
                  {project.title}
                </h3>
                <p className="text-xs md:text-[13px] leading-relaxed text-gray-400 font-medium mb-6">
                  {project.description}
                </p>
              </div>

              <div className="flex flex-col gap-6 mt-auto">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] font-semibold text-gray-500 bg-gray-50 border border-gray-100 px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex">
                  <div className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center bg-white text-gray-600 group-hover:bg-black group-hover:text-white group-hover:border-black transition-all duration-300">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectGrid;
