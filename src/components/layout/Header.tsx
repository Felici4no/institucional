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
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

          {/* CTA Desktop */}
          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }} className="hidden-mobile">
            <Link
              href="/contato"
              className="btn btn-primary"
              onClick={() => events.ctaHeroClick()}
              id="header-cta"
            >
              Solicitar diagnóstico
            </Link>
          </div>
        </div>
      </header>

      <style>{`
        @media (max-width: 767px) {
          .hidden-mobile { display: none !important; }
        }
      `}</style>
    </>
  );
}

