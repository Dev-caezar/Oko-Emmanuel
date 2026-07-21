import React from "react";

export interface KPIRow {
  metric: string;
  current: string;
  target: string;
}

export interface KPIMetricsData {
  tagline?: string;
  headline: string;
  subHeadline: string;
  kpis: KPIRow[];
}

interface KPIMetricsSectionProps {
  data?: KPIMetricsData;
}

export const KPIMetricsSection: React.FC<KPIMetricsSectionProps> = ({
  data,
}) => {
  if (!data) return null;

  return (
    <section className="w-full border-t border-gray-100 pt-16 pb-12 bg-white">
      {/* Header Block */}
      <div className="text-center mb-12 max-w-2xl mx-auto px-4">
        <span className="text-xs font-bold uppercase tracking-widest text-[#7C3AED] mb-3 block">
          {data.tagline || "Business Goals"}
        </span>
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-[#111111] mb-4">
          {data.headline}
        </h2>
        <p className="text-sm md:text-base text-gray-400 font-medium leading-relaxed">
          {data.subHeadline}
        </p>
      </div>

      {/* KPI Table Container */}
      <div className="w-full max-w-4xl mx-auto px-6">
        <div className="w-full overflow-x-auto">
          <table className="w-full border-collapse text-left">
            <thead>
              <tr className="border-b border-gray-200 text-gray-400 font-semibold text-sm md:text-base">
                <th className="pb-4 font-medium">Metric</th>
                <th className="pb-4 text-center font-medium w-1/4">Current</th>
                <th className="pb-4 text-center font-medium w-1/4">Target</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50 text-sm md:text-base font-medium text-gray-700">
              {data.kpis.map((row, index) => (
                <tr
                  key={index}
                  className="hover:bg-gray-50/40 transition-colors"
                >
                  <td className="py-5 pr-4 font-medium text-gray-900">
                    {row.metric}
                  </td>
                  <td className="py-5 text-center text-gray-600">
                    {row.current}
                  </td>
                  <td className="py-5 text-center text-gray-900 font-semibold">
                    {row.target}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default KPIMetricsSection;
