import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import DiagnosticForm from "@/components/forms/DiagnosticForm";
import { contact } from "@/lib/team";

export const metadata: Metadata = {
  title: "Solicitar Diagnóstico",
  description:
    "Conte o que sua empresa precisa organizar, automatizar ou lançar. Nossa equipe retorna com os próximos passos para um diagnóstico inicial.",
  alternates: { canonical: "/contato" },
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main
        id="main-content"
        style={{ paddingTop: "var(--header-h)", minHeight: "100vh" }}
      >
        {/* Hero da página */}
        <section
          style={{
            padding: "5rem 0",
            borderBottom: "1px solid var(--border)",
          }}
        >
          <div className="container">
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "5rem",
                alignItems: "start",
              }}
              className="contact-layout"
            >
              {/* Esquerda — Contexto */}
              <div>
                <p className="label" style={{ marginBottom: "1.5rem" }}>
                  Diagnóstico inicial
                </p>
                <h1
                  style={{
                    fontSize: "var(--text-4xl)",
                    fontWeight: 600,
                    letterSpacing: "-0.03em",
                    lineHeight: 1.1,
                    marginBottom: "1.5rem",
                  }}
                >
                  Vamos entender o problema antes de propor uma solução.
                </h1>
                <p
                  style={{
                    fontSize: "var(--text-lg)",
                    color: "var(--text-secondary)",
                    lineHeight: 1.7,
                    marginBottom: "3rem",
                  }}
                >
                  O diagnóstico é gratuito e sem compromisso. As perguntas
                  abaixo nos ajudam a chegar preparados para a primeira
                  conversa.
                </p>

                {/* O que acontece depois */}
                <div>
                  <p className="label" style={{ marginBottom: "1.5rem" }}>
                    O que acontece depois
                  </p>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "0",
                    }}
                  >
                    {[
                      {
                        step: "01",
                        title: "Recebemos o formulário",
                        desc: "Lemos com atenção antes de qualquer contato.",
                      },
                      {
                        step: "02",
                        title: "Retornamos em até 1 dia útil",
                        desc: "Por e-mail ou WhatsApp, confirmamos o recebimento e sugerimos horários.",
                      },
                      {
                        step: "03",
                        title: "Reunião de diagnóstico",
                        desc: "30 a 45 minutos para entender o problema em profundidade.",
                      },
                      {
                        step: "04",
                        title: "Proposta objetiva",
                        desc: "Escopo, prazo e investimento documentados.",
                      },
                    ].map((item) => (
                      <div
                        key={item.step}
                        style={{
                          display: "grid",
                          gridTemplateColumns: "40px 1fr",
                          gap: "1rem",
                          padding: "1.25rem 0",
                          borderTop: "1px solid var(--border)",
                        }}
                      >
                        <span
                          style={{
                            fontFamily: "var(--font-mono)",
                            fontSize: "var(--text-xs)",
                            color: "var(--text-tertiary)",
                            paddingTop: "0.15rem",
                          }}
                        >
                          {item.step}
                        </span>
                        <div>
                          <p
                            style={{
                              fontSize: "var(--text-sm)",
                              fontWeight: 600,
                              marginBottom: "0.25rem",
                            }}
                          >
                            {item.title}
                          </p>
                          <p
                            style={{
                              fontSize: "var(--text-sm)",
                              color: "var(--text-secondary)",
                            }}
                          >
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                    <div style={{ borderTop: "1px solid var(--border)" }} />
                  </div>
                </div>

                {/* Contato direto */}
                <div style={{ marginTop: "3rem" }}>
                  <p className="label" style={{ marginBottom: "1rem" }}>
                    Prefere contato direto?
                  </p>
                  <div
                    style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}
                  >
                    <a
                      href={`mailto:${contact.email}`}
                      style={{
                        fontSize: "var(--text-sm)",
                        color: "var(--text-secondary)",
                        display: "flex",
                        alignItems: "center",
                        gap: "0.5rem",
                      }}
                    >
                      <span className="label">E-mail</span>
                      {contact.email}
                    </a>
                    <a
                      href={contact.whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        fontSize: "var(--text-sm)",
                        color: "var(--text-secondary)",
                        display: "flex",
                        alignItems: "center",
                        gap: "0.5rem",
                      }}
                    >
                      <span className="label">WhatsApp</span>
                      {contact.whatsapp}
                    </a>
                    <p
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "var(--text-xs)",
                        color: "var(--text-tertiary)",
                        marginTop: "0.25rem",
                      }}
                    >
                      {contact.location} · {contact.responseTime}
                    </p>
                  </div>
                </div>
              </div>

              {/* Direita — Formulário */}
              <div>
                <DiagnosticForm />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />

      <style>{`
        @media (max-width: 1023px) {
          .contact-layout {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
          }
        }
      `}</style>
    </>
  );
}
