import heroImg from "@/assets/hero-barbershop.jpg";

const WHATSAPP_URL = "https://wa.me/556192376099?text=Ol%C3%A1!%20Quero%20agendar%20um%20hor%C3%A1rio.";

export function Hero() {
  return (
    <section id="top" className="relative min-h-screen pt-24 pb-16 gradient-hero overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 opacity-30">
        <img
          src={heroImg}
          alt="Interior premium da GoodFellas Barbearia"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
        <div className="animate-fade-up max-w-xl">
          {/* Selo */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold/30 bg-gold/5 text-gold text-xs font-medium tracking-wider uppercase mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
            Barbearia Premium em Luziânia
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight mb-6">
            Agende seu corte em <span className="gradient-text-gold">menos de 30 segundos</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-muted-foreground mb-10 leading-relaxed">
            Sem fila. Sem ligação. Só chegar e cortar.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full gradient-gold text-primary-foreground font-semibold hover:shadow-gold-lg transition-all hover:-translate-y-0.5"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Agendar no WhatsApp
            </a>
            <a
              href="#servicos"
              className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full border border-border hover:border-gold/50 text-foreground font-semibold transition-all"
            >
              Ver serviços
            </a>
          </div>

          {/* Indicadores */}
          <div className="flex flex-wrap items-center gap-x-8 gap-y-4 pt-8 border-t border-border/50">
            <div>
              <div className="text-2xl font-bold text-gold">+100</div>
              <div className="text-xs text-muted-foreground uppercase tracking-wider">Avaliações</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-gold flex items-center gap-1">
                5.0 <span className="text-base">⭐</span>
              </div>
              <div className="text-xs text-muted-foreground uppercase tracking-wider">Nota Google</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-gold">+5 anos</div>
              <div className="text-xs text-muted-foreground uppercase tracking-wider">Experiência</div>
            </div>
          </div>
        </div>

        {/* Right visual element - decorative card */}
        <div className="hidden lg:block relative animate-fade-in">
          <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-gold/20 shadow-gold-lg">
            <img src={heroImg} alt="Ambiente GoodFellas" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <div className="text-xs text-gold uppercase tracking-widest mb-1">GoodFellas</div>
              <div className="text-xl font-semibold">Tradição & Estilo</div>
            </div>
          </div>
          {/* gold accent */}
          <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full bg-gold/20 blur-2xl" />
          <div className="absolute -bottom-4 -left-4 w-32 h-32 rounded-full bg-gold/10 blur-3xl" />
        </div>
      </div>
    </section>
  );
}
