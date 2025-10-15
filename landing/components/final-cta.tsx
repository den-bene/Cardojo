"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowRight } from "lucide-react"
import { useState } from "react"
import { DecorativeLantern } from "./decorative-lantern"

export function FinalCTA() {
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
    <section className="relative py-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <DecorativeLantern
        className="absolute top-8 left-[5%] w-16 h-20 opacity-75 animate-float animate-swing"
        variant="red"
      />
      <DecorativeLantern
        className="absolute top-12 right-[5%] w-18 h-24 opacity-80 animate-float-delayed animate-swing"
        variant="orange"
      />
      <DecorativeLantern className="absolute bottom-8 left-[15%] w-14 h-18 opacity-65 animate-float" variant="gold" />
      <DecorativeLantern
        className="absolute bottom-12 right-[15%] w-16 h-20 opacity-70 animate-float-delayed"
        variant="red"
      />

      <div className="absolute inset-0 bg-gradient-to-br from-primary via-accent to-secondary -z-10" />


      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="text-center space-y-8 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-balance text-white drop-shadow-lg">
            Velocizza e Migliora il tuo Studio Oggi
          </h2>
          <p className="text-lg sm:text-xl text-white/95 max-w-2xl mx-auto text-pretty leading-relaxed drop-shadow">
            Unisciti a migliaia di studenti che stanno già studiando in modo più intelligente
          </p>

          {/* Email Form */}
          <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
            <div className="flex flex-col sm:flex-row gap-3">
              <Input
                type="email"
                placeholder="tua@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 h-14 px-6 text-base rounded-2xl bg-white/95 backdrop-blur-sm border-white/20 text-foreground placeholder:text-muted-foreground shadow-lg"
                required
              />
              <Button
                type="submit"
                size="lg"
                disabled={isLoading || isSubmitted}
                className="h-14 px-8 rounded-2xl bg-white text-primary font-semibold group shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 ease-out hover:bg-white/90 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 active:scale-95 active:translate-y-[1px]"
              >
                {isLoading ? (
                  <>
                    <div className="w-4 h-4 border-2 border-primary border-t-transparent rounded-full animate-spin mr-2" />
                    Caricamento...
                  </>
                ) : isSubmitted ? (
                  <>
                    ✓ Inviato!
                  </>
                ) : (
                  <>
                    Inizia Gratis
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </Button>
            </div>
            {isSubmitted && (
              <p className="text-sm text-white/95 bg-white/10 border border-white/20 rounded-md px-3 py-2 drop-shadow animate-fade-in">
                Grazie! Ti avviseremo al lancio
              </p>
            )}
            <p className="text-sm text-white/90 flex items-center justify-center gap-2 drop-shadow">
              <span className="inline-block w-2 h-2 rounded-full bg-green-400 shadow-lg" />
              Nessuna carta di credito richiesta • Inizia subito
            </p>
          </form>
        </div>
      </div>
    </section>
  )
}
