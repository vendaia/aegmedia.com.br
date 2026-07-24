import { WHATSAPP_URL } from "@/lib/site";
import { WhatsAppIcon } from "./whatsapp-icon";

export function WhatsAppFloat() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Fale conosco pelo WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/30 transition-transform hover:scale-110"
    >
      <WhatsAppIcon className="size-7" />
    </a>
  );
}
