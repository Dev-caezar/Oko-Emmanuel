import React from "react";
import type { ResearchProjectData } from "../../data/project-data";
import ProjectDetailsHeader from "./project-details-header";
import ProblemFramingSection from "./problem-framing-section";
import KPIMetricsSection from "./kpi-metrics-section";
import ResearchPlanSection from "./research-plan-section";
import ResearchFindingsSection from "./research-finding-section";
import JourneyMapSection from "./journey-map-section";
import UserPersonasSection from "./user-personas-section";
import OpportunityAreasSection from "./opportunity-areas-section";
import DesignPrinciplesSection from "./design-principles-section";
import FlowComparisonSection from "./flow-comparison-section";
import ExpectedImpactsSection from "./expected-impact-section";
import KeyTakeawaySection from "./key-takeaway-section";
import MoreProjects from "./more-project";

interface ResearchProjectViewProps {
  data: ResearchProjectData;
}

const ResearchProjectView: React.FC<ResearchProjectViewProps> = ({ data }) => {
  return (
    <article className="w-full bg-white text-[#111111] pb-24">
      <ProjectDetailsHeader data={data} />

      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col gap-20">
        <ProblemFramingSection data={data.sections.problemFraming} />
        <KPIMetricsSection data={data.sections.measurableKPIs} />
        <ResearchPlanSection data={data.sections.researchPlan} />
        <ResearchPlanSection data={data.sections.researchPlan} />
        <ResearchFindingsSection data={data.sections.researchFindings} />
        <JourneyMapSection data={data.sections.journeyMap} />
        <UserPersonasSection data={data.sections.userPersonasSection} />
        <OpportunityAreasSection data={data.sections.opportunityAreas} />
        <DesignPrinciplesSection data={data.sections.designPrinciples} />
        <FlowComparisonSection data={data.sections.flowComparison} />
        <ExpectedImpactsSection data={data.sections.expectedImpacts} />
        <KeyTakeawaySection data={data.sections.keyTakeaway} />
        <MoreProjects currentProjectId={data.id} />
      </div>
    </article>
  );
};

export default ResearchProjectView;
