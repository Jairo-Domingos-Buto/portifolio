import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { projects } from "@/data/Config";

export function Projects() {
  const { targetRef, isIntersecting } = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section id="projetos" ref={targetRef} className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div
          className={`text-center mb-16 transition-all duration-700 ${isIntersecting ? "animate-slide-up opacity-100" : "opacity-0 translate-y-10"}`}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">{projects.sectionTitle}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {projects.sectionSubtitle}
          </p>
        </div>

        <div className="space-y-12">
          {projects.items.map((project, index) => (
            <Card
              key={index}
              className={`overflow-hidden border-2 hover:border-primary transition-all duration-700 hover:scale-[1.02] ${isIntersecting ? "animate-slide-in opacity-100" : "opacity-0 -translate-x-10"}`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="grid md:grid-cols-5 gap-6">
                <div className="md:col-span-2">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover min-h-[300px]"
                    loading="lazy"
                    decoding="async"
                    width={960}
                    height={500}
                  />
                </div>

                <div className="md:col-span-3 p-6">
                  <CardHeader className="p-0 mb-4">
                    <CardTitle className="text-2xl mb-2">{project.title}</CardTitle>
                    <CardDescription className="text-base">{project.description}</CardDescription>
                  </CardHeader>

                  <CardContent className="p-0 space-y-4">
                    <div>
                      <h4 className="text-sm font-semibold text-foreground mb-1">Contexto</h4>
                      <p className="text-sm text-muted-foreground">{project.context}</p>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold text-foreground mb-1">Meu papel</h4>
                      <p className="text-sm text-muted-foreground">{project.role}</p>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold text-foreground mb-1">Solução</h4>
                      <p className="text-sm text-muted-foreground">{project.solution}</p>
                    </div>

                    <div className="bg-secondary/50 p-4 rounded-lg">
                      <h4 className="text-sm font-semibold text-foreground mb-1">Resultado</h4>
                      <p className="text-sm text-foreground font-medium">{project.result}</p>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold text-muted-foreground mb-1">Trade-off</h4>
                      <p className="text-sm text-muted-foreground italic">{project.tradeoff}</p>
                    </div>

                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.tech.map((tech, i) => (
                        <Badge key={i} variant="secondary">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
