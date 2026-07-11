export interface ExperienceQuest {
  id: string;
  company: string;
  role: string;
  period: string;
  bullets: string[];
  skills: string[];
  questTier: "S-Tier" | "A-Tier" | "B-Tier";
  rewards: {
    xp: number;
    gold: number;
    loot: string[];
  };
  liveText?: string;
  liveLink?: string;
  githubText?: string;
  githubLink?: string;
}

export const experiences: ExperienceQuest[] = [
  {
    id: "outscal",
    company: "Outscal",
    role: "Fullstack Developer",
    period: "Jul 2024 – Oct 2026",
    bullets: [
      "Built an LLM-powered scraping system using Gemini to extract structured data from inconsistent HTML without XPath, while designing hybrid job-status detection using rule signals, LLM classification, and a human feedback loop.",
      "Scaled pipeline throughput from 20–30K jobs (2 days) to 55K–60K jobs/day by optimizing scraping, migrating Selenium → Firecrawl, and building an async AWS SQS pipeline for resume parsing, IP enrichment, and fault-tolerant processing.",
      "Developed SEO infrastructure using the Indexing API, AWS Lambda, Amazon S3, and Next.js revalidation, improving indexing speed and page refresh performance while accelerating content delivery and reducing content update latency.",
    ],
    skills: [
      "React",
      "Node.js",
      "Express.js",
      "Next.js",
      "Gemini AI API",
      "AWS (S3, SQS, Lambda)",
      "Firecrawl",
      "Selenium",
      "TypeScript",
    ],
    questTier: "S-Tier",
    rewards: {
      xp: 1500,
      gold: 450,
      loot: [
        "Gemini Scraping Scroll",
        "AWS Pipeline Engine",
        "SEO Master Emblem",
      ],
    },
  },
  {
    id: "sayacare",
    company: "SayaCare",
    role: "Angular Developer",
    period: "Aug 2022 – Jun 2024",
    bullets: [
      "Automated inventory management workflows and developed a WebSocket-based label printing system for real-time SpeedPost processing, reducing manual effort, data handling errors, refresh delays, and improving operational efficiency.",
      "Redesigned the internal staff portal with ticketing workflows, employee management modules, and real-time chat, streamlining issue resolution, improving cross-team coordination, communication, and overall operational productivity.",
    ],
    skills: [
      "Angular",
      "TypeScript",
      "WebSockets",
      "REST APIs",
      "Real-time Chat",
      "Inventory Systems",
    ],
    questTier: "A-Tier",
    rewards: {
      xp: 1200,
      gold: 300,
      loot: [
        "WebSocket Label Printer",
        "Real-time Portal Key",
        "Staff Portal Shield",
      ],
    },
  },
  {
    id: "esmsys",
    company: "ESMSYS",
    role: "Frontend Intern",
    period: "Aug 2021 – Oct 2021",
    bullets: [
      "Built reusable Angular components integrated with REST APIs, data grids, and pagination, while implementing toast notifications and structured UI feedback mechanisms to improve responsiveness, consistency, and user experience.",
    ],
    skills: [
      "Angular",
      "JavaScript",
      "REST APIs",
      "Pagination",
      "Data Grids",
      "Toast Notifications",
    ],
    questTier: "B-Tier",
    rewards: {
      xp: 600,
      gold: 150,
      loot: ["Reusable UI Gauntlets", "REST API Compass", "Pagination Boots"],
    },
    // Omitted entirely to verify hidden state
  },
];
