import { Mail, Linkedin, Github, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

export function Contact() {
  const { targetRef, isIntersecting } = useIntersectionObserver({ threshold: 0.2 });

  return (
    <section id="contato" ref={targetRef} className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-4xl">
        <div className={`text-center mb-12 transition-all duration-700 ${isIntersecting ? 'animate-slide-up opacity-100' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Vamos conversar
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Se você tem um projeto que precisa de atenção técnica e foco em resultados, 
            entre em contato
          </p>
        </div>

        <Card className={`border-2 transition-all duration-700 ${isIntersecting ? 'animate-scale-in opacity-100' : 'opacity-0'}`} style={{ animationDelay: '200ms' }}>
          <CardContent className="p-8">
            <div className="space-y-6">
              <div className="text-center pb-6 border-b border-border">
                <div className="inline-flex items-center gap-2 text-sm text-muted-foreground mb-4">
                  <Clock className="w-4 h-4" />
                  <span>Respondo em até 24 horas</span>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-4">
                <a 
                  href="mailto:contato@jairodomingos.dev"
                  className="group"
                >
                  <Card className="h-full hover:border-primary transition-colors cursor-pointer">
                    <CardContent className="p-6 text-center">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-primary/20 transition-colors">
                        <Mail className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="font-semibold text-foreground mb-1">Email</h3>
                      <p className="text-sm text-muted-foreground">contato@jairodomingos.dev</p>
                    </CardContent>
                  </Card>
                </a>

                <a 
                  href="https://linkedin.com/in/jairodomingos"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                >
                  <Card className="h-full hover:border-primary transition-colors cursor-pointer">
                    <CardContent className="p-6 text-center">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-primary/20 transition-colors">
                        <Linkedin className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="font-semibold text-foreground mb-1">LinkedIn</h3>
                      <p className="text-sm text-muted-foreground">/jairodomingos</p>
                    </CardContent>
                  </Card>
                </a>

                <a 
                  href="https://github.com/jairodomingos"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                >
                  <Card className="h-full hover:border-primary transition-colors cursor-pointer">
                    <CardContent className="p-6 text-center">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-primary/20 transition-colors">
                        <Github className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="font-semibold text-foreground mb-1">GitHub</h3>
                      <p className="text-sm text-muted-foreground">/jairodomingos</p>
                    </CardContent>
                  </Card>
                </a>
              </div>

              <div className="text-center pt-6">
                <a href="mailto:contato@jairodomingos.dev">
                  <Button size="lg" className="w-full sm:w-auto">
                    <Mail className="w-4 h-4 mr-2" />
                    Enviar mensagem
                  </Button>
                </a>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="mt-8 text-center">
          <p className="text-sm text-muted-foreground">
            <strong className="text-foreground">O que acontece depois:</strong> Respondo em até 24h úteis. 
            Agendamos uma conversa rápida (15-30min) para entender seu projeto e avaliar fit mútuo.
          </p>
        </div>
      </div>
    </section>
  );
}
