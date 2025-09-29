"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const [hovered, setHovered] = useState(false);

  const springConfig = { damping: 25, stiffness: 300 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 8);
      cursorY.set(e.clientY - 8);
    };
    window.addEventListener("mousemove", moveCursor);

    const targets = document.querySelectorAll("[data-cursor='view']");
    targets.forEach((target) => {
      target.addEventListener("mouseenter", () => setHovered(true));
      target.addEventListener("mouseleave", () => setHovered(false));
    });

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      targets.forEach((target) => {
        target.removeEventListener("mouseenter", () => setHovered(true));
        target.removeEventListener("mouseleave", () => setHovered(false));
      });
    };
  }, [cursorX, cursorY]);

  return (
    <div className="hidden lg:block">
      {/* Small cursor dot */}
      {!hovered && (
        <motion.div
          className="fixed top-0 left-0 z-[9999] pointer-events-none w-4 h-4 rounded-full bg-[#ababab]"
          style={{
            translateX: cursorXSpring,
            translateY: cursorYSpring,
          }}
        />
      )}

      {/* Button cursor */}
      {hovered && (
        <motion.div
          className="fixed top-0 left-0 z-[9999] pointer-events-none rounded-full px-4 py-2 text-sm font-medium border border-white bg-white/20 backdrop-blur-md text-white"
          style={{
            translateX: cursorXSpring,
            translateY: cursorYSpring,
          }}
        >
          VIEW PROJECT
        </motion.div>
      )}
    </div>
  );
}
