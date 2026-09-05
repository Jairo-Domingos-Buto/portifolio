import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { projects } from "@/data/Config";

const fallbackImage = new URL("../assets/screenshot.webp", import.meta.url).href;

export default function ProjectDetailsPage() {
  const { slug } = useParams();
  const project = projects.items.find((item) => item.slug === slug);

  if (!project) {
    return (
      <main className="container mx-auto flex min-h-[70vh] max-w-3xl flex-col items-start justify-center px-4 pt-16 sm:px-6 lg:px-8">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-primary">404</p>
        <h1 className="text-4xl font-bold">Projeto não encontrado</h1>
        <p className="mt-4 text-muted-foreground">Este projeto ainda não está disponível no portfólio.</p>
        <Button asChild className="mt-8">
          <Link to="/projects">Ver todos os projetos</Link>
        </Button>
      </main>
    );
  }

  const image = project.media?.cover ?? fallbackImage;
  const gallery = project.media?.gallery?.length ? project.media.gallery : [image];

  return (
    <main className="pt-16">
      <section className="border-b border-border px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="container mx-auto max-w-6xl">
          <Link to="/projects" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
            <ArrowLeft size={16} aria-hidden="true" /> Voltar aos projetos
          </Link>
          <div className="mt-12 grid gap-12 lg:grid-cols-[1fr_0.85fr] lg:items-end">
            <div>
              <div className="mb-5 flex flex-wrap gap-2">
                <Badge>{project.summary.status}</Badge>
                <Badge variant="outline">{project.summary.label}</Badge>
                <span className="px-2 py-1 text-sm text-muted-foreground">{project.taxonomy.year}</span>
              </div>
              <h1 className="max-w-4xl text-4xl font-bold tracking-tight sm:text-6xl">{project.title}</h1>
              <p className="mt-6 max-w-2xl text-xl leading-relaxed text-muted-foreground">{project.summary.description}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                {project.links?.live && (
                  <Button asChild>
                    <a href={project.links.live} target="_blank" rel="noreferrer">
                      Ver projeto <ExternalLink size={16} aria-hidden="true" />
                    </a>
                  </Button>
                )}
                {project.links?.github && (
                  <Button asChild variant="outline">
                    <a href={project.links.github} target="_blank" rel="noreferrer">Código no GitHub</a>
                  </Button>
                )}
              </div>
            </div>
            <img src={image} alt={project.title} className="aspect-[16/9] w-full rounded-lg border border-border object-cover" width={960} height={540} />
          </div>
        </div>
      </section>

      <section className="container mx-auto grid max-w-6xl gap-8 px-4 py-16 sm:px-6 md:grid-cols-2 lg:px-8">
        <CaseStudyCard title="O problema" content={project.caseStudy.problem} />
        <CaseStudyCard title="A abordagem" content={project.caseStudy.approach} />
        <CaseStudyList title="Arquitetura" items={project.caseStudy.architecture} />
        <CaseStudyList title="Implementação" items={project.caseStudy.implementation} />
        <CaseStudyList title="Resultado" items={project.caseStudy.outcomes} />
      </section>

      <section className="border-y border-border bg-secondary/20 px-4 py-16 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-8 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Galeria</p>
              <h2 className="mt-2 text-3xl font-bold">O produto em detalhe</h2>
            </div>
            <p className="text-sm text-muted-foreground">{gallery.length} imagem{gallery.length === 1 ? "" : "ns"}</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {gallery.map((galleryImage, index) => (
              <figure key={`${project.slug}-${index}`} className="overflow-hidden rounded-lg border border-border bg-background">
                <img src={galleryImage} alt={`${project.title} — imagem ${index + 1}`} className="aspect-[16/10] w-full object-cover" loading="lazy" />
                <figcaption className="px-4 py-3 text-sm text-muted-foreground">{project.title} · vista {index + 1}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="container mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Decisões técnicas</p>
            <h2 className="mt-2 text-3xl font-bold">Trade-offs que orientaram o trabalho</h2>
          </div>
          <div>
            <p className="text-lg leading-relaxed text-muted-foreground">{project.caseStudy.tradeoffs}</p>
            <div className="mt-8 flex flex-wrap gap-2">
              {project.technologies.map((technology) => <Badge key={technology} variant="secondary">{technology}</Badge>)}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function CaseStudyList({ title, items }: { title: string; items: string[] }) {
  return (
    <Card>
      <CardHeader><CardTitle>{title}</CardTitle></CardHeader>
      <CardContent>
        <ul className="space-y-3 text-muted-foreground">
          {items.map((item) => <li key={item} className="border-l-2 border-primary/40 pl-4 leading-relaxed">{item}</li>)}
        </ul>
      </CardContent>
    </Card>
  );
}

function CaseStudyCard({ title, content }: { title: string; content: string }) {
  return (
    <Card>
      <CardHeader><CardTitle>{title}</CardTitle></CardHeader>
      <CardContent><p className="leading-relaxed text-muted-foreground">{content}</p></CardContent>
    </Card>
  );
}
