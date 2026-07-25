import React from "react";
import { motion } from "framer-motion";

interface UIDesignShowcaseProps {
  data: {
    headline: string;
    images: string[];
  };
}

const UIDesignShowcase: React.FC<UIDesignShowcaseProps> = ({ data }) => {
  // Duplicating array for infinite marquee track
  const trackImages = [...data.images, ...data.images];

  return (
    <section className="max-w-7xl w-full mx-auto px-6 md:px-12 border-t border-gray-100 pt-12 pb-16 overflow-hidden text-center">
      <span className="text-xs font-bold uppercase tracking-widest text-purple-600 mb-3 block">
        Outcome
      </span>
      <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-gray-900 mb-8">
        {data.headline}
      </h2>

      {/* Overflow Wrapper */}
      <div className="relative w-full overflow-hidden py-4">
        {/* Edge Gradient Overlay */}
        <div className="absolute left-0 top-0 bottom-0 w-16 bg-linear-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 bg-linear-to-l from-white to-transparent z-10 pointer-events-none" />

        {/* Infinite Moving Row Track */}
        <motion.div
          className="flex flex-row items-center gap-6 w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            ease: "linear",
            duration: Math.max(15, data.images.length * 4),
            repeat: Infinity,
          }}
        >
          {trackImages.map((img, index) => (
            <div
              key={index}
              className="shrink-0 h-52 sm:h-64 md:h-72 w-auto flex items-center justify-center"
            >
              <img
                src={img}
                alt={`Final UI Presentation Mockup ${(index % data.images.length) + 1}`}
                className="h-full w-auto object-contain rounded-xl select-none pointer-events-none"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default UIDesignShowcase;
