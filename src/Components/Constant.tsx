import {
  FaBootstrap,
  FaCode,
  FaGithub,
  FaHtml5,
  FaLinkedinIn,
  FaReact,
  FaRegCalendarAlt,
} from "react-icons/fa";
import { GiElectric } from "react-icons/gi";
import { GoGoal } from "react-icons/go";
import { IoLogoCss3, IoLogoJavascript, IoMdMail } from "react-icons/io";
import { SiGit, SiGithub, SiTypescript, SiVite, SiZod } from "react-icons/si";

export const SOCIAL_ICONS = [
  {
    label: "gitHub",
    icon: FaGithub,
    href: "https://github.com/Battashi-Dev",
    iconColor: "white",
  },
  {
    label: "linkedin",
    icon: FaLinkedinIn,
    href: "https://www.linkedin.com/in/mohammed-al-battashi-952374416/",
    iconColor: "brand.accent",
  },
  {
    label: "email",
    icon: IoMdMail,
    href: "mailto:battashi.dev@gmail.com",
    iconColor: "brand.accent",
  },
] as const;

export const NAV_LINKS = [
  { label: "Home", path: "/" },
  { label: "Projects", path: "/projects" },
] as const;

export const STATS = [
  { icon: FaRegCalendarAlt, description: "Years Learning", label: "1+" },
  { icon: FaCode, description: "Projects", label: 1 },
  { icon: GoGoal, description: "Full Stack Dev", label: "Goal" },
  { icon: GiElectric, description: "Learner", label: "Fast" },
];

export const SKILLS = [
  { icon: FaHtml5, label: "HTML", color: "#e34f26", boxSize: "10" },
  { icon: IoLogoCss3, label: "CSS", color: "#1572b6", boxSize: "10" },
  {
    icon: IoLogoJavascript,
    label: "JavaScript",
    color: "#f7df1e",
    boxSize: "10",
  },
  { icon: SiTypescript, label: "TypeScript", color: "#3178c6", boxSize: "10" },
  { icon: FaBootstrap, label: "BootStrap", color: "#7952b3", boxSize: "10" },
  { icon: FaReact, label: "React", color: "#61dafb", boxSize: "10" },
  { icon: SiZod, label: "Zod", color: "#3e67b1", boxSize: "10" },
  { icon: SiGit, label: "Git", color: "#f05032", boxSize: "10" },
  { icon: SiGithub, label: "GitHub", color: "white", boxSize: "10" },
  { icon: SiVite, label: "Vite", color: "#646cff", boxSize: "10" },
];
