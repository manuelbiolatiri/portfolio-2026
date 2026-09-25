"use client";

import { useEffect, useState, useRef } from "react";
import { LIFECYCLE_STAGES } from "@/data/lifecycle";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function Lifecycle() {
  const [activeStageIndex, setActiveStageIndex] = useState(0);
  const stageRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

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

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  const scrollToStage = (index: number) => {
    const el = stageRefs.current[index];
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start relative">
        {/* Left Sticky Controller (Desktop) */}
        <aside className="lg:col-span-4 lg:sticky lg:top-24 space-y-6">
          <div className="border border-[var(--line)] bg-[var(--paper)] p-5">
            <div className="flex items-center justify-between text-xs font-mono text-[var(--muted)] border-b border-[var(--line-faint)] pb-3 mb-4">
              <span>LIFECYCLE MATRIX</span>
              <span className="text-[var(--accent)] font-semibold">
                [{LIFECYCLE_STAGES[activeStageIndex].step}/06]
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
                    className={`w-full text-left px-3 py-2.5 transition-all duration-200 flex items-center justify-between group ${
                      isActive
                        ? "bg-[var(--ink)] text-[var(--paper)]"
                        : "hover:bg-[var(--paper-hover)] text-[var(--ink-secondary)]"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span
                        className={`font-mono text-xs ${
                          isActive ? "text-[var(--paper)] font-bold" : "text-[var(--accent)]"
                        }`}
                      >
                        {stage.step}
                      </span>
                      <span className="font-serif text-sm tracking-tight">
                        {stage.name}
                      </span>
                    </div>

                    <span
                      className={`text-[10px] font-mono transition-opacity ${
                        isActive
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

            <div className="mt-5 pt-3 border-t border-[var(--line-faint)] text-[11px] font-mono text-[var(--muted)] flex items-center justify-between">
              <span>Scroll to navigate</span>
              <span className="text-[var(--accent)]">Synced Timeline</span>
            </div>
          </div>
        </aside>

        {/* Right Flowing Stages */}
        <div className="lg:col-span-8 space-y-6">
          {LIFECYCLE_STAGES.map((stage, idx) => {
            const isActive = idx === activeStageIndex;
            return (
              <div
                key={stage.step}
                ref={(el) => {
                  stageRefs.current[idx] = el;
                }}
                className={`p-6 sm:p-8 border transition-all duration-300 ${
                  isActive
                    ? "border-[var(--ink)] bg-[var(--paper-card)] shadow-sm -translate-y-0.5"
                    : "border-[var(--line-faint)] bg-[var(--paper)] opacity-85 hover:opacity-100"
                }`}
              >
                <div className="flex items-center justify-between border-b border-[var(--line-faint)] pb-3 mb-4">
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

                <p className="text-sm sm:text-base text-[var(--ink-secondary)] leading-relaxed mb-6 font-normal">
                  {stage.summary}
                </p>

                <div className="space-y-2.5 pt-4 border-t border-[var(--line-faint)]">
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
  );
}
