import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const CTA: React.FC = () => {
  const navigate = useNavigate();
  const handleContactClick = () => {
    navigate("/contact");
  };

  return (
    <section className="w-full bg-[#000000] text-white py-24 px-6 md:px-12 flex flex-col items-center justify-center text-center">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        {/* Main CTA Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-[42px] font-bold tracking-tight leading-[1.2] mb-4">
          Let's design something people actually enjoy using.
        </h2>

        {/* Sub-description */}
        <p className="text-sm md:text-base text-gray-500 font-medium mb-10 max-w-xl">
          I'm open to new projects, collaborations, and full-time opportunities.
        </p>

        {/* "Get in touch" Button */}
        <motion.button
          onClick={handleContactClick}
          whileHover="hover"
          className="flex items-center gap-2 bg-white text-black font-semibold text-sm py-3 px-6 rounded-lg transition-colors duration-200"
        >
          <span>Get in touch</span>
          <motion.div
            variants={{
              hover: { x: 4 },
            }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
          >
            <ArrowRight size={16} strokeWidth={2.5} />
          </motion.div>
        </motion.button>

        {/* Social Link Pills */}
        <div className="flex flex-wrap items-center justify-center gap-3 mt-24">
          {/* Dribbble Pill */}
          <motion.a
            href="https://dribbble.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, backgroundColor: "#262626" }}
            className="flex items-center gap-2 bg-[#171717] hover:bg-[#262626] border border-[#2d2d2d] text-sm text-gray-300 font-semibold py-2 px-5 rounded-full transition-colors duration-200"
          >
            <svg
              className="w-4 h-4 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 24C5.385 24 0 18.615 0 12S5.385 0 12 0s12 5.385 12 12-5.385 12-12 12zm10.12-10.42a9.141 9.141 0 0 0-4.66-1.12c-.52 0-1.03.04-1.53.11-.23-.55-.49-1.11-.77-1.66 1.95-.74 3.65-1.07 5.06-1.07.2 0 .39.01.57.03a9.782 9.782 0 0 0-1.18-4.04c-1.34.02-2.87.35-4.51 1.03a31.336 31.336 0 0 0-2.3-3.79c-.06-.08-.11-.16-.17-.24a9.71 9.71 0 0 0-5.75 1.83 23.957 23.957 0 0 1 2.36 4.19c-2.47.79-5.18.99-7.39.99-.17 0-.33 0-.49-.01a9.78 9.78 0 0 0 1.25 4.33 24.116 24.116 0 0 1 6.84-1.13c.48 1.15.9 2.33 1.24 3.5-2.09.64-3.83 1.62-5.18 2.91a9.697 9.697 0 0 0 6.66 2.38c.11 0 .22 0 .32-.01.07-.63.18-1.41.34-2.31 1.98-.32 4.19-.34 6.54-.06.13.01.27.03.4.04a9.721 9.721 0 0 0 3.99-4.86zm-5.14 3.7c-2.06-.23-3.95-.21-5.65.07-.15.82-.25 1.51-.31 2.05a7.87 7.87 0 0 1-2.92-1.39c1.19-1.05 2.68-1.85 4.54-2.41a27.6 27.6 0 0 1 1.08 3.19c.7.45 1.5.7 2.35.7.31 0 .61-.03.91-.21zm-6.61-4.82c-.3-.98-.67-1.98-1.09-2.98a22.13 22.13 0 0 0-6.19 1.03c.09 1.29.56 2.47 1.3 3.45 1.09-1.05 2.51-1.85 4.31-2.2c.49-.1 1.02-.19 1.67-.3zm1.66-1.55a29.414 29.414 0 0 1 2.11 3.51c-1.87-.27-3.6-.28-5.19-.01-.32-1.04-.71-2.09-1.13-3.12 1.34-.14 2.78-.4 4.21-.38zm1.09-7.39c.05.07.1.14.15.21a29.13 29.13 0 0 1 2.16 3.61c-1.51-.55-2.9-.81-4.1-.82-.67 0-1.24.08-1.72.24a21.84 21.84 0 0 0 3.51-3.24zm8.01 4.71c-.13-.01-.27-.01-.41-.01-1.25 0-2.73.28-4.41.9.25.5.49 1.01.7 1.51a8.441 8.441 0 0 1 4.12 1a7.818 7.818 0 0 1 .05-3.41z" />
            </svg>
            <span>Dribbble</span>
          </motion.a>

          {/* Linkedin Pill */}
          <motion.a
            href="http://linkedin.com/in/oko-christian-aa7262352"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, backgroundColor: "#262626" }}
            className="flex items-center gap-2 bg-[#171717] hover:bg-[#262626] border border-[#2d2d2d] text-sm text-gray-300 font-semibold py-2 px-5 rounded-full transition-colors duration-200"
          >
            <svg
              className="w-4 h-4 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
            <span>Linkedin</span>
          </motion.a>

          {/* X Pill */}
          <motion.a
            href="https://x.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, backgroundColor: "#262626" }}
            className="flex items-center gap-2 bg-[#171717] hover:bg-[#262626] border border-[#2d2d2d] text-sm text-gray-300 font-semibold py-2 px-5 rounded-full transition-colors duration-200"
          >
            <svg
              className="w-3.5 h-3.5 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
            <span>X</span>
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default CTA;
