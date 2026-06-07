import Link from "next/link";

const plans = [
  {
    name: "Suporte Essencial",
    description:
      "Para sistemas implantados que precisam de estabilidade e correções rápidas.",
    includes: [
      "Monitoramento de disponibilidade",
      "Correção de bugs críticos",
      "Atualizações de segurança",
      "Canal de suporte por mensagem",
    ],
    note: "Ideal para sistemas em operação estável.",
  },
  {
    name: "Evolução Contínua",
    description:
      "Para produtos que precisam crescer junto com a operação.",
    includes: [
      "Tudo do plano Essencial",
      "Pequenas melhorias mensais",
      "Análise de uso e performance",
      "Reunião mensal de alinhamento",
      "Prioridade no atendimento",
    ],
    note: "Ideal para produtos em crescimento.",
  },
  {
    name: "Parceria de Produto",
    description:
      "Para empresas que tratam tecnologia como parte central da operação.",
    includes: [
      "Tudo do plano Evolução",
      "Planejamento trimestral de produto",
      "Desenvolvimento de novas funcionalidades",
      "Suporte a integrações e expansões",
      "Consultor técnico dedicado",
    ],
    note: "Ideal para operações que dependem do sistema para crescer.",
  },
];

export default function Continuity() {
  return (
    <section
      id="continuidade"
      aria-labelledby="continuity-heading"
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
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "3rem",
            marginBottom: "4rem",
            alignItems: "end",
          }}
          className="continuity-header"
        >
          <div>
            <p className="label" style={{ marginBottom: "1rem" }}>
              Soluções contínuas
            </p>
            <h2
              id="continuity-heading"
              style={{
                fontSize: "var(--text-4xl)",
                fontWeight: 600,
                letterSpacing: "-0.03em",
                lineHeight: 1.1,
              }}
            >
              Um sistema não termina quando é publicado.
            </h2>
          </div>
          <p
            style={{
              fontSize: "var(--text-base)",
              color: "var(--text-secondary)",
              lineHeight: 1.7,
            }}
          >
            Operações mudam. Usuários descobrem novos usos. O mercado evolui.
            Oferecemos continuidade como parte natural do serviço — não como
            exceção.
          </p>
        </div>

        {/* Planos */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "0",
            borderTop: "1px solid var(--border)",
            borderLeft: "1px solid var(--border)",
          }}
          className="continuity-grid"
        >
          {plans.map((plan) => (
            <div
              key={plan.name}
              style={{
                padding: "2.5rem",
                borderRight: "1px solid var(--border)",
                borderBottom: "1px solid var(--border)",
                position: "relative",
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
                {plan.name}
              </h3>
              <p
                style={{
                  fontSize: "var(--text-sm)",
                  color: "var(--text-secondary)",
                  lineHeight: 1.7,
                  marginBottom: "1.5rem",
                }}
              >
                {plan.description}
              </p>

              <ul
                style={{
                  listStyle: "none",
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.5rem",
                  marginBottom: "1.5rem",
                }}
              >
                {plan.includes.map((item) => (
                  <li
                    key={item}
                    style={{
                      display: "flex",
                      alignItems: "baseline",
                      gap: "0.625rem",
                      fontSize: "var(--text-sm)",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "var(--font-mono)",
                        color: "var(--text-tertiary)",
                        flexShrink: 0,
                        fontSize: "0.6rem",
                      }}
                    >
                      —
                    </span>
                    {item}
                  </li>
                ))}
              </ul>

              <p
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "var(--text-xs)",
                  color: "var(--text-tertiary)",
                  borderTop: "1px solid var(--border)",
                  paddingTop: "1rem",
                }}
              >
                {plan.note}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div
          style={{
            textAlign: "center",
            paddingTop: "3rem",
          }}
        >
          <p
            style={{
              fontSize: "var(--text-sm)",
              color: "var(--text-secondary)",
              marginBottom: "1.5rem",
            }}
          >
            Os valores são definidos após a compreensão do projeto e do nível de
            suporte necessário. Sem contratos de adesão.
          </p>
          <Link
            href="/contato"
            className="btn btn-outline btn-arrow"
            id="continuity-cta"
          >
            Falar sobre manutenção
          </Link>
        </div>
      </div>

      <style>{`
        @media (max-width: 767px) {
          .continuity-header { grid-template-columns: 1fr !important; }
          .continuity-grid { grid-template-columns: 1fr !important; }
        }
        @media (min-width: 768px) and (max-width: 1023px) {
          .continuity-grid { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
    </section>
  );
}
