import React from "react";

interface SolutionItem {
  name: string;
  role: string;
  image: string;
  problemTitle: string;
  description: string;
  outcome: string;
}

interface SolutionsListProps {
  data: {
    headline: string;
    solutions: SolutionItem[];
  };
}

const SolutionsList: React.FC<SolutionsListProps> = ({ data }) => {
  return (
    <section className="max-w-7xl w-full mx-auto px-6 md:px-12 border-t border-gray-100 pt-16 pb-20">
      {/* Section Typography Header */}
      <div className="mb-12 text-center">
        <span className="text-xs font-bold uppercase tracking-widest text-purple-600 mb-3 block">
          Design Decisions
        </span>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 mb-2">
          {data.headline}
        </h2>
      </div>

      {/* Solutions Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
        {data.solutions.map((item, index) => (
          <div
            key={index}
            className="w-full rounded-2xl bg-[#F5F5F5] overflow-hidden flex flex-col justify-between shadow-sm"
          >
            {/* Top Content Area */}
            <div className="p-6 md:p-8 flex flex-col gap-5">
              {/* User Profile Header */}
              <div className="flex items-center gap-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-12 h-12 rounded-full object-cover bg-gray-300 shrink-0"
                />
                <div className="flex flex-col">
                  <h3 className="text-base font-bold text-gray-900 leading-tight">
                    {item.name}
                  </h3>
                  <p className="text-xs text-gray-500 mt-0.5">{item.role}</p>
                </div>
              </div>

              {/* Problem & Description Text */}
              <div className="flex flex-col gap-2">
                <h4 className="text-base font-bold text-gray-900">
                  {item.problemTitle}
                </h4>
                <p className="text-sm text-gray-600 leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>
            </div>

            {/* Target Outcome Footer */}
            <div className="bg-[#1C4511] px-6 py-4 md:px-8 flex flex-col gap-1">
              <span className="text-xs font-bold uppercase tracking-wider text-white opacity-90">
                Target outcome
              </span>
              <p className="text-xs text-white font-normal opacity-80">
                {item.outcome}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SolutionsList;
