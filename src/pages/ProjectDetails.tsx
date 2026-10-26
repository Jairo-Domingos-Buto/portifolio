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
              <p className="mt-5 text-sm font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                Meu papel: <span className="text-foreground">{project.summary.role}</span>
              </p>
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

      <section className="container mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-10 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Estudo de caso</p>
          <h2 className="mt-2 text-3xl font-bold">Do problema real à solução que sustenta a operação</h2>
          <p className="mt-3 text-lg leading-relaxed text-muted-foreground">Este projeto não começa pela tecnologia. Começa pelo que a operação precisava controlar, simplificar ou tornar possível — e pelas decisões necessárias para chegar lá.</p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <CaseStudyCard
            eyebrow="1. O ponto de partida"
            title="O contexto"
            content={project.caseStudy.context}
          />
          <CaseStudyCard
            eyebrow="2. O que estava em jogo"
            title="O problema que precisava de solução"
            content={project.caseStudy.problem}
          />
          <CaseStudyCard
            eyebrow="3. Direção do trabalho"
            title="O objetivo"
            content={project.caseStudy.approach}
          />
          <CaseStudyCard
            eyebrow="4. Responsabilidade"
            title="O meu papel"
            content={`Atuei como ${project.summary.role}, ligando as necessidades da operação às decisões de produto, implementação e evolução técnica.`}
          />
        </div>
      </section>

      <section className="border-y border-border bg-secondary/20 px-4 py-16 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <SectionIntro
            eyebrow="Como foi construído"
            title="Uma solução pensada para funcionar no dia a dia"
            description="A solução foi organizada em partes que atendem tanto à experiência de quem usa o produto como às regras e limites da operação."
          />
          <div className="grid gap-8 md:grid-cols-2">
            <CaseStudyList title="O que foi implementado" items={project.caseStudy.implementation} />
            <CaseStudyList title="Base técnica" items={project.caseStudy.architecture} />
            <CaseStudyList title="Decisões que orientaram o produto" items={project.caseStudy.decisions} />
            <CaseStudyList title="O que aprendemos no processo" items={project.caseStudy.lessons} />
          </div>
        </div>
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
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Resultado e continuidade</p>
            <h2 className="mt-2 text-3xl font-bold">O que este trabalho tornou possível</h2>
          </div>
          <div className="space-y-8">
            <CaseStudyList title="Resultado" items={project.caseStudy.outcomes} />
            <CaseStudyList title="Próximos passos" items={project.caseStudy.nextSteps} />
          </div>
        </div>

        <div className="mt-16 grid gap-8 border-t border-border pt-12 lg:grid-cols-[0.8fr_1fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Decisão consciente</p>
            <h2 className="mt-2 text-3xl font-bold">O trade-off que orientou o trabalho</h2>
          </div>
          <div>
            <p className="text-lg leading-relaxed text-muted-foreground">{project.caseStudy.tradeoffs}</p>
            <div className="mt-8 flex flex-wrap gap-2">
              {project.technologies.map((technology) => <Badge key={technology} variant="secondary">{technology}</Badge>)}
            </div>
          </div>
        </div>

        <div className="mt-16 rounded-xl border border-primary/20 bg-primary/5 p-8 sm:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Reconhece este desafio?</p>
          <h2 className="mt-3 max-w-3xl text-3xl font-bold">Se a sua operação enfrenta um problema semelhante, podemos conversar.</h2>
          <p className="mt-4 max-w-3xl text-lg leading-relaxed text-muted-foreground">{project.caseStudy.problem} Este caso mostra como abordo desafios que combinam regras de negócio, experiência de utilização e execução técnica.</p>
          <Button asChild className="mt-8">
            <Link to="/#contato">Falar sobre um desafio semelhante</Link>
          </Button>
        </div>
      </section>
    </main>
  );
}

function SectionIntro({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return (
    <div className="mb-10 max-w-3xl">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">{eyebrow}</p>
      <h2 className="mt-2 text-3xl font-bold">{title}</h2>
      <p className="mt-3 text-lg leading-relaxed text-muted-foreground">{description}</p>
    </div>
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

function CaseStudyCard({ eyebrow, title, content }: { eyebrow: string; title: string; content: string }) {
  return (
    <Card>
      <CardHeader>
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">{eyebrow}</p>
        <CardTitle className="pt-2">{title}</CardTitle>
      </CardHeader>
      <CardContent><p className="leading-relaxed text-muted-foreground">{content}</p></CardContent>
    </Card>
  );
}
