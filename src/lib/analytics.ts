// Utilitário de analytics — rastreia eventos de conversão
// Integrar com GA4 substituindo o PLACEHOLDER_GA4_ID

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

const GA4_ID = process.env.NEXT_PUBLIC_GA4_ID || "G-XXXXXXXXXX"; // [PLACEHOLDER: inserir ID real do GA4]

export function trackEvent(
  action: string,
  category: string,
  label?: string,
  value?: number
) {
  if (typeof window === "undefined" || !window.gtag) return;

  window.gtag("event", action, {
    event_category: category,
    event_label: label,
    value,
  });
}

// Eventos pré-definidos para conversão
export const events = {
  ctaHeroClick: () =>
    trackEvent("cta_click", "hero", "solicitar_diagnostico"),

  ctaSecondaryClick: () =>
    trackEvent("cta_click", "hero", "ver_projetos"),

  whatsappClick: (origin: string) =>
    trackEvent("whatsapp_click", "contato", origin),

  formOpen: () =>
    trackEvent("form_open", "diagnostico"),

  formSubmit: (investmentRange: string) =>
    trackEvent("form_submit", "diagnostico", investmentRange),

  formAbandon: () =>
    trackEvent("form_abandon", "diagnostico"),

  caseView: (caseSlug: string) =>
    trackEvent("case_view", "projetos", caseSlug),

  serviceCtaClick: (serviceId: string) =>
    trackEvent("service_cta_click", "servicos", serviceId),

  scrollDepth: (percentage: number) =>
    trackEvent("scroll_depth", "engajamento", `${percentage}%`, percentage),
};

export { GA4_ID };
