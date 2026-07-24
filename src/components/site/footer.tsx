import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

import logoAeg from "@/assets/images/logo-aeg-branca.png";
import {
  INSTAGRAM_URL,
  LINKEDIN_URL,
  NAV_LINKS,
  WHATSAPP_URL,
} from "@/lib/site";
import { InstagramIcon, LinkedInIcon } from "./social-icons";
import { WhatsAppIcon } from "./whatsapp-icon";

const socials = [
  { name: "Instagram", href: INSTAGRAM_URL, icon: InstagramIcon },
  { name: "LinkedIn", href: LINKEDIN_URL, icon: LinkedInIcon },
  { name: "WhatsApp", href: WHATSAPP_URL, icon: WhatsAppIcon },
];

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black">
      <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-12 text-center md:grid-cols-2 md:text-left lg:grid-cols-[1.4fr_1fr_1.2fr_1fr]">
          {/* Marca */}
          <div className="flex flex-col items-center gap-4 md:items-start">
            <Link href="/">
              <Image src={logoAeg} alt="AEG Media" className="h-10 w-auto" />
            </Link>
            <p className="max-w-xs text-sm leading-relaxed text-white/60">
              O maior ecossistema automotivo do Brasil. Marketing, tecnologia e
              comercial integrados para gerar visitas diárias na sua loja.
            </p>
            <p className="text-sm text-white/40">
              Nosso sonho é{" "}
              <span className="font-semibold text-white/70 underline decoration-brand-light underline-offset-4">
                vender
              </span>{" "}
              o seu.
            </p>
          </div>

          {/* Navegação */}
          <nav className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/40">
              Navegação
            </h3>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contato */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/40">
              Contato
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:contato@aegmedia.com.br"
                  className="flex items-center justify-center gap-3 text-sm text-white/60 transition-colors hover:text-white md:justify-start"
                >
                  <Mail className="size-4 shrink-0" />
                  contato@aegmedia.com.br
                </a>
              </li>
              <li>
                <a
                  href="tel:+5581989544447"
                  className="flex items-center justify-center gap-3 text-sm text-white/60 transition-colors hover:text-white md:justify-start"
                >
                  <Phone className="size-4 shrink-0" />
                  (81) 98954-4447
                </a>
              </li>
              <li>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 text-sm text-white/60 transition-colors hover:text-white md:justify-start"
                >
                  <WhatsAppIcon className="size-4 shrink-0" />
                  WhatsApp: (81) 98954-4447
                </a>
              </li>
              <li className="flex items-start justify-center gap-3 text-sm text-white/60 md:justify-start">
                <MapPin className="mt-0.5 size-4 shrink-0" />
                <span>
                  R. Ten. Cleto Campelo, 422A – Centro,
                  <br />
                  Belo Jardim – PE
                </span>
              </li>
            </ul>
          </div>

          {/* Redes sociais */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/40">
              Redes sociais
            </h3>
            <div className="flex justify-center gap-3 md:justify-start">
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={social.name}
                  className="flex size-11 items-center justify-center rounded-xl border border-white/15 text-white/60 transition-colors hover:border-brand-light hover:bg-brand/20 hover:text-white"
                >
                  <social.icon className="size-5" />
                  <span className="sr-only">{social.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Barra inferior */}
        <div className="mt-14 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-sm text-white/40">
            © {new Date().getFullYear()} AEG Media. Todos os direitos
            reservados.
          </p>
          <p className="text-sm text-white/40">
            Belo Jardim, Pernambuco — Brasil
          </p>
        </div>
      </div>
    </footer>
  );
}
