import { notFound } from 'next/navigation';
import {
  PROJECTS,
  TIMELINE,
  RELATORIOS,
  LANCAMENTOS,
  ORGS,
  DEPOIMENTOS,
} from '@/lib/mockData';

export const dynamic = 'force-static';

export function generateStaticParams() {
  return PROJECTS.map((p) => ({ id: p.id }));
}

interface PageProps {
  params: Promise<{ id: string }>;
}

type TipoEvento = 'marco' | 'relatorio' | 'aporte' | 'conquista' | 'auditoria' | 'aprovacao';

const TIPO_BADGE: Record<TipoEvento, { label: string; color: string; icon: string }> = {
  marco:     { label: 'Marco',       color: 'bg-blue-100 text-blue-700',     icon: '🏁' },
  relatorio: { label: 'Relatório',   color: 'bg-indigo-100 text-indigo-700', icon: '📋' },
  aporte:    { label: 'Aporte',      color: 'bg-emerald-100 text-emerald-700',icon: '💰' },
  conquista: { label: 'Conquista',   color: 'bg-yellow-100 text-yellow-700', icon: '🏆' },
  auditoria: { label: 'Auditoria',   color: 'bg-orange-100 text-orange-700', icon: '🔍' },
  aprovacao: { label: 'Aprovação',   color: 'bg-green-100 text-green-700',   icon: '✅' },
};

function fmtDate(d: string) {
  return new Date(d).toLocaleDateString('pt-BR');
}

function fmtCurrency(v: number) {
  return v.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 0 });
}

// Mock documents per project
function getMockDocumentos(projetoId: string) {
  const base = [
    { tipo: 'Contrato / Termo de Parceria', ref: `TERM-${projetoId.toUpperCase()}-2024`, status: 'assinado', data: '2024-01-10' },
    { tipo: 'Instrumento de Convênio', ref: `CONV-${projetoId.toUpperCase()}-A`, status: 'assinado', data: '2024-01-12' },
    { tipo: 'Plano de Trabalho', ref: `PT-${projetoId.toUpperCase()}-V1`, status: 'aprovado', data: '2024-01-08' },
    { tipo: 'Certidão Negativa Federal', ref: 'CND-RFB-2024', status: 'vigente', data: '2024-02-01' },
    { tipo: 'Certidão Negativa Estadual', ref: 'CND-EST-2024', status: 'vigente', data: '2024-02-01' },
    { tipo: 'Certidão FGTS', ref: 'CRF-CEF-2024', status: 'vigente', data: '2024-02-01' },
    { tipo: 'Certidão Trabalhista (CNDT)', ref: 'CNDT-2024', status: 'vigente', data: '2024-02-01' },
    { tipo: 'Estatuto Social', ref: `EST-${projetoId.slice(-3).toUpperCase()}`, status: 'vigente', data: '2023-03-15' },
  ];
  return base;
}

function statusColor(s: string) {
  if (s === 'assinado' || s === 'vigente' || s === 'aprovado') return 'bg-emerald-100 text-emerald-700';
  if (s === 'pendente') return 'bg-amber-100 text-amber-700';
  return 'bg-slate-100 text-slate-600';
}

