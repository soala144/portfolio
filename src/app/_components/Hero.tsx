import { ArrowDownRight } from "lucide-react";
import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";

const Hero = () => {
  const tools = [
    {
      name: "React",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      name: "Tailwind CSS",
      logo: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
    },
    {
      name: "Next.js",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    },
    {
      name: "Git",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    },
    {
      name: "GitHub",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    },
    {
      name: "Supabase",
      logo: "https://www.vectorlogo.zone/logos/supabase/supabase-icon.svg",
    },
    {
      name: "Prisma",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg",
    },
    {
      name: "PostgreSQL",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    },
  ];

  return (
    <div className="h-screen pt-30 border border-t-2 mb-12 border-gray-300">
      <div className="bg-[#E1F9DC] w-[38%] md:w-[18%]  m-auto rounded-3xl pl-5 md:pr-3 flex items-center  p-2 md:p-4 gap-2">
        <div className="bg-[#178D00] rounded-full w-3 h-3"></div>
        <p className="text-[#178D00] md:block hidden">
          Available for collaborations
        </p>
        <p className="text-[#178D00] block md:hidden text-xl">Available</p>
      </div>

      <div className="ml-4 pt-15">
        <figure>
          <Image
            src="/cartoonImg.jpg"
            alt=""
            width={100}
            height={100}
            className="rounded-full"
          />
        </figure>

        <div>
          <h1 className="text-2xl font-bold mt-4 text-black">
            Hey, I&apos;m Soala Igbikialabo <br /> Full Stack Developer
          </h1>

          <p className="mt-3 text-[#5a5a5a]">
            Turning ideas into interactive, beautiful digital products. <br />
            Valedictorian with a drive to inspire and innovate.
          </p>

          <div className="mt-8">
            <Marquee pauseOnHover gradient={false} speed={40}>
              {tools.map((tool) => (
                <div
                  key={tool.name}
                  className="flex border border-[#5a5a5a] rounded-md gap-2 p-3 items-center mx-4 bg-white shadow-sm"
                >
                  <Image
                    src={tool.logo}
                    alt={tool.name}
                    width={24}
                    height={24}
                    className="object-contain"
                  />
                  <span className="text-sm text-gray-700">{tool.name}</span>
                </div>
              ))}
            </Marquee>
          </div>
          <div className="pt-14 flex gap-3">
            <button className="bg-black text-white py-[14px] px-[24px] rounded-xl text-[16px] hover:opacity-90 duration-[300ms] transition-all hover:px-[28px] ml-1">
              Hire Me !
            </button>
            <button className="bg-white flex text-black gap-3 py-[14px] px-[20px] rounded-xl text-[16px] border border-black hover:opacity-90 duration-[300ms] transition-all hover:px-[28px] ml-1">
              My Projects{" "}
              <span>
                <ArrowDownRight />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
