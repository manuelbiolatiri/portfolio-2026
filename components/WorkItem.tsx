"use client";

import { useState } from "react";
import { WorkProject } from "@/data/work";

interface WorkItemProps {
  project: WorkProject;
  index: number;
}

export function WorkItem({ project, index }: WorkItemProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <article className="border-t border-[var(--line-faint)] py-10 transition-all duration-200 group">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start">
        {/* Left Column: Number & Domain */}
        <div className="lg:col-span-3 flex flex-col gap-2">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs font-semibold text-[var(--accent)] tracking-widest">
              0{index + 1}
            </span>
            <span className="h-px w-6 bg-[var(--line)]" />
            <span className="font-mono text-[11px] text-[var(--muted)] uppercase tracking-wider">
              {project.scope}
            </span>
          </div>

          <div className="font-mono text-xs text-[var(--muted)] mt-0.5">
            {project.metadata}
          </div>

          {project.highlight && (
            <div className="mt-2 inline-flex items-center gap-1.5 self-start px-2 py-0.5 border border-[var(--accent-border)] bg-[var(--accent-subtle)] text-[var(--accent)] text-[10px] font-mono uppercase tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
              Core Infrastructure
            </div>
          )}
        </div>

        {/* Right Column: Title, Narrative & Systems Details */}
        <div className="lg:col-span-9 flex flex-col gap-4">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
            <h3 className="font-serif text-2xl sm:text-3xl text-[var(--ink)] tracking-tight font-normal group-hover:text-[var(--accent)] transition-colors">
              {project.title}
            </h3>

            {project.link && (
              <a
                href={project.link}
                target={project.isExternal ? "_blank" : "_self"}
                rel={project.isExternal ? "noopener noreferrer" : undefined}
                className="inline-flex items-center gap-1.5 text-xs font-mono text-[var(--accent)] hover:text-[var(--accent-hover)] underline underline-offset-4"
              >
                <span>{project.linkText || "Visit system"}</span>
                <span className="text-sm">↗</span>
              </a>
            )}
          </div>

          <p className="text-base sm:text-lg text-[var(--ink-secondary)] leading-relaxed font-normal">
            {project.tagline}
          </p>

          <p className="text-sm text-[var(--muted)] leading-relaxed max-w-3xl">
            {project.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 pt-1">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="font-mono text-xs px-2.5 py-0.5 border border-[var(--line-faint)] text-[var(--ink-secondary)] bg-[var(--paper-card)]"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Collapsible Architecture & Engineering Notes */}
          <div className="mt-2 pt-3">
            <button
              type="button"
              onClick={() => setExpanded(!expanded)}
              className="inline-flex items-center gap-2 text-xs font-mono text-[var(--ink)] hover:text-[var(--accent)] focus:outline-none transition-colors border-b border-[var(--line)] hover:border-[var(--accent)] pb-0.5"
              aria-expanded={expanded}
            >
              <span>{expanded ? "Hide architectural notes" : "Inspect system breakdown"}</span>
              <span className="font-bold">{expanded ? "↑" : "↓"}</span>
            </button>

            {expanded && (
              <div className="mt-4 pt-4 border-t border-[var(--line-faint)] grid grid-cols-1 md:grid-cols-2 gap-6 bg-[var(--paper-card)] p-6 border border-[var(--line-faint)]">
                <div>
                  <h4 className="font-mono text-xs uppercase tracking-wider text-[var(--muted)] mb-3">
                    System Responsibilities
                  </h4>
                  <ul className="space-y-2 text-sm text-[var(--ink-secondary)]">
                    {project.points.map((pt, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <span className="text-[var(--accent)] font-mono text-xs mt-0.5">•</span>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {project.metrics && (
                  <div className="border-t md:border-t-0 md:border-l border-[var(--line-faint)] pt-4 md:pt-0 md:pl-6 flex flex-col justify-between">
                    <div>
                      <h4 className="font-mono text-xs uppercase tracking-wider text-[var(--muted)] mb-3">
                        Engineering Characteristics
                      </h4>
                      <div className="space-y-3">
                        {project.metrics.map((m, i) => (
                          <div key={i} className="flex flex-col">
                            <span className="font-mono text-[11px] text-[var(--muted)] uppercase">
                              {m.label}
                            </span>
                            <span className="font-mono text-sm text-[var(--ink)] font-medium">
                              {m.value}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {project.link && (
                      <div className="mt-6 pt-4 border-t border-[var(--line-faint)]">
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center w-full px-4 py-2 border border-[var(--ink)] font-mono text-xs text-[var(--ink)] hover:bg-[var(--ink)] hover:text-[var(--paper)] transition-colors"
                        >
                          Open {project.title} ↗
                        </a>
                      </div>
                    )}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
