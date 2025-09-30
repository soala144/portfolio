"use client";
import React from "react";
import { motion } from "framer-motion";
import { Mail, Instagram, Send } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa6";
import { SiX } from "react-icons/si";

const Contact = () => {
  const contactMethods = [
    {
      icon: FaWhatsapp,
      name: "WhatsApp",
      url: "  https://wa.me/2348124554767?text=Hi%20%3CSoalaDev%20/%3E%20I%20came%20across%20your%20portfolio%20and%20would%20love%20to%20work%20with%20you.",
      color: "hover:text-green-600",
    },
    {
      icon: Instagram,
      name: "Instagram",
      url: "https://instagram.com/144_s.soso",
      color: "hover:text-pink-500",
    },
    {
      icon: Mail,
      name: "Email",
      url: "mailto:soala144@gmail.com",
      color: "hover:text-gray-900",
    },
    {
      icon: SiX,
      name: "X",
      url: "https://x.com/144_soala",
      color: "hover:text-black",
    },
  ];

  return (
    <section className="max-w-[87%] mx-auto px-6 py-20 text-center border-t-2 border-gray-200 pt-5">
      {/* Header */}
      <motion.div
        className="inline-flex items-center gap-2 px-5 py-2 border border-gray-200 rounded-full mb-8"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Send className="w-4 h-4" />
        <span className="text-sm font-medium text-gray-600">Get In Touch</span>
      </motion.div>

      <motion.h2
        className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Let&apos;s Connect and Collaborate
      </motion.h2>

      <motion.p
        className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        Whether it&apos;s building something impactful or just saying hi,
        I&apos;m just one click away.
      </motion.p>

      {/* Contact Buttons */}
      <motion.div
        className="flex flex-wrap justify-center gap-6"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        {contactMethods.map((method, index) => (
          <motion.a
            key={index}
            href={method.url}
            aria-label={method.name}
            target="_blank"
            rel="noopener noreferrer"
            className={`transition-all duration-300 group ${method.color}`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
          >
            <method.icon className="w-7 h-7" color="black" />
          </motion.a>
        ))}
      </motion.div>
    </section>
  );
};

export default Contact;
