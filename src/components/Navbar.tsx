const WHATSAPP_URL = "https://wa.me/556192376099";

export function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 backdrop-blur-md bg-background/70 border-b border-border/50">
      <nav className="max-w-7xl mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2 group">
          <span className="w-8 h-8 rounded-full gradient-gold flex items-center justify-center text-primary-foreground font-bold text-sm">
            G
          </span>
          <span className="font-semibold tracking-wide text-sm sm:text-base">
            GoodFellas <span className="text-gold">Barbearia</span>
          </span>
        </a>
        <div className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          <a href="#servicos" className="hover:text-gold transition-colors">Serviços</a>
          <a href="#avaliacoes" className="hover:text-gold transition-colors">Avaliações</a>
          <a href="#localizacao" className="hover:text-gold transition-colors">Localização</a>
        </div>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full gradient-gold text-primary-foreground text-sm font-semibold hover:shadow-gold transition-all"
        >
          Agendar
        </a>
      </nav>
    </header>
  );
}
