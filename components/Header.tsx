"use client";

import Link from "next/link";
import { useState } from "react";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "Work", href: "#work" },
    { label: "walletKit", href: "#walletkit" },
    { label: "Lifecycle", href: "#lifecycle" },
    { label: "Writing & Research", href: "#writing" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-[var(--paper)]/95 backdrop-blur-md border-b border-[var(--line-faint)] transition-all">
      <div className="max-w-[1240px] mx-auto px-6 sm:px-8 h-16 flex items-center justify-between">
        {/* Solid Dark Monogram EB */}
        <Link
          href="/"
          className="group flex items-center gap-3 text-[var(--ink)] focus:outline-none"
          aria-label="Emmanuel Biolatiri Home"
        >
          <div className="w-8 h-8 bg-[var(--ink)] text-[var(--paper)] flex items-center justify-center font-mono text-xs font-bold tracking-wider shadow-sm transition-transform duration-200 group-hover:scale-105">
            EB
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-medium tracking-tight text-[var(--ink)]">Emmanuel Biolatiri</span>
            <span className="text-[11px] text-[var(--muted)] font-mono flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
              Manchester, UK · Platform &amp; Payments
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-sm" aria-label="Main Navigation">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[var(--ink-secondary)] hover:text-[var(--accent)] transition-colors duration-150 py-1 font-mono text-xs uppercase tracking-wider relative group"
            >
              <span>{link.label}</span>
              <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[var(--accent)] transition-all duration-200 group-hover:w-full" />
            </a>
          ))}
          <a
            href="mailto:hello@manuelbiolatiri.me"
            className="text-xs font-mono px-3.5 py-1.5 border border-[var(--ink)] bg-[var(--ink)] text-[var(--paper)] hover:bg-[var(--accent)] hover:border-[var(--accent)] transition-all duration-150 shadow-sm"
          >
            hello@manuelbiolatiri.me
          </a>
        </nav>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center gap-3">
          <a
            href="mailto:hello@manuelbiolatiri.me"
            className="text-xs font-mono px-2.5 py-1 border border-[var(--ink)] bg-[var(--ink)] text-[var(--paper)]"
          >
            Email
          </a>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 text-[var(--ink)] focus:outline-none border border-[var(--line)]"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            <svg
              className="w-5 h-5"
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
        <div className="md:hidden border-b border-[var(--line)] bg-[var(--paper)] px-6 py-4">
          <nav className="flex flex-col gap-3 font-mono text-sm" aria-label="Mobile Navigation">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 text-[var(--ink)] hover:text-[var(--accent)] flex items-center justify-between"
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
