"use client";

import Link from "next/link";
import { useState } from "react";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Work", href: "#work" },
    { label: "walletKit", href: "#walletkit" },
    { label: "Writing", href: "#writing" },
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-[var(--paper)]/95 backdrop-blur-md border-b border-[var(--line-faint)] transition-all">
      <div className="max-w-[1240px] mx-auto px-5 sm:px-8 h-14 sm:h-16 flex items-center justify-between">
        {/* Standalone Dark Monogram Logo */}
        <Link
          href="/"
          className="group focus:outline-none"
          aria-label="Emmanuel Biolatiri Home"
        >
          <div className="w-8 h-8 sm:w-9 sm:h-9 bg-[var(--ink)] text-[var(--paper)] flex items-center justify-center font-mono text-xs font-bold tracking-wider shadow-sm transition-transform duration-200 group-hover:scale-105">
            EB
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Main Navigation">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[var(--muted)] hover:text-[var(--ink)] transition-colors duration-150 py-1 font-mono text-xs uppercase tracking-widest relative group"
            >
              <span>{link.label}</span>
              <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[var(--accent)] transition-all duration-200 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Right Contact Pill (Desktop) */}
        <div className="hidden md:flex items-center">
          <a
            href="mailto:hello@manuelbiolatiri.me"
            className="text-xs font-mono uppercase tracking-widest px-5 py-2 rounded-full border border-[var(--ink)] text-[var(--ink)] hover:bg-[var(--ink)] hover:text-[var(--paper)] transition-all duration-200 shadow-sm"
          >
            Contact
          </a>
        </div>

        {/* Mobile menu button: Clean, single trigger */}
        <div className="md:hidden flex items-center">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="px-3 py-1.5 text-xs font-mono uppercase tracking-wider text-[var(--ink)] border border-[var(--line)] bg-[var(--paper-card)] flex items-center gap-2"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            <span>{mobileMenuOpen ? "Close" : "Menu"}</span>
            <span className="text-[10px] text-[var(--muted)]">{mobileMenuOpen ? "✕" : "☰"}</span>
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-[var(--line-faint)] bg-[var(--paper-card)] px-5 py-5 shadow-sm">
          <nav className="flex flex-col gap-4 font-mono text-xs uppercase tracking-wider" aria-label="Mobile Navigation">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 text-[var(--ink)] hover:text-[var(--accent)] flex items-center justify-between border-b border-[var(--line-faint)] pb-2"
              >
                <span>{link.label}</span>
                <span className="text-xs text-[var(--muted)]">→</span>
              </a>
            ))}
            <a
              href="mailto:hello@manuelbiolatiri.me"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-2 py-2.5 px-4 text-center border border-[var(--ink)] bg-[var(--ink)] text-[var(--paper)] text-xs font-mono tracking-widest uppercase"
            >
              Contact (hello@manuelbiolatiri.me)
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
