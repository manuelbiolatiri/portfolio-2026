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
        { y: 80, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.1 }
      )
        .fromTo(
          lastNameRef.current,
          { y: 90, opacity: 0 },
          { y: 0, opacity: 1, duration: 1.1 },
          "-=0.8"
        )
        .fromTo(
          sublineRef.current,
          { opacity: 0, x: -30 },
          { opacity: 1, x: 0, duration: 0.8 },
          "-=0.6"
        )
        .fromTo(
          metaRef.current,
          { opacity: 0, y: 15 },
          { opacity: 1, y: 0, duration: 0.8 },
          "-=0.6"
        )
        .fromTo(
          narrativeRef.current,
          { opacity: 0, y: 25 },
          { opacity: 1, y: 0, duration: 0.8 },
          "-=0.5"
        );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="relative w-full pt-8 sm:pt-16 pb-12 sm:pb-20">
      {/* Monumental Typographic Layout (Inspired by ademola.adegbuyi.me) */}
      <div className="relative">
        {/* Right side role & scroll rail (Desktop) */}
        <div className="hidden lg:flex flex-col items-end gap-12 absolute top-4 right-0 z-10 select-none">
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

        {/* Huge Name Display */}
        <div className="flex flex-col">
          {/* First Name in Elegant Serif Italic */}
          <div className="overflow-hidden">
            <span
              ref={firstNameRef}
              className="font-serif italic font-normal text-6xl sm:text-8xl md:text-9xl lg:text-[10.5rem] tracking-tight text-[var(--ink)] leading-[0.95] block select-none"
            >
              Emmanuel
            </span>
          </div>

          {/* Subline bar between names (Like ademola.adegbuyi.me) */}
          <div
            ref={sublineRef}
            className="my-4 sm:my-6 flex items-center gap-3 font-mono text-[11px] sm:text-xs uppercase tracking-widest text-[var(--muted)]"
          >
            <span className="h-[1px] w-8 sm:w-16 bg-[var(--line-strong)]" />
            <span>Building serious systems, quietly. Based in Manchester.</span>
          </div>

          {/* Last Name in Monumental Bold Sans */}
          <div className="overflow-hidden">
            <span
              ref={lastNameRef}
              className="font-sans font-black text-6xl sm:text-8xl md:text-9xl lg:text-[10.5rem] tracking-tighter text-[var(--ink)] leading-[0.9] block select-none uppercase"
            >
              Biolatiri
            </span>
          </div>
        </div>
      </div>

      {/* Editorial Narrative & Direct CTAs */}
      <div ref={narrativeRef} className="mt-12 sm:mt-16 max-w-2xl">
        <p className="text-lg sm:text-xl text-[var(--ink-secondary)] leading-relaxed font-normal">
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

        <div className="mt-8 flex flex-wrap items-center gap-4">
          <a
            href="#work"
            className="px-6 py-3 border border-[var(--ink)] bg-[var(--ink)] text-[var(--paper)] hover:bg-[var(--accent)] hover:border-[var(--accent)] text-xs font-mono tracking-widest uppercase transition-all duration-150 inline-flex items-center gap-2 shadow-sm"
          >
            <span>View selected work</span>
            <span>↓</span>
          </a>
          <a
            href="#writing"
            className="px-6 py-3 border border-[var(--line)] bg-[var(--paper)] text-[var(--ink)] hover:border-[var(--ink)] text-xs font-mono tracking-widest uppercase transition-all duration-150 inline-flex items-center gap-2"
          >
            <span>Read my writing</span>
            <span>→</span>
          </a>
        </div>
      </div>
    </div>
  );
}
