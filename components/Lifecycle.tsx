"use client";

import { useState } from "react";
import { LIFECYCLE_STAGES } from "@/data/lifecycle";

export function Lifecycle() {
  const [activeStep, setActiveStep] = useState<string>("01");
  const currentStage = LIFECYCLE_STAGES.find((s) => s.step === activeStep) || LIFECYCLE_STAGES[0];

  return (
    <div className="w-full">
      {/* Editorial progression bar (Desktop / Tablet) */}
      <div className="border border-[var(--line)] bg-[var(--paper)]">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 divide-x divide-y lg:divide-y-0 divide-[var(--line)]">
          {LIFECYCLE_STAGES.map((stage) => {
            const isActive = stage.step === activeStep;
            return (
              <button
                key={stage.step}
                type="button"
                onClick={() => setActiveStep(stage.step)}
                className={`p-4 text-left transition-all duration-150 flex flex-col justify-between min-h-[100px] group ${
                  isActive
                    ? "bg-[var(--ink)] text-[var(--paper)] shadow-sm"
                    : "hover:bg-[var(--paper-hover)] text-[var(--ink)]"
                }`}
                aria-pressed={isActive}
              >
                <div className="flex items-center justify-between w-full font-mono text-xs">
                  <span
                    className={
                      isActive
                        ? "text-[var(--paper-subtle)] font-bold"
                        : "text-[var(--accent)] font-semibold"
                    }
                  >
                    {stage.step}
                  </span>
                  <span
                    className={`text-[10px] font-mono uppercase tracking-widest ${
                      isActive ? "text-[var(--paper-subtle)] opacity-70" : "text-[var(--muted)]"
                    }`}
                  >
                    Phase
                  </span>
                </div>

                <div className="mt-2">
                  <span className="font-serif text-lg tracking-tight font-medium block">
                    {stage.name}
                  </span>
                  <span
                    className={`text-[11px] line-clamp-1 block mt-0.5 ${
                      isActive ? "text-neutral-300" : "text-[var(--muted)]"
                    }`}
                  >
                    {stage.summary.split(",")[0]}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Stage Detail Panel */}
        <div className="border-t border-[var(--line)] p-6 sm:p-8 bg-[var(--paper-card)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start">
            {/* Stage Summary */}
            <div className="lg:col-span-5 flex flex-col gap-3">
              <div className="flex items-center gap-2 font-mono text-xs text-[var(--accent)]">
                <span>Stage [{currentStage.step} of 06]</span>
                <span className="h-px w-4 bg-[var(--line)]" />
                <span className="text-[var(--muted)] uppercase">Engineering Lifecycle</span>
              </div>

              <h4 className="font-serif text-3xl text-[var(--ink)] font-normal">
                {currentStage.name}
              </h4>

              <p className="text-base text-[var(--ink-secondary)] leading-relaxed">
                {currentStage.summary}
              </p>

              <div className="mt-2 pt-3 border-t border-[var(--line)]">
                <span className="font-mono text-[11px] uppercase tracking-wider text-[var(--muted)] block">
                  Core Outputs & Artifacts
                </span>
                <span className="font-mono text-xs text-[var(--accent)] mt-1 block">
                  {currentStage.primaryArtifacts}
                </span>
              </div>
            </div>

            {/* Stage Execution Details */}
            <div className="lg:col-span-7 bg-[var(--paper)] p-5 border border-[var(--line)]">
              <span className="font-mono text-xs uppercase tracking-wider text-[var(--muted)] block mb-3">
                Methodology & System Execution
              </span>
              <ul className="space-y-3">
                {currentStage.details.map((detail, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-[var(--ink-secondary)] leading-relaxed">
                    <span className="font-mono text-xs text-[var(--accent)] font-bold mt-0.5">
                      0{idx + 1}
                    </span>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Footnote context */}
      <div className="mt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs font-mono text-[var(--muted)]">
        <span>From initial product discovery through to production scaling and multi-region reliability.</span>
        <span className="text-[var(--ink-secondary)]">Click any stage to inspect practices</span>
      </div>
    </div>
  );
}
