"use client";
import React from "react";
import { FloatingNav } from "./navbar-menu";
import { IconMessage, IconSlideshow, IconUser } from "@tabler/icons-react";
import { IconBriefcase } from "@tabler/icons-react";
import { IconBracketsAngle } from "@tabler/icons-react";

export function FloatingNavDemo() {
  const navItems = [
    {
      name: "About",
      link: "#about",
      icon: <IconUser className="h-4 w-4    text-white" />,
    },
    {
      name: "Works",
      link: "#works",
      icon: <IconBriefcase className="h-4 w-4    text-white" />,
    },
    {
      name: "Projects",
      link: "#projects",
      icon: <IconSlideshow className="h-4 w-4    text-white" />,
    },
    {
      name: "Skills",
      link: "#skills",
      icon: <IconBracketsAngle className="h-4 w-4    text-white" />,
    },
    {
      name: "Contact",
      link: "#contact",
      icon: <IconMessage className="h-4 w-4    text-white" />,
    },
  ];
  return (
    <div className="relative  w-full">
      <FloatingNav navItems={navItems} />
    </div>
  );
}
