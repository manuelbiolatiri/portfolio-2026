import { WritingArticle } from "@/data/writing";
import Image from "next/image";

interface WritingCardProps {
  article: WritingArticle;
}

export function WritingCard({ article }: WritingCardProps) {
  const CardContent = (
    <div className="flex flex-col-reverse md:flex-row h-full">
      <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between text-xs font-mono text-[var(--muted)] mb-5">
            <span className="text-white font-medium">[{article.type}]</span>
            <span>{article.date}</span>
          </div>

          <h3 className="font-sans text-xl sm:text-2xl text-white font-medium group-hover:text-zinc-300 transition-colors leading-snug">
            {article.title}
          </h3>

          <p className="mt-4 text-sm text-zinc-400 leading-relaxed">
            {article.description}
          </p>
        </div>

        <div className="mt-8 pt-5 border-t border-[var(--line-faint)] flex items-center justify-between font-mono text-xs text-[var(--muted)]">
          <span>{article.publication || "Substack"}</span>
          <span className="text-white group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
            Read ↗
          </span>
        </div>
      </div>

      {article.image && (
        <div className="w-full md:w-[35%] relative border-t md:border-t-0 md:border-l border-[var(--line-faint)] overflow-hidden min-h-[220px] flex flex-col items-center justify-center bg-zinc-950/50 p-6">
          <img
            src={article.image}
            alt={article.title}
            className="w-full max-w-[220px] object-contain group-hover:scale-105 transition-transform duration-500 rounded-md shadow-2xl shadow-black/50"
          />
        </div>
      )}
    </div>
  );

  const className = "border border-[var(--line)] bg-[var(--paper-card)] rounded-2xl overflow-hidden hover:border-zinc-500 transition-all duration-300 flex flex-col h-full group";

  if (article.link) {
    return (
      <a href={article.link} target="_blank" rel="noopener noreferrer" className={className}>
        {CardContent}
      </a>
    );
  }

  return <article className={className}>{CardContent}</article>;
}
