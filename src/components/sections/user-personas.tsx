import React from "react";
import { motion, type Variants } from "framer-motion";

interface PersonaItem {
  name: string;
  role: string;
  image?: string;
  quote?: string;
  frustrations?: string[];
}

interface UserPersonasProps {
  headline: string;
  personas: PersonaItem[];
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

const UserPersonas: React.FC<UserPersonasProps> = ({ headline, personas }) => {
  return (
    <section className="w-full bg-white py-10 md:py-12 px-6 md:px-12 relative overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none select-none flex items-center justify-center">
        <svg
          width="100%"
          height="100%"
          className="absolute min-w-250 h-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="50%"
            cy="50%"
            r="400"
            fill="none"
            stroke="#000"
            strokeWidth="2"
          />
          <circle
            cx="50%"
            cy="50%"
            r="280"
            fill="none"
            stroke="#000"
            strokeWidth="1.5"
          />
          <line
            x1="0"
            y1="0"
            x2="100%"
            y2="100%"
            stroke="#000"
            strokeWidth="1.5"
          />
          <line
            x1="100%"
            y1="0"
            x2="0"
            y2="100%"
            stroke="#000"
            strokeWidth="1.5"
          />
        </svg>
      </div>

      <div className="max-w-6xl w-full mx-auto relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <span className="text-[11px] font-semibold uppercase tracking-widest text-purple-600 mb-2 block">
            User research
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-neutral-900 max-w-3xl mx-auto leading-tight">
            {headline}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-5xl mx-auto">
          {personas.map((persona, index) => {
            const bodyContent =
              persona.quote ||
              (persona.frustrations && persona.frustrations[0]);

            return (
              <motion.div
                key={persona.name || index}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                className="w-full bg-[#F8F9FA] hover:bg-[#F3F4F6] rounded-2xl p-6 md:p-8 flex flex-col justify-between border border-gray-100/80 transition-colors duration-300"
              >
                <div>
                  <div className="flex items-center gap-3.5 mb-5">
                    {persona.image ? (
                      <img
                        src={persona.image}
                        alt={persona.name}
                        className="w-11 h-11 rounded-full object-cover shrink-0 border border-gray-200/80 shadow-sm"
                      />
                    ) : (
                      <div className="w-11 h-11 rounded-full bg-neutral-200/80 shrink-0 flex items-center justify-center font-bold text-neutral-700 border border-gray-200/80 shadow-sm text-sm">
                        {persona.name ? persona.name.charAt(0) : "U"}
                      </div>
                    )}
                    <div className="flex flex-col min-w-0">
                      <span className="text-sm font-bold text-neutral-900 truncate">
                        {persona.name}
                      </span>
                      <span className="text-xs text-neutral-500 font-medium mt-0.5 truncate">
                        {persona.role}
                      </span>
                    </div>
                  </div>

                  {bodyContent && (
                    <p className="text-xs md:text-[13px] text-neutral-600 leading-relaxed font-normal">
                      "{bodyContent}"
                    </p>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default UserPersonas;
