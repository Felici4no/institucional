const steps = [
  {
    number: "01",
    title: "Diagnóstico",
    description:
      "Entendemos o problema, a operação, os usuários e as restrições. Não começamos com tecnologia — começamos com perguntas.",
    detail: "Reunião → mapeamento → clareza sobre o que precisa ser construído",
  },
  {
    number: "02",
    title: "Escopo",
    description:
      "Definimos prioridades, entregas, responsabilidades e critérios de aceite. O que entra na primeira versão, o que fica para depois.",
    detail: "Documento de escopo → estimativa → aprovação mútua",
  },
  {
    number: "03",
    title: "Projeto",
    description:
      "Estruturamos experiência, arquitetura e fluxo da solução. Antes de codificar, o caminho precisa estar claro.",
    detail: "UX/UI → protótipo → validação com o cliente",
  },
  {
    number: "04",
    title: "Desenvolvimento",
    description:
      "Construímos em ciclos curtos, com validações frequentes. Você acompanha o progresso, não só o resultado final.",
    detail: "Sprints → entregas parciais → feedback iterativo",
  },
  {
    number: "05",
    title: "Implantação",
    description:
      "Publicamos, testamos e acompanhamos a entrada em operação. Um sistema entregue sem implantação não está entregue.",
    detail: "Deploy → treinamento → acompanhamento inicial",
  },
  {
    number: "06",
    title: "Evolução",
    description:
      "Oferecemos suporte, manutenção, monitoramento e melhorias contínuas. Um produto não termina quando é lançado.",
    detail: "Suporte → pequenas melhorias → novas funcionalidades",
  },
];

export default function Process() {
  return (
    <section
      id="processo"
      aria-labelledby="process-heading"
      className="section"
      style={{
        backgroundColor: "var(--bg-dark)",
        color: "var(--text-on-dark)",
        borderBottom: "1px solid var(--border-dark)",
      }}
    >
      <div className="container">
        {/* Cabeçalho */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "3rem",
            marginBottom: "5rem",
            alignItems: "end",
          }}
          className="process-header"
        >
          <div>
            <p
              className="label label-dark"
              style={{ marginBottom: "1rem" }}
            >
              Como trabalhamos
            </p>
            <h2
              id="process-heading"
              style={{
                fontSize: "var(--text-4xl)",
                fontWeight: 600,
                letterSpacing: "-0.03em",
                lineHeight: 1.1,
                color: "var(--text-on-dark)",
              }}
            >
              Do diagnóstico à evolução.
            </h2>
          </div>
          <p
            style={{
              fontSize: "var(--text-base)",
              color: "var(--text-on-dark-secondary)",
              lineHeight: 1.7,
            }}
          >
            Não começamos codificando. Antes de qualquer linha de código,
            entendemos o problema — o que está quebrando, o que está faltando e
            o que precisa existir.
          </p>
        </div>

        {/* Steps */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            borderTop: "1px solid var(--border-dark)",
            borderLeft: "1px solid var(--border-dark)",
          }}
          className="process-grid"
        >
          {steps.map((step) => (
            <div
              key={step.number}
              style={{
                padding: "2rem",
                borderRight: "1px solid var(--border-dark)",
                borderBottom: "1px solid var(--border-dark)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "baseline",
                  gap: "0.75rem",
                  marginBottom: "1rem",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "var(--text-xs)",
                    color: "var(--text-on-dark-secondary)",
                  }}
                >
                  {step.number}
                </span>
                <h3
                  style={{
                    fontSize: "var(--text-lg)",
                    fontWeight: 600,
                    color: "var(--text-on-dark)",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {step.title}
                </h3>
              </div>
              <p
                style={{
                  fontSize: "var(--text-sm)",
                  color: "var(--text-on-dark-secondary)",
                  lineHeight: 1.7,
                  marginBottom: "1.25rem",
                }}
              >
                {step.description}
              </p>
              <p
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "var(--text-xs)",
                  color: "var(--text-on-dark-secondary)",
                  borderTop: "1px solid var(--border-dark)",
                  paddingTop: "0.875rem",
                  letterSpacing: "0.02em",
                }}
              >
                {step.detail}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 767px) {
          .process-header { grid-template-columns: 1fr !important; }
          .process-grid { grid-template-columns: 1fr !important; }
        }
        @media (min-width: 768px) and (max-width: 1023px) {
          .process-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </section>
  );
}
