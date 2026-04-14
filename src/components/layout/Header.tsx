import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/ui/theme-toggle';
import { profile, navLinks } from '@/data/Config';

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border ">
      <div className="container mx-auto  px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="#" className="text-lg  font-semibold text-foreground">
              {profile.initials}
            </a>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
            <ThemeToggle />
            <a href="#contato">
              <Button size="sm">Falar comigo</Button>
            </a>
          </nav>

          <div className="flex md:hidden items-center gap-2">
            <ThemeToggle />
            <a href="#contato">
              <Button size="sm">Contato</Button>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
