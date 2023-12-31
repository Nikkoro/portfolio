import { Button } from "@/components/ui/button";
import {
  GitHubLogoIcon,
  LinkedInLogoIcon,
  DownloadIcon,
} from "@radix-ui/react-icons";

export default function About() {
  return (
    <section
      className="flex flex-col gap-8 py-8 pt-20 sm:justify-items-start "
      id="#about"
    >
      <p className="text-3xl font-bold lg:text-5xl ">
        Hello!{" "}
        <span className="sm:data-te-animation inline-block hover:animate-wave">
          👋
        </span>
      </p>
      <h1 className="text-2xl lg:text-3xl">
        Hi, my name is{" "}
        <code className="font-mono text-3xl font-bold lg:text-4xl">
          Nikodem Domaracki
        </code>
      </h1>
      <p>
        {" "}
        and I&apos;m a web developer, mainly focused on React & Next.js, but I
        also enjoy dabbling on the backend.
      </p>
      <div className="flex flex-wrap items-center gap-4 py-4">
        <a href="mailto:nikodemdomaracki@gmail.com">
          <Button>Contact me</Button>
        </a>
        <a
          href="/Nikodem-Domaracki-Resume.pdf"
          rel="noopener noreferrer"
          target="_blank"
        >
          <Button variant="secondary">
            Download CV <DownloadIcon />
          </Button>
        </a>

        <a href="https://github.com/Nikkoro" aria-label="Link to my github">
          <span>
            <GitHubLogoIcon className="h-8 w-8" />
          </span>
        </a>
        <a
          href="https://www.linkedin.com/in/nikodemdomaracki/"
          aria-label="Link to my linkedin"
        >
          <LinkedInLogoIcon className="h-8 w-8" />
        </a>
      </div>
    </section>
  );
}
