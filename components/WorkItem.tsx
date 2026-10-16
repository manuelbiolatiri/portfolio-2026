import { WorkProject } from "@/data/work";

interface WorkItemProps {
  project: WorkProject;
  index: number;
}

export function WorkItem({ project, index }: WorkItemProps) {
  return (
    <article className="border-t border-[var(--line-faint)] py-10 sm:py-14 group">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
        <div className="lg:col-span-2 flex lg:flex-col justify-between gap-3">
          <div>
            <span className="font-mono text-[11px] text-[var(--muted)] uppercase tracking-wider">
              Period
            </span>
            <p className="font-mono text-xs text-[var(--ink-secondary)] mt-2">
              {project.period}
            </p>
          </div>
          <div className="lg:mt-10">
            <span className="font-mono text-[11px] text-[var(--muted)] uppercase tracking-wider">
              Role
            </span>
            <p className="font-mono text-xs text-[var(--ink-secondary)] mt-2 lg:max-w-[12rem]">
              {project.role}
            </p>
          </div>
        </div>

        <div className="lg:col-span-10">
          <div className="flex flex-col xl:flex-row xl:items-end xl:justify-between gap-5">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="font-mono text-xs font-semibold text-[var(--accent)] tracking-widest">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="h-px w-6 bg-[var(--line)]" />
                <span className="font-mono text-[11px] text-[var(--muted)] uppercase tracking-wider">
                  {project.employmentType} · {project.location}
                </span>
              </div>
              <h3 className="font-serif text-5xl sm:text-6xl lg:text-7xl text-[var(--ink)] tracking-tight font-normal leading-[0.9] group-hover:text-[var(--accent)] transition-colors">
                {project.company}
              </h3>
            </div>

            <div className="flex flex-wrap xl:max-w-[18rem] xl:justify-end gap-2">
              {project.tags.slice(0, 5).map((tag) => (
                <span
                  key={tag}
                  className="font-mono text-[11px] px-2.5 py-1 border border-[var(--line-faint)] text-[var(--ink-secondary)]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <p className="text-base sm:text-lg text-[var(--ink)] leading-snug mt-8 max-w-3xl">
            {project.tagline}
          </p>

          <ul className="mt-5 space-y-2 text-sm text-[var(--ink-secondary)] max-w-3xl">
            {project.points.slice(0, 3).map((point) => (
              <li key={point} className="flex items-start gap-3 leading-relaxed">
                <span className="text-[var(--accent)] font-mono text-xs mt-1 select-none">•</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>

        </div>
      </div>
    </article>
  );
}
