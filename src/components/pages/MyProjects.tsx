"use client";
import React from "react";
import SparklesCore from "../sparkles/SparklesCore";
import { HoverEffect } from "../card/card-hover-effect";

const MyProjects = () => {
  return (
    <div className=" relative w-full bg-[#0a0a0a] flex flex-col items-center justify-around overflow-hidden rounded-md">
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
        Projects
      </h1>
      <div className="w-[90%] flex flex-col justify-around items-center h-full">
        <div className="max-w-5xl mx-auto px-8">
          <HoverEffect items={projects} />
        </div>
      </div>
    </div>
  );
};

export default MyProjects;

const projects = [
  {
    title: "Donors Spot",
    description: `Designing and implementing a web application utilizing a powerful tech stack to fulfill the critical need of locating the nearest blood donors - Created an innovative platform that visually represents the locations of registered blood donors on a map - Streamlined user connections by enabling the sharing of requests and contact details on the platform - Established a seamless and efficient bridge between individuals in need of blood and willing donors in the community.`,
    link: "https://github.com/sandeep-guttula/blood-line",
  },
  {
    title: "Movie App",
    description:
      "Developed a mobile app using React Native. Designed a movie app that provides users with comprehensive information about movies, including cast details and complete movie information, enhancing the movie-watching experience",
    link: "https://github.com/sandeep-guttula/movie-app",
  },
  {
    title: "Password Generator",
    description:
      "Developed a password generator using React. ● Created a password generator that generates passwords of varying lengths and complexity, ensuring the security of user accounts",
    link: "https://github.com/sandeep-guttula/password-generator-app",
  },
  {
    title: "AI Chat Bot",
    description:
      "eveloped an AI chatbot using ReactJS, Node.js, and the OpenAI API.Engineered an intelligent chatbot capable of providing precise responses to a wide range of user questions, offering seamless and interactive experiences for information, assistance, and engaging conversation, enhancing dynamic user interactions.",
    link: "https://github.com/sandeep-guttula/ai-chat-bot",
  },
];
