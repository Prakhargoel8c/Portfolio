import { web, mobile, backend, creator, sentisum, lti } from "./assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
] as const;

export const services = [
  {
    title: "Web Developer",
    icon: web,
  },

  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "AI/Prompt Engineer",
    icon: mobile,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
] as const;

export const experiences = [
  {
    title: "Full Stack Developer",
    company_name: "Larsen & Toubro Infotech",
    icon: lti,
    iconBg: "#ffffff",
    iconClassName: "size-full",
    date: "Jul 2020 - Jun 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "SentiSum",
    icon: sentisum,
    iconBg: "#444CE7",
    date: "Jul 2022 - Apr 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Sr. Frontend Developer",
    company_name: "SentiSum",
    icon: sentisum,
    iconBg: "#444CE7",
    date: "May 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];
