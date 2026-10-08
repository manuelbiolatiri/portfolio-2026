export function Footer() {
  return (
    <footer className="w-full border-t border-[var(--line-faint)] bg-[var(--paper)] mt-24">
      {/* Main Footer Links */}
      <div className="max-w-[1240px] mx-auto px-6 sm:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div className="flex flex-col gap-3 max-w-md">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-white text-black flex items-center justify-center font-mono text-xs font-bold">
                EB
              </div>
              <span className="font-sans text-xl text-white font-medium">Emmanuel Biolatiri</span>
            </div>
            <p className="text-sm text-zinc-400 leading-relaxed">
              Senior Software Engineer building payment, platform and wallet infrastructure. Based in Manchester, UK.
            </p>
          </div>
          
          <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-zinc-400">
            <a href="https://github.com/manuelbiolatiri" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">GitHub</a>
            <span>/</span>
            <a href="https://www.linkedin.com/in/emmanuel-biolatiri" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
            <span>/</span>
            <a href="https://walletkit.app" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">walletKit</a>
          </div>
        </div>

        {/* Bottom Colophon */}
        <div className="mt-12 pt-6 border-t border-[var(--line-faint)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 font-mono text-xs text-[var(--muted)]">
          <div>
            © 2026 Emmanuel Biolatiri. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
