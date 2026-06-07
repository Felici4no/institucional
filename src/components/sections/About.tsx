import Link from "next/link";
import { team } from "@/lib/team";
import { achievements } from "@/lib/achievements";
import { isPlaceholder } from "@/lib/company";

export default function About() {
  return (
    <section
      id="empresa"
      aria-labelledby="about-heading"
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
            marginBottom: "5rem",
            alignItems: "start",
          }}
          className="about-header"
        >
          <div>
            <p className="label" style={{ marginBottom: "1rem" }}>
              Empresa
            </p>
            <h2
              id="about-heading"
              style={{
                fontSize: "var(--text-4xl)",
                fontWeight: 600,
                letterSpacing: "-0.03em",
                lineHeight: 1.1,
              }}
            >
              Experiência construída em projetos reais.
            </h2>
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
              Operamos combinando engenharia de software pragmática, arquitetura de sistemas e produto. 
              Nossa trajetória é formada pelo desenvolvimento de soluções reais, participando de projetos complexos 
              e entregando software de alta performance sob restrições reais.
            </p>
            <p
              style={{
                fontSize: "var(--text-base)",
                color: "var(--text-secondary)",
                lineHeight: 1.7,
              }}
            >
              Esta iniciativa foi estruturada para transformar competência técnica profunda em 
              resultados comerciais concretos, focados em software sob medida que muda o funcionamento de operações.
            </p>
          </div>
        </div>

        {/* Equipe liderada por Lucas */}
        <div style={{ marginBottom: "5rem" }}>
          <p className="label" style={{ marginBottom: "2rem" }}>
            Liderança
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr",
              maxWidth: "720px",
              borderTop: "1px solid var(--border)",
              borderLeft: "1px solid var(--border)",
            }}
          >
            {team.map((member) => (
              <div
                key={member.slug}
                style={{
                  padding: "2.5rem",
                  borderRight: "1px solid var(--border)",
                  borderBottom: "1px solid var(--border)",
                  display: "grid",
                  gridTemplateColumns: member.photo ? "80px 1fr" : "1fr",
                  gap: "2rem",
                  alignItems: "start",
                }}
              >
                {member.photo && (
                  <div
                    style={{
                      width: "80px",
                      height: "80px",
                      border: "1px solid var(--border)",
                      backgroundColor: "var(--bg-secondary)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                    aria-label={`Foto de ${member.name}`}
                  >
                    <span style={{ fontFamily: "var(--font-mono)", fontSize: "var(--text-xs)", color: "var(--text-tertiary)" }}>
                      FOTO
                    </span>
                  </div>
                )}

                <div>
                  <h3
                    style={{
                      fontSize: "var(--text-lg)",
                      fontWeight: 600,
                      letterSpacing: "-0.01em",
                      marginBottom: "0.25rem",
                    }}
                  >
                    {member.name}
                  </h3>
                  <p
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "var(--text-xs)",
                      color: "var(--text-secondary)",
                      marginBottom: "0.5rem",
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
                      lineHeight: 1.7,
                      marginBottom: "1.25rem",
                    }}
                  >
                    {member.bio}
                  </p>
                  {member.linkedin && !isPlaceholder(member.linkedin) && (
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
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Seção de Conquistas e Reconhecimento */}
        <div>
          <p className="label" style={{ marginBottom: "2rem" }}>
            Reconhecimento
          </p>
          <h3
            style={{
              fontSize: "var(--text-2xl)",
              fontWeight: 600,
              letterSpacing: "-0.02em",
              lineHeight: 1.2,
              marginBottom: "2.5rem",
              maxWidth: "600px"
            }}
          >
            Projetos reconhecidos em tecnologia, mobilidade e impacto.
          </h3>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              borderTop: "1px solid var(--border)",
              borderLeft: "1px solid var(--border)",
            }}
            className="team-grid"
          >
            {achievements.map((achievement, idx) => (
              <div
                key={idx}
                style={{
                  padding: "2rem",
                  borderRight: "1px solid var(--border)",
                  borderBottom: "1px solid var(--border)",
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "1rem" }}>
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "var(--text-xs)",
                      color: "var(--text-secondary)",
                      border: "1px solid var(--border)",
                      padding: "0.2rem 0.5rem",
                    }}
                  >
                    {achievement.recognition}
                  </span>
                  {achievement.year && (
                    <span
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "var(--text-xs)",
                        color: "var(--text-tertiary)",
                      }}
                    >
                      {achievement.year}
                    </span>
                  )}
                </div>
                <h4 style={{ fontSize: "var(--text-base)", fontWeight: 600, marginBottom: "0.5rem" }}>
                  {achievement.project}
                </h4>
                <p style={{ fontFamily: "var(--font-mono)", fontSize: "var(--text-xs)", color: "var(--text-tertiary)", marginBottom: "0.75rem" }}>
                  {achievement.area}
                </p>
                <p style={{ fontSize: "var(--text-sm)", color: "var(--text-secondary)", lineHeight: 1.6 }}>
                  {achievement.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Link para página completa */}
        <div style={{ paddingTop: "3rem", textAlign: "right" }}>
          <Link
            href="/sobre"
            className="btn btn-ghost btn-arrow"
            id="about-more-link"
          >
            Conhecer mais sobre a empresa
          </Link>
        </div>
      </div>

      <style>{`
        @media (max-width: 767px) {
          .about-header { grid-template-columns: 1fr !important; }
          .team-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
