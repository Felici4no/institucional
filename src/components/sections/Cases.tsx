import Link from "next/link";
import { getFeaturedCases } from "@/lib/cases";

export default function Cases() {
  const cases = getFeaturedCases();

  return (
    <section
      id="projetos"
      aria-labelledby="cases-heading"
      className="section"
      style={{ borderBottom: "1px solid var(--border)" }}
    >
      <div className="container">
        {/* Cabeçalho */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "3rem",
            marginBottom: "4rem",
            alignItems: "end",
          }}
          className="cases-header"
        >
          <div>
            <p className="label" style={{ marginBottom: "1rem" }}>
              Casos reais
            </p>
            <h2
              id="cases-heading"
              style={{
                fontSize: "var(--text-4xl)",
                fontWeight: 600,
                letterSpacing: "-0.03em",
                lineHeight: 1.1,
              }}
            >
              Problemas resolvidos. Produtos implantados.
            </h2>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
              justifyContent: "flex-end",
              gap: "1rem",
            }}
            className="cases-header-right"
          >
            <p
              style={{
                fontSize: "var(--text-base)",
                color: "var(--text-secondary)",
                lineHeight: 1.7,
                textAlign: "right",
              }}
            >
              Cada caso mostra o problema original, o raciocínio aplicado e o
              resultado verificável.
            </p>
            <Link
              href="/projetos"
              className="btn btn-outline btn-arrow"
              id="cases-all-link"
            >
              Ver todos os projetos
            </Link>
          </div>
        </div>

        {/* Lista de casos */}
        <div>
          {cases.map((caseItem, index) => (
            <Link
              key={caseItem.slug}
              href={`/projetos/${caseItem.slug}`}
              style={{ display: "block", textDecoration: "none" }}
              onClick={() => {
                if (typeof window !== "undefined" && (window as any).gtag) {
                  import("@/lib/analytics").then(({ events }) =>
                    events.caseView(caseItem.slug)
                  );
                }
              }}
            >
              <article
                className="case-card"
                style={{
                  display: "grid",
                  gridTemplateColumns: "80px 1fr auto",
                  gap: "2rem",
                  alignItems: "start",
                  cursor: "pointer",
                  transition: "all var(--transition-fast)",
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

                {/* Conteúdo */}
                <div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.75rem",
                      marginBottom: "0.75rem",
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
                      style={{ fontSize: "var(--text-xs)" }}
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
                      maxWidth: "560px",
                    }}
                  >
                    {caseItem.problem}
                  </p>

                  {/* Escopo resumido */}
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: "0.5rem",
                      marginTop: "1rem",
                    }}
                  >
                    {caseItem.scope.slice(0, 3).map((s) => (
                      <span
                        key={s}
                        style={{
                          fontFamily: "var(--font-mono)",
                          fontSize: "var(--text-xs)",
                          color: "var(--text-tertiary)",
                          backgroundColor: "var(--bg-secondary)",
                          padding: "0.2rem 0.5rem",
                        }}
                      >
                        {s}
                      </span>
                    ))}
                    {caseItem.scope.length > 3 && (
                      <span
                        style={{
                          fontFamily: "var(--font-mono)",
                          fontSize: "var(--text-xs)",
                          color: "var(--text-tertiary)",
                        }}
                      >
                        +{caseItem.scope.length - 3}
                      </span>
                    )}
                  </div>
                </div>

                {/* Arrow */}
                <div
                  style={{
                    paddingTop: "0.5rem",
                    color: "var(--text-tertiary)",
                    fontSize: "var(--text-xl)",
                    transition: "transform var(--transition-fast)",
                  }}
                >
                  →
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 767px) {
          .cases-header { grid-template-columns: 1fr !important; }
          .cases-header-right { align-items: flex-start !important; text-align: left !important; }
          .cases-header-right p { text-align: left !important; }
          article.case-card { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
