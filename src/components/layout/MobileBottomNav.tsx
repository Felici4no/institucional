"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  {
    label: "Início",
    href: "/",
    // Home match exact path
    isActive: (pathname: string) => pathname === "/",
    icon: (
      <svg
        viewBox="0 0 24 24"
        width="20"
        height="20"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
  {
    label: "Serviços",
    href: "/servicos",
    isActive: (pathname: string) => pathname.startsWith("/servicos"),
    icon: (
      <svg
        viewBox="0 0 24 24"
        width="20"
        height="20"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <rect x="3" y="3" width="7" height="9" />
        <rect x="14" y="3" width="7" height="5" />
        <rect x="14" y="12" width="7" height="9" />
        <rect x="3" y="16" width="7" height="5" />
      </svg>
    ),
  },
  {
    label: "Projetos",
    href: "/projetos",
    isActive: (pathname: string) => pathname.startsWith("/projetos"),
    icon: (
      <svg
        viewBox="0 0 24 24"
        width="20"
        height="20"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
      </svg>
    ),
  },
  {
    label: "Contato",
    href: "/contato",
    isActive: (pathname: string) => pathname.startsWith("/contato"),
    icon: (
      <svg
        viewBox="0 0 24 24"
        width="20"
        height="20"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
  },
];

export default function MobileBottomNav() {
  const pathname = usePathname();

  return (
    <>
      <nav
        aria-label="Navegação inferior móvel"
        className="mobile-nav-container"
        style={{
          position: "fixed",
          bottom: "calc(0.75rem + env(safe-area-inset-bottom))",
          left: "0.75rem",
          right: "0.75rem",
          zIndex: 999,
          // Glassmorphism default
          backgroundColor: "rgba(247, 247, 242, 0.85)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          border: "1px solid rgba(17, 17, 17, 0.08)",
          borderRadius: "8px",
          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.04), 0 2px 8px rgba(0, 0, 0, 0.02)",
          padding: "0.375rem",
          maxWidth: "480px",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <ul
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            listStyle: "none",
            margin: 0,
            padding: 0,
            width: "100%",
          }}
        >
          {navItems.map((item) => {
            const active = item.isActive(pathname);
            return (
              <li key={item.href} style={{ flex: 1, textAlign: "center" }}>
                <Link
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "2px",
                    padding: "6px 0",
                    minHeight: "48px",
                    width: "100%",
                    borderRadius: "6px",
                    color: active ? "var(--text-primary)" : "var(--text-secondary)",
                    backgroundColor: active ? "rgba(17, 17, 17, 0.05)" : "transparent",
                    transition: "background-color 0.2s ease, color 0.2s ease",
                    textDecoration: "none",
                  }}
                >
                  <span
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: active ? "var(--text-primary)" : "var(--text-secondary)",
                      transition: "transform 0.2s ease",
                    }}
                  >
                    {item.icon}
                  </span>
                  <span
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "10px",
                      fontWeight: active ? 600 : 400,
                      letterSpacing: "0.01em",
                      lineHeight: 1,
                    }}
                  >
                    {item.label}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Fallback CSS para backdrop-filter & ocultamento no desktop */}
      <style>{`
        /* Oculta no desktop */
        @media (min-width: 768px) {
          .mobile-nav-container {
            display: none !important;
          }
        }
        
        /* Fallback para navegadores sem suporte a backdrop-filter */
        @supports not (backdrop-filter: blur(1px)) {
          .mobile-nav-container {
            background-color: #f7f7f2 !important;
            border: 1px solid var(--border) !important;
          }
        }
        
        /* Prevenir scroll shift em redução de movimentos */
        @media (prefers-reduced-motion: reduce) {
          .mobile-nav-container a {
            transition: none !important;
          }
        }
      `}</style>
    </>
  );
}
