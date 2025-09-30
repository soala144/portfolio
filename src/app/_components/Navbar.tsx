"use client";
import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { SiX, SiGithub } from "react-icons/si";
import { FileText } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  // Transform values based on scroll - smoother transitions
  const navWidth = useTransform(scrollY, [0, 150], ["100%", "85%"]);
  const borderRadius = useTransform(scrollY, [0, 150], ["0px", "24px"]);
  const paddingY = useTransform(scrollY, [0, 150], ["16px", "10px"]);
  const marginTop = useTransform(scrollY, [0, 150], ["0px", "12px"]);
  const marginX = useTransform(scrollY, [0, 150], ["0px", "16px"]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex justify-center">
      <motion.div
        style={{
          width: navWidth,
          borderRadius: borderRadius,
          paddingTop: paddingY,
          paddingBottom: paddingY,
          marginTop: marginTop,
          marginLeft: marginX,
          marginRight: marginX,
        }}
        initial={{ width: "100%", borderRadius: "0px" }}
        transition={{ type: "spring", stiffness: 100, damping: 30, mass: 0.5 }}
        className="flex justify-between items-center px-4 sm:px-6 md:px-8 lg:px-12 bg-white/20 backdrop-blur-lg border border-white/30 shadow-lg"
      >
        {/* Brand / Name */}
        <motion.a
          href="https://wa.me/+2348124554767"
          className="no-underline text-lg sm:text-xl md:text-3xl font-bold text-gray-900 tracking-tight"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          &lt;SoalaDev/&gt;
        </motion.a>

        {/* Icons */}
        <div className="flex items-center gap-3 sm:gap-4 md:gap-5 text-gray-900">
          {/* X logo */}
          <motion.a
            href="https://x.com/144_soala"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.15, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <SiX className="w-3 h-3 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7" />
          </motion.a>

          {/* GitHub logo */}
          <motion.a
            href="https://github.com/soala144"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.15, rotate: -5 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <SiGithub className="w-3 h-3 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7" />
          </motion.a>

          {/* Resume download */}
          <motion.a
            href="/resume.pdf"
            download
            whileHover={{ scale: 1.15, y: -2 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <FileText className="w-3 h-3 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7" />
          </motion.a>
        </div>
      </motion.div>
    </nav>
  );
};

// Demo content to show scroll behavior
export default Navbar;
