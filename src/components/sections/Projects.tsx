import { ExternalLink, Github } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

const projects = [
  {
    title: "FaturaSystem - Sistema de Faturação para Angola",
    description: "Sistema completo de gestão fiscal para empresas angolanas, em conformidade com os requisitos da AGT (Autoridade Geral Tributária).",
    context: "Empresas angolanas enfrentavam dificuldades para emitir documentos fiscais conforme as regulamentações da AGT, com processos manuais sujeitos a erros e sem conformidade legal para auditorias.",
    role: "Desenvolvedor full stack",
    solution: "Desenvolvemos um sistema modular com gestão completa de documentos fiscais (Faturas, Faturas-Recibo, Proformas, Recibos e Notas de Crédito). Implementei geração de assinaturas digitais RSA, hash encadeado entre documentos, exportação SAF-T XML, cálculo automático de impostos (IVA 14%, IS) e módulo PDV em tempo real.",
    result: "Empresa opera com documentos 100% conformes à legislação angolana. Processa toda a faturação mensal sem necessidade de sistemas adicionais. Exportação SAF-T pronta para auditorias da AGT.",
    tradeoff: "Optei por utilizar RSA 1024-bit ao invés de 2048-bit para manter compatibilidade com os requisitos mínimos da AGT, priorizando conformidade sobre maior segurança criptográfica.",
    tech: ["Laravel 12", "Livewire 3", "TailwindCSS", "MySQL", "DOMPDF", "Projeto Privado"],
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=400&fit=crop"
  },
  {
    title: "Miss Cary App",
    description:
      "Plataforma mobile e web para gestão e contratação de serviços como turismo, consultoria, educação e alojamento",
    context:
      "A Miss Cary precisava digitalizar e centralizar múltiplos serviços num único sistema, reduzindo processos manuais e melhorando a comunicação com clientes em diferentes países.",
    role: "Desenvolvedor Fullstack",
    solution:
      "Desenvolvimento de uma aplicação completa com catálogo de serviços, sistema de reservas, chat em tempo real, notificações e integração com métodos de pagamento.",
    result:
      "Centralização dos serviços numa única plataforma, melhoria na gestão de reservas e comunicação direta com clientes, reduzindo dependência de processos manuais.",
    tradeoff:
      "Foco inicial nas funcionalidades essenciais para entrega rápida (reservas, catálogo e comunicação), deixando integrações mais complexas para fases futuras.",
    tech: ["React Native", "Firebase", "Disponivel na Play Store"],
    image: "https://play-lh.googleusercontent.com/t6LgOnoo43RzToStY_zdSwUrDsLeGJknXL1a38FDcWeCG2GW2-7OYI1-4m_H_W8SbbMBWG__c6fQSE2sN-AtaQ=w240-h480",
  },
  {
  
  title: "Sistema de Gestão de Residentes e Visitas - Para Condomínios",  
  description: "Sistema completo para gerenciamento de acessos, segurança e comunicação em condomínios residenciais",
  context: "Condomínios enfrentam problemas com controle manual de visitantes, falta de comunicação entre moradores e administração, e dificuldade em monitorar entradas/saídas em tempo real.",
  
  role: "Desenvolvedor fullstack responsável pelo sistema completo (Laravel + React). Implementação de módulos de administradores, moradores, visitantes e seguranças.",
  
  solution: "Sistema web com autenticação segura (Laravel Sanctum). Módulo de moradores para cadastrar visitantes e gerar acessos de autorização. Módulo de segurança para validar acessos. Painel administrativo para gestão de usuários e relatórios. Notificações em tempo real.",
  
  result: "Digitalizou controle de acessos. Check-in digital substituindo registros manuais. Histórico completo de visitas com exportação de relatórios.",
  
  tradeoff: "-",
  
  tech: ["Laravel", "React", "TailwindCSS", "MySQL", "Laravel Jetstream", "Livewire", "Sanctum", "Projeto Privado"],
  
  image: "/Captura de ecrã de 2026-04-11 21-56-53"
  
  }

];

export function Projects() {
  const { targetRef, isIntersecting } = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section id="projetos" ref={targetRef} className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div
          className={`text-center mb-16 transition-all duration-700 ${isIntersecting ? "animate-slide-up opacity-100" : "opacity-0 translate-y-10"}`}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Projetos que entregam resultado</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Cada projeto mostra contexto, decisões técnicas e impacto mensurável
          </p>
        </div>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <Card
              key={index}
              className={`overflow-hidden border-2 hover:border-primary transition-all duration-700 hover:scale-[1.02] ${isIntersecting ? "animate-slide-in opacity-100" : "opacity-0 -translate-x-10"}`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="grid md:grid-cols-5 gap-6">
                <div className="md:col-span-2">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover min-h-[300px]" />
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
