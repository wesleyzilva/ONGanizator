// Dados mock embutidos — usados no build estático (GitHub Pages)
// Espelha os dados do apps/api/src/mock/seed.ts e monitoramento.ts

export const ORGS = [
  { id: 'org-001', razaoSocial: 'Instituto Pantanal Vivo', nomeFantasia: 'Pantanal Vivo', cnpj: '00.000.001/0001-01', tipo: 'ong', areaAtuacao: 'Meio Ambiente', ods: [13, 15, 3], score: 87, nivel: 'referencia', estado: 'MT', cidade: 'Cuiabá', ativo: true, criadoEm: '2020-03-15' },
  { id: 'org-002', razaoSocial: 'Cooperativa Sementes do Cerrado', nomeFantasia: 'Sementes Cerrado', cnpj: '00.000.002/0001-02', tipo: 'cooperativa', areaAtuacao: 'Agricultura Familiar', ods: [2, 8, 15], score: 74, nivel: 'consolidado', estado: 'GO', cidade: 'Goiânia', ativo: true, criadoEm: '2018-07-20' },
  { id: 'org-003', razaoSocial: 'Social Tech Impacto LTDA', nomeFantasia: 'SocialTech', cnpj: '00.000.003/0001-03', tipo: 'negocio_social', areaAtuacao: 'Educação e Tecnologia', ods: [4, 8, 9], score: 68, nivel: 'em_desenvolvimento', estado: 'SP', cidade: 'São Paulo', ativo: true, criadoEm: '2022-01-10' },
  { id: 'org-004', razaoSocial: 'Associação Brigadas do Pantanal', nomeFantasia: 'Brigadas Pantanal', cnpj: '00.000.004/0001-04', tipo: 'ong', areaAtuacao: 'Defesa Civil Ambiental', ods: [13, 15], score: 91, nivel: 'referencia', estado: 'MS', cidade: 'Campo Grande', ativo: true, criadoEm: '2019-05-30' },
  { id: 'org-005', razaoSocial: 'Cooperativa Reciclagem Solidária', nomeFantasia: 'Recicla Solidária', cnpj: '00.000.005/0001-05', tipo: 'cooperativa', areaAtuacao: 'Reciclagem e Economia Circular', ods: [1, 8, 12], score: 55, nivel: 'em_desenvolvimento', estado: 'PE', cidade: 'Recife', ativo: true, criadoEm: '2021-09-14' },
  { id: 'org-006', razaoSocial: 'ONG Raízes Comunitárias', nomeFantasia: 'Raízes', cnpj: '00.000.006/0001-06', tipo: 'ong', areaAtuacao: 'Desenvolvimento Comunitário', ods: [1, 3, 10], score: 62, nivel: 'consolidado', estado: 'BA', cidade: 'Salvador', ativo: true, criadoEm: '2017-11-02' },
  { id: 'org-007', razaoSocial: 'Instituto Água Limpa', nomeFantasia: 'Água Limpa', cnpj: '00.000.007/0001-07', tipo: 'ong', areaAtuacao: 'Saneamento e Recursos Hídricos', ods: [6, 3, 11], score: 79, nivel: 'consolidado', estado: 'AM', cidade: 'Manaus', ativo: true, criadoEm: '2016-02-28' },
  { id: 'org-008', razaoSocial: 'EduImpacto Social', nomeFantasia: 'EduImpacto', cnpj: '00.000.008/0001-08', tipo: 'negocio_social', areaAtuacao: 'Educação', ods: [4, 10], score: 44, nivel: 'iniciante', estado: 'RJ', cidade: 'Rio de Janeiro', ativo: true, criadoEm: '2023-03-01' },
];

