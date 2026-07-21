import React from "react";

export interface ImpactMetric {
  kpi: string;
  expectedImprovement: string;
}

export interface ExpectedImpactsData {
  tagline?: string;
  headline: string;
  description: string;
  metrics: ImpactMetric[];
}

interface ExpectedImpactsSectionProps {
  data?: ExpectedImpactsData;
}

export const ExpectedImpactsSection: React.FC<ExpectedImpactsSectionProps> = ({
  data,
}) => {
  if (!data || !data.metrics.length) return null;

  return (
    <section className="w-full bg-white py-12 px-4 md:px-8">
      <div className="max-w-3xl mx-auto space-y-10">
        {/* Header Block */}
        <div className="text-center max-w-xl mx-auto space-y-2">
          {data.tagline && (
            <span className="text-xs font-semibold text-[#8B5CF6]">
              {data.tagline}
            </span>
          )}
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
            {data.headline}
          </h2>
          <p className="text-xs md:text-sm text-gray-400 font-medium leading-relaxed">
            {data.description}
          </p>
        </div>

        {/* Table Container using Flexbox */}
        <div className="w-full space-y-4 pt-2">
          {/* Table Header */}
          <div className="flex items-center justify-between pb-3 border-b border-gray-100 px-4 md:px-12">
            <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">
              KPI
            </span>
            <span className="text-xs font-bold text-gray-400 uppercase tracking-wider text-right">
              Expected Improvement
            </span>
          </div>

          {/* Table Rows */}
          <div className="flex flex-col divide-y divide-transparent space-y-1 px-4 md:px-12">
            {data.metrics.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between py-3"
              >
                <span className="text-sm font-bold text-gray-800">
                  {item.kpi}
                </span>
                <span className="text-sm font-bold text-gray-800 text-right">
                  {item.expectedImprovement}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpectedImpactsSection;
