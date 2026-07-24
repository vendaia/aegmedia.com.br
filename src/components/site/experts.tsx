import Image, { type StaticImageData } from "next/image";

import antonioJunior from "@/assets/images/experts/antonio-junior.png";
import carlosHenrique from "@/assets/images/experts/carlos-henrique.png";
import carlosSilva from "@/assets/images/experts/carlos-silva.png";
import gabriel from "@/assets/images/experts/gabriel.png";
import gustavo from "@/assets/images/experts/gustavo.png";
import isaac from "@/assets/images/experts/isaac.png";
import luizCarlos from "@/assets/images/experts/luiz-carlos.png";
import stephanie from "@/assets/images/experts/stephanie.png";
import wayslanne from "@/assets/images/experts/wayslanne.png";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

type Expert = { name: string; image: StaticImageData };

const experts: Expert[] = [
  { name: "Antônio Júnior", image: antonioJunior },
  { name: "Carlos Henrique", image: carlosHenrique },
  { name: "Carlos Silva", image: carlosSilva },
  { name: "Gabriel", image: gabriel },
  { name: "Gustavo", image: gustavo },
  { name: "Isaac", image: isaac },
  { name: "Luiz Carlos", image: luizCarlos },
  { name: "Stephanie", image: stephanie },
  { name: "Wayslanne", image: wayslanne },
];

export function Experts() {
  return (
    <section id="especialistas" className="bg-black">
      <div className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6 lg:py-28">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Conheça nossos especialistas
          </h2>
          <p className="mt-3 text-white/60">
            Esses são alguns dos especialistas que irão garantir o seu sucesso
          </p>
        </div>

        <Carousel opts={{ align: "start", loop: true }} className="px-10">
          <CarouselContent>
            {experts.map((expert) => (
              <CarouselItem
                key={expert.name}
                className="basis-3/4 sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
              >
                <figure className="group relative overflow-hidden rounded-2xl bg-navy">
                  <Image
                    src={expert.image}
                    alt={expert.name}
                    className="aspect-[3/4] w-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy via-navy/70 to-transparent pb-4 pt-12 text-center">
                    <figcaption className="text-base font-semibold text-white">
                      {expert.name}
                    </figcaption>
                  </div>
                </figure>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-0 border-white/20 bg-white/10 text-white hover:bg-white/20 hover:text-white" />
          <CarouselNext className="right-0 border-white/20 bg-white/10 text-white hover:bg-white/20 hover:text-white" />
        </Carousel>
      </div>
    </section>
  );
}
