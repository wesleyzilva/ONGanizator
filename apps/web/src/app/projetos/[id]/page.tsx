import { api } from '@/lib/api';
import { PROJECTS, SELO_CRITERIOS } from '@/lib/mockData';
import Link from 'next/link';

export function generateStaticParams() {
  return PROJECTS.map((p) => ({ id: p.id }));
}

const STATUS_LABEL: Record<string, string> = {
  ativo: 'Ativo',
  em_avaliacao: 'Em Avaliação',
  aprovado_para_prospeccao: 'Aprovado p/ Prospecção',
  rascunho: 'Rascunho',
  concluido: 'Concluído',
};

const STATUS_COLOR: Record<string, string> = {
  ativo: 'bg-green-100 text-green-800',
  em_avaliacao: 'bg-yellow-100 text-yellow-800',
  aprovado_para_prospeccao: 'bg-purple-100 text-purple-800',
  rascunho: 'bg-gray-100 text-gray-600',
  concluido: 'bg-blue-100 text-blue-800',
};

const MARCO_STATUS: Record<string, { label: string; cls: string; icon: string }> = {
  concluido: { label: 'Concluído', cls: 'bg-green-100 text-green-800', icon: '✅' },
  em_andamento: { label: 'Em andamento', cls: 'bg-blue-100 text-blue-800', icon: '🔄' },
  pendente: { label: 'Pendente', cls: 'bg-gray-100 text-gray-600', icon: '⏳' },
};

const META_STATUS: Record<string, { label: string; bar: string }> = {
  concluido: { label: 'Concluído', bar: 'bg-green-500' },
  em_andamento: { label: 'Em andamento', bar: 'bg-blue-500' },
  atencao: { label: 'Atenção', bar: 'bg-yellow-500' },
};

const TIMELINE_ICON: Record<string, string> = {
  marco: '🏁',
  relatorio: '📋',
  aporte: '💰',
  conquista: '🏆',
  auditoria: '🔍',
  aprovacao: '✅',
};

function fmt(n: number) {
  return n >= 1_000_000
    ? `R$ ${(n / 1_000_000).toFixed(1)}M`
    : `R$ ${(n / 1_000).toFixed(0)}K`;
}

function pct(realizado: number, alvo: number) {
  return Math.min(100, Math.round((realizado / alvo) * 100));
}

