import Projects from "@/components/Projects";
import About from "@/components/About";

export default function Home() {
  return (
    <main className=" container relative flex min-h-screen flex-col ">
      <About />
      <Projects />
    </main>
  );
}
