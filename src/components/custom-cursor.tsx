import React, { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const CustomCursor: React.FC = () => {
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const ringX = useSpring(mouseX, { stiffness: 400, damping: 28 });
  const ringY = useSpring(mouseY, { stiffness: 400, damping: 28 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-purple-600 rounded-full pointer-events-none z-9999 -translate-x-1/2 -translate-y-1/2"
        style={{
          x: mouseX,
          y: mouseY,
        }}
      />

      <motion.div
        className="fixed top-0 left-0 w-8 h-8 border-2 border-purple-500/50 rounded-full pointer-events-none z-9999 -translate-x-1/2 -translate-y-1/2"
        style={{
          x: ringX,
          y: ringY,
        }}
      />
    </>
  );
};

export default CustomCursor;
