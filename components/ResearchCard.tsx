import { ResearchPublication } from "@/data/writing";

interface ResearchCardProps {
  publication: ResearchPublication;
}

export function ResearchCard({ publication }: ResearchCardProps) {
  return (
    <div className="border border-[var(--line)] bg-[var(--paper-card)] p-6 sm:p-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[var(--line)] pb-4 mb-4">
        <div className="flex items-center gap-3">
          <span className="font-mono text-xs text-[var(--accent)] font-semibold uppercase tracking-wider">
            Academic Literature
          </span>
          <span className="h-px w-4 bg-[var(--line)]" />
          <span className="font-mono text-xs text-[var(--muted)]">
            Peer-Reviewed Elsevier Journal
          </span>
        </div>
        <div className="font-mono text-xs text-[var(--ink)] bg-[var(--paper)] px-2.5 py-1 border border-[var(--line)] self-start sm:self-auto">
          {publication.metadata}
        </div>
      </div>

      <div className="space-y-4">
        <h4 className="font-serif text-xl sm:text-2xl text-[var(--ink)] font-normal leading-snug">
          {publication.title}
        </h4>

        <p className="text-sm sm:text-base text-[var(--ink-secondary)] leading-relaxed font-sans">
          {publication.abstractIntro}
        </p>

        <div className="pt-2 flex flex-wrap items-center gap-2">
          {publication.topics.map((topic) => (
            <span
              key={topic}
              className="font-mono text-xs px-2.5 py-1 bg-[var(--paper)] border border-[var(--line)] text-[var(--ink-secondary)]"
            >
              {topic}
            </span>
          ))}
        </div>

        <div className="pt-4 border-t border-[var(--line-faint)] flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs font-mono text-[var(--muted)]">
          <span className="text-[var(--accent)] font-medium">
            Role: {publication.role}
          </span>
          <span>Next Research / Elsevier · Published May 2026</span>
        </div>
      </div>
    </div>
  );
}
