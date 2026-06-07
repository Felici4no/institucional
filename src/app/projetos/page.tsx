import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { cases } from "@/lib/cases";

export const metadata: Metadata = {
  title: "Projetos",
  description:
    "Casos reais entregues. Cada projeto mostra o problema original, a solução construída e o resultado verificável.",
  alternates: { canonical: "/projetos" },
};

export default function ProjectsPage() {
  return (
    <>
      <Header />
      <main
        id="main-content"
        style={{ paddingTop: "var(--header-h)", minHeight: "100vh" }}
      >
        {/* Header da página */}
        <section
          style={{
            padding: "5rem 0 3rem",
            borderBottom: "1px solid var(--border)",
          }}
        >
          <div className="container">
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "3rem",
                alignItems: "end",
              }}
              className="projects-header"
            >
              <div>
                <p className="label" style={{ marginBottom: "1rem" }}>
                  Casos
                </p>
                <h1
                  style={{
                    fontSize: "var(--text-5xl)",
                    fontWeight: 600,
                    letterSpacing: "-0.03em",
                    lineHeight: 1.05,
                  }}
                >
                  Problemas reais. Produtos implantados.
                </h1>
              </div>
              <p
                style={{
                  fontSize: "var(--text-lg)",
                  color: "var(--text-secondary)",
                  lineHeight: 1.7,
                }}
              >
                Apresentamos cada projeto com o contexto original, o raciocínio
                aplicado e o resultado verificável. Sem números inventados. Sem
                promessas não cumpridas.
              </p>
            </div>
          </div>
        </section>

        {/* Seções de Projetos por Nível */}
        {/* Cases Principais */}
        <section style={{ padding: "4rem 0", borderBottom: "1px solid var(--border)" }}>
          <div className="container">
            <h2
              style={{
                fontSize: "var(--text-2xl)",
                fontWeight: 600,
                letterSpacing: "-0.02em",
                marginBottom: "2rem",
                color: "var(--text-primary)",
              }}
            >
              Cases principais
            </h2>
            <div style={{ display: "flex", flexDirection: "column" }}>
              {cases
                .filter((c) => c.group === "commercial")
                .map((caseItem) => (
                  <Link
                    key={caseItem.slug}
                    href={`/projetos/${caseItem.slug}`}
                    style={{ display: "block", textDecoration: "none" }}
                  >
                    <article
                      className="case-card"
                      style={{
                        display: "grid",
                        gridTemplateColumns: "80px 1fr 280px auto",
                        gap: "2.5rem",
                        alignItems: "start",
                        cursor: "pointer",
                        padding: "2.5rem 0",
                        borderTop: "1px solid var(--border)",
                      }}
                    >
                      {/* Número */}
                      <div>
                        <span
                          style={{
                            fontFamily: "var(--font-mono)",
                            fontSize: "var(--text-xs)",
                            color: "var(--text-tertiary)",
                          }}
                        >
                          CASO {caseItem.number}
                        </span>
                      </div>

                      {/* Principal */}
                      <div>
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "0.75rem",
                            marginBottom: "0.875rem",
                            flexWrap: "wrap",
                          }}
                        >
                          <span
                            style={{
                              fontFamily: "var(--font-mono)",
                              fontSize: "var(--text-xs)",
                              color: "var(--text-secondary)",
                              border: "1px solid var(--border)",
                              padding: "0.2rem 0.5rem",
                            }}
                          >
                            {caseItem.category}
                          </span>
                          <span
                            className={`badge badge-${caseItem.statusType}`}
                          >
                            <span
                              style={{
                                display: "inline-block",
                                width: "5px",
                                height: "5px",
                                borderRadius: "50%",
                                backgroundColor: "currentColor",
                              }}
                            />
                            {caseItem.status}
                          </span>
                        </div>
                        <h3
                          style={{
                            fontSize: "var(--text-xl)",
                            fontWeight: 600,
                            letterSpacing: "-0.02em",
                            marginBottom: "0.5rem",
                            lineHeight: 1.3,
                          }}
                        >
                          {caseItem.headline}
                        </h3>
                        <p
                          style={{
                            fontSize: "var(--text-sm)",
                            color: "var(--text-secondary)",
                            lineHeight: 1.7,
                          }}
                        >
                          {caseItem.problem}
                        </p>
                      </div>

                      {/* Resultado */}
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
                          }}
                        >
                          {caseItem.result}
                        </p>
                      </div>

                      {/* Arrow */}
                      <span
                        style={{
                          color: "var(--text-tertiary)",
                          fontSize: "var(--text-xl)",
                          paddingTop: "0.25rem",
                        }}
                      >
                        →
                      </span>
                    </article>
                  </Link>
                ))}
              <div style={{ borderTop: "1px solid var(--border)" }} />
            </div>
          </div>
        </section>

        {/* Inovação e Impacto */}
        <section style={{ padding: "4rem 0", borderBottom: "1px solid var(--border)" }}>
          <div className="container">
            <h2
              style={{
                fontSize: "var(--text-2xl)",
                fontWeight: 600,
                letterSpacing: "-0.02em",
                marginBottom: "2rem",
                color: "var(--text-primary)",
              }}
            >
              Inovação e impacto
            </h2>
            <div style={{ display: "flex", flexDirection: "column" }}>
              {cases
                .filter((c) => c.group === "innovation")
                .map((caseItem) => (
                  <Link
                    key={caseItem.slug}
                    href={`/projetos/${caseItem.slug}`}
                    style={{ display: "block", textDecoration: "none" }}
                  >
                    <article
                      className="case-card"
                      style={{
                        display: "grid",
                        gridTemplateColumns: "80px 1fr 280px auto",
                        gap: "2.5rem",
                        alignItems: "start",
                        cursor: "pointer",
                        padding: "2.5rem 0",
                        borderTop: "1px solid var(--border)",
                      }}
                    >
                      {/* Número */}
                      <div>
                        <span
                          style={{
                            fontFamily: "var(--font-mono)",
                            fontSize: "var(--text-xs)",
                            color: "var(--text-tertiary)",
                          }}
                        >
                          CASO {caseItem.number}
                        </span>
                      </div>

                      {/* Principal */}
                      <div>
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "0.75rem",
                            marginBottom: "0.875rem",
                            flexWrap: "wrap",
                          }}
                        >
                          <span
                            style={{
                              fontFamily: "var(--font-mono)",
                              fontSize: "var(--text-xs)",
                              color: "var(--text-secondary)",
                              border: "1px solid var(--border)",
                              padding: "0.2rem 0.5rem",
                            }}
                          >
                            {caseItem.category}
                          </span>
                          <span
                            className={`badge badge-${caseItem.statusType}`}
                          >
                            <span
                              style={{
                                display: "inline-block",
                                width: "5px",
                                height: "5px",
                                borderRadius: "50%",
                                backgroundColor: "currentColor",
                              }}
                            />
                            {caseItem.status}
                          </span>
                        </div>
                        <h3
                          style={{
                            fontSize: "var(--text-xl)",
                            fontWeight: 600,
                            letterSpacing: "-0.02em",
                            marginBottom: "0.5rem",
                            lineHeight: 1.3,
                          }}
                        >
                          {caseItem.headline}
                        </h3>
                        <p
                          style={{
                            fontSize: "var(--text-sm)",
                            color: "var(--text-secondary)",
                            lineHeight: 1.7,
                          }}
                        >
                          {caseItem.problem}
                        </p>
                      </div>

                      {/* Resultado */}
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
                          }}
                        >
                          {caseItem.result}
                        </p>
                      </div>

                      {/* Arrow */}
                      <span
                        style={{
                          color: "var(--text-tertiary)",
                          fontSize: "var(--text-xl)",
                          paddingTop: "0.25rem",
                        }}
                      >
                        →
                      </span>
                    </article>
                  </Link>
                ))}
              <div style={{ borderTop: "1px solid var(--border)" }} />
            </div>
          </div>
        </section>

        {/* Laboratório */}
        <section style={{ padding: "4rem 0 6rem" }}>
          <div className="container">
            <h2
              style={{
                fontSize: "var(--text-2xl)",
                fontWeight: 600,
                letterSpacing: "-0.02em",
                marginBottom: "2rem",
                color: "var(--text-primary)",
              }}
            >
              Laboratório
            </h2>
            <div style={{ display: "flex", flexDirection: "column" }}>
              {cases
                .filter((c) => c.group === "laboratory")
                .map((caseItem) => (
                  <Link
                    key={caseItem.slug}
                    href={`/projetos/${caseItem.slug}`}
                    style={{ display: "block", textDecoration: "none" }}
                  >
                    <article
                      className="case-card"
                      style={{
                        display: "grid",
                        gridTemplateColumns: "80px 1fr 280px auto",
                        gap: "2.5rem",
                        alignItems: "start",
                        cursor: "pointer",
                        padding: "2.5rem 0",
                        borderTop: "1px solid var(--border)",
                      }}
                    >
                      {/* Número */}
                      <div>
                        <span
                          style={{
                            fontFamily: "var(--font-mono)",
                            fontSize: "var(--text-xs)",
                            color: "var(--text-tertiary)",
                          }}
                        >
                          CASO {caseItem.number}
                        </span>
                      </div>

                      {/* Principal */}
                      <div>
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "0.75rem",
                            marginBottom: "0.875rem",
                            flexWrap: "wrap",
                          }}
                        >
                          <span
                            style={{
                              fontFamily: "var(--font-mono)",
                              fontSize: "var(--text-xs)",
                              color: "var(--text-secondary)",
                              border: "1px solid var(--border)",
                              padding: "0.2rem 0.5rem",
                            }}
                          >
                            {caseItem.category}
                          </span>
                          <span
                            className={`badge badge-${caseItem.statusType}`}
                          >
                            <span
                              style={{
                                display: "inline-block",
                                width: "5px",
                                height: "5px",
                                borderRadius: "50%",
                                backgroundColor: "currentColor",
                              }}
                            />
                            {caseItem.status}
                          </span>
                        </div>
                        <h3
                          style={{
                            fontSize: "var(--text-xl)",
                            fontWeight: 600,
                            letterSpacing: "-0.02em",
                            marginBottom: "0.5rem",
                            lineHeight: 1.3,
                          }}
                        >
                          {caseItem.headline}
                        </h3>
                        <p
                          style={{
                            fontSize: "var(--text-sm)",
                            color: "var(--text-secondary)",
                            lineHeight: 1.7,
                          }}
                        >
                          {caseItem.problem}
                        </p>
                      </div>

                      {/* Resultado */}
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
                          }}
                        >
                          {caseItem.result}
                        </p>
                      </div>

                      {/* Arrow */}
                      <span
                        style={{
                          color: "var(--text-tertiary)",
                          fontSize: "var(--text-xl)",
                          paddingTop: "0.25rem",
                        }}
                      >
                        →
                      </span>
                    </article>
                  </Link>
                ))}
              <div style={{ borderTop: "1px solid var(--border)" }} />
            </div>
          </div>
        </section>
      </main>
      <Footer />

      <style>{`
        @media (max-width: 1023px) {
          .projects-header { grid-template-columns: 1fr !important; }
          article.case-card { grid-template-columns: 1fr !important; }
          article.case-card > div:nth-child(3) { display: none; }
          article.case-card > span { display: none; }
        }
      `}</style>
    </>
  );
}
