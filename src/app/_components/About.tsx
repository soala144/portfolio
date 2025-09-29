"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";
import Image from "next/image";

const About = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <section className="md:w-[87%] max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center">
      {/* Left Side: Text */}
      <div>
        {/* Section Title */}
        <motion.h1
          className="text-3xl md:text-4xl font-bold mb-8 text-gray-900"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          About <span className="text-blue-700">&lt;SoalaDev/&gt;</span>
        </motion.h1>

        {/* Content */}
        <div className="space-y-4 text-gray-700 leading-relaxed text-lg">
          <p>
            Code is my toolkit, design is my weapon, and innovation is my
            playground. I build products that are scalable, smart, and hard to
            forget.
          </p>

          <p>
            I&apos;m Soala Igbikialabo, a young and passionate Full Stack
            developer, on a mission to make the web more intuitive, faster, and
            beautifully crafted. I specialize in Next.js, React, Tailwind CSS,
            and JavaScript, creating scalable products with interfaces that
            aren&apos;t just functional, they tell a story.
          </p>

          {/* Extra paragraphs (hidden until expanded) */}
          <AnimatePresence>
            {isExpanded && (
              <>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  Beyond the web, I&apos;m also an embedded systems engineer,
                  bringing hardware and software together to solve problems at
                  the edge. From microcontrollers to IoT devices, I love the
                  challenge of making limited resources do extraordinary things.
                  I don&apos;t just code for screens, I code for machines that
                  think, move, and connect.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  I&apos;m a self-taught programmer steadily carving my path as
                  one of the youngest developers in Port Harcourt, Nigeria. As
                  the co-founder of RemindMe, a platform designed to simplify
                  scheduling and notifications, I blend creativity with
                  problem-solving to deliver impactful solutions.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  Beyond coding, I&apos;m an emerging tech content creator and
                  mentor, passionate about inspiring others to embrace
                  technology and build confidently. My focus is not just on
                  writing clean code but on building meaningful products that
                  empower people, businesses, and communities. I don&apos;t just
                  ship projects, I ship possibilities.
                </motion.p>
              </>
            )}
          </AnimatePresence>
        </div>

        {/* Read More Button */}
        <div className="mt-6">
          <button
            onClick={toggleReadMore}
            className="bg-black text-white py-3 px-6 rounded-lg font-medium text-lg shadow-md hover:opacity-90 transition-all duration-300 hover:scale-105 flex gap-2 items-center"
          >
            {isExpanded ? "Back Up" : "Dive In"}
            {isExpanded ? <ChevronUp /> : <ChevronDown />}
          </button>
        </div>
      </div>

      {/* Right Side: Full-bleed Images */}
      <div className="grid grid-cols-1 gap-4 md:relative -mx-6 md:mx-0">
        {/* Top Big Image */}
        <motion.div
          className="w-full h-72 rounded-2xl overflow-hidden shadow-xl group"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Image
            src="/gradpic.jpg"
            alt="Main About Image"
            width={1200}
            height={400}
            className="object-cover w-full h-full transform group-hover:scale-110 transition duration-500"
          />
        </motion.div>

        {/* Bottom Two Images */}
        <div className="grid grid-cols-2 gap-4">
          <motion.div
            className="w-full h-56 rounded-2xl overflow-hidden shadow-xl group"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Image
              src="/laptop.jpg"
              alt="About Image 2"
              width={600}
              height={300}
              className="object-cover w-full h-full transform group-hover:scale-110 transition duration-500"
            />
          </motion.div>

          <motion.div
            className="w-full h-56 rounded-2xl overflow-hidden shadow-xl group"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Image
              src="/robotics.jpg"
              alt="About Image 3"
              width={600}
              height={300}
              className="object-cover w-full h-full transform group-hover:scale-110 transition duration-500"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
