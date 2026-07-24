import Image, { type StaticImageData } from "next/image";

import belloscar from "@/assets/images/clients/belloscar.webp";
import mk from "@/assets/images/clients/mk.webp";
import nick from "@/assets/images/clients/nick.webp";
import petrolina from "@/assets/images/clients/petrolina.webp";
import pinheiro from "@/assets/images/clients/pinheiro.webp";
import badge26 from "@/assets/images/hero-section/26-ESTADOS-ATENDIDOS.webp";
import badge9 from "@/assets/images/hero-section/9-ANOS-DE-MERCADO.webp";
import badge700 from "@/assets/images/hero-section/700-EMPRESAS-NA-NOVA-ERA.webp";
import antonioPedro from "@/assets/images/hero-section/antonio-pedro.webp";
import heroBg from "@/assets/images/hero-section/bg.webp";
import { Button } from "@/components/ui/button";
import { WHATSAPP_URL } from "@/lib/site";
import { WhatsAppIcon } from "./whatsapp-icon";

type Client = { name: string; image: StaticImageData };

const clients: Client[] = [
  { name: "Belloscar", image: belloscar },
  { name: "MK", image: mk },
  { name: "Nick", image: nick },
  { name: "Petrolina", image: petrolina },
  { name: "Pinheiro", image: pinheiro },
];

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-[720px] overflow-hidden bg-navy lg:min-h-[88vh]"
    >
      {/* Fundo full-bleed cobrindo toda a seção (inclusive atrás da navbar) */}
      <Image
        src={heroBg}
        alt=""
        aria-hidden
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      {/* Reforço na base para a foto se fundir com a seção */}
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-navy to-transparent"
      />

      <div className="relative mx-auto grid min-h-[720px] w-full max-w-6xl items-center gap-8 px-4 pt-24 sm:px-6 lg:min-h-[88vh] lg:grid-cols-2 lg:gap-12">
        {/* Texto */}
        <div className="flex flex-col items-center gap-6 self-center pb-10 text-center lg:items-start lg:pb-0 lg:text-left">
          <h1 className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl">
            Acelere seu resultado na{" "}
            <span className="bg-gradient-to-r from-brand-light to-sky-400 bg-clip-text text-transparent">
              NOVA ERA
            </span>{" "}
            do mercado automotivo
          </h1>

          <p className="max-w-lg text-lg text-white/70">
            Somos especialistas em gerar visitas diárias na sua loja utilizando
            marketing, tecnologia e comercial.
          </p>

          {/* Prova social */}
          <div className="flex items-center gap-4">
            <div className="flex -space-x-3">
              {clients.map((client) => (
                <Image
                  key={client.name}
                  src={client.image}
                  alt={client.name}
                  title={client.name}
                  className="size-11 rounded-full border-2 border-navy object-cover"
                />
              ))}
            </div>
            <p className="text-sm text-white/70">
              <strong className="text-white">+ de 700 empresas</strong>
              <br />
              já estão conosco
            </p>
          </div>

          <Button asChild size="lg" className="h-12 px-6 text-base">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              <WhatsAppIcon className="size-5" />
              Quero fazer parte!
            </a>
          </Button>
        </div>

        {/* Foto + badges 3D flutuantes — colada na base da seção */}
        <div className="relative mx-auto flex w-full max-w-sm items-end justify-center self-end lg:max-w-lg">
          <Image
            src={antonioPedro}
            alt="Fundador da AEG Media"
            priority
            className="relative block w-[88%] max-w-sm lg:w-full lg:max-w-none"
          />

          {/* +26 estados atendidos */}
          <Image
            src={badge26}
            alt="+26 estados atendidos"
            className="animate-float absolute -left-2 top-[16%] w-24 sm:w-28 lg:w-37"
            style={{ animationDuration: "6s", animationDelay: "0s" }}
          />

          {/* +9 anos de mercado */}
          <Image
            src={badge9}
            alt="+9 anos de mercado"
            className="animate-float absolute bottom-[10%] left-0 w-24 sm:w-28 lg:w-37"
            style={{ animationDuration: "5s", animationDelay: "-2s" }}
          />

          {/* +700 empresas na Nova Era */}
          <Image
            src={badge700}
            alt="+700 empresas na Nova Era"
            className="animate-float absolute bottom-[12%] -right-2 w-24 sm:w-28 lg:w-37"
            style={{ animationDuration: "7s", animationDelay: "-4s" }}
          />
        </div>
      </div>
    </section>
  );
}
