import { Experts } from "@/components/site/experts";
import { Faq } from "@/components/site/faq";
import { Footer } from "@/components/site/footer";
import { Formacao } from "@/components/site/formacao";
import { Header } from "@/components/site/header";
import { Hero } from "@/components/site/hero";
import { Partners } from "@/components/site/partners";
import { Services } from "@/components/site/services";
import { Stats } from "@/components/site/stats";
import { Testimonials } from "@/components/site/testimonials";
import { WhatsAppFloat } from "@/components/site/whatsapp-float";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <Services />
        <Testimonials />
        <Experts />
        <Stats />
        <Partners />
        <Formacao />
        <Faq />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
