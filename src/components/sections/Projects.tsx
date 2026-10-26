import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { SpotlightCard } from "@/components/projects/SpotlightCard";
import { projectCategories, projects } from "@/data/Config";

interface ProjectsProps {
  compact?: boolean;
}

export function Projects({ compact = false }: ProjectsProps) {
  const { targetRef, isIntersecting } = useIntersectionObserver({ threshold: 0.1 });
  const [activeCategory, setActiveCategory] = useState("all");

  const visibleProjects = compact
    ? projects.items.filter((project) => project.featured).slice(0, 5)
    : projects.items.filter(
        (project) => activeCategory === "all" || project.taxonomy.categories.includes(activeCategory),
      );

  return (
    <section id="projetos" ref={targetRef} className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div
          className={`text-center mb-10 transition-all duration-700 ${isIntersecting ? "animate-slide-in opacity-100" : "-opacity-0 translate-y-0"}`}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            {compact ? projects.featuredTitle : projects.sectionTitle}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {projects.sectionSubtitle}
          </p>
        </div>

        {!compact && (
          <div className="flex flex-wrap justify-center gap-2 mb-10" role="group" aria-label="Filtrar projetos">
            {projectCategories.map((category) => (
              <button
                key={category.id}
                type="button"
                onClick={() => setActiveCategory(category.id)}
                className={`rounded-full border px-4 py-2 text-sm transition-colors ${
                  activeCategory === category.id
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border text-muted-foreground hover:border-primary hover:text-foreground"
                }`}
                aria-pressed={activeCategory === category.id}
              >
                {category.label}
              </button>
            ))}
          </div>
        )}

        <div className={compact ? "grid gap-5 sm:grid-cols-2 lg:grid-cols-3" : "space-y-12"}>
          {visibleProjects.map((project, index) => (
            <SpotlightCard
              key={project.slug}
              delay={index * 0.06}
              className={compact ? "h-full" : ""}
            >
              <Link to={`/projects/${project.slug}`} className="block h-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-inset">
                <div className={compact ? "flex h-full flex-col" : "grid gap-6 md:grid-cols-5"}>
                <div className={compact ? "aspect-[16/10]" : "md:col-span-2"}>
                  <img
                    src={project.media?.cover ?? undefined}
                    alt={project.title}
                    className={compact ? "h-full w-full object-cover" : "h-full min-h-[300px] w-full object-cover"}
                    loading="lazy"
                    decoding="async"
                    width={960}
                    height={500}
                  />
                </div>

                <div className={compact ? "flex flex-1 flex-col p-5" : "p-6 md:col-span-3"}>
                  <div className="mb-4">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <Badge variant="outline">{project.summary.status}</Badge>
                      <span className="text-xs text-muted-foreground">{project.taxonomy.year}</span>
                    </div>
                    <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                    <p className={compact ? "line-clamp-3 text-sm text-muted-foreground" : "text-base text-muted-foreground"}>{project.summary.description}</p>
                  </div>

                  <div className={compact ? "mt-auto space-y-4" : "space-y-4"}>
                    <div>
                      <h4 className="text-sm font-semibold text-foreground mb-1">Contexto</h4>
                      {!compact && <p className="text-sm text-muted-foreground">{project.caseStudy.context}</p>}
                    </div>

                    {!compact && <div>
                      <h4 className="text-sm font-semibold text-foreground mb-1">Solução</h4>
                      <p className="text-sm text-muted-foreground">{project.caseStudy.approach}</p>
                    </div>}

                    {!compact && <div className="bg-secondary/50 p-4 rounded-lg">
                      <h4 className="text-sm font-semibold text-foreground mb-1">Resultado</h4>
                      <p className="text-sm text-foreground font-medium">{project.caseStudy.outcomes[0]}</p>
                    </div>}

                    {!compact && <div>
                      <h4 className="text-sm font-semibold text-muted-foreground mb-1">Trade-off</h4>
                      <p className="text-sm text-muted-foreground italic">{project.caseStudy.tradeoffs}</p>
                    </div>}

                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary">
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary group-hover:underline">
                      Ver case study <ArrowUpRight size={15} aria-hidden="true" />
                    </span>
                  </div>
                </div>
              </div>
              </Link>
            </SpotlightCard>
          ))}
        </div>

        {compact && (
          <div className="mt-10 flex justify-center">
            <Button asChild variant="outline">
              <Link to="/projects">
                {projects.viewAllLabel} <ArrowUpRight size={16} aria-hidden="true" />
              </Link>
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
