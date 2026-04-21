import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Reviews } from "@/components/Reviews";
import { Services } from "@/components/Services";
import { Location } from "@/components/Location";
import { FinalCta } from "@/components/FinalCta";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "GoodFellas Barbearia — Barbearia Premium em Luziânia" },
      { name: "description", content: "Agende seu corte em menos de 30 segundos. Barbearia premium em Luziânia. Sem fila, sem ligação. Atendimento direto pelo WhatsApp." },
      { property: "og:title", content: "GoodFellas Barbearia — Premium em Luziânia" },
      { property: "og:description", content: "Corte, barba e acabamento de alto padrão. Agende agora pelo WhatsApp." },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap" },
    ],
  }),
});

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <Reviews />
      <Services />
      <Location />
      <FinalCta />
      <Footer />
      <WhatsAppFloat />
    </main>
  );
}
