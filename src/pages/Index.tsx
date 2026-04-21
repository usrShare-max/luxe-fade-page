import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Reviews } from "@/components/Reviews";
import { Services } from "@/components/Services";
import { Location } from "@/components/Location";
import { FinalCta } from "@/components/FinalCta";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";

export default function Index() {
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
