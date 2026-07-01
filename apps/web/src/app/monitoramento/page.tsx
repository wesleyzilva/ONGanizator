import { api } from '@/lib/api';
import Link from 'next/link';

const TIPO_ICON: Record<string, string> = {
  marco: '🚩',
  relatorio: '📄',
  aporte: '💰',
  alerta: '⚠️',
  conquista: '🏆',
};

const TIPO_COR: Record<string, string> = {
  marco: 'bg-blue-100 text-blue-700',
  relatorio: 'bg-gray-100 text-gray-600',
  aporte: 'bg-amber-100 text-amber-700',
  alerta: 'bg-red-100 text-red-600',
  conquista: 'bg-green-100 text-green-700',
};

const IND_COR: Record<string, string> = {
  atingido: 'bg-green-500',
  no_prazo: 'bg-brand-500',
  atencao: 'bg-amber-400',
};

export default async function MonitoramentoPage() {
  const [consolidado, proj1, proj2] = await Promise.all([
    api.monitoramentoConsolidado(),
    api.monitoramentoProjeto('prj-001'),
    api.monitoramentoProjeto('prj-002'),
  ]);

  const projetos = [proj1, proj2];

  return (
    <div className="p-8 space-y-10">

      {/* Cabeçalho */}
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Monitoramento & Prestação de Contas</h1>
          <p className="text-sm text-gray-500 mt-1">Acompanhamento em tempo real de todos os projetos financiados</p>
        </div>
        <Link href="/para-investidores" className="btn-secondary text-sm">
          Ver página do investidor →
        </Link>
      </div>

      {/* KPIs de monitoramento */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { v: consolidado.projetosMonitorados, l: 'Projetos monitorados', c: 'text-brand-600' },
          { v: consolidado.totalRelatorios, l: 'Relatórios publicados', c: 'text-blue-600' },
          { v: consolidado.totalEvidencias, l: 'Evidências registradas', c: 'text-amber-600' },
          { v: consolidado.totalDepoimentos, l: 'Depoimentos coletados', c: 'text-violet-600' },
        ].map(k => (
          <div key={k.l} className="card text-center">
            <p className={`text-3xl font-bold ${k.c}`}>{k.v}</p>
            <p className="text-xs text-gray-500 mt-1">{k.l}</p>
          </div>
        ))}
      </div>

      {/* Alertas */}
      <div className="card">
        <h2 className="font-semibold text-gray-800 mb-3">Status de Conformidade</h2>
        <div className="space-y-2">
          {consolidado.alertas?.map((a: any, i: number) => (
            <div key={i} className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm ${a.tipo === 'ok' ? 'bg-green-50 text-green-700' : 'bg-amber-50 text-amber-700'}`}>
              <span>{a.tipo === 'ok' ? '✓' : '⚠'}</span>
              <span>{a.mensagem}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Indicadores consolidados */}
      <div className="card">
        <h2 className="font-semibold text-gray-800 mb-5">Indicadores de Impacto — Visão Geral</h2>
        <div className="space-y-4">
          {consolidado.performanceIndicadores?.map((ind: any) => (
            <div key={`${ind.projetoId}-${ind.nome}`}>
              <div className="flex items-center justify-between mb-1">
                <div>
                  <span className="text-sm font-medium text-gray-800">{ind.nome}</span>
                  <span className="text-xs text-gray-400 ml-2">· {ind.periodo}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-semibold text-gray-700">
                    {ind.realizado.toLocaleString('pt-BR')} / {ind.meta.toLocaleString('pt-BR')} {ind.unidade}
                  </span>
                  <span className={`badge text-xs ${ind.status === 'atingido' ? 'bg-green-100 text-green-700' : ind.status === 'no_prazo' ? 'bg-blue-100 text-blue-700' : 'bg-amber-100 text-amber-700'}`}>
                    {ind.percentual}%
                  </span>
                </div>
              </div>
              <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                <div
                  className={`h-full rounded-full transition-all ${IND_COR[ind.status] || 'bg-brand-500'}`}
                  style={{ width: `${Math.min(ind.percentual, 100)}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Timeline global */}
      <div className="card">
        <h2 className="font-semibold text-gray-800 mb-5">Linha do Tempo — Últimas Atualizações</h2>
        <div className="space-y-3">
          {consolidado.ultimasAtualizacoes?.map((ev: any, i: number) => (
            <div key={i} className="flex gap-4 items-start">
              <div className="flex flex-col items-center">
                <span className={`w-9 h-9 rounded-xl flex items-center justify-center text-base shrink-0 ${TIPO_COR[ev.tipo]}`}>
                  {TIPO_ICON[ev.tipo]}
                </span>
                {i < (consolidado.ultimasAtualizacoes.length - 1) && (
                  <div className="w-px flex-1 bg-gray-200 mt-1" style={{ minHeight: 16 }} />
                )}
              </div>
              <div className="pb-3 flex-1">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-semibold text-gray-900">{ev.titulo}</p>
                  <span className="text-xs text-gray-400">{new Date(ev.data).toLocaleDateString('pt-BR')}</span>
                </div>
                <p className="text-xs text-gray-500 mt-0.5">{ev.descricao}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Projetos com relatórios e evidências */}
      {projetos.map((p: any) => (
        <div key={p.projeto.id} className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-lg font-bold text-gray-900">{p.projeto.titulo}</h2>
              <p className="text-sm text-gray-400">{p.projeto.organizacaoNome} · {p.projeto.estado}</p>
            </div>
            <div className="text-right">
              <p className="text-xs text-gray-400">Captado</p>
              <p className="text-lg font-bold text-brand-600">
                {p.resumo.percentualMeta}% da meta
              </p>
            </div>
          </div>

          {/* Relatórios */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {p.relatorios?.map((r: any) => (
              <div key={r.id} className="card border-l-4 border-l-brand-400">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">{r.titulo}</p>
                    <p className="text-xs text-gray-400">{r.periodo}</p>
                  </div>
                  <span className={`badge text-xs ${r.status === 'publicado' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>
                    {r.status === 'publicado' ? '✓ Publicado' : 'Em elaboração'}
                  </span>
                </div>
                <p className="text-xs text-gray-600 leading-relaxed mb-4">{r.resumo}</p>

                {/* Indicadores do relatório */}
                <div className="space-y-2 mb-4">
                  {r.indicadores?.map((ind: any, j: number) => {
                    const pct = Math.round((ind.realizado / ind.meta) * 100);
                    return (
                      <div key={j}>
                        <div className="flex justify-between text-xs mb-0.5">
                          <span className="text-gray-600">{ind.nome}</span>
                          <span className="font-medium text-gray-800">
                            {ind.realizado.toLocaleString('pt-BR')} / {ind.meta.toLocaleString('pt-BR')} {ind.unidade}
                          </span>
                        </div>
                        <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                          <div
                            className={`h-full rounded-full ${pct >= 100 ? 'bg-green-500' : 'bg-brand-500'}`}
                            style={{ width: `${Math.min(pct, 100)}%` }}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Evidências */}
                <div className="border-t border-gray-100 pt-3">
                  <p className="text-xs font-medium text-gray-500 mb-2">Evidências ({r.evidencias?.length})</p>
                  <div className="flex flex-wrap gap-2">
                    {r.evidencias?.map((ev: any, k: number) => (
                      <div key={k} className="relative group">
                        {ev.tipo === 'foto' ? (
                          <div className="w-16 h-16 rounded-lg overflow-hidden bg-gray-100 border border-gray-200">
                            <img
                              src={ev.url}
                              alt={ev.descricao}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        ) : (
                          <div className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-medium ${ev.tipo === 'video' ? 'bg-rose-50 text-rose-600' : 'bg-gray-50 text-gray-600'}`}>
                            <span>{ev.tipo === 'video' ? '▶' : '📄'}</span>
                            <span className="max-w-[120px] truncate">{ev.descricao}</span>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Depoimentos */}
          {p.depoimentos?.length > 0 && (
            <div className="bg-brand-50 rounded-2xl p-6 space-y-1">
              <p className="text-xs font-semibold text-brand-600 uppercase tracking-wide mb-2">Voz dos beneficiários</p>
              {p.depoimentos.map((d: any, i: number) => (
                <div key={i}>
                  <p className="text-gray-700 italic text-sm leading-relaxed">"{d.texto}"</p>
                  <p className="text-xs text-brand-500 font-medium mt-1">{d.autor}</p>
                </div>
              ))}
            </div>
          )}

          <hr className="border-gray-100" />
        </div>
      ))}
    </div>
  );
}
 
