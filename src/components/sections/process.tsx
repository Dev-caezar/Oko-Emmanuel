import React, { useState } from "react";
import { motion } from "framer-motion";

interface ProcessStep {
  id: number;
  label: string;
}

const Process: React.FC = () => {
  // Sets "Design" (index 2) as the default active step matching your image
  const [activeStep, setActiveStep] = useState<number>(2);

  const steps: ProcessStep[] = [
    { id: 0, label: "Discovery" },
    { id: 1, label: "Define" },
    { id: 2, label: "Design" },
    { id: 3, label: "Prototype & Test" },
    { id: 4, label: "Ship & Measure" },
  ];

  return (
    <section className="w-full bg-[#f9f9f9] py-24 px-6 md:px-12 flex flex-col items-center justify-center overflow-hidden">
      <div className="max-w-6xl w-full text-center">
        <span className="text-[11px] font-semibold uppercase tracking-widest text-[#6366F1]">
          Process
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-[42px] font-medium tracking-tight text-[#111111] mt-3 mb-16 md:mb-20 leading-[1.2] max-w-2xl mx-auto">
          A methodical process for <br /> maximum result
        </h2>

        <div className="relative flex items-center justify-center w-full overflow-x-auto py-12 scrollbar-none">
          <div className="flex items-center justify-center min-w-max px-12">
            {steps.map((step, idx) => {
              const isActive = activeStep === step.id;

              return (
                <div
                  key={step.id}
                  onClick={() => setActiveStep(step.id)}
                  className={`relative flex items-center justify-center cursor-pointer select-none transition-all duration-300 ${
                    idx !== 0 ? "-ml-8 sm:-ml-12 md:-ml-14 lg:-ml-16" : ""
                  }`}
                  style={{
                    zIndex: isActive ? 10 : 5 - Math.abs(activeStep - idx),
                  }}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeGlow"
                      className="absolute -inset-6 sm:-inset-8 rounded-full bg-white shadow-[0_20px_50px_rgba(0,0,0,0.06)] border border-gray-100/30"
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 30,
                      }}
                    />
                  )}

                  <div
                    className={`relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-52 lg:h-52 rounded-full flex items-center justify-center p-6 text-center border transition-all duration-300 ${
                      isActive
                        ? "border-slate-800 bg-white"
                        : "border-gray-300 bg-[#f9f9f9]/80 backdrop-blur-[2px] hover:border-gray-400"
                    }`}
                  >
                    <span
                      className={`text-xs sm:text-sm md:text-base tracking-tight leading-snug wrap-break-word max-w-30 transition-colors duration-300 ${
                        isActive
                          ? "font-bold text-[#111111]"
                          : "font-medium text-gray-700"
                      }`}
                    >
                      {step.label.includes("&") ? (
                        <>
                          {step.label.split("&")[0]}{" "}
                          <br className="hidden sm:inline" /> &{" "}
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
