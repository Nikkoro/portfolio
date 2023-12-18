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
    deploymentLink: "https://project1.com",
    image: "/anibase-snapshot.png",
    tags: ["React", "TypeScript", "TailwindCSS", "NextJS"],
  },
  {
    title: "aniBASE 2",
    description:
      "A web app for tracking anime you are watching or have watched.",
    githubLink: "https://github.com/nikkoro/aniBASE",
    deploymentLink: "https://project1.com",
    image: "/anibase-snapshot.png",
    tags: ["React", "TypeScript", "TailwindCSS", "NextJS"],
  },
  {
    title: "Project 3",
    description: "Description of Project 3",
    githubLink: "https://github.com/user/project3",
    deploymentLink: "https://project3.com",
    image: "/anibase-snapshot.png",
    tags: ["React", "TypeScript", "TailwindCSS", "NextJS"],
  },
  {
    title: "Project 4",
    description: "Description of Project 4",
    githubLink: "https://github.com/user/project4",
    deploymentLink: "https://project4.com",
    image: "/anibase-snapshot.png",
    tags: ["React", "TypeScript", "TailwindCSS", "NextJS"],
  },
  {
    title: "Project 5",
    description: "Description of Project 5",
    githubLink: "https://github.com/user/project5",
    deploymentLink: "https://project5.com",
    image: "/anibase-snapshot.png",
    tags: ["React", "TypeScript", "TailwindCSS", "NextJS"],
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
