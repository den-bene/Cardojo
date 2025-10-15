"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { FileText, Sparkles, CreditCard } from "lucide-react"
import { useState } from "react"
import { DecorativeLantern } from "./decorative-lantern"

export function HeroSection() {
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    console.log("[v0] Email submitted:", email)
    setIsLoading(false)
    setIsSubmitted(true)
    
    // Reset after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setEmail("")
    }, 3000)
  }

  return (
    <section className="relative pt-16 pb-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Lanterns with responsive positioning */}
      <DecorativeLantern
        className="absolute top-16 left-4 sm:left-[8%] lg:left-[5%] xl:left-[8%] w-16 sm:w-20 lg:w-18 xl:w-20 h-20 sm:h-28 lg:h-26 xl:h-28 opacity-90 animate-float animate-swing hidden sm:block"
        variant="red"
      />
      <DecorativeLantern
        className="absolute top-24 right-4 sm:right-[12%] lg:right-[8%] xl:right-[12%] w-20 sm:w-24 lg:w-22 xl:w-24 h-24 sm:h-32 lg:h-30 xl:h-32 opacity-85 animate-float-delayed animate-swing"
        variant="orange"
      />
      <DecorativeLantern 
        className="absolute top-20 right-2 sm:right-[5%] lg:right-[3%] xl:right-[5%] w-14 sm:w-16 lg:w-15 xl:w-16 h-18 sm:h-22 lg:h-20 xl:h-22 opacity-75 animate-float hidden sm:block" 
        variant="gold" 
      />
      <DecorativeLantern
        className="absolute top-28 left-8 sm:left-[15%] lg:left-[10%] xl:left-[15%] w-12 sm:w-14 lg:w-13 xl:w-14 h-16 sm:h-20 lg:h-18 xl:h-20 opacity-70 animate-float-delayed hidden md:block"
        variant="red"
      />

      <div className="absolute inset-0 -z-10">
        {/* Warm wooden background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#FFF8E7] via-[#FFE4B5] to-[#FFDAB9]" />

        {/* Background image */}
        <div
          className="absolute inset-0 opacity-[0.08] bg-center bg-cover"
          style={{
            backgroundImage: "url('/images/background.png')",
            backgroundBlendMode: "multiply",
          }}
        />


        {/* Decorative bamboo silhouettes */}
        <div className="absolute bottom-0 left-0 w-full h-40 opacity-15">
          <svg viewBox="0 0 1200 150" className="w-full h-full">
            {/* Left bamboo cluster */}
            <rect x="40" y="0" width="10" height="150" fill="#2C5F2D" opacity="0.7" rx="2" />
            <rect x="60" y="20" width="8" height="130" fill="#2C5F2D" opacity="0.6" rx="2" />
            <rect x="75" y="10" width="9" height="140" fill="#2C5F2D" opacity="0.65" rx="2" />
            {/* Right bamboo cluster */}
            <rect x="1120" y="5" width="10" height="145" fill="#2C5F2D" opacity="0.7" rx="2" />
            <rect x="1140" y="25" width="8" height="125" fill="#2C5F2D" opacity="0.6" rx="2" />
            <rect x="1155" y="15" width="9" height="135" fill="#2C5F2D" opacity="0.65" rx="2" />
          </svg>
        </div>

      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center space-y-6 animate-fade-in-up">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium backdrop-blur-sm border border-primary/20">
            <Sparkles className="w-4 h-4" />
            <span>Alimentato da AI</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-balance">
            Studia più Velocemente:{" "}
            <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              PDF → Flashcards
            </span>{" "}
            in un Click
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-foreground/80 max-w-3xl mx-auto text-pretty leading-relaxed">
            L'AI legge i tuoi appunti e crea flashcards pronte per Anki, Quizlet o qualsiasi app di studio. Niente
            copia-incolla, niente perdite di tempo.
          </p>

          {/* Email Form */}
          <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
            <div className="flex flex-col sm:flex-row gap-3">
              <Input
                type="email"
                placeholder="tua@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 h-12 px-4 text-base rounded-xl bg-card/80 backdrop-blur-sm border border-border/50"
                required
              />
              <Button
                type="submit"
                size="lg"
                disabled={isLoading || isSubmitted}
                className="h-12 px-8 rounded-xl bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 ease-out hover:shadow-xl hover:brightness-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 active:scale-95 active:translate-y-[1px]"
              >
                {isLoading ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                    Caricamento...
                  </>
                ) : isSubmitted ? (
                  <>
                    ✓ Inviato!
                  </>
                ) : (
                  'Inizia Gratis'
                )}
              </Button>
            </div>
            {isSubmitted && (
              <p className="text-sm text-green-600 bg-green-50 border border-green-200 rounded-md px-3 py-2 animate-fade-in">
                Grazie! Ti avviseremo al lancio
              </p>
            )}
            <p className="text-sm text-muted-foreground flex items-center justify-center gap-2">
              <span className="inline-block w-2 h-2 rounded-full bg-green-500" />
              Piano gratuito sempre disponibile • Nessuna carta richiesta
            </p>
          </form>

          {/* Visual Process */}
          <div className="pt-12 max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {/* Step 1 */}
              <div className="flex flex-col items-center gap-4 p-6 rounded-2xl bg-card/80 backdrop-blur-sm border border-border/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center">
                  <FileText className="w-8 h-8 text-primary" />
                </div>
                <div className="text-center space-y-2">
                  <h3 className="font-semibold text-foreground">1. Carica PDF</h3>
                  <p className="text-sm text-muted-foreground">Trascina i tuoi appunti</p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex flex-col items-center gap-4 p-6 rounded-2xl bg-card/80 backdrop-blur-sm border border-border/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent/20 to-accent/10 flex items-center justify-center">
                  <Sparkles className="w-8 h-8 text-accent" />
                </div>
                <div className="text-center space-y-2">
                  <h3 className="font-semibold text-foreground">2. AI Analizza</h3>
                  <p className="text-sm text-muted-foreground">Estrae concetti chiave</p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex flex-col items-center gap-4 p-6 rounded-2xl bg-card/80 backdrop-blur-sm border border-border/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-secondary/20 to-secondary/10 flex items-center justify-center">
                  <CreditCard className="w-8 h-8 text-secondary" />
                </div>
                <div className="text-center space-y-2">
                  <h3 className="font-semibold text-foreground">3. Esporta</h3>
                  <p className="text-sm text-muted-foreground">Flashcards pronte</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
