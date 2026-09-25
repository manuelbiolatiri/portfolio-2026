export interface WritingArticle {
  id: string;
  title: string;
  description: string;
  type: "Essay" | "Technology" | "Architecture";
  date: string;
  metadata: string;
  link?: string;
  isExternal?: boolean;
  publication?: string;
}

export interface ResearchPublication {
  id: string;
  title: string;
  abstractIntro: string;
  publication: string;
  date: string;
  role: string;
  metadata: string;
  topics: string[];
  link?: string;
}

export const ARTICLES: WritingArticle[] = [
  {
    id: "acquisition-vs-retention-passes",
    title: "Acquisition Is Being Automated. Retention Is What’s Left.",
    description:
      "Why I stopped thinking about wallet passes as digital loyalty cards and started treating them as permanent, push-enabled communication and identity channels.",
    type: "Essay",
    date: "Sep 2026",
    metadata: "Essay · Sep 2026",
    publication: "Substack"
  },
  {
    id: "ai-agents-need-passes",
    title: "AI agents are going to need passes too",
    description:
      "Notes on identity, cryptographic permissioning, single-use tokens, and wallet infrastructure for autonomous agentic software interacting with physical and digital systems.",
    type: "Technology",
    date: "2026",
    metadata: "Technology · 2026",
    publication: "Substack"
  }
];

export const PUBLISHED_RESEARCH: ResearchPublication[] = [
  {
    id: "biochar-heavy-metals-remediation",
    title:
      "Chemical modification and morphological characterisation of biomass-derived biochars for the adsorptive removal of Pb²⁺, Cu²⁺, and Ni²⁺ from aqueous solutions",
    abstractIntro:
      "Alongside my software engineering work, I am a co-author of academic research in materials and environmental chemistry, reflecting my earlier background in Industrial Chemistry.",
    publication: "Next Research / Elsevier",
    date: "May 2026",
    role: "Co-author · Research publication",
    metadata: "Next Research / Elsevier, May 2026",
    topics: ["Materials Chemistry", "Biomass Biochars", "Heavy Metals Adsorption", "Morphological Characterisation"]
  }
];
