import React from "react";
import {
  TbBrandCss3,
  TbBrandDocker,
  TbBrandGit,
  TbBrandHtml5,
  TbBrandJavascript,
  TbBrandNextjs,
  TbBrandNodejs,
  TbBrandPython,
  TbBrandReact,
  TbBrandSupabase,
  TbBrandTailwind,
  TbBrandTypescript,
} from "react-icons/tb";
import { SiPostman, SiStyledcomponents } from "react-icons/si";
import { DiPostgresql } from "react-icons/di";
interface Project {
  title: string;
  description: string;
  githubLink: string;
  deploymentLink?: string;
  image: string;
  tags: string[];
}

interface Skills {
  name: string;
  knowledge?: "good" | "intermediate" | "beginner";
  icon?: React.ReactNode;
}
//TODO: Populate with real projects
const projects: Project[] = [
  {
    title: "aniBASE",
    description:
      "A web app for tracking anime you are watching or have watched.",
    githubLink: "https://github.com/nikkoro/aniBASE",
    deploymentLink: "https://ani-base.vercel.app",
    image: "/ani-base.png",
    tags: ["React", "Javascript", "localstorage", "Vite", "Jikan API"],
  },
  {
    title: "Portfolio",
    description: " A portfolio website that you are currently looking at.",
    githubLink: "https://github.com/nikkoro/portfolio",
    deploymentLink: "https://domaracki-portfolio.vercel.app/",
    image: "/light-portfolio.png",
    tags: ["NextJS", "Typescript", "TailwindCSS", "shadcn-ui"],
  },
  {
    title: "uncharted-waters-bot",
    description:
      "Discord bot for mobile game. Update Google Sheet with event related data from screenshots.",
    githubLink: "https://github.com/nikkoro/aniBASE",
    image: "/uw-gif.gif",
    tags: ["Node.js", "Discord.js", "Tesseract.js", "Google Sheets API"],
  },
  {
    title: "codeStats",
    description: `A group project developed during the studies. It was
    created to generate and standardize reports from git
    repositories so teachers could easily see who
    contributed enough. 
    `,
    githubLink: "https://github.com/maneike/codeStats",
    image: "/codestats.png",
    tags: ["Preact", "Javascript", "emotion", "Vite", "Django"],
  },
];

const skills: Skills[] = [
  {
    name: "Javascript",
    icon: <TbBrandJavascript />,
  },
  {
    name: "React",
    icon: <TbBrandReact />,
  },
  {
    name: "NextJS",
    icon: <TbBrandNextjs />,
  },
  {
    name: "Tailwind",
    icon: <TbBrandTailwind />,
  },
  {
    name: "NodeJS",
    icon: <TbBrandNodejs />,
  },
  {
    name: "Express",
  },
  {
    name: "styled-components",
    icon: <SiStyledcomponents stroke="" />,
  },
  {
    name: "REST API",
  },
  {
    name: "Supabase",
    icon: <TbBrandSupabase />,
  },
  {
    name: "Typescript",
    icon: <TbBrandTypescript />,
  },
  {
    name: "HTML",
    icon: <TbBrandHtml5 />,
  },
  {
    name: "CSS",
    icon: <TbBrandCss3 />,
  },
  {
    name: "Git",
    icon: <TbBrandGit />,
  },
  {
    name: "Docker",
    icon: <TbBrandDocker />,
  },
  {
    name: "Python",
    icon: <TbBrandPython />,
  },
  {
    name: "PostgreSQL",
    icon: <DiPostgresql />,
  },
  {
    name: "Postman",
    icon: <SiPostman stroke="" />,
  },
];

export { projects, skills };
