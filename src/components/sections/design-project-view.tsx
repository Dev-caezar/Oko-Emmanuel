import React from "react";
import type { DesignProjectData } from "../../data/project-data";
import ProjectDetailsHeader from "./project-details-header";
import ProjectDemographics from "./project-demographics";
import UserPersonas from "./user-personas";
import LowFidelityWires from "./low-fidelity-wires";
import SolutionsList from "./solution-list";
import MeasurableKPIs from "./measurable-kpis";

interface DesignProjectViewProps {
  data: DesignProjectData;
}

const DesignProjectView: React.FC<DesignProjectViewProps> = ({ data }) => {
  return (
    <article className="w-full bg-white text-[#111111] pb-24">
      {/* Hero Header Section */}
      <ProjectDetailsHeader data={data} />

      {/* Main Content Layout Sections */}
      <div className="w-full flex flex-col gap-20">
        <ProjectDemographics data={data.sections.demographics} />

        {/* Section: User Personas Component */}
        <UserPersonas
          headline={data.sections.userPersonas.headline}
          personas={data.sections.userPersonas.personas}
        />

        <LowFidelityWires data={data.sections.wireframes} />
        <SolutionsList data={data.sections.designDecisions} />
        <MeasurableKPIs data={data.sections.measurableKPIs} />

        {/* Section: Final UI Deliverables */}
        <section className="max-w-7xl w-full mx-auto px-6 md:px-12 border-t border-gray-100 pt-12">
          <span className="text-xs font-bold uppercase tracking-widest text-purple-600 mb-3 block">
            04 / Visual Interface
          </span>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-8">
            {data.sections.uiDesign.headline}
          </h2>
          <div className="w-full rounded-2xl bg-[#F5F5F5] p-6 md:p-12 flex flex-col items-center gap-6 justify-center">
            {data.sections.uiDesign.images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt="Final UI Presentation Mockups"
                className="max-w-full h-auto object-contain"
              />
            ))}
          </div>
        </section>
      </div>
    </article>
  );
};

export default DesignProjectView;
