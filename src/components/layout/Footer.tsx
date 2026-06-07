import Link from "next/link";
import { contact } from "@/lib/team";

const footerNav = {
  Serviços: [
    { label: "MVP e Produto Digital", href: "/servicos#mvp-produto-digital" },
    { label: "Sistemas Internos", href: "/servicos#sistemas-internos" },
    { label: "Automação e IA", href: "/servicos#automacao-ia" },
  ],
  Empresa: [
    { label: "Projetos", href: "/projetos" },
    { label: "Sobre", href: "/sobre" },
    { label: "Blog", href: "/blog" },
  ],
  Contato: [
    { label: "Solicitar diagnóstico", href: "/contato" },
    { label: "WhatsApp", href: contact.whatsappLink },
    { label: contact.email, href: `mailto:${contact.email}` },
  ],
};

const legal = [
  { label: "Política de privacidade", href: "/politica-de-privacidade" },
  { label: "Termos de uso", href: "/termos-de-uso" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      style={{
        backgroundColor: "var(--bg-dark)",
        color: "var(--text-on-dark)",
        borderTop: "1px solid var(--border-dark)",
      }}
    >
      {/* CTA Footer */}
      <div
        style={{
          borderBottom: "1px solid var(--border-dark)",
          padding: "4rem 0",
        }}
      >
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: "2rem",
              alignItems: "center",
            }}
            className="footer-cta-grid"
          >
            <div>
              <p
                className="label label-dark"
                style={{ marginBottom: "1rem" }}
              >
                Próximo passo
              </p>
              <h2
                style={{
                  fontSize: "var(--text-3xl)",
                  fontWeight: 600,
                  color: "var(--text-on-dark)",
                  letterSpacing: "-0.02em",
                  lineHeight: 1.2,
                  maxWidth: "480px",
                }}
              >
                Existe uma operação por trás da ideia.
              </h2>
              <p
                style={{
                  color: "var(--text-on-dark-secondary)",
                  marginTop: "0.75rem",
                  maxWidth: "420px",
                  fontSize: "var(--text-base)",
                }}
              >
                Vamos entender se ela precisa de software.
              </p>
            </div>
            <div
              style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}
            >
              <Link
                href="/contato"
                className="btn btn-outline-light btn-arrow"
                id="footer-cta"
              >
                Descrever meu projeto
              </Link>
              <a
                href={contact.whatsappLink}
                className="btn btn-ghost"
                style={{ color: "var(--text-on-dark-secondary)" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp →
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Links */}
      <div
        style={{
          padding: "3rem 0",
          borderBottom: "1px solid var(--border-dark)",
        }}
      >
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "2fr 1fr 1fr 1fr",
              gap: "3rem",
            }}
            className="footer-links-grid"
          >
            {/* Marca */}
            <div>
              <p
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "var(--text-sm)",
                  fontWeight: 500,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: "var(--text-on-dark)",
                  marginBottom: "1rem",
                }}
              >
                [EMPRESA]
              </p>
              <p
                style={{
                  color: "var(--text-on-dark-secondary)",
                  fontSize: "var(--text-sm)",
                  lineHeight: 1.7,
                  maxWidth: "280px",
                }}
              >
                Software, automação e inteligência artificial para empresas que
                precisam operar melhor.
              </p>
              <p
                style={{
                  color: "var(--text-on-dark-secondary)",
                  fontSize: "var(--text-xs)",
                  fontFamily: "var(--font-mono)",
                  marginTop: "1rem",
                }}
              >
                {contact.location}
              </p>
            </div>

            {/* Nav sections */}
            {Object.entries(footerNav).map(([section, links]) => (
              <div key={section}>
                <p
                  className="label label-dark"
                  style={{ marginBottom: "1rem" }}
                >
                  {section}
                </p>
                <ul
                  style={{
                    listStyle: "none",
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.5rem",
                  }}
                >
                  {links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        style={{
                          color: "var(--text-on-dark-secondary)",
                          fontSize: "var(--text-sm)",
                          transition: "color var(--transition-fast)",
                        }}
                        onMouseEnter={(e) =>
                          (e.currentTarget.style.color =
                            "var(--text-on-dark)")
                        }
                        onMouseLeave={(e) =>
                          (e.currentTarget.style.color =
                            "var(--text-on-dark-secondary)")
                        }
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Base */}
      <div style={{ padding: "1.5rem 0" }}>
        <div className="container">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: "1rem",
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "var(--text-xs)",
                color: "var(--text-on-dark-secondary)",
              }}
            >
              © {currentYear} [NOME DA EMPRESA]. CNPJ [PLACEHOLDER]. Todos os
              direitos reservados.
            </p>
            <div style={{ display: "flex", gap: "1.5rem" }}>
              {legal.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "var(--text-xs)",
                    color: "var(--text-on-dark-secondary)",
                    transition: "color var(--transition-fast)",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "var(--text-on-dark)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color =
                      "var(--text-on-dark-secondary)")
                  }
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 767px) {
          .footer-links-grid {
            grid-template-columns: 1fr 1fr !important;
          }
          .footer-cta-grid {
            grid-template-columns: 1fr !important;
          }
        }
        @media (max-width: 480px) {
          .footer-links-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  );
}
