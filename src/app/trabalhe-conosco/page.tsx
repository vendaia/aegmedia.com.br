import type { Metadata } from "next";
import {
  BarChart3,
  Clapperboard,
  Code,
  GraduationCap,
  HeartHandshake,
  Lightbulb,
  Palette,
  PenLine,
  Rocket,
  Share2,
  Sparkles,
  Target,
  Users,
} from "lucide-react";

import { Footer } from "@/components/site/footer";
import { Header } from "@/components/site/header";
import { TrabalheForm } from "@/components/site/trabalhe-form";
import { Button } from "@/components/ui/button";
import { WHATSAPP_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Trabalhe conosco | AEG Media",
  description:
    "Junte-se à jornada da AEG Media. Buscamos parceiros ousados e comprometidos para transformar ideias em realidade no marketing digital automotivo.",
};

const values = [
  {
    icon: Users,
    title: "Espírito Colaborativo",
    description:
      "Aqui, você não é apenas mais um colaborador, mas uma peça fundamental em um time que valoriza a troca de experiências e o crescimento conjunto.",
  },
  {
    icon: Lightbulb,
    title: "Inovação em Primeira Mão",
    description:
      "Contribua com suas ideias e habilidades para moldar projetos que estão na vanguarda da criatividade e da tecnologia.",
  },
  {
    icon: Rocket,
    title: "Ambiente Inspirador",
    description:
      "Nosso espaço é feito para estimular a troca de conhecimentos, a experimentação e a criação de soluções ousadas.",
  },
  {
    icon: Target,
    title: "Impacto Real",
    description:
      "Juntos, podemos transformar o mundo ao nosso redor com projetos que promovem mudança de forma palpável e significativa.",
  },
];

const roles = [
  {
    icon: HeartHandshake,
    title: "Conexão e Relacionamento",
    description:
      "Se você é apaixonado pela arte da comunicação e sabe gerenciar desafios com inteligência, temos um espaço para você. Buscamos alguém que transforme o relacionamento com clientes em parceria de verdade, onde a resolução de problemas é feita com empatia e estratégia.",
  },
  {
    icon: BarChart3,
    title: "Desempenho e Resultados",
    description:
      "Aqui, cada parceria é movida por dados e performance. Se o universo das mídias pagas – como Google Ads e Facebook Ads – te fascina e você tem experiência em potencializar resultados, venha otimizar campanhas rumo a um impacto genuíno.",
  },
  {
    icon: Code,
    title: "Inovação Técnica",
    description:
      "Se você vive desvendando problemas complexos, desde desenvolvimento web até integrações e automações, seu talento é essencial para a evolução do projeto. Queremos parceiros que dominem ferramentas como CRM, Landing Pages, APIs e Chatbots, e que estejam sempre prontos a aprender e aplicar novas soluções.",
  },
  {
    icon: Target,
    title: "Estratégia e Persuasão",
    description:
      "Se você é naturalmente persuasivo e tem experiência em vendas ou atendimento, sua capacidade de cativar e influenciar é o que nos impulsiona. Trabalhar com metas e prazos faz parte do cotidiano dos nossos parceiros que sabem converter desafios em conquistas.",
  },
  {
    icon: PenLine,
    title: "Comunicação Criativa",
    description:
      "Se a escrita é sua paixão e você domina como envolver seu público com palavras, queremos ouvir sua voz criativa. A habilidade de adaptar mensagens para diferentes contextos e públicos é o que transforma conteúdos em experiências memoráveis.",
  },
  {
    icon: Palette,
    title: "Design e Estética",
    description:
      "Para nós, cada detalhe conta. Se você tem experiência com ferramentas de design – como o Adobe Photoshop – e conhece os fundamentos do UX/UI, seu talento irá dar forma à personalidade visual do projeto. A entrega de conceitos inovadores, mesmo sob prazos apertados, é o que faz a diferença.",
  },
  {
    icon: Clapperboard,
    title: "Produção Audiovisual",
    description:
      "Se expressar por meio da edição de vídeos e utilizar ferramentas como o CapCut para criar narrativas visuais de alto impacto é o seu forte, seu talento será a cara do nosso conteúdo. Capture a essência de cada história com técnicas de captação, iluminação e criatividade.",
  },
  {
    icon: Share2,
    title: "Engajamento Digital",
    description:
      "Se você vive e respira o universo das redes sociais, tem visão para planejar e criar conteúdos que dialoguem com diferentes públicos, queremos que você deixe sua marca aqui. Saber combinar estratégias de copywriting, design e gestão de calendários de postagens fará de você um protagonista na construção de relacionamentos genuínos.",
  },
];

