// Kanban de Prospecção — perspectiva do Advogado
// Cada card representa uma oportunidade de captacao: financiador + projeto + ONG + semaforo + proxima acao.

import Link from 'next/link';

type Semaforo = 'verde' | 'amarelo' | 'vermelho';
type Resultado = 'aprovado' | 'recusado' | null;
type Etapa = 'Backlog' | 'Prospecção' | 'Em andamento' | 'Finalizado';

interface Lead {
  id: string;
  financiador: string;
  tipo: string;
  projeto: string | null;
  ong: string | null;
  ticket: number;
  semaforo: Semaforo;
  pendencia: string | null;
  proximaAcao: string;
  etapa?: Etapa;          // derived from column; explicitly set for finalized/audit trail
  resultado?: Resultado;
}

const SEMAFORO_STYLES: Record<Semaforo, string> = {
  verde:    'bg-green-100 text-green-700 border-green-200',
  amarelo:  'bg-yellow-100 text-yellow-700 border-yellow-200',
  vermelho: 'bg-red-100 text-red-700 border-red-200',
};

const SEMAFORO_LABEL: Record<Semaforo, string> = {
  verde:    '● Pronto',
  amarelo:  '● Pendência',
  vermelho: '● Risco',
};

const TIPO_LABEL: Record<string, string> = {
  empresa:      'Empresa',
  fundacao:     'Fundação',
  instituto:    'Instituto',
  pessoa_fisica:'Pessoa física',
};

function fmt(n: number) {
  return n >= 1_000_000 ? `R$ ${(n / 1_000_000).toFixed(1)}M` : `R$ ${(n / 1_000).toFixed(0)}K`;
}

// ---------------------------------------------------------------------------
// Mock de oportunidades em cada coluna do kanban
// ---------------------------------------------------------------------------

const COLUNAS: { key: string; label: string; cor: string; leads: Lead[] }[] = [
  {
    key: 'backlog',
    label: 'Backlog',
    cor: 'bg-gray-100 border-gray-200',
    leads: [
      {
        id: 'l-001',
        financiador: 'Empresa Consciente S.A.',
        tipo: 'empresa',
        projeto: 'Rota Verde Reciclagem',
        ong: 'Recicla Solidária',
        ticket: 200_000,
        semaforo: 'amarelo',
        pendencia: 'Documentos da ONG incompletos',
        proximaAcao: 'Solicitar CNPJ e estatuto atualizado',
      },
      {
        id: 'l-002',
        financiador: 'Fundação Horizonte Verde',
        tipo: 'fundacao',
        projeto: null,
        ong: null,
        ticket: 500_000,
        semaforo: 'amarelo',
        pendencia: 'Reunião não agendada',
        proximaAcao: 'Enviar one-pager e agendar call de apresentação',
      },
    ],
  },
  {
    key: 'prospeccao',
    label: 'Prospecção',
    cor: 'bg-blue-50 border-blue-200',
    leads: [
      {
        id: 'l-003',
        financiador: 'Instituto Impacto Brasil',
        tipo: 'instituto',
        projeto: 'Alfabetização Digital',
        ong: 'EduImpacto Social',
        ticket: 80_000,
        semaforo: 'verde',
        pendencia: null,
        proximaAcao: 'Enviar proposta formal com KRs e orçamento',
      },
      {
        id: 'l-004',
        financiador: 'Investidor Social Demo',
        tipo: 'pessoa_fisica',
        projeto: 'Cozinhas Comunitárias',
        ong: 'Raízes Comunitárias',
        ticket: 20_000,
        semaforo: 'vermelho',
        pendencia: 'Risco reputacional pendente',
        proximaAcao: 'Solicitar parecer jurídico antes de avançar',
      },
    ],
  },
  {
    key: 'em_andamento',
    label: 'Em andamento',
    cor: 'bg-brand-50 border-brand-200',
    leads: [
      {
        id: 'l-005',
        financiador: 'Fundação Horizonte Verde',
        tipo: 'fundacao',
        projeto: 'Adote uma Nascente',
        ong: 'Instituto Pantanal Vivo',
        ticket: 400_000,
        semaforo: 'verde',
        pendencia: null,
        proximaAcao: 'Aguardar retorno sobre proposta enviada',
      },
      {
        id: 'l-006',
        financiador: 'Empresa Consciente S.A.',
        tipo: 'empresa',
        projeto: 'Plataforma de Renda Social',
        ong: 'Social Tech Impacto',
        ticket: 200_000,
        semaforo: 'amarelo',
        pendencia: 'Revisão contratual em andamento',
        proximaAcao: 'Reunião com jurídico da empresa — 05/07',
      },
    ],
  },
  {
    key: 'finalizado',
    label: 'Finalizado',
    cor: 'bg-gray-50 border-gray-200',
    leads: [
      {
        id: 'l-007',
        financiador: 'Instituto Impacto Brasil',
        tipo: 'instituto',
        projeto: 'Brigadas do Pantanal',
        ong: 'Brigadas do Pantanal',
        ticket: 300_000,
        semaforo: 'verde',
        pendencia: null,
        resultado: 'aprovado',
        proximaAcao: 'Emitir termo e monitorar primeiro aporte',
      },
      {
        id: 'l-008',
        financiador: 'Empresa Consciente S.A.',
        tipo: 'empresa',
        projeto: 'Banco de Sementes Nativas',
        ong: 'Sementes do Cerrado',
        ticket: 60_000,
        semaforo: 'vermelho',
        pendencia: 'Fora do mandato de investimento da empresa',
        resultado: 'recusado',
        proximaAcao: 'Arquivar e buscar novo perfil de financiador',
      },
    ],
  },
];

