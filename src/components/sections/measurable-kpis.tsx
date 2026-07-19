import React from "react";

interface KPIRow {
  metric: string;
  current: string;
  target: string;
}

interface MeasurableKPIsProps {
  data: {
    headline: string;
    subHeadline: string;
    kpis: KPIRow[];
  };
}

const MeasurableKPIs: React.FC<MeasurableKPIsProps> = ({ data }) => {
  return (
    <section className="max-w-4xl w-full mx-auto px-6 md:px-12 pt-16 pb-20 flex flex-col items-center">
      {/* Section Headers */}
      <div className="text-center mb-10 max-w-2xl">
        <span className="text-xs font-bold uppercase tracking-widest text-purple-600 mb-3 block">
          Design decisions
        </span>
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-4">
          {data.headline}
        </h2>
        <p className="text-sm text-gray-400 font-normal leading-relaxed">
          {data.subHeadline}
        </p>
      </div>

      {/* KPI Table View */}
      <div className="w-full overflow-x-auto">
        <table className="w-full border-collapse text-left">
          <thead>
            <tr className="border-b border-gray-100">
              <th className="py-4 text-sm font-medium text-gray-400 w-1/2">
                Metric
              </th>
              <th className="py-4 text-sm font-medium text-gray-400 w-1/4">
                Current
              </th>
              <th className="py-4 text-sm font-medium text-gray-400 w-1/4">
                Target
              </th>
            </tr>
          </thead>
          <tbody>
            {data.kpis.map((kpi, index) => (
              <tr key={index} className="group">
                <td className="py-4 text-sm font-semibold text-gray-800">
                  {kpi.metric}
                </td>
                <td className="py-4 text-sm font-normal text-gray-600">
                  {kpi.current}
                </td>
                <td className="py-4 text-sm font-normal text-gray-600">
                  {kpi.target}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default MeasurableKPIs;
