// Dados mock embutidos — usados no build estático (GitHub Pages)
// Espelha os dados do apps/api/src/mock/seed.ts e monitoramento.ts

export const ORGS = [
  {
    id: "org-001",
    razaoSocial: "Instituto Pantanal Vivo",
    nomeFantasia: "Pantanal Vivo",
    cnpj: "00.000.001/0001-01",
    tipo: "ong",
    areaAtuacao: "Meio Ambiente",
    ods: [13, 15, 3],
    score: 87,
    nivel: "referencia",
    estado: "MT",
    cidade: "Cuiabá",
    ativo: true,
    criadoEm: "2020-03-15",
  },
  {
    id: "org-002",
    razaoSocial: "Cooperativa Sementes do Cerrado",
    nomeFantasia: "Sementes Cerrado",
    cnpj: "00.000.002/0001-02",
    tipo: "cooperativa",
    areaAtuacao: "Agricultura Familiar",
    ods: [2, 8, 15],
    score: 74,
    nivel: "consolidado",
    estado: "GO",
    cidade: "Goiânia",
    ativo: true,
    criadoEm: "2018-07-20",
  },
  {
    id: "org-003",
    razaoSocial: "Social Tech Impacto LTDA",
    nomeFantasia: "SocialTech",
    cnpj: "00.000.003/0001-03",
    tipo: "negocio_social",
    areaAtuacao: "Educação e Tecnologia",
    ods: [4, 8, 9],
    score: 68,
    nivel: "em_desenvolvimento",
    estado: "SP",
    cidade: "São Paulo",
    ativo: true,
    criadoEm: "2022-01-10",
  },
  {
    id: "org-004",
    razaoSocial: "Associação Brigadas do Pantanal",
    nomeFantasia: "Brigadas Pantanal",
    cnpj: "00.000.004/0001-04",
    tipo: "ong",
    areaAtuacao: "Defesa Civil Ambiental",
    ods: [13, 15],
    score: 91,
    nivel: "referencia",
    estado: "MS",
    cidade: "Campo Grande",
    ativo: true,
    criadoEm: "2019-05-30",
  },
  {
    id: "org-005",
    razaoSocial: "Cooperativa Reciclagem Solidária",
    nomeFantasia: "Recicla Solidária",
    cnpj: "00.000.005/0001-05",
    tipo: "cooperativa",
    areaAtuacao: "Reciclagem e Economia Circular",
    ods: [1, 8, 12],
    score: 55,
    nivel: "em_desenvolvimento",
    estado: "PE",
    cidade: "Recife",
    ativo: true,
    criadoEm: "2021-09-14",
  },
  {
    id: "org-006",
    razaoSocial: "ONG Raízes Comunitárias",
    nomeFantasia: "Raízes",
    cnpj: "00.000.006/0001-06",
    tipo: "ong",
    areaAtuacao: "Desenvolvimento Comunitário",
    ods: [1, 3, 10],
    score: 62,
    nivel: "consolidado",
    estado: "BA",
    cidade: "Salvador",
    ativo: true,
    criadoEm: "2017-11-02",
  },
  {
    id: "org-007",
    razaoSocial: "Instituto Água Limpa",
    nomeFantasia: "Água Limpa",
    cnpj: "00.000.007/0001-07",
    tipo: "ong",
    areaAtuacao: "Saneamento e Recursos Hídricos",
    ods: [6, 3, 11],
    score: 79,
    nivel: "consolidado",
    estado: "AM",
    cidade: "Manaus",
    ativo: true,
    criadoEm: "2016-02-28",
  },
  {
    id: "org-008",
    razaoSocial: "EduImpacto Social",
    nomeFantasia: "EduImpacto",
    cnpj: "00.000.008/0001-08",
    tipo: "negocio_social",
    areaAtuacao: "Educação",
    ods: [4, 10],
    score: 44,
    nivel: "iniciante",
    estado: "RJ",
    cidade: "Rio de Janeiro",
    ativo: true,
    criadoEm: "2023-03-01",
  },
];

export const PROJECTS = [
  {
    id: "prj-001",
    organizacaoId: "org-001",
    organizacaoNome: "Pantanal Vivo",
    titulo: "Adote uma Nascente",
    descricao:
      "Restauração de nascentes na Bacia do Alto Paraguai com comunidades locais.",
    ods: [6, 13, 15],
    status: "ativo",
    valorMeta: 500000,
    valorCaptado: 312000,
    beneficiarios: 4200,
    estado: "MT",
    cidade: "Cuiabá",
    dataInicio: "2024-01-01",
    dataFim: "2025-12-31",
    criadoEm: "2023-11-10",
  },
  {
    id: "prj-002",
    organizacaoId: "org-004",
    organizacaoNome: "Brigadas Pantanal",
    titulo: "Adote uma Brigada Pantaneira",
    descricao:
      "Capacitação e equipamento de 27 brigadas em 8 municípios do Pantanal.",
    ods: [13, 15, 3],
    status: "ativo",
    valorMeta: 750000,
    valorCaptado: 580000,
    beneficiarios: 8700,
    estado: "MS",
    cidade: "Campo Grande",
    dataInicio: "2024-03-01",
    dataFim: "2026-02-28",
    criadoEm: "2024-01-15",
  },
  {
    id: "prj-003",
    organizacaoId: "org-002",
    organizacaoNome: "Sementes Cerrado",
    titulo: "Banco de Sementes Nativas",
    descricao:
      "Coleta, armazenamento e distribuição de sementes nativas do Cerrado.",
    ods: [2, 15, 8],
    status: "ativo",
    valorMeta: 180000,
    valorCaptado: 95000,
    beneficiarios: 320,
    estado: "GO",
    cidade: "Goiânia",
    dataInicio: "2024-06-01",
    dataFim: "2025-05-31",
    criadoEm: "2024-04-20",
  },
  {
    id: "prj-004",
    organizacaoId: "org-007",
    organizacaoNome: "Água Limpa",
    titulo: "Poços Artesianos Comunidades Ribeirinhas",
    descricao:
      "Instalação de sistemas de captação e purificação de água em comunidades ribeirinhas.",
    ods: [6, 3, 11],
    status: "ativo",
    valorMeta: 420000,
    valorCaptado: 210000,
    beneficiarios: 2100,
    estado: "AM",
    cidade: "Manaus",
    dataInicio: "2024-02-01",
    dataFim: "2025-01-31",
    criadoEm: "2023-12-01",
  },
  {
    id: "prj-005",
    organizacaoId: "org-005",
    organizacaoNome: "Recicla Solidária",
    titulo: "Rota Verde de Reciclagem",
    descricao:
      "Logística reversa e geração de créditos de carbono para catadores.",
    ods: [1, 8, 12],
    status: "em_avaliacao",
    valorMeta: 260000,
    valorCaptado: 0,
    beneficiarios: 680,
    estado: "PE",
    cidade: "Recife",
    dataInicio: "2025-01-01",
    dataFim: "2025-12-31",
    criadoEm: "2024-09-05",
  },
  {
    id: "prj-006",
    organizacaoId: "org-003",
    organizacaoNome: "SocialTech",
    titulo: "Plataforma de Renda para Jovens em Vulnerabilidade",
    descricao: "Cursos técnicos online e matchmaking com empresas parceiras.",
    ods: [4, 8, 9],
    status: "ativo",
    valorMeta: 340000,
    valorCaptado: 175000,
    beneficiarios: 1500,
    estado: "SP",
    cidade: "São Paulo",
    dataInicio: "2024-05-01",
    dataFim: "2025-04-30",
    criadoEm: "2024-03-10",
  },
  {
    id: "prj-007",
    organizacaoId: "org-006",
    organizacaoNome: "Raízes",
    titulo: "Cozinhas Comunitárias Segurança Alimentar",
    descricao:
      "Implantação de cozinhas comunitárias em comunidades de baixa renda.",
    ods: [1, 2, 3],
    status: "ativo",
    valorMeta: 155000,
    valorCaptado: 88000,
    beneficiarios: 900,
    estado: "BA",
    cidade: "Salvador",
    dataInicio: "2024-07-01",
    dataFim: "2025-06-30",
    criadoEm: "2024-05-22",
  },
  {
    id: "prj-008",
    organizacaoId: "org-008",
    organizacaoNome: "EduImpacto",
    titulo: "Alfabetização Digital Comunidades Periféricas",
    descricao:
      "Acesso a dispositivos e internet em comunidades sem conectividade.",
    ods: [4, 10],
    status: "rascunho",
    valorMeta: 120000,
    valorCaptado: 0,
    beneficiarios: 600,
    estado: "RJ",
    cidade: "Rio de Janeiro",
    dataInicio: "2025-02-01",
    dataFim: "2025-12-31",
    criadoEm: "2024-11-01",
  },
];

