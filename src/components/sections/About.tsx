import Link from "next/link";
import { team } from "@/lib/team";

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
              Jovens, mas não começamos ontem.
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
              Somos uma empresa jovem, mas não começamos ontem. Nossa
              experiência foi construída desenvolvendo produtos reais,
              participando de projetos complexos e resolvendo problemas sob
              restrições reais.
            </p>
            <p
              style={{
                fontSize: "var(--text-base)",
                color: "var(--text-secondary)",
                lineHeight: 1.7,
                marginBottom: "1.5rem",
              }}
            >
              Criamos a empresa para transformar competência técnica em
              resultados comerciais concretos. Não para vender tecnologia pelo
              nome — mas para construir software que muda como uma operação
              funciona.
            </p>
            <p
              style={{
                fontSize: "var(--text-base)",
                color: "var(--text-secondary)",
                lineHeight: 1.7,
              }}
            >
              Sabemos construir, sabemos por que estamos construindo e sabemos
              que o software precisa produzir resultado.
            </p>
          </div>
        </div>

        {/* Equipe */}
        <div>
          <p className="label" style={{ marginBottom: "2rem" }}>
            Fundadores
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: "0",
              borderTop: "1px solid var(--border)",
              borderLeft: "1px solid var(--border)",
            }}
            className="team-grid"
          >
            {team.map((member) => (
              <div
                key={member.slug}
                style={{
                  padding: "2.5rem",
                  borderRight: "1px solid var(--border)",
                  borderBottom: "1px solid var(--border)",
                }}
              >
                {/* Foto placeholder */}
                <div
                  style={{
                    width: "64px",
                    height: "64px",
                    border: "1px solid var(--border)",
                    backgroundColor: "var(--bg-secondary)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "1.25rem",
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
            ))}
          </div>
        </div>

        {/* Link para página completa */}
        <div style={{ paddingTop: "2rem", textAlign: "right" }}>
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
