import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Bot,
  Camera,
  ChartNoAxesCombined,
  GraduationCap,
  LayoutDashboard,
} from "lucide-react";

import logoAeg from "@/assets/images/logo-aeg-branca.png";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ClientsMarquee } from "./clients-marquee";

const services = [
  {
    icon: ChartNoAxesCombined,
    title: "Tráfego Pago",
    description:
      "Gerenciamos campanhas no Google e Meta, otimizando anúncios para gerar mais leads qualificados e aumentar suas vendas de forma eficiente.",
  },
  {
    icon: Bot,
    title: "Venda.IA",
    description:
      "Nosso agente 24h/7d atendendo direto no seu WhatsApp, qualificando e agendando visitas reais.",
  },
  {
    icon: LayoutDashboard,
    title: "Venda.IA CRM",
    description:
      "CRM automatizado com nossa IA que atualiza sozinho e gera dados em tempo real.",
  },
  {
    icon: GraduationCap,
    title: "Treinamento comercial",
    description:
      "Especialistas que vivem na prática vendas para o mercado automotivo treinando desde pré-vendas até gestão comercial.",
  },
  {
    icon: Camera,
    title: "Criativa.IA",
    description:
      "Nosso agente de fotografias que transforma qualquer foto de um veículo em foto profissional, seja no showroom, estúdio ou rua.",
  },
];

export function Services() {
  return (
    <section id="servicos" className="relative overflow-hidden bg-black">
      {/* Marca d'água decorativa */}
      <Image
        src={logoAeg}
        alt=""
        aria-hidden
        className="pointer-events-none absolute -left-24 top-1/2 w-[480px] -translate-y-1/2 opacity-[0.04]"
      />

      <div className="relative mx-auto w-full max-w-6xl px-4 py-20 sm:px-6 lg:py-28">
        {/* Logos de clientes passando automaticamente */}
        <ClientsMarquee />

        <div className="mb-14 flex flex-col items-center gap-8 text-center lg:flex-row lg:items-center lg:gap-12 lg:text-left">
          <h2 className="max-w-md shrink-0 text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl">
            O que você encontra nos{" "}
            <span className="bg-gradient-to-r from-brand-light to-sky-400 bg-clip-text text-transparent">
              nossos serviços?
            </span>
          </h2>

          {/* Linha divisória sutil */}
          <div
            aria-hidden
            className="hidden h-px flex-1 bg-gradient-to-r from-transparent via-white/25 to-transparent lg:block"
          />

          <p className="max-w-sm text-white/60 lg:shrink-0">
            Alguns dos principais serviços que oferecemos:{" "}
            <strong className="text-white">
              marketing, tecnologia e comercial integrados
            </strong>{" "}
            para gerar visitas diárias e fazer sua loja vender cada vez mais.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-6">
          {services.map((service, i) => (
            <Card
              key={service.title}
              className={`border-white/10 bg-white/[0.04] transition-colors hover:border-brand/50 hover:bg-white/[0.07] ${
                i < 3 ? "lg:col-span-2" : "lg:col-span-3"
              }`}
            >
              <CardHeader>
                <div className="mb-3 flex size-12 items-center justify-center rounded-xl bg-brand">
                  <service.icon className="size-6 text-white" />
                </div>
                <CardTitle className="text-xl text-white">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-base text-white/60">
                  {service.description}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button asChild size="lg" className="h-11 px-6">
            <Link href="/servicos">
              Ver mais
              <ArrowRight className="size-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
