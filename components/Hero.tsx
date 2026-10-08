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
      </div>

      {/* Name Display */}
      <div className="flex flex-col items-center sm:items-start text-center sm:text-left mt-10">
        <div className="overflow-hidden">
          <span
            ref={firstNameRef}
            className="font-sans font-semibold text-5xl sm:text-7xl md:text-8xl lg:text-9xl tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-400 leading-[1.1] block select-none"
          >
            Emmanuel Biolatiri
          </span>
        </div>

        <div
          ref={sublineRef}
          className="mt-6 flex flex-col sm:flex-row items-center sm:items-center gap-3 font-sans text-sm sm:text-base text-[var(--muted)]"
        >
          <span className="px-3 py-1 rounded-full border border-[var(--line-strong)] bg-[var(--line-faint)] text-[var(--ink-secondary)] text-xs font-medium">
            Senior Software Engineer
          </span>
          <span className="hidden sm:block text-[var(--line-strong)]">•</span>
          <span className="leading-snug">
            Building reliable systems. Based in Manchester.
          </span>
        </div>
      </div>

      {/* Narrative & CTAs */}
      <div ref={narrativeRef} className="mt-8 sm:mt-12 max-w-2xl text-center sm:text-left flex flex-col items-center sm:items-start">
        <p className="text-base sm:text-lg text-[var(--ink-secondary)] leading-relaxed font-normal">
          I work across backend architecture, payment pipelines, distributed services and production infrastructure. Currently building{" "}
          <a
            href="https://walletkit.app"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--ink)] hover:text-white transition-colors underline underline-offset-4 decoration-[var(--line-strong)] hover:decoration-white font-medium"
          >
            walletKit
          </a>.
        </p>

        <div className="mt-8 sm:mt-10 flex flex-row items-center gap-4">
          <a
            href="#work"
            className="px-6 py-3 rounded-full bg-white text-black hover:bg-zinc-200 text-sm font-medium transition-all duration-200 shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]"
          >
            View Work
          </a>
          <a
            href="#writing"
            className="px-6 py-3 rounded-full border border-[var(--line-strong)] bg-transparent text-white hover:bg-[var(--line-faint)] text-sm font-medium transition-all duration-200"
          >
            Writing →
          </a>
        </div>
      </div>
    </div>
  );
}
