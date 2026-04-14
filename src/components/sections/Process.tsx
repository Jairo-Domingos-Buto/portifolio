import { Search, Lightbulb, Code, TestTube, Rocket, AlertCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

const processSteps = [
  {
    icon: Search,
    title: '1. Entendimento',
    description: 'Converso com o cliente, entendo o problema real e o contexto do negócio',
  },
  {
    icon: Lightbulb,
    title: '2. Planejamento',
    description: 'Defino arquitetura, stack técnico e quebro em etapas mensuráveis',
  },
  {
    icon: Code,
    title: '3. Execução',
    description: 'Desenvolvimento iterativo com código limpo, commits organizados e padrões',
  },
  {
    icon: TestTube,
    title: '4. Testes & Ajustes',
    description: 'Testo cenários reais, corrijo bugs e otimizo performance',
  },
  {
    icon: Rocket,
    title: '5. Entrega',
    description: 'Deploy em produção com documentação e transferência de conhecimento',
  },
];

export function Process() {
  const { targetRef, isIntersecting } = useIntersectionObserver({ threshold: 0.2 });

  return (
    <section id="processo" ref={targetRef} className="py-24 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <div className={`text-center mb-16 transition-all duration-700 ${isIntersecting ? 'animate-slide-down opacity-100' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Como eu trabalho
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Processo claro e previsível, do problema à entrega
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-6 mb-12">
          {processSteps.map((step, index) => {
            const Icon = step.icon;
            return (
              <Card 
                key={index}
                className={`relative transition-all duration-500 hover:scale-105 ${isIntersecting ? 'animate-scale-in opacity-100' : 'opacity-0'}`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-sm font-semibold text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    {step.description}
                  </p>
                </CardContent>
                {index < processSteps.length - 1 && (
                  <div className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-[2px] bg-border" />
                )}
              </Card>
            );
          })}
        </div>

        {/*<Card className={`border-2 border-accent transition-all duration-700 ${isIntersecting ? 'animate-fade-in opacity-100' : 'opacity-0'}`} style={{ animationDelay: '600ms' }}>
          <CardContent className="p-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-destructive/10 rounded-full flex items-center justify-center">
                  <AlertCircle className="w-6 h-6 text-destructive" />
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Exemplo real: Mudança de abordagem</h3>
                <p className="text-sm text-muted-foreground">
                  Em um projeto de e-commerce, iniciei com SSR (Next.js) mas após 1 semana percebi que o cliente 
                  precisava de muito dinamismo no admin. Pivotei para SPA (React + Laravel API) e expliquei 
                  os trade-offs. Resultado: entrega 2 semanas antes do prazo e cliente mais satisfeito.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>*/}
      </div>
    </section>
  );
}
