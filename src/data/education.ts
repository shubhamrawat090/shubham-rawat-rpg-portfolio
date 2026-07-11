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
      skillsUnlocked: ["Core Algorithms", "Data Structures", "Database Management Systems", "Software Architecture"],
      wisdomGained: "Forged a strong foundation of computational theories and engineered scalable software applications."
    },
    liveText: "Visit Campus Portal",
    liveLink: "https://example.com/jims-portal",
    githubText: "Academic Repositories",
    githubLink: "https://github.com/shubhamrawat-ofc"
  }
];
