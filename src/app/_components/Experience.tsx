"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Calendar,
  Briefcase,
  Users,
  Award,
  ArrowUpRight,
  Building,
} from "lucide-react";
import Image from "next/image";

const Experience = () => {
  const experiences = [
    {
      id: 1,
      company: "RemindMe",
      position: "Co-Founder & Full Stack Developer",
      duration: "2025 - Present",
      location: "Port Harcourt, Nigeria",
      type: "Startup",
      description:
        "Leading the technical vision and development of an intelligent scheduling platform. Built scalable architecture serving thousands of users with real-time notifications and cross-platform synchronization.",
      logo: "/remindmelogo.jpg",
      achievements: [
        "Architected the entire reminder system from scratch",
        "Handles the management of database and server infrastructure",
        "Led team of 3 developers using agile methodologies",
      ],
      technologies: [
        "Next.js",
        "TypeScript",
        "PostgreSQL",
        "Redis",
        "Docker",
        "Supabase",
        "Prisma",
      ],
      website: "https://remindme.pxxl.xyz",
    },
    {
      id: 2,
      company: "XnyderHQ",
      position: "Frontend Developer",
      duration: "2025 - present",
      location: "Port Harcourt, Nigeria",
      type: "Tech Company",
      description:
        "Built and optimized user-friendly web interfaces for XnyderHQ’s digital products. Focused on creating responsive designs, seamless user experiences, and scalable frontend architectures while collaborating closely with backend engineers and designers.",
      logo: "/xnyder.jpg",
      achievements: [
        "Developed and refined the company’s admin dashboard using React and Tailwind CSS",
        "Improved UI performance and accessibility across multiple projects",
        "Collaborated with cross-functional teams to integrate APIs and deliver key product features",
      ],
      technologies: [
        "React",
        "Next.js",
        "StyleXUI",
        "JavaScript",
        "Git",
        "TypeScript",
      ],
      website: "https://xnyder.com",
    },
    {
      id: 3,
      company: "Ini Technoid Services",
      position: "Web Developer & Embedded Systems Tutor",
      duration: "2023 - 2024",
      location: "Port Harcourt, Nigeria",
      type: "Tech Training",
      description:
        "Contributed to building modern web solutions for clients while also tutoring embedded systems and mentoring young learners in technology. Played a dual role in both software development and hands-on technical education.",
      logo: "/initechnoid.png",
      achievements: [
        "Developed and deployed responsive websites for clients using modern frontend tools",
        "Tutored embedded systems concepts, guiding students through practical Arduino and IoT projects",
        "Mentored children in tech, sparking interest and building foundational programming skills",
      ],
      technologies: ["React", "JavaScript", "Tailwind CSS", "Arduino", "Git"],
      website: "https://initechnoids.com.ng/",
    },

    {
      id: 4,
      company: "Self-Employed",
      position: "Freelance Developer",
      duration: "2024 - present",
      location: "Port Harcourt, Nigeria",
      type: "Freelance",
      description:
        "Currently building projects and exploring freelance opportunities using modern web technologies. Focused on delivering clean, scalable, and responsive solutions while sharpening my skills with real-world use cases.",
      logo: "/cartoonImg.jpg",
      achievements: [
        "Experimented with building full-stack applications using Next.js, Tailwind, Prisma, and Supabase",
        "Created personal and practice projects to strengthen problem-solving and design skills",
        "Started taking on small freelance tasks to gain industry experience",
      ],
      technologies: [
        "Next.js",
        "Tailwind CSS",
        "TypeScript",
        "Prisma",
        "Supabase",
      ],
      website: "https://soaladev.vercel.app",
    },
  ];

  return (
    <section className="md:w-[87%] max-w-7xl mx-auto px-6 py-20">
      {/* Section Header */}
      <div className="text-center mb-20">
        <motion.div
          className="inline-flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-full mb-6"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Briefcase className="w-4 h-4" color="black" />
          <span className="text-sm font-medium text-gray-600">
            Career Journey
          </span>
        </motion.div>

        <motion.h1
          className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Where I&apos;ve <span className="text-black">Made Impact</span>
        </motion.h1>

        <motion.p
          className="text-lg text-gray-600 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          From freelance beginnings to co-founding a tech startup - every step
          shaped my expertise.
        </motion.p>
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Timeline Line */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-gray-200 via-gray-300 to-gray-200 transform md:-translate-x-0.5"></div>

        {/* Experience Cards */}
        <div className="space-y-16">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              className={`relative grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center ${
                index % 2 === 0 ? "" : "md:grid-flow-col-dense"
              }`}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              {/* Timeline Dot */}
              <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-black rounded-full transform -translate-x-2 md:-translate-x-2 z-10 ring-4 ring-white"></div>

              {/* Company Logo & Info */}
              <div className={`ml-12 md:ml-0}`}>
                <div
                  className={`inline-block p-6 border border-gray-200 rounded-3xl bg-white hover:border-gray-300 transition-all duration-300 group ${
                    index % 2 === 1 ? "md:ml-8" : "md:mr-8"
                  }`}
                >
                  {/* Logo */}
                  <div className="flex items-center gap-4 mb-4">
                    <div className="relative">
                      <Image
                        src={exp.logo}
                        alt={exp.company}
                        width={12}
                        height={12}
                        className="w-12 h-12 rounded-2xl object-cover"
                      />
                      <div className="absolute inset-0 bg-black/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-bold text-lg text-gray-900">
                          {exp.company}
                        </h3>
                        {exp.website !== "#" && (
                          <a
                            href={exp.website}
                            className="p-1 hover:bg-gray-100 rounded-full transition-colors duration-200"
                          >
                            <ArrowUpRight className="w-4 h-4 text-gray-500" />
                          </a>
                        )}
                      </div>
                      <div className="inline-flex items-center gap-1 px-2 py-1 bg-gray-100 rounded-full">
                        <Building className="w-3 h-3 text-gray-600" />
                        <span className="text-xs font-medium text-gray-600">
                          {exp.type}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Position & Duration */}
                  <div className="space-y-2 mb-4">
                    <h4 className="font-semibold text-xl text-gray-900">
                      {exp.position}
                    </h4>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{exp.duration}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {exp.description}
                  </p>

                  {/* Technologies */}
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-gray-50 text-gray-700 text-sm font-medium rounded-full border border-gray-100 hover:bg-gray-100 transition-colors duration-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Key Achievements */}
                  <div className="space-y-3">
                    <h5 className="font-semibold text-gray-900 flex items-center gap-2">
                      <Award className="w-4 h-4" />
                      Key Achievements
                    </h5>
                    <div className="space-y-2">
                      {exp.achievements.map((achievement, achIndex) => (
                        <div key={achIndex} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-black rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-sm text-gray-600">
                            {achievement}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Spacer for timeline alignment */}
              <div
                className={`hidden md:block ${
                  index % 2 === 1 ? "md:col-start-1" : ""
                }`}
              ></div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom Section */}
      <motion.div
        className="text-center mt-20"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.0 }}
      >
        <div className="inline-flex items-center gap-2 px-6 py-3 border border-gray-200 rounded-full hover:border-gray-300 hover:bg-gray-50 transition-all duration-300 cursor-pointer group">
          <Users className="w-5 h-5 text-gray-600 group-hover:scale-110 transition-transform duration-300" />
          <span className="text-gray-700 font-medium">
            Open to new opportunities
          </span>
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;
