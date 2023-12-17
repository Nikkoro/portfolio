import Projects from "@/components/Projects";
import About from "@/components/About";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <main className=" container relative flex min-h-screen flex-col ">
      <About />
      <Projects />
      <Skills />
    </main>
  );
}
