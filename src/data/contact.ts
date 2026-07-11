export interface ContactPortal {
  id: string;
  name: string;
  label: string;
  value: string;
  url: string;
  iconName: string;
  questAction: string; // RPG button action text
  liveText?: string;
  liveLink?: string;
  githubText?: string;
  githubLink?: string;
}

export const contactsList: ContactPortal[] = [
  {
    id: "email",
    name: "Email Courier",
    label: "Email Address",
    value: "shubhamrawat.ofc@gmail.com",
    url: "mailto:shubhamrawat.ofc@gmail.com",
    iconName: "Mail",
    questAction: "Send Mail Pigeon"
  },
  {
    id: "linkedin",
    name: "LinkedIn Realm",
    label: "Professional Profile",
    value: "linkedin.com/in/shubham-rawat-ofc",
    url: "https://www.linkedin.com/in/shubhamrawat-ofc", // standard URL based on name
    iconName: "Linkedin",
    questAction: "Bridge Connection"
  },
  {
    id: "github",
    name: "Github Vault",
    label: "Open Source Code Forge",
    value: "github.com/shubhamrawat-ofc",
    url: "https://github.com/shubhamrawat-ofc", // derived from project structure/resume
    iconName: "Github",
    questAction: "Infiltrate Forge"
  },
  {
    id: "phone",
    name: "Aether Signal",
    label: "Mobile Number",
    value: "+91-7982805409",
    url: "tel:+917982805409",
    iconName: "Phone",
    questAction: "Transmit Frequency"
  },
  {
    id: "coding-profile",
    name: "Coding Sanctuary",
    label: "Problem Solving Grimoire",
    value: "LeetCode / Coding Profile",
    url: "https://leetcode.com/shubhamrawat-ofc", // general standard profile
    iconName: "Code",
    questAction: "Inspect Scroll"
  }
];
