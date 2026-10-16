import Image from "next/image";

const projects = [
  {
    id: "01",
    eyebrow: "AI / PERSONAL STYLE",
    name: "Stylebender",
    tagline: "A considered look for wherever you're going.",
    description: "An occasion-first menswear stylist. Describe where you're going, receive one outfit, refine a piece and save the result.",
    badge: "Working prototype",
    action: "Open Stylebender",
    href: "https://stylebender-zeta.vercel.app",
    logo: "/labs/stylebender.svg",
    logoAlt: "Stylebender folded-fabric mark",
    detail: "PERSONAL STYLING · GEMINI · MOBILE",
    theme: "forest",
  },
  {
    id: "02",
    eyebrow: "DIGITAL WALLET / INFRASTRUCTURE",
    name: "walletKit",
    tagline: "A pass is more than something you scan.",
    description: "Digital wallet infrastructure for membership, event tickets and living passes across Apple Wallet and Google Wallet.",
    badge: "In development",
    action: "Explore walletKit",
    href: "https://walletkit.app",
    logo: "/labs/walletkit.svg",
    logoAlt: "walletKit stacked-pass mark",
    detail: "WALLET PASSES · MEMBERSHIP · EVENTS",
    theme: "mint",
  },
] as const;

export default function LabsHome() {
  return (
    <div className="min-h-screen bg-[#101614] text-[#F4F3EB] selection:bg-[#B68754] selection:text-[#101614]">
      <header className="border-b border-white/10">
        <div className="mx-auto flex min-h-17 max-w-6xl items-center justify-between gap-4 px-5 py-4 sm:px-8">
          <a href="https://manuelbiolatiri.me" className="inline-flex items-center gap-3 text-sm font-semibold tracking-tight hover:text-white/75" aria-label="Emmanuel Biolatiri's portfolio">
            <span className="flex size-9 items-center justify-center border border-white/30 font-mono text-xs tracking-tighter">EB</span>
            <span>Biolatiri <span className="text-[#B68754]">/</span> Labs</span>
          </a>
          <a href="https://manuelbiolatiri.me" className="text-[11px] font-mono uppercase tracking-[.13em] text-white/65 transition-colors hover:text-white">
            Portfolio <span aria-hidden="true">↗</span>
          </a>
        </div>
      </header>

      <main>
        <section className="mx-auto max-w-6xl px-5 pb-14 pt-16 sm:px-8 sm:pb-20 sm:pt-24">
          <div className="flex items-center gap-3 text-[11px] font-mono uppercase tracking-[.24em] text-[#B68754]">
            <span className="size-1.5 rounded-full bg-[#B68754]" aria-hidden="true" />
            An independent product workbench
          </div>
          <h1 className="mt-8 max-w-4xl text-[clamp(3.6rem,9vw,8.5rem)] font-light leading-[.94] tracking-[-.065em]" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
            Experiments,
            <br />
            <span className="italic text-[#B9BEB3]">made tangible.</span>
          </h1>
          <p className="mt-8 max-w-xl text-base leading-8 text-[#C4C9C1] sm:text-lg">
            A small collection of products in progress. Less speculative theatre, more things you can open, touch and try.
          </p>
          <div className="mt-10 flex items-center gap-3 text-xs text-white/50">
            <span className="h-px w-10 bg-[#B68754]/70" aria-hidden="true" />
            Selected work / 2026
          </div>
        </section>

        <section aria-labelledby="work-title" className="border-t border-white/10 bg-[#171E1A]">
          <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-20">
            <div className="mb-8 flex items-end justify-between gap-4 border-b border-white/10 pb-5">
              <h2 id="work-title" className="text-lg font-medium tracking-tight">Inside the lab</h2>
              <span className="text-xs font-mono text-white/45">02 experiments</span>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              {projects.map((project) => (
                <article key={project.id} className="flex min-h-[425px] flex-col justify-between overflow-hidden border border-white/10 bg-[#202A24] p-6 transition-colors hover:border-[#B68754]/60 sm:p-8">
                  <div>
                    <div className="flex items-center justify-between gap-4">
                      <span className="font-mono text-[10px] uppercase tracking-[.18em] text-[#D1B38E]">{project.id} / {project.eyebrow}</span>
                      <span className="shrink-0 rounded-full border border-white/20 px-2.5 py-1 text-[10px] text-white/75">{project.badge}</span>
                    </div>
                    <div className="mt-9 flex size-[76px] items-center justify-center rounded-xl bg-[#F6F4ED] p-2">
                      <Image src={project.logo} alt={project.logoAlt} width={62} height={62} className="size-full object-contain" />
                    </div>
                    <h3 className="mt-6 text-[clamp(2.5rem,5vw,3.5rem)] tracking-[-.045em] leading-none" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
                      {project.name}
                    </h3>
                    <p className="mt-3 text-base font-medium text-white/90">{project.tagline}</p>
                    <p className="mt-4 max-w-[37ch] text-sm leading-7 text-[#B7C0B6]">{project.description}</p>
                  </div>
                  <div className="mt-10 flex flex-col gap-5 border-t border-white/15 pt-5">
                    <span className="font-mono text-[10px] tracking-wider text-white/45">{project.detail}</span>
                    <a href={project.href} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center justify-between gap-3 border border-[#D6C9AD]/50 px-4 py-3 text-sm font-medium text-[#F3E9D9] transition-colors hover:bg-[#F3E9D9] hover:text-[#14251E]">
                      {project.action}
                      <span aria-hidden="true">↗</span>
                    </a>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-12 flex flex-col gap-3 border-l-2 border-[#B68754] pl-5 sm:flex-row sm:items-center sm:justify-between">
              <p className="max-w-lg text-sm leading-7 text-white/70">Some ideas are working prototypes. Others are still on the workbench. Each is labelled accordingly.</p>
              <a href="https://github.com/manuelbiolatiri" target="_blank" rel="noopener noreferrer" className="shrink-0 text-sm underline decoration-[#B68754] underline-offset-4 hover:text-[#B68754]">More on GitHub ↗</a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col justify-between gap-3 px-5 py-7 text-xs text-white/45 sm:flex-row sm:px-8">
          <span>Biolatiri / Labs · Independent experiments</span>
          <span>Built with intention, shipped in iterations.</span>
        </div>
      </footer>
    </div>
  );
}
