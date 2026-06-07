import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

import { company } from "@/lib/company";

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
                <p>
                  A iniciativa liderada por {company.name} está comprometida com a proteção da
                  privacidade de seus clientes, parceiros e visitantes do site.
                  Esta política descreve como tratamos dados pessoais em conformidade com a Lei Geral de
                  Proteção de Dados (LGPD — Lei 13.709/2018).
                </p>

                <div>
                  <h2
                    style={{
                      fontSize: "var(--text-lg)",
                      fontWeight: 600,
                      color: "var(--text-primary)",
                      marginBottom: "0.75rem",
                    }}
                  >
                    1. Coleta de dados
                  </h2>
                  <p>
                    Coletamos dados voluntariamente fornecidos por você através do nosso formulário de contato (como nome, e-mail e informações sobre sua empresa) para fins de comunicação comercial e agendamento de reuniões.
                  </p>
                </div>

                <div>
                  <h2
                    style={{
                      fontSize: "var(--text-lg)",
                      fontWeight: 600,
                      color: "var(--text-primary)",
                      marginBottom: "0.75rem",
                    }}
                  >
                    2. Tratamento e uso
                  </h2>
                  <p>
                    Os dados coletados são tratados única e exclusivamente para responder às solicitações de diagnóstico, reuniões e prestar as informações demandadas pelo próprio titular.
                  </p>
                </div>

                <div>
                  <h2
                    style={{
                      fontSize: "var(--text-lg)",
                      fontWeight: 600,
                      color: "var(--text-primary)",
                      marginBottom: "0.75rem",
                    }}
                  >
                    3. Direitos do titular
                  </h2>
                  <p>
                    O usuário tem direito de solicitar o acesso, retificação ou exclusão de seus dados a qualquer momento, entrando em contato diretamente pelo nosso e-mail oficial.
                  </p>
                </div>

                {company.email && (
                  <div>
                    <h2
                      style={{
                        fontSize: "var(--text-lg)",
                        fontWeight: 600,
                        color: "var(--text-primary)",
                        marginBottom: "0.75rem",
                      }}
                    >
                      4. Contato
                    </h2>
                    <p>
                      Para exercer seus direitos de privacidade ou esclarecer dúvidas, envie uma mensagem para: {company.email}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
