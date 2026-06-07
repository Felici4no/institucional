"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState, useEffect } from "react";
import { events } from "@/lib/analytics";

const schema = z.object({
  name: z.string().min(2, "Informe seu nome completo"),
  company: z.string().min(2, "Informe o nome da empresa"),
  role: z.string().min(2, "Informe seu cargo"),
  email: z.string().email("E-mail inválido"),
  whatsapp: z.string().min(10, "Informe um número com DDD"),
  solutionType: z.string().min(1, "Selecione o tipo de solução"),
  problem: z.string().min(30, "Descreva o problema com mais detalhes (mínimo 30 caracteres)"),
  currentProcess: z.string().min(20, "Descreva como o processo funciona atualmente"),
  deadline: z.string().min(1, "Selecione um prazo"),
  investmentRange: z.string().min(1, "Selecione uma faixa de investimento"),
  howFound: z.string().min(1, "Selecione como conheceu a empresa"),
});

type FormData = z.infer<typeof schema>;

export default function DiagnosticForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [formTracked, setFormTracked] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isDirty },
    watch,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  // Rastrear abertura do formulário
  useEffect(() => {
    events.formOpen();
  }, []);

  // Rastrear abandono
  useEffect(() => {
    if (!isDirty) return;
    const handleBeforeUnload = () => {
      if (!submitted) events.formAbandon();
    };
    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => window.removeEventListener("beforeunload", handleBeforeUnload);
  }, [isDirty, submitted]);

  const investmentRange = watch("investmentRange");

  const onSubmit = async (data: FormData) => {
    setSubmitting(true);
    try {
      // TODO: Integrar com backend / CRM / n8n / Make / Zapier
      // Por enquanto, simula envio
      await new Promise((res) => setTimeout(res, 1500));
      events.formSubmit(data.investmentRange);
      setSubmitted(true);
    } catch {
      // Fallback: abrir e-mail
      const subject = encodeURIComponent(`Diagnóstico: ${data.name} — ${data.company}`);
      const body = encodeURIComponent(
        `Nome: ${data.name}\nEmpresa: ${data.company}\nCargo: ${data.role}\nE-mail: ${data.email}\nWhatsApp: ${data.whatsapp}\n\nProblema:\n${data.problem}\n\nProcesso atual:\n${data.currentProcess}\n\nPrazo: ${data.deadline}\nInvestimento: ${data.investmentRange}\nComo encontrou: ${data.howFound}`
      );
      window.location.href = `mailto:[EMAIL-COMERCIAL@EMPRESA.COM.BR]?subject=${subject}&body=${body}`;
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div
        style={{
          padding: "3rem",
          border: "1px solid var(--border)",
          textAlign: "left",
        }}
      >
        <p
          className="label"
          style={{ marginBottom: "1rem", color: "var(--success)" }}
        >
          Recebido
        </p>
        <h2
          style={{
            fontSize: "var(--text-2xl)",
            fontWeight: 600,
            letterSpacing: "-0.02em",
            marginBottom: "0.75rem",
          }}
        >
          Diagnóstico recebido com sucesso.
        </h2>
        <p
          style={{
            fontSize: "var(--text-base)",
            color: "var(--text-secondary)",
            lineHeight: 1.7,
            marginBottom: "1.5rem",
          }}
        >
          Retornaremos em até 1 dia útil com os próximos passos. Se preferir,
          pode entrar em contato diretamente pelo WhatsApp.
        </p>
        <a
          href="[WHATSAPP-LINK]"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-outline btn-arrow"
        >
          Falar pelo WhatsApp
        </a>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "2rem",
      }}
    >
      {/* Dados de contato */}
      <fieldset style={{ border: "none", padding: 0 }}>
        <legend
          className="label"
          style={{ display: "block", marginBottom: "1.5rem" }}
        >
          Dados de contato
        </legend>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "1.25rem",
          }}
          className="form-grid-2"
        >
          <div className="form-field">
            <label htmlFor="name" className="form-label">
              Nome completo *
            </label>
            <input
              id="name"
              type="text"
              autoComplete="name"
              className={`form-input${errors.name ? " error" : ""}`}
              {...register("name")}
            />
            {errors.name && (
              <span className="form-error">{errors.name.message}</span>
            )}
          </div>

          <div className="form-field">
            <label htmlFor="company" className="form-label">
              Empresa *
            </label>
            <input
              id="company"
              type="text"
              autoComplete="organization"
              className={`form-input${errors.company ? " error" : ""}`}
              {...register("company")}
            />
            {errors.company && (
              <span className="form-error">{errors.company.message}</span>
            )}
          </div>

          <div className="form-field">
            <label htmlFor="role" className="form-label">
              Cargo *
            </label>
            <input
              id="role"
              type="text"
              autoComplete="organization-title"
              className={`form-input${errors.role ? " error" : ""}`}
              {...register("role")}
            />
            {errors.role && (
              <span className="form-error">{errors.role.message}</span>
            )}
          </div>

          <div className="form-field">
            <label htmlFor="email" className="form-label">
              E-mail *
            </label>
            <input
              id="email"
              type="email"
              autoComplete="email"
              className={`form-input${errors.email ? " error" : ""}`}
              {...register("email")}
            />
            {errors.email && (
              <span className="form-error">{errors.email.message}</span>
            )}
          </div>

          <div className="form-field">
            <label htmlFor="whatsapp" className="form-label">
              WhatsApp (com DDD) *
            </label>
            <input
              id="whatsapp"
              type="tel"
              autoComplete="tel"
              placeholder="(11) 99999-9999"
              className={`form-input${errors.whatsapp ? " error" : ""}`}
              {...register("whatsapp")}
            />
            {errors.whatsapp && (
              <span className="form-error">{errors.whatsapp.message}</span>
            )}
          </div>

          <div className="form-field">
            <label htmlFor="solutionType" className="form-label">
              Tipo de solução *
            </label>
            <select
              id="solutionType"
              className={`form-input${errors.solutionType ? " error" : ""}`}
              {...register("solutionType")}
            >
              <option value="">Selecione...</option>
              <option value="mvp">MVP ou produto digital novo</option>
              <option value="sistema">Sistema interno / plataforma</option>
              <option value="automacao">Automação ou IA</option>
              <option value="site">Site institucional ou comercial</option>
              <option value="integracao">Integração entre ferramentas</option>
              <option value="nao-sei">Ainda não sei — preciso de orientação</option>
            </select>
            {errors.solutionType && (
              <span className="form-error">{errors.solutionType.message}</span>
            )}
          </div>
        </div>
      </fieldset>

      {/* Sobre o projeto */}
      <fieldset style={{ border: "none", padding: 0 }}>
        <legend
          className="label"
          style={{ display: "block", marginBottom: "1.5rem" }}
        >
          Sobre o projeto
        </legend>
        <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
          <div className="form-field">
            <label htmlFor="problem" className="form-label">
              Que problema você quer resolver? *
            </label>
            <textarea
              id="problem"
              rows={4}
              placeholder="Descreva o problema que sua empresa enfrenta. Não precisa ser técnico — foque no que está atrapalhando a operação."
              className={`form-input${errors.problem ? " error" : ""}`}
              {...register("problem")}
            />
            {errors.problem && (
              <span className="form-error">{errors.problem.message}</span>
            )}
          </div>

          <div className="form-field">
            <label htmlFor="currentProcess" className="form-label">
              Como esse processo funciona hoje? *
            </label>
            <textarea
              id="currentProcess"
              rows={3}
              placeholder="Ex: Usamos uma planilha no Google Sheets que três pessoas acessam simultaneamente..."
              className={`form-input${errors.currentProcess ? " error" : ""}`}
              {...register("currentProcess")}
            />
            {errors.currentProcess && (
              <span className="form-error">{errors.currentProcess.message}</span>
            )}
          </div>
        </div>
      </fieldset>

      {/* Contexto comercial */}
      <fieldset style={{ border: "none", padding: 0 }}>
        <legend
          className="label"
          style={{ display: "block", marginBottom: "1.5rem" }}
        >
          Contexto comercial
        </legend>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gap: "1.25rem",
          }}
          className="form-grid-3"
        >
          <div className="form-field">
            <label htmlFor="deadline" className="form-label">
              Prazo desejado *
            </label>
            <select
              id="deadline"
              className={`form-input${errors.deadline ? " error" : ""}`}
              {...register("deadline")}
            >
              <option value="">Selecione...</option>
              <option value="urgente">Urgente — menos de 1 mês</option>
              <option value="1-3m">1 a 3 meses</option>
              <option value="3-6m">3 a 6 meses</option>
              <option value="6m+">Acima de 6 meses</option>
              <option value="nao-definido">Ainda não definido</option>
            </select>
            {errors.deadline && (
              <span className="form-error">{errors.deadline.message}</span>
            )}
          </div>

          <div className="form-field">
            <label htmlFor="investmentRange" className="form-label">
              Faixa de investimento *
            </label>
            <select
              id="investmentRange"
              className={`form-input${errors.investmentRange ? " error" : ""}`}
              {...register("investmentRange")}
            >
              <option value="">Selecione...</option>
              <option value="ate-5k">Até R$ 5 mil</option>
              <option value="5k-10k">R$ 5 mil a R$ 10 mil</option>
              <option value="10k-20k">R$ 10 mil a R$ 20 mil</option>
              <option value="20k-50k">R$ 20 mil a R$ 50 mil</option>
              <option value="50k+">Acima de R$ 50 mil</option>
              <option value="nao-sei">Ainda preciso entender</option>
            </select>
            {errors.investmentRange && (
              <span className="form-error">{errors.investmentRange.message}</span>
            )}
          </div>

          <div className="form-field">
            <label htmlFor="howFound" className="form-label">
              Como nos encontrou? *
            </label>
            <select
              id="howFound"
              className={`form-input${errors.howFound ? " error" : ""}`}
              {...register("howFound")}
            >
              <option value="">Selecione...</option>
              <option value="indicacao">Indicação</option>
              <option value="busca">Busca no Google</option>
              <option value="linkedin">LinkedIn</option>
              <option value="instagram">Instagram</option>
              <option value="evento">Evento ou networking</option>
              <option value="outro">Outro</option>
            </select>
            {errors.howFound && (
              <span className="form-error">{errors.howFound.message}</span>
            )}
          </div>
        </div>
      </fieldset>

      {/* Nota sobre investimento */}
      {investmentRange && investmentRange !== "nao-sei" && (
        <div
          style={{
            padding: "1rem",
            border: "1px solid var(--border)",
            backgroundColor: "var(--bg-secondary)",
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "var(--text-xs)",
              color: "var(--text-secondary)",
              lineHeight: 1.6,
            }}
          >
            {investmentRange === "ate-5k"
              ? "Projetos abaixo de R$ 5 mil geralmente são viáveis para sites ou automações pontuais. Sistemas mais completos costumam exigir mais investimento. Vamos alinhar na conversa."
              : "Faixa compatível com a maioria dos projetos que desenvolvemos. Vamos confirmar escopo e estimativa na primeira conversa."}
          </p>
        </div>
      )}

      {/* Submit */}
      <div>
        <button
          type="submit"
          className="btn btn-primary"
          disabled={submitting}
          id="form-submit-btn"
          style={{
            width: "100%",
            justifyContent: "center",
            opacity: submitting ? 0.7 : 1,
          }}
        >
          {submitting ? "Enviando..." : "Enviar diagnóstico →"}
        </button>
        <p
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "var(--text-xs)",
            color: "var(--text-tertiary)",
            marginTop: "0.875rem",
            textAlign: "center",
          }}
        >
          Seus dados são tratados com confidencialidade. Não compartilhamos informações com terceiros.
        </p>
      </div>

      <style>{`
        @media (max-width: 767px) {
          .form-grid-2 { grid-template-columns: 1fr !important; }
          .form-grid-3 { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </form>
  );
}
