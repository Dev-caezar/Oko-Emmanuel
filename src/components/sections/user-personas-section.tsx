import React from "react";

export interface PersonaDetail {
  name: string;
  role: string;
  age: number | string;
  location: string;
  quote: string;
  image: string;
  goals: string[];
  frustrations: string[];
}

export interface UserPersonasSectionData {
  tagline?: string;
  headline: string;
  personas: PersonaDetail[];
}

interface UserPersonasSectionProps {
  data?: UserPersonasSectionData;
}

export const UserPersonasSection: React.FC<UserPersonasSectionProps> = ({
  data,
}) => {
  if (!data || !data.personas.length) return null;

  return (
    <section className="w-full bg-white py-14 px-4 md:px-8">
      <div className="max-w-6xl mx-auto space-y-10">
        {/* Header Block */}
        <div className="text-center space-y-1">
          <span className="text-xs font-semibold text-[#8B5CF6]">
            {data.tagline || "Personas"}
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
            {data.headline}
          </h2>
        </div>

        {/* Personas List */}
        <div className="space-y-10">
          {data.personas.map((persona, index) => (
            <div key={index} className="space-y-6">
              {/* Persona Header Card */}
              <div className="bg-[#E9E4FF] rounded-2xl p-6 flex flex-col sm:flex-row items-center sm:items-start gap-5 shadow-xs">
                <img
                  src={persona.image}
                  alt={persona.name}
                  className="w-20 h-20 rounded-full object-cover flex-shrink-0 border-2 border-white shadow-xs"
                />
                <div className="space-y-2 text-center sm:text-left">
                  <h3 className="text-lg font-bold text-gray-900">
                    {persona.name}
                  </h3>
                  <p className="text-xs font-medium text-gray-600">
                    {persona.role} • {persona.age} • {persona.location}
                  </p>
                  <div className="pt-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-gray-500 block">
                      Quote from doubt
                    </span>
                    <p className="text-xs font-medium text-gray-800 italic">
                      "{persona.quote}"
                    </p>
                  </div>
                </div>
              </div>

              {/* Goals & Frustration Columns */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 px-2">
                {/* Goals */}
                <div className="space-y-3">
                  <h4 className="text-sm font-bold text-gray-700">Goals</h4>
                  <ul className="space-y-2 list-disc list-inside text-xs font-medium text-gray-600">
                    {persona.goals.map((goal, gIdx) => (
                      <li key={gIdx} className="leading-relaxed">
                        {goal}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Frustration */}
                <div className="space-y-3">
                  <h4 className="text-sm font-bold text-gray-700">
                    Frustration
                  </h4>
                  <ul className="space-y-2 list-disc list-inside text-xs font-medium text-gray-600">
                    {persona.frustrations.map((frustration, fIdx) => (
                      <li key={fIdx} className="leading-relaxed">
                        {frustration}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UserPersonasSection;