export const INVESTORS = [
  {
    id: "inv-001",
    nome: "Fundação Horizonte Verde",
    tipo: "fundacao",
    ods: [13, 15, 6],
    ticketMin: 100000,
    ticketMax: 1000000,
    regioes: ["MT", "MS", "GO", "AM"],
    ativo: true,
  },
  {
    id: "inv-002",
    nome: "Instituto Impacto Brasil",
    tipo: "instituto",
    ods: [1, 3, 4, 8],
    ticketMin: 50000,
    ticketMax: 500000,
    regioes: ["SP", "RJ", "BA", "PE"],
    ativo: true,
  },
  {
    id: "inv-003",
    nome: "Empresa Consciente S.A.",
    tipo: "empresa",
    ods: [8, 9, 12],
    ticketMin: 200000,
    ticketMax: 2000000,
    regioes: ["SP", "RJ"],
    ativo: true,
  },
  {
    id: "inv-004",
    nome: "Investidor Social Demo",
    tipo: "pessoa_fisica",
    ods: [4, 10],
    ticketMin: 5000,
    ticketMax: 50000,
    regioes: ["SP", "RJ", "MG"],
    ativo: true,
  },
];

export const INDICATORS = [
  {
    projetoId: "prj-001",
    nome: "Nascentes restauradas",
    meta: 150,
    realizado: 93,
    unidade: "nascentes",
    periodo: "2024",
  },
  {
    projetoId: "prj-001",
    nome: "Famílias beneficiadas",
    meta: 500,
    realizado: 412,
    unidade: "famílias",
    periodo: "2024",
  },
  {
    projetoId: "prj-002",
    nome: "Brigadistas treinados",
    meta: 270,
    realizado: 270,
    unidade: "pessoas",
    periodo: "2024",
  },
  {
    projetoId: "prj-002",
    nome: "Incêndios combatidos",
    meta: 80,
    realizado: 64,
    unidade: "ocorrências",
    periodo: "2024",
  },
  {
    projetoId: "prj-003",
    nome: "Espécies catalogadas",
    meta: 200,
    realizado: 178,
    unidade: "espécies",
    periodo: "2024",
  },
  {
    projetoId: "prj-004",
    nome: "Poços instalados",
    meta: 30,
    realizado: 14,
    unidade: "poços",
    periodo: "2024",
  },
  {
    projetoId: "prj-006",
    nome: "Jovens capacitados",
    meta: 800,
    realizado: 540,
    unidade: "pessoas",
    periodo: "2024",
  },
  {
    projetoId: "prj-007",
    nome: "Refeições servidas",
    meta: 100000,
    realizado: 67000,
    unidade: "refeições",
    periodo: "2024",
  },
];

