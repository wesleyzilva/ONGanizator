// Mock de relatórios periódicos, evidências e timeline de monitoramento por projeto

export interface Relatorio {
  id: string;
  projetoId: string;
  titulo: string;
  tipo: "D0" | "quadrimestral" | "anual";
  periodo: string;
  status: "publicado" | "em_elaboracao" | "pendente";
  dataPublicacao: string;
  resumo: string;
  indicadores: {
    nome: string;
    meta: number;
    realizado: number;
    unidade: string;
  }[];
  evidencias: {
    tipo: "foto" | "video" | "documento";
    descricao: string;
    url: string;
  }[];
}

export interface TimelineEvento {
  projetoId: string;
  data: string;
  tipo: "marco" | "relatorio" | "aporte" | "alerta" | "conquista";
  titulo: string;
  descricao: string;
}

export const MOCK_RELATORIOS: Relatorio[] = [
  {
    id: "rel-001",
    projetoId: "prj-001",
    titulo: "Relatório D0 — Linha de Base",
    tipo: "D0",
    periodo: "Jan/2024",
    status: "publicado",
    dataPublicacao: "2024-01-31",
    resumo:
      "Levantamento inicial das 150 nascentes prioritárias na Bacia do Alto Paraguai. Diagnóstico socioeconômico de 412 famílias participantes concluído.",
    indicadores: [
      {
        nome: "Nascentes mapeadas",
        meta: 150,
        realizado: 150,
        unidade: "unidades",
      },
      {
        nome: "Famílias cadastradas",
        meta: 500,
        realizado: 412,
        unidade: "famílias",
      },
      {
        nome: "Viveiros implantados",
        meta: 10,
        realizado: 4,
        unidade: "viveiros",
      },
    ],
    evidencias: [
      {
        tipo: "foto",
        descricao: "Mapeamento de nascente MT-047",
        url: "https://placehold.co/400x300/dcfce7/166534?text=Nascente+MT-047",
      },
      {
        tipo: "foto",
        descricao: "Reunião comunitária — Famílias participantes",
        url: "https://placehold.co/400x300/dcfce7/166534?text=Reuni%C3%A3o+Comunit%C3%A1ria",
      },
      {
        tipo: "documento",
        descricao: "Relatório técnico completo D0",
        url: "#",
      },
    ],
  },
  {
    id: "rel-002",
    projetoId: "prj-001",
    titulo: "Relatório Anual — Ano 1",
    tipo: "anual",
    periodo: "Jan–Dez/2024",
    status: "publicado",
    dataPublicacao: "2025-01-15",
    resumo:
      "Primeiro ano de execução com 93 nascentes em processo de restauração. Crescimento de 38% na cobertura vegetal nas áreas monitoradas. Geração de R$ 280 mil em renda para comunidades.",
    indicadores: [
      {
        nome: "Nascentes em restauração",
        meta: 100,
        realizado: 93,
        unidade: "unidades",
      },
      {
        nome: "Mudas plantadas",
        meta: 50000,
        realizado: 47200,
        unidade: "mudas",
      },
      {
        nome: "Renda gerada comunidades",
        meta: 300000,
        realizado: 280000,
        unidade: "R$",
      },
      {
        nome: "Cobertura vegetal recuperada",
        meta: 40,
        realizado: 38,
        unidade: "%",
      },
    ],
    evidencias: [
      {
        tipo: "foto",
        descricao: "Nascente MT-012 — antes e depois (12 meses)",
        url: "https://placehold.co/400x300/dcfce7/166534?text=Antes+e+Depois",
      },
      {
        tipo: "foto",
        descricao: "Viveiro comunitário — produção de mudas nativas",
        url: "https://placehold.co/400x300/dcfce7/166534?text=Viveiro+Nativas",
      },
      {
        tipo: "video",
        descricao: "Drone — sobrevoo nascente recuperada MT-012",
        url: "#",
      },
      {
        tipo: "documento",
        descricao: "Relatório anual completo Ano 1",
        url: "#",
      },
    ],
  },
  {
    id: "rel-003",
    projetoId: "prj-002",
    titulo: "Relatório D0 — Linha de Base Brigadas",
    tipo: "D0",
    periodo: "Mar/2024",
    status: "publicado",
    dataPublicacao: "2024-03-31",
    resumo:
      "27 brigadas mapeadas em 8 municípios. 270 brigadistas cadastrados. Levantamento de necessidades de equipamento e treinamento concluído.",
    indicadores: [
      {
        nome: "Brigadas mapeadas",
        meta: 27,
        realizado: 27,
        unidade: "brigadas",
      },
      {
        nome: "Brigadistas cadastrados",
        meta: 270,
        realizado: 270,
        unidade: "pessoas",
      },
      {
        nome: "Municípios cobertos",
        meta: 8,
        realizado: 8,
        unidade: "municípios",
      },
    ],
    evidencias: [
      {
        tipo: "foto",
        descricao: "Capacitação Brigada Corumbá",
        url: "https://placehold.co/400x300/fef9c3/92400e?text=Brigada+Corumb%C3%A1",
      },
      {
        tipo: "foto",
        descricao: "Entrega de equipamentos EPI",
        url: "https://placehold.co/400x300/fef9c3/92400e?text=Entrega+EPI",
      },
    ],
  },
  {
    id: "rel-004",
    projetoId: "prj-002",
    titulo: "Relatório Quadrimestral — Q2/2024",
    tipo: "quadrimestral",
    periodo: "Mai–Ago/2024",
    status: "publicado",
    dataPublicacao: "2024-09-10",
    resumo:
      "64 incêndios combatidos com sucesso no período. Redução de 31% na área queimada comparado ao mesmo período de 2023. Brigadas receberam monitoramento remoto via satélite.",
    indicadores: [
      {
        nome: "Incêndios combatidos",
        meta: 30,
        realizado: 64,
        unidade: "ocorrências",
      },
      {
        nome: "Área protegida",
        meta: 50000,
        realizado: 78000,
        unidade: "hectares",
      },
      {
        nome: "Alertas respondidos < 2h",
        meta: 80,
        realizado: 91,
        unidade: "%",
      },
    ],
    evidencias: [
      {
        tipo: "foto",
        descricao: "Brigada em ação — Pantanal Norte",
        url: "https://placehold.co/400x300/fef9c3/92400e?text=Brigada+A%C3%A7%C3%A3o",
      },
      {
        tipo: "video",
        descricao: "Drone — área protegida após combate",
        url: "#",
      },
      {
        tipo: "documento",
        descricao: "Relatório quadrimestral Q2/2024",
        url: "#",
      },
    ],
  },
];

