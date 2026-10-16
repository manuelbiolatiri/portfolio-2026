export interface WorkProject {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  employmentType: "Full-time" | "Contract" | "Founder";
  tagline: string;
  tags: string[];
  points: string[];
}

export const WORK_PROJECTS: WorkProject[] = [
  {
    id: "nethub",
    company: "NetHub",
    role: "Senior Software Engineer",
    period: "04/2023 — Present",
    location: "Manchester, UK",
    employmentType: "Full-time",
    tagline: "Technical ownership across multi-tenant payments, dual-region Stripe architecture, CI/CD pipelines, and AI systems.",
    tags: [
      "Node.js (NestJS)",
      "TypeScript",
      "Stripe Connect",
      "AWS (ECR & EC2)",
      "Docker",
      "Bitbucket Pipelines",
      "OpenAI APIs",
      "PostgreSQL"
    ],
    points: [
      "Technical owner of multiple production services, responsible for system architecture, 99.9%+ availability, and day-to-day operational health.",
      "Designed and implemented dual-Stripe-account architecture routing UK, Ireland, and US organisations through region-specific payment rails, directly unlocking NetHub's expansion into the US market.",
      "Rebuilt and scaled subscription and billing infrastructure end-to-end, covering Stripe Connect, subscriber lifecycle state machines, trial periods, prorations, immutable transaction ledgers, pricing updates, and automated recurring billing.",
      "Implemented an AI-powered image generation feature for community posts, engineering server-side prompt crafting, token/usage controls, rate-limiting, and production content safeguards.",
      "Established NetHub's CI/CD and deployment infrastructure from zero using Bitbucket Pipelines, Docker, AWS ECR, and EC2; 100% of subsequent service releases ship reliably through this pipeline."
    ],
  },
  {
    id: "ab-inbev",
    company: "AB InBev",
    role: "Backend Developer (Contract)",
    period: "10/2022 — 12/2023",
    location: "Pan-African Markets · Remote",
    employmentType: "Contract",
    tagline: "Microservices ownership and mission-critical enterprise ERP migration for Kuja, operating across multiple African markets.",
    tags: [
      "Microservices",
      "SAP (NewGen)",
      "Salesforce ERP",
      "Datadog",
      "Node.js",
      "PostgreSQL",
      "Enterprise Commerce",
      "Data Migration"
    ],
    points: [
      "Led the migration from Salesforce ERP to SAP (NewGen) through Kuja, handling customer identity mapping, schema transformation, and data migration to eliminate redundant licensing and reduce operational costs by 20%.",
      "Owned and maintained the order, invoice, and rewards microservices powering high-throughput distributor purchasing across multiple African regional markets.",
      "Partnered closely with DevOps and product teams to support safe production deployments, live schema migrations, and zero-downtime hotfixes.",
      "Implemented comprehensive system observability, tracing, and automated alerting via Datadog to uphold high reliability across distributed commercial microservices.",
      "Ensured rigorous transactional consistency between Kuja distributor channels and central enterprise ERP financial reporting ledgers."
    ],
  },
  {
    id: "obiex",
    company: "Obiex",
    role: "Backend Developer",
    period: "11/2021 — 03/2023",
    location: "Digital Finance · Remote / Enugu",
    employmentType: "Full-time",
    tagline: "High-volume utility payment services, performance optimization, automated load testing, and growth engineering.",
    tags: [
      "Node.js",
      "TypeScript",
      "Jest",
      "Apache JMeter",
      "PostgreSQL",
      "Bills Payment Rails",
      "API Integrations",
      "Performance Tuning"
    ],
    points: [
      "Steered user acquisition initiatives by designing and building the promotions and tasks reward feature, driving an increase in user acquisition of 300%.",
      "Owned and maintained Obiex's high-reliability bills-payment service covering electricity, airtime, mobile data, betting, and education payments on its digital finance platform.",
      "Enhanced database queries and data aggregation pipelines by up to 50%, significantly reducing processing turnaround for heavy financial and marketing reports over 6 months.",
      "Ensured comprehensive testing coverage through unit, integration, stress, and load testing pipelines using Jest and Apache JMeter.",
      "Worked directly with third-party institutional partners during onboarding, simplifying authentication flows and streamlining integration with Obiex's public APIs.",
      "Authored structured technical specifications, architecture diagrams, and documentation to align technical requirements between engineering teams and non-technical stakeholders."
    ],
  }
];
