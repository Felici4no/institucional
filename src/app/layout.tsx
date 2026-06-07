import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://[DOMINIO-DA-EMPRESA].com.br"),
  title: {
    default: "[NOME DA EMPRESA] — Software, Automação e IA para Empresas",
    template: "%s | [NOME DA EMPRESA]",
  },
  description:
    "Desenvolvemos aplicativos, sistemas e automações que organizam processos, reduzem trabalho manual e permitem que negócios cresçam com mais controle. Software sob medida para PMEs, prestadores de serviço e organizações.",
  keywords: [
    "desenvolvimento de sistemas",
    "desenvolvimento de aplicativos",
    "software sob medida",
    "automação empresarial",
    "automação com inteligência artificial",
    "desenvolvimento de MVP",
    "sistema interno para empresas",
    "empresa de software em São Paulo",
    "criação de plataforma digital",
    "software para pequenas empresas",
  ],
  authors: [{ name: "[NOME DA EMPRESA]" }],
  creator: "[NOME DA EMPRESA]",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://[DOMINIO-DA-EMPRESA].com.br",
    siteName: "[NOME DA EMPRESA]",
    title: "[NOME DA EMPRESA] — Software, Automação e IA para Empresas",
    description:
      "Sistemas para empresas que não podem continuar operando no improviso. Desenvolvemos aplicativos, plataformas e automações que organizam processos e permitem crescimento com controle.",
  },
  twitter: {
    card: "summary_large_image",
    title: "[NOME DA EMPRESA] — Software, Automação e IA para Empresas",
    description:
      "Sistemas para empresas que não podem continuar operando no improviso.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="h-full">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=DM+Serif+Display:ital@0;1&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col antialiased">{children}</body>
    </html>
  );
}
