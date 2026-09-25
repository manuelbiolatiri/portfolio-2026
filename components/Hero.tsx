"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const firstNameRef = useRef<HTMLSpanElement>(null);
  const lastNameRef = useRef<HTMLSpanElement>(null);
  const sublineRef = useRef<HTMLDivElement>(null);
  const metaRef = useRef<HTMLDivElement>(null);
  const narrativeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(
        firstNameRef.current,
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.0 }
      )
        .fromTo(
          lastNameRef.current,
          { y: 60, opacity: 0 },
          { y: 0, opacity: 1, duration: 1.0 },
          "-=0.75"
        )
        .fromTo(
          sublineRef.current,
          { opacity: 0, x: -20 },
          { opacity: 1, x: 0, duration: 0.75 },
          "-=0.6"
        )
        .fromTo(
          metaRef.current,
          { opacity: 0, y: 15 },
          { opacity: 1, y: 0, duration: 0.75 },
          "-=0.6"
        )
        .fromTo(
          narrativeRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.75 },
          "-=0.5"
        );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="relative w-full pt-6 sm:pt-16 pb-8 sm:pb-20">
      {/* Monumental Typographic Layout (Responsive) */}
      <div className="relative">
        {/* Right side role & scroll rail (Desktop only) */}
        <div className="hidden lg:flex flex-col items-end gap-12 absolute top-2 right-0 z-10 select-none">
          <div ref={metaRef} className="text-right">
            <span className="font-mono text-[11px] uppercase tracking-widest text-[var(--muted)] block">
              Senior Software Engineer
            </span>
            <span className="font-mono text-[10px] text-[var(--accent)] mt-0.5 block">
              Payment &amp; Wallet Systems
            </span>
          </div>

          <div className="flex flex-col items-center gap-3">
            <span className="font-mono text-[9px] uppercase tracking-widest text-[var(--muted)] [writing-mode:vertical-lr]">
              SCROLL
            </span>
            <div className="w-[1px] h-16 bg-[var(--line)] relative overflow-hidden">
              <div className="w-full h-5 bg-[var(--accent)] absolute top-0 animate-[bounce_2s_infinite]" />
            </div>
          </div>
        </div>

        {/* Name Display */}
        <div className="flex flex-col">
          {/* First Name in Elegant Serif Italic */}
          <div className="overflow-hidden">
            <span
              ref={firstNameRef}
              className="font-serif italic font-normal text-[3.25rem] sm:text-7xl md:text-8xl lg:text-[10rem] tracking-tight text-[var(--ink)] leading-[0.98] sm:leading-[0.95] block select-none"
            >
              Emmanuel
            </span>
          </div>

          {/* Last Name in Bold Sans (Title Case like Adegbuyi, not all-caps black box) */}
          <div className="overflow-hidden mt-1 sm:mt-2">
            <span
              ref={lastNameRef}
              className="font-sans font-bold sm:font-black text-[3.25rem] sm:text-7xl md:text-8xl lg:text-[10rem] tracking-tight sm:tracking-tighter text-[var(--ink)] leading-[0.95] sm:leading-[0.9] block select-none"
            >
              Biolatiri
            </span>
          </div>

          {/* Subline bar (Flows cleanly below the full name on mobile, between/below on desktop) */}
          <div
            ref={sublineRef}
            className="mt-4 sm:mt-6 flex items-center gap-3 font-mono text-[11px] sm:text-xs uppercase tracking-wider sm:tracking-widest text-[var(--muted)]"
          >
            <span className="h-[1px] w-6 sm:w-14 bg-[var(--line-strong)] shrink-0" />
            <span className="leading-snug">
              Building reliable systems. Based in Manchester.
            </span>
          </div>
        </div>
      </div>

      {/* Editorial Narrative & Inline CTAs */}
      <div ref={narrativeRef} className="mt-8 sm:mt-14 max-w-2xl">
        <p className="text-base sm:text-xl text-[var(--ink-secondary)] leading-relaxed font-normal">
          I work across backend architecture, payment pipelines, distributed services and production infrastructure. Currently engineering{" "}
          <a
            href="https://walletkit.app"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--accent)] underline underline-offset-4 hover:text-[var(--accent-hover)] font-medium"
          >
            walletKit
          </a>{" "}
          and writing about system ownership and digital pass infrastructure.
        </p>

        {/* Clean, compact CTA row on mobile instead of giant stacked blocks */}
        <div className="mt-6 sm:mt-8 flex flex-row items-center gap-3">
          <a
            href="#work"
            className="flex-1 sm:flex-initial px-4 py-2.5 sm:px-6 sm:py-3 border border-[var(--ink)] bg-[var(--ink)] text-[var(--paper)] hover:bg-[var(--accent)] hover:border-[var(--accent)] text-[11px] sm:text-xs font-mono tracking-wider sm:tracking-widest uppercase text-center transition-all duration-150 inline-flex items-center justify-center gap-2 shadow-sm"
          >
            <span>View work</span>
            <span>↓</span>
          </a>
          <a
            href="#writing"
            className="flex-1 sm:flex-initial px-4 py-2.5 sm:px-6 sm:py-3 border border-[var(--line)] bg-[var(--paper)] text-[var(--ink)] hover:border-[var(--ink)] text-[11px] sm:text-xs font-mono tracking-wider sm:tracking-widest uppercase text-center transition-all duration-150 inline-flex items-center justify-center gap-2"
          >
            <span>Writing</span>
            <span>→</span>
          </a>
        </div>
      </div>
    </div>
  );
}
