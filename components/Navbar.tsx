"use client";

import React, { useRef, useState, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Projects", href: "projects" },
  { name: "Skills", href: "skills" },
  { name: "Experience", href: "experience" },
  { name: "Contact", href: "contact" },
];

function scrollTo(href: string) {
  const section = document.getElementById(href);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
}

export default function Navbar() {
  const navRef = useRef(null);
  const sidebarRef = useRef(null);
  const sidebarLinksRef = useRef<(HTMLAnchorElement | null)[]>([]);
  const overlayRef = useRef(null);

  const [isOpen, setIsOpen] = useState(false);
  const tl = useRef<gsap.core.Timeline | null>(null);

  // Initial load animation for navbar
  useGSAP(
    () => {
      gsap.from(navRef.current, {
        y: -100,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        delay: 0.2,
      });
    },
    { scope: navRef }
  );

  useGSAP(
    () => {
      tl.current = gsap.timeline({ paused: true });

      tl.current
        .to(overlayRef.current, {
          duration: 0.5,
          opacity: 1,
          pointerEvents: "auto",
          ease: "power2.out",
        })
        .to(
          sidebarRef.current,
          {
            x: "0%",
            duration: 0.6,
            ease: "power3.inOut",
          },
          "-=0.4"
        )
        .fromTo(
          sidebarLinksRef.current,
          { x: 50, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.4, stagger: 0.1, ease: "power2.out" },
          "-=0.2"
        );
    },
    { scope: navRef }
  );

  // Handle Open/Close
  useEffect(() => {
    if (isOpen) {
      tl.current?.play();
      document.body.style.overflow = "hidden"; // Disable scroll
    } else {
      tl.current?.reverse();
      document.body.style.overflow = ""; // Enable scroll
    }
  }, [isOpen]);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  // Helper to add refs to array
  const addToRefs = (el: HTMLAnchorElement | null) => {
    if (el && !sidebarLinksRef.current.includes(el)) {
      sidebarLinksRef.current.push(el);
    }
  };

  return (
    <>
      <nav
        ref={navRef}
        className="fixed top-0 left-0 w-full z-50 py-6 px-6 md:px-12 mix-blend-difference text-foreground/90 transition-colors duration-300"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-end">
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                // href={link.href}
                onClick={() => scrollTo(link.href)}
                className="text-sm cursor-pointer font-medium tracking-wide text-foreground/70 hover:text-accent transition-colors duration-300 relative group uppercase"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-accent transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-foreground focus:outline-none ml-auto z-50 relative"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Sidebar Overlay */}
      <div
        ref={overlayRef}
        onClick={closeMenu}
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-20 opacity-0 pointer-events-none md:hidden"
      />

      {/* Mobile Sidebar */}
      <div
        ref={sidebarRef}
        className="fixed top-0 right-0 h-full w-[80%] max-w-sm bg-background border-l border-white/10 z-50 transform translate-x-full md:hidden flex flex-col justify-center px-8 shadow-2xl"
      >
        <div className="flex flex-col gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              onClick={() => {
                scrollTo(link.href);
                closeMenu();
              }}
              ref={addToRefs}
              className="text-2xl font-light tracking-wider text-foreground hover:text-accent transition-colors duration-300 uppercase"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
