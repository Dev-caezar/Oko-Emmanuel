import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

const Hero: React.FC = () => {
  // 2. Explicitly type your variants to keep TypeScript happy
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] as const, // 3. Added "as const" to lock down the array
      },
    },
  };

  return (
    <section className="w-full bg-[#f9f9f9] py-24 md:py-32 flex flex-col items-center justify-center px-6 text-center overflow-hidden">
      <motion.div
        className="max-w-5xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          variants={itemVariants}
          className="text-4xl sm:text-5xl md:text-7xl font-medium tracking-tight text-black leading-[1.15] mb-8"
        >
          Designing products people Love <br className="hidden sm:inline" />
          and businesses grow with.
        </motion.h1>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link to="/contact" className="w-full sm:w-auto">
            <motion.button
              whileHover={{
                scale: 1.02,
                y: -2,
                transition: { type: "spring", stiffness: 400, damping: 10 },
              }}
              whileTap={{ scale: 0.98, y: 0 }}
              className="group w-full sm:w-auto flex items-center justify-center gap-2 px-8.5 py-4 bg-black text-white text-sm font-bold rounded-sm cursor-pointer transition-colors duration-200 shadow-sm hover:shadow-md hover:shadow-black/5"
            >
              Get in touch
              <ArrowRight
                size={14}
                strokeWidth={2.5}
                className="transform transition-transform duration-300 ease-out group-hover:translate-x-1"
              />
            </motion.button>
          </Link>

          <Link to="/projects" className="w-full sm:w-auto">
            <motion.button
              whileHover={{
                scale: 1.02,
                y: -2,
                transition: { type: "spring", stiffness: 400, damping: 10 },
              }}
              whileTap={{ scale: 0.98, y: 0 }}
              className="w-full sm:w-auto px-8.5 py-4 border border-gray-300 bg-transparent text-slate-900 text-sm font-bold rounded-sm cursor-pointer hover:bg-black/5 hover:border-gray-400 transition-colors duration-200"
            >
              Selected works
            </motion.button>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
