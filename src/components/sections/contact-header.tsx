import React from "react";
import { motion } from "framer-motion";
import contactImg from "../../assets/public/contact.png";

const ContactHeader: React.FC = () => {
  return (
    <div className="w-full max-w-6xl mx-auto flex items-center justify-between py-4 px-6 md:px-12 overflow-hidden">
      <motion.h2
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="text-5xl md:text-7xl font-medium tracking-tight text-[#111111]"
      >
        Contact me
      </motion.h2>

      <motion.img
        initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
        whileHover={{
          y: -4,
          transition: { duration: 0.3, ease: "easeOut" },
        }}
        src={contactImg}
        alt="Services"
        className="h-16 w-16 md:h-90 md:w-90 object-contain select-none"
        draggable="false"
      />
    </div>
  );
};

export default ContactHeader;
