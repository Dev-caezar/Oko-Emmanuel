import React from "react";
import { motion } from "framer-motion";

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

const UserPersonas: React.FC<UserPersonasProps> = ({ headline, personas }) => {
  return (
    <section className="w-full bg-white py-20 px-6 md:px-12 relative overflow-hidden flex items-center justify-center">
      {/* Subtle background abstract vector lines matching the design */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none select-none flex items-center justify-center">
        <svg
          width="100%"
          height="100%"
          className="absolute min-w-[1000px] h-full"
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

      <div className="max-w-7xl w-full mx-auto relative z-10">
        {/* Top Centered Section Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-purple-600 mb-3 block">
            User research
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 max-w-3xl mx-auto">
            {headline}
          </h2>
        </div>

        {/* Personas Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-5xl mx-auto">
          {personas.map((persona, index) => (
            <motion.div
              key={index}
              className="w-full bg-[#F8F9FA] rounded-2xl p-6 md:p-8 flex flex-col justify-between border border-gray-100/50"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div>
                {/* Persona Identity Header Block */}
                <div className="flex items-center gap-4 mb-6">
                  {persona.image ? (
                    <img
                      src={persona.image}
                      alt={persona.name}
                      className="w-12 h-12 rounded-full object-cover flex-shrink-0 border border-gray-100 shadow-sm"
                    />
                  ) : (
                    <div className="w-12 h-12 rounded-full bg-gray-200 flex-shrink-0 flex items-center justify-center font-bold text-gray-600 border border-gray-100 shadow-sm">
                      {persona.name.charAt(0)}
                    </div>
                  )}
                  <div className="flex flex-col">
                    <span className="text-sm font-bold text-gray-900">
                      {persona.name}
                    </span>
                    <span className="text-xs text-gray-400 font-medium mt-0.5">
                      {persona.role}
                    </span>
                  </div>
                </div>

                {/* Single Plain Sentence Pain Point/Description Display */}
                <p className="text-xs md:text-[13px] text-gray-600 leading-relaxed font-medium">
                  {persona.quote ||
                    (persona.frustrations && persona.frustrations[0])}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UserPersonas;
