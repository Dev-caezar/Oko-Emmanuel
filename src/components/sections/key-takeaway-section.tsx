import React from "react";

export interface KeyTakeawayData {
  headline: string;
  subheading?: string;
  businessGoalTitle?: string;
  businessGoalDescription?: string;
  principlesHeader?: string;
  principles: string[];
}

interface KeyTakeawaySectionProps {
  data?: KeyTakeawayData;
}

export const KeyTakeawaySection: React.FC<KeyTakeawaySectionProps> = ({
  data,
}) => {
  if (!data) return null;

  return (
    <section className="w-full bg-white py-12 px-4 md:px-8">
      <div className="max-w-2xl mx-auto space-y-8">
        {/* Header Block */}
        <div className="text-center space-y-3">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
            {data.headline}
          </h2>
          {data.subheading && (
            <p className="text-sm md:text-base text-gray-400 font-medium leading-relaxed">
              {data.subheading}
            </p>
          )}
        </div>

        {/* Business Goal Block */}
        {(data.businessGoalTitle || data.businessGoalDescription) && (
          <div className="text-left space-y-1 max-w-xl mx-auto">
            {data.businessGoalTitle && (
              <h3 className="text-base font-bold text-gray-900">
                {data.businessGoalTitle}
              </h3>
            )}
            {data.businessGoalDescription && (
              <p className="text-sm text-gray-500 font-normal">
                {data.businessGoalDescription}
              </p>
            )}
          </div>
        )}

        {/* Principles Section */}
        {data.principles.length > 0 && (
          <div className="pt-4 space-y-6 max-w-xl mx-auto">
            {data.principlesHeader && (
              <h4 className="text-sm font-bold text-gray-400 tracking-wide">
                {data.principlesHeader}
              </h4>
            )}

            <div className="space-y-6">
              {data.principles.map((principle, index) => (
                <div key={index} className="flex items-center gap-4">
                  {/* Purple Accent Line */}
                  <div className="w-1.5 h-7 bg-[#6D28D9] rounded-full flex-shrink-0" />

                  {/* Principle Text */}
                  <p className="text-sm md:text-base font-bold text-gray-900 leading-snug">
                    {principle}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default KeyTakeawaySection;
