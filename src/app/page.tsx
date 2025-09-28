import About from "./_components/About";
import Hero from "./_components/Hero";
import Navbar from "./_components/Navbar";

export default function Home() {
  return (
    <div className="bg-white">
      <Navbar />
      <Hero />
      <About />
    </div>
  );
}
