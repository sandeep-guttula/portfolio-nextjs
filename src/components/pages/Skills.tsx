import React from "react";
import { InfiniteMovingCards } from "../infinite-moving/infinite-moving-cards";
import Spotlight from "../spotlight/Spotlight";

const Skills = () => {
  return (
    <div className="h-[50rem] w-full  bg-[#0a0a0a] bg-dot-white/[0.2]  relative flex flex-col gap-16 items-center justify-center">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center  bg-[#0a0a0a] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <p className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
        Skills
      </p>
      <div className=" rounded-md w-[90%]  flex flex-col antialiased  bg-[#0a0a0a] bg-dot-white/[0.2] items-center justify-center relative overflow-hidden">
        <InfiniteMovingCards
          items={languages}
          direction="right"
          speed="normal"
        />
        <InfiniteMovingCards
          items={frameworks}
          direction="left"
          speed="normal"
        />
        <InfiniteMovingCards items={tools} direction="right" speed="normal" />
      </div>
    </div>
  );
};

export default Skills;

const languages = [
  {
    name: "JavaScript",
  },
  {
    name: "TypeScript",
  },
  {
    name: "Python",
  },
  {
    name: "Java",
  },
  {
    name: "C++",
  },
  {
    name: "C",
  },
  {
    name: "HTML",
  },
  {
    name: "CSS",
  },
];

const frameworks = [
  {
    name: "React",
  },
  {
    name: "Next.js",
  },
  {
    name: "React Native",
  },
  {
    name: "TailwindCSS",
  },
  {
    name: "Node.js",
  },
  {
    name: "Express",
  },
  {
    name: "MongoDB",
  },
  {
    name: "Firebase",
  },
  {
    name: "Flask",
  },
  {
    name: "Bootstrap",
  },
  {
    name: "Material UI",
  },
];

const tools = [
  {
    name: "Git",
  },
  {
    name: "GitHub",
  },
  {
    name: "VS Code",
  },
  {
    name: "Postman",
  },
  {
    name: "Vercel",
  },
  {
    name: "Figma",
  },
  {
    name: "Wireframing",
  },
  {
    name: "Prototyping",
  },
  {
    name: " Visual Design",
  },
];
