export interface AchievementTrophy {
  id: string;
  title: string;
  description: string;
  link?: string; // fallback
  rarity: 'Mythic' | 'Legendary' | 'Rare';
  date: string;
  rewards: {
    titleAwarded: string;
    prestigeGained: number;
    badgeIcon: string;
  };
  liveText?: string;
  liveLink?: string;
  githubText?: string;
  githubLink?: string;
}

export const achievementsList: AchievementTrophy[] = [
  {
    id: "stylelint-fix",
    title: "Stylelint VSCode Extension Issue Fixed",
    description: "Fixed a widely reported Stylelint VSCode extension issue, which significantly improved linting reliability for developers globally and received massive positive community feedback.",
    link: "https://github.com/stylelint/vscode-stylelint/issues/397#issuecomment-2023194621",
    rarity: "Mythic",
    date: "2023/2024",
    rewards: {
      titleAwarded: "Vanquisher of Linting Demons",
      prestigeGained: 500,
      badgeIcon: "🛡️"
    },
    liveText: "View Stylelint Discussion",
    liveLink: "https://github.com/stylelint/vscode-stylelint/issues/397",
    githubText: "PR Fix Commit",
    githubLink: "https://github.com/stylelint/vscode-stylelint/pull/400"
  },
  {
    id: "open-source-100xdevs",
    title: "Open Source Contributor & Hacktoberfest",
    description: "Active contributor to open-source software (7 pull requests merged during Hacktoberfest). Successfully had a PR merged into the highly popular 100xDevs repository.",
    link: "https://github.com/code100x/daily-code/pull/209",
    rarity: "Legendary",
    date: "Hacktoberfest Period",
    rewards: {
      titleAwarded: "Grand Ranger of Open Source",
      prestigeGained: 350,
      badgeIcon: "🌐"
    },
    liveText: "Hacktoberfest Registry",
    // liveLink omitted to show text-only non-clickable state
    githubText: "PR Code Contribution",
    githubLink: "https://github.com/code100x/daily-code/pull/209"
  }
];
