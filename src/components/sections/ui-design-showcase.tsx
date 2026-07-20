import React from "react";

interface UIDesignShowcaseProps {
  data: {
    headline: string;
    images: string[];
  };
}

const UIDesignShowcase: React.FC<UIDesignShowcaseProps> = ({ data }) => {
  // Triple the array to ensure there is always enough content to fill screen width for seamless looping
  const trackImages = [...data.images, ...data.images, ...data.images];

  return (
    <section className="max-w-7xl w-full mx-auto px-6 md:px-12 border-t border-gray-100 pt-12 pb-16">
      {/* Dynamic Keyframe Injection */}
      <style>{`
        @keyframes inlineMarquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
        .animate-inline-marquee {
          display: flex;
          width: max-content;
          animation: inlineMarquee 30s linear infinite;
        }
        .animate-inline-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>

      <span className="text-xs font-bold uppercase tracking-widest text-purple-600 mb-3 block">
        04 / Visual Interface
      </span>
      <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-8">
        {data.headline}
      </h2>

      {/* Overflow Wrapper */}
      <div className="w-full py-12 px-6 overflow-hidden relative">
        {/* Infinite Moving Row Track */}
        <div className="animate-inline-marquee gap-6">
          {trackImages.map((img, index) => (
            <div
              key={index}
              className="shrink-0 h-87.5 md:h-112.5 w-auto flex items-center justify-center"
            >
              <img
                src={img}
                alt={`Final UI Presentation Mockup ${index + 1}`}
                className="h-full w-auto object-contain rounded-lg select-none pointer-events-none"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UIDesignShowcase;
