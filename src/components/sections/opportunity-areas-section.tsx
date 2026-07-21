import React from "react";
import {
  ShieldCheck,
  Maximize2,
  HelpCircle,
  Hourglass,
  Gift,
} from "lucide-react";

export interface OpportunityCategory {
  title: string;
  iconType: "before" | "during" | "errors" | "waiting" | "completion";
  points: string[];
}

export interface OpportunityAreasData {
  tagline?: string;
  headline: string;
  categories: OpportunityCategory[];
}

interface OpportunityAreasSectionProps {
  data?: OpportunityAreasData;
}

export const OpportunityAreasSection: React.FC<
  OpportunityAreasSectionProps
> = ({ data }) => {
  if (!data || !data.categories.length) return null;

  const renderIcon = (type: string) => {
    switch (type) {
      case "before":
        return <ShieldCheck className="w-5 h-5 text-emerald-600" />;
      case "during":
        return <Maximize2 className="w-5 h-5 text-blue-600" />;
      case "errors":
        return <HelpCircle className="w-5 h-5 text-amber-600" />;
      case "waiting":
        return <Hourglass className="w-5 h-5 text-purple-600" />;
      case "completion":
        return <Gift className="w-5 h-5 text-rose-500" />;
      default:
        return <ShieldCheck className="w-5 h-5 text-emerald-600" />;
    }
  };

  const getIconBg = (type: string) => {
    switch (type) {
      case "before":
        return "bg-emerald-100/70";
      case "during":
        return "bg-blue-100/70";
      case "errors":
        return "bg-amber-100/70";
      case "waiting":
        return "bg-purple-100/70";
      case "completion":
        return "bg-rose-100/70";
      default:
        return "bg-emerald-100/70";
    }
  };

  return (
    <section className="w-full bg-white py-12 px-4 md:px-8">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Header Block */}
        <div className="text-center space-y-1">
          <span className="text-xs font-semibold text-[#8B5CF6]">
            {data.tagline || "Solution"}
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
            {data.headline}
          </h2>
        </div>

        {/* Categories Flex Layout */}
        <div className="flex flex-wrap md:justify-end -mx-4 -my-5 pt-4">
          {data.categories.map((category, index) => (
            <div
              key={index}
              className="w-full md:w-1/2 px-4 py-5 flex items-start gap-4"
            >
              {/* Category Icon Badge */}
              <div
                className={`p-2.5 rounded-xl ${getIconBg(
                  category.iconType,
                )} flex items-center justify-center flex-shrink-0 mt-0.5`}
              >
                {renderIcon(category.iconType)}
              </div>

              {/* Title & Points List */}
              <div className="space-y-2">
                <h3 className="text-sm font-bold text-gray-900 leading-tight">
                  {category.title}
                </h3>
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
    </section>
  );
};

export default OpportunityAreasSection;
