import { HeroSection } from "@/components/hero-section"
import { ProblemSection } from "@/components/problem-section"
import { BenefitsSection } from "@/components/benefits-section"
import { FinalCTA } from "@/components/final-cta"
import { Header } from "@/components/header"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <ProblemSection />
      <BenefitsSection />
      <FinalCTA />
    </main>
  )
}
