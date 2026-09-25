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

      <main className="flex-1 w-full max-w-[1240px] mx-auto px-6 sm:px-8 space-y-28 sm:space-y-36">
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
                  Explore → Design → Build → Ship → Operate → Scale
                </h2>
                <p className="text-sm sm:text-base text-[var(--ink-secondary)] mt-1.5 max-w-2xl leading-relaxed">
                  Engineering is an end-to-end discipline. I work across the entire lifecycle — from uncovering the true user problem through Figma wireframing to database schemas, CI/CD delivery, and long-term production telemetry.
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
                    Founder &amp; Architect
                  </span>
                  <span className="font-mono text-xs text-[var(--muted)]">
                    Active Production System
                  </span>
                </div>
                <h2
                  id="walletkit-title"
                  className="font-serif text-3xl sm:text-5xl text-[var(--ink)] font-normal"
                >
                  walletKit
                </h2>
                <p className="text-base sm:text-lg text-[var(--ink-secondary)] mt-1.5 max-w-2xl">
                  Wallet infrastructure for membership, events and entitlement.
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

          <ScrollReveal delay={0.15}>
            <WalletKitDiagram />
          </ScrollReveal>
        </section>

        {/* 4. WRITING & RESEARCH SECTION */}
        <section id="writing" aria-labelledby="writing-title">
          <ScrollReveal>
            <SectionLabel number="04" label="Writing &amp; Research" className="mb-6" />

            <div className="mb-8 pb-5 border-b border-[var(--line-faint)] flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div>
                <h2
                  id="writing-title"
                  className="font-serif text-3xl sm:text-4xl text-[var(--ink)] font-normal"
                >
                  Notes, Architecture &amp; Published Research
                </h2>
                <p className="text-sm text-[var(--muted)] mt-1.5 max-w-xl">
                  Notes from things I am building and trying to understand, alongside peer-reviewed academic literature.
                </p>
              </div>
              <div className="font-mono text-xs text-[var(--muted)]">
                Substack &amp; Elsevier / Next Research
              </div>
            </div>
          </ScrollReveal>

          {/* Technical Articles */}
          <div className="space-y-4 mb-10">
            <div className="flex items-center gap-2 font-mono text-xs text-[var(--muted)] uppercase tracking-wider mb-2">
              <span>Technical Essays &amp; Architecture Notes</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {ARTICLES.map((article, idx) => (
                <ScrollReveal key={article.id} delay={idx * 0.1}>
                  <WritingCard article={article} />
                </ScrollReveal>
              ))}
            </div>
          </div>

          {/* Academic Research (Separate from Substack) */}
          <ScrollReveal delay={0.2}>
            <div className="space-y-4">
              <div className="flex items-center gap-2 font-mono text-xs text-[var(--accent)] uppercase tracking-wider mb-2">
                <span className="w-1.5 h-1.5 bg-[var(--accent)]" />
                <span>Published Academic Research</span>
              </div>
              {PUBLISHED_RESEARCH.map((pub) => (
                <ResearchCard key={pub.id} publication={pub} />
              ))}
            </div>
          </ScrollReveal>
        </section>

        {/* 5. ABOUT SECTION */}
        <section id="about" aria-labelledby="about-title">
          <ScrollReveal>
            <SectionLabel number="05" label="About Emmanuel" className="mb-6" />

            <div className="border border-[var(--line-faint)] bg-[var(--paper)] p-6 sm:p-10">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                {/* Left narrative */}
                <div className="lg:col-span-7 space-y-6">
                  <span className="font-mono text-xs uppercase tracking-wider text-[var(--accent)] font-semibold block">
                    Core Narrative &amp; Engineering Philosophy
                  </span>

                  <h3
                    id="about-title"
                    className="font-serif text-2xl sm:text-3xl text-[var(--ink)] font-normal leading-snug"
                  >
                    I started closer to the interface than the infrastructure.
                  </h3>

                  <div className="space-y-4 text-base text-[var(--ink-secondary)] leading-relaxed">
                    <p>
                      I studied Industrial Chemistry, moved into software through self-directed learning, and began by experimenting with interfaces and Figma before moving deeper into backend systems.
                    </p>
                    <p>
                      That still shapes how I think about engineering: architecture starts with what someone is trying to accomplish, not with the database. Understanding user intent and commercial flow leads to cleaner boundaries, better APIs, and systems that scale gracefully without premature complexity.
                    </p>
                    <p className="text-sm text-[var(--muted)] pt-2 border-t border-[var(--line-faint)]">
                      Today, I operate across the UK and international markets, building resilient payment infrastructure, distributed cloud services, and native digital wallet platforms.
                    </p>
                  </div>
                </div>

                {/* Right timeline */}
                <div className="lg:col-span-5 bg-[var(--paper-card)] p-5 border border-[var(--line-faint)]">
                  <span className="font-mono text-xs uppercase tracking-wider text-[var(--muted)] block mb-4 border-b border-[var(--line-faint)] pb-2">
                    Trajectory &amp; Focus Evolution
                  </span>

                  <div className="relative pl-6 space-y-5 before:absolute before:left-2 before:top-2 before:bottom-2 before:w-px before:bg-[var(--line)]">
                    {careerTimeline.map((item, index) => (
                      <div key={index} className="relative group">
                        {/* Node indicator */}
                        <span className="absolute -left-[29px] top-1.5 w-2.5 h-2.5 border border-[var(--ink)] bg-[var(--paper)] group-hover:bg-[var(--accent)] transition-colors" />

                        <div className="flex items-baseline justify-between gap-2">
                          <span className="font-serif text-sm font-medium text-[var(--ink)]">
                            {item.label}
                          </span>
                          <span className="font-mono text-[10px] text-[var(--accent)]">
                            {item.year}
                          </span>
                        </div>
                        <p className="text-xs text-[var(--muted)] mt-0.5 leading-snug">
                          {item.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
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

              <div className="flex flex-col sm:flex-row md:flex-col gap-3">
                <a
                  href="mailto:hello@manuelbiolatiri.me"
                  className="px-6 py-3 border border-[var(--ink)] bg-[var(--ink)] text-[var(--paper)] hover:bg-[var(--accent)] hover:border-[var(--accent)] text-xs font-mono text-center tracking-widest uppercase transition-all duration-150 shadow-sm"
                >
                  hello@manuelbiolatiri.me
                </a>
                <div className="flex items-center gap-2">
                  <a
                    href="https://github.com/manuelbiolatiri"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-4 py-2 border border-[var(--line)] bg-[var(--paper)] text-xs font-mono text-center text-[var(--ink)] hover:border-[var(--ink)] transition-colors"
                  >
                    GitHub ↗
                  </a>
                  <a
                    href="https://www.linkedin.com/in/emmanuel-biolatiri-708546109"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-4 py-2 border border-[var(--line)] bg-[var(--paper)] text-xs font-mono text-center text-[var(--ink)] hover:border-[var(--ink)] transition-colors"
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
