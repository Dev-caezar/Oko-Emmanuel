import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { projectsData } from "../../data/project-data";

const ProjectGrid: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="w-full bg-white py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        {projectsData.map((project) => (
          <div
            key={project.id}
            onClick={() =>
              navigate(
                `/project/${encodeURIComponent(project.id.toLowerCase())}`,
              )
            }
            className="group relative bg-white rounded-2xl p-6 md:p-8 border border-transparent hover:border-gray-100 shadow-[0_4px_30px_rgba(0,0,0,0.01)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.04)] transition-all duration-300 flex flex-col md:flex-row gap-6 md:gap-8 items-center cursor-pointer"
          >
            <div
              className={`w-full md:w-[45%] aspect-square bg-[#F5F5F5] rounded-xl flex items-center justify-center p-6 md:p-8 overflow-hidden transition-colors duration-300 ${
                project.color ?? "hover:bg-gray-100"
              }`}
            >
              {project.image && (
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
              )}
            </div>

            <div className="w-full md:w-[55%] flex flex-col justify-between h-full py-2">
              <div>
                <h3 className="text-2xl font-bold tracking-tight text-[#111111] mb-3">
                  {project.title}
                </h3>
                {project.description && (
                  <p className="text-xs md:text-[13px] leading-relaxed text-gray-400 font-medium mb-6">
                    {project.description}
                  </p>
                )}
              </div>

              <div className="flex flex-col gap-6 mt-auto">
                {project.tags && project.tags.length > 0 && (
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
                )}

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
