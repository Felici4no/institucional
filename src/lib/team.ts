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
    slug: "lucas-feliciano",
    name: "Lucas Feliciano",
    role: "Sócio responsável por Produto e Engenharia",
    specialty: "Desenvolvimento de software, arquitetura de sistemas e produto digital",
    bio: "Lucas Feliciano atua em engenharia de software, arquitetura de sistemas e produto digital. Possui formação em Engenharia de Software pela FIAP e estudos complementares em arquitetura de serviços e APIs, aplicações mobile, branding, automação, blockchain e infraestrutura em nuvem. Desenvolveu plataformas comerciais, sistemas de dados e protótipos premiados, incluindo projetos reconhecidos pela ElevenLabs e Tech Mahindra e apresentados no Latam Mobility.",
    linkedin: "", // Omitido por ser placeholder (será oculto na UI)
    photo: null,
  }
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
