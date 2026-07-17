import React from "react";
import { motion } from "framer-motion";
import {
  Maximize,
  Handshake,
  Eye,
  Lightbulb,
  BarChart3,
  Zap,
  Layers,
  Sun,
  PenTool,
} from "lucide-react";

interface ValueItem {
  icon: React.ReactNode;
  label: string;
}

const ValuesMarquee: React.FC = () => {
  const values: ValueItem[] = [
    { icon: <Maximize className="w-4 h-4" />, label: "Clear process" },
    { icon: <Handshake className="w-4 h-4" />, label: "Smooth Handoff" },
    { icon: <Eye className="w-4 h-4" />, label: "Clarity" },
    { icon: <Lightbulb className="w-4 h-4" />, label: "Intentionality" },
    { icon: <BarChart3 className="w-4 h-4" />, label: "Top quality" },
    { icon: <Zap className="w-4 h-4" />, label: "Fast execution" },
    { icon: <Layers className="w-4 h-4" />, label: "System thinking" },
    { icon: <Sun className="w-4 h-4" />, label: "On brand every-time" },
    { icon: <PenTool className="w-4 h-4" />, label: "Solution oriented" },
  ];

  const duplicatedValues = [...values, ...values];

  return (
    <section className="w-full bg-[#f9f9f9] border-y border-gray-100 py-6 overflow-hidden select-none">
      <div className="relative w-full flex items-center">
        <div className="absolute left-0 top-0 bottom-0 w-16 bg-linear-to-r from-[#f9f9f9] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 bg-linear-to-l from-[#f9f9f9] to-transparent z-10 pointer-events-none" />

        <motion.div
          className="flex whitespace-nowrap gap-16 items-center px-8"
          animate={{ x: [0, "-50%"] }}
          transition={{
            ease: "linear",
            duration: 35, 
            repeat: Infinity,
          }}
        >
          {duplicatedValues.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-3 text-gray-500 hover:text-black transition-colors duration-200"
            >
              <span className="text-gray-700">{item.icon}</span>
              <span className="text-[13px] md:text-sm font-medium tracking-wide">
                {item.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ValuesMarquee;
