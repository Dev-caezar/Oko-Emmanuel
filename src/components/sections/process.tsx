import React, { useState } from "react";
import { motion } from "framer-motion";

interface ProcessStep {
  id: number;
  label: string;
}

const Process: React.FC = () => {
  // Sets "Design" (index 2) as the default active step
  const [activeStep, setActiveStep] = useState<number>(2);

  const steps: ProcessStep[] = [
    { id: 0, label: "Discovery" },
    { id: 1, label: "Define" },
    { id: 2, label: "Design" },
    { id: 3, label: "Prototype & Test" },
    { id: 4, label: "Ship & Measure" },
  ];

  return (
    <section className="w-full bg-[#f9f9f9] py-16 sm:py-24 px-4 sm:px-6 md:px-12 flex flex-col items-center justify-center overflow-hidden">
      <div className="max-w-6xl w-full text-center">
        {/* Header */}
        <span className="text-[11px] font-semibold uppercase tracking-widest text-[#6366F1]">
          Process
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-[42px] font-medium tracking-tight text-[#111111] mt-3 mb-10 sm:mb-16 md:mb-20 leading-[1.2] max-w-2xl mx-auto">
          A methodical process for <br className="hidden sm:inline" /> maximum
          result
        </h2>

        {/* --- MOBILE LAYOUT (Vertical Stacked Steps) --- */}
        <div className="flex md:hidden flex-col items-center gap-3 w-full max-w-sm mx-auto py-4">
          {steps.map((step) => {
            const isActive = activeStep === step.id;

            return (
              <div
                key={step.id}
                onClick={() => setActiveStep(step.id)}
                className={`relative w-full py-4 px-6 rounded-2xl flex items-center justify-between cursor-pointer select-none transition-all duration-300 border ${
                  isActive
                    ? "bg-white border-slate-800 shadow-[0_10px_30px_rgba(0,0,0,0.05)] scale-[1.02]"
                    : "bg-white/60 border-gray-200 text-gray-600 hover:border-gray-300"
                }`}
              >
                <div className="flex items-center gap-4">
                  <span
                    className={`text-xs font-semibold px-2.5 py-1 rounded-full ${
                      isActive
                        ? "bg-[#6366F1] text-white"
                        : "bg-gray-100 text-gray-500"
                    }`}
                  >
                    0{step.id + 1}
                  </span>
                  <span
                    className={`text-base tracking-tight ${
                      isActive ? "font-bold text-[#111111]" : "font-medium"
                    }`}
                  >
                    {step.label}
                  </span>
                </div>

                <div
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    isActive ? "bg-[#6366F1] scale-125" : "bg-gray-300"
                  }`}
                />
              </div>
            );
          })}
        </div>

        {/* --- DESKTOP LAYOUT (Horizontal Overlapping Circles) --- */}
        <div className="hidden md:flex relative items-center justify-center w-full py-12">
          <div className="flex items-center justify-center">
            {steps.map((step, idx) => {
              const isActive = activeStep === step.id;

              return (
                <div
                  key={step.id}
                  onClick={() => setActiveStep(step.id)}
                  className={`relative flex items-center justify-center cursor-pointer select-none transition-all duration-300 ${
                    idx !== 0 ? "-ml-6 lg:-ml-8" : ""
                  }`}
                  style={{
                    zIndex: isActive ? 10 : 5 - Math.abs(activeStep - idx),
                  }}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeGlow"
                      className="absolute -inset-8 rounded-full bg-white shadow-[0_20px_50px_rgba(0,0,0,0.06)] border border-gray-100/30"
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 30,
                      }}
                    />
                  )}

                  <div
                    className={`relative w-44 h-44 lg:w-52 lg:h-52 rounded-full flex items-center justify-center p-6 text-center border transition-all duration-300 ${
                      isActive
                        ? "border-slate-800 bg-white"
                        : "border-gray-300 bg-[#f9f9f9]/80 backdrop-blur-[2px] hover:border-gray-400"
                    }`}
                  >
                    <span
                      className={`text-sm lg:text-base tracking-tight leading-snug wrap-break-word max-w-[85%] transition-colors duration-300 ${
                        isActive
                          ? "font-bold text-[#111111]"
                          : "font-medium text-gray-700"
                      }`}
                    >
                      {step.label.includes("&") ? (
                        <>
                          {step.label.split("&")[0]} <br /> &{" "}
                          {step.label.split("&")[1]}
                        </>
                      ) : (
                        step.label
                      )}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
