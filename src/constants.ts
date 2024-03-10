import {
  backend,
  creator,
  css,
  docker,
  git,
  html,
  javascript,
  lti,
  mobile,
  nodejs,
  reactjs,
  redux,
  sentisum,
  tailwind,
  threejs,
  typescript,
  web,
} from "./assets";

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
      "Developing and maintaining web applications using React.js, ASP.Net, MS-SQL and other related technologies.",
      "Worked on a project for Microsoft, to track changes in documents and approve them",
      "Implemented OAuth 2.0 for authentication and authorization",
      "Lead a team of 3 developers to do a migration of a project from Sharepoint to ASP.Net",
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "SentiSum",
    icon: sentisum,
    iconBg: "#444CE7",
    date: "Jul 2022 - Apr 2023",
    points: [
      "Joined as the first frontend developer in the company and helped in setting up the frontend architecture",
      "Rewrote the entire frontend of the product using React.js and Tailwind CSS",
      "Collaborated with the designer to create a design system",
      "Implementing responsive design and ensuring cross-browser compatibility.",
    ],
  },
  {
    title: "Sr. Frontend Developer",
    company_name: "SentiSum",
    icon: sentisum,
    iconBg: "#444CE7",
    date: "May 2023 - Present",
    points: [
      "Scaled the frontend team from 1 to 3 developers",
      "Worked with product managers to create a roadmap for the product",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

export const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  // {
  //   name: "MongoDB",
  //   icon: mongodb,
  // },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "docker",
    icon: docker,
  },
] as const;
