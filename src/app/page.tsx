import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import MarqueeBar from "@/components/ui/MarqueeBar";
import Problems from "@/components/sections/Problems";
import Services from "@/components/sections/Services";
import Cases from "@/components/sections/Cases";
import Process from "@/components/sections/Process";
import Differentials from "@/components/sections/Differentials";
import Continuity from "@/components/sections/Continuity";
import About from "@/components/sections/About";
import Content from "@/components/sections/Content";
import FinalCTA from "@/components/sections/FinalCTA";
import ScrollReveal from "@/components/ui/ScrollReveal";

export const metadata: Metadata = {
  title: "[NOME DA EMPRESA] — Software, Automação e IA para Empresas",
  description:
    "Desenvolvemos aplicativos, sistemas e automações que organizam processos, reduzem trabalho manual e permitem que negócios cresçam com mais controle. Sediados em São Paulo.",
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return (
    <>
      <Header />
      <main id="main-content">
        <Hero />
        <MarqueeBar />
        <Problems />
        <Services />
        <Cases />
        <Process />
        <Differentials />
        <Continuity />
        <About />
        <Content />
        <FinalCTA />
      </main>
      <Footer />
      <ScrollReveal />
    </>
  );
}
