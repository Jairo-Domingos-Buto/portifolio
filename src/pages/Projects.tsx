import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { projects } from "@/data/Config";
import { Projects as ProjectsSection } from "@/components/sections/Projects";

export default function ProjectsPage() {
  return (
    <div className="min-h-screen pt-16">
      <section className="border-b border-border bg-secondary/30 px-4 py-20 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <Link to="/" className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
            ← Voltar à home
          </Link>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-primary">Portfólio</p>
          <h1 className="max-w-3xl text-4xl font-bold tracking-tight sm:text-6xl">Projetos com contexto, decisões e resultado.</h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">Explora os produtos e sistemas em que participei, desde SaaS e faturação até aplicações mobile e sistemas de negócio.</p>
        </div>
      </section>

      <ProjectsSection />

      <section className="border-t border-border px-4 py-16 sm:px-6 lg:px-8">
        <div className="container mx-auto flex max-w-6xl flex-col justify-between gap-6 sm:flex-row sm:items-center">
          <div>
            <p className="text-sm text-muted-foreground">{projects.items.length} projetos registados</p>
            <h2 className="mt-2 text-2xl font-semibold">Queres discutir um problema semelhante?</h2>
          </div>
          <Link to="/#contato" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline">
            Falar comigo <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </section>
    </div>
  );
}
