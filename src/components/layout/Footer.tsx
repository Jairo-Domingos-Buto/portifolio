export function Footer() {
  return (
    <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-border">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Jairo Domingos Buto. Todos os direitos reservados.
          </div>
          
          <div className="flex items-center gap-6">
            <a href="#projetos" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Projetos
            </a>
            <a href="#processo" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Processo
            </a>
            <a href="#sobre" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Sobre
            </a>
            <a href="#contato" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Contato
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