export default async function ProjetoDetalheePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const detalhes = await api.projetoDetalhes(id);

  if (!detalhes) {
    return (
      <div className="p-8 text-center text-gray-500">
        Projeto não encontrado.{' '}
        <Link href="/projetos" className="text-brand-600 underline">Voltar</Link>
      </div>
    );
  }

  const { projeto, org, objetivos, metas, orcamento, marcos, relatorios, timeline, depoimentos } = detalhes;
  const percentualCaptado = pct(projeto.valorCaptado, projeto.valorMeta);

  return (
    <div className="p-8 space-y-8 max-w-5xl mx-auto">
      {/* ── Header ─────────────────────────────────────────────────────── */}
      <div className="flex items-start justify-between gap-4">
        <div>
          <Link href="/projetos" className="text-xs text-gray-400 hover:text-brand-600">
            ← Projetos
          </Link>
          <h1 className="text-2xl font-bold text-gray-900 mt-1">{projeto.titulo}</h1>
          <p className="text-sm text-gray-500 mt-1">{projeto.descricao}</p>
          <div className="flex flex-wrap items-center gap-2 mt-3">
            <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${STATUS_COLOR[projeto.status] ?? 'bg-gray-100'}`}>
              {STATUS_LABEL[projeto.status] ?? projeto.status}
            </span>
            <span className="text-xs text-gray-400">📍 {projeto.cidade}, {projeto.estado}</span>
            {org && (
              <Link href={`/organizacoes/${org.id}`} className="text-xs text-brand-600 hover:underline">
                🏢 {org.nomeFantasia}
              </Link>
            )}
            {projeto.ods.map((o: number) => (
              <span key={o} className="px-1.5 py-0.5 bg-green-50 text-green-700 text-xs rounded font-medium">
                ODS {o}
              </span>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-2 sm:flex-row flex-wrap">
          <Link href={`/projetos/${id}/proposta`}
            className="shrink-0 px-4 py-2 bg-emerald-600 text-white text-sm font-medium rounded-lg hover:bg-emerald-700 transition-colors">
            🤝 Gerar Proposta
          </Link>
          <Link href={`/projetos/${id}/relatorio/anual`}
            className="shrink-0 px-4 py-2 bg-brand-600 text-white text-sm font-medium rounded-lg hover:bg-brand-700 transition-colors">
            📋 Relatório Anual
          </Link>
          <Link href={`/projetos/${id}/auditoria`}
            className="shrink-0 px-4 py-2 bg-slate-700 text-white text-sm font-medium rounded-lg hover:bg-slate-800 transition-colors">
            📦 Pacote de Auditoria
          </Link>
          <Link href={`/projetos/${id}/relatorio`}
            className="shrink-0 px-4 py-2 border border-brand-300 text-brand-700 text-sm font-medium rounded-lg hover:bg-brand-50 transition-colors">
            + Novo Relatório
          </Link>
        </div>
      </div>

      {/* ── Selo de Maturidade ──────────────────────────────────────────── */}
      {(() => {
        const selo = (projeto as any).selo as string | null;
        const s = selo ? SELO_CRITERIOS[selo as keyof typeof SELO_CRITERIOS] : null;
        const proximo = !selo ? 'bronze' : selo === 'bronze' ? 'prata' : selo === 'prata' ? 'ouro' : null;
        const proximoS = proximo ? SELO_CRITERIOS[proximo as keyof typeof SELO_CRITERIOS] : null;
        return (
          <div className="card p-5 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Selo de Maturidade Auditável</p>
              {s ? (
                <div className="flex items-center gap-2">
                  <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full border text-sm font-bold ${s.cor}`}>
                    {s.icon} {s.label}
                  </span>
                  <span className="text-xs text-gray-500">Certificado pela plataforma</span>
                </div>
              ) : (
                <span className="text-sm text-gray-400 italic">Sem selo ainda — veja os critérios abaixo</span>
              )}
              {s && (
                <ul className="mt-3 space-y-1">
                  {s.criterios.map((c) => (
                    <li key={c} className="flex items-start gap-1.5 text-xs text-gray-600">
                      <span className="text-green-600 mt-0.5">✓</span> {c}
                    </li>
                  ))}
                </ul>
              )}
            </div>
            {proximoS && (
              <div className="shrink-0 rounded-xl border border-dashed border-gray-200 bg-gray-50 p-4 max-w-xs">
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Próximo: {proximoS.icon} {proximoS.label}</p>
                <ul className="space-y-1">
                  {proximoS.criterios.map((c) => (
                    <li key={c} className="flex items-start gap-1.5 text-xs text-gray-500">
                      <span className="text-gray-300 mt-0.5">○</span> {c}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        );
      })()}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="card p-4 text-center">
          <p className="text-xs text-gray-500 mb-1">Meta total</p>
          <p className="text-xl font-bold text-gray-900">{fmt(projeto.valorMeta)}</p>
        </div>
        <div className="card p-4 text-center">
          <p className="text-xs text-gray-500 mb-1">Captado</p>
          <p className="text-xl font-bold text-brand-600">{fmt(projeto.valorCaptado)}</p>
        </div>
        <div className="card p-4 text-center">
          <p className="text-xs text-gray-500 mb-1">% captado</p>
          <p className="text-xl font-bold text-gray-900">{percentualCaptado}%</p>
        </div>
        <div className="card p-4 text-center">
          <p className="text-xs text-gray-500 mb-1">Beneficiários</p>
          <p className="text-xl font-bold text-gray-900">{projeto.beneficiarios.toLocaleString('pt-BR')}</p>
        </div>
      </div>

      {/* barra de captação */}
      <div className="card p-4">
        <div className="flex justify-between text-xs text-gray-500 mb-1">
          <span>Progresso de captação</span>
          <span>{percentualCaptado}% de {fmt(projeto.valorMeta)}</span>
        </div>
        <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
          <div
            className="h-full bg-brand-500 rounded-full transition-all"
            style={{ width: `${percentualCaptado}%` }}
          />
        </div>
      </div>

      {/* ── Objetivos Estratégicos ─────────────────────────────────────── */}
      {objetivos.length > 0 && (
        <section>
          <h2 className="text-lg font-semibold text-gray-900 mb-4">🎯 Objetivos Estratégicos</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {objetivos.map((obj: any) => (
              <div key={obj.id} className="card p-5 border-l-4 border-brand-500">
                <h3 className="font-semibold text-gray-900 mb-1">{obj.titulo}</h3>
                <p className="text-sm text-gray-500 mb-3">{obj.descricao}</p>
                <div className="flex flex-wrap gap-1">
                  {obj.ods.map((o: number) => (
                    <span key={o} className="px-1.5 py-0.5 bg-green-50 text-green-700 text-xs rounded font-medium">
                      ODS {o}
                    </span>
                  ))}
                </div>
                <p className="text-xs text-gray-400 mt-2">Indicador: <span className="font-medium text-gray-700">{obj.indicadorPrincipal}</span></p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ── Metas e Indicadores ───────────────────────────────────────── */}
      {metas.length > 0 && (
        <section>
          <h2 className="text-lg font-semibold text-gray-900 mb-4">📈 Metas e Indicadores</h2>
          <div className="card overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-100 bg-gray-50">
                  <th className="text-left py-3 px-4 text-xs font-semibold text-gray-500 uppercase tracking-wide">Meta</th>
                  <th className="text-center py-3 px-4 text-xs font-semibold text-gray-500 uppercase tracking-wide">Linha base</th>
                  <th className="text-center py-3 px-4 text-xs font-semibold text-gray-500 uppercase tracking-wide">Alvo</th>
                  <th className="text-center py-3 px-4 text-xs font-semibold text-gray-500 uppercase tracking-wide">Realizado</th>
                  <th className="text-left py-3 px-4 text-xs font-semibold text-gray-500 uppercase tracking-wide w-40">Progresso</th>
                  <th className="text-center py-3 px-4 text-xs font-semibold text-gray-500 uppercase tracking-wide">Prazo</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {metas.map((m: any) => {
                  const p = pct(m.realizado, m.alvo);
                  const barCls = META_STATUS[m.status]?.bar ?? 'bg-gray-400';
                  return (
                    <tr key={m.id} className="hover:bg-gray-50">
                      <td className="py-3 px-4">
                        <p className="font-medium text-gray-900">{m.descricao}</p>
                        <p className="text-xs text-gray-400">{m.frequencia}</p>
                      </td>
                      <td className="py-3 px-4 text-center text-gray-600">{m.linhaDeBase} {m.unidade}</td>
                      <td className="py-3 px-4 text-center font-medium text-gray-900">{m.alvo.toLocaleString('pt-BR')} {m.unidade}</td>
                      <td className="py-3 px-4 text-center font-bold text-brand-600">{m.realizado.toLocaleString('pt-BR')}</td>
                      <td className="py-3 px-4">
                        <div className="flex items-center gap-2">
                          <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
                            <div className={`h-full rounded-full ${barCls}`} style={{ width: `${p}%` }} />
                          </div>
                          <span className="text-xs text-gray-500 w-8 text-right">{p}%</span>
                        </div>
                      </td>
                      <td className="py-3 px-4 text-center text-xs text-gray-500">{m.prazo}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </section>
      )}

      {/* ── Orçamento ─────────────────────────────────────────────────── */}
      {orcamento.rubricas.length > 0 && (
        <section>
          <h2 className="text-lg font-semibold text-gray-900 mb-4">💰 Orçamento Detalhado</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {/* rubricas */}
            <div className="card p-5">
              <h3 className="text-sm font-semibold text-gray-700 mb-4">Distribuição por rubrica</h3>
              <div className="space-y-3">
                {orcamento.rubricas.map((r: any) => (
                  <div key={r.nome}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-700">{r.nome}</span>
                      <span className="font-medium text-gray-900">{fmt(r.valor)} <span className="text-xs text-gray-400">({r.percentual}%)</span></span>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full rounded-full" style={{ width: `${r.percentual}%`, backgroundColor: r.cor }} />
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4 pt-4 border-t border-gray-100 flex justify-between">
                <span className="font-semibold text-gray-700">Total</span>
                <span className="font-bold text-gray-900">{fmt(orcamento.total)}</span>
              </div>
            </div>

            {/* parcelas */}
            <div className="card p-5">
              <h3 className="text-sm font-semibold text-gray-700 mb-4">Parcelas vinculadas a marcos</h3>
              <div className="space-y-3">
                {orcamento.parcelas.map((p: any) => (
                  <div key={p.numero} className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-900">Parcela {p.numero}</p>
                      <p className="text-xs text-gray-400">{p.marco}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-bold text-gray-900">{fmt(p.valor)}</p>
                      <span className={`text-xs px-2 py-0.5 rounded-full ${
                        p.status === 'pago' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
                      }`}>
                        {p.status === 'pago' ? '✅ Pago' : '⏳ Pendente'}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ── Cronograma / Marcos ───────────────────────────────────────── */}
      {marcos.length > 0 && (
        <section>
          <h2 className="text-lg font-semibold text-gray-900 mb-4">🏁 Cronograma e Marcos</h2>
          <div className="space-y-4">
            {marcos.map((m: any, idx: number) => {
              const ms = MARCO_STATUS[m.status] ?? MARCO_STATUS.pendente;
              return (
                <div key={m.id} className="card p-5">
                  <div className="flex items-start gap-4">
                    <div className="shrink-0 w-8 h-8 rounded-full bg-brand-100 text-brand-700 flex items-center justify-center font-bold text-sm">
                      {idx + 1}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <h3 className="font-semibold text-gray-900">{m.titulo}</h3>
                        <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${ms.cls}`}>
                          {ms.icon} {ms.label}
                        </span>
                      </div>
                      <p className="text-sm text-gray-500 mb-2">{m.descricao}</p>
                      <div className="flex flex-wrap items-center gap-4 text-xs text-gray-400">
                        <span>📅 Prazo: <strong className="text-gray-700">{new Date(m.prazo).toLocaleDateString('pt-BR')}</strong></span>
                        <span>💰 Libera: <strong className="text-green-700">{fmt(m.valorLiberado)}</strong></span>
                      </div>
                      {m.evidencias.length > 0 && (
                        <div className="flex flex-wrap gap-1 mt-2">
                          {m.evidencias.map((e: string) => (
                            <span key={e} className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded">
                              📎 {e}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      )}

      {/* ── Relatórios e Evidências ───────────────────────────────────── */}
      {relatorios.length > 0 && (
        <section>
          <h2 className="text-lg font-semibold text-gray-900 mb-4">📋 Relatórios e Evidências</h2>
          <div className="space-y-6">
            {relatorios.map((rel: any) => (
              <div key={rel.id} className="card p-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="font-semibold text-gray-900">{rel.titulo}</h3>
                    <p className="text-xs text-gray-400 mt-0.5">
                      {rel.periodo} · Publicado em {new Date(rel.dataPublicacao).toLocaleDateString('pt-BR')}
                    </p>
                  </div>
                  <span className="text-xs px-2 py-0.5 rounded-full bg-green-100 text-green-700 font-medium">
                    {rel.status}
                  </span>
                </div>

                <p className="text-sm text-gray-600 mb-4">{rel.resumo}</p>

                {/* indicadores do relatório */}
                {rel.indicadores && rel.indicadores.length > 0 && (
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
                    {rel.indicadores.map((ind: any) => (
                      <div key={ind.nome} className="bg-gray-50 rounded-lg p-3 text-center">
                        <p className="text-xs text-gray-500 mb-1">{ind.nome}</p>
                        <p className="text-lg font-bold text-brand-600">
                          {ind.realizado.toLocaleString('pt-BR')}
                          <span className="text-xs text-gray-400 font-normal"> /{ind.meta.toLocaleString('pt-BR')} {ind.unidade}</span>
                        </p>
                        <div className="h-1.5 bg-gray-200 rounded-full mt-1 overflow-hidden">
                          <div
                            className="h-full bg-brand-500 rounded-full"
                            style={{ width: `${Math.min(100, Math.round((ind.realizado / ind.meta) * 100))}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* evidências */}
                {rel.evidencias && rel.evidencias.length > 0 && (
                  <div>
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Evidências</p>
                    <div className="flex flex-wrap gap-3">
                      {rel.evidencias.map((ev: any, i: number) => (
                        <div key={i}>
                          {ev.tipo === 'foto' ? (
                            <div className="text-center">
                              {/* eslint-disable-next-line @next/next/no-img-element */}
                              <img
                                src={ev.url}
                                alt={ev.descricao}
                                className="w-32 h-24 object-cover rounded-lg border border-gray-200"
                              />
                              <p className="text-xs text-gray-400 mt-1 max-w-[128px] truncate">{ev.descricao}</p>
                            </div>
                          ) : ev.tipo === 'video' ? (
                            <div className="w-32 h-24 rounded-lg border border-gray-200 bg-gray-100 flex flex-col items-center justify-center gap-1">
                              <span className="text-2xl">🎥</span>
                              <p className="text-xs text-gray-500 text-center px-1 leading-tight">{ev.descricao}</p>
                            </div>
                          ) : (
                            <div className="flex items-center gap-2 px-3 py-2 bg-gray-50 rounded-lg border border-gray-200">
                              <span>📄</span>
                              <span className="text-xs text-gray-600">{ev.descricao}</span>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ── Timeline ──────────────────────────────────────────────────── */}
      {timeline.length > 0 && (
        <section>
          <h2 className="text-lg font-semibold text-gray-900 mb-4">📅 Linha do Tempo</h2>
          <div className="card p-5">
            <div className="space-y-4">
              {timeline.map((t: any, idx: number) => (
                <div key={idx} className="flex gap-3">
                  <div className="shrink-0 text-lg">{TIMELINE_ICON[t.tipo] ?? '📌'}</div>
                  <div>
                    <div className="flex items-center gap-2">
                      <p className="font-medium text-gray-900 text-sm">{t.titulo}</p>
                      <p className="text-xs text-gray-400">{new Date(t.data).toLocaleDateString('pt-BR')}</p>
                    </div>
                    <p className="text-sm text-gray-500">{t.descricao}</p>                    {t.responsavel && (
                      <p className="text-xs text-gray-400 mt-0.5">🖊 {t.responsavel}</p>
                    )}                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Depoimentos ───────────────────────────────────────────────── */}
      {depoimentos.length > 0 && (
        <section>
          <h2 className="text-lg font-semibold text-gray-900 mb-4">💬 Depoimentos de Beneficiários</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {depoimentos.map((d: any, idx: number) => (
              <div key={idx} className="card p-5 border-l-4 border-brand-200">
                <p className="text-sm text-gray-700 italic">"{d.texto}"</p>
                <p className="text-xs text-gray-400 mt-3">— {d.autor} · {new Date(d.data).toLocaleDateString('pt-BR')}</p>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
