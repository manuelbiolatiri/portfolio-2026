export interface WorkProject {
  id: string;
  title: string;
  tagline: string;
  description: string;
  metadata: string;
  tags: string[];
  link?: string;
  linkText?: string;
  isExternal?: boolean;
  highlight?: boolean;
  scope: string;
  points: string[];
  metrics?: { label: string; value: string }[];
}

export const WORK_PROJECTS: WorkProject[] = [
  {
    id: "nethub",
    title: "NetHub Platform Infrastructure",
    tagline: "Payments, subscriptions, platform services, CI/CD and production ownership across commercial systems.",
    description:
      "Engineered core payment and subscription infrastructure powering multi-tenant commercial operations. Focused on transactional integrity, idempotent billing webhook ingestion, resilient queue-based event processing, and automated zero-downtime deployment pipelines.",
    metadata: "Payments · Platform · Production",
    tags: ["Payment Systems", "Platform Services", "Distributed Systems", "CI/CD", "AWS"],
    scope: "Platform & Payments Infrastructure",
    points: [
      "Designed and maintained payment state machines handling recurring subscriptions, complex billing cycles, and automated recovery.",
      "Engineered idempotent webhook processing and transactional outbox patterns to guarantee at-least-once delivery without double-charge risk.",
      "Owned CI/CD pipelines, containerization, and AWS production infrastructure, ensuring consistent zero-downtime releases.",
      "Implemented comprehensive application monitoring, structured audit logging, and automated health probing."
    ],
    metrics: [
      { label: "Architecture", value: "Event-Driven & Idempotent" },
      { label: "Cloud & Ops", value: "AWS · Docker · CI/CD" },
      { label: "Focus", value: "Zero-Downtime Reliability" }
    ]
  },
  {
    id: "walletkit",
    title: "walletKit",
    tagline: "Apple and Google Wallet infrastructure for membership, events, entitlement, updates and validation.",
    description:
      "An infrastructure platform that transforms mobile passes from static digital barcodes into live, push-enabled communication and identity channels. Solves cryptographic pass signing, dynamic manifest generation, APNs/Google push synchronization, and low-latency validation.",
    metadata: "Wallet infrastructure · 2026 →",
    tags: ["Apple Wallet", "Google Wallet", "PKPass", "Push Infrastructure", "Cryptography"],
    link: "https://walletkit.app",
    linkText: "walletkit.app",
    isExternal: true,
    highlight: true,
    scope: "Founder & System Architect",
    points: [
      "Built automated cryptographic PKCS#7 signing pipelines and dynamic manifest generation for Apple Wallet (.pkpass) and Google Wallet JWT objects.",
      "Architected APNs push notification engines and Google Wallet REST sync to update live passes silently on user devices upon balance or event changes.",
      "Engineered low-latency verification scanner endpoints supporting both online validation and offline cryptographically verifiable tokens.",
      "Designed developer-first API contracts, webhooks, and pass lifecycle webhooks for seamless platform integration."
    ],
    metrics: [
      { label: "Platforms", value: "Apple & Google Wallet" },
      { label: "Security", value: "PKCS#7 Signed Manifests" },
      { label: "Status", value: "In Active Production" }
    ]
  },
  {
    id: "kuja",
    title: "Kuja / AB InBev",
    tagline: "Commercial backend systems operating across African markets, with an emphasis on distributed services, scale and production reliability.",
    description:
      "Commercial enterprise backend architecture serving high-velocity distribution channels across emerging markets. Tackled distributed data consistency, offline-tolerant synchronization, and reliable transaction processing across variable connectivity conditions.",
    metadata: "Backend systems · Africa",
    tags: ["Distributed Services", "Commercial Systems", "Resilience", "Data Scale"],
    scope: "Commercial Distributed Backend",
    points: [
      "Architected distributed backend services managing commercial ordering, inventory tracking, and transaction settlement across African regional hubs.",
      "Engineered resilient data sync strategies capable of handling network partitions, transient disconnects, and deferred reconciliation.",
      "Optimized query performance and schema designs for high-throughput relational databases operating under peak seasonal retail demand.",
      "Established strict service boundaries, contract testing, and asynchronous messaging pipelines between core commercial modules."
    ],
    metrics: [
      { label: "Footprint", value: "Pan-African Distribution" },
      { label: "Topology", value: "Distributed Microservices" },
      { label: "Engineering", value: "Partition & Fault Tolerant" }
    ]
  }
];
