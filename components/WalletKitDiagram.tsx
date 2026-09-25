"use client";

import { useState } from "react";

export function WalletKitDiagram() {
  const [selectedPillar, setSelectedPillar] = useState<number>(0);

  const pillars = [
    {
      num: "01",
      name: "Issue",
      desc: "Cryptographic pass generation, automated PKCS#7 signing with Apple WWDR certificates, and Google Wallet JWT object issuance.",
      specs: [
        "PKCS#7 manifest hashing & detached signatures",
        "Multi-tier membership & ticket class templates",
        "Instant web & native in-app 'Add to Wallet' distribution"
      ]
    },
    {
      num: "02",
      name: "Update",
      desc: "Live, silent push updates delivered directly to the lock screen and wallet app without requiring a dedicated native application.",
      specs: [
        "Apple Push Notification service (APNs) background triggers",
        "Google Wallet REST API pass resource synchronization",
        "Real-time tier upgrades, points balances & schedule adjustments"
      ]
    },
    {
      num: "03",
      name: "Validate",
      desc: "Sub-second verification scanner APIs with cryptographic anti-replay protections for online and offline operational check-in.",
      specs: [
        "Cryptographically signed dynamic QR & Aztec codes",
        "Single-use rotating token invalidation to prevent cloning",
        "Offline verification support via verifiable public key pairs"
      ]
    },
    {
      num: "04",
      name: "Measure",
      desc: "Real-time telemetry tracking pass install rates, active wallet installs, notification delivery status, and venue scan completions.",
      specs: [
        "Device registration and uninstallation webhooks",
        "Lock-screen push notification engagement metrics",
        "Audit trail of every scan event and validation attempt"
      ]
    }
  ];

  return (
    <div className="w-full border border-[var(--line)] bg-[var(--paper)]">
      {/* Origin story banner */}
      <div className="p-6 sm:p-8 border-b border-[var(--line)] bg-[var(--paper-card)]">
        <div className="max-w-3xl">
          <span className="font-mono text-xs uppercase tracking-wider text-[var(--accent)] font-semibold">
            Origin & Systems Motivation
          </span>
          <p className="mt-3 font-serif text-xl sm:text-2xl text-[var(--ink)] leading-snug italic font-normal">
            &ldquo;It started with what looked like a small ‘Add to Wallet’ feature. The deeper I looked, the more the interesting problem became issuance, updates, validation, distribution and lifecycle management.&rdquo;
          </p>
          <p className="mt-3 text-sm text-[var(--muted)] font-mono">
            — Emmanuel Biolatiri, Founder & Architect of walletKit
          </p>
        </div>
      </div>

      {/* Visual Architectural System Flow */}
      <div className="p-6 sm:p-10 border-b border-[var(--line)]">
        <div className="flex items-center justify-between mb-8">
          <div>
            <span className="font-mono text-xs uppercase tracking-wider text-[var(--muted)]">
              Architecture Diagram
            </span>
            <h4 className="font-mono text-sm sm:text-base font-semibold text-[var(--ink)] mt-1">
              End-to-End Cryptographic Pass Pipeline
            </h4>
          </div>
          <div className="hidden sm:flex items-center gap-2 font-mono text-xs text-[var(--muted)]">
            <span className="w-2 h-2 rounded-full bg-[var(--accent)]" />
            <span>Bi-directional Push Pipeline</span>
          </div>
        </div>

        {/* Diagram Flow Columns */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative">
          {/* Node 1: Organisation */}
          <div className="border border-[var(--line)] bg-[var(--paper-card)] p-4 flex flex-col justify-between min-h-[170px]">
            <div>
              <div className="flex items-center justify-between text-xs font-mono text-[var(--muted)] mb-2">
                <span>01</span>
                <span>ORIGIN</span>
              </div>
              <h5 className="font-serif text-lg text-[var(--ink)] font-semibold">
                Organisation
              </h5>
              <p className="text-xs text-[var(--muted)] mt-1 leading-relaxed">
                CRM, billing engine, ticketing platform or membership API.
              </p>
            </div>
            <div className="pt-3 border-t border-[var(--line-faint)] font-mono text-[11px] text-[var(--ink-secondary)]">
              HTTP Webhooks & REST Payload
            </div>
          </div>

          {/* Node 2: walletKit Core */}
          <div className="border-2 border-[var(--accent)] bg-[var(--accent-subtle)] p-4 flex flex-col justify-between min-h-[170px] relative">
            <div className="absolute -top-3 right-3 px-2 py-0.5 bg-[var(--accent)] text-[var(--paper)] font-mono text-[10px] uppercase tracking-wider font-semibold">
              Core Engine
            </div>
            <div>
              <div className="flex items-center justify-between text-xs font-mono text-[var(--accent)] mb-2">
                <span>02</span>
                <span className="font-bold">SYSTEM</span>
              </div>
              <h5 className="font-serif text-lg text-[var(--ink)] font-bold">
                walletKit
              </h5>
              <p className="text-xs text-[var(--ink-secondary)] mt-1 leading-relaxed">
                PKCS#7 pass signing, Google JWT generation, APNs worker, and validation API.
              </p>
            </div>
            <div className="pt-3 border-t border-[var(--accent-border)] font-mono text-[11px] text-[var(--accent)] font-medium">
              Signed .pkpass & Push Worker
            </div>
          </div>

          {/* Node 3: Apple / Google Wallet */}
          <div className="border border-[var(--line)] bg-[var(--paper-card)] p-4 flex flex-col justify-between min-h-[170px]">
            <div>
              <div className="flex items-center justify-between text-xs font-mono text-[var(--muted)] mb-2">
                <span>03</span>
                <span>INFRASTRUCTURE</span>
              </div>
              <h5 className="font-serif text-lg text-[var(--ink)] font-semibold">
                Apple & Google Wallet
              </h5>
              <p className="text-xs text-[var(--muted)] mt-1 leading-relaxed">
                Native OS wallets across iOS, watchOS, Android, and WearOS.
              </p>
            </div>
            <div className="pt-3 border-t border-[var(--line-faint)] font-mono text-[11px] text-[var(--ink-secondary)]">
              APNs & Google Wallet Push API
            </div>
          </div>

          {/* Node 4: Member Device */}
          <div className="border border-[var(--line)] bg-[var(--paper-card)] p-4 flex flex-col justify-between min-h-[170px]">
            <div>
              <div className="flex items-center justify-between text-xs font-mono text-[var(--muted)] mb-2">
                <span>04</span>
                <span>TERMINAL</span>
              </div>
              <h5 className="font-serif text-lg text-[var(--ink)] font-semibold">
                Member Device
              </h5>
              <p className="text-xs text-[var(--muted)] mt-1 leading-relaxed">
                Lock-screen notifications, dynamic barcode scanning, NFC tap, and instant redemption.
              </p>
            </div>
            <div className="pt-3 border-t border-[var(--line-faint)] font-mono text-[11px] text-[var(--ink-secondary)]">
              Dynamic Verification Token
            </div>
          </div>
        </div>

        {/* ASCII Flow Indicator */}
        <div className="hidden md:flex justify-between items-center px-8 mt-3 font-mono text-xs text-[var(--muted)] select-none">
          <span>JSON event</span>
          <span>──→</span>
          <span>PKCS#7 Sign & Encrypt</span>
          <span>──→</span>
          <span>APNs / Google Push</span>
          <span>──→</span>
          <span>Device Sync & NFC Scan</span>
        </div>
      </div>

      {/* Supporting Capabilities Grid */}
      <div className="p-6 sm:p-8">
        <div className="flex items-center justify-between mb-6">
          <span className="font-mono text-xs uppercase tracking-wider text-[var(--muted)]">
            Core Capabilities
          </span>
          <span className="font-mono text-xs text-[var(--accent)]">
            Explore 4 Infrastructure Pillars
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {pillars.map((pillar, i) => {
            const isSelected = selectedPillar === i;
            return (
              <button
                key={pillar.name}
                type="button"
                onClick={() => setSelectedPillar(i)}
                className={`p-4 text-left border transition-all duration-150 flex flex-col justify-between min-h-[220px] ${
                  isSelected
                    ? "border-[var(--accent)] bg-[var(--paper-card)] shadow-sm"
                    : "border-[var(--line)] bg-[var(--paper)] hover:bg-[var(--paper-hover)]"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between font-mono text-xs mb-2">
                    <span className="text-[var(--accent)] font-bold">{pillar.num}</span>
                    <span className="uppercase text-[10px] text-[var(--muted)]">Capability</span>
                  </div>
                  <h5 className="font-serif text-xl font-normal text-[var(--ink)] mb-2">
                    {pillar.name}
                  </h5>
                  <p className="text-xs text-[var(--ink-secondary)] leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-[var(--line-faint)]">
                  <span className="font-mono text-[10px] uppercase text-[var(--accent)]">
                    {isSelected ? "● Active View" : "○ Click for Specs"}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Pillar Specifications */}
        <div className="mt-4 p-5 border border-[var(--line)] bg-[var(--paper-card)]">
          <div className="flex items-center gap-2 font-mono text-xs text-[var(--accent)] mb-3">
            <span>Engineering Specifications:</span>
            <span className="font-bold">{pillars[selectedPillar].name} Subsystem</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {pillars[selectedPillar].specs.map((spec, idx) => (
              <div
                key={idx}
                className="p-3 border border-[var(--line)] bg-[var(--paper)] text-xs text-[var(--ink-secondary)] font-mono leading-relaxed"
              >
                <span className="text-[var(--accent)] font-bold mr-1">[{idx + 1}]</span>
                {spec}
              </div>
            ))}
          </div>
        </div>

        {/* External Link CTA */}
        <div className="mt-8 pt-6 border-t border-[var(--line)] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="text-xs font-mono text-[var(--muted)]">
            Explore documentation, interactive API contracts, and pass builders.
          </div>
          <a
            href="https://walletkit.app"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 border border-[var(--ink)] bg-[var(--ink)] text-[var(--paper)] hover:bg-[var(--accent)] hover:border-[var(--accent)] text-xs font-mono transition-colors"
          >
            <span>Visit walletkit.app</span>
            <span>↗</span>
          </a>
        </div>
      </div>
    </div>
  );
}
