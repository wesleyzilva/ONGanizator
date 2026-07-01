'use client';
// Edição de lead CRM — associação de financiador, projeto e ONG
// Permite ao advogado atualizar todos os campos de uma oportunidade

import { useState } from 'react';
import Link from 'next/link';
import { INVESTORS, PROJECTS } from '@/lib/mockData';

// ── Tipos ──────────────────────────────────────────────────────────────────
type Semaforo = 'verde' | 'amarelo' | 'vermelho';
type Etapa = 'Backlog' | 'Prospecção' | 'Em andamento' | 'Finalizado';
type Resultado = 'aprovado' | 'recusado' | null;

interface Lead {
  id: string;
  financiadorId: string | null;
  financiador: string;
  tipo: string;
  projetoId: string | null;
  projeto: string | null;
  orgId: string | null;
  ong: string | null;
  ticket: number;
  semaforo: Semaforo;
  etapa: Etapa;
  pendencia: string | null;
  proximaAcao: string;
  resultado: Resultado;
}

// ── Mock de leads (centralizado) ──────────────────────────────────────────
const ALL_LEADS: Lead[] = [
  { id: 'l-001', financiadorId: 'inv-003', financiador: 'Empresa Consciente S.A.',   tipo: 'empresa',       projetoId: null,      projeto: 'Rota Verde Reciclagem',     orgId: null,      ong: 'Recicla Solidária',       ticket: 200_000, semaforo: 'amarelo', etapa: 'Backlog',       pendencia: 'Documentos da ONG incompletos',    proximaAcao: 'Solicitar CNPJ e estatuto atualizado',              resultado: null },
  { id: 'l-002', financiadorId: 'inv-001', financiador: 'Fundação Horizonte Verde',  tipo: 'fundacao',      projetoId: null,      projeto: null,                        orgId: null,      ong: null,                      ticket: 500_000, semaforo: 'amarelo', etapa: 'Backlog',       pendencia: 'Reunião não agendada',             proximaAcao: 'Enviar one-pager e agendar call',                   resultado: null },
  { id: 'l-003', financiadorId: 'inv-002', financiador: 'Instituto Impacto Brasil',  tipo: 'instituto',     projetoId: 'prj-003', projeto: 'Alfabetização Digital',     orgId: 'org-003', ong: 'EduImpacto Social',        ticket:  80_000, semaforo: 'verde',   etapa: 'Prospecção',    pendencia: null,                               proximaAcao: 'Enviar proposta formal com KRs',                    resultado: null },
  { id: 'l-004', financiadorId: 'inv-004', financiador: 'Investidor Social Demo',    tipo: 'pessoa_fisica', projetoId: 'prj-004', projeto: 'Cozinhas Comunitárias',     orgId: 'org-004', ong: 'Raízes Comunitárias',      ticket:  20_000, semaforo: 'vermelho',etapa: 'Prospecção',    pendencia: 'Risco reputacional pendente',      proximaAcao: 'Solicitar parecer jurídico',                        resultado: null },
  { id: 'l-005', financiadorId: 'inv-001', financiador: 'Fundação Horizonte Verde',  tipo: 'fundacao',      projetoId: 'prj-001', projeto: 'Adote uma Nascente',        orgId: 'org-001', ong: 'Instituto Pantanal Vivo', ticket: 400_000, semaforo: 'verde',   etapa: 'Em andamento',  pendencia: null,                               proximaAcao: 'Aguardar retorno sobre proposta',                   resultado: null },
  { id: 'l-006', financiadorId: 'inv-003', financiador: 'Empresa Consciente S.A.',   tipo: 'empresa',       projetoId: 'prj-005', projeto: 'Plataforma de Renda Social',orgId: 'org-005', ong: 'Social Tech Impacto',     ticket: 200_000, semaforo: 'amarelo', etapa: 'Em andamento',  pendencia: 'Revisão contratual em andamento',  proximaAcao: 'Reunião com jurídico da empresa — 05/07',           resultado: null },
  { id: 'l-007', financiadorId: 'inv-002', financiador: 'Instituto Impacto Brasil',  tipo: 'instituto',     projetoId: 'prj-002', projeto: 'Brigadas do Pantanal',      orgId: 'org-002', ong: 'Brigadas do Pantanal',    ticket: 300_000, semaforo: 'verde',   etapa: 'Finalizado',    pendencia: null,                               proximaAcao: 'Emitir termo e monitorar primeiro aporte',          resultado: 'aprovado' },
  { id: 'l-008', financiadorId: 'inv-003', financiador: 'Empresa Consciente S.A.',   tipo: 'empresa',       projetoId: 'prj-006', projeto: 'Banco de Sementes Nativas', orgId: 'org-006', ong: 'Sementes do Cerrado',     ticket:  60_000, semaforo: 'vermelho',etapa: 'Finalizado',    pendencia: 'Fora do mandato de investimento',  proximaAcao: 'Arquivar e buscar novo perfil',                     resultado: 'recusado' },
];

