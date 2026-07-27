import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const StartProjectMarquee: React.FC = () => {
  const navigate = useNavigate();
  const items = Array(8).fill("START A PROJECT");

  const handleNavigation = () => {
    navigate("/contact");
  };

  return (
    <section className="w-full bg-white py-10 md:py-10 overflow-hidden select-none cursor-pointer group">
      <div className="relative w-full flex items-center">
        <motion.div
          className="flex whitespace-nowrap gap-12 md:gap-20 items-center"
          animate={{ x: [0, "-33.33%"] }}
          transition={{
            ease: "linear",
            duration: 20,
            repeat: Infinity,
          }}
        >
          {items.map((text, index) => (
            <div
              onClick={handleNavigation}
              key={index}
              className="flex items-center gap-12 md:gap-20"
            >
              <h2 className="text-4xl md:text-7xl lg:text-5xl font-semibold tracking-tight text-black">
                {text}
              </h2>

              <div className="w-12 h-12 md:w-20 md:h-20 lg:w-18 lg:h-18 rounded-full bg-black text-white flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                <ArrowUpRight className="w-6 h-6 md:w-10 md:h-10 lg:w-12 lg:h-12" />
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default StartProjectMarquee;
