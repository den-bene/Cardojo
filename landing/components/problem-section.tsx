import { Clock, AlertCircle, Shuffle, BookOpen } from "lucide-react"
import { DecorativeLantern } from "./decorative-lantern"

const problems = [
  {
    icon: Clock,
    title: "Troppo Tempo",
    description: "Ore di copia-incolla manuale per creare flashcards dai tuoi appunti",
  },
  {
    icon: AlertCircle,
    title: "Domande Banali",
    description: "Flashcards fatte male non aiutano a memorizzare davvero",
  },
  {
    icon: Shuffle,
    title: "Formati Diversi",
    description: "Ogni app ha formati diversi, devi rifare tutto ogni volta",
  },
  {
    icon: BookOpen,
    title: "Troppo Materiale",
    description: "Centinaia di pagine da studiare, impossibile gestire tutto",
  },
]

export function ProblemSection() {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-muted/30">
      <DecorativeLantern className="absolute top-10 right-[5%] w-18 h-24 opacity-60 animate-float" variant="orange" />
      <DecorativeLantern
        className="absolute top-16 left-[8%] w-16 h-22 opacity-50 animate-float-delayed"
        variant="red"
      />

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
            Creare Flashcards È Una <span className="text-destructive">Perdita di Tempo</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Sappiamo quanto è frustrante preparare materiale di studio
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {problems.map((problem, index) => {
            const Icon = problem.icon
            return (
              <div
                key={index}
                className="group p-8 rounded-2xl bg-card border border-border hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-destructive/20 to-destructive/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6 text-destructive" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold text-foreground">{problem.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{problem.description}</p>
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
