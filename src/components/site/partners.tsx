import Image, { type StaticImageData } from "next/image";

import alverj from "@/assets/images/partners/alverj.webp";
import anreve from "@/assets/images/partners/anreve.webp";
import assoveba from "@/assets/images/partners/assoveba.webp";
import assovepa from "@/assets/images/partners/assovepa.webp";
import assovepe from "@/assets/images/partners/assovepe.webp";
import avese from "@/assets/images/partners/avese.webp";
import fenauto from "@/assets/images/partners/fenauto.webp";
import sindivel from "@/assets/images/partners/sindivel.webp";
import sinvep from "@/assets/images/partners/sinvep.webp";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

type Partner = { name: string; image: StaticImageData };

const partners: Partner[] = [
  { name: "Fenauto", image: fenauto },
  { name: "Assoveba", image: assoveba },
  { name: "Sinvep", image: sinvep },
  { name: "Alverj", image: alverj },
  { name: "Anreve", image: anreve },
  { name: "Assovepa", image: assovepa },
  { name: "Assovepe", image: assovepe },
  { name: "Avese", image: avese },
  { name: "Sindivel", image: sindivel },
];

export function Partners() {
  return (
    <section className="bg-black">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-10 px-4 py-16 sm:px-6 lg:flex-row lg:gap-16">
        <h2 className="shrink-0 text-2xl font-bold tracking-tight text-white">
          Nossos{" "}
          <span className="underline decoration-brand decoration-4 underline-offset-8">
            parceiros
          </span>
          :
        </h2>

        <Carousel
          opts={{ align: "start", loop: true }}
          className="w-full min-w-0 px-10"
        >
          <CarouselContent>
            {partners.map((partner) => (
              <CarouselItem
                key={partner.name}
                className="basis-1/3 sm:basis-1/4 md:basis-1/5 lg:basis-1/6"
              >
                <div className="flex items-center justify-center py-2">
                  <Image
                    src={partner.image}
                    alt={partner.name}
                    title={partner.name}
                    className="size-16 rounded-full object-cover ring-2 ring-white/10 transition-transform hover:scale-110 sm:size-20"
                  />
                </div>
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
