"use client";

import { useState } from "react";
import { Check } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type Segment = "protecao" | "loja";

const segments: { id: Segment; label: string }[] = [
  { id: "protecao", label: "Proteção Veicular" },
  { id: "loja", label: "Loja de Veículos" },
];

// Links de checkout (Kiwify) por segmento
const checkout: Record<Segment, { mensal: string; anual: string }> = {
  protecao: {
    mensal: "https://pay.kiwify.com.br/HOQi1v1",
    anual: "https://pay.kiwify.com.br/e6bg96I",
  },
  loja: {
    mensal: "https://pay.kiwify.com.br/xd6Y7PO",
    anual: "https://pay.kiwify.com.br/0Tu4O1f",
  },
};

const plans = [
  {
    key: "mensal" as const,
    price: "R$ 197,00",
    period: "/mês",
    description:
      "Flexibilidade total para quem quer resultados rápidos e sem compromisso. Acesse todos os benefícios da Área de Membros por 30 dias e renove quando desejar!",
    popular: false,
  },
  {
    key: "anual" as const,
    price: "R$ 997,00",
    period: "/ano",
    description:
      "Invista no longo prazo e potencialize seus resultados com um desconto exclusivo. Acesse todos os recursos da Área de Membros durante 12 meses e acompanhe seu crescimento contínuo!",
    popular: true,
  },
];

export function PlanosArea() {
  const [segment, setSegment] = useState<Segment>("protecao");

  return (
    <div>
      {/* Seletor de segmento */}
      <div className="mx-auto mb-10 flex w-full max-w-xs rounded-full border border-white/15 bg-white/5 p-1">
        {segments.map((s) => (
          <button
            key={s.id}
            type="button"
            onClick={() => setSegment(s.id)}
            aria-pressed={segment === s.id}
            className={cn(
              "flex-1 rounded-full px-4 py-2 text-sm font-medium transition-colors",
              segment === s.id
                ? "bg-brand text-white"
                : "text-white/60 hover:text-white"
            )}
          >
            {s.label}
          </button>
        ))}
      </div>

      <div className="mx-auto grid max-w-3xl gap-6 md:grid-cols-2">
        {plans.map((plan) => (
          <div
            key={plan.key}
            className={cn(
              "relative flex flex-col rounded-3xl border p-8",
              plan.popular
                ? "border-brand/60 bg-gradient-to-b from-navy-light to-navy"
                : "border-white/10 bg-white/[0.04]"
            )}
          >
            {plan.popular ? (
              <span className="absolute -top-3 right-6 rounded-full bg-brand px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white">
                Popular
              </span>
            ) : null}

            <div className="flex items-baseline gap-1">
              <span className="text-4xl font-bold text-white">
                {plan.price}
              </span>
              <span className="text-white/60">{plan.period}</span>
            </div>

            <p className="mt-4 flex-1 text-sm text-white/60">
              {plan.description}
            </p>

            <Button asChild size="lg" className="mt-8 h-12 w-full text-base">
              <a
                href={checkout[segment][plan.key]}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Check className="size-5" />
                Adquirir
              </a>
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}
