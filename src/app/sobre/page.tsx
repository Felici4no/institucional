import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { team } from "@/lib/team";

export const metadata: Metadata = {
  title: "Sobre",
  description:
    "Uma empresa jovem de software, automação e IA. Formada por engenheiros com experiência prática em produtos digitais, sistemas e operações reais.",
  alternates: { canonical: "/sobre" },
};

const values = [
  {
    label: "Responsabilidade",
    description:
      "Assumimos o que foi acordado. Se não conseguimos entregar algo, comunicamos antes — não depois.",
  },
  {
    label: "Clareza",
    description:
      "Escopo documentado, decisões explicadas, progresso visível. Nenhum cliente deveria ser surpreendido no meio de um projeto.",
  },
  {
    label: "Pragmatismo",
    description:
      "Usamos a tecnologia que resolve o problema, não a que está na moda. A escolha técnica serve ao negócio.",
  },
  {
    label: "Continuidade",
    description:
      "Um produto entregue não é um produto abandonado. Nos importamos com o que acontece depois do lançamento.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Header />
      <main
        id="main-content"
        style={{ paddingTop: "var(--header-h)", minHeight: "100vh" }}
      >
        {/* Hero */}
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
              className="about-page-header"
            >
              <div>
                <p className="label" style={{ marginBottom: "1.5rem" }}>
                  Empresa
                </p>
                <h1
                  style={{
                    fontSize: "var(--text-5xl)",
                    fontWeight: 600,
                    letterSpacing: "-0.03em",
                    lineHeight: 1.05,
                    marginBottom: "2rem",
                  }}
                >
                  Jovens, mas não começamos ontem.
                </h1>
              </div>
              <div style={{ paddingTop: "0.5rem" }}>
                <p
                  style={{
                    fontSize: "var(--text-lg)",
                    color: "var(--text-secondary)",
                    lineHeight: 1.7,
                    marginBottom: "1.5rem",
                  }}
                >
                  Somos uma empresa jovem, mas nossa experiência foi construída
                  desenvolvendo produtos reais, participando de projetos
                  complexos e resolvendo problemas sob restrições reais.
                </p>
                <p
                  style={{
                    fontSize: "var(--text-base)",
                    color: "var(--text-secondary)",
                    lineHeight: 1.7,
                    marginBottom: "1.5rem",
                  }}
                >
                  Fundamos a empresa para transformar competência técnica em
                  resultados comerciais concretos. Não para vender tecnologia
                  pelo nome — mas para construir software que muda como uma
                  operação funciona.
                </p>
                <p
                  style={{
                    fontSize: "var(--text-base)",
                    color: "var(--text-secondary)",
                    lineHeight: 1.7,
                    marginBottom: "1.5rem",
                  }}
                >
                  Nossa visão de longo prazo é construir uma empresa que seja
                  reconhecida pelo que entregou — não pelo que prometeu.
                </p>
                <blockquote
                  style={{
                    borderLeft: "2px solid var(--text-primary)",
                    paddingLeft: "1.25rem",
                    fontFamily: "var(--font-serif)",
                    fontSize: "var(--text-lg)",
                    fontStyle: "italic",
                    lineHeight: 1.6,
                    color: "var(--text-primary)",
                  }}
                >
                  Sabemos construir, sabemos por que estamos construindo e
                  sabemos que o software precisa produzir resultado.
                </blockquote>
              </div>
            </div>
          </div>
        </section>

        {/* Valores */}
        <section
          style={{
            padding: "5rem 0",
            borderBottom: "1px solid var(--border)",
            backgroundColor: "var(--bg-secondary)",
          }}
        >
          <div className="container">
            <p className="label" style={{ marginBottom: "3rem" }}>
              Princípios de trabalho
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(4, 1fr)",
                borderTop: "1px solid var(--border)",
                borderLeft: "1px solid var(--border)",
              }}
              className="values-grid"
            >
              {values.map((v) => (
                <div
                  key={v.label}
                  style={{
                    padding: "2rem",
                    borderRight: "1px solid var(--border)",
                    borderBottom: "1px solid var(--border)",
                  }}
                >
                  <h3
                    style={{
                      fontSize: "var(--text-lg)",
                      fontWeight: 600,
                      letterSpacing: "-0.01em",
                      marginBottom: "0.75rem",
                    }}
                  >
                    {v.label}
                  </h3>
                  <p
                    style={{
                      fontSize: "var(--text-sm)",
                      color: "var(--text-secondary)",
                      lineHeight: 1.7,
                    }}
                  >
                    {v.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Equipe */}
        <section
          style={{
            padding: "5rem 0",
            borderBottom: "1px solid var(--border)",
          }}
        >
          <div className="container">
            <p className="label" style={{ marginBottom: "3rem" }}>
              Fundadores
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(2, 1fr)",
                borderTop: "1px solid var(--border)",
                borderLeft: "1px solid var(--border)",
              }}
              className="team-page-grid"
            >
              {team.map((member) => (
                <div
                  key={member.slug}
                  style={{
                    padding: "3rem",
                    borderRight: "1px solid var(--border)",
                    borderBottom: "1px solid var(--border)",
                    display: "grid",
                    gridTemplateColumns: "80px 1fr",
                    gap: "2rem",
                    alignItems: "start",
                  }}
                  className="team-member-card"
                >
                  {/* Foto */}
                  <div
                    style={{
                      width: "80px",
                      height: "80px",
                      border: "1px solid var(--border)",
                      backgroundColor: "var(--bg-secondary)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                    aria-label={`Foto de ${member.name}`}
                  >
                    <span
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "var(--text-xs)",
                        color: "var(--text-tertiary)",
                      }}
                    >
                      FOTO
                    </span>
                  </div>

                  <div>
                    <h2
                      style={{
                        fontSize: "var(--text-xl)",
                        fontWeight: 600,
                        letterSpacing: "-0.01em",
                        marginBottom: "0.25rem",
                      }}
                    >
                      {member.name}
                    </h2>
                    <p
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "var(--text-xs)",
                        color: "var(--text-secondary)",
                        marginBottom: "0.375rem",
                      }}
                    >
                      {member.role}
                    </p>
                    <p
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "var(--text-xs)",
                        color: "var(--text-tertiary)",
                        marginBottom: "1.25rem",
                      }}
                    >
                      {member.specialty}
                    </p>
                    <p
                      style={{
                        fontSize: "var(--text-sm)",
                        color: "var(--text-secondary)",
                        lineHeight: 1.75,
                        marginBottom: "1.25rem",
                      }}
                    >
                      {member.bio}
                    </p>
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-ghost btn-arrow"
                      style={{
                        padding: 0,
                        fontSize: "var(--text-xs)",
                        fontFamily: "var(--font-mono)",
                        letterSpacing: "0.04em",
                      }}
                    >
                      LinkedIn
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tecnologias */}
        <section
          style={{
            padding: "5rem 0",
            borderBottom: "1px solid var(--border)",
            backgroundColor: "var(--bg-dark)",
            color: "var(--text-on-dark)",
          }}
        >
          <div className="container">
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "4rem",
                alignItems: "start",
              }}
              className="tech-section"
            >
              <div>
                <p
                  className="label label-dark"
                  style={{ marginBottom: "1.5rem" }}
                >
                  Stack técnico
                </p>
                <h2
                  style={{
                    fontSize: "var(--text-3xl)",
                    fontWeight: 600,
                    letterSpacing: "-0.02em",
                    color: "var(--text-on-dark)",
                    marginBottom: "1rem",
                  }}
                >
                  Tecnologia no lugar certo.
                </h2>
                <p
                  style={{
                    fontSize: "var(--text-base)",
                    color: "var(--text-on-dark-secondary)",
                    lineHeight: 1.7,
                  }}
                >
                  Usamos tecnologias estáveis, bem documentadas e com
                  comunidade ativa. A escolha técnica serve ao projeto — não ao
                  currículo.
                </p>
              </div>

              <div>
                {[
                  {
                    area: "Frontend",
                    techs: ["React", "Next.js", "React Native", "TypeScript"],
                  },
                  {
                    area: "Backend",
                    techs: ["Node.js", "Python", "FastAPI", "PostgreSQL"],
                  },
                  {
                    area: "Automação e IA",
                    techs: [
                      "n8n",
                      "Make",
                      "OpenAI API",
                      "LangChain",
                      "WhatsApp API",
                    ],
                  },
                  {
                    area: "Infraestrutura",
                    techs: ["Vercel", "Railway", "AWS", "Docker"],
                  },
                ].map((group) => (
                  <div
                    key={group.area}
                    style={{
                      borderTop: "1px solid var(--border-dark)",
                      padding: "1.25rem 0",
                      display: "grid",
                      gridTemplateColumns: "120px 1fr",
                      gap: "1.5rem",
                      alignItems: "baseline",
                    }}
                  >
                    <span
                      className="label label-dark"
                    >
                      {group.area}
                    </span>
                    <div
                      style={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: "0.5rem",
                      }}
                    >
                      {group.techs.map((tech) => (
                        <span
                          key={tech}
                          style={{
                            fontFamily: "var(--font-mono)",
                            fontSize: "var(--text-xs)",
                            color: "var(--text-on-dark-secondary)",
                            border: "1px solid var(--border-dark)",
                            padding: "0.2rem 0.5rem",
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
                <div style={{ borderTop: "1px solid var(--border-dark)" }} />
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section style={{ padding: "5rem 0" }}>
          <div className="container" style={{ textAlign: "center" }}>
            <p className="label" style={{ marginBottom: "1rem" }}>
              Próximo passo
            </p>
            <h2
              style={{
                fontSize: "var(--text-3xl)",
                fontWeight: 600,
                letterSpacing: "-0.02em",
                marginBottom: "2rem",
              }}
            >
              Pronto para conversar sobre o seu projeto?
            </h2>
            <Link
              href="/contato"
              className="btn btn-primary btn-arrow"
              id="about-page-cta"
            >
              Solicitar diagnóstico
            </Link>
          </div>
        </section>
      </main>
      <Footer />

      <style>{`
        @media (max-width: 1023px) {
          .about-page-header { grid-template-columns: 1fr !important; gap: 2rem !important; }
          .tech-section { grid-template-columns: 1fr !important; gap: 2rem !important; }
        }
        @media (max-width: 767px) {
          .values-grid { grid-template-columns: 1fr !important; }
          .team-page-grid { grid-template-columns: 1fr !important; }
          .team-member-card { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
