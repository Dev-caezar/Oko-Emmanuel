import React from "react";
import type { ResearchProjectData } from "../../data/project-data";

interface ResearchProjectViewProps {
  data: ResearchProjectData;
}

const ResearchProjectView: React.FC<ResearchProjectViewProps> = ({ data }) => {
  return (
    <article className="w-full bg-white text-[#111111] pb-24">
      {/* Hero Header Section */}
      <header className="w-full max-w-6xl mx-auto pt-16 pb-12 px-6 md:px-12">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
          {data.title}
        </h1>
        <p className="text-lg md:text-xl text-gray-400 font-medium max-w-3xl mb-12">
          {data.subtitle}
        </p>

        {/* Project Metadata Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-gray-100">
          <div>
            <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">
              Role
            </h4>
            <p className="text-sm font-medium text-gray-800">
              {data.meta.role}
            </p>
          </div>
          <div>
            <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">
              Timeline
            </h4>
            <p className="text-sm font-medium text-gray-800">
              {data.meta.timeline}
            </p>
          </div>
          <div>
            <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">
              Sector
            </h4>
            <p className="text-sm font-medium text-gray-800">
              {data.meta.sector}
            </p>
          </div>
          <div>
            <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">
              Tools
            </h4>
            <p className="text-sm font-medium text-gray-800">
              {data.meta.tools.join(", ")}
            </p>
          </div>
        </div>
      </header>

      {/* Main Content Layout Sections */}
      <div className="w-full max-w-6xl mx-auto px-6 md:px-12 flex flex-col gap-20">
        {/* Section: Overview & Metrics */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start border-t border-gray-100 pt-12">
          <div className="lg:col-span-6">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-600 mb-3 block">
              01 / Context
            </span>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4">
              {data.sections.overview.headline}
            </h2>
            <p className="text-sm leading-relaxed text-gray-400 font-medium">
              {data.sections.overview.context}
            </p>
          </div>
          <div className="lg:col-span-6 grid grid-cols-2 gap-4 w-full">
            {data.sections.overview.metrics.map((metric, idx) => (
              <div
                key={idx}
                className="bg-emerald-50/40 border border-emerald-100/50 rounded-2xl p-6 flex flex-col justify-center"
              >
                <span className="text-3xl md:text-5xl font-bold text-emerald-600 tracking-tight mb-1">
                  {metric.value}
                </span>
                <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                  {metric.label}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Section: Research Goals */}
        <section className="border-t border-gray-100 pt-12 max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-600 mb-3 block">
            02 / Intent
          </span>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-6">
            {data.sections.researchGoals.headline}
          </h2>
          <ul className="space-y-4">
            {data.sections.researchGoals.points.map((point, index) => (
              <li
                key={index}
                className="flex items-start gap-3 text-sm font-medium text-gray-500 leading-relaxed"
              >
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gray-100 text-xs font-bold text-gray-700 mt-0.5">
                  {index + 1}
                </span>
                {point}
              </li>
            ))}
          </ul>
        </section>

        {/* Section: Funnel Drop-off Analysis */}
        <section className="border-t border-gray-100 pt-12">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-600 mb-3 block">
            03 / Friction Mapping
          </span>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-8">
            {data.sections.funnelAnalysis.headline}
          </h2>

          <div className="w-full border border-gray-100 rounded-2xl overflow-hidden shadow-[0_4px_24px_rgba(0,0,0,0.01)]">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-left text-xs md:text-sm">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-100 text-gray-400 font-bold uppercase tracking-wider">
                    <th className="py-4 px-6">User Flow Step</th>
                    <th className="py-4 px-6 text-center">Drop-off Rate</th>
                    <th className="py-4 px-6 max-w-xs md:max-w-md">
                      Primary Friction Root Cause
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 font-medium">
                  {data.sections.funnelAnalysis.dropOffSteps.map(
                    (row, index) => (
                      <tr
                        key={index}
                        className="hover:bg-gray-50/50 transition-colors"
                      >
                        <td className="py-4 px-6 font-bold text-gray-900">
                          {row.step}
                        </td>
                        <td className="py-4 px-6 text-center font-bold text-red-500 bg-red-50/20">
                          {row.dropOffRate}
                        </td>
                        <td className="py-4 px-6 text-gray-400 max-w-xs md:max-w-md leading-relaxed">
                          {row.frictionPoint}
                        </td>
                      </tr>
                    ),
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Section: Insights & UX Recommendations */}
        <section className="border-t border-gray-100 pt-12">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-600 mb-3 block">
            04 / Synthesis
          </span>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-8">
            {data.sections.insights.headline}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {data.sections.insights.findings.map((finding, idx) => (
              <div
                key={idx}
                className="p-6 border border-gray-100 rounded-2xl bg-white"
              >
                <h3 className="text-base font-bold text-gray-900 mb-2 flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 shrink-0" />
                  {finding.title}
                </h3>
                <p className="text-xs md:text-sm text-gray-400 leading-relaxed font-medium">
                  {finding.detail}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </article>
  );
};

export default ResearchProjectView;
