import type { Metadata } from "next";
import { ArrowRight, CircleCheckBig, Users } from "lucide-react";

import { CourseCoversCarousel } from "@/components/site/course-covers-carousel";
import { Footer } from "@/components/site/footer";
import { Header } from "@/components/site/header";
import { PlanosArea } from "@/components/site/planos-area";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Área de Membros | Formação Nova Era — AEG Media",
  description:
    "Acesse conteúdos exclusivos, estratégias comprovadas e ferramentas práticas para transformar seu desempenho em marketing digital. Conheça a Formação Nova Era.",
};

const highlights = [
  {
    title: "Formação em Pré-Vendas",
    description: "básico ao avançado para estruturar sua pré-vendas;",
  },
  {
    title: "Formação Vendedor",
    description: "básico ao avançado para vender mais;",
  },
  {
    title: "Formação Gestor",
    description: "rotinas de quem bate meta todos os meses;",
  },
  {
    title: "Papo de Dono",
    description:
      "consolidado de conhecimentos, mentorias e investimentos do nosso fundador;",
  },
];

const AMOSTRA_VIDEO = "https://www.youtube-nocookie.com/embed/eO0RBJ8QbRc";

export default function AreaDeMembrosPage() {
  return (
    <>
      <Header />

      <main className="flex-1">
        {/* Hero */}
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
              Área de Membros
            </p>
            <h1 className="mt-5 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl">
              Conheça a nossa{" "}
              <span className="bg-gradient-to-r from-brand-light to-sky-400 bg-clip-text text-transparent">
                FORMAÇÃO NOVA ERA!
              </span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-white/70">
              Acesse conteúdos exclusivos, estratégias comprovadas e ferramentas
              práticas para transformar seu desempenho em marketing digital.
              Tudo em um só lugar, pensado para você.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-6 sm:flex-row">
              <Button asChild size="lg" className="h-12 px-6 text-base">
                <a href="#planos">
                  Ver planos
                  <ArrowRight className="size-4" />
                </a>
              </Button>

              <div className="flex items-center gap-3">
                <Users className="size-9 text-brand-light" />
                <p className="text-left text-sm text-white/70">
                  <strong className="text-2xl font-bold text-white">
                    +700
                  </strong>
                  <br />
                  usuários cadastrados em todo o Brasil!
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Conteúdos exclusivos */}
        <section className="relative overflow-hidden bg-black">
          <div className="relative mx-auto grid w-full max-w-6xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[5fr_6fr] lg:py-28">
            <div className="text-center lg:text-left">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Conteúdos exclusivos!
              </h2>
              <p className="mt-4 text-white/70">
                Um espaço exclusivo com formações que vão transformar seu
                negócio. Aprenda técnicas avançadas de vendas e marketing com
                conteúdos como:
              </p>

              <ul className="mt-6 space-y-3 text-left">
                {highlights.map((item) => (
                  <li key={item.title} className="flex gap-3">
                    <CircleCheckBig className="mt-0.5 size-5 shrink-0 text-brand-light" />
                    <p className="text-white/70">
                      <strong className="text-white">{item.title}</strong>:{" "}
                      {item.description}
                    </p>
                  </li>
                ))}
              </ul>

              <p className="mt-6 font-medium text-white">
                Acesse agora e leve seu negócio ao próximo nível!
              </p>

              <Button asChild size="lg" className="mt-6 h-12 px-6 text-base">
                <a href="#planos">
                  Ver planos
                  <ArrowRight className="size-4" />
                </a>
              </Button>
            </div>

            {/* Capas dos cursos */}
            <CourseCoversCarousel />
          </div>
        </section>

        {/* Planos */}
        <section
          id="planos"
          className="relative overflow-hidden scroll-mt-24 bg-navy"
        >
          <div
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-0 size-[500px] -translate-x-1/2 rounded-full bg-brand/15 blur-[150px]"
          />

          <div className="relative mx-auto w-full max-w-6xl px-4 py-20 sm:px-6 lg:py-28">
            <div className="mx-auto mb-12 max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Nossos planos
              </h2>
              <p className="mt-4 text-white/70">
                Seja você um iniciante ou um expert, temos a solução perfeita
                para acompanhar sua jornada e ajudar seu negócio a crescer.
                Compare nossos planos e comece agora!
              </p>
            </div>

            <PlanosArea />
          </div>
        </section>

        {/* Amostra grátis */}
        <section className="bg-black">
          <div className="mx-auto w-full max-w-4xl px-4 py-20 text-center sm:px-6 lg:py-28">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Que tal uma amostra grátis?
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-white/70">
              Assista a um dos nossos Treinamentos Semanais exclusivos e
              descubra como transformamos desafios reais em estratégias de
              sucesso. Experimente a qualidade que só a AEG Media oferece!
            </p>

            <div className="mt-10 overflow-hidden rounded-3xl border border-white/10 shadow-2xl shadow-black/40">
              <iframe
                src={AMOSTRA_VIDEO}
                title="Planejamento Estratégico 2026 | Antônio Pedro"
                className="aspect-video w-full"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
            <p className="mt-4 text-sm text-white/50">
              Planejamento Estratégico 2026 | Antônio Pedro
            </p>
          </div>
        </section>

        {/* CTA final */}
        <section className="relative overflow-hidden bg-navy">
          <div
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-1/2 size-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand/15 blur-[150px]"
          />

          <div className="relative mx-auto w-full max-w-3xl px-4 py-20 text-center sm:px-6 lg:py-28">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Pronto para dar o próximo passo?
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg text-white/70">
              Transforme seu potencial em resultados concretos. Escolha seu
              plano e comece agora a acessar o melhor das estratégias de vendas
              com a AEG Media!
            </p>

            <Button asChild size="lg" className="mt-8 h-12 px-6 text-base">
              <a href="#planos">
                Ver planos
                <ArrowRight className="size-4" />
              </a>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
