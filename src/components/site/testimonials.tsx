import Image from "next/image";
import { Play } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { WHATSAPP_URL } from "@/lib/site";
import { WhatsAppIcon } from "./whatsapp-icon";

const videoIds = [
  "lUsK_cffv6U",
  "TslO3cpNCBA",
  "REvW0EqUvFc",
  "4s_WYBvWg2U",
  "ARtsVDC-NNw",
  "n3rvn7wdLp4",
  "lbGbUtQl3lk",
  "qTokuf9A6Sw",
];

const testimonials = videoIds.map((id) => ({
  id,
  embedUrl: `https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`,
  // oardefault = thumbnail vertical (9:16) dos Shorts
  thumbnail: `https://i.ytimg.com/vi/${id}/oardefault.jpg`,
}));

export function Testimonials() {
  return (
    <section className="bg-navy">
      <div className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6 lg:py-28">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Alguns depoimentos
          </h2>
          <p className="mt-3 text-white/60">
            Pessoas que tiveram suas vidas transformadas pelo{" "}
            <strong className="text-white">Método Comercial Interno</strong>
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
          {testimonials.map((testimonial) => (
            <Dialog key={testimonial.id}>
              <DialogTrigger className="group relative flex aspect-[9/16] cursor-pointer items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-navy-light transition-colors hover:border-brand/60">
                <Image
                  src={testimonial.thumbnail}
                  alt="Depoimento de cliente da AEG Media"
                  fill
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/30" />

                {/* Selo AEG */}
                <span className="absolute left-3 top-3 rounded-full bg-black/50 px-3 py-1 text-xs font-medium text-white/90">
                  AEG Media
                </span>

                <span className="relative flex size-16 items-center justify-center rounded-full bg-brand shadow-lg shadow-black/40 transition-transform group-hover:scale-110">
                  <Play className="ml-1 size-7 fill-white text-white" />
                </span>
              </DialogTrigger>

              <DialogContent
                showCloseButton
                className="aspect-[9/16] h-[85dvh] w-auto max-w-[calc(100%-2rem)] overflow-hidden border-none bg-black p-0 ring-white/15 **:data-[slot=dialog-close]:text-white **:data-[slot=dialog-close]:hover:bg-white/15 **:data-[slot=dialog-close]:hover:text-white"
              >
                <DialogTitle className="sr-only">
                  Vídeo de depoimento — AEG Media
                </DialogTitle>
                {/* O iframe só é montado quando o modal abre */}
                <iframe
                  src={testimonial.embedUrl}
                  title="Depoimento de cliente da AEG Media"
                  className="size-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </DialogContent>
            </Dialog>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button asChild size="lg" className="h-11 px-6">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              <WhatsAppIcon />
              Solicite uma consultoria gratuita
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
