import React from "react";
import { motion } from "framer-motion";

const SignatureFooter: React.FC = () => {
  return (
    <footer className="w-full bg-[#f9f9f9] pt-16 pb-0 px-6 md:px-12 flex flex-col justify-between overflow-hidden">
      <div className="w-full max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-gray-100 pb-12">
        <nav className="flex items-center gap-6 md:gap-8">
          {["About me", "Projects", "Services", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(" ", "-")}`}
              className="text-xs md:text-[13px] font-medium text-gray-800 hover:text-black transition-colors duration-200"
            >
              {item}
            </a>
          ))}
        </nav>

        <span className="text-xs md:text-[13px] text-gray-400 font-medium">
          © 2026 Emmanuel Oko
        </span>
      </div>

      <div className="w-full mt-8 md:mt-12 select-none pointer-events-none">
        <motion.h1
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="font-luminari text-[13vw] leading-none tracking-tight whitespace-nowrap -mb-2 md:-mb-6 flex items-baseline"
        >
          <span className="text-gray-400/85 mr-[3vw]">Oko</span>
          <span className="text-black">Emmanuel</span>
        </motion.h1>
      </div>
    </footer>
  );
};

export default SignatureFooter;
