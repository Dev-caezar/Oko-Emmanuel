import React from "react";
import { Smile, Meh, Frown } from "lucide-react";

export interface JourneyStep {
  stepNumber: number;
  label: string;
  emotion: string;
  emotionType:
    | "excited"
    | "hopeful"
    | "comfortable"
    | "unsure"
    | "frustrated"
    | "anxious"
    | "relieved";
}

export interface JourneyMapData {
  title?: string;
  steps: JourneyStep[];
}

interface JourneyMapSectionProps {
  data?: JourneyMapData;
}

export const JourneyMapSection: React.FC<JourneyMapSectionProps> = ({
  data,
}) => {
  if (!data || !data.steps.length) return null;

  const getEmotionConfig = (type: string) => {
    switch (type) {
      case "excited":
      case "relieved":
        return {
          bg: "bg-emerald-500",
          ring: "ring-emerald-100",
          icon: <Smile className="w-5 h-5 text-white" />,
        };
      case "hopeful":
        return {
          bg: "bg-lime-500",
          ring: "ring-lime-100",
          icon: <Smile className="w-5 h-5 text-white" />,
        };
      case "comfortable":
        return {
          bg: "bg-amber-400",
          ring: "ring-amber-100",
          icon: <Smile className="w-5 h-5 text-white" />,
        };
      case "unsure":
        return {
          bg: "bg-orange-500",
          ring: "ring-orange-100",
          icon: <Meh className="w-5 h-5 text-white" />,
        };
      case "frustrated":
        return {
          bg: "bg-red-500",
          ring: "ring-red-100",
          icon: <Frown className="w-5 h-5 text-white" />,
        };
      case "anxious":
        return {
          bg: "bg-amber-500",
          ring: "ring-amber-100",
          icon: <Frown className="w-5 h-5 text-white" />,
        };
      default:
        return {
          bg: "bg-emerald-500",
          ring: "ring-emerald-100",
          icon: <Smile className="w-5 h-5 text-white" />,
        };
    }
  };

  return (
    <section className="w-full bg-white py-8 sm:py-12 px-4 sm:px-6 md:px-8">
      <div className="max-w-6xl mx-auto space-y-6 sm:space-y-10">
        {data.title && (
          <h3 className="text-lg sm:text-xl font-bold text-gray-900 text-center sm:text-left">
            {data.title}
          </h3>
        )}

        {/* --- MOBILE VIEW: Vertical Timeline Card Stack --- */}
        <div className="block md:hidden space-y-6 relative pl-4 border-l-2 border-dashed border-gray-200 ml-2">
          {data.steps.map((step) => {
            const config = getEmotionConfig(step.emotionType);
            return (
              <div
                key={step.stepNumber}
                className="relative pl-6 flex items-start space-x-4"
              >
                {/* Timeline Icon Node */}
                <div
                  className={`absolute -left-[1.35rem] top-0 w-8 h-8 rounded-full ${config.bg} flex items-center justify-center shadow-md ring-4 ring-white shrink-0`}
                >
                  {config.icon}
                </div>

                {/* Content */}
                <div className="bg-gray-50/80 rounded-xl p-4 w-full border border-gray-100 space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-gray-400">
                      Step {step.stepNumber}
                    </span>
                    <span className="text-xs font-bold text-gray-700 bg-white px-2 py-0.5 rounded-full border border-gray-200">
                      {step.emotion}
                    </span>
                  </div>
                  <h4 className="text-sm font-bold text-gray-900 pt-1">
                    {step.label}
                  </h4>
                </div>
              </div>
            );
          })}
        </div>

        {/* --- DESKTOP VIEW: Horizontal Interactive Chart --- */}
        <div className="hidden md:block relative pt-8 pb-12 overflow-x-auto no-scrollbar">
          <div className="min-w-[700px] relative px-6">
            {/* Emotions Label */}
            <span className="absolute left-0 top-1/2 -translate-y-1/2 text-xs font-bold uppercase tracking-wider text-gray-400 z-10">
              Emotions
            </span>

            {/* Connecting Curve */}
            <svg
              className="absolute inset-x-0 top-1/2 -translate-y-1/2 w-full h-24 pointer-events-none"
              preserveAspectRatio="none"
              viewBox="0 0 700 100"
            >
              <defs>
                <linearGradient
                  id="journeyGradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="0%"
                >
                  <stop offset="0%" stopColor="#10B981" />
                  <stop offset="25%" stopColor="#84CC16" />
                  <stop offset="40%" stopColor="#F59E0B" />
                  <stop offset="60%" stopColor="#EF4444" />
                  <stop offset="80%" stopColor="#F59E0B" />
                  <stop offset="100%" stopColor="#10B981" />
                </linearGradient>
              </defs>
              <path
                d="M 50,50 Q 150,45 250,35 T 350,45 T 450,70 T 550,75 T 650,50"
                fill="none"
                stroke="url(#journeyGradient)"
                strokeWidth="4"
                strokeLinecap="round"
              />
            </svg>

            {/* Dynamic Grid Column Container */}
            <div
              className="grid gap-4 relative z-10 pl-20"
              style={{
                gridTemplateColumns: `repeat(${data.steps.length}, minmax(0, 1fr))`,
              }}
            >
              {data.steps.map((step) => {
                const config = getEmotionConfig(step.emotionType);
                return (
                  <div
                    key={step.stepNumber}
                    className="flex flex-col items-center text-center space-y-3"
                  >
                    {/* Top Step Info */}
                    <div className="flex flex-col items-center space-y-1 min-h-[48px] justify-end">
                      <span className="text-[11px] font-semibold text-gray-400">
                        0{step.stepNumber}
                      </span>
                      <span className="text-xs font-bold text-gray-800 leading-tight max-w-[120px]">
                        {step.label}
                      </span>
                    </div>

                    {/* Dotted Vertical Guide */}
                    <div className="w-px h-6 border-l border-dashed border-gray-300 my-1" />

                    {/* Node Icon */}
                    <div
                      className={`w-9 h-9 rounded-full ${config.bg} flex items-center justify-center shadow-md ring-4 ring-white shrink-0`}
                    >
                      {config.icon}
                    </div>

                    {/* Bottom Label */}
                    <span className="text-xs font-bold text-gray-800 pt-1">
                      {step.emotion}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JourneyMapSection;
