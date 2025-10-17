"use client";
import React from "react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { FileText, Brain, Zap, ArrowRight, ArrowDown } from "lucide-react";

export function ProcessScrollSection() {
  return (
    <section className="relative bg-gradient-to-b from-background via-[#1a0f0f]/20 to-background overflow-hidden">
      {/* Pattern texture giapponese */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ff6b35' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative z-10 flex flex-col overflow-hidden">
        <ContainerScroll
          titleComponent={
            <div className="space-y-6 px-4">
              <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold bg-gradient-to-r from-red-600 via-orange-500 to-yellow-500 bg-clip-text text-transparent">
                Come Funziona Cardojo
              </h2>
              
              <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto">
                Tre semplici passaggi per trasformare qualsiasi documento
              </p>
              
              <div className="flex items-center justify-center gap-2 md:gap-3 flex-wrap mt-8">
                <div className="flex items-center gap-2 px-3 md:px-4 py-2 bg-gradient-to-r from-red-500/20 to-orange-500/20 border border-red-500/30 rounded-full">
                  <FileText className="w-4 h-4 md:w-5 md:h-5 text-red-500" />
                  <span className="text-xs md:text-sm font-medium text-red-600 dark:text-red-400">1. Carica</span>
                </div>
                <ArrowRight className="w-4 h-4 md:w-6 md:h-6 text-orange-500 hidden sm:block" />
                <div className="flex items-center gap-2 px-3 md:px-4 py-2 bg-gradient-to-r from-orange-500/20 to-yellow-500/20 border border-orange-500/30 rounded-full">
                  <Brain className="w-4 h-4 md:w-5 md:h-5 text-orange-500" />
                  <span className="text-xs md:text-sm font-medium text-orange-600 dark:text-orange-400">2. Analizza</span>
                </div>
                <ArrowRight className="w-4 h-4 md:w-6 md:h-6 text-orange-500 hidden sm:block" />
                <div className="flex items-center gap-2 px-3 md:px-4 py-2 bg-gradient-to-r from-yellow-500/20 to-red-500/20 border border-yellow-500/30 rounded-full">
                  <Zap className="w-4 h-4 md:w-5 md:h-5 text-yellow-500" />
                  <span className="text-xs md:text-sm font-medium text-yellow-600 dark:text-yellow-400">3. Studia</span>
                </div>
              </div>
            </div>
          }
        >
          {/* Content con tema dojo */}
          <div className="w-full h-full bg-gradient-to-br from-[#F5E6D3] via-[#FFE4C4] to-[#F5E6D3] dark:from-[#1a0f0f] dark:via-[#2a1515] dark:to-[#1a0f0f] rounded-lg flex items-center justify-center py-4 md:py-8 border border-orange-200 dark:border-orange-900/30">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-6 lg:gap-8 w-full max-w-4xl px-4">
              {/* Step 1 */}
              <div className="bg-white dark:bg-[#2a1515] rounded-xl p-3 md:p-6 shadow-lg shadow-red-900/20 dark:shadow-red-500/20 text-center space-y-2 md:space-y-4 border border-red-200 dark:border-red-900/30">
                <div className="w-12 h-12 md:w-16 md:h-16 mx-auto bg-gradient-to-br from-red-500 to-orange-500 rounded-full flex items-center justify-center shadow-lg shadow-red-500/50">
                  <FileText className="w-6 h-6 md:w-8 md:h-8 text-white" />
                </div>
                <h3 className="font-bold text-sm md:text-lg text-red-700 dark:text-red-400">Upload PDF</h3>
                <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400 leading-tight">
                  Carica appunti o dispense
                </p>
                <div className="h-12 md:h-20 bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-950/30 dark:to-orange-950/30 rounded-lg flex items-center justify-center border border-red-200/50 dark:border-red-900/30">
                  <div className="text-2xl md:text-4xl">📄</div>
                </div>
              </div>

              {/* Arrow Down on Mobile */}
              <div className="flex md:hidden items-center justify-center -my-1">
                <ArrowDown className="w-6 h-6 text-orange-500 animate-bounce" />
              </div>

              {/* Step 2 */}
              <div className="bg-white dark:bg-[#2a1515] rounded-xl p-3 md:p-6 shadow-lg shadow-orange-900/20 dark:shadow-orange-500/20 text-center space-y-2 md:space-y-4 border border-orange-200 dark:border-orange-900/30">
                <div className="w-12 h-12 md:w-16 md:h-16 mx-auto bg-gradient-to-br from-orange-500 to-yellow-500 rounded-full flex items-center justify-center shadow-lg shadow-orange-500/50">
                  <Brain className="w-6 h-6 md:w-8 md:h-8 text-white" />
                </div>
                <h3 className="font-bold text-sm md:text-lg text-orange-700 dark:text-orange-400">AI Elabora</h3>
                <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400 leading-tight">
                  AI analizza il contenuto
                </p>
                <div className="h-12 md:h-20 bg-gradient-to-br from-orange-50 to-yellow-50 dark:from-orange-950/30 dark:to-yellow-950/30 rounded-lg flex items-center justify-center border border-orange-200/50 dark:border-orange-900/30">
                  <div className="text-2xl md:text-4xl">🧠</div>
                </div>
              </div>

              {/* Arrow Down on Mobile */}
              <div className="flex md:hidden items-center justify-center -my-1">
                <ArrowDown className="w-6 h-6 text-yellow-500 animate-bounce" />
              </div>

              {/* Step 3 */}
              <div className="bg-white dark:bg-[#2a1515] rounded-xl p-3 md:p-6 shadow-lg shadow-yellow-900/20 dark:shadow-yellow-500/20 text-center space-y-2 md:space-y-4 border border-yellow-200 dark:border-yellow-900/30">
                <div className="w-12 h-12 md:w-16 md:h-16 mx-auto bg-gradient-to-br from-yellow-500 to-red-500 rounded-full flex items-center justify-center shadow-lg shadow-yellow-500/50">
                  <Zap className="w-6 h-6 md:w-8 md:h-8 text-white" />
                </div>
                <h3 className="font-bold text-sm md:text-lg text-yellow-700 dark:text-yellow-400">Flashcards</h3>
                <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400 leading-tight">
                  Studia subito le carte
                </p>
                <div className="h-12 md:h-20 bg-gradient-to-br from-yellow-50 to-red-50 dark:from-yellow-950/30 dark:to-red-950/30 rounded-lg flex items-center justify-center border border-yellow-200/50 dark:border-yellow-900/30">
                  <div className="text-2xl md:text-4xl">✨</div>
                </div>
              </div>
            </div>
          </div>
        </ContainerScroll>
      </div>
    </section>
  );
}