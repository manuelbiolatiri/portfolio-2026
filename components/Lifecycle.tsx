"use client";

import { useEffect, useState, useRef } from "react";
import { LIFECYCLE_STAGES } from "@/data/lifecycle";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function Lifecycle() {
  const [activeStageIndex, setActiveStageIndex] = useState(0);
  const stageRefs = useRef<(HTMLDivElement | null)[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollWrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    const mm = gsap.matchMedia();

    // Desktop: Vertical scroll with left matrix
    mm.add("(min-width: 1024px)", () => {
      stageRefs.current.forEach((el, index) => {
        if (!el) return;

        ScrollTrigger.create({
          trigger: el,
          start: "top 60%",
          end: "bottom 60%",
          onEnter: () => setActiveStageIndex(index),
          onEnterBack: () => setActiveStageIndex(index),
        });
      });
    });

    // Mobile: Pinned Horizontal Scroll
    mm.add("(max-width: 1023px)", () => {
      if (!containerRef.current || !scrollWrapperRef.current) return;

      const totalWidth = scrollWrapperRef.current.scrollWidth;
      const viewportWidth = window.innerWidth;

      const scrollTween = gsap.to(scrollWrapperRef.current, {
        x: -(totalWidth - viewportWidth + 40), // 40px for margin/padding compensation
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          pin: true,
          scrub: 1,
          end: () => `+=${totalWidth}`,
        },
      });

      // Track active index based on horizontal position
      stageRefs.current.forEach((el, index) => {
        if (!el) return;
        ScrollTrigger.create({
          trigger: el,
          containerAnimation: scrollTween,
          start: "left center",
          end: "right center",
          onEnter: () => setActiveStageIndex(index),
          onEnterBack: () => setActiveStageIndex(index),
        });
      });
    });

    return () => {
      mm.revert();
    };
  }, []);

  const scrollToStage = (index: number) => {
    const el = stageRefs.current[index];
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <div className="w-full overflow-hidden" ref={containerRef}>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start relative">
        {/* Left Sticky Controller (Desktop Only) */}
        <aside className="hidden lg:block lg:col-span-4 lg:sticky lg:top-24 space-y-6">
          <div className="border border-[var(--line)] bg-[var(--paper)] p-5">
            <div className="flex items-center justify-between text-xs font-mono text-[var(--muted)] border-b border-[var(--line-faint)] pb-3 mb-4">
              <span>LIFECYCLE MATRIX</span>
              <span className="text-[var(--accent)] font-semibold">
                [{LIFECYCLE_STAGES[activeStageIndex]?.step || "01"}/0{LIFECYCLE_STAGES.length}]
              </span>
            </div>

            <div className="space-y-1">
              {LIFECYCLE_STAGES.map((stage, idx) => {
                const isActive = idx === activeStageIndex;
                return (
                  <button
                    key={stage.step}
                    type="button"
                    onClick={() => scrollToStage(idx)}
                    className={`w-full text-left px-3 py-2.5 transition-all duration-200 flex items-center justify-between group ${isActive
                        ? "bg-[var(--ink)] text-[var(--paper)]"
                        : "hover:bg-[var(--paper-hover)] text-[var(--ink-secondary)]"
                      }`}
                  >
                    <div className="flex items-center gap-3">
                      <span
                        className={`font-mono text-xs ${isActive ? "text-[var(--paper)] font-bold" : "text-[var(--accent)]"
                          }`}
                      >
                        {stage.step}
                      </span>
                      <span className="font-serif text-sm tracking-tight">
                        {stage.name}
                      </span>
                    </div>

                    <span
                      className={`text-[10px] font-mono transition-opacity ${isActive
                          ? "opacity-100 text-[var(--paper-subtle)]"
                          : "opacity-0 group-hover:opacity-100 text-[var(--muted)]"
                        }`}
                    >
                      {isActive ? "ACTIVE ●" : "JUMP →"}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </aside>

        {/* Right Flowing Stages */}
        <div className="lg:col-span-8">
          <div 
            ref={scrollWrapperRef}
            className="flex lg:block flex-nowrap gap-5 lg:gap-0 lg:space-y-6 w-max lg:w-auto"
          >
            {LIFECYCLE_STAGES.map((stage, idx) => {
              const isActive = idx === activeStageIndex;
              return (
                <div
                  key={stage.step}
                  ref={(el) => {
                    stageRefs.current[idx] = el;
                  }}
                  className={`flex-none w-[85vw] sm:w-[400px] lg:w-auto p-6 sm:p-8 border transition-all duration-300 ${isActive
                      ? "border-[var(--ink)] bg-[var(--paper-card)] shadow-sm lg:-translate-y-0.5"
                      : "border-[var(--line-faint)] bg-[var(--paper)] opacity-90 sm:opacity-85 hover:opacity-100"
                    }`}
                >
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[var(--line-faint)] pb-3 mb-4">
                  <div className="flex items-center gap-2 font-mono text-xs">
                    <span className="text-[var(--accent)] font-bold">{stage.step}</span>
                    <span className="text-[var(--line)]">/</span>
                    <span className="uppercase text-[var(--muted)] tracking-wider">Phase</span>
                  </div>

                  <span className="font-mono text-[11px] text-[var(--muted)]">
                    {stage.primaryArtifacts}
                  </span>
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl text-[var(--ink)] font-normal mb-2">
                  {stage.name}
                </h3>

                <p className="text-sm sm:text-base text-[var(--ink-secondary)] leading-relaxed mb-5 font-normal">
                  {stage.summary}
                </p>

                <div className="space-y-2 pt-3 border-t border-[var(--line-faint)]">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-[var(--muted)] block">
                    Execution &amp; Core Disciplines
                  </span>
                  <ul className="space-y-2">
                    {stage.details.map((detail, dIdx) => (
                      <li
                        key={dIdx}
                        className="flex items-start gap-2.5 text-xs sm:text-sm text-[var(--ink-secondary)] leading-relaxed"
                      >
                        <span className="font-mono text-xs text-[var(--accent)] mt-0.5">•</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
          </div>
        </div>
      </div>
    </div>
  );
}
