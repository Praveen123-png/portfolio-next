"use client";

import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const experiences = [
  {
    role: "Software Developer Intern",
    company: "Iunoware Pvt Ltd",
    duration: "July 2025 - Present",
    companyUrl: "https://iunoware.com",
    description:
      "Contributed to the development of full-stack web applications, working across frontend and backend features. Built reusable UI components, integrated APIs, and collaborated on improving application performance, maintainability, and user experience in a production environment.",
    tech: "Next.js • TypeScript • Tailwind • React.js • Node.js • REST APIs",
  },
  //   {
  //     role: "Full Stack Developer",
  //     company: "Product Studio",
  //     duration: "2021 — 2023",
  //     description:
  //       "Led the development of a real-time collaboration platform. Engineered a custom WebSocket infrastructure handling concurrent connections with sub-100ms latency.",
  //     tech: "React · Node.js · Redis · PostgreSQL · Docker",
  //   },
  //   {
  //     role: "Frontend Developer",
  //     company: "Digital Agency",
  //     duration: "2020 — 2021",
  //     description:
  //       "Delivered multiple high-fidelity, motion-rich marketing sites. Collaborated closely with design teams to implement pixel-perfect, accessible UI components.",
  //     tech: "Vue.js · GSAP · WebGL · SCSS · Headless CMS",
  //   },
];

export default function Experience() {
  const containerRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%",
          toggleActions: "play none none reverse",
        },
      });

      // Heading Animation
      tl.fromTo(
        headingRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
      );

      // Experience Items Animation
      if (listRef.current) {
        const items = gsap.utils.toArray(listRef.current.children);
        tl.fromTo(
          items,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.2,
            ease: "power2.out",
          },
          "-=0.5"
        );
      }
    },
    { scope: containerRef }
  );

  return (
    <section
      id="experience"
      ref={containerRef}
      className="relative py-32 px-6 md:px-12 lg:px-24 max-w-350 mx-auto"
    >
      {/* Section Heading */}
      <div ref={headingRef} className="mb-20 space-y-4">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
          Experience
        </h2>
        <p className="text-text-secondary text-base md:text-lg max-w-xl leading-relaxed opacity-80">
          Building real-world products with responsibility.
        </p>
      </div>

      {/* Experience List */}
      <div ref={listRef} className="flex flex-col relative space-y-12">
        {/* Continuous Line (Optional/Minimal) - Decided to go with just spacing/motion structure as per prompt "NOT heavy lines" */}

        {experiences.map((exp, index) => (
          <div
            key={index}
            className="group relative pl-0 md:pl-8 border-l-2 border-white/5 md:border-l-2 md:hover:border-accent/40 transition-colors duration-500 ease-out"
          >
            {/* Hover Accent Marker (Desktop) */}
            <div className="hidden md:block absolute -left-0.75 top-0 h-0 w-1 bg-accent group-hover:h-full transition-all duration-700 ease-in-out" />

            <div className="flex flex-col gap-3 group-hover:translate-x-2 transition-transform duration-500 ease-out">
              {/* Header: Role & Company */}
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 sm:gap-4">
                <h3 className="text-xl md:text-2xl font-bold text-foreground group-hover:text-accent transition-colors duration-300">
                  {exp.role}{" "}
                  <a
                    href={exp.companyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-text-secondary cursor-pointer font-normal text-lg ml-1"
                  >
                    at{" "}
                    <span className="hover:text-white transition-colors duration-200">
                      {exp.company}
                    </span>
                  </a>
                </h3>
                <span className="text-sm font-mono text-text-secondary/60 uppercase tracking-widest">
                  {exp.duration}
                </span>
              </div>

              {/* Description */}
              <p className="max-w-2xl text-base md:text-lg text-text-secondary leading-relaxed">
                {exp.description}
              </p>

              {/* Tech Stack */}
              <p className="text-xs md:text-sm font-mono text-text-secondary/50 mt-2">
                {exp.tech}
              </p>
            </div>
          </div>
        ))}

        {/* Optional Closing */}
        <div
          className="pt-8 opacity-0 animate-fade-in"
          style={{ opacity: 0 }} /* Animated via GSAP if needed, but simple is fine */
        >
          <p className="text-sm text-text-secondary/40 italic">
            Continuously refining my approach through real-world problem solving.
          </p>
        </div>
      </div>
    </section>
  );
}
