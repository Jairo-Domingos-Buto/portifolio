import { Mail, Github, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/ui/theme-toggle';

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="#" className="text-lg font-semibold text-foreground">
              JDB
            </a>
          </div>
          
          <nav className="hidden md:flex items-center gap-8">
            <a href="#projetos" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Projetos
            </a>
            <a href="#processo" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Processo
            </a>
            <a href="#sobre" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Sobre
            </a>
            <ThemeToggle />
            <a href="#contato">
              <Button size="sm">Falar comigo</Button>
            </a>
          </nav>

          <div className="flex md:hidden items-center gap-2">
            <ThemeToggle />
            {/*<a href="https://wa.me/244943680984?text=Olá%20Vi%20seu%20portifólio%20e%20quero%20falar%20contigo">*/}
            <a href='#contato'>
              <Button size="sm">Contato</Button>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
