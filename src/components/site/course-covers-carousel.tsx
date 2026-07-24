import Image, { type StaticImageData } from "next/image";

import campanhaIndicacao from "@/assets/images/course-covers/capanha-de-indicacao.webp";
import encantamentoDisney from "@/assets/images/course-covers/encantamento-disnep.webp";
import preVendasAvancado from "@/assets/images/course-covers/nova-era-pre-vendas-avancado.webp";
import preVendas from "@/assets/images/course-covers/nova-era-pre-vendas.webp";
import novaEraVendas from "@/assets/images/course-covers/nova-era-vendas.webp";
import papoDeDono from "@/assets/images/course-covers/papo-de-dono.webp";
import papoDeGestor from "@/assets/images/course-covers/papo-de-gestor-comercial.webp";
import reuniaoSecreta from "@/assets/images/course-covers/REUNIAO-SECRETA.webp";
import treinamentosSemanais from "@/assets/images/course-covers/treinamentos-semanais.webp";
import visaoTrafegoPago from "@/assets/images/course-covers/VISAO-PARA-TRAFEGO-PAGO.webp";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

type Course = { name: string; image: StaticImageData };

const courses: Course[] = [
  { name: "Formação Nova Era Vendas", image: novaEraVendas },
  { name: "Papo de Dono", image: papoDeDono },
  { name: "Nova Era Pré-Vendas", image: preVendas },
  { name: "Nova Era Pré-Vendas Avançado", image: preVendasAvancado },
  { name: "Papo de Gestor Comercial", image: papoDeGestor },
  { name: "Visão para Tráfego Pago", image: visaoTrafegoPago },
  { name: "Reunião Secreta", image: reuniaoSecreta },
  { name: "Campanha de Indicação", image: campanhaIndicacao },
  { name: "Encantamento Disney", image: encantamentoDisney },
  { name: "Treinamentos Semanais", image: treinamentosSemanais },
];

export function CourseCoversCarousel({
  className,
  itemClassName = "basis-3/4 sm:basis-1/2 lg:basis-1/2",
}: {
  className?: string;
  itemClassName?: string;
}) {
  return (
    <Carousel
      opts={{ align: "start", loop: true }}
      className={cn("w-full min-w-0 px-10", className)}
    >
      <CarouselContent>
        {courses.map((course) => (
          <CarouselItem key={course.name} className={itemClassName}>
            <Image
              src={course.image}
              alt={`Capa do curso ${course.name}`}
              className="aspect-[9/16] w-full rounded-2xl border border-white/10 object-cover transition-transform duration-300 hover:scale-[1.02]"
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="left-0 border-white/20 bg-white/10 text-white hover:bg-white/20 hover:text-white" />
      <CarouselNext className="right-0 border-white/20 bg-white/10 text-white hover:bg-white/20 hover:text-white" />
    </Carousel>
  );
}
