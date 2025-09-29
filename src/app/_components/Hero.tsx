"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowDownRight, Code, Sparkles, Zap } from "lucide-react";
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
    <>
      <div className="min-h-screen pt-30 mb-12 flex items-center relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Grid Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:64px_64px]"></div>

          {/* Gradient Orbs */}
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-20 right-10 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-20 left-10 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl"
          />

          {/* Floating Elements - Hidden on Mobile */}
          <motion.div
            animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-32 right-20 opacity-20 hidden md:block"
          >
            <Code className="w-20 h-20 text-gray-400" />
          </motion.div>
          <motion.div
            animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
            className="absolute bottom-32 right-32 opacity-20 hidden md:block"
          >
            <Sparkles className="w-16 h-16 text-gray-400" />
          </motion.div>
          <motion.div
            animate={{ y: [0, -15, 0], x: [0, 10, 0] }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
            className="absolute top-1/2 right-40 opacity-20 hidden md:block"
          >
            <Zap className="w-14 h-14 text-gray-400" />
          </motion.div>
        </div>

        {/* Main Content - 87% width on desktop */}
        <div className="w-full md:w-[87%] mx-auto px-4 md:px-8 relative z-10">
          {/* Available Badge */}
          {/* Available Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="bg-[#E1F9DC] w-[50%] md:w-[37%] m-auto md:mx-0 rounded-3xl px-4 py-2 md:px-5 md:py-3 flex items-center justify-center gap-2"
          >
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="bg-[#178D00] rounded-full w-3 h-3"
            />
            <p className="text-[#178D00] hidden md:block text-sm lg:text-base">
              Available for collaborations
            </p>
            <p className="text-[#178D00] block md:hidden text-sm sm:text-base font-medium">
              Available
            </p>
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
                  className="flex border border-[#5a5a5a] rounded-md gap-2 p-3 items-center mx-4 bg-white shadow-sm "
                >
                  <Image
                    src={tool.logo}
                    alt={tool.name}
                    className="w-6 h-6 object-contain"
                    width={6}
                    height={6}
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
              <a href="mailto:soala144@gmail.com"> Hire Me !</a>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05, x: 5 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              className="bg-white flex text-black gap-3 py-[14px] px-[20px] cursor-pointer rounded-xl text-[16px] border border-black hover:shadow-lg transition-shadow items-center"
            >
              <a href="#projects">My Projects</a>
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

      <div className="w-[87%] h-[1px] m-auto bg-gray-200 my-10"></div>
    </>
  );
};

export default Hero;
