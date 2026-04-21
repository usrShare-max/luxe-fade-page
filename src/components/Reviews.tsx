import { useEffect, useState } from "react";

const reviews = [
  { name: "Lucas Mendes", text: "Melhor barbearia que já fui em Luziânia. Atendimento impecável e corte preciso. Saí outro homem.", },
  { name: "Rafael Souza", text: "Ambiente top, profissionais que entendem do assunto. Recomendo de olhos fechados.", },
  { name: "Pedro Henrique", text: "Atendimento pontual, sem espera. O corte ficou perfeito e a barba então… nota 10.", },
  { name: "Bruno Carvalho", text: "Lugar com cara de premium mesmo. Vale cada centavo. Já virei cliente fixo.", },
  { name: "André Lima", text: "Profissionalismo absurdo. Barbeiro escuta o que você quer e entrega ainda melhor.", },
  { name: "Thiago Ribeiro", text: "Achei pelo Google e me surpreendi. Estrutura linda e equipe muito atenciosa.", },
];

function GoogleIcon() {
  return (
    <svg className="w-4 h-4" viewBox="0 0 24 24">
      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
    </svg>
  );
}

function Stars() {
  return (
    <div className="flex gap-0.5 text-gold">
      {[...Array(5)].map((_, i) => (
        <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.287 3.957c.3.922-.755 1.688-1.54 1.118l-3.37-2.448a1 1 0 00-1.176 0l-3.37 2.448c-.784.57-1.838-.196-1.539-1.118l1.286-3.957a1 1 0 00-.363-1.118L2.05 9.384c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.951-.69l1.286-3.957z"/>
        </svg>
      ))}
    </div>
  );
}

export function Reviews() {
  const [index, setIndex] = useState(0);
  const itemsPerView = 3;
  const maxIndex = Math.max(0, reviews.length - itemsPerView);

  useEffect(() => {
    const t = setInterval(() => {
      setIndex((i) => (i >= maxIndex ? 0 : i + 1));
    }, 4500);
    return () => clearInterval(t);
  }, [maxIndex]);

  return (
    <section id="avaliacoes" className="py-24 lg:py-32 bg-surface/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <div className="text-xs text-gold uppercase tracking-widest mb-3">Depoimentos</div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight max-w-xl">
              Avaliações reais de clientes no <span className="gradient-text-gold">Google</span>
            </h2>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIndex((i) => Math.max(0, i - 1))}
              className="w-11 h-11 rounded-full border border-border hover:border-gold/60 flex items-center justify-center transition-colors"
              aria-label="Anterior"
            >
              ←
            </button>
            <button
              onClick={() => setIndex((i) => Math.min(maxIndex, i + 1))}
              className="w-11 h-11 rounded-full border border-border hover:border-gold/60 flex items-center justify-center transition-colors"
              aria-label="Próximo"
            >
              →
            </button>
          </div>
        </div>

        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-700 ease-out gap-6"
            style={{ transform: `translateX(calc(-${index} * (100% / ${itemsPerView}) - ${index} * 0px))` }}
          >
            {reviews.map((r, i) => (
              <article
                key={i}
                className="flex-shrink-0 w-full md:w-[calc((100%-3rem)/3)] p-7 rounded-2xl bg-card border border-border hover:border-gold/40 transition-all"
              >
                <div className="flex items-center justify-between mb-4">
                  <Stars />
                  <GoogleIcon />
                </div>
                <p className="text-muted-foreground leading-relaxed mb-6 text-sm">
                  “{r.text}”
                </p>
                <div className="flex items-center gap-3 pt-4 border-t border-border/60">
                  <div className="w-10 h-10 rounded-full gradient-gold flex items-center justify-center text-primary-foreground font-semibold text-sm">
                    {r.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-sm">{r.name}</div>
                    <div className="text-xs text-muted-foreground">Cliente verificado</div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {[...Array(maxIndex + 1)].map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`h-1.5 rounded-full transition-all ${
                i === index ? "w-8 bg-gold" : "w-1.5 bg-border"
              }`}
              aria-label={`Ir para slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
