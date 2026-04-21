const WHATSAPP_URL = "https://wa.me/556192376099?text=Ol%C3%A1!%20Quero%20agendar%20um%20hor%C3%A1rio.";

const services = [
  { name: "Corte", price: "35", desc: "Corte personalizado com técnica precisa e acabamento impecável.", icon: "✂️" },
  { name: "Barba", price: "25", desc: "Modelagem com toalha quente, óleos e produtos premium.", icon: "🪒" },
  { name: "Corte + Barba", price: "55", desc: "Combo completo. O pacote dos cavalheiros que querem o melhor.", icon: "👔", highlight: true },
  { name: "Acabamento", price: "15", desc: "Retoque rápido para manter o visual sempre alinhado.", icon: "💈" },
];

export function Services() {
  return (
    <section id="servicos" className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-2xl mb-16">
          <div className="text-xs text-gold uppercase tracking-widest mb-3">Nossos Serviços</div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            Tudo que você precisa para sair <span className="gradient-text-gold">no estilo</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Preços honestos. Trabalho premium. Cada serviço pensado nos detalhes.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((s) => (
            <div
              key={s.name}
              className={`group relative p-7 rounded-2xl bg-card border transition-all duration-300 hover:-translate-y-1 ${
                s.highlight
                  ? "border-gold/50 shadow-gold"
                  : "border-border hover:border-gold/40"
              }`}
            >
              {s.highlight && (
                <div className="absolute -top-3 left-7 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider gradient-gold text-primary-foreground">
                  Mais pedido
                </div>
              )}
              <div className="text-3xl mb-5">{s.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{s.name}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6 min-h-[3rem]">
                {s.desc}
              </p>
              <div className="flex items-end justify-between pt-5 border-t border-border/60">
                <div>
                  <span className="text-xs text-muted-foreground">A partir de</span>
                  <div className="text-2xl font-bold text-gold">
                    R$ {s.price}
                  </div>
                </div>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gold text-sm font-semibold opacity-0 group-hover:opacity-100 translate-x-[-8px] group-hover:translate-x-0 transition-all"
                >
                  Agendar →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
