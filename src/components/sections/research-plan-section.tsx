import React from "react";
import {
  Play,
  X,
  Smile,
  Clock,
  Shield,
  User,
  ShieldCheck,
  Maximize2,
  KeyRound,
  Gift,
} from "lucide-react";

interface Hypothesis {
  id: string;
  text: string;
}

interface InterviewCategory {
  name: string;
  iconType: "trust" | "process" | "technical" | "value";
  questions: string[];
}

export interface ResearchPlanData {
  tagline?: string;
  headline: string;
  objectives: string[];
  hypotheses: Hypothesis[];
  interviewPlan: {
    participantCount: string;
    targetUsers: string[];
    categories: InterviewCategory[];
  };
}

interface ResearchPlanSectionProps {
  data?: ResearchPlanData;
}

const objectiveIcons = [Play, X, Smile, Clock, Shield];

export const ResearchPlanSection: React.FC<ResearchPlanSectionProps> = ({
  data,
}) => {
  if (!data) return null;

  const renderCategoryIcon = (type: string) => {
    switch (type) {
      case "trust":
        return <ShieldCheck className="w-4 h-4 text-emerald-600" />;
      case "process":
        return <Maximize2 className="w-4 h-4 text-blue-600" />;
      case "technical":
        return <KeyRound className="w-4 h-4 text-amber-600" />;
      case "value":
        return <Gift className="w-4 h-4 text-rose-500" />;
      default:
        return <ShieldCheck className="w-4 h-4 text-purple-600" />;
    }
  };

  const getCategoryBg = (type: string) => {
    switch (type) {
      case "trust":
        return "bg-emerald-50";
      case "process":
        return "bg-blue-50";
      case "technical":
        return "bg-amber-50";
      case "value":
        return "bg-rose-50";
      default:
        return "bg-purple-50";
    }
  };

  return (
    <section className="w-full  py-16 px-4 md:px-8 border-t border-gray-100">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header Block */}
        <div className="text-center mb-10">
          <span className="text-xs font-bold uppercase tracking-widest text-[#7C3AED] mb-2 block">
            {data.tagline || "Process"}
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
            {data.headline}
          </h2>
        </div>

        {/* Top Cards: Objectives & Hypotheses */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Research Objective */}
          <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm space-y-5">
            <h3 className="text-lg font-bold text-gray-900">
              Research Objective
            </h3>
            <ul className="space-y-4">
              {data.objectives.map((obj, idx) => {
                const IconComponent =
                  objectiveIcons[idx % objectiveIcons.length];
                return (
                  <li key={idx} className="flex items-center gap-3">
                    <span className="p-2 rounded-lg bg-purple-50 text-purple-600 flex-shrink-0">
                      <IconComponent className="w-4 h-4" />
                    </span>
                    <span className="text-sm font-semibold text-gray-800">
                      {obj}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Research Hypothesis */}
          <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm space-y-5">
            <h3 className="text-lg font-bold text-gray-900">
              Research Hypothesis
            </h3>
            <ul className="space-y-3.5">
              {data.hypotheses.map((item) => (
                <li key={item.id} className="flex items-start gap-3">
                  <span className="px-2 py-0.5 rounded bg-purple-50 text-purple-600 font-bold text-xs flex-shrink-0 mt-0.5">
                    {item.id}
                  </span>
                  <span className="text-sm font-semibold text-gray-800 leading-snug">
                    {item.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Card: User Interview Plan */}
        <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-100 shadow-sm space-y-6">
          <h3 className="text-lg font-bold text-gray-900">
            User interview plan
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pt-2">
            {/* Left Column: Participants */}
            <div className="md:col-span-4 space-y-6 md:border-r md:border-gray-100 md:pr-6">
              <div>
                <p className="text-xs font-bold text-gray-900 mb-1">
                  Participant
                </p>
                <p className="text-sm font-medium text-gray-600">
                  {data.interviewPlan.participantCount}
                </p>
              </div>

              <div>
                <p className="text-xs font-bold text-purple-600 mb-3">
                  Target Users
                </p>
                <ul className="space-y-3">
                  {data.interviewPlan.targetUsers.map((user, idx) => (
                    <li key={idx} className="flex items-center gap-2.5">
                      <span className="p-1.5 rounded-md bg-purple-50 text-purple-600">
                        <User className="w-3.5 h-3.5" />
                      </span>
                      <span className="text-sm font-semibold text-gray-800">
                        {user}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Column: Key Interview Questions */}
            <div className="md:col-span-8 space-y-6">
              <p className="text-xs font-bold text-gray-900">
                Key Interview questions
              </p>

              <div className="space-y-6">
                {data.interviewPlan.categories.map((cat, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col sm:flex-row items-start gap-4"
                  >
                    <div className="flex items-center gap-2 w-36 flex-shrink-0">
                      <span
                        className={`p-2 rounded-lg ${getCategoryBg(
                          cat.iconType,
                        )}`}
                      >
                        {renderCategoryIcon(cat.iconType)}
                      </span>
                      <span className="text-sm font-bold text-gray-900">
                        {cat.name}
                      </span>
                    </div>

                    <ul className="space-y-1.5 list-disc list-inside text-sm font-medium text-gray-600">
                      {cat.questions.map((q, qIdx) => (
                        <li key={qIdx} className="leading-relaxed">
                          {q}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResearchPlanSection;
