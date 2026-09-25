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
      <div className="max-w-[1240px] mx-auto px-6 sm:px-8 h-16 flex items-center justify-between">
        {/* Standalone Dark Monogram Logo - No text around it */}
        <Link
          href="/"
          className="group focus:outline-none"
          aria-label="Emmanuel Biolatiri Home"
        >
          <div className="w-9 h-9 bg-[var(--ink)] text-[var(--paper)] flex items-center justify-center font-mono text-xs font-bold tracking-wider shadow-sm transition-transform duration-200 group-hover:scale-105">
            EB
          </div>
        </Link>

        {/* Center/Desktop Navigation (Like ademola.adegbuyi.me) */}
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

        {/* Right Contact Pill (Like ademola.adegbuyi.me) */}
        <div className="hidden md:flex items-center">
          <a
            href="mailto:hello@manuelbiolatiri.me"
            className="text-xs font-mono uppercase tracking-widest px-5 py-2 rounded-full border border-[var(--ink)] text-[var(--ink)] hover:bg-[var(--ink)] hover:text-[var(--paper)] transition-all duration-200 shadow-sm"
          >
            Contact
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center gap-3">
          <a
            href="mailto:hello@manuelbiolatiri.me"
            className="text-xs font-mono px-3 py-1.5 rounded-full border border-[var(--ink)] text-[var(--ink)]"
          >
            Contact
          </a>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[var(--ink)] focus:outline-none border border-[var(--line-faint)]"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="square"
                  strokeLinejoin="miter"
                  strokeWidth="1.5"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="square"
                  strokeLinejoin="miter"
                  strokeWidth="1.5"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-[var(--line-faint)] bg-[var(--paper)] px-6 py-4">
          <nav className="flex flex-col gap-3 font-mono text-xs uppercase tracking-wider" aria-label="Mobile Navigation">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-1.5 text-[var(--ink)] hover:text-[var(--accent)] flex items-center justify-between"
              >
                <span>{link.label}</span>
                <span className="text-xs text-[var(--muted)]">→</span>
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
