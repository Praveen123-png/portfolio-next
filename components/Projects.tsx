"use client";

import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight, Github } from "lucide-react";

// Register ScrollTrigger
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const projects = [
  {
    title: "Vanta / Fin-tech Dashboard",
    description: "High-performance real-time financial tracking for enterprise clients.",
    tech: ["Next.js", "TypeScript", "D3.js", "WebSockets"],
    link: "#",
    github: "#",
  },
  {
    title: "Orbit / Design System",
    description: "A comprehensive React-based design system for scalable UI development.",
    tech: ["React", "Storybook", "Tailwind", "Rollup"],
    link: "#",
    github: "#",
  },
  {
    title: "Echo / Secure Messaging",
    description: "End-to-end encrypted chat platform focused on privacy and latency.",
    tech: ["Node.js", "Socket.io", "Redis", "WebRTC"],
    link: "#",
    github: "#",
  },
];

export default function Projects() {
  const containerRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });

      // for heading
      tl.fromTo(
        headingRef.current?.children || [],
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
      );

      // for projects
      tl.fromTo(
        ".project-card",
        // projectsRef.current?.children || [],
        // { y: 100, opacity: 0 },
        // { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: "power2.out" },
        "-=0.4"
      );
    },
    { scope: containerRef }
  );

  return (
    <section
      id="projects"
      ref={containerRef}
      className="relative min-h-screen py-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto flex flex-col justify-center"
    >
      {/* Heading */}
      <div className="mb-20" ref={headingRef}>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground opacity-0">
          Selected Works
        </h2>
        <p className="mt-4 text-text-secondary text-sm md:text-md uppercase tracking-widest max-w-md">
          Engineering focused on performance and scalability
        </p>
      </div>

      {/* Projects List */}
      <div className="grid grid-cols-1 gap-16 md:gap-24" ref={projectsRef}>
        {projects.map((project, index) => (
          <div
            key={index}
            className="project-card group relative flex flex-col items-start border-t border-white/10 pt-10 transition-all duration-500 opacity-0"
          >
            {/* Header / Title */}
            <div className="w-full flex flex-col md:flex-row md:items-baseline md:justify-between gap-4">
              <h3 className="text-2xl md:text-3xl font-semibold text-foreground group-hover:text-accent transition-colors duration-300">
                {project.title}
              </h3>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 md:gap-4">
                {project.tech.map((t, i) => (
                  <span
                    key={i}
                    className="text-xs text-text-secondary/60 font-mono uppercase tracking-wider"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Description */}
            <p className="mt-6 text-lg md:text-xl text-text-secondary max-w-3xl leading-relaxed">
              {project.description}
            </p>

            {/* Actions */}
            <div className="mt-8 flex items-center gap-8">
              <a
                href={project.link}
                className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-foreground hover:text-accent transition-transform duration-300 transform translate-y-0 group-hover:translate-x-2"
              >
                View Project <ArrowUpRight size={16} />
              </a>
              <a
                href={project.github}
                className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-foreground/50 hover:text-foreground transition-transform duration-300 transform translate-y-0 group-hover:translate-x-2 delay-75"
              >
                GitHub <Github size={16} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
