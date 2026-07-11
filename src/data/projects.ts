export interface ProjectQuest {
  id: string;
  title: string;
  period: string;
  description: string;
  techStack: string[];
  link?: string; // fallback
  relicRating: string; // RPG equivalent of ratings/stars
  stats: {
    complexity: "Legendary" | "Epic" | "Rare";
    manaCost: number;
    cooldownSec: number;
    specialAbility: string;
  };
  liveText?: string;
  liveLink?: string;
  githubText?: string;
  githubLink?: string;
}

export const projects: ProjectQuest[] = [
  {
    id: "rate-limiter-lru",
    title: "Client-Side API Rate Limiter & LRU Cache Visualizer",
    period: "Jan 2026 – Mar 2026",
    description:
      "Engineered a token bucket API rate limiter and O(1) LRU cache with request flow, refill cycles, MRU/LRU state, and cache eviction visualization using reusable custom hooks, improving performance, reliability, debugging, and modularity.",
    techStack: ["React", "TypeScript", "Vite", "Tailwind CSS", "Git"],
    link: "https://github.com/shubhamrawat-ofc", // Or appropriate github/demo links
    relicRating: "⭐⭐⭐⭐⭐",
    stats: {
      complexity: "Legendary",
      manaCost: 80,
      cooldownSec: 5,
      specialAbility:
        "Evicts least-recently used cache data and limits request floods seamlessly",
    },
    liveText: "Live Link",
    liveLink: "https://client-side-api-rate-limiter-lru-ca.vercel.app/",
    githubText: "Forge Link (Github)",
    githubLink:
      "https://github.com/shubhamrawat090/Client_Side_API_Rate_Limiter_LRU_Cache",
  },
  {
    id: "ai-roast-motivator",
    title: "AI Roast Motivator",
    period: "Jul 2025 – Aug 2025",
    description:
      "Built an AI chatbot delivering context-aware roast-style motivation using prompt-engineered witty responses and interactive chat experience, enabling natural conversations that improved productivity, engagement, and response quality.",
    techStack: ["React", "TypeScript", "Gemini AI API", "Git"],
    relicRating: "⭐⭐⭐⭐⭐",
    stats: {
      complexity: "Epic",
      manaCost: 65,
      cooldownSec: 3,
      specialAbility:
        "Inflicts 50 emotional damage while boosting your developer productivity by 200%",
    },
    liveText: "Live Link",
    liveLink: "https://mowitate-me-ai.vercel.app/",
    githubText: "Forge Link (Github)",
    githubLink: "https://github.com/shubhamrawat090/Mowitate-Me---AI",
  },
];
