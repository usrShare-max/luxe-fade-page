const ADDRESS = "R. Dr. Ézio Carneiro, 126 - QD 33 LT 36 - St. Aeroporto, Luziânia - GO";
const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ADDRESS)}`;
const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(ADDRESS)}&output=embed`;

export function Location() {
  return (
    <section id="localizacao" className="py-24 lg:py-32 bg-surface/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <div className="text-xs text-gold uppercase tracking-widest mb-3">Onde Estamos</div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
            Venha nos <span className="gradient-text-gold">conhecer</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
            Estamos no coração do Setor Aeroporto, em Luziânia. Estrutura premium pensada para o seu conforto.
          </p>

          <div className="p-6 rounded-2xl bg-card border border-border mb-6">
            <div className="flex items-start gap-4">
              <div className="w-11 h-11 rounded-full gradient-gold flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-primary-foreground" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
              </div>
              <div>
                <div className="text-xs text-gold uppercase tracking-wider mb-1">Endereço</div>
                <div className="text-foreground leading-relaxed">{ADDRESS}</div>
              </div>
            </div>
          </div>

          <a
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full gradient-gold text-primary-foreground font-semibold hover:shadow-gold transition-all hover:-translate-y-0.5"
          >
            Abrir no Google Maps →
          </a>
        </div>

        <div className="relative aspect-square lg:aspect-[4/5] rounded-2xl overflow-hidden border border-gold/20">
          <iframe
            src={MAPS_EMBED}
            className="w-full h-full grayscale-[40%] contrast-110"
            style={{ border: 0, filter: "invert(0.92) hue-rotate(180deg)" }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Localização GoodFellas Barbearia"
          />
        </div>
      </div>
    </section>
  );
}