export default async function AuditoriaPage({ params: paramsPromise }: PageProps) {
  const { id } = await paramsPromise;
  const projeto = PROJECTS.find((p) => p.id === id);
  if (!projeto) notFound();

  const org = ORGS.find((o) => o.id === projeto.organizacaoId);
  const timeline = TIMELINE.filter((t) => t.projetoId === id)
    .sort((a, b) => b.data.localeCompare(a.data));
  const relatorios = RELATORIOS.filter((r) => r.projetoId === id);
  const lancamentos = LANCAMENTOS.filter((l) => l.projetoId === id);
  const depoimentos = DEPOIMENTOS.filter((d) => d.projetoId === id);
  const documentos = getMockDocumentos(id);

  const totalReceitas = lancamentos.filter((l) => l.tipo === 'receita').reduce((s, l) => s + l.valor, 0);
  const totalDespesas = lancamentos.filter((l) => l.tipo === 'despesa').reduce((s, l) => s + l.valor, 0);
  const nfsCount = lancamentos.filter((l) => l.nf).length;

  // Collect all evidence from reports
  const evidencias = relatorios.flatMap((r) => r.evidencias ?? []);

  const checklistItems = [
    { label: 'Contrato / Termo assinado', ok: true },
    { label: 'Plano de trabalho aprovado', ok: true },
    { label: 'Certidões negativas vigentes', ok: true },
    { label: `${nfsCount} notas fiscais / recibos registrados`, ok: nfsCount > 0 },
    { label: `${relatorios.length} relatório(s) publicado(s)`, ok: relatorios.length > 0 },
    { label: `${evidencias.length} evidência(s) documentada(s)`, ok: evidencias.length > 0 },
    { label: `${timeline.filter((t) => t.tipo === 'auditoria' || t.tipo === 'aprovacao').length} evento(s) de auditoria`, ok: timeline.some((t) => t.tipo === 'auditoria' || t.tipo === 'aprovacao') },
    { label: `Parecer contábil no relatório anual`, ok: relatorios.length > 0 },
  ];

  return (
    <div className="p-6 max-w-6xl mx-auto space-y-8">
      {/* Header */}
      <div className="flex items-start justify-between gap-4 flex-wrap">
        <div className="flex items-start gap-4">
          <div className="p-3 bg-slate-100 rounded-xl text-3xl">📦</div>
          <div>
            <h1 className="text-2xl font-bold text-slate-800">Pacote de Auditoria</h1>
            <p className="text-slate-500 mt-1">
              {projeto.titulo} · <span className="font-medium">{projeto.organizacaoNome}</span>
            </p>
          </div>
        </div>
        <div className="flex gap-2">
          <a
            href={`/projetos/${id}/relatorio/anual`}
            className="px-4 py-2 bg-brand-600 text-white rounded-xl text-sm font-semibold hover:bg-brand-700 transition bg-indigo-600 hover:bg-indigo-700"
          >
            📋 Ver Relatório Anual
          </a>
          <button className="px-4 py-2 border border-slate-300 text-slate-600 rounded-xl text-sm font-semibold hover:bg-slate-50 transition">
            ⬇ Baixar Pacote (mock)
          </button>
        </div>
      </div>

      {/* Checklist */}
      <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6">
        <h2 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-4">Checklist de Completude</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {checklistItems.map((item, i) => (
            <div key={i} className="flex items-center gap-2 text-sm">
              <span className={item.ok ? 'text-emerald-500' : 'text-amber-500'}>{item.ok ? '✅' : '⚠️'}</span>
              <span className={item.ok ? 'text-slate-700' : 'text-amber-700'}>{item.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Identification */}
      <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
        <div className="px-5 py-3 bg-slate-50 border-b border-slate-100">
          <h2 className="text-sm font-bold text-slate-500 uppercase tracking-wider">1. Identificação do Projeto</h2>
        </div>
        <div className="p-5 grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
          {[
            { l: 'ID do Projeto', v: projeto.id },
            { l: 'Organização', v: org?.razaoSocial ?? projeto.organizacaoNome },
            { l: 'CNPJ', v: org?.cnpj ?? '—' },
            { l: 'Status', v: projeto.status },
            { l: 'Início', v: fmtDate(projeto.dataInicio) },
            { l: 'Término previsto', v: fmtDate(projeto.dataFim) },
            { l: 'Valor-meta', v: fmtCurrency(projeto.valorMeta) },
            { l: 'Captado', v: fmtCurrency(projeto.valorCaptado) },
            { l: 'Beneficiários', v: projeto.beneficiarios.toLocaleString('pt-BR') },
            { l: 'Localização', v: `${projeto.cidade} / ${projeto.estado}` },
            { l: 'Selo de Maturidade', v: projeto.selo ? `${projeto.selo.charAt(0).toUpperCase() + projeto.selo.slice(1)}` : '(sem selo)' },
            { l: 'ODS', v: projeto.ods.join(', ') },
          ].map((item) => (
            <div key={item.l}>
              <div className="text-xs text-slate-400">{item.l}</div>
              <div className="font-medium text-slate-700 mt-0.5">{item.v}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Documents */}
      <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
        <div className="px-5 py-3 bg-slate-50 border-b border-slate-100">
          <h2 className="text-sm font-bold text-slate-500 uppercase tracking-wider">2. Documentos Jurídicos e Certidões</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="border-b border-slate-100">
              <tr>
                <th className="text-left px-5 py-2.5 font-medium text-slate-500">Documento</th>
                <th className="text-left px-4 py-2.5 font-medium text-slate-500">Referência</th>
                <th className="text-left px-4 py-2.5 font-medium text-slate-500">Data</th>
                <th className="text-left px-4 py-2.5 font-medium text-slate-500">Status</th>
              </tr>
            </thead>
            <tbody>
              {documentos.map((doc, i) => (
                <tr key={i} className="border-b last:border-b-0 border-slate-50">
                  <td className="px-5 py-3 text-slate-700 font-medium">{doc.tipo}</td>
                  <td className="px-4 py-3 text-slate-500 font-mono text-xs">{doc.ref}</td>
                  <td className="px-4 py-3 text-slate-500">{fmtDate(doc.data)}</td>
                  <td className="px-4 py-3">
                    <span className={`px-2 py-0.5 rounded-full text-xs font-semibold ${statusColor(doc.status)}`}>{doc.status}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Financial docs */}
      {lancamentos.length > 0 && (
        <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
          <div className="px-5 py-3 bg-slate-50 border-b border-slate-100 flex items-center justify-between">
            <h2 className="text-sm font-bold text-slate-500 uppercase tracking-wider">3. Comprovantes Financeiros</h2>
            <div className="flex gap-4 text-xs font-semibold">
              <span className="text-emerald-600">↑ Receitas: {fmtCurrency(totalReceitas)}</span>
              <span className="text-red-500">↓ Despesas: {fmtCurrency(totalDespesas)}</span>
              <span className="text-slate-600">Saldo: {fmtCurrency(totalReceitas - totalDespesas)}</span>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="border-b border-slate-100">
                <tr>
                  <th className="text-left px-5 py-2.5 font-medium text-slate-500">Data</th>
                  <th className="text-left px-4 py-2.5 font-medium text-slate-500">Descrição</th>
                  <th className="text-left px-4 py-2.5 font-medium text-slate-500">Categoria</th>
                  <th className="text-right px-4 py-2.5 font-medium text-slate-500">Valor</th>
                  <th className="text-left px-4 py-2.5 font-medium text-slate-500">NF/Recibo</th>
                </tr>
              </thead>
              <tbody>
                {lancamentos.map((l) => (
                  <tr key={l.id} className="border-b last:border-b-0 border-slate-50 hover:bg-slate-50/50">
                    <td className="px-5 py-2.5 text-slate-500 text-xs">{fmtDate(l.data)}</td>
                    <td className="px-4 py-2.5 text-slate-700">{l.descricao}</td>
                    <td className="px-4 py-2.5 text-slate-500 text-xs">{l.categoria}</td>
                    <td className={`px-4 py-2.5 text-right font-semibold tabular-nums ${l.tipo === 'receita' ? 'text-emerald-600' : 'text-red-500'}`}>
                      {l.tipo === 'receita' ? '+' : '−'} {fmtCurrency(l.valor)}
                    </td>
                    <td className="px-4 py-2.5 text-xs font-mono text-slate-400">{l.nf ?? '—'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Evidence */}
      {evidencias.length > 0 && (
        <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
          <div className="px-5 py-3 bg-slate-50 border-b border-slate-100">
            <h2 className="text-sm font-bold text-slate-500 uppercase tracking-wider">4. Evidências</h2>
          </div>
          <div className="p-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {evidencias.map((ev: any, i: number) => (
              <div key={i} className="border border-slate-100 rounded-xl overflow-hidden">
                {ev.tipo === 'foto' && (
                  <img src={ev.url} alt={ev.descricao} className="w-full h-32 object-cover" />
                )}
                <div className="p-3">
                  <div className="flex items-center gap-1.5 text-xs text-slate-500 mb-1">
                    <span>{ev.tipo === 'foto' ? '📷' : ev.tipo === 'video' ? '🎬' : '📄'}</span>
                    <span className="capitalize">{ev.tipo}</span>
                  </div>
                  <div className="text-sm font-medium text-slate-700">{ev.descricao}</div>
                  {ev.url && ev.url !== '#' && (
                    <a href={ev.url} target="_blank" rel="noreferrer" className="text-xs text-indigo-500 underline mt-1 inline-block">
                      Abrir →
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Reports */}
      {relatorios.length > 0 && (
        <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
          <div className="px-5 py-3 bg-slate-50 border-b border-slate-100">
            <h2 className="text-sm font-bold text-slate-500 uppercase tracking-wider">5. Relatórios Publicados</h2>
          </div>
          <div className="p-5 space-y-3">
            {relatorios.map((r: any, i: number) => (
              <div key={i} className="flex items-start justify-between gap-4 p-4 bg-slate-50 rounded-xl">
                <div>
                  <div className="font-semibold text-slate-700 text-sm">{r.titulo ?? `Relatório #${i + 1}`}</div>
                  <div className="text-xs text-slate-500 mt-0.5">{r.periodo} · Publicado em {fmtDate(r.dataPublicacao)}</div>
                  <div className="text-xs text-slate-500 mt-1">{r.resumo}</div>
                </div>
                <span className={`flex-shrink-0 px-2 py-0.5 rounded-full text-xs font-semibold ${r.status === 'publicado' ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'}`}>
                  {r.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Audit trail */}
      <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
        <div className="px-5 py-3 bg-slate-50 border-b border-slate-100">
          <h2 className="text-sm font-bold text-slate-500 uppercase tracking-wider">6. Trilha de Auditoria Completa</h2>
        </div>
        {timeline.length === 0 ? (
          <p className="p-5 text-slate-400 text-sm">Nenhum evento registrado para este projeto.</p>
        ) : (
          <div className="p-5">
            <ol className="relative border-l border-slate-200 space-y-6 ml-3">
              {timeline.map((ev: any, i: number) => {
                const badge = TIPO_BADGE[ev.tipo as TipoEvento] ?? { label: ev.tipo, color: 'bg-slate-100 text-slate-600', icon: '•' };
                return (
                  <li key={i} className="ml-6">
                    <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-white border border-slate-200 text-base">
                      {badge.icon}
                    </span>
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <time className="text-xs text-slate-400">{fmtDate(ev.data)}</time>
                      <span className={`px-2 py-0.5 rounded-full text-xs font-semibold ${badge.color}`}>{badge.label}</span>
                      {ev.responsavel && (
                        <span className="text-xs text-slate-400">por {ev.responsavel}</span>
                      )}
                    </div>
                    <p className="text-sm font-semibold text-slate-700">{ev.titulo}</p>
                    <p className="text-xs text-slate-500 mt-0.5">{ev.descricao}</p>
                  </li>
                );
              })}
            </ol>
          </div>
        )}
      </div>

      {/* Testimonials */}
      {depoimentos.length > 0 && (
        <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
          <div className="px-5 py-3 bg-slate-50 border-b border-slate-100">
            <h2 className="text-sm font-bold text-slate-500 uppercase tracking-wider">7. Depoimentos de Beneficiários</h2>
          </div>
          <div className="p-5 space-y-4">
            {depoimentos.map((d: any, i: number) => (
              <blockquote key={i} className="border-l-4 border-indigo-300 pl-4 text-sm text-slate-700 italic">
                "{d.texto}"
                <footer className="text-xs text-slate-400 mt-1 not-italic">— {d.autor} · {fmtDate(d.data)}</footer>
              </blockquote>
            ))}
          </div>
        </div>
      )}

      {/* Footer */}
      <div className="text-xs text-slate-400 border-t border-slate-100 pt-4">
        Gerado em {new Date().toLocaleDateString('pt-BR')} · Pacote de auditoria referente ao projeto {projeto.id}. Os documentos marcados como "(mock)" são ilustrativos para fins de demonstração.
      </div>
    </div>
  );
}
