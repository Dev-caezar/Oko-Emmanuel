import React from "react";
import { motion } from "framer-motion";

interface ValueItem {
  icon: React.ReactNode;
  label: string;
}

interface ValuesMarqueeProps {
  values: ValueItem[];
}

const ValuesMarquee: React.FC<ValuesMarqueeProps> = ({ values }) => {
  const duplicatedValues = [...values, ...values];

  return (
    <section className="w-full bg-[#f9f9f9] border-y border-gray-100 py-6 overflow-hidden select-none">
      <div className="relative w-full flex items-center">
        <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[#f9f9f9] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#f9f9f9] to-transparent z-10 pointer-events-none" />

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
