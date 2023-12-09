import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  Card,
} from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import projects from "./data";

//TODO: Fix spacing issues and add icons
export default function Projects() {
  return (
    <section className=" w-full py-8  md:py-12" id="projects">
      <div className="container grid items-center justify-center gap-4 px-0 text-center  lg:gap-10">
        <div className="space-y-3">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Projects
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Here are some of the projects I&apos;ve worked on.
          </p>
        </div>
        <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <Card key={project.title}>
              <CardHeader className="flex flex-col items-center gap-4">
                <Image
                  alt={project.title}
                  className="aspect-[16/9] overflow-hidden rounded-lg object-cover"
                  height="200"
                  src={project.image}
                  width="350"
                />
                <div className="grid gap-1">
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </div>
              </CardHeader>
              <CardContent className="grid gap-2">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md bg-accent px-2 py-1 text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <Link
                  className="text-accent-foreground"
                  href={project.githubLink}
                >
                  View Project
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
