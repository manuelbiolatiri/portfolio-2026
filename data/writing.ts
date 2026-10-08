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
  image?: string;
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
  image?: string;
  logo?: string;
}

export const ARTICLES: WritingArticle[] = [
  {
    id: "when-discovery-gets-automated",
    title: "When Discovery Gets Automated, What Happens to the Customer Relationship?",
    description: "Why I stopped thinking about wallet passes as loyalty cards",
    type: "Essay",
    date: "Sep 25, 2026",
    metadata: "Essay · Sep 25, 2026",
    publication: "Substack",
    link: "https://manuelbiolatiri.substack.com/p/when-discovery-gets-automated-what",
    isExternal: true,
    image: "https://substackcdn.com/image/fetch/$s_!iGvD!,f_auto,q_auto:best,fl_progressive:steep/https%3A%2F%2Fmanuelbiolatiri.substack.com%2Ftwitter%2Fsubscribe-card.jpg%3Fv%3D128031378%26version%3D9"
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
    topics: ["Materials Chemistry", "Biomass Biochars", "Heavy Metals Adsorption", "Morphological Characterisation"],
    link: "https://www.sciencedirect.com/science/article/abs/pii/S3050475926005555",
    image: "/images/next-research.gif",
    logo: "/images/elsevier-non-solus-new-grey.svg"
  }
];
