"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowDownRight } from "lucide-react";
import Marquee from "react-fast-marquee";
import Image from "next/image";

const Hero = () => {
  const tools = [
    {
      name: "React",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      name: "Tailwind CSS",
      logo: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
    },
    {
      name: "Next.js",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    },
    {
      name: "Git",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    },
    {
      name: "GitHub",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    },
    {
      name: "Supabase",
      logo: "https://www.vectorlogo.zone/logos/supabase/supabase-icon.svg",
    },
    {
      name: "Prisma",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg",
    },
    {
      name: "PostgreSQL",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    },
  ];

  return (
    <div className="min-h-screen pt-30 mb-12 border-b-2 border-b-gray-200 flex items-center">
      <div className="w-full max-w-4xl mx-auto px-4 md:px-8">
        {/* Available Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="bg-[#E1F9DC] w-[38%] md:w-auto m-auto md:mx-0 rounded-3xl pl-5 md:pr-3 flex items-center p-2 md:p-4 gap-2 md:inline-flex"
        >
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="bg-[#178D00] rounded-full w-3 h-3"
          />
          <p className="text-[#178D00] md:block hidden">
            Available for collaborations
          </p>
          <p className="text-[#178D00] block md:hidden text-xl">Available</p>
        </motion.div>

        {/* Profile Image */}
        <motion.figure
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="mt-8 md:mt-12"
        >
          <Image
            src="/cartoonImg.jpg"
            alt="Profile"
            className="rounded-full w-[100px] h-[100px] object-cover"
            width={100}
            height={100}
          />
        </motion.figure>

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
        >
          <h1 className="text-2xl md:text-5xl font-bold mt-4 md:mt-6 text-black leading-tight">
            Hey, I&apos;m Soala Igbikialabo <br /> Full Stack Developer
          </h1>

          <p className="mt-3 md:mt-5 text-[#5a5a5a] text-base md:text-lg max-w-2xl">
            Turning ideas into interactive, beautiful digital products. <br />
            Valedictorian with a drive to inspire and innovate.
          </p>
        </motion.div>

        {/* Marquee Tools */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-8 md:mt-10"
        >
          <Marquee pauseOnHover gradient={false} speed={40}>
            {tools.map((tool, index) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                whileHover={{ y: -5, scale: 1.05 }}
                className="flex border border-[#5a5a5a] rounded-md gap-2 p-3 items-center mx-4 bg-white shadow-sm"
              >
                <Image
                  src={tool.logo}
                  alt={tool.name}
                  className="w-6 h-6 object-contain"
                  width={24}
                  height={24}
                />
                <span className="text-sm text-gray-700">{tool.name}</span>
              </motion.div>
            ))}
          </Marquee>
        </motion.div>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="pt-10 md:pt-14 flex gap-3 flex-wrap"
        >
          <motion.button
            whileHover={{ scale: 1.05, x: 5 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            className="bg-black text-white py-[14px] px-[24px] rounded-xl text-[16px] cursor-pointer hover:shadow-lg transition-shadow"
          >
            Hire Me !
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05, x: 5 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            className="bg-white flex text-black gap-3 py-[14px] px-[20px] cursor-pointer rounded-xl text-[16px] border border-black hover:shadow-lg transition-shadow items-center"
          >
            My Projects
            <motion.span
              animate={{ x: [0, 5, 0], y: [0, 5, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <ArrowDownRight />
            </motion.span>
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

// Demo wrapper
export default Hero;
