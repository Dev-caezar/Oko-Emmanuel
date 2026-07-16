import React, { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import type { Variants } from "framer-motion";
import profileImg from "../../assets/public/profile.png"; // Replace with your profile photo path

interface CounterProps {
  value: number;
  duration?: number;
}

// Lightweight counter helper component
const Counter: React.FC<CounterProps> = ({ value, duration = 1.2 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

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
      // Smooth ease-out progress calculation
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
  // Smooth slide and fade variants for scroll animation
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
    <section className="w-full bg-white py-24 px-6 md:px-12 flex items-center justify-center overflow-hidden">
      <motion.div
        className="max-w-6xl w-full"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <span className="text-[11px] font-semibold uppercase tracking-widest text-[#6366F1]">
            About me
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-[42px] font-medium tracking-tight text-[#111111] mt-3 leading-[1.2] max-w-2xl mx-auto">
            Driven by innovation. Powered <br className="hidden sm:inline" /> by
            people
          </h2>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* Left Column: Bio Paragraph & Numbers */}
          <div className="lg:col-span-7 flex flex-col justify-around h-full">
            {/* Bio Text */}
            <motion.p
              variants={fadeUpVariants}
              className="text-sm md:text-[16px] text-gray-400 font-medium leading-[1.7] max-w-125 mb-16"
            >
              I design the screens people almost quit on. Based in Port
              Harcourt, I work across fintech and e-commerce, focused on the
              moments where trust is fragile — onboarding, KYC, checkout — and
              one confusing screen costs a company real users. I run Lumen
              Technologies, a studio built around the same idea.
            </motion.p>

            {/* Stats Counter Row */}
            <motion.div
              variants={fadeUpVariants}
              className="grid grid-cols-3 gap-4"
            >
              {/* Stat 1 */}
              <div>
                <span className="block text-4xl md:text-5xl font-bold text-[#111111] leading-none tracking-tight">
                  <Counter value={20} />
                  <span className="text-gray-300 font-normal text-2xl md:text-3xl ml-0.5">
                    +
                  </span>
                </span>
                <span className="block text-[11px] font-medium text-gray-400 mt-4 leading-normal">
                  Project completed
                </span>
              </div>

              {/* Stat 2 */}
              <div>
                <span className="block text-4xl md:text-5xl font-bold text-[#111111] leading-none tracking-tight">
                  <Counter value={8} />
                </span>
                <span className="block text-[11px] font-medium text-gray-400 mt-4 leading-normal">
                  Clients Worldwide
                </span>
              </div>

              {/* Stat 3 */}
              <div>
                <span className="block text-4xl md:text-5xl font-bold text-[#111111] leading-none tracking-tight">
                  <Counter value={4} />
                  <span className="text-gray-300 font-normal text-2xl md:text-3xl ml-0.5">
                    +
                  </span>
                  <span className="text-xs md:text-sm font-medium text-gray-400 ml-1">
                    years
                  </span>
                </span>
                <span className="block text-[11px] font-medium text-gray-400 mt-4 leading-normal">
                  Experience
                </span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Tilted Profile Frame */}
          <motion.div
            variants={fadeUpVariants}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <motion.div
              className="relative w-full max-w-full md:w-145.5 md:h-100.75 rounded-3xl bg-white border border-gray-100/50 flex items-center justify-center"
              style={{ rotate: -5.49 }}
              whileHover={{
                rotate: 0,
                scale: 1.03,
                y: -6,
                transition: { type: "spring", stiffness: 350, damping: 20 },
              }}
            >
              <img
                src={profileImg}
                alt="Oko E. profile portrait"
                className="w-full h-full object-cover rounded-2xl bg-gray-50 pointer-events-none select-none"
              />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
