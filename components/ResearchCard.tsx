import { ResearchPublication } from "@/data/writing";

interface ResearchCardProps {
  publication: ResearchPublication;
}

export function ResearchCard({ publication }: ResearchCardProps) {
  const CardContent = (
    <div className="flex flex-col md:flex-row h-full">
      <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[var(--line-faint)] pb-4 mb-5">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs text-[var(--muted)] font-medium uppercase tracking-wider">
                Academic Literature
              </span>
              <span className="h-px w-4 bg-[var(--line)]" />
              <span className="font-mono text-xs text-zinc-400">
                Elsevier Journal
              </span>
            </div>
            <div className="font-mono text-xs text-zinc-300 bg-[var(--paper)] px-2.5 py-1 border border-[var(--line)] self-start sm:self-auto rounded-md">
              {publication.metadata}
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-sans text-xl sm:text-2xl text-white font-medium group-hover:text-zinc-300 transition-colors leading-snug">
              {publication.title}
            </h4>

            <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
              {publication.abstractIntro}
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-2">
              {publication.topics.map((topic) => (
                <span
                  key={topic}
                  className="font-mono text-xs px-3 py-1 bg-zinc-900/50 border border-[var(--line-faint)] text-zinc-400 rounded-full"
                >
                  {topic}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 pt-5 border-t border-[var(--line-faint)] flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs font-mono text-[var(--muted)]">
          <span className="text-zinc-300 font-medium">
            Role: {publication.role}
          </span>
          {publication.link ? (
            <span className="text-white group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
              View Publication ↗
            </span>
          ) : (
            <span>Next Research / Elsevier · Published May 2026</span>
          )}
        </div>
      </div>

      {publication.image && (
        <div className="w-full md:w-[35%] relative border-t md:border-t-0 md:border-l border-[var(--line-faint)] bg-zinc-950/50 p-6 flex flex-col items-center justify-center overflow-hidden min-h-[250px]">
          {publication.logo && (
            <img 
              src={publication.logo} 
              alt="Publisher Logo" 
              className="absolute top-4 right-4 h-8 opacity-60" 
            />
          )}
          <img 
            src={publication.image} 
            alt={publication.title} 
            className="w-full max-w-[220px] object-contain group-hover:scale-105 transition-transform duration-500 rounded-md shadow-2xl shadow-black/50" 
          />
        </div>
      )}
    </div>
  );

  const className = "border border-[var(--line)] bg-[var(--paper-card)] rounded-2xl overflow-hidden hover:border-zinc-500 transition-all duration-300 flex flex-col group";

  if (publication.link) {
    return (
      <a href={publication.link} target="_blank" rel="noopener noreferrer" className={className}>
        {CardContent}
      </a>
    );
  }

  return <article className={className}>{CardContent}</article>;
}
