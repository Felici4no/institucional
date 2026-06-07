export type TeamMember = {
  slug: string;
  name: string;
  role: string;
  specialty: string;
  bio: string;
  linkedin: string;
  photo: string | null;
};

export const team: TeamMember[] = [
  {
    slug: "fundador-01",
    name: "[NOME DO FUNDADOR 1]",
    role: "Sócio · Produto e Engenharia",
    specialty:
      "Desenvolvimento web, sistemas internos e arquitetura de produto",
    bio: "[Texto profissional a ser fornecido pelo fundador. Deve cobrir formação, projetos relevantes e área de atuação principal.]",
    linkedin: "https://linkedin.com/in/[PLACEHOLDER]",
    photo: null,
  },
  {
    slug: "fundador-02",
    name: "[NOME DO FUNDADOR 2]",
    role: "Sócio · Engenharia e Automação",
    specialty: "Automação, integrações, aplicativos mobile e IA aplicada",
    bio: "[Texto profissional a ser fornecido pelo fundador. Deve cobrir formação, projetos relevantes e área de atuação principal.]",
    linkedin: "https://linkedin.com/in/[PLACEHOLDER]",
    photo: null,
  },
];

export type ContentPost = {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  date: string;
};

export const posts: ContentPost[] = [
  {
    slug: "quando-um-negocio-precisa-de-sistema",
    category: "Produto",
    title: "Quando uma operação realmente precisa de um sistema",
    excerpt:
      "Nem todo processo vira software. Mas quando vira, a diferença é de uma operação que depende de pessoas específicas para uma que funciona com qualquer equipe.",
    date: "2024-01",
  },
  {
    slug: "mvp-o-que-nao-pode-faltar",
    category: "Software",
    title: "MVP não é versão ruim de produto",
    excerpt:
      "O primeiro lançamento define o ritmo de tudo que vem depois. O que priorizamos, o que adiamos e por quê — uma perspectiva de quem construiu produtos com restrições reais.",
    date: "2024-02",
  },
  {
    slug: "automacao-para-pmes",
    category: "Automação",
    title: "Automação sem exagero: o que PMEs realmente conseguem fazer hoje",
    excerpt:
      "IA não resolve tudo. Mas alguns processos repetitivos, quando automatizados corretamente, mudam a capacidade operacional de uma empresa sem precisar contratar mais pessoas.",
    date: "2024-03",
  },
];

export const contact = {
  email: "[EMAIL-COMERCIAL@EMPRESA.COM.BR]",
  whatsapp: "[NÚMERO COM DDD]",
  whatsappLink: "https://wa.me/[NÚMERO]",
  location: "São Paulo, SP",
  responseTime: "Respondemos em até 1 dia útil",
};
