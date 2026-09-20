export const resumeUrl = "https://www.linkedin.com/in/shubhamrawat090/";

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
    id: "portfolio",
    name: "Portfolio Sanctum",
    label: "Official Portfolio Website",
    value: "portfolio.shubhamrawat.com",
    url: "https://portfolio.shubhamrawat.com",
    iconName: "Globe",
    questAction: "Enter Portfolio Website"
  },
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
    value: "linkedin.com/in/shubhamrawat090",
    url: "https://www.linkedin.com/in/shubhamrawat090/",
    iconName: "Linkedin",
    questAction: "Bridge Connection"
  },
  {
    id: "github",
    name: "Github Vault",
    label: "Open Source Code Forge",
    value: "github.com/shubhamrawat090",
    url: "https://github.com/shubhamrawat090",
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
    value: "LeetCode / @6rud9e",
    url: "https://leetcode.com/u/6rud9e/",
    iconName: "Code",
    questAction: "Inspect Scroll"
  }
];
