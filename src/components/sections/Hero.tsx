"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { events } from "@/lib/analytics";

const capabilities = [
  "Desenvolvimento Web",
  "Aplicativos Mobile",
  "Sistemas Internos",
  "Arquitetura de Software",
  "Automação",
  "Integrações",
  "Inteligência Artificial",
  "Produto Digital",
  "Visualização de Dados",
];

export default function Hero() {
  const headlineRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const el = headlineRef.current;
    if (!el) return;
    el.style.opacity = "0";
    el.style.transform = "translateY(16px)";
    requestAnimationFrame(() => {
      el.style.transition = "opacity 0.7s ease, transform 0.7s ease";
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    });
  }, []);

  return (
    <section
      aria-label="Apresentação da empresa"
      style={{
        paddingTop: "calc(var(--header-h) + 5rem)",
        paddingBottom: "5rem",
        borderBottom: "1px solid var(--border)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Grid de fundo decorativo */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
          opacity: 0.35,
          pointerEvents: "none",
        }}
      />

      <div className="container" style={{ position: "relative" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "3rem",
            maxWidth: "900px",
          }}
        >
          {/* Label institucional */}
          <div
            className="animate-fadeUp"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1rem",
            }}
          >
            <span
              style={{
                display: "inline-block",
                width: "2rem",
                height: "1px",
                backgroundColor: "var(--text-secondary)",
              }}
            />
            <span className="label">
              Software · Automação · Inteligência Artificial
            </span>
          </div>

          {/* Headline */}
          <h1
            ref={headlineRef}
            className="text-hero text-balance"
            style={{
              maxWidth: "820px",
              marginTop: "-0.5rem",
            }}
          >
            Sistemas para empresas que não podem continuar operando no
            improviso.
          </h1>

          {/* Subheadline */}
          <p
            className="animate-fadeUp animate-delay-2"
            style={{
              fontSize: "var(--text-lg)",
              color: "var(--text-secondary)",
              lineHeight: 1.7,
              maxWidth: "560px",
            }}
          >
            Desenvolvemos aplicativos, plataformas e automações que organizam
            processos, reduzem trabalho manual e permitem que negócios cresçam
            com mais controle.
          </p>

          {/* CTAs */}
          <div
            className="animate-fadeUp animate-delay-3"
            style={{
              display: "flex",
              gap: "1rem",
              flexWrap: "wrap",
              alignItems: "center",
            }}
          >
            <Link
              href="/contato"
              className="btn btn-primary"
              id="hero-cta-primary"
              onClick={() => events.ctaHeroClick()}
            >
              Solicitar diagnóstico
            </Link>
            <Link
              href="/projetos"
              className="btn btn-outline"
              id="hero-cta-secondary"
              onClick={() => events.ctaSecondaryClick()}
            >
              Ver projetos
            </Link>
          </div>

          {/* Prova de credibilidade */}
          <div
            className="animate-fadeUp animate-delay-4"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1.5rem",
              flexWrap: "wrap",
              paddingTop: "1.5rem",
              borderTop: "1px solid var(--border)",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.25rem",
              }}
            >
              <span className="label">Entregues</span>
              <span
                style={{
                  fontSize: "var(--text-sm)",
                  color: "var(--text-secondary)",
                }}
              >
                Aplicativos, sistemas e plataformas para empresas, organizações
                e empreendedores.
              </span>
            </div>

            <div
              style={{
                width: "1px",
                height: "2rem",
                backgroundColor: "var(--border)",
              }}
            />

            <div>
              <span className="badge badge-active">
                <span
                  style={{
                    display: "inline-block",
                    width: "6px",
                    height: "6px",
                    borderRadius: "50%",
                    backgroundColor: "currentColor",
                  }}
                />
                Aceitando projetos
              </span>
            </div>
          </div>
        </div>

        {/* Capacidades — canto direito no desktop */}
        <aside
          aria-label="Capacidades técnicas"
          style={{
            position: "absolute",
            right: "var(--container-px)",
            top: "50%",
            transform: "translateY(-50%)",
            display: "flex",
            flexDirection: "column",
            gap: "0.5rem",
            borderLeft: "1px solid var(--border)",
            paddingLeft: "1.5rem",
          }}
          className="hero-aside"
        >
          {capabilities.map((cap) => (
            <span
              key={cap}
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "var(--text-xs)",
                color: "var(--text-tertiary)",
                letterSpacing: "0.04em",
              }}
            >
              {cap}
            </span>
          ))}
        </aside>
      </div>

      <style>{`
        @media (max-width: 1023px) {
          .hero-aside { display: none !important; }
        }
      `}</style>
    </section>
  );
}
