// PO-008 — Relatório Anual Consolidado
// Gerado automaticamente a partir de KRs, evidências, orçamento, parecer contábil e jurídico.
import { PROJECTS, SELO_CRITERIOS, getProjetoDetalhes, getContabilidadeResumo } from '@/lib/mockData';
import Link from 'next/link';

export function generateStaticParams() {
  return PROJECTS.map((p) => ({ id: p.id }));
}

function fmt(n: number) {
  return n.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

function pct(r: number, t: number) {
  return t > 0 ? Math.min(100, Math.round((r / t) * 100)) : 0;
}

export default async function RelatorioAnualPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const detalhes = getProjetoDetalhes(id);

  if (!detalhes) {
    return (
      <div className="p-8 text-center text-gray-500">
        Projeto não encontrado.{' '}
        <Link href="/projetos" className="text-brand-600 underline">Voltar</Link>
      </div>
    );
  }

  const { projeto, org, objetivos, metas, orcamento, marcos, relatorios, timeline, depoimentos } = detalhes;
  const contab = getContabilidadeResumo(org?.id ?? 'org-001');

  const relAnual = relatorios.find((r: any) => r.tipo === 'anual') ?? relatorios[relatorios.length - 1];
  const marcosConc = marcos.filter((m: any) => m.status === 'concluido');
  const marcosTotal = marcos.length;
  const auditTrail = timeline.filter((t: any) => ['auditoria', 'aprovacao', 'aporte'].includes(t.tipo));
  const selo = (projeto as any).selo as string | null;
  const seloS = selo ? SELO_CRITERIOS[selo as keyof typeof SELO_CRITERIOS] : null;

  const periodoLabel = projeto.dataInicio && projeto.dataFim
    ? `${new Date(projeto.dataInicio).toLocaleDateString('pt-BR', { month: 'long', year: 'numeric' })} – ${new Date(projeto.dataFim).toLocaleDateString('pt-BR', { month: 'long', year: 'numeric' })}`
    : '2024 – 2025';

  return (
    <div className="p-8 max-w-4xl mx-auto space-y-10 print:p-4">
      {/* ── Cabeçalho / Capa ───────────────────────────────────────── */}
      <div className="card p-8 bg-gradient-to-br from-brand-600 to-brand-800 text-white rounded-2xl">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-brand-200 mb-2">Relatório Anual Consolidado</p>
            <h1 className="text-2xl font-bold leading-tight">{projeto.titulo}</h1>
            <p className="text-brand-200 text-sm mt-1">{org?.razaoSocial ?? 'Organização'}</p>
            <p className="text-brand-300 text-xs mt-2">{periodoLabel}</p>
          </div>
          {seloS && (
            <div className="shrink-0 flex flex-col items-center gap-1 bg-white/10 rounded-xl px-4 py-3">
              <span className="text-3xl">{seloS.icon}</span>
              <span className="text-xs font-bold text-white">{seloS.label}</span>
            </div>
          )}
        </div>

        <div className="mt-6 grid grid-cols-3 gap-4">
          <div className="bg-white/10 rounded-xl p-3 text-center">
            <p className="text-xs text-brand-200">Meta total</p>
            <p className="text-lg font-bold">{fmt(projeto.valorMeta)}</p>
          </div>
          <div className="bg-white/10 rounded-xl p-3 text-center">
            <p className="text-xs text-brand-200">Captado</p>
            <p className="text-lg font-bold">{fmt(projeto.valorCaptado)}</p>
          </div>
          <div className="bg-white/10 rounded-xl p-3 text-center">
            <p className="text-xs text-brand-200">Beneficiários</p>
            <p className="text-lg font-bold">{projeto.beneficiarios.toLocaleString('pt-BR')}</p>
          </div>
        </div>

        <div className="mt-4 flex items-center justify-between">
          <div className="flex flex-wrap gap-2">
            {projeto.ods.map((o: number) => (
              <span key={o} className="text-xs bg-white/20 px-2 py-0.5 rounded-full font-semibold">ODS {o}</span>
            ))}
          </div>
          <Link href={`/projetos/${id}`} className="text-xs text-brand-200 hover:text-white underline">
            ← Ver projeto completo
          </Link>
        </div>
      </div>

      {/* ── 1. Identificação ───────────────────────────────────────── */}
      <section>
        <h2 className="text-lg font-bold text-gray-900 border-b border-gray-200 pb-2 mb-4">1. Identificação</h2>
        <div className="grid md:grid-cols-2 gap-4 text-sm">
          {[
            ['ONG / Organização', org?.razaoSocial ?? '—'],
            ['CNPJ', org?.cnpj ?? '—'],
            ['Financiador associado', 'Fundação Horizonte Verde'],
            ['Mecanismo de captação', 'Doação Direta + Edital'],
            ['Período coberto', periodoLabel],
            ['Estado / Cidade', `${projeto.estado} · ${projeto.cidade}`],
          ].map(([label, value]) => (
            <div key={label} className="card p-3 flex gap-3">
              <span className="text-xs font-semibold text-gray-500 w-40 shrink-0">{label}</span>
              <span className="text-gray-900">{value}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── 2. Objetivo e KRs ──────────────────────────────────────── */}
      <section>
        <h2 className="text-lg font-bold text-gray-900 border-b border-gray-200 pb-2 mb-4">2. Objetivo Aprovado e KRs</h2>
        {objetivos.length > 0 ? (
          <div className="space-y-4">
            {objetivos.map((obj: any) => (
              <div key={obj.id} className="card p-5 border-l-4 border-brand-500">
                <h3 className="font-semibold text-gray-900">{obj.titulo}</h3>
                <p className="text-sm text-gray-500 mt-1">{obj.descricao}</p>
                <p className="text-xs text-gray-400 mt-2">Indicador principal: <strong className="text-gray-700">{obj.indicadorPrincipal}</strong></p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-sm text-gray-500 italic">Objetivos não cadastrados.</p>
        )}
      </section>

      {/* ── 3. KRs planejados × realizados ─────────────────────────── */}
      <section>
        <h2 className="text-lg font-bold text-gray-900 border-b border-gray-200 pb-2 mb-4">3. Metas e Indicadores — Planejado × Realizado</h2>
        {metas.length > 0 ? (
          <div className="card overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-100">
                  <th className="text-left py-3 px-4 text-xs font-semibold text-gray-500 uppercase">Meta / KR</th>
                  <th className="text-center py-3 px-4 text-xs font-semibold text-gray-500 uppercase">Alvo</th>
                  <th className="text-center py-3 px-4 text-xs font-semibold text-gray-500 uppercase">Realizado</th>
                  <th className="text-left py-3 px-4 text-xs font-semibold text-gray-500 uppercase w-36">Progresso</th>
                  <th className="text-center py-3 px-4 text-xs font-semibold text-gray-500 uppercase">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {metas.map((m: any) => {
                  const p = pct(m.realizado, m.alvo);
                  const statusCls = p >= 100 ? 'bg-green-100 text-green-700' : p >= 70 ? 'bg-blue-100 text-blue-700' : 'bg-yellow-100 text-yellow-700';
                  const statusLabel = p >= 100 ? '✅ Atingido' : p >= 70 ? '🔄 No prazo' : '⚠️ Atenção';
                  return (
                    <tr key={m.id} className="hover:bg-gray-50">
                      <td className="py-3 px-4">
                        <p className="font-medium text-gray-900">{m.descricao}</p>
                        <p className="text-xs text-gray-400">{m.frequencia}</p>
                      </td>
                      <td className="py-3 px-4 text-center text-gray-700">{m.alvo.toLocaleString('pt-BR')} {m.unidade}</td>
                      <td className="py-3 px-4 text-center font-bold text-brand-600">{m.realizado.toLocaleString('pt-BR')}</td>
                      <td className="py-3 px-4">
                        <div className="flex items-center gap-2">
                          <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
                            <div className={`h-full rounded-full ${p >= 100 ? 'bg-green-500' : p >= 70 ? 'bg-brand-500' : 'bg-yellow-400'}`} style={{ width: `${p}%` }} />
                          </div>
                          <span className="text-xs text-gray-500 w-8 text-right">{p}%</span>
                        </div>
                      </td>
                      <td className="py-3 px-4 text-center">
                        <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${statusCls}`}>{statusLabel}</span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        ) : (
          <p className="text-sm text-gray-500 italic">Metas não cadastradas.</p>
        )}
      </section>

      {/* ── 4. Marcos executados ───────────────────────────────────── */}
      <section>
        <h2 className="text-lg font-bold text-gray-900 border-b border-gray-200 pb-2 mb-4">
          4. Marcos Executados ({marcosConc.length}/{marcosTotal})
        </h2>
        <div className="grid md:grid-cols-2 gap-3">
          {marcos.map((m: any, i: number) => (
            <div key={m.id} className={`card p-4 flex gap-3 ${m.status === 'concluido' ? 'bg-green-50 border-green-200' : m.status === 'em_andamento' ? 'bg-blue-50 border-blue-200' : ''}`}>
              <div className="shrink-0 w-7 h-7 rounded-full bg-brand-100 text-brand-700 flex items-center justify-center text-xs font-bold">{i + 1}</div>
              <div>
                <p className="text-sm font-semibold text-gray-900">{m.titulo}</p>
                <p className="text-xs text-gray-500 mt-0.5">Prazo: {new Date(m.prazo).toLocaleDateString('pt-BR')} · Libera: {fmt(m.valorLiberado)}</p>
                <div className="flex flex-wrap gap-1 mt-1">
                  {m.evidencias.map((e: string) => <span key={e} className="text-xs bg-gray-100 text-gray-500 px-1.5 py-0.5 rounded">📎 {e}</span>)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── 5. Evidências principais ───────────────────────────────── */}
      {relAnual?.evidencias?.length > 0 && (
        <section>
          <h2 className="text-lg font-bold text-gray-900 border-b border-gray-200 pb-2 mb-4">5. Evidências Principais</h2>
          <div className="flex flex-wrap gap-4">
            {relAnual.evidencias.map((ev: any, i: number) => (
              <div key={i}>
                {ev.tipo === 'foto' ? (
                  <div className="text-center">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={ev.url} alt={ev.descricao} className="w-40 h-28 object-cover rounded-xl border border-gray-200" />
                    <p className="text-xs text-gray-400 mt-1 max-w-[160px] truncate">{ev.descricao}</p>
                  </div>
                ) : ev.tipo === 'video' ? (
                  <div className="w-40 h-28 rounded-xl border border-gray-200 bg-gray-50 flex flex-col items-center justify-center gap-1">
                    <span className="text-3xl">🎥</span>
                    <p className="text-xs text-gray-500 text-center px-2">{ev.descricao}</p>
                  </div>
                ) : (
                  <div className="flex items-center gap-2 px-3 py-2 bg-gray-50 rounded-xl border border-gray-200">
                    <span>📄</span><span className="text-xs text-gray-600">{ev.descricao}</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ── 6. Orçamento aprovado × executado ──────────────────────── */}
      <section>
        <h2 className="text-lg font-bold text-gray-900 border-b border-gray-200 pb-2 mb-4">6. Orçamento Aprovado × Executado</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="card p-5">
            <h3 className="text-sm font-semibold text-gray-700 mb-3">Por rubrica (aprovado)</h3>
            {orcamento.rubricas.length > 0 ? (
              <div className="space-y-2">
                {orcamento.rubricas.map((r: any) => (
                  <div key={r.nome} className="flex justify-between text-sm">
                    <span className="text-gray-700">{r.nome}</span>
                    <span className="font-medium">{fmt(r.valor)} <span className="text-xs text-gray-400">({r.percentual}%)</span></span>
                  </div>
                ))}
                <div className="border-t pt-2 flex justify-between font-bold text-sm">
                  <span>Total aprovado</span><span>{fmt(orcamento.total)}</span>
                </div>
              </div>
            ) : <p className="text-sm text-gray-400 italic">Rubricas não cadastradas.</p>}
          </div>
          <div className="card p-5">
            <h3 className="text-sm font-semibold text-gray-700 mb-3">Executado (lançamentos)</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between text-green-700 font-medium">
                <span>Receitas</span><span>{fmt(contab.totalReceitas)}</span>
              </div>
              <div className="flex justify-between text-red-600 font-medium">
                <span>Despesas</span><span>{fmt(contab.totalDespesas)}</span>
              </div>
              <div className="border-t pt-2 flex justify-between font-bold">
                <span>Saldo</span>
                <span className={contab.saldo >= 0 ? 'text-blue-700' : 'text-red-700'}>{fmt(contab.saldo)}</span>
              </div>
              <div className="mt-2">
                <div className="flex justify-between text-xs text-gray-500 mb-1">
                  <span>% executado vs aprovado</span>
                  <span>{pct(contab.totalDespesas, orcamento.total)}%</span>
                </div>
                <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full bg-brand-500 rounded-full" style={{ width: `${pct(contab.totalDespesas, orcamento.total)}%` }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 7. Trilha de auditoria ─────────────────────────────────── */}
      {auditTrail.length > 0 && (
        <section>
          <h2 className="text-lg font-bold text-gray-900 border-b border-gray-200 pb-2 mb-4">7. Trilha de Auditoria</h2>
          <div className="card p-5 space-y-3">
            {auditTrail.map((t: any, i: number) => (
              <div key={i} className="flex gap-3">
                <span className="shrink-0 text-lg">{t.tipo === 'auditoria' ? '🔍' : t.tipo === 'aprovacao' ? '✅' : '💰'}</span>
                <div>
                  <div className="flex items-center gap-2">
                    <p className="font-medium text-gray-900 text-sm">{t.titulo}</p>
                    <p className="text-xs text-gray-400">{new Date(t.data).toLocaleDateString('pt-BR')}</p>
                  </div>
                  <p className="text-sm text-gray-500">{t.descricao}</p>
                  {t.responsavel && <p className="text-xs text-gray-400 mt-0.5">🖊 {t.responsavel}</p>}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ── 8. Parecer Contábil ────────────────────────────────────── */}
      <section>
        <h2 className="text-lg font-bold text-gray-900 border-b border-gray-200 pb-2 mb-4">8. Parecer Contábil</h2>
        <div className="card p-6 border-l-4 border-green-500 bg-green-50">
          <div className="flex items-start justify-between gap-4 mb-3">
            <div>
              <p className="font-semibold text-gray-900">Parecer ref. {projeto.titulo}</p>
              <p className="text-xs text-gray-500 mt-0.5">Emitido em 15/01/2025 · Dr. Ricardo Alves (CRC-SP 123.456)</p>
            </div>
            <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-green-100 text-green-700 font-semibold border border-green-200">✅ Homologado</span>
          </div>
          <p className="text-sm text-gray-700">
            As demonstrações financeiras do projeto foram examinadas e encontram-se em conformidade com os
            princípios contábeis aplicáveis às Organizações da Sociedade Civil. Os valores captados e lançamentos
            possuem documentação comprobatória (NF e recibos). Saldo disponível consistente com execução financeira.
          </p>
        </div>
      </section>

      {/* ── 9. Parecer Jurídico ────────────────────────────────────── */}
      <section>
        <h2 className="text-lg font-bold text-gray-900 border-b border-gray-200 pb-2 mb-4">9. Parecer Jurídico / Compliance</h2>
        <div className="card p-6 border-l-4 border-purple-400 bg-purple-50">
          <div className="flex items-start justify-between gap-4 mb-3">
            <div>
              <p className="font-semibold text-gray-900">Elegibilidade jurídica — {projeto.titulo}</p>
              <p className="text-xs text-gray-500 mt-0.5">Emitido em 10/01/2025 · Adv. Carlos Mendes (OAB-SP 98.765)</p>
            </div>
            <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-purple-100 text-purple-700 font-semibold border border-purple-200">✅ Aprovado</span>
          </div>
          <p className="text-sm text-gray-700">
            Analisada a documentação da organização e do projeto. CNPJ regular, estatuto social conforme
            Lei 9.790/99, certidões negativas vigentes. Projeto elegível para captação via Doação Direta (Lei 9.249/95)
            e Edital público. Sem restrições jurídicas identificadas para o período coberto.
          </p>
          <p className="text-xs text-yellow-700 bg-yellow-50 border border-yellow-200 rounded-lg px-3 py-2 mt-3">
            ⚠️ Disclaimer: Este parecer é simulado para fins de demonstração. Consulte um advogado habilitado antes de utilizar em contexto real.
          </p>
        </div>
      </section>

      {/* ── 10. Depoimentos ────────────────────────────────────────── */}
      {depoimentos.length > 0 && (
        <section>
          <h2 className="text-lg font-bold text-gray-900 border-b border-gray-200 pb-2 mb-4">10. Depoimentos de Beneficiários</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {depoimentos.map((d: any, i: number) => (
              <div key={i} className="card p-5 border-l-4 border-brand-200 italic text-sm text-gray-700">
                "{d.texto}"
                <p className="text-xs text-gray-400 mt-3 not-italic">— {d.autor} · {new Date(d.data).toLocaleDateString('pt-BR')}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ── 11. Conclusão ──────────────────────────────────────────── */}
      <section>
        <h2 className="text-lg font-bold text-gray-900 border-b border-gray-200 pb-2 mb-4">11. Conclusão e Recomendação</h2>
        <div className="card p-6 space-y-3 text-sm text-gray-700">
          <p>
            O projeto <strong>{projeto.titulo}</strong> demonstrou execução consistente com o plano aprovado.
            Os marcos entregues ({marcosConc.length} de {marcosTotal}), as evidências anexadas e os indicadores alcançados
            sustentam a continuidade das atividades e a elegibilidade para novo ciclo de captação.
          </p>
          {seloS && (
            <p>
              Certificação de maturidade atual: <strong>{seloS.icon} {seloS.label}</strong> —
              {' '}{seloS.criterios[0]}.
            </p>
          )}
          <p className="text-gray-500">
            Recomenda-se renovação do acordo de parceria para o próximo período, com atualização dos KRs
            e revisão dos marcos conforme aprendizados do ciclo atual.
          </p>
        </div>
      </section>

      {/* ── Ações ──────────────────────────────────────────────────── */}
      <div className="flex flex-wrap gap-3 border-t border-gray-200 pt-6 print:hidden">
        <Link href={`/projetos/${id}`}
          className="px-4 py-2 border border-gray-200 text-sm text-gray-600 rounded-lg hover:bg-gray-50">
          ← Voltar ao projeto
        </Link>
        <button className="px-4 py-2 bg-brand-600 text-white text-sm font-semibold rounded-lg hover:bg-brand-700">
          📤 Exportar PDF
        </button>
        <button className="px-4 py-2 border border-brand-300 text-brand-700 text-sm font-medium rounded-lg hover:bg-brand-50">
          📧 Enviar ao financiador
        </button>
        <button className="px-4 py-2 border border-gray-200 text-sm text-gray-600 rounded-lg hover:bg-gray-50">
          🖨️ Imprimir
        </button>
      </div>
    </div>
  );
}
