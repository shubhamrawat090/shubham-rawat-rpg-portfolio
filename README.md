# 🗺️ Shubham Rawat - RPG Adventure Portfolio Website

A commercial-quality, fully interactive RPG/adventure game map portfolio for **Shubham Rawat**, a Senior Full Stack Developer. Built using React, TypeScript, Tailwind CSS, and Framer Motion.

Instead of traditional list-based navigation, visitors enter an illustrated fantasy world representing Shubham's engineering journey. They can explore custom-crafted locations on a treasure map, each launching high-craft interactive modals with game mechanics (Quest Tiers, Mana Costs, Intelligence Buffs, and Loot rewards).

---

## 📂 Folder Organization & Project Structure

The project code is highly modular, separating static data, custom RPG renderers, the main map layout, and interactive HUDs:

```text
/
├── public/                 # Static SEO assets
│   ├── robots.txt          # Search engine bot instructions
│   └── sitemap.xml         # XML sitemap configuration
├── src/
│   ├── components/         # Reusable RPG UI Components
│   │   ├── HUD.tsx         # Wood-carved banners, Player Card (stats/XP), and resource count
│   │   ├── Map.tsx         # Interactive adventure map, roads, river bridges, sways, particles, and character vehicle
│   │   ├── Modal.tsx       # Glassmorphism container with exit animations and ARIA standards
│   │   ├── CardRenderer.tsx# Theme card renders (Quests, Relics, Academies, Trophies)
│   │   ├── Footer.tsx      # Port status indicator and ambient music bar
│   │   └── LoadingScreen.tsx# Gaming load screen with humorous step outputs
│   ├── data/               # Static Resume Data
│   │   ├── experience.ts   # S/A/B-Tier quest experience details
│   │   ├── projects.ts     # Legendary/Epic spell projects with mana/cooldown costs
│   │   ├── education.ts    # Magic academy scrolls with CGPAs and intelligence stats
│   │   ├── achievements.ts # Mythic/Legendary community achievements and titles
│   │   └── contact.ts      # Harbor messenger pigeon and social communication channels
│   ├── App.tsx             # Coordinate core states and modal triggers
│   ├── index.css           # Google Fonts imports & custom parchment backgrounds
│   └── main.tsx            # Application entry point
├── metadata.json           # Application settings and manifest details
└── tsconfig.json           # TypeScript configuration
```

---

## 🛠️ Customization & Adding Content

All content is dynamically rendered from the files in `src/data/`. You **never** need to touch the UI components to change, add, or remove items.

### 1. Adding a New Project
Open `src/data/projects.ts` and append a new `ProjectQuest` object to the `projects` array:

```typescript
{
  id: "my-new-relic",
  title: "New AI Engine Forge",
  period: "Jun 2026",
  description: "Forged a neural-net system for real-time dragon fire detection.",
  techStack: ["Next.js", "PyTorch", "Python"],
  link: "https://github.com/shubhamrawat-ofc/ai-engine",
  relicRating: "⭐⭐⭐⭐⭐",
  stats: {
    complexity: "Legendary", // or "Epic" | "Rare"
    manaCost: 95,
    cooldownSec: 8,
    specialAbility: "Dispels performance bottlenecks across multi-node servers"
  }
}
```

### 2. Modifying Experience Campaigns
Open `src/data/experience.ts` to edit work histories, change skills/spell requirements, or adjust XP and Gold rewards.

### 3. Modifying Educational Credentials
Open `src/data/education.ts` to change institution names, graduation dates, or the intelligence multipliers they provide.

---

## ⚙️ How Resume Integration Works

This layout parses details directly from Shubham Rawat's official resume. If you need to refresh details in the future:
1. Locate the corresponding file inside the `src/data/` folder.
2. Update the string properties (e.g., bullet points, company, period).
3. The UI automatically reads the updated data arrays, recalculates experience levels, and formats the rewards dynamically without modifying the canvas layout.

---

## 🚀 Deployment

The portfolio is set up for rapid compilation and is highly optimized:
- Run `npm run build` to compile the app.
- Static assets are created in the `dist/` directory.
- The build uses native Vite bundling for high-efficiency asset packing and ultra-fast load times.
