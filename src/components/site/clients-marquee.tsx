import Image, { type StaticImageData } from "next/image";

import agilAutomoveis from "@/assets/images/clients/logos/agil-automoveis.webp";
import autoX from "@/assets/images/clients/logos/auto-x.webp";
import bellosCar from "@/assets/images/clients/logos/bellos-car.webp";
import bmr from "@/assets/images/clients/logos/bmr.webp";
import bossMotors from "@/assets/images/clients/logos/boss-motors.webp";
import brasilMultimarcas from "@/assets/images/clients/logos/brasil-multimarcas.webp";
import bravoVeiculos from "@/assets/images/clients/logos/bravo-veiculos.webp";
import domVeiculos from "@/assets/images/clients/logos/dom-veiculos.webp";
import gbetCar from "@/assets/images/clients/logos/gbet-car.webp";
import l3Multimarcas from "@/assets/images/clients/logos/l3-multimarcas.webp";
import lmAutomoveis from "@/assets/images/clients/logos/lm-automoveis.webp";
import mkVeiculos from "@/assets/images/clients/logos/m&k-veiculos.webp";
import megabrasil from "@/assets/images/clients/logos/megabrasil.webp";
import multResults from "@/assets/images/clients/logos/mult-results.webp";
import nick from "@/assets/images/clients/logos/nick.webp";
import petrolinaSeminovos from "@/assets/images/clients/logos/petrolina-seminovos.webp";
import pinheiroVeiculos from "@/assets/images/clients/logos/pinheiro-veiculos.webp";
import reiAutomoveis from "@/assets/images/clients/logos/rei-automoveis.webp";
import shoppingDoAutomovel from "@/assets/images/clients/logos/shopping-do-automovel.webp";
import startVeiculos from "@/assets/images/clients/logos/start-veiculos.webp";
import torontoBlack from "@/assets/images/clients/logos/toronto-black.webp";
import uniaoMotors from "@/assets/images/clients/logos/uniao-motors.webp";
import vhMotors from "@/assets/images/clients/logos/vh-motors.webp";

type ClientLogo = { name: string; image: StaticImageData };

const logos: ClientLogo[] = [
  { name: "Ágil Automóveis", image: agilAutomoveis },
  { name: "Auto X", image: autoX },
  { name: "Bellos Car", image: bellosCar },
  { name: "BMR", image: bmr },
  { name: "Boss Motors", image: bossMotors },
  { name: "Brasil Multimarcas", image: brasilMultimarcas },
  { name: "Bravo Veículos", image: bravoVeiculos },
  { name: "Dom Veículos", image: domVeiculos },
  { name: "GBet Car", image: gbetCar },
  { name: "L3 Multimarcas", image: l3Multimarcas },
  { name: "LM Automóveis", image: lmAutomoveis },
  { name: "M&K Veículos", image: mkVeiculos },
  { name: "MegaBrasil", image: megabrasil },
  { name: "Mult Results", image: multResults },
  { name: "Nick", image: nick },
  { name: "Petrolina Seminovos", image: petrolinaSeminovos },
  { name: "Pinheiro Veículos", image: pinheiroVeiculos },
  { name: "Rei Automóveis", image: reiAutomoveis },
  { name: "Shopping do Automóvel", image: shoppingDoAutomovel },
  { name: "Start Veículos", image: startVeiculos },
  { name: "Toronto Black", image: torontoBlack },
  { name: "União Motors", image: uniaoMotors },
  { name: "VH Motors", image: vhMotors },
];

function MarqueeTrack({ hidden = false }: { hidden?: boolean }) {
  return (
    <div
      aria-hidden={hidden}
      className="animate-marquee flex shrink-0 items-center"
    >
      {logos.map((logo) => (
        <Image
          key={logo.name}
          src={logo.image}
          alt={hidden ? "" : logo.name}
          title={logo.name}
          className="mx-8 h-10 w-auto max-w-32 object-contain opacity-60 transition-opacity hover:opacity-100"
        />
      ))}
    </div>
  );
}

/**
 * Marquee infinito com CSS puro: a lista é renderizada duas vezes e cada
 * trilha desliza -100%; quando a primeira sai da tela, a segunda está
 * exatamente no lugar dela — loop contínuo sem JavaScript.
 */
export function ClientsMarquee() {
  return (
    <div className="mb-16 flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
      <MarqueeTrack />
      <MarqueeTrack hidden />
    </div>
  );
}
