// PO-029/032 — Roteiro de Demo por Perfil (6 perfis)
// Ferramenta interna para condução de apresentações e webinars ONGanizator

import Link from 'next/link';

interface DemoStep {
  emoji: string;
  rota: string;
  acao: string;
  mostrar: string;
}

interface DemoPerfil {
  id: string;
  nome: string;
  icon: string;
  badgeClass: string;
  cardClass: string;
  falaAbertura: string;
  steps: DemoStep[];
}

const PERFIS: DemoPerfil[] = [
  {
    id: 'adm',
    nome: 'Administrador',
    icon: '⚙️',
    badgeClass: 'bg-purple-100 text-purple-800 border border-purple-300',
    cardClass: 'border-purple-200',
    falaAbertura:
      'Vou mostrar a visão completa da plataforma — dashboard, permissões e white-label.',
    steps: [
      {
        emoji: '📊',
        rota: '/',
        acao: 'Dashboard',
        mostrar: 'KPIs globais: organizações, projetos, captação total, impacto',
      },
      {
        emoji: '🔒',
        rota: '/permissoes',
        acao: 'Permissões',
        mostrar: 'Matriz de 22 ações × 7 módulos — quem pode ver, editar, aprovar',
      },
      {
        emoji: '🎨',
        rota: '/configuracoes',
        acao: 'Configurações',
        mostrar: 'White-label: logo, cores, fontes, modo escuro, preview ao vivo',
      },
      {
        emoji: '🎤',
        rota: '/demo',
        acao: 'Roteiro de Demo',
        mostrar: 'Este roteiro — usado para conduzir apresentações',
      },
    ],
  },
  {
    id: 'ong',
    nome: 'ONG',
    icon: '🌱',
    badgeClass: 'bg-green-100 text-green-800 border border-green-300',
    cardClass: 'border-green-200',
    falaAbertura:
      'Sou gestora de uma ONG e vou mostrar minha jornada de onboarding até captação.',
    steps: [
      {
        emoji: '🚀',
        rota: '/onboarding',
        acao: 'Onboarding',
        mostrar: 'Diagnóstico gamificado: 25 perguntas em 5 dimensões, selo recomendado',
      },
      {
        emoji: '🏢',
        rota: '/organizacoes',
        acao: 'Organizações',
        mostrar: 'Meu cadastro institucional com score de maturidade',
      },
      {
        emoji: '🩺',
        rota: '/diagnostico',
        acao: 'Diagnóstico',
        mostrar: 'Quiz de maturidade com score detalhado por dimensão',
      },
      {
        emoji: '✏️',
        rota: '/projetos/novo',
        acao: 'Novo Projeto',
        mostrar: 'Cadastrar projeto: objetivo, KRs, ODS, orçamento',
      },
      {
        emoji: '📡',
        rota: '/monitoramento',
        acao: 'Monitoramento',
        mostrar: 'Enviar evidências e acompanhar indicadores',
      },
      {
        emoji: '🎓',
        rota: '/mentoria',
        acao: 'Mentoria',
        mostrar: 'Conectar com mentores para acelerar maturidade',
      },
    ],
  },
  {
    id: 'investidor',
    nome: 'Investidor',
    icon: '💼',
    badgeClass: 'bg-blue-100 text-blue-800 border border-blue-300',
    cardClass: 'border-blue-200',
    falaAbertura:
      'Sou investidor de impacto buscando projetos alinhados aos meus ODS.',
    steps: [
      {
        emoji: '👤',
        rota: '/investidores',
        acao: 'Meu Perfil',
        mostrar: 'Ver meu perfil com mandato, ticket e ODS',
      },
      {
        emoji: '🎯',
        rota: '/investidores/inv-001/match',
        acao: 'Motor de Match',
        mostrar: 'Projetos ranqueados por compatibilidade de ODS e ticket',
      },
      {
        emoji: '📋',
        rota: '/projetos',
        acao: 'Projetos',
        mostrar: 'Explorar tabela de projetos com filtros',
      },
      {
        emoji: '🌟',
        rota: '/projetos/prj-001',
        acao: 'Detalhe do Projeto',
        mostrar: 'Detalhe completo: KRs, impacto, timeline, evidências',
      },
      {
        emoji: '🔍',
        rota: '/marketplace',
        acao: 'Marketplace',
        mostrar: 'Vitrine pública com projetos prontos para aporte',
      },
      {
        emoji: '📊',
        rota: '/impacto',
        acao: 'Impacto ESG',
        mostrar: 'Painel ESG/ODS consolidado do portfólio',
      },
    ],
  },
  {
    id: 'advogado',
    nome: 'Advogado',
    icon: '⚖️',
    badgeClass: 'bg-red-100 text-red-800 border border-red-300',
    cardClass: 'border-red-200',
    falaAbertura:
      'Sou advogado especialista em terceiro setor — conduzindo a captação juridicamente.',
    steps: [
      {
        emoji: '🎯',
        rota: '/crm',
        acao: 'CRM de Prospecção',
        mostrar: 'Kanban de prospecção: 4 etapas + semáforo de prioridade',
      },
      {
        emoji: '🔗',
        rota: '/crm/lead',
        acao: 'Associar Lead',
        mostrar: 'Associar financiador a projeto: vínculo, justificativa, etapa',
      },
      {
        emoji: '⚖️',
        rota: '/captacao',
        acao: 'Mecanismo Legal',
        mostrar: 'Selecionar mecanismo legal: Rouanet, FIA, Esporte, PRONON...',
      },
      {
        emoji: '📄',
        rota: '/projetos/prj-001/proposta',
        acao: 'Proposta para Patrocinador',
        mostrar: 'Gerar proposta para patrocinador com ODS e orçamento',
      },
      {
        emoji: '🔍',
        rota: '/projetos/prj-001/auditoria',
        acao: 'Pacote de Auditoria',
        mostrar: 'Checklist jurídico, trilha de eventos auditáveis',
      },
      {
        emoji: '⚠️',
        rota: '/risco',
        acao: 'Análise de Risco',
        mostrar: 'Risco reputacional: jurídico, financeiro, reputacional',
      },
    ],
  },
  {
    id: 'contador',
    nome: 'Contador',
    icon: '📒',
    badgeClass: 'bg-orange-100 text-orange-800 border border-orange-300',
    cardClass: 'border-orange-200',
    falaAbertura:
      'Sou contador atendendo ONGs — meu foco é compliance financeiro e prestação de contas.',
    steps: [
      {
        emoji: '💰',
        rota: '/contabilidade',
        acao: 'Contabilidade',
        mostrar: 'DRE com semáforo de pendências e parecer contábil',
      },
      {
        emoji: '🧮',
        rota: '/captacao',
        acao: 'Calculadora de Incentivo Fiscal',
        mostrar: 'Limite dedutível, documentos e alertas fiscais',
      },
      {
        emoji: '📑',
        rota: '/projetos/prj-001/relatorio/anual',
        acao: 'Relatório Anual',
        mostrar: '11 seções auditáveis: metas, orçamento, evidências, pareceres',
      },
      {
        emoji: '📡',
        rota: '/monitoramento',
        acao: 'Monitoramento',
        mostrar: 'Indicadores e evidências de execução física e financeira',
      },
      {
        emoji: '🏢',
        rota: '/organizacoes',
        acao: 'Organizações',
        mostrar: 'Cadastro institucional com documentos e status',
      },
    ],
  },
  {
    id: 'fundacao',
    nome: 'Fundação',
    icon: '🏛️',
    badgeClass: 'bg-cyan-100 text-cyan-800 border border-cyan-300',
    cardClass: 'border-cyan-200',
    falaAbertura:
      'Sou gestor de uma fundação empresarial avaliando projetos para aporte.',
    steps: [
      {
        emoji: '👤',
        rota: '/investidores',
        acao: 'Perfil de Financiadores',
        mostrar: 'Ver perfil de financiadores e mandatos disponíveis',
      },
      {
        emoji: '🔍',
        rota: '/marketplace',
        acao: 'Marketplace',
        mostrar: 'Vitrine de projetos filtrada por ODS e região',
      },
      {
        emoji: '🌟',
        rota: '/projetos/prj-001',
        acao: 'Detalhe do Projeto',
        mostrar: 'KRs, selos, timeline do projeto',
      },
      {
        emoji: '🩺',
        rota: '/diagnostico',
        acao: 'Diagnóstico de ONGs',
        mostrar: 'Avaliar maturidade das ONGs candidatas',
      },
      {
        emoji: '📊',
        rota: '/impacto',
        acao: 'Dashboard ESG',
        mostrar: 'Dashboard ESG consolidado para relatório de gestão',
      },
      {
        emoji: '🚀',
        rota: '/para-investidores',
        acao: 'Para Investidores',
        mostrar: 'Pitch institucional da plataforma para financiadores',
      },
    ],
  },
];

