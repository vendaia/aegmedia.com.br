import type { Metadata } from "next";
import {
  ArrowUpRight,
  Bot,
  Cpu,
  Globe,
  GraduationCap,
  Handshake,
  Megaphone,
  Share2,
} from "lucide-react";

import { Footer } from "@/components/site/footer";
import { Header } from "@/components/site/header";
import { Button } from "@/components/ui/button";
import { WhatsAppIcon } from "@/components/site/whatsapp-icon";
import { WHATSAPP_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Produtos | AEG Media",
  description:
    "Soluções desenvolvidas para impulsionar seus resultados: Venda.IA, Área de Membros, Assessoria Comercial, Gestão de Tráfego Pago, PDAC, Site Institucional e Assessoria de Tecnologia.",
};

const featured = {
  icon: Bot,
  title: "Venda.IA",
  href: "https://vendaia.app.br",
  description:
    "Imagine nunca mais perder um lead porque sua equipe estava ocupada ou fora do horário comercial. O Venda.IA é seu agente de vendas com inteligência artificial que trabalha 24/7 para qualificar, atender e vender. Integrado ao seu CRM, ele responde dúvidas, realiza cotações em tempo real e, para lojas de veículos, consulta seu estoque instantaneamente para informar sobre a disponibilidade de modelos. Transforme seu atendimento, automatize a qualificação de clientes e venda até mesmo enquanto você dorme.",
};

const products = [
  {
    icon: GraduationCap,
    title: "Área de Membros",
    description:
      "Tenha acesso a um centro de conhecimento exclusivo para donos e gestores de negócios automotivos. Nossa Área de Membros é o seu atalho para o sucesso, reunindo treinamentos completos, workshops com especialistas, estratégias de vendas validadas e uma comunidade de empresários para networking. Aprenda com quem entende do mercado, acelere seus resultados e mantenha sua equipe sempre à frente da concorrência com conteúdo prático e direto ao ponto.",
  },
  {
    icon: Handshake,
    title: "Assessoria Comercial",
    description:
      'Sua equipe de vendas tem potencial para vender muito mais. Nossa Assessoria Comercial implementa o método "Comercial Interno" para transformar seu time em uma máquina de resultados. Estruturamos processos, criamos roteiros de abordagem, definimos metas e treinamos sua equipe para ter alta performance. O resultado é um funil de vendas previsível, aumento nas taxas de conversão e um crescimento sustentável para o seu negócio.',
  },
  {
    icon: Megaphone,
    title: "Gestão de Tráfego Pago",
    description:
      "Deixe de gastar dinheiro com anúncios que não trazem resultado. Nossa Gestão de Tráfego Pago coloca sua empresa na frente de clientes que estão ativamente procurando por seus veículos ou serviços. Criamos e otimizamos campanhas no Google e nas redes sociais (Meta Ads) com um único foco: gerar o máximo de leads qualificados pelo menor custo possível. Atraia mais clientes, aumente suas vendas e obtenha um retorno real sobre seu investimento em marketing.",
  },
  {
    icon: Share2,
    title: "PDAC",
    subtitle: "Plano de Dominação em Audiência e Conteúdo",
    description:
      "Uma presença forte nas redes sociais não é sobre postar por postar, é sobre construir autoridade e confiança. O PDAC é nossa metodologia de social media que transforma seu perfil em um ativo de vendas. Produzimos conteúdo estratégico que engaja sua audiência, fortalece sua marca, apresenta seu estoque de forma atrativa e cria um relacionamento duradouro com seus seguidores, convertendo-os em clientes fiéis.",
  },
  {
    icon: Globe,
    title: "Site Institucional",
    description:
      "Seu site é a sua principal vitrine digital e, muitas vezes, o primeiro contato do cliente com a sua marca. Desenvolvemos sites institucionais modernos, rápidos e otimizados para converter visitantes em leads. Com um design profissional e focado na experiência do usuário, seu novo site irá transmitir a credibilidade que seu negócio merece, além de ser uma poderosa ferramenta de captura de clientes 24 horas por dia.",
  },
  {
    icon: Cpu,
    title: "Assessoria de Tecnologia",
    description:
      "A tecnologia certa pode revolucionar sua operação, enquanto a errada gera apenas dor de cabeça. Nossa Assessoria de Tecnologia garante que você tenha as melhores e mais eficientes ferramentas trabalhando a seu favor. Ajudamos a escolher e implementar o CRM ideal, a integrar sistemas, automatizar processos e garantir que toda a sua estrutura tecnológica funcione de forma harmoniosa, liberando tempo para você focar no que realmente importa: crescer o seu negócio.",
  },
];

