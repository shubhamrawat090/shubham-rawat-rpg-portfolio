export interface QuickStat {
  value: string;
  label: string;
  rpgFlavor: string;
}

export interface HighlightItem {
  label: string;
  detail: string;
}

export interface ProfileBrief {
  name: string;
  title: string;
  currentCompany: string;
  yearsOfExperience: string;
  resumeUrl?: string;
  summary: string;
  quickStats: QuickStat[];
  coreStrengths: string[];
  highlights: HighlightItem[];
  keyTechnologies: string[];
}

export const profileBriefData: ProfileBrief = {
  name: "Shubham Rawat",
  title: "Full Stack Developer",
  currentCompany: "Outscal",
  yearsOfExperience: "3+ Years",
  resumeUrl: "https://www.linkedin.com/in/shubhamrawat090/",
  summary:
    "Full Stack Software Developer specializing in resilient high-throughput data extraction pipelines, distributed cloud workflows, and high-performance interactive interfaces. Proven track record scaling processing pipelines to 60K jobs/day, designing automated real-time systems, and fixing critical bugs in global developer tooling.",
  quickStats: [
    {
      value: "60K/day",
      label: "Pipeline Scale",
      rpgFlavor: "High-Throughput Harvest"
    },
    {
      value: "9.20",
      label: "B.Tech CGPA",
      rpgFlavor: "Sage Intelligence Boost"
    },
    {
      value: "11+",
      label: "Forged Relics",
      rpgFlavor: "Production Apps & Demos"
    },
    {
      value: "7+",
      label: "Open Source PRs",
      rpgFlavor: "Hacktoberfest & Stylelint"
    }
  ],
  coreStrengths: [
    "Distributed high-throughput ETL & web scraping with Gemini LLM parsing & Firecrawl",
    "Scalable asynchronous messaging pipelines with AWS SQS, Lambda, and Amazon S3",
    "Real-time bi-directional systems via WebSockets, thermal printing & staff chat",
    "High-performance frontend architecture with React, Next.js, TypeScript & Angular",
    "Algorithmic precision: O(1) LRU caches, token-bucket rate limiters & Graph visualizers",
    "Open-source triumphs: bug fixes merged into Stylelint VSCode extension and 100xDevs"
  ],
  highlights: [
    {
      label: "Outscal Pipeline Throughput Expansion",
      detail:
        "Scaled processing throughput from 20–30K jobs (2 days) to 55K–60K jobs/day by optimizing scraping, migrating from Selenium to Firecrawl, and building an async AWS SQS pipeline for resume parsing and IP enrichment."
    },
    {
      label: "Stylelint VSCode Extension Triumph (Mythic Rarity)",
      detail:
        "Investigated and fixed a widely reported issue in the official Stylelint VSCode extension, restoring linting stability for developers worldwide and earning massive community acclaim."
    },
    {
      label: "SayaCare Real-Time Operations Automation",
      detail:
        "Automated pharmaceutical inventory workflows and architected a real-time WebSocket-based label printing system for SpeedPost integration, eliminating manual input errors."
    },
    {
      label: "Open Source & Hacktoberfest Contributions",
      detail:
        "Active contributor to open-source software with 7 pull requests merged during Hacktoberfest, including enhancements to the popular 100xDevs repository."
    }
  ],
  keyTechnologies: [
    "React",
    "TypeScript",
    "Next.js",
    "Node.js",
    "Express.js",
    "Angular",
    "AWS (S3, SQS, Lambda)",
    "Gemini AI API",
    "MongoDB",
    "Tailwind CSS",
    "WebSockets",
    "Docker",
    "Git"
  ]
};
