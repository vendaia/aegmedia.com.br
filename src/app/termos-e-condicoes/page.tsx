import type { Metadata } from "next";

import { Footer } from "@/components/site/footer";
import { Header } from "@/components/site/header";

export const metadata: Metadata = {
  title: "Termos e Condições | AEG Media",
  description:
    "Termos de serviço do site da AEG Media: condições de uso, licença, isenção de responsabilidade e limitações.",
};

const sections = [
  {
    title: "1. Termos",
    body: [
      "Ao acessar ao site AEG Media, concorda em cumprir estes termos de serviço, todas as leis e regulamentos aplicáveis e concorda que é responsável pelo cumprimento de todas as leis locais aplicáveis. Se você não concordar com algum desses termos, está proibido de usar ou acessar este site. Os materiais contidos neste site são protegidos pelas leis de direitos autorais e marcas comerciais aplicáveis.",
    ],
  },
  {
    title: "2. Uso de Licença",
    body: [
      "É concedida permissão para baixar temporariamente uma cópia dos materiais (informações ou software) no site AEG Media, apenas para visualização transitória pessoal e não comercial. Esta é a concessão de uma licença, não uma transferência de título e, sob esta licença, você não pode: modificar ou copiar os materiais; usar os materiais para qualquer finalidade comercial ou para exibição pública (comercial ou não comercial); tentar descompilar ou fazer engenharia reversa de qualquer software contido no site AEG Media; remover quaisquer direitos autorais ou outras notações de propriedade dos materiais; ou transferir os materiais para outra pessoa ou 'espelhe' os materiais em qualquer outro servidor.",
      "Esta licença será automaticamente rescindida se você violar alguma dessas restrições e poderá ser rescindida por AEG Media a qualquer momento. Ao encerrar a visualização desses materiais ou após o término desta licença, você deve apagar todos os materiais baixados em sua posse, seja em formato eletrónico ou impresso.",
    ],
  },
  {
    title: "3. Isenção de responsabilidade",
    body: [
      "Os materiais no site da AEG Media são fornecidos 'como estão'. AEG Media não oferece garantias, expressas ou implícitas, e, por este meio, isenta e nega todas as outras garantias, incluindo, sem limitação, garantias implícitas ou condições de comercialização, adequação a um fim específico ou não violação de propriedade intelectual ou outra violação de direitos.",
      "Além disso, o AEG Media não garante ou faz qualquer representação relativa à precisão, aos resultados prováveis ou à confiabilidade do uso dos materiais em seu site ou de outra forma relacionado a esses materiais ou em sites vinculados a este site.",
    ],
  },
  {
    title: "4. Limitações",
    body: [
      "Em nenhum caso o AEG Media ou seus fornecedores serão responsáveis por quaisquer danos (incluindo, sem limitação, danos por perda de dados ou lucro ou devido a interrupção dos negócios) decorrentes do uso ou da incapacidade de usar os materiais em AEG Media, mesmo que AEG Media ou um representante autorizado da AEG Media tenha sido notificado oralmente ou por escrito da possibilidade de tais danos. Como algumas jurisdições não permitem limitações em garantias implícitas, ou limitações de responsabilidade por danos conseqüentes ou incidentais, essas limitações podem não se aplicar a você.",
    ],
  },
  {
    title: "5. Precisão dos materiais",
    body: [
      "Os materiais exibidos no site da AEG Media podem incluir erros técnicos, tipográficos ou fotográficos. AEG Media não garante que qualquer material em seu site seja preciso, completo ou atual. AEG Media pode fazer alterações nos materiais contidos em seu site a qualquer momento, sem aviso prévio. No entanto, AEG Media não se compromete a atualizar os materiais.",
    ],
  },
  {
    title: "6. Links",
    body: [
      "O AEG Media não analisou todos os sites vinculados ao seu site e não é responsável pelo conteúdo de nenhum site vinculado. A inclusão de qualquer link não implica endosso por AEG Media do site. O uso de qualquer site vinculado é por conta e risco do usuário.",
    ],
  },
  {
    title: "Modificações",
    body: [
      "O AEG Media pode revisar estes termos de serviço do site a qualquer momento, sem aviso prévio. Ao usar este site, você concorda em ficar vinculado à versão atual desses termos de serviço.",
    ],
  },
  {
    title: "Lei aplicável",
    body: [
      "Estes termos e condições são regidos e interpretados de acordo com as leis do AEG Media e você se submete irrevogavelmente à jurisdição exclusiva dos tribunais naquele estado ou localidade.",
    ],
  },
];

export default function TermosECondicoesPage() {
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
              Termos e Condições
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-white/60">
              Ao usar o site da AEG Media, você concorda com os termos descritos
              abaixo.
            </p>
          </div>
        </section>

        {/* Conteúdo */}
        <section className="bg-black">
          <div className="mx-auto w-full max-w-3xl px-4 py-16 sm:px-6 lg:py-24">
            <div className="space-y-10">
              {sections.map((section) => (
                <article key={section.title}>
                  <h2 className="mb-4 text-2xl font-bold text-white">
                    {section.title}
                  </h2>
                  <div className="space-y-4 text-white/70">
                    {section.body.map((paragraph, i) => (
                      <p key={i}>{paragraph}</p>
                    ))}
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
