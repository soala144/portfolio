"use client";
import { useState } from "react";
import About from "./_components/About";
import Contact from "./_components/Contact";
import Experience from "./_components/Experience";
import Hero from "./_components/Hero";
import Navbar from "./_components/Navbar";
import Projects from "./_components/Projects";
import { AnimatePresence } from "framer-motion";
import Preloader from "./_components/PreLoader";

export default function Home() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  return (
    <>
      <Preloader onLoadingComplete={() => setIsLoading(false)} />
      {!isLoading && (
        <AnimatePresence>
          <div className="bg-white">
            <Navbar />
            <Hero />
            <About />
            <Projects />
            <Experience />
            <Contact />
          </div>
        </AnimatePresence>
      )}
    </>
  );
}
