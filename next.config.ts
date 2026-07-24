import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Site 100% estático — gera a pasta out/ para subir no cPanel (public_html)
  output: "export",
  // Cada rota vira pasta/index.html — URLs limpas funcionam em qualquer host
  trailingSlash: true,
  images: {
    // Obrigatório no export: sem otimização em runtime (não há servidor)
    unoptimized: true,
  },
};

export default nextConfig;
