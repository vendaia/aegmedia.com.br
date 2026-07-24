import Link from "next/link";
import { ArrowRight, CircleCheckBig } from "lucide-react";

import { Button } from "@/components/ui/button";
import { CourseCoversCarousel } from "./course-covers-carousel";
import { FORMACAO_URL } from "@/lib/site";

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

export function Formacao() {
  return (
    <section className="relative overflow-hidden bg-navy">
      <div
        aria-hidden
        className="pointer-events-none absolute -left-40 top-1/2 size-[500px] -translate-y-1/2 rounded-full bg-brand/15 blur-[150px]"
      />

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[5fr_6fr] lg:py-28">
        <div className="text-center lg:text-left">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Conheça a<br />
            <span className="bg-gradient-to-r from-brand-light to-sky-400 bg-clip-text text-transparent">
              FORMAÇÃO NOVA ERA
            </span>
          </h2>
          <p className="mt-4 text-white/70">
            Um espaço exclusivo com formações que vão transformar seu negócio.
            Aprenda técnicas avançadas de vendas e marketing com conteúdos como:
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
            <Link href={FORMACAO_URL}>
              Formação Nova Era
              <ArrowRight className="size-4" />
            </Link>
          </Button>
        </div>

        {/* Capas dos cursos */}
        <CourseCoversCarousel />
      </div>
    </section>
  );
}
