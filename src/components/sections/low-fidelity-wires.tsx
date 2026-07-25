import React from "react";
import { motion } from "framer-motion";

interface LowFidelityWiresProps {
  data: {
    images: string[];
  };
}

const LowFidelityWires: React.FC<LowFidelityWiresProps> = ({ data }) => {
  const duplicatedImages = [...data.images, ...data.images];

  return (
    <section className="max-w-7xl w-full mx-auto px-6 md:px-12 border-t border-gray-100 pt-10 pb-12 overflow-hidden">
      <div className="mb-12">
        <span className="text-xs font-bold text-center uppercase tracking-widest text-purple-600 mb-3 block">
          Design Exploration
        </span>
        <h2 className="text-3xl font-bold text-center tracking-tight text-gray-900 mb-2">
          Low fidelity designs
        </h2>
      </div>

      <div className="relative w-full overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-16 bg-linear-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 bg-linear-to-l from-white to-transparent z-10 pointer-events-none" />

        <motion.div
          className="flex flex-row items-center gap-2 w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            ease: "linear",
            duration: Math.max(15, data.images.length * 4),
            repeat: Infinity,
          }}
        >
          {duplicatedImages.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Low Fidelity Wireframe Exploration ${(index % data.images.length) + 1}`}
              className="h-52 sm:h-64 md:h-76 w-auto object-contain shrink-0 rounded-xl"
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default LowFidelityWires;
