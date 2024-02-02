import React from "react";
import { TextGenerateEffect } from "../text-generate-effect";
import { BackgroundBeams } from "../beams/background-beams";

const Hero = () => {
  const words = `An enthusiastic designer & developer based in India.`;
  const words2 = `I'm designer and developer from India with high passion of creating softwares That looks and works great...`;
  return (
    <div className="h-screen bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <div className="ml-5 max-w-2xl mx-auto p-4">
        <h3 className="text-3xl  text-gray-300 font-bold">I&apos;am</h3>
        <h1 className="relative z-10  text-5xl md:text-7xl  bg-clip-text text-left text-transparent bg-gradient-to-b bg-slate-200 font-sans font-bold">
          Sandeep Guttula
        </h1>
        <TextGenerateEffect words={words} className="text-2xl" />
        <TextGenerateEffect words={words2} className="text-md " />
      </div>
      <BackgroundBeams />
    </div>
  );
};

export default Hero;
