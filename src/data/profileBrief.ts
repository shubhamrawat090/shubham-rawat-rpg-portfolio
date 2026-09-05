export interface ProfileBrief {
  name: string;
  title: string;
  tagline: string;
  yearsOfExperience: string;
  currentRole: string;
  currentCompany: string;
  location: string;
  summary: string;
  coreStrengths: string[];
  keyTechnologies: string[];
  highlights: {
    label: string;
    detail: string;
  }[];
  quickStats: {
    label: string;
    value: string;
    rpgFlavor: string;
  }[];
  resumeUrl?: string;
  email: string;
  linkedin: string;
  github: string;
}

export const profileBriefData: ProfileBrief = {
  name: "Shubham Rawat",
  title: "Full Stack Developer",
  tagline: "Building scalable web applications, robust pipelines, and intelligent AI-integrated systems.",
  yearsOfExperience: "3+ Years",
  currentRole: "Fullstack Developer",
  currentCompany: "Outscal",
  location: "India",
  summary:
    "Engineering high-performance web applications, resilient backend data pipelines, and AI integrations. Proven track record scaling web scrapers to 60K jobs/day on AWS, building real-time WebSocket systems, and crafting responsive frontend architectures with React, Next.js, and TypeScript.",
  coreStrengths: [
    "Full-Stack Architecture & Microservices",
    "High-Throughput Scraping & Data Pipelines (AWS SQS, Lambda, Firecrawl)",
    "LLM & Generative AI Integration (Gemini API, Prompt Engineering)",
    "Real-Time Systems & WebSockets",
    "Modern Frontend (React 19, Next.js, TypeScript, Tailwind CSS)",
    "API Design, Caching (LRU), & System Optimization",
  ],
  keyTechnologies: [
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Express.js",
    "AWS (S3, SQS, Lambda)",
    "Gemini AI API",
    "Angular",
    "MongoDB",
    "SQL",
    "WebSockets",
    "Tailwind CSS",
  ],
  highlights: [
    {
      label: "Pipeline Throughput 3x Scaling",
      detail:
        "Scaled Outscal job processing from 20K (2 days) to 60K/day using Firecrawl, async AWS SQS, and fault-tolerant parsing.",
    },
    {
      label: "Zero-XPath LLM Extraction",
      detail:
        "Engineered Gemini-powered scraping pipeline extracting structured data from erratic HTML with hybrid rule/AI classification.",
    },
    {
      label: "Real-Time Enterprise Systems",
      detail:
        "Constructed WebSocket-driven label printing at SayaCare for SpeedPost shipments and internal collaborative staff portals.",
    },
    {
      label: "Open-Source & Global Impact",
      detail:
        "Vanquished critical Stylelint VSCode extension issue and contributed pull requests merged into 100xDevs repository.",
    },
  ],
  quickStats: [
    { label: "Experience", value: "3+ Years", rpgFlavor: "Level 3 Dev" },
    { label: "Relics Forged", value: "11+ Projects", rpgFlavor: "Legendary Relics" },
    { label: "Academic CGPA", value: "9.20 / 10", rpgFlavor: "High Intelligence" },
    { label: "Community PRs", value: "7+ Merged", rpgFlavor: "Prestige Unlocked" },
  ],
  resumeUrl: "", // Available for direct PDF link or external view
  email: "shubhamrawat.ofc@gmail.com",
  linkedin: "https://www.linkedin.com/in/shubhamrawat-ofc",
  github: "https://github.com/shubhamrawat-ofc",
};
