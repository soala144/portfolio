"use client";
import React, { useState, ChangeEvent, FormEvent } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  MapPin,
  Phone,
  Send,
  Linkedin,
  Github,
  Twitter,
  MessageSquare,
  Clock,
} from "lucide-react";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const Footer = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "soala@soaladev.com",
      link: "mailto:soala@soaladev.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+234 XXX XXX XXXX",
      link: "tel:+234XXXXXXXXX",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Port Harcourt, Rivers State, Nigeria",
      link: null,
    },
    {
      icon: Clock,
      label: "Availability",
      value: "Mon - Fri, 9AM - 6PM WAT",
      link: null,
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      name: "GitHub",
      handle: "@soaladev",
      url: "https://github.com/soaladev",
      color: "hover:bg-gray-900",
    },
    {
      icon: Linkedin,
      name: "LinkedIn",
      handle: "Soala Igbikialabo",
      url: "https://linkedin.com/in/soaladev",
      color: "hover:bg-blue-600",
    },
    {
      icon: Twitter,
      name: "Twitter",
      handle: "@soaladev",
      url: "https://twitter.com/soaladev",
      color: "hover:bg-sky-500",
    },
    {
      icon: MessageSquare,
      name: "WhatsApp",
      handle: "Chat with me",
      url: "https://wa.me/234XXXXXXXXX",
      color: "hover:bg-green-500",
    },
  ];
  return (
    <motion.div
      className="lg:col-span-2 space-y-8"
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      {/* Contact Details */}
      <div className="border border-gray-200 rounded-3xl p-8 bg-white hover:border-gray-300 transition-colors duration-300">
        <h3 className="text-xl font-bold text-gray-900 mb-6">
          Contact Details
        </h3>
        <div className="space-y-5">
          {contactInfo.map((info, index) => (
            <div key={index} className="flex items-start gap-4 group">
              <div className="p-2 bg-gray-50 rounded-xl group-hover:bg-gray-100 transition-colors duration-200">
                <info.icon className="w-5 h-5 text-gray-700" />
              </div>
              <div className="flex-1">
                <p className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-1">
                  {info.label}
                </p>
                {info.link ? (
                  <a
                    href={info.link}
                    className="text-sm text-gray-900 font-medium hover:text-black transition-colors duration-200"
                  >
                    {info.value}
                  </a>
                ) : (
                  <p className="text-sm text-gray-900 font-medium">
                    {info.value}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Social Links */}
      <div className="border border-gray-200 rounded-3xl p-8 bg-white hover:border-gray-300 transition-colors duration-300">
        <h3 className="text-xl font-bold text-gray-900 mb-6">
          Connect Socially
        </h3>
        <div className="space-y-3">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.url}
              className={`flex items-center gap-4 p-4 border border-gray-200 rounded-xl hover:text-white transition-all duration-300 group ${social.color}`}
            >
              <div className="p-2 bg-gray-50 rounded-lg group-hover:bg-white/20 transition-colors duration-300">
                <social.icon className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <p className="font-semibold text-sm">{social.name}</p>
                <p className="text-xs opacity-70">{social.handle}</p>
              </div>
              <Send className="w-4 h-4 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
            </a>
          ))}
        </div>
      </div>

      {/* Quick Response Note */}
      <div className="border border-gray-200 rounded-3xl p-6 bg-gradient-to-br from-gray-50 to-white">
        <div className="flex items-start gap-3">
          <div className="p-2 bg-black rounded-full">
            <Clock className="w-4 h-4 text-white" />
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-1">Quick Response</h4>
            <p className="text-sm text-gray-600 leading-relaxed">
              I typically respond within 24 hours. For urgent matters, reach me
              via WhatsApp.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Footer;
