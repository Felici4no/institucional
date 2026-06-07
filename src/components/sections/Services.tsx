import Link from "next/link";
import { services } from "@/lib/services";

export default function Services() {
  return (
    <section
      id="servicos"
      aria-labelledby="services-heading"
      className="section"
      style={{
        backgroundColor: "var(--bg-secondary)",
        borderBottom: "1px solid var(--border)",
      }}
    >
      <div className="container">
        {/* Cabeçalho */}
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            justifyContent: "space-between",
            marginBottom: "4rem",
            flexWrap: "wrap",
            gap: "1rem",
          }}
        >
          <div>
            <p className="label" style={{ marginBottom: "1rem" }}>
              O que fazemos
            </p>
            <h2
              id="services-heading"
              style={{
                fontSize: "var(--text-4xl)",
                fontWeight: 600,
                letterSpacing: "-0.03em",
                lineHeight: 1.1,
              }}
            >
              Três formas de resolver.
            </h2>
          </div>
          <p
            style={{
              fontSize: "var(--text-base)",
              color: "var(--text-secondary)",
              maxWidth: "360px",
              lineHeight: 1.7,
            }}
          >
            Não trabalhamos com pacotes fixos. Cada projeto parte do problema
            real, não de um catálogo de tecnologias.
          </p>
        </div>

        {/* Serviços */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "0",
          }}
        >
          {services.map((service) => (
            <div
              key={service.id}
              id={service.anchor}
              style={{
                display: "grid",
                gridTemplateColumns: "200px 1fr 1fr auto",
                gap: "2rem",
                padding: "3rem 0",
                borderTop: "1px solid var(--border)",
                alignItems: "start",
              }}
              className="service-row reveal"
            >
              {/* Número e título */}
              <div>
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "var(--text-xs)",
                    color: "var(--text-tertiary)",
                    display: "block",
                    marginBottom: "1rem",
                  }}
                >
                  {service.number}
                </span>
                <h3
                  style={{
                    fontSize: "var(--text-xl)",
                    fontWeight: 600,
                    lineHeight: 1.3,
                    letterSpacing: "-0.02em",
                  }}
                >
                  {service.title}
                </h3>
                <p
                  style={{
                    fontSize: "var(--text-sm)",
                    color: "var(--text-secondary)",
                    marginTop: "0.25rem",
                  }}
                >
                  {service.subtitle}
                </p>
              </div>

              {/* Problema e público */}
              <div>
                <p
                  className="label"
                  style={{ marginBottom: "0.5rem" }}
                >
                  Contexto
                </p>
                <p
                  style={{
                    fontSize: "var(--text-sm)",
                    color: "var(--text-secondary)",
                    lineHeight: 1.7,
                    marginBottom: "1.25rem",
                  }}
                >
                  {service.problem}
                </p>
                <p
                  className="label"
                  style={{ marginBottom: "0.5rem" }}
                >
                  Para quem
                </p>
                <p
                  style={{
                    fontSize: "var(--text-sm)",
                    color: "var(--text-secondary)",
                    lineHeight: 1.7,
                  }}
                >
                  {service.audience}
                </p>
              </div>

              {/* Resultado e entregáveis */}
              <div>
                <p
                  className="label"
                  style={{ marginBottom: "0.5rem" }}
                >
                  Resultado
                </p>
                <p
                  style={{
                    fontSize: "var(--text-sm)",
                    color: "var(--text-secondary)",
                    lineHeight: 1.7,
                    marginBottom: "1.25rem",
                  }}
                >
                  {service.result}
                </p>
                <p
                  className="label"
                  style={{ marginBottom: "0.5rem" }}
                >
                  Inclui
                </p>
                <ul
                  style={{
                    listStyle: "none",
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.25rem",
                  }}
                >
                  {service.deliverables.map((d) => (
                    <li
                      key={d}
                      style={{
                        fontSize: "var(--text-sm)",
                        color: "var(--text-secondary)",
                        display: "flex",
                        alignItems: "baseline",
                        gap: "0.5rem",
                      }}
                    >
                      <span
                        style={{
                          width: "4px",
                          height: "4px",
                          borderRadius: "50%",
                          backgroundColor: "var(--text-tertiary)",
                          flexShrink: 0,
                          marginTop: "0.45rem",
                        }}
                      />
                      {d}
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <div style={{ paddingTop: "1.5rem" }}>
                <Link
                  href={`/contato?tipo=${service.id}`}
                  className="btn btn-outline"
                  id={`service-cta-${service.id}`}
                  style={{ whiteSpace: "nowrap" }}
                >
                  Falar sobre esse projeto
                </Link>
              </div>
            </div>
          ))}

          {/* Linha final */}
          <div style={{ borderTop: "1px solid var(--border)" }} />
        </div>
      </div>

      <style>{`
        @media (max-width: 1023px) {
          .service-row {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        @media (max-width: 767px) {
          .service-row {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
