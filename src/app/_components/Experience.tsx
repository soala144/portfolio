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
      company: "RemindMe Technologies",
      position: "Co-Founder & Full Stack Developer",
      duration: "2023 - Present",
      location: "Port Harcourt, Nigeria",
      type: "Startup",
      description:
        "Leading the technical vision and development of an intelligent scheduling platform. Built scalable architecture serving thousands of users with real-time notifications and cross-platform synchronization.",
      logo: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=100&h=100&fit=crop&crop=center",
      achievements: [
        "Architected microservices handling 10K+ daily active users",
        "Reduced notification latency by 85% through optimization",
        "Led team of 4 developers using agile methodologies",
      ],
      technologies: ["Next.js", "TypeScript", "PostgreSQL", "Redis", "Docker"],
      website: "https://remindme.com",
    },
    {
      id: 2,
      company: "TechHub Rivers",
      position: "Embedded Systems Developer",
      duration: "2022 - 2023",
      location: "Port Harcourt, Nigeria",
      type: "Tech Hub",
      description:
        "Developed IoT solutions for smart city initiatives and industrial automation. Collaborated with hardware teams to create seamless software-hardware integrations for monitoring systems.",
      logo: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=100&h=100&fit=crop&crop=center",
      achievements: [
        "Deployed 50+ IoT sensors across the city infrastructure",
        "Reduced system downtime by 60% with predictive analytics",
        "Mentored 12 junior developers in embedded programming",
      ],
      technologies: ["C/C++", "Python", "Arduino", "Raspberry Pi", "MQTT"],
      website: "https://techhubrivers.com",
    },
    {
      id: 3,
      company: "Digital Craft Nigeria",
      position: "Frontend Developer",
      duration: "2021 - 2022",
      location: "Port Harcourt, Nigeria",
      type: "Agency",
      description:
        "Crafted responsive web applications and user interfaces for diverse clients. Specialized in modern JavaScript frameworks and performance optimization for e-commerce and business websites.",
      logo: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=100&h=100&fit=crop&crop=center",
      achievements: [
        "Delivered 25+ client projects with 98% satisfaction rate",
        "Improved average site performance by 40%",
        "Established component library used across all projects",
      ],
      technologies: [
        "React",
        "Vue.js",
        "Tailwind CSS",
        "JavaScript",
        "Webpack",
      ],
      website: "https://digitalcraft.ng",
    },
    {
      id: 4,
      company: "Self-Employed",
      position: "Freelance Developer",
      duration: "2020 - 2021",
      location: "Port Harcourt, Nigeria",
      type: "Freelance",
      description:
        "Started my journey building custom solutions for local businesses. Focused on learning modern web technologies while delivering value to small businesses transitioning online.",
      logo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=center",
      achievements: [
        "Built 15+ websites for local businesses",
        "Generated $10K+ in revenue while learning",
        "Established long-term client relationships",
      ],
      technologies: ["HTML", "CSS", "JavaScript", "PHP", "WordPress"],
      website: "#",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      {/* Section Header */}
      <div className="text-center mb-20">
        <motion.div
          className="inline-flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-full mb-6"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Briefcase className="w-4 h-4" />
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
              <div
                className={`ml-12 md:ml-0 ${
                  index % 2 === 1
                    ? "md:col-start-2 md:text-left"
                    : "md:text-right"
                }`}
              >
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
