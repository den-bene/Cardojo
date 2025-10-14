"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowRight } from "lucide-react"
import { useState } from "react"
import { DecorativeLantern } from "./decorative-lantern"

export function FinalCTA() {
  const [email, setEmail] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("[v0] Email submitted:", email)
  }

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <DecorativeLantern
        className="absolute top-12 left-[10%] w-20 h-28 opacity-85 animate-float animate-swing"
        variant="red"
      />
      <DecorativeLantern
        className="absolute top-16 right-[10%] w-20 h-28 opacity-85 animate-float-delayed animate-swing"
        variant="orange"
      />
      <DecorativeLantern className="absolute top-20 left-[25%] w-16 h-22 opacity-70 animate-float" variant="gold" />
      <DecorativeLantern
        className="absolute top-18 right-[25%] w-16 h-22 opacity-70 animate-float-delayed"
        variant="red"
      />

      <div className="absolute inset-0 bg-gradient-to-br from-primary via-accent to-secondary -z-10" />

      {/* Decorative elements inspired by dojo */}
      <div className="absolute top-10 left-10 w-24 h-24 opacity-10">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <text
            x="50"
            y="50"
            fontSize="50"
            fontWeight="bold"
            textAnchor="middle"
            dominantBaseline="middle"
            fill="white"
          >
            道
          </text>
        </svg>
      </div>

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
                className="h-14 px-8 rounded-2xl bg-white text-primary hover:bg-white/90 transition-colors font-semibold group shadow-lg"
              >
                Inizia Gratis
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
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
