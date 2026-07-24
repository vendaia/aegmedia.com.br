import Image from "next/image";

import brazilMap from "@/assets/images/brazil-map.png";

const stats = [
  { value: "+700", label: "Clientes" },
  { value: "+50", label: "Especialistas" },
  { value: "+9M", label: "Investidos" },
  { value: "+26", label: "Estados" },
];

export function Stats() {
  return (
    <section className="relative overflow-hidden bg-navy">
      <div
        aria-hidden
        className="pointer-events-none absolute right-0 top-0 size-[500px] rounded-full bg-brand/15 blur-[150px]"
      />

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:py-28">
        <div className="text-center lg:text-left">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            A maior e melhor
            <br />
            assessoria do Brasil
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-white/70 lg:mx-0">
            Já são mais de <strong className="text-white">9 anos</strong>{" "}
            levando empresas e liderando a NOVA ERA em{" "}
            <strong className="text-white">todo o Brasil</strong>. Nosso foco
            está em transbordar resultado REAL para os nossos clientes.
          </p>

          <dl className="mx-auto mt-10 grid max-w-md grid-cols-2 gap-x-8 gap-y-8 text-left lg:mx-0">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="border-l-2 border-brand-light pl-4"
              >
                <dd className="text-4xl font-bold text-white sm:text-5xl">
                  {stat.value}
                </dd>
                <dt className="mt-1 text-sm text-white/60">{stat.label}</dt>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative mx-auto w-full max-w-lg">
          <div
            aria-hidden
            className="absolute inset-8 rounded-full bg-brand/20 blur-3xl"
          />
          <Image
            src={brazilMap}
            alt="Mapa do Brasil com os estados atendidos pela AEG Media"
            className="relative w-full"
          />
        </div>
      </div>
    </section>
  );
}
