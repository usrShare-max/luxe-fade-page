export function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <div className="flex items-center gap-2">
          <span className="w-7 h-7 rounded-full gradient-gold flex items-center justify-center text-primary-foreground font-bold text-xs">G</span>
          <span className="font-semibold text-foreground">GoodFellas <span className="text-gold">Barbearia</span></span>
        </div>
        <div>© {new Date().getFullYear()} GoodFellas. Todos os direitos reservados.</div>
      </div>
    </footer>
  );
}
