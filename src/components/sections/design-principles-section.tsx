import React from "react";

export interface DesignPrincipleItem {
  title: string;
  description: string;
  image: string;
  align?: "left" | "right";
}

export interface DesignPrinciplesSectionData {
  headline?: string;
  principles: DesignPrincipleItem[];
}

interface DesignPrinciplesSectionProps {
  data?: DesignPrinciplesSectionData;
}

export const DesignPrinciplesSection: React.FC<
  DesignPrinciplesSectionProps
> = ({ data }) => {
  if (!data || !data.principles.length) return null;

  return (
    <section className="w-full bg-white py-12 px-4 md:px-8">
      {/* Expanded section width from max-w-4xl to max-w-6xl */}
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Section Headline */}
        {data.headline && (
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 tracking-tight">
            {data.headline}
          </h2>
        )}

        {/* Outer Card Container */}
        <div className="bg-white border border-gray-100 shadow-xs rounded-3xl p-6 md:p-12 divide-y divide-gray-100">
          {data.principles.map((item, index) => {
            const isRightAligned = item.align === "right";

            return (
              <div
                key={index}
                className="flex flex-col sm:flex-row items-center py-10 first:pt-2 last:pb-2 gap-8"
              >
                {/* Left Side Column */}
                <div className="w-full sm:w-1/2 flex justify-center sm:justify-start">
                  {!isRightAligned ? (
                    <div className="space-y-1.5 text-center sm:text-left">
                      <h3 className="text-lg font-bold text-gray-900 leading-snug">
                        {item.title}
                      </h3>
                      <p className="text-sm font-medium text-gray-500">
                        {item.description}
                      </p>
                    </div>
                  ) : (
                    /* Increased image container size */
                    <div className="w-48 h-36 flex items-center justify-center">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  )}
                </div>

                {/* Right Side Column */}
                <div className="w-full sm:w-1/2 flex justify-center sm:justify-end">
                  {isRightAligned ? (
                    <div className="space-y-1.5 text-center sm:text-right">
                      <h3 className="text-lg font-bold text-gray-900 leading-snug">
                        {item.title}
                      </h3>
                      <p className="text-sm font-medium text-gray-500">
                        {item.description}
                      </p>
                    </div>
                  ) : (
                    /* Increased image container size */
                    <div className="w-48 h-36 flex items-center justify-center">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default DesignPrinciplesSection;
