export function Footer() {
  return (
    <footer className="w-full border-t border-[var(--line-faint)] bg-[var(--paper)] mt-24">
      {/* Main Footer Links */}
      <div className="max-w-[1240px] mx-auto px-6 sm:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          <div className="md:col-span-6 flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-[var(--ink)] text-[var(--paper)] flex items-center justify-center font-mono text-xs font-bold">
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
            <span className="uppercase tracking-wider text-[var(--muted)] mb-1">Systems &amp; Writing</span>
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
              Writing &amp; Research
            </a>
            <span className="text-[var(--muted)]">Substack (Incoming)</span>
          </div>
        </div>

        {/* Bottom Colophon */}
        <div className="mt-12 pt-6 border-t border-[var(--line-faint)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 font-mono text-xs text-[var(--muted)]">
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
