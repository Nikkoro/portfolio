import Projects from "@/components/Projects";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className=" container relative flex min-h-screen flex-col ">
      <About />
      <Projects />
      <Skills />
      <Contact />
    </main>
  );
}
