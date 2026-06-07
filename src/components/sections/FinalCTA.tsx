"use client";

import Link from "next/link";
import { company, isPlaceholder } from "@/lib/company";

export default function FinalCTA() {
  const showEmail = company.email && !isPlaceholder(company.email);
  const showWhatsapp = company.whatsapp && !isPlaceholder(company.whatsapp);
  const showLocation = company.location && !isPlaceholder(company.location);

  return (
    <section
      id="contato-rapido"
      aria-labelledby="final-cta-heading"
      className="section"
      style={{ borderBottom: "1px solid var(--border)" }}
    >
      <div className="container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "5rem",
            alignItems: "center",
          }}
          className="final-cta-grid"
        >
          {/* Esquerda */}
          <div>
            <p className="label" style={{ marginBottom: "1.5rem" }}>
              Próximo passo
            </p>
            <h2
              id="final-cta-heading"
              style={{
                fontSize: "var(--text-4xl)",
                fontWeight: 600,
                letterSpacing: "-0.03em",
                lineHeight: 1.1,
                marginBottom: "1.5rem",
              }}
            >
              Existe uma operação por trás da ideia. Vamos entender se ela
              precisa de software.
            </h2>
            <p
              style={{
                fontSize: "var(--text-lg)",
                color: "var(--text-secondary)",
                lineHeight: 1.7,
                marginBottom: "2.5rem",
              }}
            >
              Conte o que sua empresa está tentando organizar, automatizar ou
              lançar. Retornaremos com os próximos passos para um diagnóstico
              inicial.
            </p>

            {/* Canais diretos */}
            {(showEmail || showWhatsapp) && (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem",
                }}
              >
                {showEmail && (
                  <a
                    href={`mailto:${company.email}`}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.75rem",
                      padding: "1rem",
                      border: "1px solid var(--border)",
                      transition: "border-color var(--transition-fast)",
                      textDecoration: "none",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.borderColor = "var(--text-primary)")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.borderColor = "var(--border)")
                    }
                  >
                    <span className="label">E-mail</span>
                    <span
                      style={{
                        fontSize: "var(--text-sm)",
                        color: "var(--text-secondary)",
                      }}
                    >
                      {company.email}
                    </span>
                  </a>
                )}
                {showWhatsapp && (
                  <a
                    href={company.whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.75rem",
                      padding: "1rem",
                      border: "1px solid var(--border)",
                      transition: "border-color var(--transition-fast)",
                      textDecoration: "none",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.borderColor = "var(--text-primary)")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.borderColor = "var(--border)")
                    }
                  >
                    <span className="label">WhatsApp</span>
                    <span
                      style={{
                        fontSize: "var(--text-sm)",
                        color: "var(--text-secondary)",
                      }}
                    >
                      {company.whatsapp}
                    </span>
                  </a>
                )}
              </div>
            )}

            {showLocation && (
              <p
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "var(--text-xs)",
                  color: "var(--text-tertiary)",
                  marginTop: "1.25rem",
                }}
              >
                {company.location} · {company.responseTime}
              </p>
            )}
          </div>

          {/* Direita — CTA direto para formulário */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "1.5rem",
              padding: "3rem",
              border: "1px solid var(--border)",
            }}
          >
            <div>
              <h3
                style={{
                  fontSize: "var(--text-xl)",
                  fontWeight: 600,
                  letterSpacing: "-0.02em",
                  marginBottom: "0.5rem",
                }}
              >
                Formulário de diagnóstico
              </h3>
              <p
                style={{
                  fontSize: "var(--text-sm)",
                  color: "var(--text-secondary)",
                  lineHeight: 1.7,
                }}
              >
                Responda a algumas perguntas sobre seu projeto. Isso nos ajuda a
                chegar preparados para a primeira conversa.
              </p>
            </div>

            <ul
              style={{
                listStyle: "none",
                display: "flex",
                flexDirection: "column",
                gap: "0.5rem",
              }}
            >
              {[
                "Tipo de solução que precisa",
                "Problema que quer resolver",
                "Prazo e investimento esperado",
                "Como o processo funciona hoje",
              ].map((item) => (
                <li
                  key={item}
                  style={{
                    display: "flex",
                    alignItems: "baseline",
                    gap: "0.625rem",
                    fontSize: "var(--text-sm)",
                    color: "var(--text-secondary)",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      color: "var(--text-tertiary)",
                      fontSize: "0.6rem",
                    }}
                  >
                    —
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            <Link
              href="/contato"
              className="btn btn-primary btn-arrow"
              id="final-form-cta"
              style={{ width: "100%", justifyContent: "center" }}
            >
              Descrever meu projeto
            </Link>

            <p
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "var(--text-xs)",
                color: "var(--text-tertiary)",
              }}
            >
              Sem compromisso. O diagnóstico é gratuito.
            </p>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 1023px) {
          .final-cta-grid { grid-template-columns: 1fr !important; gap: 3rem !important; }
        }
      `}</style>
    </section>
  );
}
