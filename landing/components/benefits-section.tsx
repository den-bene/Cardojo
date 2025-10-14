import { Zap, Brain, RefreshCw, GraduationCap } from "lucide-react"
import { DecorativeLantern } from "./decorative-lantern"

const benefits = [
  {
    icon: Zap,
    title: "Risparmia Ore",
    description: "Crea 100 flashcards in 60 secondi invece di ore di lavoro manuale",
    color: "from-primary to-primary/70",
  },
  {
    icon: Brain,
    title: "Domande Migliori",
    description: "L'AI genera domande che ti aiutano davvero a imparare e memorizzare",
    color: "from-accent to-accent/70",
  },
  {
    icon: RefreshCw,
    title: "Funziona Con Tutto",
    description: "Esporta verso Anki, Quizlet, CSV, Notion e qualsiasi altra app",
    color: "from-secondary to-secondary/70",
  },
  {
    icon: GraduationCap,
    title: "Sempre Gratis",
    description: "Piano gratuito sempre disponibile per studenti, senza limiti di tempo",
    color: "from-primary via-accent to-secondary",
  },
]

export function BenefitsSection() {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <DecorativeLantern
        className="absolute top-16 left-[8%] w-20 h-26 opacity-70 animate-float-delayed animate-swing"
        variant="red"
      />
      <DecorativeLantern className="absolute bottom-20 right-[12%] w-18 h-24 opacity-65 animate-float" variant="gold" />
      <DecorativeLantern
        className="absolute top-24 right-[6%] w-16 h-22 opacity-55 animate-float-delayed"
        variant="orange"
      />

      <div className="absolute top-20 right-10 w-32 h-32 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute bottom-20 left-10 w-40 h-40 rounded-full bg-secondary/5 blur-3xl" />

      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #8B4513 1px, transparent 1px),
            linear-gradient(to bottom, #8B4513 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center space-y-4 mb-16 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-balance">
            Perché Scegliere{" "}
            <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              Mindojo
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            La soluzione completa per trasformare i tuoi appunti in strumenti di studio efficaci
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <div
                key={index}
                className="group p-8 rounded-2xl bg-card border border-border hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="space-y-4">
                  <div
                    className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${benefit.color} flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg`}
                  >
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold text-foreground">{benefit.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
