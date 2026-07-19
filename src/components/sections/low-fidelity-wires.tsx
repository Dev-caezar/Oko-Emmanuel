import React from "react";

interface LowFidelityWiresProps {
  data: {
    images: string[];
  };
}

const LowFidelityWires: React.FC<LowFidelityWiresProps> = ({ data }) => {
  return (
    <section className="max-w-7xl w-full mx-auto px-6 md:px-12 border-t border-gray-100 pt-16 pb-20">
      {/* Section Typography Header */}
      <div className="mb-12">
        <span className="text-xs font-bold text-center uppercase tracking-widest text-purple-600 mb-3 block">
          Design Exploration
        </span>
        <h2 className="text-3xl font-bold text-center tracking-tight text-gray-900 mb-2">
          Low fidelity designs
        </h2>
      </div>

      {/* Wireframe Images Container */}
      <div className="w-full flex flex-row items-center justify-center gap-1.5 overflow-x-auto">
        {data.images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Low Fidelity Wireframe Exploration ${index + 1}`}
            className="h-80 sm:h-100 md:h-112.5 w-auto object-contain shrink-0"
          />
        ))}
      </div>
    </section>
  );
};

export default LowFidelityWires;
