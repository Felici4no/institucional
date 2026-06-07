export const company = {
  name: "Lucas Feliciano",
  role: "Engenharia de Software e Produto",
  email: "lucas.for.study.42@gmail.com",
  whatsapp: "", // Omitido por falta de número verificado (oculta blocos na UI)
  whatsappLink: "", // Omitido por falta de link verificado (oculta blocos na UI)
  location: "São Paulo, SP",
  responseTime: "Respondemos em até 1 dia útil",
  cnpj: "", // Omitido por falta de registro (oculta blocos na UI)
  legalName: "", // Omitido por falta de registro (oculta blocos na UI)
  linkedin: "", // Omitido por falta de perfil verificado (oculta blocos na UI)
};

export const isPlaceholder = (val: string | null | undefined): boolean => {
  if (!val) return true;
  const lower = val.toLowerCase();
  return (
    lower.includes("[") ||
    lower.includes("]") ||
    lower.includes("placeholder") ||
    lower.includes("x-") ||
    lower.includes("g-")
  );
};
