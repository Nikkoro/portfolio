import Nav from "@/components/Nav";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="p-24">
      <Nav />
      <section className="flex flex-col gap-8 py-24">
        <h1 className="text-3xl">
          Hi, my name is{" "}
          <code className="px-2 py-4 font-mono text-4xl font-bold">
            Nikodem Domaracki
          </code>
        </h1>
        <p> and I'm a web developer.</p>
      </section>
      <div className="flex gap-6 py-6">
        <a href="mailto:nikodemdomaracki@gmail.com">
          <Button>Contact me</Button>
        </a>
      </div>
    </main>
  );
}
