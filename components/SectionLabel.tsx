interface SectionLabelProps {
  number?: string;
  label: string;
  className?: string;
}

export function SectionLabel({ number, label, className = "" }: SectionLabelProps) {
  return (
    <div className={`flex items-center gap-3 text-xs tracking-wider uppercase font-mono text-[var(--muted)] ${className}`}>
      <span>{label}</span>
      <div className="h-px bg-[var(--line)] flex-1 max-w-[80px]" />
    </div>
  );
}
