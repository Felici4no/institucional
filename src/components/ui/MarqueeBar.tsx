const items = [
  "Aplicativos Mobile",
  "Sistemas Internos",
  "Automação Operacional",
  "Inteligência Artificial Aplicada",
  "MVPs e Produtos Digitais",
  "Plataformas Web",
  "Agentes Conversacionais",
  "Integrações e APIs",
  "Painéis Administrativos",
  "Dashboards e Relatórios",
];

export default function MarqueeBar() {
  const repeated = [...items, ...items];

  return (
    <div
      aria-hidden="true"
      style={{
        overflow: "hidden",
        borderBottom: "1px solid var(--border)",
        borderTop: "1px solid var(--border)",
        backgroundColor: "var(--bg-dark)",
        padding: "0.875rem 0",
        userSelect: "none",
      }}
    >
      <div className="marquee-track">
        {repeated.map((item, i) => (
          <span
            key={i}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "1.5rem",
              fontFamily: "var(--font-mono)",
              fontSize: "var(--text-xs)",
              fontWeight: 500,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "var(--text-on-dark-secondary)",
              whiteSpace: "nowrap",
              paddingRight: "3rem",
            }}
          >
            {item}
            <span
              style={{
                display: "inline-block",
                width: "3px",
                height: "3px",
                borderRadius: "50%",
                backgroundColor: "var(--text-on-dark-secondary)",
                opacity: 0.4,
              }}
            />
          </span>
        ))}
      </div>
    </div>
  );
}
