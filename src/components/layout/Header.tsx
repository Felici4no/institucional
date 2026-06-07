"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { events } from "@/lib/analytics";

const navLinks = [
  { label: "O que fazemos", href: "/#servicos" },
  { label: "Projetos", href: "/projetos" },
  { label: "Como trabalhamos", href: "/#processo" },
  { label: "Empresa", href: "/sobre" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Fechar menu ao navegar
  const handleNavClick = () => setMenuOpen(false);

  return (
    <>
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          height: "var(--header-h)",
          backgroundColor: scrolled
            ? "rgba(247, 247, 242, 0.95)"
            : "var(--bg-primary)",
          borderBottom: "1px solid var(--border)",
          backdropFilter: scrolled ? "blur(8px)" : "none",
          transition: "background-color 0.3s ease, backdrop-filter 0.3s ease",
        }}
      >
        <div
          className="container"
          style={{
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* Logo */}
          <Link
            href="/"
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "var(--text-sm)",
              fontWeight: 500,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "var(--text-primary)",
            }}
            aria-label="[NOME DA EMPRESA] — Página inicial"
          >
            [EMPRESA]
          </Link>

          {/* Nav desktop */}
          <nav
            aria-label="Navegação principal"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "2rem",
            }}
            className="hidden-mobile"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "var(--text-sm)",
                  fontWeight: 400,
                  color: "var(--text-secondary)",
                  transition: "color var(--transition-fast)",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "var(--text-primary)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "var(--text-secondary)")
                }
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA + Mobile */}
          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <Link
              href="/contato"
              className="btn btn-primary hidden-mobile"
              onClick={() => events.ctaHeroClick()}
              id="header-cta"
            >
              Solicitar diagnóstico
            </Link>

            {/* Botão mobile */}
            <button
              aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              onClick={() => setMenuOpen(!menuOpen)}
              style={{
                display: "none",
                flexDirection: "column",
                gap: "5px",
                padding: "0.5rem",
                background: "none",
                border: "none",
                cursor: "pointer",
              }}
              className="show-mobile"
            >
              <span
                style={{
                  display: "block",
                  width: "22px",
                  height: "1px",
                  backgroundColor: "var(--text-primary)",
                  transition: "transform 0.2s ease, opacity 0.2s ease",
                  transform: menuOpen
                    ? "translateY(6px) rotate(45deg)"
                    : "none",
                }}
              />
              <span
                style={{
                  display: "block",
                  width: "22px",
                  height: "1px",
                  backgroundColor: "var(--text-primary)",
                  transition: "opacity 0.2s ease",
                  opacity: menuOpen ? 0 : 1,
                }}
              />
              <span
                style={{
                  display: "block",
                  width: "22px",
                  height: "1px",
                  backgroundColor: "var(--text-primary)",
                  transition: "transform 0.2s ease, opacity 0.2s ease",
                  transform: menuOpen
                    ? "translateY(-6px) rotate(-45deg)"
                    : "none",
                }}
              />
            </button>
          </div>
        </div>
      </header>

      {/* Menu mobile */}
      <div
        id="mobile-menu"
        aria-hidden={!menuOpen}
        style={{
          position: "fixed",
          top: "var(--header-h)",
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "var(--bg-primary)",
          zIndex: 99,
          display: "flex",
          flexDirection: "column",
          padding: "2rem var(--container-px)",
          borderTop: "1px solid var(--border)",
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? "auto" : "none",
          transition: "opacity 0.2s ease",
        }}
      >
        <nav
          style={{ display: "flex", flexDirection: "column", gap: "0" }}
          aria-label="Menu mobile"
        >
          {navLinks.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={handleNavClick}
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "var(--text-2xl)",
                fontWeight: 600,
                color: "var(--text-primary)",
                padding: "1rem 0",
                borderBottom: "1px solid var(--border)",
                letterSpacing: "-0.02em",
              }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div style={{ marginTop: "2rem" }}>
          <Link
            href="/contato"
            className="btn btn-primary"
            onClick={() => {
              handleNavClick();
              events.ctaHeroClick();
            }}
            id="mobile-cta"
            style={{ width: "100%", justifyContent: "center" }}
          >
            Solicitar diagnóstico
          </Link>
        </div>

        <div
          style={{
            marginTop: "auto",
            paddingTop: "2rem",
            borderTop: "1px solid var(--border)",
          }}
        >
          <p className="label" style={{ marginBottom: "0.5rem" }}>
            Contato
          </p>
          <a
            href="mailto:[EMAIL-COMERCIAL@EMPRESA.COM.BR]"
            style={{
              fontSize: "var(--text-sm)",
              color: "var(--text-secondary)",
            }}
          >
            [EMAIL-COMERCIAL@EMPRESA.COM.BR]
          </a>
        </div>
      </div>

      <style>{`
        @media (max-width: 767px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: flex !important; }
        }
        @media (min-width: 768px) {
          .show-mobile { display: none !important; }
          .hidden-mobile { display: flex !important; }
        }
      `}</style>
    </>
  );
}
