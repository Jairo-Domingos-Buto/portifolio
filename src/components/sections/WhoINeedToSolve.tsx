import { Building2, Rocket, Cog, Pencil } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

const audiences = [
  {
    icon: Building2,
    title: 'Empresas em crescimento',
    description: 'Que precisam de sistemas robustos e escaláveis',
  },
  {
    icon: Rocket,
    title: 'Startups em fase inicial',
    description: 'Que precisam validar ideias rapidamente',
  },
  {
    icon: Pencil,
    title: 'Ideias que precisam sair do papel',
    description:'Para quem tem uma boa ideia e precisa transformar isso num sistema real'
  }
];

export function WhoINeedToSolve() {
  const { targetRef, isIntersecting } = useIntersectionObserver({ threshold: 0.2 });

  return (
    <section ref={targetRef} className="py-24 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <div className={`text-center mb-16 transition-all duration-700 ${isIntersecting ? 'animate-slide-down opacity-100' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Para quem eu trabalho
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Se você se identifica com algum desses perfis, podemos conversar
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {audiences.map((audience, index) => {
            const Icon = audience.icon;
            return (
              <Card 
                key={index} 
                className={`border-2 hover:border-primary transition-all duration-500 hover:scale-105 ${isIntersecting ? 'animate-scale-in opacity-100' : 'opacity-0'}`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {audience.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {audience.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
