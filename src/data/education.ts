export interface AcademyScroll {
  id: string;
  institution: string;
  degree: string;
  gpa: string;
  period: string;
  location: string;
  certificate?: string;
  stats: {
    intelligenceBoost: number;
    skillsUnlocked: string[];
    wisdomGained: string;
  };
  liveText?: string;
  liveLink?: string;
  githubText?: string;
  githubLink?: string;
}

export const educationList: AcademyScroll[] = [
  {
    id: "jims",
    institution: "JIMS Engineering Management Technical Campus",
    degree: "B.Tech in Computer Science",
    gpa: "CGPA: 9.20",
    period: "Aug 2018 – Aug 2022",
    location: "Greater Noida, India",
    certificate: "B.Tech Graduation Scroll",
    stats: {
      intelligenceBoost: 45,
      skillsUnlocked: [
        "Core Algorithms",
        "Data Structures",
        "Database Management Systems",
        "Software Architecture",
      ],
      wisdomGained:
        "Forged a strong foundation of computational theories and engineered scalable software applications.",
    },
  },

  {
    id: "bbps12",
    institution: "Bal Bharati Public School, Noida",
    degree: "Senior Secondary (PCM with Computer Science)",
    gpa: "89%",
    period: "Apr 2015 – Apr 2017",
    location: "Noida, India",
    certificate: "Senior Secondary Certificate",
    stats: {
      intelligenceBoost: 28,
      skillsUnlocked: [
        "Mathematics",
        "Physics",
        "Computer Science",
        "Analytical Thinking",
      ],
      wisdomGained:
        "Mastered logical reasoning, mathematical precision, and the fundamentals of computer science while preparing for higher technical quests.",
    },
  },

  {
    id: "bbps10",
    institution: "Bal Bharati Public School, Noida",
    degree: "High School",
    gpa: "92%",
    period: "Apr 2014 – Apr 2015",
    location: "Noida, India",
    certificate: "High School Certificate",
    stats: {
      intelligenceBoost: 20,
      skillsUnlocked: [
        "Problem Solving",
        "Scientific Reasoning",
        "Communication",
        "Discipline",
      ],
      wisdomGained:
        "Completed the foundation quest by developing curiosity, disciplined learning habits, and the confidence to embark on future adventures.",
    },
  },
];
