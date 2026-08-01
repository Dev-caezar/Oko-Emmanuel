import React, { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import type { Variants } from "framer-motion";
import profileImg from "../../assets/public/oko-emmanuel.png"; // Replace with your profile photo path

interface CounterProps {
  value: number;
  duration?: number;
}

// Lightweight counter helper component
const Counter: React.FC<CounterProps> = ({ value, duration = 1.2 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);

  const isInView = useInView(ref, { once: true, amount: 0.2 });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = value;
    if (start === end) return;

    const totalMiliseconds = duration * 1000;
    const frameRate = 1000 / 60; // ~60fps
    const totalFrames = Math.round(totalMiliseconds / frameRate);
    let currentFrame = 0;

    const counter = setInterval(() => {
      currentFrame++;
      const progress = currentFrame / totalFrames;
      const easeOutQuad = progress * (2 - progress);

      const currentCount = Math.round(easeOutQuad * end);
      setCount(currentCount);

      if (currentFrame >= totalFrames) {
        setCount(end);
        clearInterval(counter);
      }
    }, frameRate);

    return () => clearInterval(counter);
  }, [value, duration, isInView]);

  return <span ref={ref}>{count}</span>;
};

const About: React.FC = () => {
  const fadeUpVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  return (
    <section className="w-full bg-white py-16 sm:py-20 px-4 sm:px-6 md:px-12 flex items-center justify-center overflow-hidden">
      <motion.div
        className="max-w-6xl w-full"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <span className="text-[11px] font-semibold uppercase tracking-widest text-[#6366F1]">
            About me
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-[42px] font-medium tracking-tight text-[#111111] mt-3 leading-[1.2] max-w-2xl mx-auto">
            Driven by innovation. Powered <br className="hidden sm:inline" /> by
            people
          </h2>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Bio Paragraph & Stats */}
          <div className="lg:col-span-7 flex flex-col justify-between h-full items-center lg:items-start text-center lg:text-left">
            {/* Bio Text */}
            <motion.p
              variants={fadeUpVariants}
              className="text-base md:text-lg text-gray-500 font-normal leading-relaxed max-w-xl mb-8 sm:mb-12 mx-auto lg:mx-0"
            >
              I design the screens people almost quit on. Focused on the moments
              where trust is fragile — onboarding, KYC, checkout — and one
              confusing screen costs a company real users. I run Lumen
              Technologies, a studio built around the same idea.
            </motion.p>

            {/* Stats Counter Row */}
            <motion.div
              variants={fadeUpVariants}
              className="grid grid-cols-3 gap-2 sm:gap-4 border-t border-gray-100 pt-8 w-full max-w-xl mx-auto lg:mx-0"
            >
              {/* Stat 1 */}
              <div className="text-center lg:text-left">
                <span className="block text-2xl sm:text-3xl md:text-4xl font-bold text-[#111111] leading-none tracking-tight">
                  <Counter value={20} />
                  <span className="text-gray-300 font-normal text-lg sm:text-xl md:text-2xl ml-0.5">
                    +
                  </span>
                </span>
                <span className="block text-xs font-medium text-gray-400 mt-2 sm:mt-3 leading-tight sm:leading-normal">
                  Projects completed
                </span>
              </div>

              {/* Stat 2 */}
              <div className="text-center lg:text-left">
                <span className="block text-2xl sm:text-3xl md:text-4xl font-bold text-[#111111] leading-none tracking-tight">
                  <Counter value={8} />
                </span>
                <span className="block text-xs font-medium text-gray-400 mt-2 sm:mt-3 leading-tight sm:leading-normal">
                  Clients Worldwide
                </span>
              </div>

              {/* Stat 3 */}
              <div className="text-center lg:text-left">
                <span className="block text-2xl sm:text-3xl md:text-4xl font-bold text-[#111111] leading-none tracking-tight">
                  <Counter value={4} />
                  <span className="text-gray-300 font-normal text-lg sm:text-xl md:text-2xl ml-0.5">
                    +
                  </span>
                  <span className="text-[10px] sm:text-xs md:text-sm font-medium text-gray-400 ml-0.5 sm:ml-1">
                    years
                  </span>
                </span>
                <span className="block text-xs font-medium text-gray-400 mt-2 sm:mt-3 leading-tight sm:leading-normal">
                  Experience
                </span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Tilted Profile Portrait Card */}
          <motion.div
            variants={fadeUpVariants}
            className="lg:col-span-5 flex justify-center lg:justify-end mt-4 lg:mt-0"
          >
            <motion.div
              className="relative w-full max-w-xs sm:max-w-sm h-80 sm:h-90 md:h-105 rounded-3xl overflow-hidden bg-gray-100 border border-gray-100 shadow-sm"
              style={{ rotate: -3 }}
              whileHover={{
                rotate: 0,
                scale: 1.02,
                y: -6,
                transition: { type: "spring", stiffness: 350, damping: 20 },
              }}
            >
              <img
                src={profileImg}
                alt="Oko E. profile portrait"
                className="w-full h-full object-cover pointer-events-none select-none"
              />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
