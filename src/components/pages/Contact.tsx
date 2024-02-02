import React from "react";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandInstagram,
} from "@tabler/icons-react";
import Link from "next/link";

const Contact = () => {
  return (
    <>
      <div
        id="contact"
        className=" w-full bg-[#0a0a0a]   bg-grid-small-white/[0.2] relative flex items-center justify-center"
      >
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-[#0a0a0a]  [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <div className="h-screen  flex-col flex items-center justify-center gap-10">
          <p className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
            Let&apos;s Connect
          </p>
          <Link
            href={"mailto:sandeepguttula2002@gmail.com"}
            className="relative  flex space-x-2 items-center rounded-full bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10 "
          >
            <span className="relative z-20 text-gray-300 text-xl font-thin inline-block py-0.5">
              sandeepguttula2002@gmail.com
            </span>

            <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover/btn:opacity-40"></span>
          </Link>
          <div className="flex gap-10 pt-10">
            <Link
              href="https://github.com/sandeep-guttula"
              className="px-6 py-2 bg-transparent text-white rounded-lg font-bold transform hover:-translate-y-1 transition duration-400"
              target="_blank"
            >
              <IconBrandGithub
                className="h-10 w-10 text-gray-400"
                stroke={1.25}
              />
            </Link>
            <Link
              className="px-6 py-2 bg-transparent text-white rounded-lg font-bold transform hover:-translate-y-1 transition duration-400"
              href="https://www.linkedin.com/in/sandeep-guttula"
              target="_blank"
            >
              <IconBrandLinkedin
                className="h-10 w-10 text-gray-400"
                stroke={1.25}
              />
            </Link>
            <Link
              href="https://instagram.com/mr_sandeep_0701/"
              className="px-6 py-2 bg-transparent text-white rounded-lg font-bold transform hover:-translate-y-1 transition duration-400"
              target="_blank"
            >
              <IconBrandInstagram
                className="h-10 w-10 text-gray-400"
                stroke={1.25}
              />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
