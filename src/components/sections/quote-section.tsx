import React from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

const QuoteSection: React.FC = () => {
  const quoteVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  return (
    <section className="w-full bg-[#f9f9f9] py-20 md:py-28 px-6 flex items-center justify-center text-center">
      <div className="max-w-6xl mx-auto">
        <motion.p
          variants={quoteVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-lg sm:text-2xl md:text-4xl font-medium text-gray-400 leading-relaxed md:leading-loose tracking-wide"
        >
          “I don’t just design screens, i craft meaningful solutions with{" "}
          <strong className="text-black font-bold">
            intentionality and empathy.
          </strong>{" "}
          Because its emotions that build trusts, spark interactions and drive
          decisions.”
        </motion.p>
      </div>
    </section>
  );
};

export default QuoteSection;
