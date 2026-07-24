export const WHATSAPP_PHONE = "5581989544447";

// Webhook (n8n) que recebe as candidaturas do formulário "Trabalhe conosco"
export const TRABALHE_WEBHOOK_URL =
  "https://n8n.aegmedia.com.br/webhook/aegmedia-trabalheconosco";

export const WHATSAPP_URL =
  "https://wa.me/5581989544447?text=Ol%C3%A1!%20Quero%20saber%20mais%20sobre%20a%20AEG%20Media.";

export const INSTAGRAM_URL = "https://www.instagram.com/aegmedia";
export const LINKEDIN_URL = "https://www.linkedin.com/company/aegmedia";

export const FORMACAO_URL = "/area-de-membros";

export const NAV_LINKS = [
  { label: "Início", href: "/" },
  { label: "Serviços", href: "/servicos" },
  { label: "Trabalhe conosco", href: "/trabalhe-conosco" },
] as const;

export const PRODUTOS_LINKS = [
  { label: "Todos os produtos", href: "/produtos", external: false },
  { label: "Venda.IA", href: "https://vendaia.app.br", external: true },
  // TODO: criar a página da Área de Membros
  { label: "Área de Membros", href: "/area-de-membros", external: false },
] as const;
