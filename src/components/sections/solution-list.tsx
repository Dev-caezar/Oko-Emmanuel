import React from "react";
import { motion, type Variants } from "framer-motion";

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

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: (custom: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: custom * 0.1,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

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
          <motion.div
            key={item.name || index}
            custom={index}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            className="w-full rounded-2xl bg-[#F5F5F5] overflow-hidden flex flex-col justify-between"
          >
            {/* Top Content Area */}
            <div className="p-6 md:p-8 flex flex-col gap-5">
              {/* User Profile Header */}
              <div className="flex items-center gap-4">
                {item.image ? (
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-12 h-12 rounded-full object-cover shrink-0"
                  />
                ) : (
                  <div className="w-12 h-12 rounded-full bg-gray-300 flex items-center justify-center font-bold text-gray-700 shrink-0 text-sm">
                    {item.name ? item.name.charAt(0) : "U"}
                  </div>
                )}
                <div className="flex flex-col min-w-0">
                  <h3 className="text-base font-bold text-gray-900 leading-tight truncate">
                    {item.name}
                  </h3>
                  <p className="text-xs text-gray-500 mt-0.5 truncate">
                    {item.role}
                  </p>
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
              <span className="text-xs font-bold uppercase tracking-wider text-white/90">
                Target outcome
              </span>
              <p className="text-xs text-white/80 font-normal leading-relaxed">
                {item.outcome}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default SolutionsList;
