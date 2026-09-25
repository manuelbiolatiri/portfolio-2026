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
    name: "Explore",
    summary: "Product investigation, system requirements, Figma prototyping",
    details: [
      "Translating ambiguous domain problems into clear technical constraints",
      "Interactive Figma wireframing to test UX assumptions before writing schemas",
      "Threat modelling, dependency mapping, and regulatory boundaries"
    ],
    primaryArtifacts: "Requirements Specs · Wireframes · Domain Models"
  },
  {
    step: "02",
    name: "Design",
    summary: "Architecture, API contracts, database modelling, payment flows",
    details: [
      "Relational schema modelling and state machine transition guarantees",
      "OpenAPI specifications, webhook contracts, and idempotency keys",
      "Decoupled asynchronous event architectures and transaction boundaries"
    ],
    primaryArtifacts: "State Machine Graphs · Schema DDLs · API Contracts"
  },
  {
    step: "03",
    name: "Build",
    summary: "TypeScript, Node.js, Django, distributed services",
    details: [
      "Strictly typed backend systems with domain-driven modular boundaries",
      "Resilient background workers, queue consumers, and retry strategies",
      "High-throughput cryptographic signing and signature verification engines"
    ],
    primaryArtifacts: "Type-Safe Services · Test Suites · Worker Queues"
  },
  {
    step: "04",
    name: "Ship",
    summary: "Docker, CI/CD, AWS",
    details: [
      "Multi-stage Docker images optimized for minimal attack surface and fast caching",
      "Automated GitHub Actions CI/CD pipelines with lint, typecheck, and migration runs",
      "Infrastructure orchestration on AWS (ECS, RDS, S3, CloudWatch, VPC routing)"
    ],
    primaryArtifacts: "Docker Images · CI/CD Pipelines · Cloud Formations"
  },
  {
    step: "05",
    name: "Operate",
    summary: "Monitoring, queues, incident response, production releases",
    details: [
      "Structured JSON application logging, metric dashboards, and threshold alerts",
      "Dead letter queue analysis, automated worker backoff, and recovery runbooks",
      "Zero-downtime rolling deployments and safe database schema migrations"
    ],
    primaryArtifacts: "Alert Monitors · Operational Runbooks · Audit Trails"
  },
  {
    step: "06",
    name: "Scale",
    summary: "Multi-region payments, migrations, commercial infrastructure",
    details: [
      "Multi-currency payment routing and distributed ledger reconciliation",
      "Read replicas, index optimization, and connection pooling under peak load",
      "Long-term architecture evolution balancing reliability with developer velocity"
    ],
    primaryArtifacts: "Replication Topologies · Migration Plans · Benchmarks"
  }
];
