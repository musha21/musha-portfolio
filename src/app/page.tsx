import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Highlight from "@/components/Highlight";
import GridSection from "@/components/GridSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950">
      <Hero />
      <Skills />
      <Highlight />
      <GridSection />
    </main>
  );
}
