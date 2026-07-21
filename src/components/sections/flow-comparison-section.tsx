import React from "react";
import { ArrowRight, ArrowDown, AlertTriangle, Check } from "lucide-react";

export interface FlowStep {
  label: string;
  sublabel?: string;
  statusText?: string;
  statusType?: "dropoff" | "heaviest-dropoff" | "ontrack";
}

export interface FlowBlock {
  badgeText: string;
  title: string;
  completionRate: string;
  isSuccess?: boolean;
  steps: FlowStep[];
  notesHeader: string;
  notes: string[];
}

export interface FlowComparisonData {
  tagline?: string;
  headline: string;
  description: string;
  beforeFlow: FlowBlock;
  afterFlow: FlowBlock;
}

interface FlowComparisonSectionProps {
  data?: FlowComparisonData;
}

export const FlowComparisonSection: React.FC<FlowComparisonSectionProps> = ({
  data,
}) => {
  if (!data) return null;

  return (
    <section className="w-full bg-white py-12 px-4 md:px-8">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header Block */}
        <div className="text-center max-w-xl mx-auto space-y-2">
          {data.tagline && (
            <span className="text-xs font-semibold text-[#8B5CF6]">
              {data.tagline}
            </span>
          )}
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 tracking-tight">
            {data.headline}
          </h2>
          <p className="text-xs md:text-sm text-gray-400 font-medium leading-relaxed">
            {data.description}
          </p>
        </div>

        {/* ================= BEFORE FLOW ================= */}
        <div className="space-y-6 pt-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#FEE2E2] text-[#EF4444]">
                {data.beforeFlow.badgeText}
              </span>
              <h3 className="text-base font-bold text-gray-900">
                {data.beforeFlow.title}
              </h3>
            </div>
            <span className="text-sm font-bold text-[#EF4444]">
              {data.beforeFlow.completionRate}
            </span>
          </div>

          {/* Flow Cards Grid */}
          <div className="overflow-x-auto pb-2">
            <div className="flex items-start gap-3 min-w-[750px]">
              {data.beforeFlow.steps.map((step, idx) => (
                <React.Fragment key={idx}>
                  <div className="flex flex-col items-center flex-1">
                    <div className="w-full bg-[#FAFAFA] border border-gray-200 rounded-xl p-3 text-center h-[68px] flex flex-col justify-center items-center shadow-2xs">
                      <span className="text-xs font-semibold text-gray-800">
                        {step.label}
                      </span>
                      {step.sublabel && (
                        <span className="text-[10px] text-gray-400 mt-0.5 font-medium">
                          {step.sublabel}
                        </span>
                      )}
                    </div>

                    {/* Dropoff Indicator */}
                    {step.statusText ? (
                      <div className="flex items-center gap-1 text-[#EF4444] text-[10px] font-semibold mt-2">
                        <ArrowDown className="w-3 h-3 stroke-[2.5]" />
                        <span>{step.statusText}</span>
                      </div>
                    ) : (
                      <div className="h-6" />
                    )}
                  </div>

                  {idx < data.beforeFlow.steps.length - 1 && (
                    <div className="mt-6 text-gray-300">
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Reasons for Drop-off */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <span className="text-xs font-bold text-gray-600">
              {data.beforeFlow.notesHeader}
            </span>
            <div className="flex flex-wrap gap-3">
              {data.beforeFlow.notes.map((note, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#FEF3C7]/60 text-gray-700 text-[11px] font-medium border border-[#FDE68A]"
                >
                  <AlertTriangle className="w-3.5 h-3.5 text-[#F59E0B] flex-shrink-0" />
                  <span>{note}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ================= AFTER FLOW ================= */}
        <div className="space-y-6 pt-10">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#DCFCE7] text-[#16A34A]">
                {data.afterFlow.badgeText}
              </span>
              <h3 className="text-base font-bold text-gray-900">
                {data.afterFlow.title}
              </h3>
            </div>
            <span className="text-sm font-bold text-[#16A34A]">
              {data.afterFlow.completionRate}
            </span>
          </div>

          {/* Top Horizontal Row (Steps 1 to 6) */}
          <div className="overflow-x-auto">
            <div className="flex items-start gap-2 min-w-[850px]">
              {data.afterFlow.steps.slice(0, 6).map((step, idx) => (
                <React.Fragment key={idx}>
                  <div className="flex flex-col items-center flex-1 min-w-[120px]">
                    <div className="w-full bg-[#F2FBF5] border border-[#BBF7D0] rounded-xl p-3 text-center h-[68px] flex flex-col justify-center items-center shadow-2xs">
                      <span className="text-xs font-semibold text-gray-800">
                        {step.label}
                      </span>
                    </div>
                    <div className="flex items-center gap-1 text-[#16A34A] text-[10px] font-semibold mt-2">
                      <Check className="w-3 h-3 stroke-[2.5]" />
                      <span>{step.statusText}</span>
                    </div>
                  </div>

                  {idx < 5 && (
                    <div className="mt-6 text-gray-300">
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Lower Area: Small Fixes (Left) + Vertical Steps (Right) */}
          <div className="flex flex-col md:flex-row items-start justify-between gap-8 pt-2">
            {/* Left Column: Small Fixes Pills */}
            <div className="space-y-3 max-w-lg">
              <h4 className="text-xs font-bold text-gray-600">
                {data.afterFlow.notesHeader}
              </h4>
              <div className="flex flex-wrap gap-2.5">
                {data.afterFlow.notes.map((note, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 px-3.5 py-2 rounded-full bg-[#F2FBF5] text-gray-700 text-[11px] font-medium border border-[#DCFCE7]"
                  >
                    <Check className="w-3.5 h-3.5 text-[#16A34A] flex-shrink-0 stroke-[2.5]" />
                    <span>{note}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Vertical Branching Steps */}
            <div className="flex flex-col items-end w-full md:w-auto">
              {/* Connector Arrow pointing down from 6th step */}
              <div className="w-[130px] flex justify-center py-2 pr-2 text-gray-300">
                <ArrowDown className="w-4 h-4" />
              </div>

              {/* Vertical steps stack */}
              <div className="space-y-3">
                {data.afterFlow.steps.slice(6).map((step, idx) => (
                  <React.Fragment key={idx}>
                    <div className="flex items-center gap-3">
                      {/* Left Status Label */}
                      <div className="flex items-center gap-1 text-[#16A34A] text-[10px] font-semibold">
                        <Check className="w-3 h-3 stroke-[2.5]" />
                        <span>{step.statusText}</span>
                      </div>

                      {/* Card */}
                      <div className="w-[130px] bg-[#F2FBF5] border border-[#BBF7D0] rounded-xl p-3 text-center h-[60px] flex flex-col justify-center items-center shadow-2xs">
                        <span className="text-xs font-semibold text-gray-800">
                          {step.label}
                        </span>
                      </div>
                    </div>

                    {/* Down Arrow Connector between vertical cards */}
                    {idx < data.afterFlow.steps.slice(6).length - 1 && (
                      <div className="w-full flex justify-end pr-14 py-0.5 text-gray-300">
                        <ArrowDown className="w-4 h-4" />
                      </div>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FlowComparisonSection;
