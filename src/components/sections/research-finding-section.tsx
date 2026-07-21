import React from "react";
import { ShieldCheck, Maximize2, HelpCircle, Gift } from "lucide-react";

export interface ResearchFindingCategory {
  title: string;
  iconType: "trust" | "process" | "technical" | "value";
  points: string[];
}

export interface ResearchFindingsData {
  tagline?: string;
  headline: string;
  subSectionTitle?: string;
  categories: ResearchFindingCategory[];
}

interface ResearchFindingsSectionProps {
  data?: ResearchFindingsData;
}

export const ResearchFindingsSection: React.FC<
  ResearchFindingsSectionProps
> = ({ data }) => {
  if (!data) return null;

  const renderIcon = (type: string) => {
    switch (type) {
      case "trust":
        return <ShieldCheck className="w-5 h-5 text-emerald-600" />;
      case "process":
        return <Maximize2 className="w-5 h-5 text-blue-600" />;
      case "technical":
        return <HelpCircle className="w-5 h-5 text-amber-600" />;
      case "value":
        return <Gift className="w-5 h-5 text-rose-500" />;
      default:
        return <ShieldCheck className="w-5 h-5 text-purple-600" />;
    }
  };

  const getIconBg = (type: string) => {
    switch (type) {
      case "trust":
        return "bg-emerald-100/70";
      case "process":
        return "bg-blue-100/70";
      case "technical":
        return "bg-amber-100/70";
      case "value":
        return "bg-rose-100/70";
      default:
        return "bg-purple-100/70";
    }
  };

  return (
    <section className="w-full bg-white py-12 px-4 md:px-8">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Top Titles */}
        <div className="text-center space-y-1">
          <span className="text-xs font-semibold text-[#8B5CF6]">
            {data.tagline || "Hypothesis"}
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
            {data.headline}
          </h2>
        </div>

        {/* Outer Card Wrapper */}
        <div className="bg-white rounded-2xl border border-gray-200/80 p-6 md:p-8 shadow-sm space-y-6">
          {data.subSectionTitle && (
            <h3 className="text-base font-bold text-gray-900">
              {data.subSectionTitle}
            </h3>
          )}

          {/* Grid Layout matching image */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 gap-x-12">
            {data.categories.map((category, index) => (
              <div key={index} className="flex items-start gap-4">
                {/* Category Icon Badge */}
                <div
                  className={`p-2.5 rounded-xl ${getIconBg(
                    category.iconType,
                  )} flex items-center justify-center flex-shrink-0 mt-0.5`}
                >
                  {renderIcon(category.iconType)}
                </div>

                {/* Category Title & List */}
                <div className="space-y-2">
                  <h4 className="text-sm font-bold text-gray-900 leading-tight">
                    {category.title}
                  </h4>
                  <ul className="space-y-1.5 list-disc list-inside text-xs font-medium text-gray-600">
                    {category.points.map((point, pIndex) => (
                      <li key={pIndex} className="leading-relaxed">
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResearchFindingsSection;
