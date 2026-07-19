import React from "react";
import { motion } from "framer-motion";

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

const ProjectDemographics: React.FC<ProjectDemographicsProps> = ({ data }) => {
  return (
    <section className="w-full bg-white text-[#111111]">
      {/* Centered Title Area */}
      <div className="text-center pt-16 pb-12 px-6 max-w-7xl mx-auto">
        <span className="text-xs font-semibold uppercase tracking-widest text-purple-600 mb-2 block">
          {data.tagline}
        </span>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
          {data.title}
        </h2>
      </div>

      {/* Top Banner: Completely full-width layout (Edge-to-Edge) */}
      <motion.div
        className="w-full h-[480px] overflow-hidden relative mb-12 group"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <img
          src={data.businessCard.bgImage}
          alt="Business demographics"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-101"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

        {/* Floating elements inside align back with the site alignment width */}
        <div className="absolute inset-0 px-6 md:px-12 max-w-7xl mx-auto w-full flex flex-col justify-end pb-12 text-white z-10">
          <div className="max-w-4xl">
            <span className="text-xs font-medium text-gray-300 tracking-wider mb-2 block">
              {data.businessCard.tag}
            </span>
            <h3 className="text-2xl md:text-3xl font-bold tracking-tight mb-8">
              {data.businessCard.heading}
            </h3>

            {/* 3-Column layout over full width banner */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
              {data.businessCard.features.map((feature, idx) => (
                <div
                  key={idx}
                  className="bg-black/20 backdrop-blur-md border border-white/10 rounded-2xl p-5 flex flex-col justify-between"
                >
                  <div>
                    <h4 className="text-sm font-bold tracking-wide">
                      {feature.title}
                    </h4>
                    <p className="text-xs font-semibold text-gray-300 mt-0.5">
                      {feature.subTitle}
                    </p>
                  </div>
                  <p className="text-[11px] text-gray-300 leading-relaxed mt-4 font-medium">
                    {feature.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Bottom Grid Content: Bounded by maximum site grid constraint */}
      <div className="max-w-7xl mx-auto w-full px-6 md:px-12 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
          {data.gridCards.map((card, idx) => (
            <motion.div
              key={idx}
              className="w-full h-[350px] rounded-3xl overflow-hidden relative shadow-sm group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
            >
              <img
                src={card.bgImage}
                alt={card.heading}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-102"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

              {/* Inside Glass Card elements */}
              <div className="absolute bottom-6 left-6 right-6 bg-black/30 backdrop-blur-md border border-white/10 rounded-2xl p-6 text-white">
                <span className="text-[10px] font-bold uppercase tracking-wider text-gray-300 mb-1 block">
                  {card.tag}
                </span>
                <h4 className="text-lg font-bold tracking-tight mb-2">
                  {card.heading}
                </h4>
                <p className="text-xs text-gray-300 leading-relaxed font-medium">
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