export default function ProdutosPage() {
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
              Produtos
            </p>
            <h1 className="mt-5 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl">
              Soluções feitas para{" "}
              <span className="bg-gradient-to-r from-brand-light to-sky-400 bg-clip-text text-transparent">
                transformar seu negócio
              </span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-white/70">
              Aqui você vai encontrar soluções desenvolvidas para atender às
              suas necessidades de forma eficaz e inovadora. Cada um de nossos
              produtos é cuidadosamente elaborado para oferecer o máximo de
              qualidade e performance, garantindo que sua experiência seja
              única. Explore nossas opções e descubra como nossas soluções podem
              impulsionar seus resultados e transformar seu negócio.
            </p>
          </div>
        </section>

        {/* Produtos */}
        <section className="bg-black">
          <div className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6 lg:py-28">
            {/* Destaque: Venda.IA */}
            <article className="relative overflow-hidden rounded-3xl border border-brand/30 bg-gradient-to-br from-navy-light to-navy p-8 sm:p-10">
              <div
                aria-hidden
                className="pointer-events-none absolute -right-16 -top-16 size-[300px] rounded-full bg-brand/25 blur-[120px]"
              />
              <div className="relative flex flex-col items-center gap-6 text-center lg:flex-row lg:items-center lg:gap-10 lg:text-left">
                <div className="flex size-16 shrink-0 items-center justify-center rounded-2xl bg-brand">
                  <featured.icon className="size-8 text-white" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-white sm:text-3xl">
                    {featured.title}
                  </h2>
                  <p className="mt-3 max-w-3xl text-white/70">
                    {featured.description}
                  </p>
                </div>
                <Button
                  asChild
                  size="lg"
                  className="h-12 shrink-0 px-6 text-base"
                >
                  <a
                    href={featured.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Acessar Venda.IA
                    <ArrowUpRight className="size-4" />
                  </a>
                </Button>
              </div>
            </article>

            {/* Demais produtos */}
            <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {products.map((product) => (
                <article
                  key={product.title}
                  className="flex flex-col rounded-2xl border border-white/10 bg-white/[0.04] p-7 transition-colors hover:border-brand/50 hover:bg-white/[0.07]"
                >
                  <div className="mb-5 flex size-12 items-center justify-center rounded-xl bg-brand">
                    <product.icon className="size-6 text-white" />
                  </div>
                  <h2 className="text-xl font-bold text-white">
                    {product.title}
                  </h2>
                  {product.subtitle ? (
                    <p className="mt-1 text-sm font-medium text-brand-light">
                      {product.subtitle}
                    </p>
                  ) : null}
                  <p className="mt-3 text-sm text-white/60">
                    {product.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Formulário de interesse */}
        <section className="relative overflow-hidden bg-navy">
          <div
            aria-hidden
            className="pointer-events-none absolute -left-40 top-1/2 size-[500px] -translate-y-1/2 rounded-full bg-brand/10 blur-[150px]"
          />

          <div className="relative mx-auto w-full max-w-3xl px-4 py-20 text-center sm:px-6 lg:py-28">
            <p className="flex items-center justify-center gap-2 text-sm font-bold uppercase tracking-widest text-brand-light">
              <span aria-hidden className="size-1.5 rounded-full bg-brand-light" />
              Interessado?
            </p>
            <h2 className="mt-5 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Fale com um de nossos vendedores
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg text-white/70">
              Chame a gente no WhatsApp e saiba mais detalhes sobre nossos
              produtos e como eles podem impulsionar o seu negócio.
            </p>

            <Button asChild size="lg" className="mt-8 h-12 px-6 text-base">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                <WhatsAppIcon className="size-5" />
                Falar no WhatsApp
              </a>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
