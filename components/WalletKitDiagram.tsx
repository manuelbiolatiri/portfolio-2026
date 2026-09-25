"use client";

import { useState } from "react";
import { TiltContainer } from "./TiltContainer";

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
    <div className="w-full border border-[var(--line-faint)] bg-[var(--paper)]">
      {/* Origin story banner */}
      <div className="p-6 sm:p-10 border-b border-[var(--line-faint)] bg-[var(--paper-card)]">
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-1.5 h-1.5 bg-[var(--accent)]" />
            <span className="font-mono text-xs uppercase tracking-wider text-[var(--accent)] font-semibold">
              Origin &amp; Systems Motivation
            </span>
          </div>
          <p className="font-serif text-xl sm:text-2xl text-[var(--ink)] leading-snug italic font-normal">
            &ldquo;It started with what looked like a small ‘Add to Wallet’ feature. The deeper I looked, the more the interesting problem became issuance, updates, validation, distribution and lifecycle management.&rdquo;
          </p>
          <p className="mt-3 text-xs text-[var(--muted)] font-mono">
            — Emmanuel Biolatiri, Founder &amp; Architect of walletKit
          </p>
        </div>
      </div>

      {/* Visual Architectural System Flow with Dynamic Signals */}
      <div className="p-6 sm:p-10 border-b border-[var(--line-faint)]">
        <div className="flex items-center justify-between mb-8">
          <div>
            <span className="font-mono text-xs uppercase tracking-wider text-[var(--muted)]">
              Architecture Schematic
            </span>
            <h4 className="font-mono text-sm sm:text-base font-medium text-[var(--ink)] mt-1">
              End-to-End Cryptographic Pass Pipeline
            </h4>
          </div>
          <div className="hidden sm:flex items-center gap-2 font-mono text-xs text-[var(--muted)]">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] animate-ping" />
            <span>Real-time Signal Sync</span>
          </div>
        </div>

        {/* Dynamic Nodes with 3D Tilt */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative">
          {/* Node 1: Organisation */}
          <TiltContainer maxTilt={2.5}>
            <div className="h-full border border-[var(--line-faint)] bg-[var(--paper-card)] p-5 flex flex-col justify-between hover:border-[var(--line-strong)] transition-colors">
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-[var(--muted)] mb-3">
                  <span>01</span>
                  <span>ORIGIN</span>
                </div>
                <h5 className="font-serif text-lg text-[var(--ink)] font-normal">
                  Organisation
                </h5>
                <p className="text-xs text-[var(--muted)] mt-1 leading-relaxed">
                  CRM, ticketing platform, membership DB, or custom API.
                </p>
              </div>
              <div className="pt-3 border-t border-[var(--line-faint)] font-mono text-[11px] text-[var(--accent)]">
                Webhook Event Payload
              </div>
            </div>
          </TiltContainer>

          {/* Node 2: walletKit Core */}
          <TiltContainer maxTilt={3}>
            <div className="h-full border-2 border-[var(--accent)] bg-[var(--accent-subtle)] p-5 flex flex-col justify-between relative shadow-sm">
              <div className="absolute -top-3 right-3 px-2 py-0.5 bg-[var(--accent)] text-[var(--paper)] font-mono text-[10px] uppercase tracking-wider font-semibold">
                Engine
              </div>
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-[var(--accent)] mb-3">
                  <span>02</span>
                  <span className="font-bold">SYSTEM</span>
                </div>
                <h5 className="font-serif text-lg text-[var(--ink)] font-bold">
                  walletKit
                </h5>
                <p className="text-xs text-[var(--ink-secondary)] mt-1 leading-relaxed">
                  PKCS#7 pass signing, Google JWT generation, APNs background worker, and verification scanner APIs.
                </p>
              </div>
              <div className="pt-3 border-t border-[var(--accent-border)] font-mono text-[11px] text-[var(--accent)] font-semibold">
                Signed .pkpass &amp; Push Worker
              </div>
            </div>
          </TiltContainer>

          {/* Node 3: Apple / Google Wallet */}
          <TiltContainer maxTilt={2.5}>
            <div className="h-full border border-[var(--line-faint)] bg-[var(--paper-card)] p-5 flex flex-col justify-between hover:border-[var(--line-strong)] transition-colors">
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-[var(--muted)] mb-3">
                  <span>03</span>
                  <span>WALLET OS</span>
                </div>
                <h5 className="font-serif text-lg text-[var(--ink)] font-normal">
                  Apple &amp; Google
                </h5>
                <p className="text-xs text-[var(--muted)] mt-1 leading-relaxed">
                  Native OS wallets across iOS, watchOS, Android, and WearOS.
                </p>
              </div>
              <div className="pt-3 border-t border-[var(--line-faint)] font-mono text-[11px] text-[var(--ink-secondary)]">
                APNs &amp; Google Wallet Push
              </div>
            </div>
          </TiltContainer>

          {/* Node 4: Member Device */}
          <TiltContainer maxTilt={2.5}>
            <div className="h-full border border-[var(--line-faint)] bg-[var(--paper-card)] p-5 flex flex-col justify-between hover:border-[var(--line-strong)] transition-colors">
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-[var(--muted)] mb-3">
                  <span>04</span>
                  <span>TERMINAL</span>
                </div>
                <h5 className="font-serif text-lg text-[var(--ink)] font-normal">
                  Member Device
                </h5>
                <p className="text-xs text-[var(--muted)] mt-1 leading-relaxed">
                  Lock-screen notifications, dynamic barcode scanning, NFC tap, and instant pass verification.
                </p>
              </div>
              <div className="pt-3 border-t border-[var(--line-faint)] font-mono text-[11px] text-[var(--accent)]">
                Rotating Cryptographic Token
              </div>
            </div>
          </TiltContainer>
        </div>

        {/* Dynamic Architectural Data Flow Pipeline */}
        <div className="mt-8 pt-6 border-t border-[var(--line-faint)] flex flex-wrap items-center justify-between gap-4 font-mono text-xs text-[var(--muted)]">
          <div className="flex items-center gap-2">
            <span className="text-[var(--ink)] font-medium">Pipeline:</span>
            <span className="text-[var(--accent)]">REST Hook</span>
            <span>──→</span>
            <span className="text-[var(--accent)]">PKCS#7 Sign</span>
            <span>──→</span>
            <span className="text-[var(--accent)]">APNs Sync</span>
            <span>──→</span>
            <span className="text-[var(--accent)]">Dynamic Token</span>
          </div>

          <span className="text-[11px] text-[var(--muted)]">Hover cards for 3D perspective</span>
        </div>
      </div>

      {/* 4 Capabilities Grid */}
      <div className="p-6 sm:p-10">
        <div className="flex items-center justify-between mb-6">
          <span className="font-mono text-xs uppercase tracking-wider text-[var(--muted)]">
            Capabilities Matrix
          </span>
          <span className="font-mono text-xs text-[var(--accent)]">
            Click to inspect subsystem specs
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
                className={`p-5 text-left border transition-all duration-150 flex flex-col justify-between min-h-[210px] ${
                  isSelected
                    ? "border-[var(--accent)] bg-[var(--paper-card)] shadow-sm -translate-y-0.5"
                    : "border-[var(--line-faint)] bg-[var(--paper)] hover:bg-[var(--paper-hover)]"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between font-mono text-xs mb-3">
                    <span className="text-[var(--accent)] font-bold">{pillar.num}</span>
                    <span className="uppercase text-[10px] text-[var(--muted)] tracking-wider">Subsystem</span>
                  </div>
                  <h5 className="font-serif text-xl font-normal text-[var(--ink)] mb-2">
                    {pillar.name}
                  </h5>
                  <p className="text-xs text-[var(--ink-secondary)] leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-[var(--line-faint)]">
                  <span className="font-mono text-[10px] uppercase text-[var(--accent)] font-medium">
                    {isSelected ? "● Viewing Specs" : "○ Select"}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Pillar Specifications */}
        <div className="mt-4 p-5 border border-[var(--line-faint)] bg-[var(--paper-card)]">
          <div className="flex items-center gap-2 font-mono text-xs text-[var(--accent)] mb-3">
            <span>Subsystem Specifications:</span>
            <span className="font-semibold text-[var(--ink)]">{pillars[selectedPillar].name} Infrastructure</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {pillars[selectedPillar].specs.map((spec, idx) => (
              <div
                key={idx}
                className="p-3 border border-[var(--line-faint)] bg-[var(--paper)] text-xs text-[var(--ink-secondary)] font-mono leading-relaxed"
              >
                <span className="text-[var(--accent)] font-bold mr-1.5">[{idx + 1}]</span>
                {spec}
              </div>
            ))}
          </div>
        </div>

        {/* External Link CTA */}
        <div className="mt-8 pt-6 border-t border-[var(--line-faint)] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="text-xs font-mono text-[var(--muted)]">
            Production API contracts, pass builders, and webhook telemetry.
          </div>
          <a
            href="https://walletkit.app"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 border border-[var(--ink)] bg-[var(--ink)] text-[var(--paper)] hover:bg-[var(--accent)] hover:border-[var(--accent)] text-xs font-mono transition-all duration-150 shadow-sm"
          >
            <span>Explore walletkit.app</span>
            <span>↗</span>
          </a>
        </div>
      </div>
    </div>
  );
}
