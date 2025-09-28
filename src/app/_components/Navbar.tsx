import React from "react";
import { SiX, SiGithub } from "react-icons/si";
import { FileText } from "lucide-react"; // paper/download icon

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      <div
        className="flex justify-between items-center px-6 py-3 bg-white/20 backdrop-blur-lg border border-white/30 
                   shadow-lg m-auto mt-3 "
      >
        {/* Brand / Name */}
        <a
          href="https://wa.me/+2348124554767"
          className="no-underline text-xl md:text-2xl font-bold text-gray-900 tracking-tight"
        >
          &lt;SoalaDev/&gt;
        </a>

        {/* Icons */}
        <div className="flex items-center gap-4 text-gray-900">
          {/* X logo */}
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform duration-200"
          >
            <SiX className="w-4 h-4 md:w-7 md:h-7" />
          </a>

          {/* GitHub logo */}
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform duration-200"
          >
            <SiGithub className="w-4 h-4 md:w-7 md:h-7" />
          </a>

          {/* Resume download */}
          <a
            href="/resume.pdf"
            download
            className="hover:scale-110 transition-transform duration-200"
          >
            <FileText className="w-4 h-4 md:w-7 md:h-7" />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
