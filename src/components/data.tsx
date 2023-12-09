interface Project {
  title: string;
  description: string;
  githubLink: string;
  deploymentLink?: string;
  image: string;
  tags: string[];
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

export default projects;
