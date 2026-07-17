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
  {
    id: "chess-react",
    title: "Chess (React)",
    period: "Jun 2024 – Jun 2024",
    description:
      "Developed a functional chess prototype focusing on core gameplay logic, implementing complex move validation, and attack detection logic for chess pieces.",
    techStack: ["React", "JavaScript", "CSS"],
    relicRating: "⭐⭐⭐⭐",
    stats: {
      complexity: "Epic",
      manaCost: 55,
      cooldownSec: 4,
      specialAbility:
        "Validates absolute tactical paths and defends the king from sudden ambush",
    },
    liveText: "Live Link",
    liveLink: "https://chess-react-tau.vercel.app/",
    githubText: "Forge Link (Github)",
    githubLink: "https://github.com/shubhamrawat090/Chess-React",
  },
  {
    id: "yt-study-buddy",
    title: "YT Study Buddy Extension",
    period: "Feb 2024 – Mar 2024",
    description:
      "Built a Chrome extension to calculate total duration of YouTube playlists by extracting video duration dynamically using DOM parsing techniques. Designed a lightweight popup UI for quick productivity insights.",
    techStack: ["HTML", "CSS", "JavaScript", "Chrome Extensions"],
    relicRating: "⭐⭐⭐⭐",
    stats: {
      complexity: "Rare",
      manaCost: 40,
      cooldownSec: 3,
      specialAbility:
        "Transmutes lengthy video playlists into precious hours of saved study time",
    },
    liveText: "LinkedIn Post",
    liveLink:
      "https://www.linkedin.com/feed/update/urn:li:activity:7177360529127063552/",
    githubText: "Forge Link (Github)",
    githubLink: "https://github.com/shubhamrawat090/YT-study-buddy-extension",
  },
  {
    id: "solution-edge",
    title: "Solution Edge (Business Website)",
    period: "Oct 2023 – Jan 2024",
    description:
      "Developed a modern business website with highly responsive and clean UI, integrating EmailJS for serverless contact form functionality and utilizing Tailwind CSS for professional brand presentation.",
    techStack: ["React", "TypeScript", "Tailwind CSS", "EmailJS"],
    relicRating: "⭐⭐⭐⭐",
    stats: {
      complexity: "Rare",
      manaCost: 45,
      cooldownSec: 3,
      specialAbility:
        "Converts standard inquiries into immediate messages using serverless email magic",
    },
    liveText: "Live Link",
    liveLink: "https://solution-edge-website.vercel.app/",
    githubText: "Forge Link (Github)",
    githubLink: "https://github.com/shubhamrawat090/solution-edge-website",
  },
  {
    id: "studynotion",
    title: "StudyNotion (Course Platform)",
    period: "Jul 2023 – Nov 2023",
    description:
      "Built full-stack course platform with authentication, role-based dashboards, secure JWT-based login, and Razorpay payment gateway integration for course purchase workflow.",
    techStack: [
      "MongoDB",
      "Express.js",
      "React",
      "Node.js",
      "Tailwind CSS",
      "JWT",
      "Razorpay",
    ],
    relicRating: "⭐⭐⭐⭐⭐",
    stats: {
      complexity: "Legendary",
      manaCost: 75,
      cooldownSec: 6,
      specialAbility:
        "Grants users access to sacred scrolls of knowledge with secure gatekeeping protocols",
    },
    liveText: "Live Link",
    liveLink: "https://studynotion-frontend-tau.vercel.app/",
    githubText: "Forge Link (Github)",
    githubLink: "https://github.com/shubhamrawat090/STUDYNOTION--MERN",
  },
  {
    id: "docdrive",
    title: "DocDrive - Frontend-only Google Drive Clone",
    period: "Oct 2021 – Feb 2022",
    description:
      "Emulated Google Drive's core features like storing files and maintaining directory structure. Built with a tree data structure using recursion and depth first search for operations, saving metadata securely to LocalStorage.",
    techStack: ["HTML", "CSS", "JavaScript"],
    relicRating: "⭐⭐⭐⭐⭐",
    stats: {
      complexity: "Epic",
      manaCost: 60,
      cooldownSec: 5,
      specialAbility:
        "Saves complex tree hierarchies inside local browser storage runes using recursive algorithms",
    },
    liveText: "Live Link",
    liveLink: "https://shubhamrawat090.github.io/Drive-Clone/",
    githubText: "Forge Link (Github)",
    githubLink: "https://github.com/shubhamrawat090/Drive-Clone",
  },
  {
    id: "connect-4",
    title: "Connect 4 (Browser Game)",
    period: "Timeless",
    description:
      "Built a Connect 4 browser game from scratch using pure JavaScript. Implemented grid-based game logic including move validation, gravity effect, and win detection algorithm with a highly responsive layout.",
    techStack: ["HTML", "CSS", "JavaScript"],
    relicRating: "⭐⭐⭐",
    stats: {
      complexity: "Rare",
      manaCost: 35,
      cooldownSec: 3,
      specialAbility:
        "Triggers gravity vectors to align four ancient artifacts in a row",
    },
    liveText: "Play Game",
    liveLink: "https://shubhamrawat090.github.io/ConnectFour/",
    githubText: "Forge Link (Github)",
    githubLink: "https://github.com/shubhamrawat090/ConnectFour",
  },
  {
    id: "huck-dunter",
    title: "Huck Dunter (Duck Hunter Game)",
    period: "Timeless",
    description:
      "Built a browser-based Duck Hunter style game using pure JavaScript. Implemented core mechanics including duck movement, click detection, score tracking, and countdown timer. Prototyped using vibe coding.",
    techStack: ["HTML", "CSS", "JavaScript"],
    relicRating: "⭐⭐⭐",
    stats: {
      complexity: "Rare",
      manaCost: 30,
      cooldownSec: 3,
      specialAbility:
        "Detects speedy aerial targets in real-time and tracks hunting scores",
    },
    liveText: "Play Game",
    liveLink: "https://shubhamrawat090.github.io/Huck-Dunter-Vibe-Coding/",
    githubText: "Forge Link (Github)",
    githubLink: "https://github.com/shubhamrawat090/Huck-Dunter-Vibe-Coding",
  },
  {
    id: "trie-visualizer",
    title: "Interactive Trie Visualizer",
    period: "Timeless",
    description:
      "Built an interactive visualizer to demonstrate Trie (Prefix Tree) operations including word insertion and prefix search. Designed a dual-theme UI (Classic & Spooky) using Tailwind CSS and CSS variable-based theming.",
    techStack: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Gemini AI",
      "Data Structures",
    ],
    relicRating: "⭐⭐⭐⭐",
    stats: {
      complexity: "Epic",
      manaCost: 65,
      cooldownSec: 4,
      specialAbility:
        "Illuminates optimal word paths across spooky and classic search dimensions",
    },
    liveText: "Live Link",
    liveLink: "https://trie-visualizer-vibe-coding.vercel.app/",
    githubText: "Forge Link (Github)",
    githubLink: "https://github.com/shubhamrawat090/TRIE-VISUALIZER-VIBE-CODING",
  },
  {
    id: "topological-sort",
    title: "Topological Sort Visualizer",
    period: "Timeless",
    description:
      "Built an interactive visualizer to demonstrate Topological Sort using BFS (Kahn's Algorithm), graph creation with adjacency list representation, and dynamic edge inputs.",
    techStack: ["HTML", "CSS", "JavaScript"],
    relicRating: "⭐⭐⭐⭐",
    stats: {
      complexity: "Epic",
      manaCost: 50,
      cooldownSec: 4,
      specialAbility:
        "Resolves complex graph dependency nodes in a perfect linear sequence using BFS Kahn's algorithm",
    },
    liveText: "Live Link",
    liveLink:
      "https://shubhamrawat090.github.io/Topological-Sort-Visualizer-VIBE_CODED/",
    githubText: "Forge Link (Github)",
    githubLink:
      "https://github.com/shubhamrawat090/Topological-Sort-Visualizer-VIBE_CODED",
  },
];
