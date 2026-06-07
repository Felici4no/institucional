export type Service = {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  problem: string;
  audience: string;
  result: string;
  deliverables: string[];
  anchor: string;
};

export const services: Service[] = [
  {
    id: "mvp",
    number: "01",
    title: "MVP e Produto Digital",
    subtitle: "Da ideia ao produto funcional",
    problem:
      "Sua solução ainda existe como protótipo, documento ou ideia. Você precisa de uma primeira versão que funcione e possa ser validada com usuários reais.",
    audience:
      "Empreendedores, startups e empresas que precisam lançar uma nova solução.",
    result:
      "Produto funcional, testável e preparado para crescer. Entregue com documentação, acesso ao código e base para evoluções.",
    deliverables: [
      "Descoberta e definição de escopo",
      "UX/UI — fluxos e interfaces",
      "Aplicação web ou mobile",
      "Sistema de autenticação",
      "Banco de dados e API",
      "Painel administrativo",
      "Implantação em produção",
    ],
    anchor: "mvp-produto-digital",
  },
  {
    id: "sistemas",
    number: "02",
    title: "Sistemas Internos",
    subtitle: "Operação organizada em uma plataforma",
    problem:
      "Sua equipe usa planilhas, WhatsApp e e-mail para coordenar o que deveria estar em um sistema. Informações se perdem. Processos dependem de pessoas específicas.",
    audience:
      "PMEs, prestadores de serviço e organizações que precisam digitalizar operações.",
    result:
      "Processo centralizado em uma única plataforma. Equipe autônoma, gestor com visibilidade.",
    deliverables: [
      "Mapeamento e análise de processos",
      "Gestão de usuários e permissões",
      "Módulos de clientes e contratos",
      "Controle de tarefas e documentos",
      "Dashboards e relatórios",
      "Integrações com ferramentas existentes",
    ],
    anchor: "sistemas-internos",
  },
  {
    id: "automacao",
    number: "03",
    title: "Automação e IA Aplicada",
    subtitle: "Mais capacidade sem mais pessoas",
    problem:
      "Sua equipe repete as mesmas tarefas todo dia. Atendimento manual, triagem de mensagens, geração de documentos. Tudo que poderia ser automatizado ainda é feito à mão.",
    audience:
      "Empresas com operações repetitivas ou que precisam atender mais com o mesmo time.",
    result:
      "Redução de trabalho manual. Mais consistência operacional. Escala sem custo proporcional de pessoal.",
    deliverables: [
      "Mapeamento do fluxo a automatizar",
      "Agentes de atendimento e triagem",
      "Geração automática de documentos",
      "Acompanhamento comercial automatizado",
      "Integração com WhatsApp, e-mail e ERP",
      "Painel de monitoramento",
    ],
    anchor: "automacao-ia",
  },
];
