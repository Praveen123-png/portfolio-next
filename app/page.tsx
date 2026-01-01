import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="relative w-full font-mono overflow-hidden bg-background text-foreground selection:bg-accent selection:text-background">
      <Navbar />
      <Hero />
      <Projects />
      <Skills />
      <Contact />

      {/* Spacer for bottom of page / contact anchor for now */}
      <div id="contact" className="h-[20vh] w-full" />
    </main>
  );
}
