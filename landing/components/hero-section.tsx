"use client";
import React from "react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { Flame } from "lucide-react";
import { WaitlistForm } from "./waitlist-form";
import Image from "next/image";

export function HeroScrollSection() {
  return (
    <div className="relative flex flex-col overflow-hidden pt-16">
      {/* ↑ AGGIUNTO pt-16 qui per compensare l'header fisso */}
      
      {/* Background dojo con immagine locale */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/img/background.png"
          alt="Dojo Background"
          fill
          className="object-cover opacity-10"
          style={{ filter: "sepia(0.3) saturate(1.2)" }}
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a0f0f] via-[#2a1515]/90 to-background" />
      </div>

      {/* Lanterne decorative - Sinistra */}
      <div className="absolute left-0 top-32 md:top-56 z-10 hidden lg:block">
        {/* ↑ Aumentato top-20 → top-32 e top-40 → top-56 */}
        <div className="relative w-16 h-24 animate-swing">
          <div className="absolute inset-0 bg-gradient-to-b from-red-500 to-orange-500 rounded-lg opacity-70 blur-sm" />
          <div className="absolute inset-1 bg-gradient-to-b from-red-400 to-orange-400 rounded-lg border-2 border-yellow-600" />
          <div className="absolute inset-0 flex items-center justify-center text-yellow-200 text-xs font-bold">
            道場
          </div>
        </div>
      </div>

      {/* Lanterne decorative - Destra */}
      <div className="absolute right-0 top-32 md:top-56 z-10 hidden lg:block">
        {/* ↑ Aumentato top-20 → top-32 e top-40 → top-56 */}
        <div
          className="relative w-16 h-24 animate-swing"
          style={{ animationDelay: "1s" }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-red-500 to-orange-500 rounded-lg opacity-70 blur-sm" />
          <div className="absolute inset-1 bg-gradient-to-b from-red-400 to-orange-400 rounded-lg border-2 border-yellow-600" />
          <div className="absolute inset-0 flex items-center justify-center text-yellow-200 text-xs font-bold">
            学習
          </div>
        </div>
      </div>

      <div className="relative z-20">
        <ContainerScroll
          titleComponent={
            <div className="space-y-6 px-4 pt-8 md:pt-12">
              {/* Powered by AI badge - ULTRA VISIBILE */}
              <div className="flex items-center justify-center mb-8">
                <div className="flex items-center gap-3 px-6 py-3 bg-orange-600 border-2 border-orange-400 rounded-full shadow-lg shadow-orange-500/50 backdrop-blur-md">
                  <Flame className="w-6 h-6 text-white animate-pulse" />
                  <span className="text-base md:text-lg font-bold text-white">
                    Powered by AI
                  </span>
                </div>
              </div>

              {/* Titolo principale - colore chiaro e leggibile */}
              <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white drop-shadow-lg">
                Trasforma i tuoi PDF in
              </h1>

              {/* Titolo secondario - gradiente rosso/arancione */}
              <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent mt-2 leading-tight drop-shadow-lg">
                Flashcards Intelligenti
              </h2>

              {/* Descrizione - colore chiaro */}
              <p className="text-base md:text-lg lg:text-xl text-gray-100 max-w-2xl mx-auto mt-6 mb-2 leading-relaxed drop-shadow-md">
                Risparmia ore di lavoro manuale. Carica un PDF e ottieni
                flashcards ottimizzate per la memorizzazione in pochi secondi.
              </p>

              {/* WAITLIST FORM */}
              <div className="mt-8 mb-6">
                <WaitlistForm />
              </div>

              {/* Features badges */}
              <div className="flex items-center justify-center gap-4 md:gap-6 mt-6 text-sm flex-wrap">
                <div className="flex items-center gap-2 bg-orange-900/50 px-4 py-2 rounded-full border border-orange-600/50 backdrop-blur-sm">
                  <span className="text-lg">⚡</span>
                  <span className="font-semibold text-orange-100">Istantaneo</span>
                </div>
                <div className="flex items-center gap-2 bg-orange-900/50 px-4 py-2 rounded-full border border-orange-600/50 backdrop-blur-sm">
                  <span className="text-lg">🤖</span>
                  <span className="font-semibold text-orange-100">AI Avanzata</span>
                </div>
                <div className="flex items-center gap-2 bg-orange-900/50 px-4 py-2 rounded-full border border-orange-600/50 backdrop-blur-sm">
                  <span className="text-lg">🔒</span>
                  <span className="font-semibold text-orange-100">Sicuro</span>
                </div>
              </div>
            </div>
          }
        >
          {/* Mockup con tema dojo */}
          <div className="w-full h-full bg-gradient-to-br from-[#2a1515] to-[#1a0f0f] rounded-lg flex flex-col justify-center border border-orange-900/30">
            <div className="flex flex-col gap-2 md:gap-4 px-3 md:px-4 py-3 md:py-4">
              {/* Header dell'app mockup */}
              <div className="flex items-center justify-between border-b border-orange-800/50 pb-2 md:pb-4">
                <div className="flex items-center gap-2 md:gap-3">
                  <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-red-600 to-orange-600 rounded-lg flex items-center justify-center text-white font-bold text-sm md:text-base shadow-lg shadow-orange-500/50">
                    C
                  </div>
                  <span className="text-base md:text-lg lg:text-xl font-bold text-orange-100">
                    Cardojo
                  </span>
                </div>
                <div className="flex gap-2">
                  <div className="w-14 md:w-20 h-6 md:h-8 bg-gradient-to-r from-red-600 to-orange-600 rounded-md flex items-center justify-center text-white text-[10px] md:text-sm font-medium shadow-lg shadow-orange-500/30">
                    Upload
                  </div>
                </div>
              </div>

              {/* Main content area */}
              <div className="flex flex-col gap-2 md:gap-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-xs md:text-sm lg:text-base font-semibold text-orange-200">
                    Le tue Flashcards
                  </h3>
                  <div className="text-[10px] md:text-xs lg:text-sm text-orange-400">
                    24 carte
                  </div>
                </div>

                {/* Flashcards grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-3 lg:gap-4">
                  {[
                    { color: "from-red-500 to-red-700" },
                    { color: "from-orange-500 to-orange-700" },
                    { color: "from-red-600 to-orange-600" },
                    { color: "from-orange-600 to-yellow-600" },
                    { color: "from-red-700 to-red-900" },
                    { color: "from-orange-700 to-red-700" },
                  ].map((card, i) => (
                    <div
                      key={i}
                      className={`bg-gradient-to-br ${card.color} rounded-lg p-2 md:p-3 lg:p-4 shadow-lg shadow-orange-900/50 hover:shadow-xl hover:shadow-orange-500/50 transition-all cursor-pointer min-h-[70px] md:min-h-[100px] lg:min-h-[120px] flex flex-col justify-between border border-orange-400/20`}
                    >
                      <div className="space-y-1 md:space-y-2">
                        <div className="h-1.5 md:h-2 lg:h-3 bg-white/80 rounded w-3/4" />
                        <div className="h-1.5 md:h-2 lg:h-3 bg-white/60 rounded w-full" />
                        <div className="h-1.5 md:h-2 lg:h-3 bg-white/60 rounded w-2/3" />
                      </div>
                      <div className="text-[10px] md:text-xs text-white/80 mt-1 md:mt-2">
                        Q {i + 1}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </ContainerScroll>
      </div>
    </div>
  );
}