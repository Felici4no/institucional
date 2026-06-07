const differentials = [
  {
    label: "Escopo",
    title: "Documentado antes de começar",
    description:
      "Nenhum projeto começa sem um escopo escrito, com critérios de aceite definidos. O que vai ser entregue fica claro antes do desenvolvimento.",
  },
  {
    label: "Comunicação",
    title: "Direta, sem intermediários",
    description:
      "Você fala com quem está construindo. Não existe um gerente de conta entre você e a equipe técnica.",
  },
  {
    label: "Decisões técnicas",
    title: "Explicadas em linguagem de negócio",
    description:
      "Quando precisamos fazer uma escolha técnica relevante, explicamos o impacto no produto — não só a implementação.",
  },
  {
    label: "Progresso",
    title: "Visível durante o desenvolvimento",
    description:
      "Entregas parciais com validação frequente. Você não espera o produto inteiro para ver o que está sendo feito.",
  },
  {
    label: "Código",
    title: "Versionado e documentado",
    description:
      "Todo projeto é entregue com repositório, histórico de versões e documentação mínima. Você não fica refém de uma única equipe.",
  },
  {
    label: "Implantação",
    title: "Planejada, não improvisada",
    description:
      "A entrada em produção faz parte do projeto. Testamos, treinamos a equipe e acompanhamos os primeiros dias de operação.",
  },
  {
    label: "Responsabilidade",
    title: "Sobre o que foi acordado",
    description:
      "O que entra no escopo é entregue. Quando surge algo fora do escopo, alinhamos antes de executar.",
  },
  {
    label: "Continuidade",
    title: "Disponível após a entrega",
    description:
      "Oferecemos suporte, manutenção e melhorias contínuas. Um sistema entregue não é abandonado.",
  },
];

export default function Differentials() {
  return (
    <section
      id="diferenciais"
      aria-labelledby="diff-heading"
      className="section"
      style={{ borderBottom: "1px solid var(--border)" }}
    >
      <div className="container">
        {/* Cabeçalho */}
        <div
          style={{ marginBottom: "4rem" }}
        >
          <p className="label" style={{ marginBottom: "1rem" }}>
            Por que trabalhar conosco
          </p>
          <h2
            id="diff-heading"
            style={{
              fontSize: "var(--text-4xl)",
              fontWeight: 600,
              letterSpacing: "-0.03em",
              lineHeight: 1.1,
              maxWidth: "600px",
            }}
          >
            Menos promessa.
            <br />
            Mais processo.
          </h2>
        </div>

        {/* Grid de diferenciais */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            borderTop: "1px solid var(--border)",
            borderLeft: "1px solid var(--border)",
          }}
          className="diff-grid"
        >
          {differentials.map((diff) => (
            <div
              key={diff.label}
              style={{
                padding: "1.75rem",
                borderRight: "1px solid var(--border)",
                borderBottom: "1px solid var(--border)",
              }}
            >
              <span className="label" style={{ display: "block", marginBottom: "0.875rem" }}>
                {diff.label}
              </span>
              <h3
                style={{
                  fontSize: "var(--text-base)",
                  fontWeight: 600,
                  marginBottom: "0.5rem",
                  lineHeight: 1.4,
                }}
              >
                {diff.title}
              </h3>
              <p
                style={{
                  fontSize: "var(--text-sm)",
                  color: "var(--text-secondary)",
                  lineHeight: 1.7,
                }}
              >
                {diff.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 767px) {
          .diff-grid { grid-template-columns: 1fr !important; }
        }
        @media (min-width: 768px) and (max-width: 1023px) {
          .diff-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </section>
  );
}