export const PROJECTS = [
  { id: 'prj-001', organizacaoId: 'org-001', organizacaoNome: 'Pantanal Vivo', titulo: 'Adote uma Nascente', descricao: 'Restauração de nascentes na Bacia do Alto Paraguai com comunidades locais.', ods: [6, 13, 15], status: 'ativo', valorMeta: 500000, valorCaptado: 312000, beneficiarios: 4200, estado: 'MT', cidade: 'Cuiabá', dataInicio: '2024-01-01', dataFim: '2025-12-31', criadoEm: '2023-11-10' },
  { id: 'prj-002', organizacaoId: 'org-004', organizacaoNome: 'Brigadas Pantanal', titulo: 'Adote uma Brigada Pantaneira', descricao: 'Capacitação e equipamento de 27 brigadas em 8 municípios do Pantanal.', ods: [13, 15, 3], status: 'ativo', valorMeta: 750000, valorCaptado: 580000, beneficiarios: 8700, estado: 'MS', cidade: 'Campo Grande', dataInicio: '2024-03-01', dataFim: '2026-02-28', criadoEm: '2024-01-15' },
  { id: 'prj-003', organizacaoId: 'org-002', organizacaoNome: 'Sementes Cerrado', titulo: 'Banco de Sementes Nativas', descricao: 'Coleta, armazenamento e distribuição de sementes nativas do Cerrado.', ods: [2, 15, 8], status: 'ativo', valorMeta: 180000, valorCaptado: 95000, beneficiarios: 320, estado: 'GO', cidade: 'Goiânia', dataInicio: '2024-06-01', dataFim: '2025-05-31', criadoEm: '2024-04-20' },
  { id: 'prj-004', organizacaoId: 'org-007', organizacaoNome: 'Água Limpa', titulo: 'Poços Artesianos Comunidades Ribeirinhas', descricao: 'Instalação de sistemas de captação e purificação de água em comunidades ribeirinhas.', ods: [6, 3, 11], status: 'ativo', valorMeta: 420000, valorCaptado: 210000, beneficiarios: 2100, estado: 'AM', cidade: 'Manaus', dataInicio: '2024-02-01', dataFim: '2025-01-31', criadoEm: '2023-12-01' },
  { id: 'prj-005', organizacaoId: 'org-005', organizacaoNome: 'Recicla Solidária', titulo: 'Rota Verde de Reciclagem', descricao: 'Logística reversa e geração de créditos de carbono para catadores.', ods: [1, 8, 12], status: 'em_avaliacao', valorMeta: 260000, valorCaptado: 0, beneficiarios: 680, estado: 'PE', cidade: 'Recife', dataInicio: '2025-01-01', dataFim: '2025-12-31', criadoEm: '2024-09-05' },
  { id: 'prj-006', organizacaoId: 'org-003', organizacaoNome: 'SocialTech', titulo: 'Plataforma de Renda para Jovens em Vulnerabilidade', descricao: 'Cursos técnicos online e matchmaking com empresas parceiras.', ods: [4, 8, 9], status: 'ativo', valorMeta: 340000, valorCaptado: 175000, beneficiarios: 1500, estado: 'SP', cidade: 'São Paulo', dataInicio: '2024-05-01', dataFim: '2025-04-30', criadoEm: '2024-03-10' },
  { id: 'prj-007', organizacaoId: 'org-006', organizacaoNome: 'Raízes', titulo: 'Cozinhas Comunitárias Segurança Alimentar', descricao: 'Implantação de cozinhas comunitárias em comunidades de baixa renda.', ods: [1, 2, 3], status: 'ativo', valorMeta: 155000, valorCaptado: 88000, beneficiarios: 900, estado: 'BA', cidade: 'Salvador', dataInicio: '2024-07-01', dataFim: '2025-06-30', criadoEm: '2024-05-22' },
  { id: 'prj-008', organizacaoId: 'org-008', organizacaoNome: 'EduImpacto', titulo: 'Alfabetização Digital Comunidades Periféricas', descricao: 'Acesso a dispositivos e internet em comunidades sem conectividade.', ods: [4, 10], status: 'rascunho', valorMeta: 120000, valorCaptado: 0, beneficiarios: 600, estado: 'RJ', cidade: 'Rio de Janeiro', dataInicio: '2025-02-01', dataFim: '2025-12-31', criadoEm: '2024-11-01' },
];

export const INVESTORS = [
  { id: 'inv-001', nome: 'Fundação Horizonte Verde', tipo: 'fundacao', ods: [13, 15, 6], ticketMin: 100000, ticketMax: 1000000, regioes: ['MT', 'MS', 'GO', 'AM'], ativo: true },
  { id: 'inv-002', nome: 'Instituto Impacto Brasil', tipo: 'instituto', ods: [1, 3, 4, 8], ticketMin: 50000, ticketMax: 500000, regioes: ['SP', 'RJ', 'BA', 'PE'], ativo: true },
  { id: 'inv-003', nome: 'Empresa Consciente S.A.', tipo: 'empresa', ods: [8, 9, 12], ticketMin: 200000, ticketMax: 2000000, regioes: ['SP', 'RJ'], ativo: true },
  { id: 'inv-004', nome: 'Investidor Social Demo', tipo: 'pessoa_fisica', ods: [4, 10], ticketMin: 5000, ticketMax: 50000, regioes: ['SP', 'RJ', 'MG'], ativo: true },
];

