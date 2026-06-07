import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { getCaseBySlug, cases } from "@/lib/cases";

export async function generateStaticParams() {
  return cases.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata(
  props: PageProps<"/projetos/[slug]">
): Promise<Metadata> {
  const { slug } = await props.params;
  const caseData = getCaseBySlug(slug);
  if (!caseData) return {};
  return {
    title: caseData.headline,
    description: caseData.problem,
    alternates: { canonical: `/projetos/${slug}` },
  };
}

export default async function CaseDetailPage(
  props: PageProps<"/projetos/[slug]">
) {
  const { slug } = await props.params;
  const caseData = getCaseBySlug(slug);

  if (!caseData) notFound();

  return (
    <>
      <Header />
      <main
        id="main-content"
        style={{ paddingTop: "var(--header-h)", minHeight: "100vh" }}
      >
        {/* Breadcrumb */}
        <div
          style={{
            borderBottom: "1px solid var(--border)",
            padding: "1rem 0",
          }}
        >
          <div className="container">
            <nav aria-label="Trilha de navegação">
              <span style={{ fontFamily: "var(--font-mono)", fontSize: "var(--text-xs)", color: "var(--text-tertiary)" }}>
                <Link href="/projetos" style={{ color: "var(--text-secondary)" }}>
                  Projetos
                </Link>
                {" / "}
                {caseData.category}
              </span>
            </nav>
          </div>
        </div>

        {/* Header do caso */}
        <section
          style={{
            padding: "4rem 0",
            borderBottom: "1px solid var(--border)",
          }}
        >
          <div className="container">
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 360px",
                gap: "4rem",
                alignItems: "start",
              }}
              className="case-detail-layout"
            >
              <div>
                {/* Meta */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.75rem",
                    marginBottom: "1.5rem",
                    flexWrap: "wrap",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "var(--text-xs)",
                      color: "var(--text-tertiary)",
                    }}
                  >
                    CASO {caseData.number}
                  </span>
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "var(--text-xs)",
                      color: "var(--text-secondary)",
                      border: "1px solid var(--border)",
                      padding: "0.2rem 0.5rem",
                    }}
                  >
                    {caseData.category}
                  </span>
                  <span
                    className={`badge badge-${caseData.statusType}`}
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
                    {caseData.status}
                  </span>
                </div>

                <h1
                  style={{
                    fontSize: "var(--text-4xl)",
                    fontWeight: 600,
                    letterSpacing: "-0.03em",
                    lineHeight: 1.1,
                    marginBottom: "1.5rem",
                  }}
                >
                  {caseData.headline}
                </h1>

                <p
                  style={{
                    fontSize: "var(--text-lg)",
                    color: "var(--text-secondary)",
                    lineHeight: 1.7,
                  }}
                >
                  {caseData.context}
                </p>
              </div>

              {/* Sidebar de meta */}
              <div
                style={{
                  border: "1px solid var(--border)",
                  padding: "2rem",
                  display: "flex",
                  flexDirection: "column",
                  gap: "1.5rem",
                }}
              >
                <div>
                  <p className="label" style={{ marginBottom: "0.375rem" }}>
                    Categoria
                  </p>
                  <p style={{ fontSize: "var(--text-sm)", color: "var(--text-secondary)" }}>
                    {caseData.category}
                  </p>
                </div>
                <div style={{ borderTop: "1px solid var(--border)", paddingTop: "1.5rem" }}>
                  <p className="label" style={{ marginBottom: "0.375rem" }}>
                    Duração
                  </p>
                  <p style={{ fontSize: "var(--text-sm)", color: "var(--text-secondary)" }}>
                    {caseData.duration}
                  </p>
                </div>
                <div style={{ borderTop: "1px solid var(--border)", paddingTop: "1.5rem" }}>
                  <p className="label" style={{ marginBottom: "0.375rem" }}>
                    Status atual
                  </p>
                  <span className={`badge badge-${caseData.statusType}`}>
                    <span style={{ display: "inline-block", width: "5px", height: "5px", borderRadius: "50%", backgroundColor: "currentColor" }} />
                    {caseData.status}
                  </span>
                </div>
                <div style={{ borderTop: "1px solid var(--border)", paddingTop: "1.5rem" }}>
                  <p className="label" style={{ marginBottom: "0.75rem" }}>
                    Tecnologias
                  </p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "0.375rem" }}>
                    {caseData.technologies.map((tech) => (
                      <span
                        key={tech}
                        style={{
                          fontFamily: "var(--font-mono)",
                          fontSize: "var(--text-xs)",
                          color: "var(--text-tertiary)",
                          backgroundColor: "var(--bg-secondary)",
                          padding: "0.2rem 0.5rem",
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Corpo do caso */}
        <section style={{ padding: "4rem 0", borderBottom: "1px solid var(--border)" }}>
          <div className="container">
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr 1fr",
                gap: "0",
                borderTop: "1px solid var(--border)",
                borderLeft: "1px solid var(--border)",
                marginBottom: "4rem",
              }}
              className="case-body-grid"
            >
              {[
                { label: "Problema", content: caseData.problem },
                { label: "Solução", content: caseData.solution },
                { label: "Resultado", content: caseData.result },
              ].map((item) => (
                <div
                  key={item.label}
                  style={{
                    padding: "2rem",
                    borderRight: "1px solid var(--border)",
                    borderBottom: "1px solid var(--border)",
                  }}
                >
                  <p className="label" style={{ marginBottom: "1rem" }}>
                    {item.label}
                  </p>
                  <p
                    style={{
                      fontSize: "var(--text-base)",
                      color: "var(--text-secondary)",
                      lineHeight: 1.75,
                    }}
                  >
                    {item.content}
                  </p>
                </div>
              ))}
            </div>

            {/* Escopo */}
            <div>
              <p className="label" style={{ marginBottom: "1.5rem" }}>
                Escopo do projeto
              </p>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(4, 1fr)",
                  gap: "0",
                  borderTop: "1px solid var(--border)",
                  borderLeft: "1px solid var(--border)",
                }}
                className="scope-grid"
              >
                {caseData.scope.map((item, i) => (
                  <div
                    key={item}
                    style={{
                      padding: "1.25rem",
                      borderRight: "1px solid var(--border)",
                      borderBottom: "1px solid var(--border)",
                      display: "flex",
                      alignItems: "baseline",
                      gap: "0.75rem",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "var(--text-xs)",
                        color: "var(--text-tertiary)",
                        flexShrink: 0,
                      }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span style={{ fontSize: "var(--text-sm)", color: "var(--text-secondary)" }}>
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section
          style={{
            padding: "5rem 0",
            backgroundColor: "var(--bg-secondary)",
            borderBottom: "1px solid var(--border)",
          }}
        >
          <div className="container" style={{ textAlign: "center" }}>
            <p className="label" style={{ marginBottom: "1rem" }}>
              Próximo passo
            </p>
            <h2
              style={{
                fontSize: "var(--text-3xl)",
                fontWeight: 600,
                letterSpacing: "-0.02em",
                marginBottom: "1rem",
              }}
            >
              Tem um projeto parecido?
            </h2>
            <p
              style={{
                fontSize: "var(--text-base)",
                color: "var(--text-secondary)",
                marginBottom: "2rem",
                maxWidth: "480px",
                margin: "0 auto 2rem",
                lineHeight: 1.7,
              }}
            >
              Conte o problema. Fazemos uma análise inicial sem compromisso.
            </p>
            <Link href="/contato" className="btn btn-primary btn-arrow" id={`case-cta-${caseData.slug}`}>
              Solicitar diagnóstico
            </Link>
          </div>
        </section>

        {/* Navegação entre casos */}
        <section style={{ padding: "3rem 0" }}>
          <div className="container">
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1rem" }}>
              <Link href="/projetos" className="btn btn-ghost">
                ← Todos os projetos
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />

      <style>{`
        @media (max-width: 1023px) {
          .case-detail-layout { grid-template-columns: 1fr !important; }
          .case-body-grid { grid-template-columns: 1fr !important; }
          .scope-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 767px) {
          .scope-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
