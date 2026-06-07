export type Achievement = {
  title: string;
  recognition: string;
  project: string;
  area: string;
  year?: string;
  description: string;
};

export const achievements: Achievement[] = [
  {
    title: "1º lugar no ElevenLabs Worldwide Hackathon São Paulo",
    recognition: "1º lugar mundial (SP)",
    project: "VOCULOS",
    area: "Acessibilidade e Integrações de IA",
    year: "2024",
    description: "Desenvolvimento de um protótipo de óculos de baixo custo acoplado a webcam e integrando serviços de voz e IA para facilitar a comunicação cotidiana entre pessoas surdas e ouvintes."
  },
  {
    title: "Vencedor do desafio Tech Mahindra",
    recognition: "Vencedor do desafio",
    project: "EcoSimulator 1.0",
    area: "Mobilidade e Visualização de Dados",
    description: "Desenvolvimento do EcoSimulator 1.0, sistema de simulação de impacto ambiental baseado em telemetria que compara a pegada ecológica de veículos elétricos e a combustão."
  },
  {
    title: "Projeto exposto no Latam Mobility 2025",
    recognition: "Apresentado publicamente",
    project: "EcoSimulator 1.0",
    area: "Mobilidade e Sustentabilidade",
    year: "2025",
    description: "Exposição pública e demonstração do EcoSimulator 1.0 para líderes e especialistas do setor de mobilidade urbana da América Latina."
  },
  {
    title: "Fundador do Talent Hack",
    recognition: "Iniciativa de Impacto",
    project: "Talent Hack",
    area: "Educação e Comunidade",
    description: "Criação de um modelo distribuído de hackathons e mentorias para alunos de escolas técnicas públicas, focado na descoberta de novos talentos e inserção no mercado de tecnologia."
  }
];
