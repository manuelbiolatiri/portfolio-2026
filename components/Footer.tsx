export function Footer() {
  return (
    <footer className="w-full border-t border-[var(--line)] bg-[var(--paper)] mt-24">
      {/* Historical Artifact Notice (2019 Portfolio) */}
      <div className="max-w-[1240px] mx-auto px-6 sm:px-8 py-8 border-b border-[var(--line)]">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 border border-[var(--line)] bg-[var(--paper-card)]">
          <div className="flex items-start sm:items-center gap-4">
            <span className="font-mono text-xs text-[var(--accent)] font-semibold border border-[var(--accent-border)] px-2 py-0.5 bg-[var(--accent-subtle)]">
              2019
            </span>
            <p className="text-xs sm:text-sm text-[var(--ink-secondary)]">
              Built my first personal portfolio while transitioning from chemistry into software.
            </p>
          </div>
          <a
            href="https://manuel-biolatiri.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-mono text-[var(--accent)] hover:text-[var(--accent-hover)] inline-flex items-center gap-1 self-start sm:self-auto underline underline-offset-4"
          >
            <span>View historical 2019 portfolio</span>
            <span>↗</span>
          </a>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-[1240px] mx-auto px-6 sm:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          <div className="md:col-span-6 flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <div className="w-7 h-7 border border-[var(--ink)] flex items-center justify-center font-mono text-xs font-semibold">
                EB
              </div>
              <span className="font-serif text-lg text-[var(--ink)]">Emmanuel Biolatiri</span>
            </div>
            <p className="text-xs sm:text-sm text-[var(--muted)] max-w-md leading-relaxed">
              Senior Software Engineer building payment, platform and wallet infrastructure. Based in Manchester, UK.
            </p>
          </div>

          <div className="md:col-span-3 flex flex-col gap-2 font-mono text-xs">
            <span className="uppercase tracking-wider text-[var(--muted)] mb-1">Direct Channels</span>
            <a
              href="mailto:hello@manuelbiolatiri.me"
              className="text-[var(--ink)] hover:text-[var(--accent)] transition-colors"
            >
              hello@manuelbiolatiri.me
            </a>
            <a
              href="https://github.com/manuelbiolatiri"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--ink)] hover:text-[var(--accent)] transition-colors"
            >
              GitHub / manuelbiolatiri ↗
            </a>
            <a
              href="https://www.linkedin.com/in/emmanuel-biolatiri-708546109"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--ink)] hover:text-[var(--accent)] transition-colors"
            >
              LinkedIn / emmanuel-biolatiri ↗
            </a>
          </div>

          <div className="md:col-span-3 flex flex-col gap-2 font-mono text-xs">
            <span className="uppercase tracking-wider text-[var(--muted)] mb-1">Systems & Writing</span>
            <a
              href="https://walletkit.app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--ink)] hover:text-[var(--accent)] transition-colors"
            >
              walletKit (walletkit.app) ↗
            </a>
            <a
              href="#writing"
              className="text-[var(--ink)] hover:text-[var(--accent)] transition-colors"
            >
              Writing & Research
            </a>
            <span className="text-[var(--muted)]">Substack (Incoming)</span>
          </div>
        </div>

        {/* Bottom Colophon */}
        <div className="mt-12 pt-6 border-t border-[var(--line)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 font-mono text-xs text-[var(--muted)]">
          <div>
            © 2026 Emmanuel Biolatiri. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <span>Next.js · TypeScript · Tailwind CSS</span>
            <span>·</span>
            <span>Manchester, UK</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