export const INDICATORS = [
  { projetoId: 'prj-001', nome: 'Nascentes restauradas', meta: 150, realizado: 93, unidade: 'nascentes', periodo: '2024' },
  { projetoId: 'prj-001', nome: 'Famílias beneficiadas', meta: 500, realizado: 412, unidade: 'famílias', periodo: '2024' },
  { projetoId: 'prj-002', nome: 'Brigadistas treinados', meta: 270, realizado: 270, unidade: 'pessoas', periodo: '2024' },
  { projetoId: 'prj-002', nome: 'Incêndios combatidos', meta: 80, realizado: 64, unidade: 'ocorrências', periodo: '2024' },
  { projetoId: 'prj-003', nome: 'Espécies catalogadas', meta: 200, realizado: 178, unidade: 'espécies', periodo: '2024' },
  { projetoId: 'prj-004', nome: 'Poços instalados', meta: 30, realizado: 14, unidade: 'poços', periodo: '2024' },
  { projetoId: 'prj-006', nome: 'Jovens capacitados', meta: 800, realizado: 540, unidade: 'pessoas', periodo: '2024' },
  { projetoId: 'prj-007', nome: 'Refeições servidas', meta: 100000, realizado: 67000, unidade: 'refeições', periodo: '2024' },
];

export const RELATORIOS = [
  {
    id: 'rel-001', projetoId: 'prj-001', titulo: 'Relatório D0 — Linha de Base',
    tipo: 'D0', periodo: 'Jan/2024', status: 'publicado', dataPublicacao: '2024-01-31',
    resumo: 'Levantamento inicial das 150 nascentes prioritárias na Bacia do Alto Paraguai. Diagnóstico socioeconômico de 412 famílias participantes concluído.',
    indicadores: [
      { nome: 'Nascentes mapeadas', meta: 150, realizado: 150, unidade: 'unidades' },
      { nome: 'Famílias cadastradas', meta: 500, realizado: 412, unidade: 'famílias' },
      { nome: 'Viveiros implantados', meta: 10, realizado: 4, unidade: 'viveiros' },
    ],
    evidencias: [
      { tipo: 'foto', descricao: 'Mapeamento de nascente MT-047', url: 'https://placehold.co/400x300/dcfce7/166534?text=Nascente+MT-047' },
      { tipo: 'foto', descricao: 'Reunião comunitária — Famílias participantes', url: 'https://placehold.co/400x300/dcfce7/166534?text=Reuni%C3%A3o+Comunit%C3%A1ria' },
      { tipo: 'documento', descricao: 'Relatório técnico completo D0', url: '#' },
    ],
  },
  {
    id: 'rel-002', projetoId: 'prj-001', titulo: 'Relatório Anual — Ano 1',
    tipo: 'anual', periodo: 'Jan–Dez/2024', status: 'publicado', dataPublicacao: '2025-01-15',
    resumo: 'Primeiro ano de execução com 93 nascentes em processo de restauração. Crescimento de 38% na cobertura vegetal nas áreas monitoradas. Geração de R$ 280 mil em renda para comunidades.',
    indicadores: [
      { nome: 'Nascentes em restauração', meta: 100, realizado: 93, unidade: 'unidades' },
      { nome: 'Mudas plantadas', meta: 50000, realizado: 47200, unidade: 'mudas' },
      { nome: 'Renda gerada comunidades', meta: 300000, realizado: 280000, unidade: 'R$' },
      { nome: 'Cobertura vegetal recuperada', meta: 40, realizado: 38, unidade: '%' },
    ],
    evidencias: [
      { tipo: 'foto', descricao: 'Nascente MT-012 — antes e depois (12 meses)', url: 'https://placehold.co/400x300/dcfce7/166534?text=Antes+e+Depois' },
      { tipo: 'foto', descricao: 'Viveiro comunitário — produção de mudas nativas', url: 'https://placehold.co/400x300/dcfce7/166534?text=Viveiro+Nativas' },
      { tipo: 'video', descricao: 'Drone — sobrevoo nascente recuperada MT-012', url: '#' },
      { tipo: 'documento', descricao: 'Relatório anual completo Ano 1', url: '#' },
    ],
  },
  {
    id: 'rel-003', projetoId: 'prj-002', titulo: 'Relatório D0 — Linha de Base Brigadas',
    tipo: 'D0', periodo: 'Mar/2024', status: 'publicado', dataPublicacao: '2024-03-31',
    resumo: '27 brigadas mapeadas em 8 municípios. 270 brigadistas cadastrados. Levantamento de necessidades de equipamento e treinamento concluído.',
    indicadores: [
      { nome: 'Brigadas mapeadas', meta: 27, realizado: 27, unidade: 'brigadas' },
      { nome: 'Brigadistas cadastrados', meta: 270, realizado: 270, unidade: 'pessoas' },
      { nome: 'Municípios cobertos', meta: 8, realizado: 8, unidade: 'municípios' },
    ],
    evidencias: [
      { tipo: 'foto', descricao: 'Capacitação Brigada Corumbá', url: 'https://placehold.co/400x300/fef9c3/92400e?text=Brigada+Corumb%C3%A1' },
      { tipo: 'foto', descricao: 'Entrega de equipamentos EPI', url: 'https://placehold.co/400x300/fef9c3/92400e?text=Entrega+EPI' },
    ],
  },
  {
    id: 'rel-004', projetoId: 'prj-002', titulo: 'Relatório Quadrimestral — Q2/2024',
    tipo: 'quadrimestral', periodo: 'Mai–Ago/2024', status: 'publicado', dataPublicacao: '2024-09-10',
    resumo: '64 incêndios combatidos com sucesso no período. Redução de 31% na área queimada comparado ao mesmo período de 2023.',
    indicadores: [
      { nome: 'Incêndios combatidos', meta: 30, realizado: 64, unidade: 'ocorrências' },
      { nome: 'Área protegida', meta: 50000, realizado: 78000, unidade: 'hectares' },
      { nome: 'Alertas respondidos < 2h', meta: 80, realizado: 91, unidade: '%' },
    ],
    evidencias: [
      { tipo: 'foto', descricao: 'Brigada em ação — Pantanal Norte', url: 'https://placehold.co/400x300/fef9c3/92400e?text=Brigada+A%C3%A7%C3%A3o' },
      { tipo: 'video', descricao: 'Drone — área protegida após combate', url: '#' },
      { tipo: 'documento', descricao: 'Relatório quadrimestral Q2/2024', url: '#' },
    ],
  },
];