// ---------------------------------------------------------------------------
// KPIs calculados a partir dos dados mock
// ---------------------------------------------------------------------------

const allLeads = COLUNAS.flatMap((c) => c.leads.map((l) => ({ ...l, etapa: l.etapa ?? (c.label as Etapa) })));
const totalLeads     = allLeads.length;
const emNegociacao   = COLUNAS.filter((c) => c.key === 'prospeccao' || c.key === 'em_andamento').flatMap((c) => c.leads).length;
const aprovados      = COLUNAS.find((c) => c.key === 'finalizado')?.leads.filter((l) => l.resultado === 'aprovado').length ?? 0;
const valorPipeline  = COLUNAS.filter((c) => c.key !== 'finalizado').flatMap((c) => c.leads).reduce((sum, l) => sum + l.ticket, 0);

// ---------------------------------------------------------------------------
// Componente de card
// ---------------------------------------------------------------------------

function LeadCard({ lead }: { lead: Lead }) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm space-y-3">
      {/* cabeçalho */}
      <div className="flex items-start justify-between gap-2">
        <div>
          <p className="text-sm font-semibold text-gray-900 leading-tight">{lead.financiador}</p>
          <p className="text-xs text-gray-400 mt-0.5">{TIPO_LABEL[lead.tipo] ?? lead.tipo}</p>
        </div>
        <span className={`shrink-0 rounded-full border px-2 py-0.5 text-xs font-medium ${SEMAFORO_STYLES[lead.semaforo]}`}>
          {SEMAFORO_LABEL[lead.semaforo]}
        </span>
      </div>

      {/* projeto + ONG */}
      {lead.projeto ? (
        <div className="rounded-xl bg-gray-50 px-3 py-2 text-xs space-y-0.5">
          <p className="font-medium text-gray-800">📁 {lead.projeto}</p>
          {lead.ong && <p className="text-gray-500">🏢 {lead.ong}</p>}
        </div>
      ) : (
        <div className="rounded-xl bg-yellow-50 px-3 py-2 text-xs text-yellow-700">
          Projeto ainda não associado
        </div>
      )}

      {/* ticket */}
      <div className="flex items-center justify-between text-xs">
        <span className="text-gray-500">Ticket estimado</span>
        <span className="font-bold text-gray-900">{fmt(lead.ticket)}</span>
      </div>

      {/* pendência */}
      {lead.pendencia && (
        <div className="rounded-xl bg-red-50 px-3 py-2 text-xs text-red-700">
          ⚠️ {lead.pendencia}
        </div>
      )}

      {/* resultado */}
      {lead.resultado && (
        <div className={`rounded-xl px-3 py-2 text-xs font-semibold ${lead.resultado === 'aprovado' ? 'bg-green-50 text-green-700' : 'bg-gray-100 text-gray-500'}`}>
          {lead.resultado === 'aprovado' ? '✅ Aporte aprovado' : '✗ Recusado'}
        </div>
      )}

      {/* próxima ação */}
      <p className="text-xs text-gray-600 border-t border-gray-100 pt-2">
        <span className="font-medium text-gray-700">Próxima ação:</span> {lead.proximaAcao}
      </p>
      {/* etapa rastreável */}
      {lead.etapa && (
        <p className="text-[10px] text-gray-400">Etapa: {lead.etapa}</p>
      )}
    </div>
  );
}

