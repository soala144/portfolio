import About from "./_components/About";
import Experience from "./_components/Experience";
import Hero from "./_components/Hero";
import Navbar from "./_components/Navbar";
import Projects from "./_components/Projects";

export default function Home() {
  return (
    <div className="bg-white">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Experience />
    </div>
  );
}
