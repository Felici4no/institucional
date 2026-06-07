import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { services } from "@/lib/services";

export const metadata: Metadata = {
  title: "Serviços",
  description:
    "MVP e produto digital, sistemas internos e automação com IA. Três formas de transformar processos manuais em operações organizadas.",
  alternates: { canonical: "/servicos" },
};

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main
        id="main-content"
        style={{ paddingTop: "var(--header-h)", minHeight: "100vh" }}
      >
        {/* Header */}
        <section
          style={{
            padding: "5rem 0 4rem",
            borderBottom: "1px solid var(--border)",
          }}
        >
          <div className="container">
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "3rem",
                alignItems: "end",
              }}
              className="services-page-header"
            >
              <div>
                <p className="label" style={{ marginBottom: "1rem" }}>
                  O que fazemos
                </p>
                <h1
                  style={{
                    fontSize: "var(--text-5xl)",
                    fontWeight: 600,
                    letterSpacing: "-0.03em",
                    lineHeight: 1.05,
                  }}
                >
                  Software que muda como uma operação funciona.
                </h1>
              </div>
              <div>
                <p
                  style={{
                    fontSize: "var(--text-lg)",
                    color: "var(--text-secondary)",
                    lineHeight: 1.7,
                    marginBottom: "1.5rem",
                  }}
                >
                  Não trabalhamos com catálogos fixos. Cada projeto começa pelo
                  problema real — não pela tecnologia disponível.
                </p>
                <p
                  style={{
                    fontSize: "var(--text-base)",
                    color: "var(--text-secondary)",
                    lineHeight: 1.7,
                  }}
                >
                  As três ofertas abaixo representam os caminhos mais frequentes
                  que nossos clientes percorrem. O ponto de partida é sempre o
                  diagnóstico.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Serviços detalhados */}
        {services.map((service, index) => (
          <section
            key={service.id}
            id={service.anchor}
            style={{
              padding: "5rem 0",
              borderBottom: "1px solid var(--border)",
              backgroundColor:
                index % 2 === 1 ? "var(--bg-secondary)" : "transparent",
            }}
          >
            <div className="container">
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "300px 1fr",
                  gap: "4rem",
                  alignItems: "start",
                }}
                className="service-detail-layout"
              >
                {/* Identificação */}
                <div>
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "var(--text-xs)",
                      color: "var(--text-tertiary)",
                      display: "block",
                      marginBottom: "1rem",
                    }}
                  >
                    SERVIÇO {service.number}
                  </span>
                  <h2
                    style={{
                      fontSize: "var(--text-3xl)",
                      fontWeight: 600,
                      letterSpacing: "-0.02em",
                      lineHeight: 1.2,
                      marginBottom: "0.5rem",
                    }}
                  >
                    {service.title}
                  </h2>
                  <p
                    style={{
                      fontSize: "var(--text-base)",
                      color: "var(--text-secondary)",
                      marginBottom: "2.5rem",
                    }}
                  >
                    {service.subtitle}
                  </p>
                  <Link
                    href={`/contato?tipo=${service.id}`}
                    className="btn btn-primary btn-arrow"
                    id={`services-page-cta-${service.id}`}
                  >
                    Falar sobre isso
                  </Link>
                </div>

                {/* Detalhamento */}
                <div>
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr",
                      gap: "3rem",
                      marginBottom: "3rem",
                    }}
                    className="service-meta-grid"
                  >
                    <div>
                      <p className="label" style={{ marginBottom: "0.75rem" }}>
                        Contexto
                      </p>
                      <p
                        style={{
                          fontSize: "var(--text-base)",
                          color: "var(--text-secondary)",
                          lineHeight: 1.75,
                        }}
                      >
                        {service.problem}
                      </p>
                    </div>
                    <div>
                      <p className="label" style={{ marginBottom: "0.75rem" }}>
                        Para quem
                      </p>
                      <p
                        style={{
                          fontSize: "var(--text-base)",
                          color: "var(--text-secondary)",
                          lineHeight: 1.75,
                        }}
                      >
                        {service.audience}
                      </p>
                    </div>
                  </div>

                  <div style={{ marginBottom: "2.5rem" }}>
                    <p className="label" style={{ marginBottom: "0.75rem" }}>
                      Resultado esperado
                    </p>
                    <p
                      style={{
                        fontSize: "var(--text-lg)",
                        lineHeight: 1.6,
                        letterSpacing: "-0.01em",
                      }}
                    >
                      {service.result}
                    </p>
                  </div>

                  {/* Entregáveis */}
                  <div>
                    <p className="label" style={{ marginBottom: "1rem" }}>
                      Entregáveis inclusos
                    </p>
                    <div
                      style={{
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr",
                        gap: "0",
                        borderTop: "1px solid var(--border)",
                        borderLeft: "1px solid var(--border)",
                      }}
                      className="deliverables-grid"
                    >
                      {service.deliverables.map((d, i) => (
                        <div
                          key={d}
                          style={{
                            padding: "0.875rem 1rem",
                            borderRight: "1px solid var(--border)",
                            borderBottom: "1px solid var(--border)",
                            display: "flex",
                            alignItems: "baseline",
                            gap: "0.625rem",
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
                          <span
                            style={{
                              fontSize: "var(--text-sm)",
                              color: "var(--text-secondary)",
                            }}
                          >
                            {d}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        ))}

        {/* FAQ */}
        <section
          style={{
            padding: "5rem 0",
            borderBottom: "1px solid var(--border)",
          }}
        >
          <div className="container">
            <p className="label" style={{ marginBottom: "2rem" }}>
              Perguntas frequentes
            </p>
            <div style={{ maxWidth: "720px" }}>
              {[
                {
                  q: "Vocês trabalham com empresas de qual tamanho?",
                  a: "Principalmente com pequenas e médias empresas, prestadores de serviço, organizações educacionais e sociais, e empreendedores com uma ideia já minimamente definida. Não existe tamanho mínimo — existe problema real.",
                },
                {
                  q: "Qual é o tempo médio de um projeto?",
                  a: "Depende do escopo. Um MVP simples pode ser entregue em 4 a 8 semanas. Um sistema interno mais completo costuma levar de 2 a 4 meses. Definimos o prazo com base no escopo documentado, não em estimativas vagas.",
                },
                {
                  q: "Preciso saber de tecnologia para trabalhar com vocês?",
                  a: "Não. Nossa função é traduzir o problema do negócio em solução técnica. Você precisa conhecer sua operação — nós cuidamos do resto.",
                },
                {
                  q: "O código desenvolvido fica comigo?",
                  a: "Sim. Todo projeto é entregue com acesso ao repositório, histórico de versões e documentação básica. Você não fica dependente de uma única equipe para manter o sistema.",
                },
                {
                  q: "Vocês oferecem suporte depois da entrega?",
                  a: "Sim. Oferecemos planos de manutenção e evolução contínua. Um sistema entregue não é abandonado — a operação muda, o produto precisa acompanhar.",
                },
                {
                  q: "Como funciona o investimento?",
                  a: "Cada projeto tem escopo e orçamento definidos antes do início do desenvolvimento. Sem surpresas no meio do caminho. As faixas de investimento variam conforme complexidade e prazo — o diagnóstico é o primeiro passo para entender o que faz sentido para o seu caso.",
                },
              ].map((faq, i) => (
                <div
                  key={i}
                  style={{
                    padding: "1.5rem 0",
                    borderTop: "1px solid var(--border)",
                  }}
                >
                  <h3
                    style={{
                      fontSize: "var(--text-base)",
                      fontWeight: 600,
                      marginBottom: "0.625rem",
                      lineHeight: 1.4,
                    }}
                  >
                    {faq.q}
                  </h3>
                  <p
                    style={{
                      fontSize: "var(--text-sm)",
                      color: "var(--text-secondary)",
                      lineHeight: 1.75,
                    }}
                  >
                    {faq.a}
                  </p>
                </div>
              ))}
              <div style={{ borderTop: "1px solid var(--border)" }} />
            </div>
          </div>
        </section>

        {/* CTA final */}
        <section
          style={{
            padding: "5rem 0",
            backgroundColor: "var(--bg-secondary)",
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
              Qual desses problemas é o seu?
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
              Solicite um diagnóstico. Vamos entender o problema antes de
              propor qualquer solução.
            </p>
            <Link
              href="/contato"
              className="btn btn-primary btn-arrow"
              id="services-page-main-cta"
            >
              Solicitar diagnóstico
            </Link>
          </div>
        </section>
      </main>
      <Footer />

      <style>{`
        @media (max-width: 1023px) {
          .services-page-header { grid-template-columns: 1fr !important; }
          .service-detail-layout { grid-template-columns: 1fr !important; }
          .service-meta-grid { grid-template-columns: 1fr !important; gap: 2rem !important; }
        }
        @media (max-width: 767px) {
          .deliverables-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
