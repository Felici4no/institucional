export type Case = {
  slug: string;
  number: string;
  category: string;
  client: string;
  headline: string;
  context: string;
  problem: string;
  solution: string;
  scope: string[];
  duration: string;
  result: string;
  status: string;
  statusType: "active" | "neutral";
  technologies: string[];
  featured: boolean;
};

export const cases: Case[] = [
  {
    slug: "caso-01",
    number: "01",
    category: "Plataforma Mobile",
    client: "[PLACEHOLDER — cliente autorizado a ser divulgado]",
    headline: "Aplicativo para organização de operação de campo",
    context:
      "Empresa com equipe distribuída dependia de mensagens de WhatsApp e anotações em papel para coordenar atividades diárias. O gestor não tinha visibilidade em tempo real do que estava sendo executado.",
    problem:
      "Sem um sistema central, erros se repetiam, tarefas ficavam sem responsável definido e a operação dependia de poucos profissionais que conheciam os processos.",
    solution:
      "Aplicativo mobile com painel administrativo web. Cada colaborador acessa suas tarefas, registra execução e envia evidências. O gestor acompanha tudo em tempo real.",
    scope: [
      "Descoberta e mapeamento de processos",
      "Design de experiência (UX/UI)",
      "Aplicativo iOS e Android",
      "Painel administrativo web",
      "Sistema de autenticação",
      "Notificações push",
      "Relatórios de atividade",
      "Implantação e treinamento",
    ],
    duration: "[PLACEHOLDER — duração do projeto]",
    result:
      "Processo centralizado em uma única plataforma. Equipe habilitada a operar de forma autônoma. Gestor com visibilidade completa da operação.",
    status: "Implantado",
    statusType: "active",
    technologies: ["React Native", "Next.js", "Node.js", "PostgreSQL"],
    featured: true,
  },
  {
    slug: "caso-02",
    number: "02",
    category: "Sistema Interno",
    client: "[PLACEHOLDER — cliente autorizado a ser divulgado]",
    headline: "Sistema de gestão para prestador de serviços",
    context:
      "Prestador de serviços gerenciava contratos, clientes e pagamentos em planilhas separadas. Nenhuma das ferramentas se comunicava.",
    problem:
      "Informações fragmentadas levavam a erros de faturamento, esquecimento de renovações e dificuldade em visualizar a saúde financeira do negócio.",
    solution:
      "Plataforma web centralizada com módulos de clientes, contratos, tarefas, faturamento e relatórios financeiros integrados.",
    scope: [
      "Levantamento de requisitos",
      "Modelagem de dados",
      "Interface administrativa",
      "Módulo de clientes e contratos",
      "Controle de pagamentos",
      "Relatórios e dashboards",
      "Integração com ferramentas existentes",
    ],
    duration: "[PLACEHOLDER — duração do projeto]",
    result:
      "Operação centralizada. Redução de etapas manuais. Visibilidade financeira em tempo real.",
    status: "Implantado",
    statusType: "active",
    technologies: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
    featured: true,
  },
  {
    slug: "caso-03",
    number: "03",
    category: "Automação e IA Aplicada",
    client: "[PLACEHOLDER — cliente autorizado a ser divulgado]",
    headline: "Automação de atendimento e triagem comercial",
    context:
      "Empresa recebia dezenas de mensagens diárias no WhatsApp sem processo definido de triagem. A equipe comercial perdia tempo com leads desqualificados.",
    problem:
      "Atendimento manual e desorganizado gerava atrasos, respostas inconsistentes e impossibilidade de escalar o volume de contatos sem contratar mais pessoas.",
    solution:
      "Agente de atendimento automatizado integrado ao WhatsApp Business com triagem inteligente, qualificação de leads e encaminhamento para a equipe humana.",
    scope: [
      "Mapeamento do fluxo de atendimento",
      "Definição de critérios de qualificação",
      "Desenvolvimento do agente conversacional",
      "Integração com WhatsApp Business API",
      "Painel de acompanhamento de conversas",
      "Transição suave para atendimento humano",
    ],
    duration: "[PLACEHOLDER — duração do projeto]",
    result:
      "Triagem automatizada de leads. Equipe humana atende apenas oportunidades qualificadas. Primeira versão implantada e em operação.",
    status: "Em operação",
    statusType: "active",
    technologies: ["Python", "Node.js", "WhatsApp Business API", "PostgreSQL"],
    featured: true,
  },
];

export function getCaseBySlug(slug: string): Case | undefined {
  return cases.find((c) => c.slug === slug);
}

export function getFeaturedCases(): Case[] {
  return cases.filter((c) => c.featured);
}
