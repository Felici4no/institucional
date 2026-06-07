import type { Metadata } from "next";
import { Inter, DM_Serif_Display, JetBrains_Mono } from "next/font/google";
import MobileBottomNav from "@/components/layout/MobileBottomNav";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const dmSerif = DM_Serif_Display({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-dm-serif",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_BASE_URL ?? "http://localhost:3000"
  ),
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
    <html
      lang="pt-BR"
      className={`h-full ${inter.variable} ${dmSerif.variable} ${jetbrainsMono.variable}`}
    >
      <body className="min-h-full flex flex-col antialiased">
        <div className="app-content flex-grow flex flex-col">{children}</div>
        <MobileBottomNav />
      </body>
    </html>
  );
}


