import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Bot,
  Database,
  Handshake,
  LayoutTemplate,
  Megaphone,
  MessageSquareText,
  Share2,
} from "lucide-react";

import { Footer } from "@/components/site/footer";
import { Header } from "@/components/site/header";
import { WhatsAppIcon } from "@/components/site/whatsapp-icon";
import { Button } from "@/components/ui/button";
import { WHATSAPP_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Serviços | AEG Media",
  description:
    "Soluções completas de marketing digital com foco em associações de proteção veicular: tráfego pago, landing pages, CRM, social media, chatbots e consultoria comercial.",
};

const services = [
  {
    icon: Megaphone,
    title: "Tráfego Pago (Google e Meta)",
    description:
      "Aumente a visibilidade da sua associação com campanhas publicitárias segmentadas nas principais plataformas digitais. Nosso time especializado cria estratégias que atraem o público certo, gerando tráfego qualificado e aumentando a taxa de adesão. Com análises constantes, ajustamos as campanhas para maximizar o retorno sobre o investimento (ROI).",
  },
  {
    icon: LayoutTemplate,
    title: "Landing Pages Otimizadas",
    description:
      "Desenvolvemos páginas específicas focadas em conversão, feitas para transformar visitantes em associados. Com um design moderno e testes contínuos de usabilidade, garantimos que cada detalhe da landing page seja otimizado para captar leads de forma eficiente, aumentando significativamente as chances de adesão.",
  },
  {
    icon: Database,
    title: "Implementação de CRM",
    description:
      "Implementamos e integramos diferentes CRMs para simplificar a gestão de dados e melhorar a comunicação com associados. Automatizamos processos, como follow-ups e nutrição de leads, otimizando seu tempo e garantindo uma relação mais próxima e eficiente com os usuários interessados.",
  },
  {
    icon: Share2,
    title: "Social Media",
    description:
      "Gerimos suas redes sociais com foco em criar um relacionamento duradouro e engajador com o seu público. Desde a criação de conteúdo relevante até a análise de métricas de desempenho, garantimos que sua marca se destaque nas plataformas digitais, aumentando a visibilidade e o engajamento com futuros associados.",
  },
  {
    icon: Bot,
    title: "Chatbots",
    description:
      "Automatize o atendimento da sua associação com chatbots inteligentes que proporcionam respostas rápidas e eficientes, 24 horas por dia. Personalizados para entender as necessidades do seu público, os chatbots ajudam a manter a comunicação ativa e reduzir o tempo de espera, melhorando a experiência do usuário.",
  },
  {
    icon: Handshake,
    title: "Consultoria Comercial",
    description:
      "Implementamos a metodologia Comercial Interno, nossa estratégia exclusiva para otimizar o desempenho das equipes de vendas. Com foco em aumentar adesões, nossa consultoria analisa processos, ajusta abordagens e oferece treinamentos personalizados, criando um time comercial eficiente e alinhado com as melhores práticas do mercado.",
  },
];

export default function ServicosPage() {
  return (
    <>
      <Header />

      <main className="flex-1">
        {/* Intro */}
        <section className="relative overflow-hidden bg-navy">
          <div
            aria-hidden
            className="pointer-events-none absolute -top-40 right-0 size-[600px] rounded-full bg-brand/20 blur-[160px]"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-40 -left-40 size-[500px] rounded-full bg-brand/10 blur-[140px]"
          />

          <div className="relative mx-auto w-full max-w-4xl px-4 pb-16 pt-36 text-center sm:px-6 lg:pb-20 lg:pt-44">
            <p className="flex items-center justify-center gap-2 text-sm font-bold uppercase tracking-widest text-brand-light">
              <span aria-hidden className="size-1.5 rounded-full bg-brand-light" />
              Serviços
            </p>
            <h1 className="mt-5 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl">
              Soluções completas de{" "}
              <span className="bg-gradient-to-r from-brand-light to-sky-400 bg-clip-text text-transparent">
                marketing digital
              </span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-white/70">
              Na AEG Media, oferecemos soluções completas de marketing digital,
              com foco em associações de proteção veicular. Nosso time
              especializado utiliza estratégias inovadoras para aumentar as
              adesões e maximizar os resultados dos nossos clientes. Confira
              abaixo alguns dos serviços que oferecemos e descubra como podemos
              ajudar a sua associação a alcançar novos patamares.
            </p>
          </div>
        </section>

        {/* Serviços */}
        <section className="bg-black">
          <div className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6 lg:py-28">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => (
                <article
                  key={service.title}
                  className="flex flex-col rounded-2xl border border-white/10 bg-white/[0.04] p-7 transition-colors hover:border-brand/50 hover:bg-white/[0.07]"
                >
                  <div className="mb-5 flex size-12 items-center justify-center rounded-xl bg-brand">
                    <service.icon className="size-6 text-white" />
                  </div>
                  <h2 className="text-xl font-bold text-white">
                    {service.title}
                  </h2>
                  <p className="mt-3 text-white/60">{service.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative overflow-hidden bg-navy">
          <div
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-1/2 size-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand/15 blur-[150px]"
          />

          <div className="relative mx-auto w-full max-w-3xl px-4 py-20 text-center sm:px-6 lg:py-28">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Pronto para alavancar seus resultados?
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg text-white/70">
              A equipe da AEG Media está preparada para ajudar sua associação a
              conquistar mais adesões e resultados concretos. Nossos
              especialistas estão à disposição para criar estratégias
              personalizadas, otimizadas para o sucesso do seu negócio.
            </p>
            <p className="mx-auto mt-4 max-w-2xl text-white/70">
              Entre em contato agora e descubra como podemos levar sua
              associação ao próximo nível!
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button asChild size="lg" className="h-12 px-6 text-base">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <WhatsAppIcon className="size-5" />
                  Entrar em contato
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="h-12 border-white/20 bg-transparent px-6 text-base text-white hover:bg-white/10 hover:text-white"
              >
                <Link href="/">
                  Voltar para o início
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