export const TIMELINE = [
  { projetoId: 'prj-001', data: '2024-01-15', tipo: 'marco', titulo: 'Início do Projeto', descricao: 'Assinatura do termo de parceria com Chalana Esperança e início do mapeamento.' },
  { projetoId: 'prj-001', data: '2024-01-31', tipo: 'relatorio', titulo: 'Relatório D0 publicado', descricao: 'Linha de base concluída: 150 nascentes mapeadas, 412 famílias cadastradas.' },
  { projetoId: 'prj-001', data: '2024-03-01', tipo: 'aporte', titulo: 'Aporte recebido — R$ 150.000', descricao: 'Fundação Horizonte Verde confirma primeiro desembolso.' },
  { projetoId: 'prj-001', data: '2024-06-15', tipo: 'conquista', titulo: '50 nascentes em restauração', descricao: 'Marco de 50 nascentes atingido antes do prazo previsto.' },
  { projetoId: 'prj-001', data: '2024-09-01', tipo: 'aporte', titulo: 'Aporte recebido — R$ 162.000', descricao: 'Segundo desembolso aprovado após validação do relatório quadrimestral.' },
  { projetoId: 'prj-001', data: '2025-01-15', tipo: 'relatorio', titulo: 'Relatório Anual Ano 1 publicado', descricao: '93 nascentes em restauração, 47.200 mudas plantadas, R$ 280k gerados.' },
  { projetoId: 'prj-002', data: '2024-03-01', tipo: 'marco', titulo: 'Início do Projeto Brigadas', descricao: '27 brigadas cadastradas, treinamento inicial iniciado em 8 municípios.' },
  { projetoId: 'prj-002', data: '2024-03-31', tipo: 'relatorio', titulo: 'Relatório D0 publicado', descricao: '270 brigadistas cadastrados, 8 municípios cobertos.' },
  { projetoId: 'prj-002', data: '2024-05-20', tipo: 'conquista', titulo: 'Monitoramento remoto ativo', descricao: 'Sistema de alertas por satélite implantado em todas as brigadas.' },
  { projetoId: 'prj-002', data: '2024-09-10', tipo: 'relatorio', titulo: 'Relatório Q2/2024 publicado', descricao: '64 incêndios combatidos, 78.000 hectares protegidos, 91% alertas respondidos < 2h.' },
];

