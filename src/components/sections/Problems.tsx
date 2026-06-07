const problems = [
  {
    number: "01",
    title: "Processos que vivem em planilhas",
    description:
      "A operação funciona, mas depende de documentos compartilhados que ninguém mantém atualizado e de pessoas específicas que conhecem onde cada coisa está.",
  },
  {
    number: "02",
    title: "Atendimento desorganizado no WhatsApp",
    description:
      "Mensagens sem histórico, respostas inconsistentes, leads que somem. Sem processo, cada atendimento começa do zero.",
  },
  {
    number: "03",
    title: "Dados espalhados entre ferramentas",
    description:
      "Clientes em um lugar, contratos em outro, financeiro em um terceiro. Nenhuma ferramenta se comunica com a outra.",
  },
  {
    number: "04",
    title: "Operação sem painel de controle",
    description:
      "O gestor não tem como saber o que está acontecendo sem perguntar para alguém. Visibilidade em tempo real é exceção, não regra.",
  },
  {
    number: "05",
    title: "Produto digital preso no protótipo",
    description:
      "A ideia existe, o wireframe existe, mas nunca chega a se tornar um produto funcional entregue para usuários reais.",
  },
  {
    number: "06",
    title: "Tarefas repetitivas consumindo tempo",
    description:
      "Atividades que poderiam ser automatizadas ainda são feitas manualmente, todo dia, pela mesma equipe que poderia estar focada em crescer.",
  },
];

export default function Problems() {
  return (
    <section
      id="problemas"
      aria-labelledby="problems-heading"
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
          className="problems-header"
        >
          <div>
            <p className="label" style={{ marginBottom: "1rem" }}>
              Diagnóstico
            </p>
            <h2
              id="problems-heading"
              style={{
                fontSize: "var(--text-4xl)",
                fontWeight: 600,
                letterSpacing: "-0.03em",
                lineHeight: 1.1,
              }}
            >
              O software começa antes do código.
            </h2>
          </div>
          <div>
            <p
              style={{
                fontSize: "var(--text-lg)",
                color: "var(--text-secondary)",
                lineHeight: 1.7,
              }}
            >
              Antes de desenvolver, entendemos onde sua operação perde tempo,
              informação e capacidade de crescimento.
            </p>
          </div>
        </div>

        {/* Grid de problemas */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "0",
            borderTop: "1px solid var(--border)",
            borderLeft: "1px solid var(--border)",
          }}
          className="problems-grid"
        >
          {problems.map((problem) => (
            <div
              key={problem.number}
              style={{
                padding: "2rem",
                borderRight: "1px solid var(--border)",
                borderBottom: "1px solid var(--border)",
              }}
              className="reveal"
            >
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "var(--text-xs)",
                  color: "var(--text-tertiary)",
                  display: "block",
                  marginBottom: "1rem",
                }}
              >
                {problem.number}
              </span>
              <h3
                style={{
                  fontSize: "var(--text-base)",
                  fontWeight: 600,
                  marginBottom: "0.75rem",
                  lineHeight: 1.4,
                }}
              >
                {problem.title}
              </h3>
              <p
                style={{
                  fontSize: "var(--text-sm)",
                  color: "var(--text-secondary)",
                  lineHeight: 1.7,
                }}
              >
                {problem.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 767px) {
          .problems-header { grid-template-columns: 1fr !important; }
          .problems-grid { grid-template-columns: 1fr !important; }
        }
        @media (min-width: 768px) and (max-width: 1023px) {
          .problems-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </section>
  );
}
