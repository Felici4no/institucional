export type Credential = {
  title: string;
  issuer: string;
  issuedAt: string; // "Janeiro de 2026", etc.
  category: "main" | "architecture" | "product" | "blockchain" | "cloud" | "foundations" | "leadership";
  skills: string[];
  credentialUrl?: string;
  featured: boolean;
  visibility: "public" | "private";
};

export const credentials: Credential[] = [
  {
    title: "Formação em Engenharia de Software",
    issuer: "FIAP",
    issuedAt: "Janeiro de 2026",
    category: "main",
    skills: ["Engenharia de Software", "Desenvolvimento de Sistemas"],
    featured: true,
    visibility: "public"
  },
  {
    title: "Services Architecture / API / Mobile Architecture",
    issuer: "FIAP",
    issuedAt: "Dezembro de 2025",
    category: "architecture",
    skills: ["Arquitetura de Serviços", "APIs", "Aplicações Mobile", "Integração de Sistemas"],
    featured: true,
    visibility: "public"
  },
  {
    title: "Branding Analytics",
    issuer: "FIAP",
    issuedAt: "2025",
    category: "product",
    skills: ["Produto", "Branding", "Experiência"],
    featured: false,
    visibility: "public"
  },
  {
    title: "Design Thinking",
    issuer: "FIAP",
    issuedAt: "2025",
    category: "product",
    skills: ["Design Thinking", "Branding", "Experiência"],
    featured: false,
    visibility: "public"
  },
  {
    title: "Roteiro para Multimídia",
    issuer: "FIAP",
    issuedAt: "2025",
    category: "product",
    skills: ["Branding", "Experiência", "Comunicação Digital"],
    featured: false,
    visibility: "public"
  },
  {
    title: "Blockchain",
    issuer: "FIAP",
    issuedAt: "2025",
    category: "blockchain",
    skills: ["Blockchain", "Sistemas Descentralizados"],
    featured: false,
    visibility: "public"
  },
  {
    title: "Blockchain Advanced",
    issuer: "FIAP",
    issuedAt: "2025",
    category: "blockchain",
    skills: ["Blockchain Advanced", "Sistemas Descentralizados"],
    featured: false,
    visibility: "public"
  },
  {
    title: "Blockchain e Solidity: Smart Contracts e Tokens",
    issuer: "Alura",
    issuedAt: "2025",
    category: "blockchain",
    skills: ["Solidity", "Smart Contracts", "Tokens", "Carteiras Digitais"],
    featured: false,
    visibility: "public"
  },
  {
    title: "Introdução à AWS: Computação em Nuvem",
    issuer: "LinkedIn",
    issuedAt: "2025",
    category: "cloud",
    skills: ["Infraestrutura em Nuvem", "AWS"],
    featured: false,
    visibility: "public"
  },
  {
    title: "Formação Engenharia de Software",
    issuer: "Alura",
    issuedAt: "2024",
    category: "foundations",
    skills: ["Fundamentos de Codificação"],
    featured: false,
    visibility: "public"
  },
  {
    title: "Fundamentos para Desenvolvimento de Software",
    issuer: "Microsoft & LinkedIn",
    issuedAt: "2024",
    category: "foundations",
    skills: ["Fundamentos de Codificação"],
    featured: false,
    visibility: "public"
  },
  {
    title: "Fundamentos de Programação: Bancos de Dados",
    issuer: "LinkedIn",
    issuedAt: "2024",
    category: "foundations",
    skills: ["Banco de Dados"],
    featured: false,
    visibility: "public"
  },
  {
    title: "Formação Linguagem C",
    issuer: "Alura",
    issuedAt: "2024",
    category: "foundations",
    skills: ["Linguagem C"],
    featured: false,
    visibility: "public"
  },
  {
    title: "Curso de JavaScript",
    issuer: "Curso em Vídeo",
    issuedAt: "2024",
    category: "foundations",
    skills: ["JavaScript"],
    featured: false,
    visibility: "public"
  },
  {
    title: "Fundamentos de Codificação",
    issuer: "Google Grasshopper",
    issuedAt: "2023",
    category: "foundations",
    skills: ["Lógica de Programação"],
    featured: false,
    visibility: "public"
  },
  {
    title: "Formação Autoliderança",
    issuer: "Alura",
    issuedAt: "2024",
    category: "leadership",
    skills: ["Liderança", "Desenvolvimento Pessoal"],
    featured: false,
    visibility: "public"
  },
  {
    title: "Formação Social e Sustentabilidade",
    issuer: "FIAP",
    issuedAt: "2025",
    category: "leadership",
    skills: ["Sustentabilidade", "Impacto Social"],
    featured: false,
    visibility: "public"
  }
];
