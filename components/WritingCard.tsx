import { WritingArticle } from "@/data/writing";

interface WritingCardProps {
  article: WritingArticle;
}

export function WritingCard({ article }: WritingCardProps) {
  return (
    <article className="border border-[var(--line)] bg-[var(--paper)] p-6 sm:p-7 hover:border-[var(--accent)] transition-all duration-150 flex flex-col justify-between group">
      <div>
        <div className="flex items-center justify-between text-xs font-mono text-[var(--muted)] mb-3">
          <span className="text-[var(--accent)] font-medium">[{article.type}]</span>
          <span>{article.date}</span>
        </div>

        <h3 className="font-serif text-xl sm:text-2xl text-[var(--ink)] font-normal group-hover:text-[var(--accent)] transition-colors leading-snug">
          {article.title}
        </h3>

        <p className="mt-3 text-sm text-[var(--ink-secondary)] leading-relaxed">
          {article.description}
        </p>
      </div>

      <div className="mt-6 pt-4 border-t border-[var(--line-faint)] flex items-center justify-between font-mono text-xs text-[var(--muted)]">
        <span>{article.publication || "Substack"}</span>
        <span className="text-[var(--ink)] group-hover:text-[var(--accent)] inline-flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
          Read essay ↗
        </span>
      </div>
    </article>
  );
}