export default function TrabalheConoscoPage() {
  return (
    <>
      <Header />

      <main className="flex-1">
        {/* Intro */}
        <section className="relative overflow-hidden bg-navy">
          <div
            aria-hidden
            className="pointer-events-none absolute -top-40 right-0 size-[600px] rounded-full bg-brand/20 blur-[160px]"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-40 -left-40 size-[500px] rounded-full bg-brand/10 blur-[140px]"
          />

          <div className="relative mx-auto w-full max-w-4xl px-4 pb-16 pt-36 text-center sm:px-6 lg:pb-20 lg:pt-44">
            <p className="flex items-center justify-center gap-2 text-sm font-bold uppercase tracking-widest text-brand-light">
              <span aria-hidden className="size-1.5 rounded-full bg-brand-light" />
              Trabalhe conosco
            </p>
            <h1 className="mt-5 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl">
              Junte-se à{" "}
              <span className="bg-gradient-to-r from-brand-light to-sky-400 bg-clip-text text-transparent">
                nossa jornada!
              </span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-white/70">
              Somos muito mais do que uma organização – somos um coletivo
              vibrante de inovadores, criativos e apaixonados que acreditam no
              poder da união para transformar ideias em realidade. Se você sonha
              em contribuir para projetos que fazem a diferença, está no lugar
              certo.
            </p>
          </div>
        </section>

        {/* Valores */}
        <section className="bg-black">
          <div className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6 lg:py-28">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {values.map((value) => (
                <article
                  key={value.title}
                  className="flex flex-col rounded-2xl border border-white/10 bg-white/[0.04] p-7 transition-colors hover:border-brand/50 hover:bg-white/[0.07]"
                >
                  <div className="mb-5 flex size-12 items-center justify-center rounded-xl bg-brand">
                    <value.icon className="size-6 text-white" />
                  </div>
                  <h2 className="text-lg font-bold text-white">
                    {value.title}
                  </h2>
                  <p className="mt-3 text-sm text-white/60">
                    {value.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Quem procuramos + Como contribuir + Formulário */}
        <section className="relative overflow-hidden bg-navy">
          <div
            aria-hidden
            className="pointer-events-none absolute -left-40 top-1/3 size-[500px] rounded-full bg-brand/10 blur-[150px]"
          />

          <div className="relative mx-auto grid w-full max-w-6xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:py-28">
            <div className="text-center lg:sticky lg:top-28 lg:self-start lg:text-left">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Quem procuramos?
              </h2>
              <p className="mt-5 text-white/70">
                Estamos em busca de pessoas ousadas e comprometidas – não apenas
                profissionais em busca de um emprego, mas parceiros de jornada
                que desejam fazer parte de algo maior. Se você tem paixão pelo
                que faz, capacidade de colaborar e vontade de empreender novos
                desafios, queremos conhecer você!
              </p>

              <h3 className="mt-10 text-2xl font-bold tracking-tight text-white">
                Como contribuir?
              </h3>
              <p className="mt-4 text-white/70">
                Preencha o formulário ou entre em contato diretamente conosco
                para compartilhar um pouco sobre sua trajetória, ideias e como
                você imagina colaborar para criar um projeto transformador.
              </p>
              <p className="mt-4 text-white/70">
                Cada história e cada talento se encaixam em nossa visão de
                construir um futuro feito de muita criatividade e colaboração.
              </p>
            </div>

            <TrabalheForm />
          </div>
        </section>

        {/* Programa de Treinamento */}
        <section className="bg-black">
          <div className="mx-auto w-full max-w-4xl px-4 py-20 sm:px-6 lg:py-24">
            <div className="relative overflow-hidden rounded-3xl border border-brand/30 bg-gradient-to-br from-navy-light to-navy p-8 text-center sm:p-12">
              <div
                aria-hidden
                className="pointer-events-none absolute -right-20 -top-20 size-[300px] rounded-full bg-brand/25 blur-[120px]"
              />

              <div className="relative">
                <div className="mx-auto mb-6 flex size-14 items-center justify-center rounded-2xl bg-brand">
                  <GraduationCap className="size-7 text-white" />
                </div>
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  Programa de Treinamento
                </h2>
                <p className="mx-auto mt-5 max-w-2xl text-white/70">
                  Na AEG Media, acreditamos que talento se desenvolve com
                  aprendizado contínuo e prática real. Nosso programa de
                  treinamento é a oportunidade perfeita para você aprimorar suas
                  habilidades em marketing digital e vendas, adquirindo
                  experiência prática em um ambiente dinâmico e desafiador.
                </p>
                <p className="mx-auto mt-4 max-w-2xl text-white/70">
                  Se você quer crescer profissionalmente e fazer parte de um
                  time que transforma negócios todos os dias, inscreva-se agora!
                </p>

                <Button
                  asChild
                  size="lg"
                  className="mt-8 h-12 px-6 text-base"
                >
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Sparkles className="size-5" />
                    Quero participar do programa de treinamento
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Uma chance de transformar sua trajetória + áreas */}
        <section className="relative overflow-hidden bg-navy">
          <div
            aria-hidden
            className="pointer-events-none absolute right-0 top-0 size-[500px] rounded-full bg-brand/10 blur-[150px]"
          />

          <div className="relative mx-auto w-full max-w-6xl px-4 py-20 sm:px-6 lg:py-28">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Uma chance de transformar sua trajetória
              </h2>
              <p className="mt-5 text-lg text-white/70">
                Aqui, não falamos em simples posições ou funções. Estamos
                convidando você para ser parte de um movimento que tem como
                missão transformar vidas e construir um projeto revolucionário.
                Se você deseja contribuir, se reinventar e alavancar sua
                carreira trabalhando em um ambiente de criatividade e
                colaboração, sua chance chegou!
              </p>
            </div>

            <div className="mt-14 grid gap-6 md:grid-cols-2">
              {roles.map((role) => (
                <article
                  key={role.title}
                  className="flex gap-5 rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition-colors hover:border-brand/50 hover:bg-white/[0.07] sm:p-7"
                >
                  <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-brand">
                    <role.icon className="size-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">
                      {role.title}
                    </h3>
                    <p className="mt-2 text-sm text-white/60">
                      {role.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
