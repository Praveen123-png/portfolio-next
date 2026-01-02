"use client";

import React, { useRef } from "react";
// import Link from "next/link";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Github, Linkedin, Download } from "lucide-react";

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const nameRef = useRef<HTMLDivElement>(null);
  const taglineLine1Ref = useRef<HTMLSpanElement>(null);
  const taglineLine2Ref = useRef<HTMLSpanElement>(null);
  const subtextRef = useRef<HTMLParagraphElement>(null);
  const ctaContainerRef = useRef<HTMLDivElement>(null);
  const workBtnRef = useRef<HTMLAnchorElement>(null);
  const resumeBtnRef = useRef<HTMLAnchorElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      // Name reveal
      tl.fromTo(
        nameRef.current,
        { opacity: 0, x: -20 },
        { opacity: 1, x: 0, duration: 1.5, ease: "power2.out" }
      );

      // Tagline Reveal
      tl.fromTo(
        [taglineLine1Ref.current, taglineLine2Ref.current],
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, stagger: 0.15, ease: "power4.out" },
        "-=1.0"
      );

      // Subtext Reveal
      tl.fromTo(
        subtextRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 1 },
        "-=0.8"
      );

      // CTA Reveal
      tl.fromTo(
        ctaContainerRef.current?.children || [],
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.1 },
        "-=0.6"
      );
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24 max-w-350 mx-auto overflow-hidden bg-transparent"
    >
      <div ref={nameRef} className="absolute top-30 left-6 md:left-12 lg:left-24">
        <span className="text-lg md:text-2xl tracking-widest text-white/80 hover:text-accent transition-colors duration-500 cursor-default ">
          I&apos;m Praveen Kumar V P
        </span>
      </div>

      <div className="flex flex-col items-start max-w-5xl z-10">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold">
          <span ref={taglineLine1Ref} className="block">
            A passionate
          </span>
          <span ref={taglineLine2Ref} className="block text-white/90">
            Full-stack developer
          </span>
        </h1>

        <p
          ref={subtextRef}
          className="mt-8 max-w-xl text-md md:text-lg text-text-secondary leading-relaxed font-light opacity-0"
        >
          I build modern web interfaces and full-stack applications, with a strong focus
          on performance and detail.
        </p>

        {/* CTAs */}
        <div ref={ctaContainerRef} className="mt-12 flex flex-wrap gap-6">
          <a
            href="https://github.com/Praveen123-png"
            target="_blank"
            ref={workBtnRef}
            className="group relative px-6 h-12 py-3 border border-foreground/20 text-foreground text-sm font-bold uppercase tracking-wider overflow-hidden rounded-sm hover:border-accent transition-colors duration-300"
          >
            <span className="relative z-10 group-hover:text-accent transition-colors duration-200">
              <Github className="inline" size={18} /> GitHub
            </span>
          </a>

          <a
            href="https://www.linkedin.com/in/praveen-kumar-v-p-5ba261293/"
            target="_blank"
            ref={workBtnRef}
            className="group relative px-6 h-12 py-3 border border-foreground/20 text-foreground text-sm font-bold uppercase tracking-wider overflow-hidden rounded-sm hover:border-accent transition-colors duration-300"
          >
            <span className="relative z-10 group-hover:text-accent transition-colors duration-200">
              <Linkedin className="inline -translate-y-0.5" size={18} /> LinkedIn
            </span>
          </a>

          <a
            href="/resume/praveenkumarvp-resume.pdf"
            download
            target="_blank"
            ref={resumeBtnRef}
            className="group relative px-6 h-12 py-3 border border-foreground/20 text-foreground text-sm font-bold uppercase tracking-wider overflow-hidden rounded-sm hover:border-accent transition-colors duration-300"
          >
            <span className="relative z-10 group-hover:text-accent transition-colors duration-200">
              <Download className="inline" size={18} /> Download CV
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
