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
  CheckCircle,
} from "lucide-react";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 3000);
  };

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
    <section className="max-w-7xl mx-auto px-6 py-20">
      {/* Section Header */}
      <div className="text-center mb-20">
        <motion.div
          className="inline-flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-full mb-6"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Send className="w-4 h-4" />
          <span className="text-sm font-medium text-gray-600">
            Get In Touch
          </span>
        </motion.div>

        <motion.h1
          className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Let&apos;s Build <span className="text-black">Something Great</span>
        </motion.h1>

        <motion.p
          className="text-lg text-gray-600 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Got a project in mind? Whether it&apos;s web development, IoT
          solutions, or just a chat about tech - I&apos;m all ears.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
        {/* Contact Form */}
        <motion.div
          className="lg:col-span-3"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <form
            onSubmit={handleSubmit}
            className="border border-gray-200 rounded-3xl p-8 md:p-10 bg-white hover:border-gray-300 transition-colors duration-300"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Send a Message
            </h3>

            <div className="space-y-6">
              {/* Name & Email Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-gray-400 transition-colors duration-200"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-gray-400 transition-colors duration-200"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              {/* Subject */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-gray-400 transition-colors duration-200"
                  placeholder="Project Collaboration"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-gray-400 transition-colors duration-200 resize-none"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitted}
                className={`w-full flex items-center justify-center gap-2 py-4 rounded-2xl font-semibold transition-all duration-300 ${
                  isSubmitted
                    ? "bg-green-600 text-white"
                    : "bg-black text-white hover:bg-gray-800"
                }`}
              >
                {isSubmitted ? (
                  <>
                    <CheckCircle className="w-5 h-5" />
                    <span>Message Sent!</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </div>
          </form>
        </motion.div>

        {/* Contact Info Sidebar */}
      </div>
    </section>
  );
};

export default Contact;