export const MOCK_TIMELINE: TimelineEvento[] = [
  {
    projetoId: "prj-001",
    data: "2024-01-15",
    tipo: "marco",
    titulo: "Início do Projeto",
    descricao:
      "Assinatura do termo de parceria com Chalana Esperança e início do mapeamento.",
  },
  {
    projetoId: "prj-001",
    data: "2024-01-31",
    tipo: "relatorio",
    titulo: "Relatório D0 publicado",
    descricao:
      "Linha de base concluída: 150 nascentes mapeadas, 412 famílias cadastradas.",
  },
  {
    projetoId: "prj-001",
    data: "2024-03-01",
    tipo: "aporte",
    titulo: "Aporte recebido — R$ 150.000",
    descricao: "Fundação Horizonte Verde confirma primeiro desembolso.",
  },
  {
    projetoId: "prj-001",
    data: "2024-06-15",
    tipo: "conquista",
    titulo: "50 nascentes em restauração",
    descricao: "Marco de 50 nascentes atingido antes do prazo previsto.",
  },
  {
    projetoId: "prj-001",
    data: "2024-09-01",
    tipo: "aporte",
    titulo: "Aporte recebido — R$ 162.000",
    descricao:
      "Segundo desembolso aprovado após validação do relatório quadrimestral.",
  },
  {
    projetoId: "prj-001",
    data: "2025-01-15",
    tipo: "relatorio",
    titulo: "Relatório Anual Ano 1 publicado",
    descricao:
      "93 nascentes em restauração, 47.200 mudas plantadas, R$ 280k gerados.",
  },
  {
    projetoId: "prj-002",
    data: "2024-03-01",
    tipo: "marco",
    titulo: "Início do Projeto Brigadas",
    descricao:
      "27 brigadas cadastradas, treinamento inicial iniciado em 8 municípios.",
  },
  {
    projetoId: "prj-002",
    data: "2024-03-31",
    tipo: "relatorio",
    titulo: "Relatório D0 publicado",
    descricao: 270 + " brigadistas cadastrados, 8 municípios cobertos.",
  },
  {
    projetoId: "prj-002",
    data: "2024-05-20",
    tipo: "conquista",
    titulo: "Monitoramento remoto ativo",
    descricao:
      "Sistema de alertas por satélite implantado em todas as brigadas.",
  },
  {
    projetoId: "prj-002",
    data: "2024-09-10",
    tipo: "relatorio",
    titulo: "Relatório Q2/2024 publicado",
    descricao:
      "64 incêndios combatidos, 78.000 hectares protegidos, 91% alertas respondidos < 2h.",
  },
];

export const MOCK_DEPOIMENTOS = [
  {
    projetoId: "prj-001",
    autor: "Família participante — MT",
    texto:
      "A nascente que estava seca há 5 anos voltou a brotar água. Agora temos água limpa para o gado e para a casa.",
    data: "2024-12-10",
  },
  {
    projetoId: "prj-002",
    autor: "Brigadista — Corumbá, MS",
    texto:
      "Com o novo equipamento e o treinamento, conseguimos chegar muito mais rápido nos focos. Antes perdíamos horas sem os EPIs certos.",
    data: "2024-10-05",
  },
];
