import Nav from "@/components/Nav";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className=" p-14 pt-0 lg:p-24 lg:pt-0">
      <section className="flex flex-col gap-8 py-24 pt-0 sm:justify-items-start ">
        <p className="text-3xl font-bold lg:text-5xl ">
          Hello! <span className="inline-block hover:animate-wave ">👋</span>
        </p>
        <h1 className="text-2xl lg:text-3xl">
          Hi, my name is{" "}
          <code className="font-mono text-3xl font-bold lg:text-4xl">
            Nikodem Domaracki
          </code>
        </h1>
        <p> and I'm a web developer.</p>
      </section>
      <div className="flex items-center gap-6 py-6">
        <span>Get in touch 👉</span>
        <a href="mailto:nikodemdomaracki@gmail.com">
          <Button>Contact me</Button>
        </a>
      </div>
    </main>
  );
}