// ---------------------------------------------------------------------------
// Página
// ---------------------------------------------------------------------------

export default function ProspeccaoPage() {
  return (
    <div className="p-6 space-y-6 max-w-7xl mx-auto">
      {/* cabeçalho */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">🎯 Prospecção de Financiadores</h1>
          <p className="text-sm text-gray-500 mt-1">Kanban de oportunidades conduzido pelo advogado. Cada card é um lead com financiador, projeto, semáforo e próxima ação.</p>
        </div>
        <div className="flex gap-2 shrink-0">
          <Link
            href="/crm/lead"
            className="rounded-xl border border-brand-300 px-4 py-2.5 text-sm font-semibold text-brand-700 hover:bg-brand-50"
          >
            🔗 Associar financiadores
          </Link>
          <button className="rounded-xl bg-brand-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-brand-700">
            + Nova oportunidade
          </button>
        </div>
      </div>

      {/* KPIs */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: 'Total de leads',    value: totalLeads,                     color: 'text-gray-900'   },
          { label: 'Em negociação',     value: emNegociacao,                   color: 'text-blue-600'   },
          { label: 'Aprovados',         value: aprovados,                      color: 'text-green-600'  },
          { label: 'Pipeline ativo',    value: fmt(valorPipeline),             color: 'text-brand-600'  },
        ].map((k) => (
          <div key={k.label} className="rounded-2xl border border-gray-200 bg-white p-4 text-center shadow-sm">
            <p className="text-xs text-gray-500">{k.label}</p>
            <p className={`mt-1 text-2xl font-bold ${k.color}`}>{k.value}</p>
          </div>
        ))}
      </div>

      {/* legenda semáforo */}
      <div className="flex flex-wrap gap-3 text-xs">
        {(['verde', 'amarelo', 'vermelho'] as Semaforo[]).map((s) => (
          <span key={s} className={`rounded-full border px-3 py-1 font-medium ${SEMAFORO_STYLES[s]}`}>
            {SEMAFORO_LABEL[s]}
          </span>
        ))}
        <span className="text-gray-400 self-center">— semáforo indica prontidão para avançar na negociação</span>
      </div>

      {/* kanban */}
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {COLUNAS.map((col) => (
          <div key={col.key} className={`rounded-2xl border p-4 space-y-3 ${col.cor}`}>
            <div className="flex items-center justify-between">
              <p className="text-xs font-bold uppercase tracking-widest text-gray-500">{col.label}</p>
              <span className="rounded-full bg-white border border-gray-200 px-2 py-0.5 text-xs font-semibold text-gray-700">
                {col.leads.length}
              </span>
            </div>
            {col.leads.map((lead) => (
              <LeadCard key={lead.id} lead={lead} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