export const DEPOIMENTOS = [
  { projetoId: 'prj-001', autor: 'Família participante — MT', texto: 'A nascente que estava seca há 5 anos voltou a brotar água. Agora temos água limpa para o gado e para a casa.', data: '2024-12-10' },
  { projetoId: 'prj-002', autor: 'Brigadista — Corumbá, MS', texto: 'Com o novo equipamento e o treinamento, conseguimos chegar muito mais rápido nos focos. Antes perdíamos horas sem os EPIs certos.', data: '2024-10-05' },
];

// ── Funções que espelham os endpoints da API ──────────────────────────────────

export function getDashboard() {
  const projetosPorStatus: Record<string, number> = {};
  PROJECTS.forEach(p => { projetosPorStatus[p.status] = (projetosPorStatus[p.status] || 0) + 1; });
  const odsCount: Record<string, number> = {};
  PROJECTS.forEach(p => p.ods.forEach(o => { odsCount[`ODS ${o}`] = (odsCount[`ODS ${o}`] || 0) + 1; }));
  return {
    totalOrganizacoes: ORGS.length,
    totalProjetos: PROJECTS.length,
    totalInvestidores: INVESTORS.length,
    totalCaptadoBRL: PROJECTS.reduce((s, p) => s + p.valorCaptado, 0),
    totalMetaBRL: PROJECTS.reduce((s, p) => s + p.valorMeta, 0),
    totalBeneficiarios: PROJECTS.reduce((s, p) => s + p.beneficiarios, 0),
    projetosPorStatus,
    distribuicaoODS: odsCount,
    scoreMedioOrganizacoes: Math.round(ORGS.reduce((s, o) => s + o.score, 0) / ORGS.length),
    topProjetos: PROJECTS.filter(p => p.status === 'ativo').sort((a, b) => b.valorCaptado - a.valorCaptado).slice(0, 5),
  };
}

export function getImpactoResumo() {
  const odsCount: Record<string, number> = {};
  PROJECTS.forEach(p => p.ods.forEach(o => { odsCount[`ODS ${o}`] = (odsCount[`ODS ${o}`] || 0) + 1; }));
  return {
    totalBeneficiarios: PROJECTS.reduce((s, p) => s + p.beneficiarios, 0),
    totalCaptadoBRL: PROJECTS.reduce((s, p) => s + p.valorCaptado, 0),
    projetosAtivos: PROJECTS.filter(p => p.status === 'ativo').length,
    distribuicaoODS: odsCount,
  };
}

export function getMonitoramentoConsolidado() {
  const ultimasAtualizacoes = [...TIMELINE].sort((a, b) => new Date(b.data).getTime() - new Date(a.data).getTime()).slice(0, 8);
  const performanceIndicadores = INDICATORS.map(i => ({
    ...i,
    percentual: Math.round((i.realizado / i.meta) * 100),
    status: i.realizado >= i.meta ? 'atingido' : i.realizado / i.meta >= 0.7 ? 'no_prazo' : 'atencao',
  }));
  return {
    projetosMonitorados: PROJECTS.filter(p => p.status === 'ativo').length,
    totalRelatorios: RELATORIOS.length,
    totalEvidencias: RELATORIOS.reduce((s, r) => s + r.evidencias.length, 0),
    totalDepoimentos: DEPOIMENTOS.length,
    ultimasAtualizacoes,
    alertas: [
      { tipo: 'ok', mensagem: '4 projetos com relatório em dia', projetoId: null },
      { tipo: 'atencao', mensagem: 'Projeto "Rota Verde de Reciclagem" aguarda relatório Q1/2025', projetoId: 'prj-005' },
      { tipo: 'ok', mensagem: 'Todos os aportes aprovados têm evidências registradas', projetoId: null },
    ],
    performanceIndicadores,
  };
}

export function getMonitoramentoProjeto(id: string) {
  const projeto = PROJECTS.find(p => p.id === id)!;
  const relatorios = RELATORIOS.filter(r => r.projetoId === id);
  const timeline = TIMELINE.filter(t => t.projetoId === id).sort((a, b) => new Date(b.data).getTime() - new Date(a.data).getTime());
  const indicadores = INDICATORS.filter(i => i.projetoId === id);
  const depoimentos = DEPOIMENTOS.filter(d => d.projetoId === id);
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
      percentualMeta: Math.round((projeto.valorCaptado / projeto.valorMeta) * 100),
    },
  };
}

export function getOrgScore(id: string) {
  const org = ORGS.find(o => o.id === id)!;
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
