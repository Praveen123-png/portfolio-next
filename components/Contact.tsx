"use client";

import React, { useRef } from "react";
// import gsap from "gsap";
// import { useGSAP } from "@gsap/react";
import { Github, Linkedin, Mail, Phone, MessageCircleMore } from "lucide-react";

export default function Contact() {
  const containerRef = useRef<HTMLOptionElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subtextRef = useRef<HTMLParagraphElement>(null);
  const mailBtnRef = useRef<HTMLAnchorElement>(null);
  // const secondaryLineRef = useRef<HTMLParagraphElement>(null);
  const socialRefs = useRef<HTMLAnchorElement[]>([]);

  // useGSAP(
  //   () => {
  //     const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

  //     tl.fromTo(
  //       headingRef.current,
  //       { opacity: 0, y: 40 },
  //       { opacity: 1, y: 0, duration: 0.3, ease: "power3" }
  //     )
  //       .fromTo(
  //         subtextRef.current,
  //         { opacity: 0, y: 20 },
  //         { opacity: 1, y: 0, duration: 0.3, ease: "power3", delay: 0.1 }
  //       )
  //       .fromTo(
  //         mailBtnRef.current,
  //         { y: 50, opacity: 0 },
  //         { y: 0, opacity: 1, duration: 0.3, ease: "power3" },
  //         "-=0.5"
  //       )
  //       .fromTo(
  //         secondaryLineRef.current,
  //         { opacity: 0, y: 10 },
  //         { opacity: 1, y: 0, duration: 0.3, ease: "power3" },
  //         "-=0.4"
  //       )
  //       .fromTo(
  //         socialRefs.current,
  //         { opacity: 0, y: 10 },
  //         { opacity: 1, y: 0, duration: 0.3, ease: "power3", stagger: 0.1 },
  //         "-=0.4"
  //       );
  //   },
  //   { scope: containerRef }
  // );

  //   const handleHover = (e: React.MouseEvent<HTMLAnchorElement>, isEnter: boolean) => {
  //     gsap.to(e.currentTarget, { scale: isEnter ? 1.05 : 1, duration: 0.3 });
  //   };

  return (
    <section
      ref={containerRef}
      id="contact"
      className="relative py-24 px-6 md:px-12 lg:px-24 max-w-350 mx-auto"
    >
      <div className="flex flex-col justify-center items-center gap-8">
        <div className="">
          <h2
            ref={headingRef}
            className="text-3xl text-center md:text-5xl font-bold mb-4"
          >
            Let&apos;s Connect!
          </h2>
          <p ref={subtextRef} className="text-text-secondary text-center mb-8 max-w-xl">
            If you&apos;re building something solid and need a sharp developer, let&apos;s
            talk.
          </p>

          <div className="flex flex-col gap-4 items-center justify-center">
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
          </div>
        </div>

        <div>
          {/* <p ref={secondaryLineRef} className="mt-6 text-sm text-text-secondary">
            Or connect with me directly:
          </p> */}

          <h2 ref={headingRef} className="text-lg md:text-xl text-center font-bold mb-4">
            Or connect with me directly:
          </h2>

          <div className="flex justify-center items-center gap-4 mt-2">
            {[
              { icon: <Github size={18} />, link: "https://github.com/Praveen123-png" },
              {
                icon: <Linkedin size={18} />,
                link: "https://linkedin.com/in/praveen-kumar-v-p",
              },
              //   { icon: <Mail size={18} />, link: "https://mail.google.com/mail/?view=cm&fs=1&to=vppraveenkumar2610@gmail.com" },
              {
                icon: <MessageCircleMore size={18} />,
                link: "https://wa.me/919003710091?text=Hi%20Praveen!%20I%20came%20across%20your%20portfolio%20and%20would%20love%20to%20discuss%20a%20potential%20project%20or%20collaboration.",
              },
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
                className="p-4 border border-foreground/20 rounded-sm hover:border-accent hover:text-accent transition-all duration-300"
                aria-label="Social Link"
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      <p className="mt-12 text-xs text-text-secondary text-center">
        © {new Date().getFullYear()} Praveen&apos;s Portfolio. All rights reserved. Made
        with Love 🩵 & Passion
      </p>
    </section>
  );
}
