import type { Metadata } from "next";

import { Footer } from "@/components/site/footer";
import { Header } from "@/components/site/header";

export const metadata: Metadata = {
  title: "Política de Privacidade | AEG Media",
  description:
    "Saiba como a AEG Media coleta, usa e protege suas informações pessoais.",
};

export default function PoliticaDePrivacidadePage() {
  return (
    <>
      <Header />

      <main className="flex-1">
        {/* Cabeçalho */}
        <section className="relative overflow-hidden bg-navy">
          <div
            aria-hidden
            className="pointer-events-none absolute -top-40 right-0 size-[600px] rounded-full bg-brand/20 blur-[160px]"
          />
          <div className="relative mx-auto w-full max-w-4xl px-4 pb-12 pt-36 text-center sm:px-6 lg:pb-16 lg:pt-44">
            <p className="flex items-center justify-center gap-2 text-sm font-bold uppercase tracking-widest text-brand-light">
              <span aria-hidden className="size-1.5 rounded-full bg-brand-light" />
              Legal
            </p>
            <h1 className="mt-5 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl">
              Política de Privacidade
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-white/60">
              Esta política é efetiva a partir de 28 de julho de 2026.
            </p>
          </div>
        </section>

        {/* Conteúdo */}
        <section className="bg-black">
          <div className="mx-auto w-full max-w-3xl px-4 py-16 sm:px-6 lg:py-24">
            <div className="space-y-5 text-white/70 [&_h2]:mb-4 [&_h2]:mt-12 [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-white [&_h2:first-of-type]:mt-0 [&_strong]:text-white">
              <p>
                A sua privacidade é importante para nós. É política do AEG Media
                respeitar a sua privacidade em relação a qualquer informação sua
                que possamos coletar no site AEG Media, e outros sites que
                possuímos e operamos.
              </p>
              <p>
                Solicitamos informações pessoais apenas quando realmente
                precisamos delas para lhe fornecer um serviço. Fazemo-lo por
                meios justos e legais, com o seu conhecimento e consentimento.
                Também informamos por que estamos coletando e como será usado.
              </p>
              <p>
                Apenas retemos as informações coletadas pelo tempo necessário
                para fornecer o serviço solicitado. Quando armazenamos dados,
                protegemos dentro de meios comercialmente aceitáveis para evitar
                perdas e roubos, bem como acesso, divulgação, cópia, uso ou
                modificação não autorizados.
              </p>
              <p>
                Não compartilhamos informações de identificação pessoal
                publicamente ou com terceiros, exceto quando exigido por lei.
              </p>
              <p>
                O nosso site pode ter links para sites externos que não são
                operados por nós. Esteja ciente de que não temos controle sobre
                o conteúdo e práticas desses sites e não podemos aceitar
                responsabilidade por suas respectivas políticas de privacidade.
              </p>
              <p>
                Você é livre para recusar a nossa solicitação de informações
                pessoais, entendendo que talvez não possamos fornecer alguns dos
                serviços desejados.
              </p>
              <p>
                O uso continuado de nosso site será considerado como aceitação
                de nossas práticas em torno de privacidade e informações
                pessoais. Se você tiver alguma dúvida sobre como lidamos com
                dados do usuário e informações pessoais, entre em contato
                conosco.
              </p>

              <h2>Compromisso do Usuário</h2>
              <p>
                O usuário se compromete a fazer uso adequado dos conteúdos e da
                informação que o AEG Media oferece no site e com caráter
                enunciativo, mas não limitativo:
              </p>
              <ul className="space-y-3 pl-1">
                <li className="flex gap-3">
                  <span className="font-semibold text-brand-light">A)</span>
                  <span>
                    Não se envolver em atividades que sejam ilegais ou
                    contrárias à boa fé e à ordem pública;
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="font-semibold text-brand-light">B)</span>
                  <span>
                    Não difundir propaganda ou conteúdo de natureza racista,
                    xenofóbica, jogos de sorte ou azar, qualquer tipo de
                    pornografia ilegal, de apologia ao terrorismo ou contra os
                    direitos humanos;
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="font-semibold text-brand-light">C)</span>
                  <span>
                    Não causar danos aos sistemas físicos (hardwares) e lógicos
                    (softwares) do AEG Media, de seus fornecedores ou terceiros,
                    para introduzir ou disseminar vírus informáticos ou
                    quaisquer outros sistemas de hardware ou software que sejam
                    capazes de causar os danos anteriormente mencionados.
                  </span>
                </li>
              </ul>

              <h2>Mais informações</h2>
              <p>
                Esperamos que esteja esclarecido e, como mencionado
                anteriormente, se houver algo que você não tem certeza se
                precisa ou não, geralmente é mais seguro deixar os cookies
                ativados, caso interaja com um dos recursos que você usa em
                nosso site.
              </p>

              <p className="border-t border-white/10 pt-6 text-sm text-white/40">
                Esta política é efetiva a partir de 28 de julho de 2026, 13:18.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
