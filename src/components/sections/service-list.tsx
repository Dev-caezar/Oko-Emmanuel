import React from "react";
import { motion } from "framer-motion";
import productDesignImg from "../../assets/public/product-design.png";
import uxAuditImg from "../../assets/public/audit.png";
import uxResearchImg from "../../assets/public/research.png";
import conversionImg from "../../assets/public/target.png";

interface ServiceItem {
  id: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
}

const services: ServiceItem[] = [
  {
    id: "01",
    title: "Product Design",
    description:
      "Screens that get shipped, not just admired — wireframes through pixel-perfect UI for web and mobile.",
    tags: ["Mobile design", "Web design", "Landing page"],
    image: productDesignImg,
  },
  {
    id: "02",
    title: "UX Audit",
    description:
      "A structured teardown of your product's weakest flows, with fixes ranked by impact, not opinion.",
    tags: ["Funnel analysis", "Friction mapping", "Actionable report"],
    image: uxAuditImg,
  },
  {
    id: "03",
    title: "Ux Research",
    description:
      "Interview, flow mapping and funnel analysis to find out where and why people actually disengage.",
    tags: ["User interview", "Behavioural analysis", "User flow"],
    image: uxResearchImg,
  },
  {
    id: "04",
    title: "Conversion focused design",
    description:
      "Onboarding, KYC, Checkout and cart flows redesigned around one question: did completion go up?",
    tags: ["Onboarding", "Checkout", "Completion rate"],
    image: conversionImg,
  },
];

const ServicesList: React.FC = () => {
  return (
    <section className="w-full bg-white text-[#111111]">
      <div className="max-w-6xl mx-auto border-t border-gray-100">
        {services.map((service, index) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{
              duration: 0.6,
              ease: [0.16, 1, 0.3, 1],
              delay: index * 0.05,
            }}
            className="grid grid-cols-1 md:grid-cols-12 border-b border-gray-100 py-12 px-6 md:px-12 items-center gap-8 md:gap-4 group hover:bg-[#fcfcfc] transition-colors duration-300 cursor-pointer"
          >
            {/* Title Column */}
            <div className="md:col-span-4 flex flex-col justify-between h-full gap-4 md:gap-12">
              <span className="text-xs md:text-sm font-medium text-gray-400">
                {service.id}
              </span>
              <h3 className="text-2xl md:text-3xl font-medium tracking-tight text-[#111111]">
                {service.title}
              </h3>
            </div>

            {/* Description & Tags Column */}
            <div className="md:col-span-5 flex flex-col justify-between h-full gap-6 md:py-1">
              <p className="text-xs md:text-[13px] leading-relaxed text-gray-400 font-medium max-w-md">
                {service.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] font-medium text-gray-600 bg-gray-50 border border-gray-100 px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Asset Column */}
            <div className="md:col-span-3 flex justify-center md:justify-end">
              <motion.img
                src={service.image}
                alt={service.title}
                className="w-32 h-32 md:w-40 md:h-40 object-contain select-none"
                draggable="false"
                whileHover={{
                  y: -6,
                  scale: 1.04,
                  transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
                }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ServicesList;
