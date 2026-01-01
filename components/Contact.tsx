"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Github, Linkedin, Mail, Phone, MessageSquare } from "lucide-react";

export default function Contact() {
  const containerRef = useRef<HTMLOptionElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subtextRef = useRef<HTMLParagraphElement>(null);
  const mailBtnRef = useRef<HTMLAnchorElement>(null);
  const secondaryLineRef = useRef<HTMLParagraphElement>(null);
  const socialRefs = useRef<HTMLAnchorElement[]>([]);

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(
        headingRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 1.2 }
      )
        .fromTo(
          subtextRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 1, delay: 0.1 }
        )
        .fromTo(
          mailBtnRef.current,
          { opacity: 0, scale: 0.9 },
          { opacity: 1, scale: 1, duration: 0.8 },
          "-=0.5"
        )
        .fromTo(
          secondaryLineRef.current,
          { opacity: 0, y: 10 },
          { opacity: 1, y: 0, duration: 0.6 },
          "-=0.4"
        )
        .fromTo(
          socialRefs.current,
          { opacity: 0, y: 10 },
          { opacity: 1, y: 0, duration: 0.6, stagger: 0.1 },
          "-=0.4"
        );
    },
    { scope: containerRef }
  );

  //   const handleHover = (e: React.MouseEvent<HTMLAnchorElement>, isEnter: boolean) => {
  //     gsap.to(e.currentTarget, { scale: isEnter ? 1.05 : 1, duration: 0.3 });
  //   };

  return (
    <section
      ref={containerRef}
      className="relative py-24 px-6 md:px-12 lg:px-24 max-w-5xl mx-auto"
    >
      <h2 ref={headingRef} className="text-3xl md:text-5xl font-bold mb-4">
        Let&apos;s Connect!
      </h2>
      <p ref={subtextRef} className="text-text-secondary mb-8 max-w-xl">
        If you&apos;re building something solid and need a sharp developer, let&apos;s
        talk.
      </p>

      <a
        ref={mailBtnRef}
        target="_blank"
        href="https://mail.google.com/mail/?view=cm&fs=1&to=vppraveenkumar2610@gmail.com"
        // onMouseEnter={(e) => handleHover(e, true)}
        // onMouseLeave={(e) => handleHover(e, false)}
        className="inline-flex items-center gap-2 px-8 py-3 border border-foreground/20 rounded-sm text-sm font-bold uppercase tracking-wider hover:border-accent transition-all duration-300"
      >
        <Mail size={18} /> Send me an Email
      </a>

      <p ref={secondaryLineRef} className="mt-6 text-sm text-text-secondary">
        Or connect with me directly:
      </p>

      <div className="flex gap-4 mt-2">
        {[
          { icon: <Github size={18} />, link: "https://github.com/Praveen123-png" },
          {
            icon: <Linkedin size={18} />,
            link: "https://linkedin.com/in/praveen-kumar-v-p",
          },
          //   { icon: <Mail size={18} />, link: "https://mail.google.com/mail/?view=cm&fs=1&to=vppraveenkumar2610@gmail.com" },
          { icon: <MessageSquare size={18} />, link: "https://wa.me/919003710091" },
          { icon: <Phone size={18} />, link: "tel:+919003710091" },
        ].map((item, i) => (
          <a
            key={i}
            ref={(el) => {
              if (el) socialRefs.current[i] = el;
            }}
            href={item.link}
            target="_blank"
            // onMouseEnter={(e) => handleHover(e, true)}
            // onMouseLeave={(e) => handleHover(e, false)}
            className="p-2 border border-foreground/20 rounded-sm hover:border-accent hover:text-accent transition-all duration-300"
            aria-label="Social Link"
          >
            {item.icon}
          </a>
        ))}
      </div>

      <p className="mt-12 text-xs text-text-secondary text-center">
        © {new Date().getFullYear()} Praveen&apos;s Portfolio. All rights reserved. Made
        with Love 🩵 & Passion
      </p>
    </section>
  );
}
