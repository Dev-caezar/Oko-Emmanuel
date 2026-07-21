import React from "react";

export interface ProblemSectionItem {
  title: string;
  description: string;
  accentColor: "red" | "blue" | "amber";
}

interface ProblemFramingData {
  tagline: string;
  headline: string;
  items: ProblemSectionItem[];
  mockupImage: string;
}

interface ProblemFramingSectionProps {
  data: ProblemFramingData;
}

export const ProblemFramingSection: React.FC<ProblemFramingSectionProps> = ({
  data,
}) => {
  if (!data) return null;

  const colorMap = {
    red: "border-red-600",
    blue: "border-blue-600",
    amber: "border-amber-500",
  };

  return (
    <section className="w-full border-t border-gray-100 pt-16 pb-20 bg-white">
      {/* Container wrapper ensuring equal max-width and padding across header & grid */}
      <div className="max-w-6xl mx-auto px-6 md:px-0">
        {/* Top Header Block */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-[#7C3AED] mb-3 block">
            {data.tagline}
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-[#111111]">
            {data.headline}
          </h2>
        </div>

        {/* Two-Column Grid Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Problem Copy Blocks */}
          <div className="lg:col-span-7 flex flex-col gap-10">
            {data.items.map((item, index) => (
              <div
                key={index}
                className={`pl-5 border-l-4 ${colorMap[item.accentColor] || "border-gray-300"}`}
              >
                <h3 className="text-lg font-bold text-[#111111] mb-2 tracking-tight">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-gray-500 font-medium">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* Right Column: Phone Mockup Frame */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-xs drop-shadow-[0_25px_50px_rgba(0,0,0,0.08)]">
              <img
                src={data.mockupImage}
                alt={data.headline}
                className="w-full h-auto object-contain rounded-[40px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemFramingSection;