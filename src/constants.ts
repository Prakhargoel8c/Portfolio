import { web, mobile, backend, creator } from "./assets";

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
