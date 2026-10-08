export interface LifecycleStage {
  step: string;
  name: string;
  summary: string;
  details: string[];
  primaryArtifacts: string;
}

export const LIFECYCLE_STAGES: LifecycleStage[] = [
  {
    step: "01",
    name: "Product & Domain Ownership",
    summary: "Driving end-to-end delivery from ambiguous requirements to production",
    details: [
      "Translating ambiguous domain problems into clear technical constraints and system boundaries.",
      "Partnering across disciplines to validate user experience assumptions before technical commitment.",
      "Balancing long-term architectural health with rapid, iterative feature velocity."
    ],
    primaryArtifacts: "Domain Models · Requirement Specs · User Flows"
  },
  {
    step: "02",
    name: "System Architecture",
    summary: "Designing resilient distributed systems and robust data models",
    details: [
      "Designing relational database schemas, state machine transitions, and data integrity guarantees.",
      "Establishing strict API contracts, webhook architectures, and distributed idempotency.",
      "Building decoupled, event-driven services that isolate failure domains."
    ],
    primaryArtifacts: "Architecture Graphs · Schema DDLs · API Contracts"
  },
  {
    step: "03",
    name: "Infrastructure & Scale",
    summary: "Building and operating highly available, performant cloud environments",
    details: [
      "Designing scalable deployment topologies optimized for low latency and high availability.",
      "Implementing zero-downtime rolling releases and backwards-compatible database migrations.",
      "Scaling read-heavy workloads with replication, connection pooling, and optimized indexing."
    ],
    primaryArtifacts: "Deployment Topologies · Migration Plans · Benchmarks"
  },
  {
    step: "04",
    name: "Security & Observability",
    summary: "Ensuring cryptographic integrity, compliance, and deep system visibility",
    details: [
      "Implementing threat modeling, strict data isolation, and secure cross-service communication.",
      "Instrumenting structured application logging, telemetry dashboards, and proactive alert thresholds.",
      "Automating anomaly detection, dead letter queue analysis, and recovery runbooks."
    ],
    primaryArtifacts: "Audit Trails · Alert Monitors · Cryptographic Keys"
  }
];
