import { Header } from "@/components/header"
import { HeroScrollSection } from "@/components/hero-section"
import { ProblemSection } from "@/components/problem-section"
import { ProcessScrollSection } from "@/components/process-scroll-section"
import { BenefitsSection } from "@/components/benefits-section"
import { FinalCTA } from "@/components/final-cta"

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* 1. Hero Section con Mockup 3D dell'App (NUOVO) */}
        <HeroScrollSection />

        {/* 2. Problem Section con Display Cards (già implementata) */}
        <ProblemSection />

        {/* 3. Process Section con 3D Scroll (NUOVO) */}
        <ProcessScrollSection />

        {/* 4. Benefits Section (esistente) */}
        <BenefitsSection />

        {/* 5. Final CTA (esistente) */}
        <FinalCTA />
      </main>
    </>
  )
}