export const RELATORIOS = [
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
      "64 incêndios combatidos com sucesso no período. Redução de 31% na área queimada comparado ao mesmo período de 2023.",
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

export const TIMELINE = [
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
    descricao: "270 brigadistas cadastrados, 8 municípios cobertos.",
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

export const DEPOIMENTOS = [
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

// ── Detalhes ricos por projeto (objetivos, metas, orçamento, marcos) ─────────

export const PROJECT_DETAILS: Record<string, any> = {
  "prj-001": {
    objetivos: [
      {
        id: "obj-1",
        titulo: "Restaurar a biodiversidade hídrica",
        descricao:
          "Recuperar nascentes degradadas na Bacia do Alto Paraguai envolvendo comunidades locais como guardiões dos recursos hídricos.",
        ods: [6, 15],
        indicadorPrincipal: "Nascentes restauradas",
      },
      {
        id: "obj-2",
        titulo: "Gerar renda sustentável para comunidades",
        descricao:
          "Criar viveiros comunitários que produzam mudas nativas para reflorestamento, gerando emprego e renda local.",
        ods: [1, 8],
        indicadorPrincipal: "Renda gerada (R$)",
      },
    ],
    metas: [
      {
        id: "meta-1",
        objetivoId: "obj-1",
        descricao: "Restaurar 150 nascentes na Bacia do Alto Paraguai",
        indicador: "Nascentes restauradas",
        linhaDeBase: 0,
        alvo: 150,
        realizado: 93,
        unidade: "nascentes",
        prazo: "Dez/2025",
        frequencia: "trimestral",
        status: "em_andamento",
      },
      {
        id: "meta-2",
        objetivoId: "obj-1",
        descricao: "Plantar 50.000 mudas de espécies nativas",
        indicador: "Mudas plantadas",
        linhaDeBase: 0,
        alvo: 50000,
        realizado: 47200,
        unidade: "mudas",
        prazo: "Dez/2025",
        frequencia: "mensal",
        status: "em_andamento",
      },
      {
        id: "meta-3",
        objetivoId: "obj-1",
        descricao: "Beneficiar 500 famílias ribeirinhas",
        indicador: "Famílias beneficiadas",
        linhaDeBase: 0,
        alvo: 500,
        realizado: 412,
        unidade: "famílias",
        prazo: "Dez/2025",
        frequencia: "semestral",
        status: "em_andamento",
      },
      {
        id: "meta-4",
        objetivoId: "obj-2",
        descricao: "Gerar R$ 300.000 em renda para comunidades",
        indicador: "Renda gerada (R$)",
        linhaDeBase: 0,
        alvo: 300000,
        realizado: 280000,
        unidade: "R$",
        prazo: "Dez/2025",
        frequencia: "semestral",
        status: "em_andamento",
      },
    ],
    orcamento: {
      total: 500000,
      rubricas: [
        {
          nome: "Pessoal técnico",
          percentual: 35,
          valor: 175000,
          cor: "#16a34a",
        },
        {
          nome: "Insumos e mudas",
          percentual: 25,
          valor: 125000,
          cor: "#2563eb",
        },
        {
          nome: "Infraestrutura",
          percentual: 15,
          valor: 75000,
          cor: "#9333ea",
        },
        { nome: "Monitoramento", percentual: 12, valor: 60000, cor: "#ea580c" },
        { nome: "Comunicação", percentual: 8, valor: 40000, cor: "#0891b2" },
        {
          nome: "Gestão/overhead",
          percentual: 5,
          valor: 25000,
          cor: "#6b7280",
        },
      ],
      parcelas: [
        {
          numero: 1,
          valor: 150000,
          status: "pago",
          data: "2024-03-01",
          marco: "M1 — Linha de base",
        },
        {
          numero: 2,
          valor: 162000,
          status: "pago",
          data: "2024-09-01",
          marco: "M2 — 50 nascentes",
        },
        {
          numero: 3,
          valor: 138000,
          status: "pendente",
          data: "2025-06-01",
          marco: "M3 — 100 nascentes",
        },
        {
          numero: 4,
          valor: 50000,
          status: "pendente",
          data: "2025-12-01",
          marco: "M4 — Encerramento",
        },
      ],
    },
    marcos: [
      {
        id: "m1",
        numero: 1,
        titulo: "Linha de Base + Equipe Contratada",
        descricao:
          "Mapeamento de 150 nascentes, diagnóstico de 412 famílias e contratação da equipe técnica.",
        prazo: "2024-01-31",
        valorLiberado: 150000,
        status: "concluido",
        evidencias: [
          "Relatório D0",
          "Contratos assinados",
          "Lista famílias cadastradas",
        ],
      },
      {
        id: "m2",
        numero: 2,
        titulo: "50 Nascentes em Restauração",
        descricao:
          "Marco de 50 nascentes atingido com plantio de 22.000 mudas e 210 famílias ativas.",
        prazo: "2024-09-01",
        valorLiberado: 162000,
        status: "concluido",
        evidencias: ["Relatório Semestral", "Fotos drone", "Laudos técnicos"],
      },
      {
        id: "m3",
        numero: 3,
        titulo: "100 Nascentes Restauradas",
        descricao:
          "Atingir 100 nascentes com cobertura vegetal ≥ 40% e renda gerada de R$ 200k.",
        prazo: "2025-06-01",
        valorLiberado: 138000,
        status: "em_andamento",
        evidencias: [],
      },
      {
        id: "m4",
        numero: 4,
        titulo: "Encerramento e Prestação de Contas",
        descricao:
          "Relatório final com todos os indicadores, demonstrativo financeiro e certificado de impacto.",
        prazo: "2025-12-31",
        valorLiberado: 50000,
        status: "pendente",
        evidencias: [],
      },
    ],
  },
  "prj-002": {
    objetivos: [
      {
        id: "obj-1",
        titulo: "Proteger o Pantanal de incêndios criminosos",
        descricao:
          "Equipar e capacitar brigadistas voluntários para resposta rápida a focos de incêndio nos 8 municípios do Pantanal sul.",
        ods: [13, 15],
        indicadorPrincipal: "Incêndios combatidos",
      },
      {
        id: "obj-2",
        titulo: "Monitoramento ambiental em tempo real",
        descricao:
          "Implantar sistema de alertas por satélite e drones para detecção precoce de focos em até 2 horas.",
        ods: [13],
        indicadorPrincipal: "Alertas respondidos < 2h (%)",
      },
    ],
    metas: [
      {
        id: "meta-1",
        objetivoId: "obj-1",
        descricao: "Capacitar 270 brigadistas em 27 brigadas",
        indicador: "Brigadistas treinados",
        linhaDeBase: 0,
        alvo: 270,
        realizado: 270,
        unidade: "pessoas",
        prazo: "Mar/2024",
        frequencia: "anual",
        status: "concluido",
      },
      {
        id: "meta-2",
        objetivoId: "obj-1",
        descricao: "Combater 80 incêndios no biênio",
        indicador: "Incêndios combatidos",
        linhaDeBase: 0,
        alvo: 80,
        realizado: 64,
        unidade: "ocorrências",
        prazo: "Fev/2026",
        frequencia: "mensal",
        status: "em_andamento",
      },
      {
        id: "meta-3",
        objetivoId: "obj-2",
        descricao: "Proteger 100.000 hectares do Pantanal",
        indicador: "Área protegida (ha)",
        linhaDeBase: 0,
        alvo: 100000,
        realizado: 78000,
        unidade: "hectares",
        prazo: "Fev/2026",
        frequencia: "trimestral",
        status: "em_andamento",
      },
      {
        id: "meta-4",
        objetivoId: "obj-2",
        descricao: "Responder 90% dos alertas em menos de 2 horas",
        indicador: "Alertas respondidos < 2h (%)",
        linhaDeBase: 45,
        alvo: 90,
        realizado: 91,
        unidade: "%",
        prazo: "Fev/2026",
        frequencia: "mensal",
        status: "concluido",
      },
    ],
    orcamento: {
      total: 750000,
      rubricas: [
        {
          nome: "Equipamentos e EPIs",
          percentual: 40,
          valor: 300000,
          cor: "#ea580c",
        },
        { nome: "Treinamento", percentual: 25, valor: 187500, cor: "#2563eb" },
        {
          nome: "Tecnologia (drones/satélite)",
          percentual: 20,
          valor: 150000,
          cor: "#9333ea",
        },
        { nome: "Logística", percentual: 10, valor: 75000, cor: "#16a34a" },
        {
          nome: "Gestão/overhead",
          percentual: 5,
          valor: 37500,
          cor: "#6b7280",
        },
      ],
      parcelas: [
        {
          numero: 1,
          valor: 200000,
          status: "pago",
          data: "2024-03-15",
          marco: "M1 — Cadastro brigadas",
        },
        {
          numero: 2,
          valor: 200000,
          status: "pago",
          data: "2024-06-01",
          marco: "M2 — 270 brigadistas treinados",
        },
        {
          numero: 3,
          valor: 180000,
          status: "pago",
          data: "2024-11-01",
          marco: "M3 — Sistema alertas ativo",
        },
        {
          numero: 4,
          valor: 170000,
          status: "pendente",
          data: "2025-08-01",
          marco: "M4 — Encerramento",
        },
      ],
    },
    marcos: [
      {
        id: "m1",
        numero: 1,
        titulo: "Cadastro e Diagnóstico das 27 Brigadas",
        descricao:
          "270 brigadistas cadastrados, necessidades mapeadas, contratos firmados com municípios.",
        prazo: "2024-03-31",
        valorLiberado: 200000,
        status: "concluido",
        evidencias: [
          "Relatório D0",
          "Fotos capacitação",
          "Contratos municipais",
        ],
      },
      {
        id: "m2",
        numero: 2,
        titulo: "Treinamento Completo + Entrega EPIs",
        descricao:
          "Todos os 270 brigadistas com treinamento concluído e equipamentos entregues.",
        prazo: "2024-06-30",
        valorLiberado: 200000,
        status: "concluido",
        evidencias: ["Certificados", "NFs equipamentos", "Fotos entrega EPI"],
      },
      {
        id: "m3",
        numero: 3,
        titulo: "Sistema de Alertas por Satélite Implantado",
        descricao:
          "Monitoramento remoto ativo em todas as brigadas. Meta de resposta < 2h superada (91%).",
        prazo: "2024-10-01",
        valorLiberado: 180000,
        status: "concluido",
        evidencias: ["Relatório Q2", "Vídeo drone", "Dashboard alertas"],
      },
      {
        id: "m4",
        numero: 4,
        titulo: "Relatório Final + Renovação",
        descricao:
          "Prestação de contas final e proposta de renovação para 2026–2028.",
        prazo: "2026-02-28",
        valorLiberado: 170000,
        status: "em_andamento",
        evidencias: [],
      },
    ],
  },
  "prj-006": {
    objetivos: [
      {
        id: "obj-1",
        titulo: "Inserção de jovens vulneráveis no mercado digital",
        descricao:
          "Capacitar jovens de 16 a 24 anos em situação de vulnerabilidade com habilidades digitais e conectá-los a oportunidades de emprego e renda.",
        ods: [4, 8],
        indicadorPrincipal: "Jovens capacitados",
      },
    ],
    metas: [
      {
        id: "meta-1",
        objetivoId: "obj-1",
        descricao: "Capacitar 800 jovens em cursos técnicos online",
        indicador: "Jovens capacitados",
        linhaDeBase: 0,
        alvo: 800,
        realizado: 540,
        unidade: "pessoas",
        prazo: "Abr/2025",
        frequencia: "mensal",
        status: "em_andamento",
      },
      {
        id: "meta-2",
        objetivoId: "obj-1",
        descricao: "Conectar 400 jovens a empresas parceiras",
        indicador: "Jovens contratados/estágio",
        linhaDeBase: 0,
        alvo: 400,
        realizado: 218,
        unidade: "pessoas",
        prazo: "Abr/2025",
        frequencia: "trimestral",
        status: "em_andamento",
      },
      {
        id: "meta-3",
        objetivoId: "obj-1",
        descricao: "Taxa de conclusão ≥ 75% dos inscritos",
        indicador: "Taxa de conclusão",
        linhaDeBase: 0,
        alvo: 75,
        realizado: 68,
        unidade: "%",
        prazo: "Abr/2025",
        frequencia: "mensal",
        status: "em_andamento",
      },
    ],
    orcamento: {
      total: 340000,
      rubricas: [
        {
          nome: "Plataforma e tecnologia",
          percentual: 30,
          valor: 102000,
          cor: "#2563eb",
        },
        { nome: "Instrutores", percentual: 30, valor: 102000, cor: "#16a34a" },
        {
          nome: "Bolsas de conectividade",
          percentual: 20,
          valor: 68000,
          cor: "#9333ea",
        },
        {
          nome: "Marketing e captação",
          percentual: 12,
          valor: 40800,
          cor: "#ea580c",
        },
        {
          nome: "Gestão/overhead",
          percentual: 8,
          valor: 27200,
          cor: "#6b7280",
        },
      ],
      parcelas: [
        {
          numero: 1,
          valor: 100000,
          status: "pago",
          data: "2024-05-01",
          marco: "M1 — Plataforma live",
        },
        {
          numero: 2,
          valor: 75000,
          status: "pago",
          data: "2024-08-01",
          marco: "M2 — 300 jovens inscritos",
        },
        {
          numero: 3,
          valor: 100000,
          status: "pendente",
          data: "2025-01-01",
          marco: "M3 — 600 jovens capacitados",
        },
        {
          numero: 4,
          valor: 65000,
          status: "pendente",
          data: "2025-04-01",
          marco: "M4 — Encerramento",
        },
      ],
    },
    marcos: [
      {
        id: "m1",
        numero: 1,
        titulo: "Plataforma de cursos no ar",
        descricao:
          "LMS implantado, 12 cursos disponíveis, primeiros 50 jovens inscritos.",
        prazo: "2024-06-30",
        valorLiberado: 100000,
        status: "concluido",
        evidencias: ["Print plataforma", "Lista inscritos", "NF servidor"],
      },
      {
        id: "m2",
        numero: 2,
        titulo: "300 jovens inscritos + primeiras contratações",
        descricao:
          "300 inscritos ativos, 90 concluintes, 45 primeiros contratos/estágios.",
        prazo: "2024-09-30",
        valorLiberado: 75000,
        status: "concluido",
        evidencias: ["Relatório Q1", "Depoimentos alunos"],
      },
      {
        id: "m3",
        numero: 3,
        titulo: "600 jovens capacitados",
        descricao:
          "Atingir 600 jovens capacitados com taxa de conclusão ≥ 75%.",
        prazo: "2025-01-31",
        valorLiberado: 100000,
        status: "em_andamento",
        evidencias: [],
      },
      {
        id: "m4",
        numero: 4,
        titulo: "Encerramento e relatório de impacto",
        descricao:
          "Relatório final, prestação de contas, publicação de estudo de impacto.",
        prazo: "2025-04-30",
        valorLiberado: 65000,
        status: "pendente",
        evidencias: [],
      },
    ],
  },
};

export function getProjetoDetalhes(id: string) {
  const projeto = PROJECTS.find((p) => p.id === id);
  if (!projeto) return null;
  const detalhe = PROJECT_DETAILS[id] ?? {
    objetivos: [],
    metas: [],
    orcamento: { total: projeto.valorMeta, rubricas: [], parcelas: [] },
    marcos: [],
  };
  const relatorios = RELATORIOS.filter((r) => r.projetoId === id);
  const timeline = TIMELINE.filter((t) => t.projetoId === id).sort(
    (a, b) => new Date(b.data).getTime() - new Date(a.data).getTime(),
  );
  const indicadores = INDICATORS.filter((i) => i.projetoId === id);
  const depoimentos = DEPOIMENTOS.filter((d) => d.projetoId === id);
  const org = ORGS.find((o) => o.id === projeto.organizacaoId);
  return {
    projeto,
    org,
    relatorios,
    timeline,
    indicadores,
    depoimentos,
    ...detalhe,
  };
}

// ── Funções que espelham os endpoints da API ──────────────────────────────────

export function getDashboard() {
  const projetosPorStatus: Record<string, number> = {};
  PROJECTS.forEach((p) => {
    projetosPorStatus[p.status] = (projetosPorStatus[p.status] || 0) + 1;
  });
  const odsCount: Record<string, number> = {};
  PROJECTS.forEach((p) =>
    p.ods.forEach((o) => {
      odsCount[`ODS ${o}`] = (odsCount[`ODS ${o}`] || 0) + 1;
    }),
  );
  return {
    totalOrganizacoes: ORGS.length,
    totalProjetos: PROJECTS.length,
    totalInvestidores: INVESTORS.length,
    totalCaptadoBRL: PROJECTS.reduce((s, p) => s + p.valorCaptado, 0),
    totalMetaBRL: PROJECTS.reduce((s, p) => s + p.valorMeta, 0),
    totalBeneficiarios: PROJECTS.reduce((s, p) => s + p.beneficiarios, 0),
    projetosPorStatus,
    distribuicaoODS: odsCount,
    scoreMedioOrganizacoes: Math.round(
      ORGS.reduce((s, o) => s + o.score, 0) / ORGS.length,
    ),
    topProjetos: PROJECTS.filter((p) => p.status === "ativo")
      .sort((a, b) => b.valorCaptado - a.valorCaptado)
      .slice(0, 5),
  };
}

export function getImpactoResumo() {
  const odsCount: Record<string, number> = {};
  PROJECTS.forEach((p) =>
    p.ods.forEach((o) => {
      odsCount[`ODS ${o}`] = (odsCount[`ODS ${o}`] || 0) + 1;
    }),
  );
  return {
    totalBeneficiarios: PROJECTS.reduce((s, p) => s + p.beneficiarios, 0),
    totalCaptadoBRL: PROJECTS.reduce((s, p) => s + p.valorCaptado, 0),
    projetosAtivos: PROJECTS.filter((p) => p.status === "ativo").length,
    distribuicaoODS: odsCount,
  };
}

export function getMonitoramentoConsolidado() {
  const ultimasAtualizacoes = [...TIMELINE]
    .sort((a, b) => new Date(b.data).getTime() - new Date(a.data).getTime())
    .slice(0, 8);
  const performanceIndicadores = INDICATORS.map((i) => ({
    ...i,
    percentual: Math.round((i.realizado / i.meta) * 100),
    status:
      i.realizado >= i.meta
        ? "atingido"
        : i.realizado / i.meta >= 0.7
          ? "no_prazo"
          : "atencao",
  }));
  return {
    projetosMonitorados: PROJECTS.filter((p) => p.status === "ativo").length,
    totalRelatorios: RELATORIOS.length,
    totalEvidencias: RELATORIOS.reduce((s, r) => s + r.evidencias.length, 0),
    totalDepoimentos: DEPOIMENTOS.length,
    ultimasAtualizacoes,
    alertas: [
      {
        tipo: "ok",
        mensagem: "4 projetos com relatório em dia",
        projetoId: null,
      },
      {
        tipo: "atencao",
        mensagem:
          'Projeto "Rota Verde de Reciclagem" aguarda relatório Q1/2025',
        projetoId: "prj-005",
      },
      {
        tipo: "ok",
        mensagem: "Todos os aportes aprovados têm evidências registradas",
        projetoId: null,
      },
    ],
    performanceIndicadores,
  };
}

export function getMonitoramentoProjeto(id: string) {
  const projeto = PROJECTS.find((p) => p.id === id)!;
  const relatorios = RELATORIOS.filter((r) => r.projetoId === id);
  const timeline = TIMELINE.filter((t) => t.projetoId === id).sort(
    (a, b) => new Date(b.data).getTime() - new Date(a.data).getTime(),
  );
  const indicadores = INDICATORS.filter((i) => i.projetoId === id);
  const depoimentos = DEPOIMENTOS.filter((d) => d.projetoId === id);
  return {
    projeto,
    relatorios,
    timeline,
    indicadores,
    depoimentos,
    resumo: {
      totalRelatorios: relatorios.length,
      totalEvidencias: relatorios.reduce((s, r) => s + r.evidencias.length, 0),
      ultimaAtualizacao: timeline[0]?.data || projeto.criadoEm,
      percentualMeta: Math.round(
        (projeto.valorCaptado / projeto.valorMeta) * 100,
      ),
    },
  };
}

export function getOrgScore(id: string) {
  const org = ORGS.find((o) => o.id === id)!;
  return {
    organizacaoId: id,
    score: org.score,
    nivel: org.nivel,
    dimensoes: {
      governanca: Math.min(100, org.score + 5),
      financeiro: Math.max(0, org.score - 8),
      compliance: Math.min(100, org.score + 2),
      capacidadeExecucao: Math.max(0, org.score - 3),
      impacto: Math.min(100, org.score + 7),
    },
  };
}

// ── MOCK DATA — MÓDULOS EXTRAS ────────────────────────────────────────────────

// ── Crowdfunding ──────────────────────────────────────────────────────────────
export const CAMPANHAS = [
  {
    id: "camp-001",
    organizacaoId: "org-001",
    organizacaoNome: "Pantanal Vivo",
    titulo: "Adote 1 Nascente do Pantanal",
    descricao:
      "Cada R$50 financia o plantio de 10 mudas nativas e 1 mês de monitoramento de uma nascente.",
    tipo: "vaquinha_corporativa",
    status: "ativa",
    meta: 150000,
    arrecadado: 97800,
    contribuicoes: 342,
    diasRestantes: 18,
    ods: [6, 13, 15],
    imagemUrl:
      "https://placehold.co/600x300/dcfce7/166534?text=Adote+uma+Nascente",
    empresaPatrocinadora: "Empresa Consciente S.A.",
    ticketMedio: 286,
    criadoEm: "2025-04-01",
  },
  {
    id: "camp-002",
    organizacaoId: "org-004",
    organizacaoNome: "Brigadas Pantanal",
    titulo: "Equipe uma Brigada — Pantanal 2025",
    descricao:
      "R$200 equipa um brigadista com EPI completo por uma temporada de incêndios.",
    tipo: "vaquinha_corporativa",
    status: "ativa",
    meta: 200000,
    arrecadado: 143500,
    contribuicoes: 718,
    diasRestantes: 31,
    ods: [13, 15],
    imagemUrl:
      "https://placehold.co/600x300/fef9c3/92400e?text=Equipe+uma+Brigada",
    empresaPatrocinadora: "Fundação Horizonte Verde",
    ticketMedio: 200,
    criadoEm: "2025-03-15",
  },
  {
    id: "camp-003",
    organizacaoId: "org-003",
    organizacaoNome: "SocialTech",
    titulo: "1 Curso = 1 Futuro",
    descricao:
      "R$120 financia 1 jovem em vulnerabilidade por um curso completo de tecnologia.",
    tipo: "crowdfunding_publico",
    status: "ativa",
    meta: 96000,
    arrecadado: 54240,
    contribuicoes: 452,
    diasRestantes: 45,
    ods: [4, 8],
    imagemUrl:
      "https://placehold.co/600x300/eff6ff/1e40af?text=1+Curso+%3D+1+Futuro",
    empresaPatrocinadora: null,
    ticketMedio: 120,
    criadoEm: "2025-02-20",
  },
  {
    id: "camp-004",
    organizacaoId: "org-007",
    organizacaoNome: "Água Limpa",
    titulo: "Água Limpa para Comunidades Ribeirinhas",
    descricao:
      "R$500 financia 1 sistema de purificação de água para uma família ribeirinha por 5 anos.",
    tipo: "vaquinha_corporativa",
    status: "encerrada",
    meta: 100000,
    arrecadado: 100000,
    contribuicoes: 200,
    diasRestantes: 0,
    ods: [6, 3],
    imagemUrl:
      "https://placehold.co/600x300/ecfeff/0e7490?text=%C3%81gua+Limpa",
    empresaPatrocinadora: "Instituto Impacto Brasil",
    ticketMedio: 500,
    criadoEm: "2024-10-01",
  },
  {
    id: "camp-005",
    organizacaoId: "org-006",
    organizacaoNome: "Raízes",
    titulo: "Cozinha Solidária Salvador",
    descricao:
      "R$30 financia 30 refeições nutritivas para famílias em situação de insegurança alimentar.",
    tipo: "crowdfunding_publico",
    status: "ativa",
    meta: 60000,
    arrecadado: 21500,
    contribuicoes: 717,
    diasRestantes: 60,
    ods: [1, 2, 3],
    imagemUrl:
      "https://placehold.co/600x300/fdf2f8/86198f?text=Cozinha+Solid%C3%A1ria",
    empresaPatrocinadora: null,
    ticketMedio: 30,
    criadoEm: "2025-04-10",
  },
];

// ── Diagnóstico ───────────────────────────────────────────────────────────────
export const DIAGNOSTICO_DIMENSOES = [
  {
    id: "gov",
    titulo: "Governança",
    descricao:
      "Estrutura de tomada de decisão, transparência e accountability.",
    icone: "🏛️",
    perguntas: [
      {
        id: "gov-1",
        texto: "A organização possui estatuto social registrado e atualizado?",
        peso: 3,
      },
      {
        id: "gov-2",
        texto:
          "Existe conselho fiscal ou órgão equivalente com reuniões documentadas?",
        peso: 3,
      },
      {
        id: "gov-3",
        texto: "As atas de reunião são lavradas e arquivadas regularmente?",
        peso: 2,
      },
      {
        id: "gov-4",
        texto:
          "Existe política de conflito de interesses formalmente estabelecida?",
        peso: 2,
      },
      {
        id: "gov-5",
        texto: "Os relatórios anuais são publicados e acessíveis ao público?",
        peso: 2,
      },
    ],
  },
  {
    id: "fin",
    titulo: "Financeiro",
    descricao:
      "Sustentabilidade financeira, controle orçamentário e prestação de contas.",
    icone: "💰",
    perguntas: [
      {
        id: "fin-1",
        texto:
          "A organização possui contabilidade formal com contador responsável?",
        peso: 3,
      },
      {
        id: "fin-2",
        texto: "As demonstrações financeiras são auditadas externamente?",
        peso: 3,
      },
      {
        id: "fin-3",
        texto:
          "Existe orçamento anual formal e controle de execução orçamentária?",
        peso: 2,
      },
      {
        id: "fin-4",
        texto:
          "A organização possui reserva de emergência (mínimo 3 meses de custeio)?",
        peso: 2,
      },
      {
        id: "fin-5",
        texto: "Há diversificação de fontes de receita (mais de 3 fontes)?",
        peso: 2,
      },
    ],
  },
  {
    id: "comp",
    titulo: "Compliance",
    descricao: "Regularidade jurídica, certidões e obrigações legais.",
    icone: "✅",
    perguntas: [
      {
        id: "comp-1",
        texto: "CNPJ ativo e sem pendências na Receita Federal?",
        peso: 3,
      },
      {
        id: "comp-2",
        texto:
          "Certidões negativas de débito (municipal, estadual, federal) em dia?",
        peso: 3,
      },
      {
        id: "comp-3",
        texto: "RAIS e obrigações trabalhistas em dia?",
        peso: 2,
      },
      {
        id: "comp-4",
        texto:
          "Possui título de utilidade pública ou certificação equivalente?",
        peso: 1,
      },
      {
        id: "comp-5",
        texto: "A organização está em conformidade com a LGPD?",
        peso: 2,
      },
    ],
  },
  {
    id: "exec",
    titulo: "Capacidade de Execução",
    descricao: "Equipe, processos e infraestrutura para entregar resultados.",
    icone: "⚙️",
    perguntas: [
      {
        id: "exec-1",
        texto: "Existe equipe remunerada com dedicação exclusiva?",
        peso: 2,
      },
      {
        id: "exec-2",
        texto:
          "Os processos operacionais são documentados em manuais ou procedimentos?",
        peso: 2,
      },
      {
        id: "exec-3",
        texto: "A organização utiliza ferramentas de gestão de projetos?",
        peso: 2,
      },
      {
        id: "exec-4",
        texto:
          "Existe histórico de projetos entregues dentro do prazo e orçamento?",
        peso: 3,
      },
      {
        id: "exec-5",
        texto:
          "A organização possui experiência de pelo menos 3 anos de operação?",
        peso: 3,
      },
    ],
  },
  {
    id: "imp",
    titulo: "Impacto",
    descricao: "Mensuração, evidências e aprendizado de impacto social.",
    icone: "🌱",
    perguntas: [
      {
        id: "imp-1",
        texto:
          "Os projetos possuem indicadores de impacto definidos desde o início?",
        peso: 3,
      },
      {
        id: "imp-2",
        texto:
          "Há coleta sistemática de dados e evidências (fotos, laudos, testemunhos)?",
        peso: 3,
      },
      {
        id: "imp-3",
        texto: "Existe relatório de impacto publicado nos últimos 12 meses?",
        peso: 2,
      },
      {
        id: "imp-4",
        texto: "Os projetos são alinhados a ODS específicos e mensuráveis?",
        peso: 2,
      },
      {
        id: "imp-5",
        texto: "Existe avaliação de satisfação de beneficiários documentada?",
        peso: 2,
      },
    ],
  },
];

export const TRILHAS = [
  {
    id: "trilha-gov",
    dimensao: "gov",
    titulo: "Governança Sólida",
    nivel: "iniciante",
    modulos: [
      {
        titulo: "Como elaborar um estatuto social robusto",
        duracao: "2h",
        tipo: "curso",
      },
      {
        titulo: "Conselho fiscal: composição e boas práticas",
        duracao: "1.5h",
        tipo: "curso",
      },
      {
        titulo: "Modelo de ata de reunião",
        duracao: "30min",
        tipo: "template",
      },
      {
        titulo: "Revisão de estatuto com especialista",
        duracao: "1 sessão",
        tipo: "mentoria",
      },
    ],
    preco: 490,
  },
  {
    id: "trilha-fin",
    dimensao: "fin",
    titulo: "Saúde Financeira",
    nivel: "em_desenvolvimento",
    modulos: [
      {
        titulo: "Contabilidade básica para ONGs",
        duracao: "4h",
        tipo: "curso",
      },
      {
        titulo: "Como construir um orçamento anual",
        duracao: "2h",
        tipo: "curso",
      },
      {
        titulo: "Planilha de DRE para organizações sociais",
        duracao: "1h",
        tipo: "template",
      },
      {
        titulo: "Mentoria com contador especialista em terceiro setor",
        duracao: "2 sessões",
        tipo: "mentoria",
      },
    ],
    preco: 690,
  },
  {
    id: "trilha-imp",
    dimensao: "imp",
    titulo: "Cultura de Impacto",
    nivel: "consolidado",
    modulos: [
      {
        titulo: "Teoria da Mudança: como construir a sua",
        duracao: "3h",
        tipo: "curso",
      },
      {
        titulo: "Indicadores SMART para projetos sociais",
        duracao: "2h",
        tipo: "curso",
      },
      {
        titulo: "Coleta de evidências: fotos, laudos e testemunhos",
        duracao: "1.5h",
        tipo: "curso",
      },
      {
        titulo: "Redação de relatório de impacto para investidores",
        duracao: "2h",
        tipo: "curso",
      },
    ],
    preco: 490,
  },
];

// ── Risco Reputacional ────────────────────────────────────────────────────────
export const RISK_REPORTS = [
  {
    id: "risk-001",
    organizacaoId: "org-001",
    organizacaoNome: "Pantanal Vivo",
    cnpj: "00.000.001/0001-01",
    scoreFinal: 92,
    nivel: "Baixo Risco",
    corNivel: "green",
    geradoEm: "2025-04-15",
    dimensoes: {
      governance: {
        score: 95,
        observacao: "Estatuto atualizado, conselho ativo, atas publicadas.",
      },
      financeiro: {
        score: 89,
        observacao: "Auditoria externa realizada. Sem pendências fiscais.",
      },
      compliance: {
        score: 97,
        observacao: "Todas certidões negativas válidas. LGPD implementada.",
      },
      midiaReputacao: {
        score: 94,
        observacao: "Sem ocorrências negativas. 38 menções positivas em mídia.",
      },
      entregaProjetos: {
        score: 91,
        observacao: "93% dos marcos entregues dentro do prazo histórico.",
      },
    },
    redFlags: [],
    mencoesPositivas: [
      "Vence Prêmio Pantanal Sustentável 2024",
      "Reportagem Globo News — Reflorestamento",
      "Parceria homologada Fundação Horizonte Verde",
    ],
    recomendacao:
      "Organização recomendada para parceria. Risco reputacional muito baixo.",
  },
  {
    id: "risk-002",
    organizacaoId: "org-005",
    organizacaoNome: "Recicla Solidária",
    cnpj: "00.000.005/0001-05",
    scoreFinal: 54,
    nivel: "Risco Moderado",
    corNivel: "yellow",
    geradoEm: "2025-04-15",
    dimensoes: {
      governance: {
        score: 62,
        observacao:
          "Conselho fiscal constituído mas sem atas dos últimos 6 meses.",
      },
      financeiro: {
        score: 48,
        observacao:
          "Sem auditoria externa. Reserva de emergência insuficiente.",
      },
      compliance: {
        score: 71,
        observacao: "CND estadual vencida. Em processo de regularização.",
      },
      midiaReputacao: {
        score: 55,
        observacao: "1 reclamação no Reclame Aqui sobre doação não processada.",
      },
      entregaProjetos: {
        score: 50,
        observacao: "Apenas 1 projeto concluído. Histórico limitado.",
      },
    },
    redFlags: [
      {
        tipo: "atencao",
        descricao: "Certidão negativa estadual vencida há 45 dias",
      },
      { tipo: "atencao", descricao: "Reserva financeira < 1 mês de custeio" },
    ],
    mencoesPositivas: [
      "Premiada Prefeitura de Recife — Economia Circular 2024",
    ],
    recomendacao:
      "Parceria possível mediante regularização fiscal e apresentação de plano de saúde financeira.",
  },
];

// ── CRM de Doadores ───────────────────────────────────────────────────────────
export const DOADORES = [
  {
    id: "don-001",
    nome: "Instituto Impacto Brasil",
    tipo: "PJ",
    email: "doacoes@institutoimpacto.org.br",
    valorTotal: 500000,
    ultimaDoacao: "2025-03-01",
    frequencia: "recorrente",
    status: "ativo",
    tag: "investidor",
  },
  {
    id: "don-002",
    nome: "Fundação Horizonte Verde",
    tipo: "PJ",
    email: "parceria@horizonteverde.org.br",
    valorTotal: 312000,
    ultimaDoacao: "2025-04-01",
    frequencia: "por_projeto",
    status: "ativo",
    tag: "patrocinador",
  },
  {
    id: "don-003",
    nome: "Empresa Consciente S.A.",
    tipo: "PJ",
    email: "esg@empresaconsciente.com.br",
    valorTotal: 200000,
    ultimaDoacao: "2025-02-15",
    frequencia: "recorrente",
    status: "ativo",
    tag: "patrocinador",
  },
  {
    id: "don-004",
    nome: "Rodrigo S.",
    tipo: "PF",
    email: "rodrigo@email.com",
    valorTotal: 3600,
    ultimaDoacao: "2025-04-30",
    frequencia: "mensal",
    status: "ativo",
    tag: "doador_recorrente",
  },
  {
    id: "don-005",
    nome: "Carla M.",
    tipo: "PF",
    email: "carla@email.com",
    valorTotal: 1200,
    ultimaDoacao: "2025-03-15",
    frequencia: "mensal",
    status: "ativo",
    tag: "doador_recorrente",
  },
  {
    id: "don-006",
    nome: "Prefeitura de Cuiabá",
    tipo: "PJ",
    email: "convenios@prefeitura.mt.gov.br",
    valorTotal: 180000,
    ultimaDoacao: "2024-12-01",
    frequencia: "por_projeto",
    status: "inativo",
    tag: "convenio",
  },
  {
    id: "don-007",
    nome: "Banco Bradesco",
    tipo: "PJ",
    email: "fundacao@bradesco.com.br",
    valorTotal: 80000,
    ultimaDoacao: "2025-01-10",
    frequencia: "por_projeto",
    status: "ativo",
    tag: "patrocinador",
  },
  {
    id: "don-008",
    nome: "Ana Paula L.",
    tipo: "PF",
    email: "anapaula@email.com",
    valorTotal: 600,
    ultimaDoacao: "2025-04-20",
    frequencia: "eventual",
    status: "ativo",
    tag: "doador_eventual",
  },
];

// ── Mentoria ──────────────────────────────────────────────────────────────────
export const MENTORES = [
  {
    id: "ment-001",
    nome: "Equipe de Especialistas",
    especialidade: "Captação de Recursos e Fundos Internacionais",
    bio: "Especialistas em elaboração de projetos para fundos internacionais (GEF, Green Climate Fund, UE). Apoiaram 40+ projetos com captação acima de R$500k.",
    ods: [13, 15, 6],
    avaliacaoMedia: 4.9,
    totalSessoes: 127,
    precoSessao: 490,
    disponibilidade: "Seg, Qua, Sex",
    formato: "Online",
    imagem: "https://placehold.co/80x80/dcfce7/166534?text=CR",
  },
  {
    id: "ment-002",
    nome: "Especialistas em Governança",
    especialidade: "Governança e Compliance para Terceiro Setor",
    bio: "Advogados e gestores especializados em legislação do terceiro setor, OSCIP, OS, certificações e compliance LGPD.",
    ods: [16, 17],
    avaliacaoMedia: 4.8,
    totalSessoes: 89,
    precoSessao: 350,
    disponibilidade: "Ter, Qui",
    formato: "Online/Presencial",
    imagem: "https://placehold.co/80x80/eff6ff/1e40af?text=GC",
  },
  {
    id: "ment-003",
    nome: "Especialistas em Comunicação",
    especialidade: "Comunicação de Impacto e Storytelling",
    bio: "Jornalistas e comunicadores com experiência em reportagem social. Ajudam ONGs a contar histórias que movem doadores e investidores.",
    ods: [4, 10],
    avaliacaoMedia: 4.7,
    totalSessoes: 215,
    precoSessao: 280,
    disponibilidade: "Seg a Sex",
    formato: "Online",
    imagem: "https://placehold.co/80x80/fdf2f8/86198f?text=CI",
  },
  {
    id: "ment-004",
    nome: "Especialistas ESG",
    especialidade: "Relatório ESG e Indicadores de Impacto",
    bio: "Consultores ESG com experiência em relatórios GRI, ODS, SROI. Apoiam ONGs e empresas a mensurar e comunicar impacto para investidores.",
    ods: [13, 8, 12],
    avaliacaoMedia: 4.9,
    totalSessoes: 63,
    precoSessao: 650,
    disponibilidade: "Qua, Sex",
    formato: "Online",
    imagem: "https://placehold.co/80x80/fef9c3/92400e?text=ES",
  },
  {
    id: "ment-005",
    nome: "Equipe de Tecnologia Social",
    especialidade: "Tecnologia e Transformação Digital para ONGs",
    bio: "Engenheiros e PMs com histórico em projetos de impacto. Ajudam ONGs a digitalizar processos e usar dados para melhorar resultados.",
    ods: [9, 4],
    avaliacaoMedia: 4.6,
    totalSessoes: 41,
    precoSessao: 390,
    disponibilidade: "Ter, Qui, Sáb",
    formato: "Online",
    imagem: "https://placehold.co/80x80/ecfeff/0e7490?text=TI",
  },
];

// ── Contabilidade ─────────────────────────────────────────────────────────────
export const LANCAMENTOS = [
  {
    id: "lan-001",
    data: "2025-01-05",
    descricao: "Aporte Fundação Horizonte Verde — Parcela 1",
    tipo: "receita",
    categoria: "Doação/Aporte",
    valor: 150000,
    projetoId: "prj-001",
    nf: "NF-001",
  },
  {
    id: "lan-002",
    data: "2025-01-10",
    descricao: "Salários equipe técnica — Janeiro",
    tipo: "despesa",
    categoria: "Pessoal",
    valor: 18500,
    projetoId: "prj-001",
    nf: "REC-001",
  },
  {
    id: "lan-003",
    data: "2025-01-15",
    descricao: "Compra de mudas nativas — Viveiro Cerrado",
    tipo: "despesa",
    categoria: "Insumos",
    valor: 8200,
    projetoId: "prj-001",
    nf: "NF-1234",
  },
  {
    id: "lan-004",
    data: "2025-02-01",
    descricao: "Aporte Empresa Consciente — Campanha Crowdfunding",
    tipo: "receita",
    categoria: "Crowdfunding",
    valor: 45000,
    projetoId: "prj-001",
    nf: "NF-002",
  },
  {
    id: "lan-005",
    data: "2025-02-10",
    descricao: "Salários equipe técnica — Fevereiro",
    tipo: "despesa",
    categoria: "Pessoal",
    valor: 18500,
    projetoId: "prj-001",
    nf: "REC-002",
  },
  {
    id: "lan-006",
    data: "2025-02-20",
    descricao: "Combustível e transporte de campo",
    tipo: "despesa",
    categoria: "Logística",
    valor: 3200,
    projetoId: "prj-001",
    nf: "NF-5678",
  },
  {
    id: "lan-007",
    data: "2025-03-01",
    descricao: "Aporte Fundação Horizonte Verde — Parcela 2",
    tipo: "receita",
    categoria: "Doação/Aporte",
    valor: 162000,
    projetoId: "prj-001",
    nf: "NF-003",
  },
  {
    id: "lan-008",
    data: "2025-03-10",
    descricao: "Salários equipe técnica — Março",
    tipo: "despesa",
    categoria: "Pessoal",
    valor: 18500,
    projetoId: "prj-001",
    nf: "REC-003",
  },
  {
    id: "lan-009",
    data: "2025-03-25",
    descricao: "Equipamentos monitoramento ambiental",
    tipo: "despesa",
    categoria: "Equipamentos",
    valor: 22000,
    projetoId: "prj-001",
    nf: "NF-9012",
  },
  {
    id: "lan-010",
    data: "2025-04-05",
    descricao: "Doações recorrentes — Março/2025",
    tipo: "receita",
    categoria: "Doação PF",
    valor: 4800,
    projetoId: null,
    nf: null,
  },
  {
    id: "lan-011",
    data: "2025-04-10",
    descricao: "Salários equipe técnica — Abril",
    tipo: "despesa",
    categoria: "Pessoal",
    valor: 18500,
    projetoId: "prj-001",
    nf: "REC-004",
  },
  {
    id: "lan-012",
    data: "2025-04-20",
    descricao: "Serviços de consultoria técnica",
    tipo: "despesa",
    categoria: "Consultoria",
    valor: 12000,
    projetoId: "prj-001",
    nf: "NF-3456",
  },
];

export function getCrowdfundingStats() {
  const ativas = CAMPANHAS.filter((c) => c.status === "ativa");
  return {
    totalCampanhas: CAMPANHAS.length,
    campanhasAtivas: ativas.length,
    totalArrecadado: CAMPANHAS.reduce((s, c) => s + c.arrecadado, 0),
    totalContribuicoes: CAMPANHAS.reduce((s, c) => s + c.contribuicoes, 0),
    campanhas: CAMPANHAS,
  };
}

export function getContabilidadeResumo(orgId: string) {
  const lancamentos = LANCAMENTOS.filter(
    (l) => !orgId || l.projetoId === "prj-001" || !l.projetoId,
  );
  const receitas = lancamentos.filter((l) => l.tipo === "receita");
  const despesas = lancamentos.filter((l) => l.tipo === "despesa");
  const totalReceitas = receitas.reduce((s, l) => s + l.valor, 0);
  const totalDespesas = despesas.reduce((s, l) => s + l.valor, 0);
  const porCategoria: Record<string, number> = {};
  despesas.forEach((l) => {
    porCategoria[l.categoria] = (porCategoria[l.categoria] || 0) + l.valor;
  });
  return {
    totalReceitas,
    totalDespesas,
    saldo: totalReceitas - totalDespesas,
    porCategoria,
    lancamentos,
  };
}

export function getCRMStats(orgId: string) {
  const totalArrecadado = DOADORES.reduce((s, d) => s + d.valorTotal, 0);
  const ativos = DOADORES.filter((d) => d.status === "ativo");
  const recorrentes = DOADORES.filter(
    (d) => d.frequencia === "mensal" || d.frequencia === "recorrente",
  );
  return {
    totalDoadores: DOADORES.length,
    doadoresAtivos: ativos.length,
    doadoresRecorrentes: recorrentes.length,
    totalArrecadado,
    ticketMedio: Math.round(totalArrecadado / DOADORES.length),
    doadores: DOADORES,
  };
}

// ─── MARCOS LEGAIS BRASILEIROS ────────────────────────────────────────────────
export const MARCOS_LEGAIS = [
  {
    id: "doacao-direta",
    nome: "Doação Direta",
    lei: "Art. 13 da Lei 9.249/95 + RIR/2018",
    icone: "🤝",
    cor: "blue",
    descricao:
      "Doação direta a OSC/ONG sem contraprestação. Dedutível como despesa operacional para empresas no Lucro Real.",
    deducaoTipo: "despesa_operacional",
    deducaoLimite: 2,
    deducaoBase: "receita_operacional_liquida",
    deducaoLabel: "até 2% da ROL",
    focoAreas: ["Qualquer área social", "Saúde", "Educação", "Meio Ambiente"],
    ods: [1, 2, 3, 4, 6, 10, 11, 13, 15, 16, 17],
    eligibilidade: {
      lucroReal: true,
      lucroPresumido: false,
      simplesNacional: false,
    },
    orgaoAprovador: "Nenhum (declaração na DIPJ/ECF)",
    prazoAprovacao: "Imediato",
    tipoContrato: "Termo de Doação",
    beneficiosEmpresa: [
      "Dedução de até 2% da receita operacional líquida como despesa",
      "Relatório ESG / Balanço Social",
      "Visibilidade de marca com o público da ONG",
      "Certificado de parceria social",
    ],
    obrigacoesONG: [
      "Emitir recibo de doação com CNPJ",
      "Prestar contas ao doador anualmente",
      "Manter escrituração contábil regular",
    ],
    etapas: [
      {
        titulo: "Due Diligence da ONG",
        desc: "Verificar CNPJ ativo, certidões, transparência financeira",
      },
      {
        titulo: "Assinatura do Termo de Doação",
        desc: "Contrato com valor, finalidade e prazo",
      },
      {
        titulo: "Transferência e NF",
        desc: "Emissão de recibo/NF pelo receptor",
      },
      {
        titulo: "Acompanhamento semestral",
        desc: "Relatório de execução do projeto",
      },
      {
        titulo: "Prestação de contas final",
        desc: "Relatório financeiro + evidências fotográficas",
      },
    ],
    ongsSugeridas: ["ONG", "OSCIP", "Associação", "Fundação"],
  },
  {
    id: "fia",
    nome: "FIA — Fundo da Infância e Adolescente",
    lei: "Lei 8.069/90 (ECA) art. 260 + Lei 12.594/12",
    icone: "👧",
    cor: "yellow",
    descricao:
      "Destinação de parte do IR devido a projetos aprovados pelo CMDCA para proteção de crianças e adolescentes.",
    deducaoTipo: "IR_devido",
    deducaoLimite: 1,
    deducaoBase: "IR_devido",
    deducaoLabel: "até 1% do IR devido",
    focoAreas: [
      "Criança e adolescente",
      "Educação",
      "Assistência Social",
      "Esporte",
    ],
    ods: [1, 2, 3, 4, 10, 16],
    eligibilidade: {
      lucroReal: true,
      lucroPresumido: true,
      simplesNacional: false,
    },
    orgaoAprovador: "CMDCA Municipal/Estadual",
    prazoAprovacao: "30 a 60 dias",
    tipoContrato: "Termo de Destinação FIA",
    beneficiosEmpresa: [
      "Abatimento direto no IR devido (até 1%)",
      "Sem custo adicional — é redirecionamento de imposto",
      "Certificado de empresa cidadã",
      "Associação da marca a causa de alta aprovação social",
    ],
    obrigacoesONG: [
      "Projeto cadastrado e aprovado pelo CMDCA",
      "Prestação de contas ao CMDCA e ao doador",
      "Conta bancária específica para o fundo",
    ],
    etapas: [
      {
        titulo: "Identificar CMDCA local",
        desc: "Buscar conselho municipal ou estadual da área de atuação",
      },
      {
        titulo: "Selecionar projeto aprovado",
        desc: "Listar projetos com captação aberta no CMDCA",
      },
      {
        titulo: "Fazer a destinação via DARF",
        desc: "Emitir DARF com código específico do fundo",
      },
      {
        titulo: "Comunicar a ONG beneficiada",
        desc: "Enviar comprovante de destinação",
      },
      {
        titulo: "Relatório anual",
        desc: "A ONG envia prestação de contas ao CMDCA e ao empresa",
      },
    ],
    ongsSugeridas: [
      "ONG voltada a crianças/adolescentes com projeto aprovado pelo CMDCA",
    ],
  },
  {
    id: "lei-rouanet",
    nome: "Lei Rouanet — PRONAC",
    lei: "Lei 8.313/91",
    icone: "🎭",
    cor: "purple",
    descricao:
      "Patrocínio ou doação a projetos culturais aprovados pelo Ministério da Cultura. Maior limite de dedução disponível.",
    deducaoTipo: "IR_devido",
    deducaoLimite: 4,
    deducaoBase: "IR_devido",
    deducaoLabel: "até 4% do IR devido",
    focoAreas: ["Cultura", "Arte", "Patrimônio Histórico", "Audiovisual"],
    ods: [4, 10, 11, 16],
    eligibilidade: {
      lucroReal: true,
      lucroPresumido: false,
      simplesNacional: false,
    },
    orgaoAprovador: "Ministério da Cultura (MinC / Ancine)",
    prazoAprovacao: "60 a 180 dias",
    tipoContrato: "Contrato de Patrocínio Cultural",
    beneficiosEmpresa: [
      "Maior limite: até 4% do IR devido",
      "Exposição de marca em eventos culturais de alto impacto",
      "Associação com cultura e inovação",
      "Possibilidade de cotas de naming rights",
    ],
    obrigacoesONG: [
      "Projeto aprovado pelo MinC com número PRONAC",
      "Conta corrente específica para o projeto",
      "Prestação de contas ao MinC via plataforma Salic",
    ],
    etapas: [
      {
        titulo: "Pesquisar projetos aprovados",
        desc: "Buscar no portal Salic/MinC projetos com captação aberta",
      },
      {
        titulo: "Negociar contrapartidas",
        desc: "Definir visibilidade de marca, naming, espaços",
      },
      {
        titulo: "Assinar contrato de patrocínio",
        desc: "Com o número PRONAC e dados do projeto",
      },
      {
        titulo: "Transferir e reportar à Receita",
        desc: "Lançar na DIPJ/ECF como incentivo cultural",
      },
      {
        titulo: "Relatório de execução cultural",
        desc: "Enviado ao MinC após conclusão do projeto",
      },
    ],
    ongsSugeridas: [
      "Organizações culturais",
      "Museus",
      "Grupos teatrais",
      "ONGs de patrimônio",
    ],
  },
  {
    id: "lei-esporte",
    nome: "Lei de Incentivo ao Esporte",
    lei: "Lei 11.438/06",
    icone: "⚽",
    cor: "green",
    descricao:
      "Patrocínio a projetos desportivos e paradesportivos aprovados pelo Ministério do Esporte.",
    deducaoTipo: "IR_devido",
    deducaoLimite: 1,
    deducaoBase: "IR_devido",
    deducaoLabel: "até 1% do IR devido",
    focoAreas: ["Esporte", "Paraesporte", "Esporte escolar", "Alto rendimento"],
    ods: [3, 4, 10],
    eligibilidade: {
      lucroReal: true,
      lucroPresumido: false,
      simplesNacional: false,
    },
    orgaoAprovador: "Ministério do Esporte",
    prazoAprovacao: "60 a 90 dias",
    tipoContrato: "Contrato de Patrocínio Esportivo",
    beneficiosEmpresa: [
      "Dedução de até 1% do IR devido",
      "Visibilidade em eventos e competições esportivas",
      "Associação com saúde, bem-estar e performance",
      "Impacto social mensurável",
    ],
    obrigacoesONG: [
      "Projeto aprovado pelo Ministério do Esporte",
      "Relatório periódico de execução",
      "Visibilidade ao patrocinador conforme contrato",
    ],
    etapas: [
      {
        titulo: "Pesquisar projetos aprovados",
        desc: "Portal do Ministério do Esporte",
      },
      {
        titulo: "Definir modalidade e contrapartidas",
        desc: "Naming, uniformes, placas, redes sociais",
      },
      {
        titulo: "Assinar contrato de patrocínio",
        desc: "Com número de aprovação ministerial",
      },
      {
        titulo: "Declarar na ECF/DIPJ",
        desc: "Como incentivo fiscal à atividade esportiva",
      },
      {
        titulo: "Relatório de execução",
        desc: "Enviado ao Ministério ao final do projeto",
      },
    ],
    ongsSugeridas: [
      "Clubes esportivos sem fins lucrativos",
      "Associações paradesportivas",
    ],
  },
  {
    id: "pronon-pronas",
    nome: "PRONON / PRONAS",
    lei: "Lei 12.715/12",
    icone: "🏥",
    cor: "red",
    descricao:
      "PRONON: prevenção e combate ao câncer. PRONAS: atenção à pessoa com deficiência. Ambos com dedução direta no IR.",
    deducaoTipo: "IR_devido",
    deducaoLimite: 1,
    deducaoBase: "IR_devido",
    deducaoLabel: "até 1% do IR (cada programa)",
    focoAreas: [
      "Saúde oncológica",
      "Pessoa com deficiência",
      "Reabilitação",
      "Pesquisa médica",
    ],
    ods: [3, 10],
    eligibilidade: {
      lucroReal: true,
      lucroPresumido: false,
      simplesNacional: false,
    },
    orgaoAprovador: "Ministério da Saúde (MS)",
    prazoAprovacao: "90 a 120 dias",
    tipoContrato: "Termo de Destinação PRONON/PRONAS",
    beneficiosEmpresa: [
      "Até 1% do IR pelo PRONON + 1% pelo PRONAS (2% combinados)",
      "Associação com saúde e responsabilidade social",
      "Alta aprovação pública",
    ],
    obrigacoesONG: [
      "Hospital, entidade ou instituto com projeto aprovado pelo MS",
      "Prestação de contas periódica ao Ministério",
      "Relatório de resultados em saúde",
    ],
    etapas: [
      {
        titulo: "Identificar entidade habilitada pelo MS",
        desc: "Lista disponível no portal do Ministério da Saúde",
      },
      {
        titulo: "Formalizar a destinação",
        desc: "Via DARF com código específico",
      },
      {
        titulo: "Emitir recibo",
        desc: "Entidade emite recibo de doação com CNPJ",
      },
      { titulo: "Declarar na ECF", desc: "Lançamento como incentivo à saúde" },
    ],
    ongsSugeridas: [
      "Hospitais filantrópicos",
      "Institutos de oncologia",
      "APAEs",
      "Entidades de reabilitação",
    ],
  },
  {
    id: "mrosc",
    nome: "MROSC — Marco Regulatório das OSCs",
    lei: "Lei 13.019/2014",
    icone: "📋",
    cor: "slate",
    descricao:
      "Principal marco para parcerias entre OSCs e poder público. Define Termo de Fomento, Colaboração e Acordo de Cooperação.",
    deducaoTipo: "nao_aplicavel",
    deducaoLimite: 0,
    deducaoBase: "nao_aplicavel",
    deducaoLabel: "Não aplica dedução fiscal privada",
    focoAreas: [
      "Qualquer área de interesse público",
      "Parceria com poder público",
    ],
    ods: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17],
    eligibilidade: {
      lucroReal: false,
      lucroPresumido: false,
      simplesNacional: false,
    },
    orgaoAprovador: "Órgão público parceiro (municipal, estadual ou federal)",
    prazoAprovacao: "60 a 120 dias",
    tipoContrato: "Termo de Fomento / Colaboração",
    beneficiosEmpresa: [
      "Aplicável principalmente para parcerias com poder público",
      "Compliance rigoroso aumenta credibilidade da ONG para investidores privados",
    ],
    obrigacoesONG: [
      "Chamamento público ou dispensa fundamentada",
      "Plano de trabalho detalhado",
      "Prestação de contas via plataforma do órgão público",
    ],
    etapas: [
      {
        titulo: "Chamamento público",
        desc: "Publicação de edital pelo órgão público",
      },
      {
        titulo: "Plano de trabalho",
        desc: "OSC apresenta cronograma, metas e orçamento",
      },
      {
        titulo: "Assinatura do termo",
        desc: "Fomento, Colaboração ou Cooperação",
      },
      {
        titulo: "Execução com monitoramento",
        desc: "Visitas técnicas e relatórios periódicos",
      },
      {
        titulo: "Prestação de contas final",
        desc: "Financeira + execução física via sistema",
      },
    ],
    ongsSugeridas: [
      "Qualquer OSC com CNPJ ativo há mais de 3 anos e regularidade fiscal",
    ],
  },
];

// Cálculo de benefício fiscal estimado
export function calcularBeneficioFiscal(
  marcoId: string,
  lucroAnual: number,
  receitaOperacional: number,
  valorDoacao: number,
) {
  const marco = MARCOS_LEGAIS.find((m) => m.id === marcoId);
  if (!marco)
    return { economiaEstimada: 0, valorEfetivo: 0, percentualDesconto: 0 };

  const IR_ALIQUOTA = 0.15; // 15% CSLL + IR básico
  const IR_ADICIONAL = lucroAnual > 240000 ? (lucroAnual - 240000) * 0.1 : 0;
  const IR_TOTAL = lucroAnual * IR_ALIQUOTA + IR_ADICIONAL;

  let economiaEstimada = 0;
  let limiteDeducao = 0;

  if (marco.deducaoTipo === "IR_devido") {
    limiteDeducao = IR_TOTAL * (marco.deducaoLimite / 100);
    economiaEstimada = Math.min(valorDoacao, limiteDeducao);
  } else if (marco.deducaoTipo === "despesa_operacional") {
    limiteDeducao = receitaOperacional * (marco.deducaoLimite / 100);
    const doacaoValida = Math.min(valorDoacao, limiteDeducao);
    economiaEstimada = doacaoValida * IR_ALIQUOTA; // economia pelo abatimento
  }

  const valorEfetivo = valorDoacao - economiaEstimada;
  const percentualDesconto =
    valorDoacao > 0 ? Math.round((economiaEstimada / valorDoacao) * 100) : 0;

  return {
    economiaEstimada,
    valorEfetivo,
    percentualDesconto,
    limiteDeducao,
    IR_TOTAL,
  };
}
