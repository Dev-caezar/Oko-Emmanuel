import React from "react";
import { motion, type Variants } from "framer-motion";

interface DemographicsData {
  tagline: string;
  title: string;
  businessCard: {
    bgImage: string;
    tag: string;
    heading: string;
    features: Array<{
      title: string;
      subTitle: string;
      desc: string;
    }>;
  };
  gridCards: Array<{
    bgImage: string;
    tag: string;
    heading: string;
    desc: string;
  }>;
}

interface ProjectDemographicsProps {
  data: DemographicsData;
}

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

const ProjectDemographics: React.FC<ProjectDemographicsProps> = ({ data }) => {
  return (
    <section className="w-full bg-white text-neutral-900 overflow-hidden">
      <div className="text-center pt-10 pb-10 px-6 max-w-5xl mx-auto">
        <span className="text-xs font-semibold uppercase tracking-widest text-purple-600 mb-3 block">
          {data.tagline}
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-neutral-900 leading-tight">
          {data.title}
        </h2>
      </div>

      <motion.div
        className="w-full min-h-135 md:h-145 overflow-hidden relative mb-16 group flex items-end"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <img
          src={data.businessCard.bgImage}
          alt="Business demographics background"
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-black/10" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 py-10 text-white">
          <div className="max-w-5xl space-y-6">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-neutral-300 block mb-1">
                {data.businessCard.tag}
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
                {data.businessCard.heading}
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full pt-2">
              {data.businessCard.features.map((feature, idx) => (
                <div
                  key={idx}
                  className="bg-black/40 backdrop-blur-lg border border-white/15 rounded-2xl p-5 flex flex-col justify-between transition-colors duration-300 hover:bg-black/50 hover:border-white/25"
                >
                  <div className="space-y-1">
                    <h4 className="text-sm font-bold tracking-tight text-white">
                      {feature.title}
                    </h4>
                    <p className="text-xs font-medium text-neutral-300">
                      {feature.subTitle}
                    </p>
                  </div>
                  <p className="text-xs text-neutral-300 leading-relaxed mt-4 font-normal">
                    {feature.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      <div className="max-w-7xl mx-auto w-full px-6 md:px-12 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
          {data.gridCards.map((card, idx) => (
            <motion.div
              key={idx}
              className="w-full h-95 sm:h-105 rounded-3xl overflow-hidden relative shadow-md group transition-all duration-300 hover:-translate-y-1"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.15 }}
            >
              <img
                src={card.bgImage}
                alt={card.heading}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/30 to-transparent" />

              <div className="absolute bottom-6 left-6 right-6 bg-black/40 backdrop-blur-lg border border-white/15 rounded-2xl p-6 text-white transition-all duration-300 group-hover:border-white/30 group-hover:bg-black/50">
                <span className="text-[10px] font-bold uppercase tracking-wider text-purple-300 mb-1 block">
                  {card.tag}
                </span>
                <h4 className="text-lg sm:text-xl font-bold tracking-tight mb-2 text-white">
                  {card.heading}
                </h4>
                <p className="text-xs sm:text-sm text-neutral-200 leading-relaxed font-normal">
                  {card.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectDemographics;
