export interface CertificateScroll {
  id: string;
  title: string;
  issuer: string;
  period: string;
  location: string;
  skillsUnlocked: string[];
  relicName: string;
  wisdomGained: string;
  liveText?: string;
  liveLink?: string;
  githubText?: string;
  githubLink?: string;
}

export const certificatesList: CertificateScroll[] = [
  {
    id: "nasscom",
    title: "Software Developer – Product Development (Version 3.0)",
    issuer: "NASSCOM Certification",
    period: "Aug 2022",
    location: "India",
    skillsUnlocked: [
      "Product Lifecycle",
      "Advanced Coding Practices",
      "Quality Assurance",
      "Industrial Development Principles",
    ],
    relicName: "NASSCOM Professional Seal",
    wisdomGained:
      "Validated industrial product-development competencies and software engineering craftsmanship.",
    liveText: "Verify Certificate",
    liveLink:
      "https://drive.google.com/file/d/1hHv8nSDUmG73YWcLnMuxTZr7a_238DF4/view?usp=sharing",
  },
];