const TIPO_INVESTOR: Record<string, string> = {
  fundacao: 'Fundação',
  instituto: 'Instituto',
  empresa: 'Empresa',
  pessoa_fisica: 'Pessoa física',
};

const SEMAFORO_LABEL: Record<Semaforo, string> = {
  verde:    '● Pronto para avançar',
  amarelo:  '● Pendência em aberto',
  vermelho: '● Risco / bloqueado',
};
const SEMAFORO_STYLES: Record<Semaforo, string> = {
  verde:    'border-green-300 bg-green-50 text-green-700',
  amarelo:  'border-yellow-300 bg-yellow-50 text-yellow-700',
  vermelho: 'border-red-300 bg-red-50 text-red-700',
};

function fmt(n: number) {
  return n >= 1_000_000
    ? `R$ ${(n / 1_000_000).toFixed(1)}M`
    : `R$ ${(n / 1_000).toFixed(0)}K`;
}

// ── Componente ─────────────────────────────────────────────────────────────
export default function CRMLeadEditPage() {
  // Lista de todos os leads com estado editável
  const [leads, setLeads] = useState<Lead[]>(ALL_LEADS);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [saved, setSaved] = useState(false);

  const selected = leads.find((l) => l.id === selectedId) ?? null;

  function update<K extends keyof Lead>(field: K, value: Lead[K]) {
    if (!selectedId) return;
    setLeads((prev) =>
      prev.map((l) => (l.id === selectedId ? { ...l, [field]: value } : l))
    );
    setSaved(false);
  }

  function handleSave() {
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  }

  // ── Lista de leads ────────────────────────────────────────────────────────
  if (!selected) {
    const etapas: Etapa[] = ['Backlog', 'Prospecção', 'Em andamento', 'Finalizado'];
    return (
      <div className="p-6 max-w-4xl mx-auto space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">🔗 Associação de Financiadores</h1>
            <p className="text-sm text-gray-500 mt-1">
              Selecione um lead para editar a associação de financiador, projeto e organização.
            </p>
          </div>
          <Link href="/crm" className="px-3 py-1.5 rounded-lg border border-gray-200 text-sm text-gray-600 hover:bg-gray-50">
            ← Voltar ao Kanban
          </Link>
        </div>

        {etapas.map((etapa) => {
          const grupo = leads.filter((l) => l.etapa === etapa);
          if (!grupo.length) return null;
          return (
            <div key={etapa} className="space-y-2">
              <p className="text-xs font-bold uppercase tracking-widest text-gray-400">{etapa}</p>
              {grupo.map((lead) => (
                <button
                  key={lead.id}
                  onClick={() => setSelectedId(lead.id)}
                  className="w-full text-left rounded-xl border border-gray-200 bg-white p-4 hover:border-brand-300 hover:shadow-sm transition-all group"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="space-y-0.5">
                      <p className="font-semibold text-gray-900">{lead.financiador}</p>
                      <p className="text-xs text-gray-500">
                        {lead.projeto ? `Projeto: ${lead.projeto}` : 'Sem projeto associado'} ·{' '}
                        {lead.ong ? `ONG: ${lead.ong}` : 'Sem ONG associada'}
                      </p>
                    </div>
                    <div className="flex items-center gap-3 shrink-0">
                      <span className={`rounded-full border px-2.5 py-0.5 text-xs font-medium ${SEMAFORO_STYLES[lead.semaforo]}`}>
                        {SEMAFORO_LABEL[lead.semaforo].split(' ')[0]}
                      </span>
                      <span className="text-brand-600 font-semibold text-sm">{fmt(lead.ticket)}</span>
                      <span className="text-gray-300 group-hover:text-brand-500">→</span>
                    </div>
                  </div>
                  {(lead.financiadorId === null || lead.projetoId === null) && (
                    <p className="mt-2 text-xs text-amber-600 flex items-center gap-1">
                      ⚠️ Associação incompleta — clique para vincular
                    </p>
                  )}
                </button>
              ))}
            </div>
          );
        })}
      </div>
    );
  }

  // ── Formulário de edição ─────────────────────────────────────────────────
  const investidor = INVESTORS.find((i) => i.id === selected.financiadorId);

  return (
    <div className="p-6 max-w-2xl mx-auto space-y-6">
      {/* cabeçalho */}
      <div className="flex items-center justify-between">
        <div>
          <button
            onClick={() => setSelectedId(null)}
            className="text-sm text-brand-600 hover:underline mb-1"
          >
            ← Lista de leads
          </button>
          <h1 className="text-xl font-bold text-gray-900">Editar Lead · {selected.id.toUpperCase()}</h1>
        </div>
        {saved && (
          <span className="rounded-full bg-green-100 text-green-700 text-xs px-3 py-1 font-medium">
            ✓ Salvo
          </span>
        )}
      </div>

      {/* ── Seção: Financiador ───────────────────────────────────────────── */}
      <div className="card p-5 space-y-4">
        <h2 className="font-bold text-gray-900 text-sm">🏦 Financiador</h2>

        <div className="space-y-1">
          <label className="text-xs font-medium text-gray-600">Financiador associado</label>
          <select
            value={selected.financiadorId ?? ''}
            onChange={(e) => {
              const inv = INVESTORS.find((i) => i.id === e.target.value);
              update('financiadorId', e.target.value || null);
              if (inv) {
                update('financiador', inv.nome);
                update('tipo', inv.tipo);
              }
            }}
            className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-brand-400 focus:outline-none"
          >
            <option value="">— Selecionar financiador —</option>
            {INVESTORS.map((inv) => (
              <option key={inv.id} value={inv.id}>
                {inv.nome} ({TIPO_INVESTOR[inv.tipo] ?? inv.tipo}) — ticket {fmt(inv.ticketMin)}–{fmt(inv.ticketMax)}
              </option>
            ))}
          </select>
        </div>

        {investidor && (
          <div className="rounded-lg bg-blue-50 border border-blue-100 p-3 text-xs text-blue-800 space-y-1">
            <p><strong>Tipo:</strong> {TIPO_INVESTOR[investidor.tipo]}</p>
            <p><strong>Ticket:</strong> {fmt(investidor.ticketMin)} – {fmt(investidor.ticketMax)}</p>
            <p><strong>Regiões:</strong> {investidor.regioes.join(', ')}</p>
            <p><strong>ODS:</strong> {investidor.ods.join(', ')}</p>
          </div>
        )}

        <div className="space-y-1">
          <label className="text-xs font-medium text-gray-600">Ticket estimado (R$)</label>
          <input
            type="number"
            value={selected.ticket}
            onChange={(e) => update('ticket', Number(e.target.value))}
            className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-brand-400 focus:outline-none"
          />
        </div>
      </div>

      {/* ── Seção: Projeto + ONG ─────────────────────────────────────────── */}
      <div className="card p-5 space-y-4">
        <h2 className="font-bold text-gray-900 text-sm">📋 Projeto &amp; Organização</h2>

        <div className="space-y-1">
          <label className="text-xs font-medium text-gray-600">Projeto associado</label>
          <select
            value={selected.projetoId ?? ''}
            onChange={(e) => {
              const proj = PROJECTS.find((p) => p.id === e.target.value);
              update('projetoId', e.target.value || null);
              update('projeto', proj?.titulo ?? null);
              if (proj) {
                update('orgId', proj.organizacaoId);
                update('ong', proj.organizacaoNome);
              }
            }}
            className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-brand-400 focus:outline-none"
          >
            <option value="">— Sem projeto vinculado —</option>
            {PROJECTS.map((p) => (
              <option key={p.id} value={p.id}>
                {p.titulo} ({p.organizacaoNome})
              </option>
            ))}
          </select>
        </div>

        <div className="space-y-1">
          <label className="text-xs font-medium text-gray-600">Organização</label>
          <input
            type="text"
            value={selected.ong ?? ''}
            onChange={(e) => update('ong', e.target.value || null)}
            placeholder="Nome da organização"
            className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-brand-400 focus:outline-none"
          />
        </div>
      </div>

      {/* ── Seção: Status ────────────────────────────────────────────────── */}
      <div className="card p-5 space-y-4">
        <h2 className="font-bold text-gray-900 text-sm">⚡ Status &amp; Semáforo</h2>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-1">
            <label className="text-xs font-medium text-gray-600">Etapa Kanban</label>
            <select
              value={selected.etapa}
              onChange={(e) => update('etapa', e.target.value as Etapa)}
              className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-brand-400 focus:outline-none"
            >
              {(['Backlog', 'Prospecção', 'Em andamento', 'Finalizado'] as Etapa[]).map((e) => (
                <option key={e} value={e}>{e}</option>
              ))}
            </select>
          </div>

          <div className="space-y-1">
            <label className="text-xs font-medium text-gray-600">Semáforo</label>
            <select
              value={selected.semaforo}
              onChange={(e) => update('semaforo', e.target.value as Semaforo)}
              className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-brand-400 focus:outline-none"
            >
              {(['verde', 'amarelo', 'vermelho'] as Semaforo[]).map((s) => (
                <option key={s} value={s}>{SEMAFORO_LABEL[s]}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="space-y-1">
          <label className="text-xs font-medium text-gray-600">Pendência em aberto</label>
          <input
            type="text"
            value={selected.pendencia ?? ''}
            onChange={(e) => update('pendencia', e.target.value || null)}
            placeholder="Ex: Documentos pendentes, revisão contratual..."
            className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-brand-400 focus:outline-none"
          />
        </div>

        <div className="space-y-1">
          <label className="text-xs font-medium text-gray-600">Próxima ação</label>
          <textarea
            value={selected.proximaAcao}
            onChange={(e) => update('proximaAcao', e.target.value)}
            rows={2}
            className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-brand-400 focus:outline-none resize-none"
          />
        </div>

        {selected.etapa === 'Finalizado' && (
          <div className="space-y-1">
            <label className="text-xs font-medium text-gray-600">Resultado</label>
            <select
              value={selected.resultado ?? ''}
              onChange={(e) => update('resultado', (e.target.value as Resultado) || null)}
              className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-brand-400 focus:outline-none"
            >
              <option value="">— Pendente —</option>
              <option value="aprovado">✅ Aprovado</option>
              <option value="recusado">✗ Recusado</option>
            </select>
          </div>
        )}
      </div>

      {/* ── Ações ────────────────────────────────────────────────────────── */}
      <div className="flex gap-3">
        <button
          onClick={handleSave}
          className="flex-1 py-3 rounded-xl bg-brand-600 text-white font-semibold text-sm hover:bg-brand-700 transition-colors"
        >
          Salvar alterações
        </button>
        <button
          onClick={() => setSelectedId(null)}
          className="px-6 py-3 rounded-xl border border-gray-300 text-gray-600 text-sm hover:bg-gray-50"
        >
          Cancelar
        </button>
      </div>

      <p className="text-xs text-gray-400 text-center">
        Dados salvos localmente na sessão · MVP sem persistência
      </p>
    </div>
  );
}
