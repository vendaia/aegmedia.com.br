"use client";

import { useState } from "react";
import { CheckCircle2, Send, Upload } from "lucide-react";

import { Button } from "@/components/ui/button";
import { TRABALHE_WEBHOOK_URL, WHATSAPP_URL } from "@/lib/site";
import { WhatsAppIcon } from "./whatsapp-icon";

const areas = [
  "Gerente de Contas",
  "Gestor de Tráfego",
  "Comercial",
  "TECH",
  "Designer",
  "Social Media",
  "Copywriter",
  "Videomaker",
  "Banco de Talentos",
];

const inputClass =
  "w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 outline-none transition-colors focus:border-brand-light focus:ring-2 focus:ring-brand/30";

export function TrabalheForm() {
  const [fileName, setFileName] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [isPending, setIsPending] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);
    setIsPending(true);

    const formData = new FormData(event.currentTarget);

    try {
      const response = await fetch(TRABALHE_WEBHOOK_URL, {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        setSuccess(true);
      } else {
        setError("Não foi possível enviar agora. Tente novamente.");
      }
    } catch {
      setError("Não foi possível enviar agora. Tente novamente.");
    } finally {
      setIsPending(false);
    }
  }

  if (success) {
    return (
      <div className="flex flex-col items-center gap-4 rounded-2xl border border-brand/40 bg-white/[0.04] p-8 text-center sm:p-10">
        <CheckCircle2 className="size-14 text-brand-light" />
        <h3 className="text-xl font-bold text-white">Candidatura enviada!</h3>
        <p className="text-white/70">
          Recebemos seus dados e nossa equipe entrará em contato em breve.
          Obrigado pelo interesse em fazer parte da AEG Media!
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-5 rounded-2xl border border-white/10 bg-white/[0.04] p-6 sm:p-8"
    >
      <div className="flex flex-col gap-2">
        <label htmlFor="nome" className="text-sm font-medium text-white/80">
          Nome
        </label>
        <input
          id="nome"
          name="nome"
          type="text"
          required
          placeholder="Seu nome completo"
          className={inputClass}
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label
            htmlFor="telefone"
            className="text-sm font-medium text-white/80"
          >
            DDD + Telefone
          </label>
          <input
            id="telefone"
            name="telefone"
            type="tel"
            required
            placeholder="(00) 00000-0000"
            className={inputClass}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-sm font-medium text-white/80">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="voce@email.com"
            className={inputClass}
          />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="servico" className="text-sm font-medium text-white/80">
          Serviço
        </label>
        <select
          id="servico"
          name="servico"
          required
          defaultValue=""
          className={`${inputClass} appearance-none`}
        >
          <option value="" disabled>
            Selecione uma área de interesse
          </option>
          {areas.map((area) => (
            <option key={area} value={area} className="bg-navy">
              {area}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-sm font-medium text-white/80">
          Anexe seu currículo
        </label>
        <label
          htmlFor="curriculo"
          className="flex cursor-pointer items-center gap-3 rounded-xl border border-dashed border-white/20 bg-white/5 px-4 py-3 text-sm text-white/60 transition-colors hover:border-brand-light hover:text-white"
        >
          <Upload className="size-5 shrink-0 text-brand-light" />
          {fileName ?? "Selecionar arquivo (PDF, DOC — máx. 5 MB)"}
        </label>
        <input
          id="curriculo"
          name="curriculo"
          type="file"
          accept=".pdf,.doc,.docx"
          className="hidden"
          onChange={(e) => setFileName(e.target.files?.[0]?.name ?? null)}
        />
      </div>

      {error ? (
        <div className="rounded-xl border border-red-500/40 bg-red-500/10 px-4 py-3 text-sm text-red-200">
          {error}{" "}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold underline underline-offset-2"
          >
            Falar no WhatsApp
          </a>
        </div>
      ) : null}

      <Button
        type="submit"
        size="lg"
        disabled={isPending}
        className="mt-2 h-12 px-6 text-base"
      >
        {isPending ? (
          "Enviando..."
        ) : (
          <>
            <Send className="size-5" />
            Enviar candidatura
          </>
        )}
      </Button>

      <p className="text-center text-xs text-white/40">
        Prefere falar direto?{" "}
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 font-medium text-white/60 underline underline-offset-2 hover:text-white"
        >
          <WhatsAppIcon className="size-3.5" />
          Chame no WhatsApp
        </a>
      </p>
    </form>
  );
}
