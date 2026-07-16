import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Variants } from "framer-motion";
import { Plus, Minus } from "lucide-react";

// Mock illustration imports - replace these with your actual 3D asset paths
import productDesignImg from "../../assets/public/product-design.png";
import uxAuditImg from "../../assets/public/audit.png";
import uxResearchImg from "../../assets/public/research.png";
import conversionImg from "../../assets/public/target.png";

interface ServiceItem {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  tags: string[];
  image: string;
}

const Services: React.FC = () => {
  // Track which service ID is currently expanded (null means all closed)
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const servicesData: ServiceItem[] = [
    {
      id: "product-design",
      number: "01",
      title: "Product Design",
      tagline: "Design that converts",
      description:
        "Screens that get shipped, not just admired — wireframes through pixel-perfect UI for web and mobile.",
      tags: ["Mobile design", "Web design", "Landing page"],
      image: productDesignImg,
    },
    {
      id: "ux-audit",
      number: "02",
      title: "UX Audit",
      tagline: "Fix your flow",
      description:
        "A structured teardown of your product's weakest flow, with fixes ranked by impact, not opinion.",
      tags: ["Funnel analysis", "Friction mapping", "Actionable report"],
      image: uxAuditImg,
    },
    {
      id: "ux-research",
      number: "03",
      title: "UX Research",
      tagline: "Why users disengage",
      description:
        "Interviews, flow mapping, and funnel analysis to find out where and why people actually disengage.",
      tags: ["User interviews", "Behavioural analysis", "User flow"],
      image: uxResearchImg,
    },
    {
      id: "conversion-design",
      number: "04",
      title: "Conversion focused design",
      tagline: "Design that converts",
      description:
        "Onboarding, KYC, checkout, and cart flows redesigned around one question: did completion go up.",
      tags: ["Onboarding", "Checkout", "Completion rate"],
      image: conversionImg,
    },
  ];

  const toggleAccordion = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  // Dropdown expanding motion configurations
  const dropdownVariants: Variants = {
    collapsed: {
      height: 0,
      opacity: 0,
      transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] as const },
    },
    expanded: {
      height: "auto",
      opacity: 1,
      transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  return (
    <section className="w-full bg-[#f9f9f9] py-24 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16 md:mb-24">
          <span className="text-md font-semibold uppercase tracking-widest text-[#440FE3]">
            Services
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-black mt-3 mb-4 leading-tight max-w-2xl mx-auto">
            A comprehensive look at what i offer and how i deliver
          </h2>
          <p className="text-md text-gray-400 font-medium">
            Find where people quit. Redesign it. Show the number that moved.
          </p>
        </div>

        {/* Accordion List */}
        <div className="border-t border-gray-100">
          {servicesData.map((service) => {
            const isExpanded = expandedId === service.id;

            return (
              <div
                key={service.id}
                className="border-b border-gray-100 transition-colors duration-200"
              >
                {/* Accordion Trigger Row */}
                <div
                  onClick={() => toggleAccordion(service.id)}
                  className="flex items-center justify-between py-8 cursor-pointer select-none group"
                >
                  <div className="flex items-center gap-6 md:gap-12">
                    <span className="text-sm font-semibold text-[#808080]">
                      {service.number}
                    </span>
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 group-hover:text-black transition-colors">
                      {service.title}
                    </h3>
                  </div>

                  <div className="flex items-center gap-8 md:gap-24">
                    {/* Centered Desktop Sub-label */}
                    <span className="hidden md:inline text-sm font-medium text-gray-400">
                      {service.tagline}
                    </span>

                    {/* Toggle Button Graphic */}
                    <button
                      className={`flex items-center justify-center w-8 h-8 rounded-full border border-gray-100 shadow-sm transition-all duration-200 ${
                        isExpanded
                          ? "bg-white text-black"
                          : "bg-white text-gray-400 group-hover:text-black group-hover:border-gray-200"
                      }`}
                    >
                      {isExpanded ? (
                        <Minus size={14} strokeWidth={2.5} />
                      ) : (
                        <Plus size={14} strokeWidth={2.5} />
                      )}
                    </button>
                  </div>
                </div>

                {/* Animated Dropdown Content */}
                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      variants={dropdownVariants}
                      initial="collapsed"
                      animate="expanded"
                      exit="collapsed"
                      className="overflow-hidden"
                    >
                      <div className="pb-10 pt-2 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                        {/* Details Block (Left) */}
                        <div className="md:col-span-7 flex flex-col items-start gap-6 md:pl-16">
                          <p className="text-sm md:text-base text-gray-500 font-medium leading-relaxed max-w-md">
                            {service.description}
                          </p>

                          {/* Subtags pills layout */}
                          <div className="flex flex-wrap gap-2.5">
                            {service.tags.map((tag) => (
                              <span
                                key={tag}
                                className="px-4 py-2 bg-gray-100 text-slate-800 text-xs font-bold rounded-full select-none"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Illustration/Image Block (Right) */}
                        <div className="md:col-span-5 flex justify-center md:justify-end">
                          <motion.img
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 0.1, duration: 0.4 }}
                            src={service.image}
                            alt={`${service.title} illustration`}
                            className="h-44 md:h-52 w-auto object-contain select-none pointer-events-none"
                          />
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
