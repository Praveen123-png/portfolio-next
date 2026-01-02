"use client";

import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const skillGroups = [
  {
    category: "Front-End",
    skills: ["HTML5 ", "CSS3 ", "JavaScript (ES6+)", "TypeScript", "React.js", "Next.js"],
  },
  {
    category: "Backend & Data",
    skills: [
      "Node.js",
      "Express.js",
      "RESTful APIs",
      "MongoDB / NoSQL",
      "PostgreSQL",
      "Authentication (JWT/OAuth)",
    ],
  },
  {
    category: "Frameworks / Libraries",
    skills: [
      "Tailwind CSS",
      "GSAP (animation)",
      "Bootstrap",
      //   "Framer Motion",
      //   "Canvas API",
      //   "Svelte (Experimental)",
      //   "WebGL / Three.js Basics",
      //   "Micro-interactions",
    ],
  },
  {
    category: "Tooling & Workflow",
    skills: [
      "Git",
      "GitHub",
      "Postman",
      //   "Webpack / Vite",
      //   "CI/CD Pipelines",
      //   "Docker Basics",
      //   "Figma (Dev Handoff)",
    ],
  },
];

export default function Skills() {
  const containerRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      });

      tl.fromTo(
        headingRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
      );

      tl.fromTo(
        ".skill-group",
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: "power2.out" },
        "-=0.4"
      );
    },
    { scope: containerRef }
  );

  return (
    <section
      id="skills"
      ref={containerRef}
      className="relative min-h-[80vh] py-24 px-6 md:px-12 lg:px-24 max-w-350 mx-auto flex flex-col justify-center"
    >
      <div className="mb-20">
        <h2
          ref={headingRef}
          className="text-4xl md:text-5xl font-bold tracking-tight text-foreground opacity-0"
        >
          Capabilities
        </h2>
        <p className="mt-4 text-text-secondary text-sm md:text-md uppercase tracking-widest max-w-md">
          Technical Landscape & Core Strengths
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {skillGroups.map((group, index) => (
          <div key={index} className="skill-group flex flex-col gap-6 opacity-0">
            <h3 className="text-xl font-semibold text-foreground border-b border-foreground/10 pb-4">
              {group.category}
            </h3>
            <ul className="flex flex-col gap-3">
              {group.skills.map((skill, i) => (
                <li
                  key={i}
                  className="text-text-secondary text-sm md:text-base cursor-default hover:text-accent transition-colors duration-200"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
