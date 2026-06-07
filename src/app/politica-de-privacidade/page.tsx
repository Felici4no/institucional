import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description: "Como coletamos, usamos e protegemos seus dados.",
  alternates: { canonical: "/politica-de-privacidade" },
};

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main
        id="main-content"
        style={{ paddingTop: "var(--header-h)", minHeight: "100vh" }}
      >
        <section style={{ padding: "5rem 0" }}>
          <div className="container">
            <div style={{ maxWidth: "720px" }}>
              <p className="label" style={{ marginBottom: "1rem" }}>
                Legal
              </p>
              <h1
                style={{
                  fontSize: "var(--text-4xl)",
                  fontWeight: 600,
                  letterSpacing: "-0.03em",
                  marginBottom: "3rem",
                  lineHeight: 1.1,
                }}
              >
                Política de Privacidade
              </h1>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "2rem",
                  color: "var(--text-secondary)",
                  fontSize: "var(--text-base)",
                  lineHeight: 1.75,
                }}
              >
                <p
                  style={{
                    padding: "1rem",
                    border: "1px solid var(--border)",
                    fontFamily: "var(--font-mono)",
                    fontSize: "var(--text-xs)",
                  }}
                >
                  [PLACEHOLDER: Este documento deve ser redigido com auxílio
                  jurídico especializado, em conformidade com a LGPD (Lei
                  13.709/2018). Substitua este bloco pelo texto definitivo antes
                  de publicar o site.]
                </p>

                <p>
                  A [NOME DA EMPRESA] está comprometida com a proteção da
                  privacidade de seus clientes, parceiros e visitantes do site.
                  Esta política descreve como coletamos, usamos e protegemos
                  seus dados pessoais, em conformidade com a Lei Geral de
                  Proteção de Dados (LGPD — Lei 13.709/2018).
                </p>

                {[
                  {
                    title: "1. Dados coletados",
                    content:
                      "[PLACEHOLDER: Liste os dados coletados via formulário, cookies, analytics, etc.]",
                  },
                  {
                    title: "2. Finalidade do tratamento",
                    content:
                      "[PLACEHOLDER: Descreva para que os dados são utilizados.]",
                  },
                  {
                    title: "3. Compartilhamento de dados",
                    content:
                      "[PLACEHOLDER: Informe com quem os dados podem ser compartilhados.]",
                  },
                  {
                    title: "4. Seus direitos",
                    content:
                      "[PLACEHOLDER: Liste os direitos do titular dos dados conforme a LGPD.]",
                  },
                  {
                    title: "5. Contato",
                    content:
                      "Para dúvidas sobre esta política, entre em contato: [EMAIL-COMERCIAL@EMPRESA.COM.BR]",
                  },
                ].map((section) => (
                  <div key={section.title}>
                    <h2
                      style={{
                        fontSize: "var(--text-lg)",
                        fontWeight: 600,
                        color: "var(--text-primary)",
                        marginBottom: "0.75rem",
                      }}
                    >
                      {section.title}
                    </h2>
                    <p>{section.content}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
