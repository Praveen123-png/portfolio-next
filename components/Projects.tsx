"use client";

import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";

// Register ScrollTrigger
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const projects = [
  {
    title: "Iunoware",
    description:
      "Modernized a legacy front-end by migrating from HTML & Bootstrap to React and Tailwind, resulting in a more scalable, consistent, and maintainable UI system. Reworked key homepage sections and hero layout to better align with brand identity and modern UX principles. Built modular, reusable components that simplified state management and significantly reduced code complexity, delivering a responsive, production-ready solution as part of a small, fast-moving team.",
    tech: ["React", "JavaScript", "Tailwind", "GSAP"],
    link: "https://iunoware.com",
    github: "#",
  },
  {
    title: "Sai Constructions",
    description:
      "Built a multi-page construction company website featuring services, project highlights, and contact sections. Crafted smooth GSAP-powered hero animations, scroll reveals, and horizontal interactions while maintaining performance and responsiveness across devices. Collaborated closely in a two-member team to deliver a clean, modern interface with strong client approval.",
    tech: ["React", "JavaScript", "Tailwind", "GSAP"],
    link: "https://saiconstructiongroups.com/",
    github: "#",
  },
  {
    title: "Terra Loom",
    description:
      "Delivered an end-to-end client website, from layout implementation to deployment. Built SEO-optimized product pages with smooth scrolling, lazy loading, and performance-focused image handling. Enhanced user engagement through subtle animations, form validation, and responsive design, resulting in a polished experience that met performance, SEO, and cross-device standards.",
    tech: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    link: "https://terraloomyash.com/",
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
        // ".project-card",
        projectsRef.current?.children || [],
        // { y: 100, opacity: 0 },
        // { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.3, stagger: 0.45, ease: "power3" },
        "-=0.7"
      );
    },
    { scope: containerRef }
  );

  return (
    <section
      id="projects"
      ref={containerRef}
      className="relative min-h-screen py-10 px-6 md:px-12 lg:px-24 max-w-350 mx-auto flex flex-col justify-center"
    >
      {/* Heading */}
      <div className="mb-20" ref={headingRef}>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground opacity-0">
          Built to Perform
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
            className="project-card group relative flex flex-col items-start border-t border-white/10 pt-10 transition-all duration-500"
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
            <p className="mt-6 md:text-md text-text-secondary max-w-3xl leading-relaxed">
              {project.description}
            </p>

            {/* Actions */}
            <div className="mt-8 flex items-center gap-8">
              {project.link === "" ? (
                <a
                  // href={project.link}
                  className={`${
                    project.link === "" ? "cursor-not-allowed" : "hover:text-accent"
                  } flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-foreground transition-transform duration-300 transform translate-y-0 group-hover:translate-x-2`}
                >
                  View Project <ArrowUpRight size={16} />
                </a>
              ) : (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${
                    project.link === "" ? "cursor-not-allowed" : "hover:text-accent"
                  } flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-foreground transition-transform duration-300 transform translate-y-0 group-hover:translate-x-2`}
                >
                  View Project <ArrowUpRight size={16} />
                </a>
              )}

              {/* <a
                href={project.github}
                className="flex cursor-not-allowed items-center gap-2 text-sm font-bold uppercase tracking-wider text-foreground/50 transition-transform duration-300 transform translate-y-0 group-hover:translate-x-2 delay-75"
              >
                GitHub <Github size={16} />
              </a> */}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
