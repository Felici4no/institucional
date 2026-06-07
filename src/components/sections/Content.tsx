import Link from "next/link";
import { posts } from "@/lib/team";

export default function Content() {
  return (
    <section
      id="conteudo"
      aria-labelledby="content-heading"
      className="section"
      style={{
        backgroundColor: "var(--bg-secondary)",
        borderBottom: "1px solid var(--border)",
      }}
    >
      <div className="container">
        {/* Cabeçalho */}
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            justifyContent: "space-between",
            marginBottom: "3rem",
            flexWrap: "wrap",
            gap: "1rem",
          }}
        >
          <div>
            <p className="label" style={{ marginBottom: "1rem" }}>
              Pensamento
            </p>
            <h2
              id="content-heading"
              style={{
                fontSize: "var(--text-3xl)",
                fontWeight: 600,
                letterSpacing: "-0.02em",
                lineHeight: 1.2,
              }}
            >
              Do que estamos pensando.
            </h2>
          </div>
          <Link
            href="/blog"
            className="btn btn-ghost btn-arrow"
            id="content-all-link"
          >
            Ver todos os artigos
          </Link>
        </div>

        {/* Posts */}
        <div>
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              style={{ display: "block" }}
            >
              <article
                style={{
                  display: "grid",
                  gridTemplateColumns: "120px 1fr auto",
                  gap: "2rem",
                  padding: "1.75rem 0",
                  borderTop: "1px solid var(--border)",
                  alignItems: "center",
                  cursor: "pointer",
                  transition: "all var(--transition-fast)",
                }}
                className="content-card"
              >
                <div>
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "var(--text-xs)",
                      color: "var(--text-tertiary)",
                    }}
                  >
                    {post.date}
                  </span>
                  <br />
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "var(--text-xs)",
                      color: "var(--text-secondary)",
                      border: "1px solid var(--border)",
                      padding: "0.15rem 0.4rem",
                      display: "inline-block",
                      marginTop: "0.5rem",
                    }}
                  >
                    {post.category}
                  </span>
                </div>

                <div>
                  <h3
                    style={{
                      fontSize: "var(--text-lg)",
                      fontWeight: 600,
                      letterSpacing: "-0.01em",
                      marginBottom: "0.375rem",
                      lineHeight: 1.3,
                    }}
                  >
                    {post.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "var(--text-sm)",
                      color: "var(--text-secondary)",
                      lineHeight: 1.6,
                    }}
                  >
                    {post.excerpt}
                  </p>
                </div>

                <span
                  style={{
                    color: "var(--text-tertiary)",
                    fontSize: "var(--text-xl)",
                  }}
                >
                  →
                </span>
              </article>
            </Link>
          ))}
          <div style={{ borderTop: "1px solid var(--border)" }} />
        </div>
      </div>

      <style>{`
        @media (max-width: 767px) {
          .content-card { grid-template-columns: 1fr !important; }
          .content-card > div:last-child { display: none; }
        }
      `}</style>
    </section>
  );
}
