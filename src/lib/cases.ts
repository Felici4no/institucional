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
  group: "commercial" | "innovation" | "laboratory";
  recognition?: string;
};

export const cases: Case[] = [
  {
    slug: "dolarizando-se",
    number: "01",
    category: "Plataforma de Onboarding e Gestão",
    client: "Serviço Internacional",
    headline: "Plataforma de onboarding e gestão de documentos para profissionais remotos",
    context:
      "Profissionais brasileiros trabalhando remotamente para empresas no exterior necessitam de caminhos estruturados para abertura de empresa e gestão financeira.",
    problem:
      "A operação corporativa envolve alta burocracia na abertura empresarial, processamento de documentos fiscais, fluxos de pagamentos e organização de registros financeiros.",
    solution:
      "Desenvolvimento de uma aplicação personalizada de onboarding automatizado, fluxo estruturado de documentos e integração de serviços de cobrança e pagamentos.",
    scope: [
      "Desenho de arquitetura de sistema",
      "UX/UI de fluxos de cadastro",
      "Onboarding dinâmico",
      "Processamento automatizado de documentos",
      "Integração de APIs de pagamento",
      "Implantação em produção"
    ],
    duration: "Em operação",
    result:
      "Fluxo de onboarding estruturado, processamento de documentos organizado e integrações implementadas com operação em atividade.",
    status: "Implantado",
    statusType: "active",
    technologies: ["Next.js", "React", "Tailwind CSS", "Node.js"],
    featured: true,
    group: "commercial"
  },
  {
    slug: "gerarcontrato",
    number: "02",
    category: "Ferramenta Produtiva Web",
    client: "Utilitário para Prestadores de Serviço",
    headline: "Gerador dinâmico de contratos e documentos no navegador",
    context:
      "Profissionais autônomos e prestadores de serviços demandam agilidade e autonomia ao elaborar termos de acordo para seus clientes.",
    problem:
      "A elaboração manual de contratos é passível de erros, exige tempo considerável e o uso de múltiplos processadores de texto pesados.",
    solution:
      "Aplicação de página única (SPA) contendo mais de 17 modelos personalizáveis, interpolação em tempo real de variáveis de texto e exportação direta para PDF.",
    scope: [
      "Modelagem e estruturação de dados",
      "Arquitetura de renderização no client-side",
      "Integração de biblioteca de geração de PDF",
      "UX de preenchimento dinâmico"
    ],
    duration: "Em operação",
    result:
      "Ferramenta funcional com visualização de documentos em tempo real e exportação de PDF disponível para uso público.",
    status: "Em operação",
    statusType: "active",
    technologies: ["Vite", "React", "TypeScript", "Tailwind CSS"],
    featured: true,
    group: "commercial"
  },
  {
    slug: "ecosimulator",
    number: "03",
    category: "Sistema de Simulação e Dados",
    client: "Pesquisa e Mobilidade",
    headline: "EcoSimulator 1.0 — Dashboard de telemetria e simulação ambiental",
    context:
      "A comparação ecológica entre veículos elétricos e combustão tradicional costuma ser apresentada de forma estática e abstrata em relatórios.",
    problem:
      "A falta de visualização dinâmica impede a percepção prática dos impactos de eficiência e emissões de carbono com base em telemetria realista.",
    solution:
      "Desenvolvimento de um sistema de simulação de telemetria de veículos elétricos, dotado de dashboard de indicadores de sustentabilidade em tempo real.",
    scope: [
      "Estruturação de dados de telemetria",
      "Cálculo de coeficientes ambientais",
      "Desenho de painéis gráficos interativos",
      "Visualização de dados dinâmicos"
    ],
    duration: "Concluído",
    result:
      "Vencedor do desafio Tech Mahindra, apresentado publicamente no evento Latam Mobility 2025 com simulação e visualização funcionais.",
    status: "Apresentado",
    statusType: "active",
    technologies: ["Telemetria", "Visualização de Dados", "Dashboards", "Mobilidade"],
    featured: true,
    group: "commercial",
    recognition: "Vencedor do desafio Tech Mahindra e apresentado no Latam Mobility 2025"
  },
  {
    slug: "apf-fonoaudiologia",
    number: "04",
    category: "Aplicação Web Institucional",
    client: "Clínica de Saúde",
    headline: "Site institucional e canal de captação otimizado para mobile",
    context:
      "Clínicas de saúde de atendimento local necessitam de presença digital otimizada para capturar pacientes e apresentar especialidades tratadas.",
    problem:
      "Sites legados ou lentos dificultam o agendamento de consultas por dispositivos móveis, gerando alta taxa de rejeição no canal digital.",
    solution:
      "Aplicação institucional com arquitetura responsiva com foco em velocidade de carregamento, legibilidade, acessibilidade e SEO estrutural.",
    scope: [
      "UX/UI focado em conversão mobile",
      "SEO técnico e marcações semânticas",
      "Arquitetura estática leve",
      "Otimização de Web Vitals"
    ],
    duration: "Concluído",
    result:
      "Site publicado e em produção, atuando como canal de aquisição ativo e otimizado para dispositivos móveis.",
    status: "Implantado",
    statusType: "active",
    technologies: ["Vite", "React", "TypeScript", "Tailwind CSS"],
    featured: false,
    group: "commercial"
  },
  {
    slug: "voculos",
    number: "05",
    category: "Protótipo de Acessibilidade",
    client: "Iniciativa Social",
    headline: "VOCULOS — Tradução por voz e suporte à comunicação para surdos",
    context:
      "A comunicação entre pessoas surdas e ouvintes que não dominam a linguagem de sinais enfrenta barreiras em tarefas cotidianas sem intérprete.",
    problem:
      "A ausência de dispositivos vestíveis de baixo custo que realizem tradução de fala para texto de forma imediata e portátil.",
    solution:
      "Desenvolvimento de protótipo de hardware adaptado (óculos de baixo custo + webcam) integrado a APIs de áudio e automações de transcrição em tempo real.",
    scope: [
      "Integração de hardware de captura",
      "Automação de fluxos de transcrição",
      "Consumo de APIs de conversão de áudio",
      "Interface simplificada de exibição"
    ],
    duration: "Protótipo - Hackathon",
    result:
      "Protótipo desenvolvido em aproximadamente 3 horas, com demonstração funcional ao vivo e conquista do 1º lugar no ElevenLabs Hackathon SP.",
    status: "Premiado",
    statusType: "active",
    technologies: ["ElevenLabs", "Bolt", "n8n", "Hardware Adaptado", "APIs de IA"],
    featured: false,
    group: "innovation",
    recognition: "1º lugar no ElevenLabs Worldwide Hackathon São Paulo"
  },
  {
    slug: "talent-hack",
    number: "06",
    category: "Modelo de Comunidade e Educação",
    client: "Impacto Social",
    headline: "Talent Hack — Descoberta de talentos em tecnologia",
    context:
      "Estudantes de escolas técnicas públicas possuem excelente capacidade técnica, mas carecem de conexões estruturadas para o mercado de tecnologia.",
    problem:
      "A falta de visibilidade prática e mentoria dificulta a inserção desses alunos no ecossistema comercial de desenvolvimento.",
    solution:
      "Criação de um programa distribuído baseado em hackathons escolares, parcerias pedagógicas e acompanhamento de mentores de engenharia.",
    scope: [
      "Desenho de modelo de hackathons distribuídos",
      "Estruturação de rede de mentores",
      "Parcerias pedagógicas com escolas públicas",
      "Descoberta técnica de talentos por portfólios"
    ],
    duration: "Em desenvolvimento",
    result:
      "Iniciativa criada, com modelo conceitual estruturado, parcerias ativas e execução em desenvolvimento.",
    status: "Em desenvolvimento",
    statusType: "neutral",
    technologies: ["Estratégia", "Comunidade", "Mentoria", "Impacto Social"],
    featured: false,
    group: "innovation"
  },
  {
    slug: "puro-suco-indie",
    number: "07",
    category: "Laboratório Visual",
    client: "Estudos Experimentais",
    headline: "Puro Suco Indie — Experimentação visual de marca",
    context:
      "Exploração de interfaces gráficas ricas em animações e design não convencional para criação de valor direto ao consumidor.",
    problem:
      "A maioria dos sites corporativos adota designs monótonos que falham em captar a atenção e criar experiências digitais memoráveis.",
    solution:
      "Ambiente de testes visuais e ferramentas web com foco em design dinâmico, animações complexas e storytelling interativo.",
    scope: [
      "Desenho de interface visual de alto contraste",
      "Arquitetura de animações dinâmicas",
      "Desenvolvimento de micro-ferramentas"
    ],
    duration: "Laboratório",
    result:
      "Plataforma de testes visuais funcional e ativa para experimentação de interações ricas.",
    status: "Em testes",
    statusType: "neutral",
    technologies: ["Next.js", "React", "Framer Motion", "Tailwind CSS"],
    featured: false,
    group: "laboratory"
  },
  {
    slug: "mygesto",
    number: "08",
    category: "Micro-SaaS Experimental",
    client: "Estudos de Produto",
    headline: "MyGesto — Prototipagem rápida de micro-SaaS",
    context:
      "Testes de validação de funcionalidades de micro-serviços para criadores de conteúdo e páginas de redirecionamento dinâmico.",
    problem:
      "A necessidade de validar rapidamente fluxos de autenticação, personalização de links e carregamento animado sem infraestruturas custosas.",
    solution:
      "Protótipo de micro-SaaS focado na geração de links únicos, agrupamento de conteúdos personalizáveis e transições fluidas de interface.",
    scope: [
      "Prototipagem de fluxo de usuário",
      "Mecanismo de link único",
      "Micro-animações de interface"
    ],
    duration: "Laboratório",
    result:
      "Micro-SaaS funcional de testes implantado em produção para fins de validação técnica.",
    status: "Protótipo",
    statusType: "neutral",
    technologies: ["React", "Animações", "Prototipagem Rápida"],
    featured: false,
    group: "laboratory"
  },
  {
    slug: "snake-battle",
    number: "09",
    category: "Jogo e Algoritmos Web",
    client: "Estudo de Algoritmos",
    headline: "Snake Battle — Multiplayer de oponentes automatizados",
    context:
      "Estudos sobre processamento na borda (Edge computing), renderização em Canvas de alta taxa de quadros e lógica de pathfinding de oponentes.",
    problem:
      "O desenvolvimento de inteligência de perseguição de oponentes em ambientes de grade sem gerar latência ou gargalos computacionais.",
    solution:
      "Jogo de arena multiplayer com persistência de placares online usando bancos descentralizados na borda e pathfinding determinístico.",
    scope: [
      "Loop de renderização em Canvas HTML5",
      "Otimização de algoritmo de busca de caminhos",
      "Persistência em Cloudflare Workers + D1"
    ],
    duration: "Laboratório",
    result:
      "Arena funcional em rede com inteligência de movimentação e placar global persistente.",
    status: "Publicado",
    statusType: "active",
    technologies: ["JavaScript", "HTML5 Canvas", "Cloudflare Workers", "D1"],
    featured: false,
    group: "laboratory"
  }
];

export function getCaseBySlug(slug: string): Case | undefined {
  return cases.find((c) => c.slug === slug);
}

export function getFeaturedCases(): Case[] {
  return cases.filter((c) => c.featured);
}