export default function DemoRoteiro() {
  const totalSteps = PERFIS.reduce((s, p) => s + p.steps.length, 0);

  return (
    <div className="p-6 space-y-8 max-w-5xl mx-auto">
      {/* Cabeçalho */}
      <div className="bg-white rounded-xl shadow p-6 space-y-3">
        <p className="text-xs text-gray-400 font-medium uppercase tracking-widest">
          PO-029/032 · Ferramenta interna
        </p>
        <h1 className="text-2xl font-bold text-gray-800">Roteiro de Demo</h1>
        <p className="text-gray-500 text-sm">
          {PERFIS.length} perfis de usuário · {totalSteps} steps clicáveis para conduzir
          apresentações e webinars.
        </p>
        <p className="text-xs text-amber-700 bg-amber-50 border border-amber-200 rounded-lg px-3 py-2">
          💡 <strong>Instrução de uso:</strong> selecione o perfil do seu público, leia a fala de
          abertura em voz alta e navegue pelos steps na ordem indicada.
        </p>
      </div>

      {/* Grid de perfis: 2 colunas desktop, 1 mobile */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {PERFIS.map((perfil) => (
          <div
            key={perfil.id}
            className={`bg-white rounded-xl shadow p-6 border ${perfil.cardClass} space-y-4`}
          >
            {/* Badge + ícone */}
            <div className="flex items-center gap-3">
              <span className="text-3xl">{perfil.icon}</span>
              <span className={`px-3 py-1 rounded-full text-xs font-bold ${perfil.badgeClass}`}>
                {perfil.nome}
              </span>
            </div>

            {/* Fala de abertura */}
            <p className="text-sm text-gray-600 italic border-l-4 border-gray-200 pl-3 leading-relaxed">
              &ldquo;{perfil.falaAbertura}&rdquo;
            </p>

            {/* Lista de steps */}
            <ol className="space-y-2.5">
              {perfil.steps.map((step, i) => (
                <li key={i} className="flex gap-3 text-sm">
                  <span className="shrink-0 w-5 h-5 rounded-full bg-gray-100 text-gray-600 text-xs font-bold flex items-center justify-center mt-0.5">
                    {i + 1}
                  </span>
                  <div className="flex-1 leading-snug">
                    <span className="mr-1">{step.emoji}</span>
                    <Link
                      href={step.rota}
                      className="font-mono text-xs font-semibold text-brand-600 hover:underline"
                    >
                      {step.rota}
                    </Link>
                    <span className="text-gray-400 mx-1">→</span>
                    <span className="font-medium text-gray-700">{step.acao}:</span>{' '}
                    <span className="text-gray-500">{step.mostrar}</span>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        ))}
      </div>

      {/* Rodapé */}
      <p className="text-xs text-gray-400 text-center border-t border-gray-100 pt-4">
        Tempo estimado por perfil: 5–8 minutos. Demo completa (todos os perfis): ~40 minutos.
      </p>
    </div>
  );
}
