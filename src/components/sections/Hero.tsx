import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { profile, hero } from "@/data/Config";

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center animate-fade-in">
          {/* Content */}
          <div className="order-2 lg:order-1">
            <div className="inline-block px-3 py-1 mb-6 text-xs font-medium bg-secondary text-secondary-foreground rounded-full">
              {hero.disponibilityLabel}
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
              Fullstack em evolução constante.
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground mb-8 text-balance">
              4 anos desenvolvendo soluções web e agora mobile com Laravel,
              React e tecnologias modernas. Especializado em transformar
              requisitos complexos em produtos funcionais.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a href="#projetos">
                <Button size="lg" className="w-full sm:w-auto">
                  Ver projetos
                </Button>
              </a>
              <a href="#contato">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto"
                >
                  Falar comigo
                </Button>
              </a>
            </div>

            <div className="flex items-center gap-4">
              <a
                href="https://github.com/Jairo-Domingos-Buto"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/jairo-domingos-buto-0a7288315/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://mail.google.com/mail/u/0/#inbox?compose=PNRMKdqPTDswZNBZWskhFcDBPJTXXPZXRfBjNWCKZcdkLLfGRlFpFJxDdzMMVsHLVVzkSwSBpjQGlDq"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Profile Photo */}
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative group">
              {/* Glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-primary/50 rounded-full blur-2xl opacity-30 group-hover:opacity-50 transition-opacity"></div>

              {/* Photo container */}
              <div className="relative">
                <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-background shadow-2xl group-hover:scale-105 transition-transform duration-500">
                  <img
                    src="https://avatars.githubusercontent.com/u/101554996?v=4"
                    alt="Jairo Domingos Buto"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Decorative ring */}
                <div className="absolute -inset-2 border-2 border-primary/20 rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce-slow">
          <ArrowDown className="w-6 h-6 text-muted-foreground" />
        </div>
      </div>
    </section>
  );
}
