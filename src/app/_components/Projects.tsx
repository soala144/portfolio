"use client";
import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Code, Zap, Palette, Database } from "lucide-react";
import Image from "next/image";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Adora Sparkle",
      description:
        "A premium jewelry storefront with refined visuals, effortless browsing, and checkout that feels like luxury in every click.",
      image: "/adora.PNG",
      liveUrl: "https://adora-sparkle.pxxl.xyz",
      category: "Web App",
      stack: [
        {
          name: "Next.js",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
        },
        {
          name: "Prisma",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg",
        },
        {
          name: "TypeScript",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
        },
        {
          name: "Tailwind",
          icon: "/tailwind.png",
        },
        {
          name: "PostgreSQL",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
        },
      ],
    },
    {
      id: 2,
      title: "NFSHE",
      description:
        "Redefining luxury with NFTs that certify style, scarcity, and authenticity for every collection.",
      image: "/nfshe.PNG",
      liveUrl: "https://nfshe.vercel.app/",
      category: "Web App",
      stack: [
        {
          name: "React",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        },
        {
          name: "TypeScript",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
        },
        {
          name: "Tailwind",
          icon: "/tailwind.png",
        },
      ],
    },
    {
      id: 3,
      title: "PAGFOOD",
      description:
        "A vibrant restaurant platform with interactive menus, smooth ordering flow, and mouth-watering visuals that sell the flavor before the first bite.",
      image: "/PagFoodscreenshot.PNG",
      liveUrl: "https://www.pagfood.com/",
      category: "Web App",
      stack: [
        {
          name: "React",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        },
        {
          name: "TypeScript",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
        },
        {
          name: "Tailwind",
          icon: "/tailwind.png",
        },
      ],
    },
    {
      id: 4,
      title: "RemindMe",
      description:
        "Your personal assistant in app form — syncs tasks, sends intelligent reminders, and adapts to your life so you always stay on track.",
      image: "/projects/remindme.png",
      liveUrl: "https://remindme.pxxl.xyz",
      category: "Web App",
      stack: [
        {
          name: "Next.js",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
        },
        {
          name: "Prisma",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg",
        },
        {
          name: "TypeScript",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
        },
        {
          name: "Tailwind",
          icon: "/tailwind.png",
        },
        {
          name: "PostgreSQL",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
        },
      ],
    },
    {
      id: 5,
      title: "CareSync",
      description:
        "A smart hospital management system built to reduce patient wait times by 50%. CareSync integrates AI-assisted scheduling, real-time doctor-patient communication, and analytics dashboards to streamline hospital operations and enhance patient care.",
      image: "/projects/caresync.png", // Replace with your actual image path
      liveUrl: "https://caresync-demo.vercel.app/", // Replace if hosted
      category: "HealthTech",
      stack: [
        {
          name: "React",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        },
        {
          name: "Tailwind CSS",
          icon: "/tailwind.png",
        },
        {
          name: "TypeScript",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
        },
        {
          name: "Node.js",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
        },
        {
          name: "MongoDB",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
        },
      ],
    },
  ];

  return (
    <section
      className="w-[95%] md:w-[87%] max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-20"
      id="projects"
    >
      {/* Section Header */}
      <div className="text-center mb-12 sm:mb-16">
        <motion.div
          className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 border border-gray-200 rounded-full mb-4 sm:mb-6"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Code className="w-4 h-4 sm:w-5 sm:h-5" color="black" />
          <span className="text-xs sm:text-sm font-medium text-gray-600">
            Featured Work
          </span>
        </motion.div>

        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 sm:mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Projects That <span className="text-black">Matter</span>
        </motion.h1>

        <motion.p
          className="text-base sm:text-lg text-gray-600 max-w-xl sm:max-w-2xl mx-auto px-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Each project tells a story of innovation, problem-solving, and
          craftsmanship in code.
        </motion.p>
      </div>

      {/* Projects List */}
      <div className="space-y-16 sm:space-y-24">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            className={`grid grid-cols-1 border-2 md:border-none px-3 sm:px-2 py-4 sm:py-6 rounded-xl border-gray-300 lg:grid-cols-2 gap-8 sm:gap-12 items-center ${
              index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
            }`}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.3 }}
          >
            {/* Project Image */}
            <div
              className={`relative group ${
                index % 2 === 1 ? "lg:col-start-2" : ""
              }`}
            >
              <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl transition-colors duration-300">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={800}
                  height={500}
                  className="w-full h-56 sm:h-80 object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Quick Actions */}
                <div className="absolute top-3 sm:top-6 right-3 sm:right-6 flex gap-2 sm:gap-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <a
                    href={project.liveUrl}
                    className="p-2 sm:p-3 bg-white/95 backdrop-blur-sm rounded-full hover:bg-white hover:scale-110 transition-all duration-200"
                    aria-label="View live demo"
                  >
                    <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700" />
                  </a>
                </div>
              </div>
            </div>

            {/* Project Info */}
            <div
              className={`space-y-4 sm:space-y-6 ${
                index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""
              }`}
            >
              {/* Category Badge */}
              <div className="inline-flex items-center gap-2 px-2.5 sm:px-3 py-1 border border-gray-200 rounded-full">
                <Palette className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gray-600" />
                <span className="text-xs sm:text-sm font-medium text-gray-700">
                  {project.category}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="space-y-2 sm:space-y-3">
                <h4 className="text-xs sm:text-sm font-semibold text-gray-900 uppercase tracking-wide flex items-center gap-1.5 sm:gap-2">
                  <Zap className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  Tech Stack
                </h4>
                <div className="flex flex-wrap gap-2 sm:gap-3">
                  {project.stack.map((tech, techIndex) => (
                    <div
                      key={techIndex}
                      className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 border border-gray-200 rounded-lg sm:rounded-xl hover:border-gray-300 hover:bg-gray-50 transition-all duration-200 group"
                    >
                      <Image
                        src={tech.icon}
                        alt={tech.name}
                        width={20}
                        height={20}
                        className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform duration-200"
                      />
                      <span className="text-xs sm:text-sm font-medium text-gray-700">
                        {tech.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4">
                <a
                  href={project.liveUrl}
                  className="inline-flex items-center justify-center gap-1.5 sm:gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-black text-white rounded-xl sm:rounded-2xl font-semibold hover:bg-gray-800 transition-all duration-300 group text-sm sm:text-base"
                >
                  <span>Live Demo</span>
                  <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5 group-hover:rotate-45 transition-transform duration-300" />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Bottom CTA */}
      <motion.div
        className="text-center mt-16 sm:mt-20"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.2 }}
      >
        <div className="inline-flex items-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 border border-gray-200 rounded-full hover:border-gray-300 hover:bg-gray-50 transition-all duration-300 cursor-pointer group">
          <Database className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600 group-hover:rotate-180 transition-transform duration-500" />
          <span className="text-sm sm:text-base text-gray-700 font-medium">
            More projects in development
          </span>
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
