import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { SectionLabel } from "@/components/SectionLabel";
import { WorkItem } from "@/components/WorkItem";
import { Lifecycle } from "@/components/Lifecycle";
import { WalletKitDiagram } from "@/components/WalletKitDiagram";
import { WritingCard } from "@/components/WritingCard";
import { ResearchCard } from "@/components/ResearchCard";
import { ScrollProgress } from "@/components/ScrollProgress";
import { PrecisionTracker } from "@/components/PrecisionTracker";
import { ScrollReveal } from "@/components/ScrollReveal";
import { WORK_PROJECTS } from "@/data/work";
import { ARTICLES, PUBLISHED_RESEARCH } from "@/data/writing";

export default function Home() {
  const careerTimeline = [
    { label: "Industrial Chemistry", desc: "Materials research & laboratory rigor", year: "Origin" },
    { label: "Computer Training", desc: "Foundational computer science & systems basics", year: "Foundation" },
    { label: "Self-directed JavaScript", desc: "Front-end mechanics, browser execution & web primitives", year: "Transition" },
    { label: "Early Projects", desc: "Product experiments, UI prototypes & rapid shipping", year: "Applied" },
    { label: "Fintech", desc: "Payment gateways, state machines & regulatory rails", year: "Domain" },
    { label: "Commercial Systems", desc: "Distributed order management & enterprise logistics", year: "Scale" },
    { label: "Platform Engineering", desc: "Cloud architecture, CI/CD pipelines & production uptime", year: "Operations" },
    { label: "walletKit", desc: "Digital wallet infrastructure, PKCS#7 signing & push sync", year: "Current" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[var(--paper)] text-[var(--ink)] relative selection:bg-[var(--accent)] selection:text-[var(--paper)]">
      {/* Precision drafting cursor & viewport coordinate HUD */}
      <PrecisionTracker />

      {/* GSAP scroll-driven hairline progress */}
      <ScrollProgress />

      <Header />

      <main className="flex-1 w-full max-w-[1240px] mx-auto px-5 sm:px-8 space-y-16 sm:space-y-28 lg:space-y-36">
        {/* HERO SECTION */}
        <section aria-label="Introduction">
          <Hero />
        </section>

        {/* 1. SELECTED WORK */}
        <section id="work" aria-labelledby="work-title">
          <ScrollReveal>
            <SectionLabel number="01" label="Selected Work &amp; Systems" className="mb-6" />

            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 pb-5 border-b border-[var(--line-faint)]">
              <div>
                <h2
                  id="work-title"
                  className="font-serif text-3xl sm:text-4xl text-[var(--ink)] font-normal"
                >
                  Commercial Architecture &amp; Core Systems
                </h2>
                <p className="text-sm text-[var(--muted)] mt-1.5 max-w-xl">
                  High-scale payment pipelines, commercial distributed services, and mobile wallet platforms designed for production resilience.
                </p>
              </div>
              <div className="font-mono text-xs text-[var(--muted)]">
                Production Work · 2020 — Present
              </div>
            </div>
          </ScrollReveal>

          <div className="space-y-2">
            {WORK_PROJECTS.map((project, index) => (
              <ScrollReveal key={project.id} delay={index * 0.1}>
                <WorkItem project={project} index={index} />
              </ScrollReveal>
            ))}
          </div>
        </section>

        {/* 2. SOFTWARE LIFECYCLE */}
        <section id="lifecycle" aria-labelledby="lifecycle-title">
          <ScrollReveal>
            <SectionLabel number="02" label="Engineering Methodology" className="mb-6" />

            <div className="mb-10 pb-5 border-b border-[var(--line-faint)] flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div>
                <h2
                  id="lifecycle-title"
                  className="font-serif text-3xl sm:text-4xl text-[var(--ink)] font-normal"
                >
                  Core Engineering Pillars
                </h2>
                <p className="text-sm sm:text-base text-[var(--ink-secondary)] mt-1.5 max-w-2xl leading-relaxed">
                  I approach software engineering as an end-to-end discipline. Rather than focusing solely on implementation details, I prioritize deep domain understanding, resilient system architecture, and long-term operational excellence to deliver true business value.
                </p>
              </div>
              <div className="font-mono text-xs text-[var(--accent)] font-semibold">
                Scroll-Synced Matrix
              </div>
            </div>
          </ScrollReveal>

          <Lifecycle />
        </section>

        {/* 3. WALLETKIT FEATURED SECTION */}
        <section id="walletkit" aria-labelledby="walletkit-title">
          <ScrollReveal>
            <SectionLabel number="03" label="Featured System Infrastructure" className="mb-6" />

            <div className="mb-8 pb-5 border-b border-[var(--line-faint)] flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="font-mono text-xs uppercase px-2 py-0.5 bg-[var(--accent)] text-[var(--paper)]">
                    Creator
                  </span>
                </div>
                <h2
                  id="walletkit-title"
                  className="font-serif text-3xl sm:text-5xl text-[var(--ink)] font-normal"
                >
                  walletKit
                </h2>
                <p className="text-base sm:text-lg text-[var(--ink-secondary)] mt-1.5 max-w-2xl">
                  Pass infrastructure for membership, events, entitlement, and MCP.
                </p>
              </div>

              <a
                href="https://walletkit.app"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 border border-[var(--ink)] text-xs font-mono text-[var(--ink)] hover:bg-[var(--accent)] hover:border-[var(--accent)] hover:text-[var(--paper)] transition-all duration-150 shadow-sm"
              >
                <span>Explore walletkit.app</span>
                <span>↗</span>
              </a>
            </div>
          </ScrollReveal>


        </section>

        {/* 4. WRITING & RESEARCH SECTION */}
        <section id="writing" aria-labelledby="writing-title">
          <ScrollReveal>
            <SectionLabel number="04" label="Writing &amp; Research" className="mb-6" />

            <div className="mb-8 pb-5 border-b border-[var(--line-faint)]">
              <h2
                id="writing-title"
                className="font-sans text-3xl sm:text-4xl text-white font-medium tracking-tight"
              >
                Writing &amp; Research
              </h2>
              <p className="text-sm sm:text-base text-zinc-400 mt-2 max-w-2xl">
                Essays on systems architecture and engineering, alongside peer-reviewed academic literature.
              </p>
            </div>
          </ScrollReveal>

          <div className="space-y-12">
            {/* Technical Articles */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 font-mono text-xs text-[var(--muted)] uppercase tracking-wider mb-3">
                <span>Technical Essays &amp; Architecture Notes</span>
              </div>
              <div>
                {ARTICLES.map((article, idx) => (
                  <ScrollReveal key={article.id} delay={idx * 0.1}>
                    <WritingCard article={article} />
                  </ScrollReveal>
                ))}
              </div>
            </div>

            {/* Academic Research (Separate from Substack) */}
            <div className="space-y-4">
              <ScrollReveal delay={0.2}>
                <div className="flex items-center gap-2 font-mono text-xs text-[var(--muted)] uppercase tracking-wider mb-3">
                  <span>Published Academic Research</span>
                </div>
                <div>
                  {PUBLISHED_RESEARCH.map((pub) => (
                    <ResearchCard key={pub.id} publication={pub} />
                  ))}
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* 5. ABOUT SECTION */}
        <section id="about" aria-labelledby="about-title" className="py-10">
          <ScrollReveal>
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <h3
                id="about-title"
                className="font-sans text-3xl sm:text-5xl text-white font-medium leading-tight tracking-tight"
              >
                Architecture starts with user intent, not the database.
              </h3>

              <div className="text-base sm:text-lg text-zinc-400 leading-relaxed max-w-2xl mx-auto">
                <p>
                  My background in Industrial Chemistry and my self-taught roots in UI design fundamentally shaped my approach to backend engineering. I build resilient payment pipelines and digital wallet platforms across the UK by focusing on clear boundaries, clean APIs, and systems that scale without premature complexity.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </section>

        {/* 6. CONTACT SECTION */}
        <section id="contact" aria-labelledby="contact-title">
          <ScrollReveal>
            <SectionLabel number="06" label="Direct Channels" className="mb-6" />

            <div className="border border-[var(--ink)] bg-[var(--paper-card)] p-8 sm:p-12 flex flex-col md:flex-row md:items-center justify-between gap-8 shadow-sm">
              <div className="max-w-xl space-y-3">
                <h2
                  id="contact-title"
                  className="font-serif text-3xl sm:text-4xl text-[var(--ink)] font-normal"
                >
                  Let’s talk architecture, payments, or walletKit.
                </h2>
                <p className="text-sm sm:text-base text-[var(--ink-secondary)] leading-relaxed">
                  Whether discussing distributed payment systems, mobile wallet infrastructure, or engineering leadership — I welcome thoughtful technical conversations.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row md:flex-col gap-3 w-full md:w-auto">
                <a
                  href="mailto:manuelbiolatiri@gmail.com"
                  className="w-full px-6 py-3 rounded-full bg-white text-black hover:bg-zinc-200 text-sm font-medium text-center transition-all duration-200 shadow-[0_0_20px_rgba(255,255,255,0.1)]"
                >
                  manuelbiolatiri@gmail.com
                </a>

                <div className="flex items-center gap-2 mt-2">
                  <a
                    href="https://github.com/manuelbiolatiri"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-4 py-2 rounded-full border border-[var(--line-strong)] bg-[var(--paper-card)] text-sm font-medium text-center text-[var(--ink)] hover:border-[var(--ink)] transition-colors"
                  >
                    GitHub ↗
                  </a>
                  <a
                    href="https://www.linkedin.com/in/emmanuel-biolatiri"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-4 py-2 rounded-full border border-[var(--line-strong)] bg-[var(--paper-card)] text-sm font-medium text-center text-[var(--ink)] hover:border-[var(--ink)] transition-colors"
                  >
                    LinkedIn ↗
                  </a>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </section>
      </main>

      <Footer />
    </div>
  );
}
