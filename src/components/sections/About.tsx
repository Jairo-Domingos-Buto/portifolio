import { Card, CardContent } from '@/components/ui/card';
import { Target, Users, Zap } from 'lucide-react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { profile, about } from '@/data/Config';

const principleIcons = [Target, Users, Zap];

export function About() {
  const { targetRef, isIntersecting } = useIntersectionObserver({ threshold: 0.2 });

  return (
    <section id="sobre" ref={targetRef} className="py-24 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="container mx-auto max-w-4xl">
        <div className={`text-center mb-16 transition-all duration-700 ${isIntersecting ? 'animate-slide-down opacity-100' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            {about.sectionTitle}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {about.sectionSubtitle}
          </p>
        </div>

        <div className={`space-y-8 transition-all duration-700 ${isIntersecting ? 'animate-fade-in opacity-100' : 'opacity-0'}`} style={{ animationDelay: '200ms' }}>
          <Card className="border-2">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row gap-8 items-start">
                {/* Profile Photo */}
                <div className="flex-shrink-0 mx-auto md:mx-0">
                  <div className="relative group">
                    <div className="w-32 h-32 rounded-2xl overflow-hidden border-4 border-primary/20 shadow-lg group-hover:border-primary/40 transition-all duration-300">
                      <img
                        src={profile.avatar}
                        alt={profile.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-green-500 rounded-full border-4 border-background"></div>
                  </div>
                </div>

                {/* Text Content */}
                <div className="prose prose-neutral dark:prose-invert max-w-none flex-1">
                  {about.bio.map((paragraph, i) => (
                    <p
                      key={i}
                      className={i === 0 ? 'text-foreground text-lg leading-relaxed mb-4' : 'text-muted-foreground leading-relaxed mb-4'}
                      dangerouslySetInnerHTML={{ __html: paragraph }}
                    />
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          <div>
            <h3 className="text-xl font-semibold text-foreground mb-6 text-center">
              Princípios profissionais
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {about.principles.map((principle, index) => {
                const Icon = principleIcons[index];
                return (
                  <Card
                    key={index}
                    className={`border-2 hover:border-primary transition-all duration-500 hover:scale-105 ${isIntersecting ? 'animate-scale-in opacity-100' : 'opacity-0'}`}
                    style={{ animationDelay: `${400 + index * 150}ms` }}
                  >
                    <CardContent className="pt-6 text-center">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <h4 className="text-lg font-semibold text-foreground mb-2">
                        {principle.title}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {principle.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
