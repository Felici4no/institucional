import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

import { company } from "@/lib/company";

export const metadata: Metadata = {
  title: "Termos de Uso",
  description: "Termos e condições de uso dos serviços da empresa.",
  alternates: { canonical: "/termos-de-uso" },
};

export default function TermsPage() {
  return (
    <>
      <Header />
      <main
        id="main-content"
        style={{ paddingTop: "var(--header-h)", minHeight: "100vh" }}
      >
        <section style={{ padding: "5rem 0" }}>
          <div className="container">
            <div style={{ maxWidth: "720px" }}>
              <p className="label" style={{ marginBottom: "1rem" }}>
                Legal
              </p>
              <h1
                style={{
                  fontSize: "var(--text-4xl)",
                  fontWeight: 600,
                  letterSpacing: "-0.03em",
                  marginBottom: "3rem",
                  lineHeight: 1.1,
                }}
              >
                Termos de Uso
              </h1>

              <p
                style={{
                  fontSize: "var(--text-base)",
                  color: "var(--text-secondary)",
                  lineHeight: 1.75,
                }}
              >
                Os termos de uso de {company.name} regularão a relação entre
                a iniciativa e seus clientes, parceiros e visitantes. O documento
                completo será fornecido diretamente aos contratantes no início dos serviços.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
