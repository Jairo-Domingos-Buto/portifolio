import { Search, Lightbulb, Code, TestTube, Rocket } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { process } from '@/data/Config';

const stepIcons = [Search, Lightbulb, Code, TestTube, Rocket];

export function Process() {
  const { targetRef, isIntersecting } = useIntersectionObserver({ threshold: 0.2 });

  return (
    <section id="processo" ref={targetRef} className="py-24 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <div className={`text-center mb-16 transition-all duration-700 ${isIntersecting ? 'animate-slide-down opacity-100' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            {process.sectionTitle}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {process.sectionSubtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-6 mb-12">
          {process.steps.map((step, index) => {
            const Icon = stepIcons[index];
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
                {index < process.steps.length - 1 && (
                  <div className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-[2px] bg-border" />
                )}
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
