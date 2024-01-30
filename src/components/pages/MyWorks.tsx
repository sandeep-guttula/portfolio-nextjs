"use client";
import React from "react";
import SparklesCore from "../sparkles/SparklesCore";
import { HoverEffect } from "../card/card-hover-effect";

const MyWorks = () => {
  return (
    <div className="h-[40rem] relative w-full bg-[#0a0a0a] flex flex-col items-center justify-around overflow-hidden rounded-md">
      <div className="w-full absolute inset-0 h-screen">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>
      <h1 className="md:text-7xl text-3xl lg:text-6xl font-bold text-center text-gray-300 relative z-20">
        Resent Works
      </h1>
      <div className="w-[90%] flex flex-col justify-around items-center h-full">
        <div className="max-w-5xl mx-auto px-8">
          <HoverEffect items={works} />
        </div>
      </div>
    </div>
  );
};

export default MyWorks;

const works = [
  {
    title: "Tekorse Technologies",
    description:
      "Design and developed an website for Tekorse Technologies and helped them to actively engage with their customers",
    link: "https://tekorse.com/",
  },
  {
    title: "Endless",
    description:
      "Developed and implemented an e-commerce website using Nextjs14, enabling customers to conveniently order a wide range of products including groceries, clothing, and jewelry.",
    link: "https://endless.in/",
  },
];
