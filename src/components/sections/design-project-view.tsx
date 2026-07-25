import React from "react";
import type { DesignProjectData } from "../../data/project-data";
import ProjectDetailsHeader from "./project-details-header";
import ProjectDemographics from "./project-demographics";
import UserPersonas from "./user-personas";
import LowFidelityWires from "./low-fidelity-wires";
import SolutionsList from "./solution-list";
import MeasurableKPIs from "./measurable-kpis";
import UIDesignShowcase from "./ui-design-showcase";
import MoreProjects from "./more-project";

interface DesignProjectViewProps {
  data: DesignProjectData;
}

const DesignProjectView: React.FC<DesignProjectViewProps> = ({ data }) => {
  return (
    <article className="w-full bg-white text-[#111111] pb-24">
      <ProjectDetailsHeader data={data} />
      <div className="w-full flex flex-col gap-20">
        <ProjectDemographics data={data.sections.demographics} />
        <UserPersonas
          headline={data.sections.userPersonas.headline}
          personas={data.sections.userPersonas.personas}
        />
        <LowFidelityWires data={data.sections.wireframes} />
        <SolutionsList data={data.sections.designDecisions} />
        <MeasurableKPIs data={data.sections.measurableKPIs} />
        <UIDesignShowcase data={data.sections.uiDesign} />
        <MoreProjects currentProjectId={data.id} />
      </div>
    </article>
  );
};

export default DesignProjectView;
