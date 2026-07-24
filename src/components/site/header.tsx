import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";

import logoAeg from "@/assets/images/logo-aeg-branca.png";
import { Button } from "@/components/ui/button";
import { NAV_LINKS, PRODUTOS_LINKS, WHATSAPP_URL } from "@/lib/site";

export function Header() {
  return (
    <header className="fixed inset-x-0 top-3 z-50 px-3 sm:top-4 sm:px-6">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-4 rounded-full border border-white/10 bg-navy-light/70 px-4 shadow-lg shadow-black/30 backdrop-blur-xl sm:px-6">
        <Link href="/" className="shrink-0">
          <Image
            src={logoAeg}
            alt="AEG Media"
            className="h-7 w-auto sm:h-9"
            priority
          />
        </Link>

        {/* Navegação desktop */}
        <nav className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full px-3.5 py-2 text-sm font-medium text-white/80 transition-colors hover:bg-white/5 hover:text-white"
            >
              {link.label}
            </Link>
          ))}

          {/* Dropdown Produtos — CSS only (hover/focus), 100% server-side */}
          <div className="group relative">
            <Link
              href="/produtos"
              className="flex items-center gap-1 rounded-full px-3.5 py-2 text-sm font-medium text-white/80 transition-colors group-hover:bg-white/5 group-hover:text-white"
            >
              Produtos
              <ChevronDown className="size-4 transition-transform group-hover:rotate-180" />
            </Link>
            <div className="invisible absolute right-0 top-full w-52 pt-2 opacity-0 transition-all group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
              <div className="overflow-hidden rounded-2xl border border-white/10 bg-navy-light shadow-xl shadow-black/40">
                {PRODUTOS_LINKS.map((link) =>
                  link.external ? (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block px-4 py-2.5 text-sm text-white/80 transition-colors hover:bg-brand hover:text-white"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      key={link.label}
                      href={link.href}
                      className="block px-4 py-2.5 text-sm text-white/80 transition-colors hover:bg-brand hover:text-white"
                    >
                      {link.label}
                    </Link>
                  )
                )}
              </div>
            </div>
          </div>
        </nav>

        <div className="hidden lg:block">
          <Button asChild size="lg" className="rounded-full px-5">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              Fale conosco
            </a>
          </Button>
        </div>

        {/* Menu mobile — CSS only via <details> */}
        <details className="group/menu relative lg:hidden">
          <summary className="flex size-10 cursor-pointer list-none items-center justify-center rounded-full text-white transition-colors hover:bg-white/10 [&::-webkit-details-marker]:hidden">
            <Menu className="size-6 group-open/menu:hidden" />
            <X className="hidden size-6 group-open/menu:block" />
          </summary>
          <nav className="absolute right-0 top-full mt-4 w-64 rounded-2xl border border-white/10 bg-navy-light p-2 shadow-xl shadow-black/40">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block rounded-md px-3 py-2.5 text-sm font-medium text-white/80 transition-colors hover:bg-white/5 hover:text-white"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/produtos"
              className="block px-3 pb-1 pt-3 text-xs font-semibold uppercase tracking-wider text-white/40 transition-colors hover:text-white"
            >
              Produtos
            </Link>
            {PRODUTOS_LINKS.map((link) =>
              link.external ? (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block rounded-md px-3 py-2.5 text-sm font-medium text-white/80 transition-colors hover:bg-white/5 hover:text-white"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.label}
                  href={link.href}
                  className="block rounded-md px-3 py-2.5 text-sm font-medium text-white/80 transition-colors hover:bg-white/5 hover:text-white"
                >
                  {link.label}
                </Link>
              )
            )}
            <div className="p-2 pt-3">
              <Button asChild className="w-full">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Fale conosco
                </a>
              </Button>
            </div>
          </nav>
        </details>
      </div>
    </header>
  );
}
