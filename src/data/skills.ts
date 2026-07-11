export interface SkillItem {
  name: string;
  level: number; // 1-5 stars or points
  type: string;  // e.g. "Passive", "Active Spell", "Aura"
  description: string;
}

export interface SkillCategory {
  id: string;
  categoryName: string;
  iconName: string;
  description: string;
  skills: SkillItem[];
  liveText?: string;
  liveLink?: string;
  githubText?: string;
  githubLink?: string;
}

export const skillsList: SkillCategory[] = [
  {
    id: "languages",
    categoryName: "Languages",
    iconName: "Terminal",
    description: "The core vernacular of the computing realms.",
    skills: [
      { name: "JavaScript", level: 5, type: "Core Attribute", description: "Universal language of interactive web incantations." },
      { name: "TypeScript", level: 5, type: "Shield Aura", description: "Adds compile-time armor and type safety to scripts." },
      { name: "SQL", level: 4, type: "Deep Scribing", description: "Direct communication with persistent relational data tables." }
    ],
    liveText: "Interactive Playground",
    liveLink: "https://example.com/languages-playground",
    githubText: "Languages Library",
    githubLink: "https://github.com/shubhamrawat-ofc"
  },
  {
    id: "frameworks",
    categoryName: "Frameworks & Runtimes",
    iconName: "Layers",
    description: "Constructs and scaffolds to deploy immense digital fortresses.",
    skills: [
      { name: "React", level: 5, type: "Chameleon Spell", description: "Mastery of modern hooks and declarative state trees." },
      { name: "Angular", level: 5, type: "Enterprise Fortress", description: "Heavy-duty architecture built for robust, modular layouts." },
      { name: "Node.js", level: 5, type: "Engine Core", description: "Fueling rapid server-side asynchronous execution." },
      { name: "Express.js", level: 5, type: "Nexus Router", description: "Crafting lightweight, lightning-fast API gatekeepers." },
      { name: "Next.js", level: 5, type: "Dimension Portal", description: "Server-side rendering, SEO pipelines, and route hydration." },
      { name: "Tailwind CSS", level: 5, type: "Illusionist Cloak", description: "Instant utility styling with rich aesthetic palettes." }
    ]
  },
  {
    id: "tools",
    categoryName: "Tools & Masteries",
    iconName: "Wrench",
    description: "Instruments used to forge, inspect, and optimize code.",
    skills: [
      { name: "Git", level: 5, type: "Time Scribe", description: "Branching timelines and merging code universes smoothly." },
      { name: "Postman", level: 5, type: "API Probe", description: "Scouting and validating distant server request endpoints." },
      { name: "Jenkins", level: 4, type: "Automated Golem", description: "Continuous integration and build-automation workflows." },
      { name: "MongoDB", level: 4, type: "Scroll Vault", description: "NoSQL document storage for structured JSON payloads." },
      { name: "Firecrawl", level: 5, type: "Harvester Drone", description: "Advanced web crawling and markdown extraction pipelines." },
      { name: "WebSockets", level: 5, type: "Aether Link", description: "Instantaneous, bidirectional real-time communication lines." },
      { name: "LLM Integration", level: 5, type: "Cognitive Orb", description: "Weaving artificial intelligence agents into core products." },
      { name: "Prompt Engineering", level: 5, type: "Thought Conduit", description: "Directing LLM output schemas through precise context structure." },
      { name: "Docker", level: 4, type: "Containment Grid", description: "Sealing apps inside reliable, cross-platform containment pods." },
      { name: "Gemini AI API", level: 5, type: "Cosmic Mind", description: "Tapping into Google's premier models for analytical intelligence." }
    ]
  },
  {
    id: "platforms",
    categoryName: "Platforms & Clouds",
    iconName: "Cloud",
    description: "The celestial spaces where software structures live.",
    skills: [
      { name: "AWS (S3, SQS, Lambda)", level: 5, type: "Divine Cloud", description: "Scalable storage buckets, message queues, and serverless scripts." },
      { name: "Vercel", level: 5, type: "Instant Beacon", description: "Ultra-fast automated edge routing and static site deployment." },
      { name: "Langfuse", level: 4, type: "Telemetry Lens", description: "Observing, debugging, and tracing LLM application chains." },
      { name: "Gemini CLI", level: 4, type: "Command Orb", description: "Orchestrating model configurations directly from the terminal." },
      { name: "Claude Code", level: 4, type: "Synthesizer", description: "Advanced terminal-based AI coding environment workflows." }
    ]
  }
];
