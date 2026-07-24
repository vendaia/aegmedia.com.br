import { Plus } from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { WHATSAPP_URL } from "@/lib/site";
import { WhatsAppIcon } from "./whatsapp-icon";

// NOTA: apenas a resposta da primeira pergunta estava visível na referência.
// As demais foram redigidas com base no conteúdo do site — revise antes de publicar.
const faqs = [
  {
    question: "O que é a AEG Media?",
    answer: (
      <>
        <p>A AEG Media é o maior ecossistema automotivo do Brasil.</p>
        <p>
          Não somos agência de marketing. Não entregamos lead frio. Somos
          especialistas em gerar <strong>visitas diárias na sua loja</strong>{" "}
          utilizando marketing, tecnologia e comercial — tudo integrado sob uma
          única inteligência.
        </p>
        <p>São +700 empresas em 26 estados operando na Nova Era.</p>
      </>
    ),
  },
  {
    question: "O que é a Nova Era?",
    answer: (
      <p>
        A Nova Era é o método da AEG Media para o mercado automotivo: a união
        de marketing, tecnologia e comercial trabalhando de forma integrada
        para gerar visitas diárias na sua loja e transformar essas visitas em
        vendas reais.
      </p>
    ),
  },
  {
    question: "Quais serviços a AEG Media oferece?",
    answer: (
      <p>
        Oferecemos Tráfego Pago (Google e Meta), Venda.IA (agente de
        atendimento 24h/7d no WhatsApp), Venda.IA CRM (CRM automatizado com
        IA), Treinamento comercial (de pré-vendas à gestão) e Criativa.IA
        (fotografias profissionais de veículos com IA).
      </p>
    ),
  },
  {
    question: "O que é o principal produto da AEG Media?",
    answer: (
      <p>
        Nosso principal produto é a assessoria completa da Nova Era: marketing,
        tecnologia e comercial integrados sob uma única inteligência para gerar
        visitas diárias e vendas na sua loja.
      </p>
    ),
  },
  {
    question: "O que diferencia a AEG Media de outras empresas?",
    answer: (
      <p>
        Não somos uma agência de marketing e não entregamos lead frio. Nosso
        foco é resultado REAL: visitas diárias na sua loja, com mais de 9 anos
        de mercado e especialistas que vivem a prática do mercado automotivo.
      </p>
    ),
  },
  {
    question: "Como a AEG Media pode ajudar minha associação?",
    answer: (
      <p>
        Somos parceiros de diversas associações e sindicatos do setor
        automotivo em todo o Brasil. Entre em contato para entender como
        podemos levar a Nova Era para os associados da sua região.
      </p>
    ),
  },
  {
    question: "O que é a Formação Nova Era?",
    answer: (
      <p>
        É um espaço exclusivo com formações que vão transformar seu negócio:
        Formação em Pré-Vendas, Formação Vendedor, Formação Gestor e o Papo de
        Dono, com técnicas avançadas de vendas e marketing.
      </p>
    ),
  },
  {
    question: "Como funciona a consultoria gratuita?",
    answer: (
      <p>
        Basta clicar em um dos botões do site e falar conosco pelo WhatsApp.
        Um dos nossos especialistas vai entender o momento da sua loja e
        mostrar como a Nova Era pode acelerar os seus resultados.
      </p>
    ),
  },
];

export function Faq() {
  return (
    <section className="bg-black">
      <div className="mx-auto grid w-full max-w-6xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[1fr_1.6fr] lg:gap-16 lg:py-28">
        {/* Título à esquerda */}
        <div>
          <p className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-brand-light">
            <span aria-hidden className="size-1.5 rounded-full bg-brand-light" />
            Perguntas frequentes
          </p>
          <h2 className="mt-5 text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl">
            Antes de falar
            <br />
            com a gente
          </h2>
        </div>

        {/* Accordion à direita */}
        <div>
          <Accordion
            type="single"
            collapsible
            defaultValue="item-0"
            className="gap-4"
          >
            {faqs.map((faq, i) => (
              <AccordionItem
                key={faq.question}
                value={`item-${i}`}
                className="rounded-2xl border border-white/10 bg-white/[0.04] px-6 transition-colors not-last:border-b data-open:border-brand-light/60"
              >
                <AccordionTrigger className="items-center py-5 text-base font-semibold text-white hover:no-underline [&>[data-slot=accordion-trigger-icon]]:hidden">
                  {faq.question}
                  <span className="ml-auto shrink-0 pl-4">
                    <Plus className="size-5 text-brand-light transition-transform duration-200 group-aria-expanded/accordion-trigger:rotate-45" />
                  </span>
                </AccordionTrigger>
                <AccordionContent className="pb-6 text-base text-white/70">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-10">
            <Button asChild size="lg" className="h-11 px-6">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                <WhatsAppIcon />
                Quero saber mais!
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
