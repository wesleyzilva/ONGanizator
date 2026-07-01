import { PROJECTS, MARCOS_LEGAIS, SELO_CRITERIOS, getProjetoDetalhes } from '@/lib/mockData';
import Link from 'next/link';

export function generateStaticParams() {
  return PROJECTS.map((p) => ({ id: p.id }));
}

const ODS_NOME: Record<number, string> = {
  1: 'Erradicação da Pobreza',
  2: 'Fome Zero',
  3: 'Saúde e Bem-Estar',
  4: 'Educação de Qualidade',
  5: 'Igualdade de Gênero',
  6: 'Água Potável e Saneamento',
  7: 'Energia Limpa',
  8: 'Trabalho Decente e Crescimento Econômico',
  9: 'Indústria, Inovação e Infraestrutura',
  10: 'Redução das Desigualdades',
  11: 'Cidades Sustentáveis',
  12: 'Consumo e Produção Responsáveis',
  13: 'Ação Climática',
  14: 'Vida na Água',
  15: 'Vida Terrestre',
  16: 'Paz, Justiça e Instituições Eficazes',
  17: 'Parcerias e Meios de Implementação',
};

function fmt(n: number) {
  return n >= 1_000_000
    ? `R$ ${(n / 1_000_000).toFixed(1)} milhão`
    : `R$ ${(n / 1_000).toFixed(0)} mil`;
}

function pct(realizado: number, alvo: number) {
  return Math.min(100, Math.round((realizado / alvo) * 100));
}

/** Escolhe o mecanismo de captação mais relevante para o projeto pelo match de ODS */
function getMecanismoRecomendado(ods: number[]) {
  // prioridade: lei-rouanet, esporte, fia, lei-informatica, doacao-direta
  const priority = ['lei-rouanet', 'lei-esporte', 'fia', 'lei-informatica', 'doacao-direta', 'pronon-pronas'];
  for (const id of priority) {
    const m = MARCOS_LEGAIS.find((ml: any) => ml.id === id);
    if (!m) continue;
    if ((m as any).ods?.some((o: number) => ods.includes(o))) return m;
  }
  return MARCOS_LEGAIS.find((ml: any) => ml.id === 'doacao-direta') ?? MARCOS_LEGAIS[0];
}

export default async function PropostePage({
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

  const { projeto, org, objetivos, metas, orcamento } = detalhes;
  const mecanismo = getMecanismoRecomendado(projeto.ods) as any;
  const selos = (projeto as any).selo
    ? SELO_CRITERIOS[(projeto as any).selo as keyof typeof SELO_CRITERIOS]
    : null;

  const percentualCaptado = pct(projeto.valorCaptado, projeto.valorMeta);
  const valorRestante = projeto.valorMeta - projeto.valorCaptado;

  // Contrapartidas padrão + mecanismo-específicas
  const contrapartidas = [
    ...(mecanismo?.beneficiosEmpresa ?? []),
    `Menção em todos os relatórios públicos do projeto ${projeto.titulo}`,
    `Logo do patrocinador no material de comunicação do projeto`,
    `Acesso a relatórios de impacto e indicadores em tempo real via ONGanizator`,
    selos ? `Projeto certificado com Selo ${selos.label} — auditável e verificável` : null,
  ].filter(Boolean) as string[];

  return (
    <div className="p-8 space-y-10 max-w-4xl mx-auto print:p-0 print:space-y-6">
      {/* ── Navegação ──────────────────────────────────────────────────── */}
      <div className="flex items-center justify-between print:hidden">
        <Link href={`/projetos/${id}`} className="text-sm text-gray-400 hover:text-brand-600">
          ← Voltar ao projeto
        </Link>
        <span className="text-xs text-gray-400 italic">Use Ctrl+P / Cmd+P para imprimir</span>
      </div>

      {/* ── Capa da proposta ───────────────────────────────────────────── */}
      <div className="rounded-2xl bg-gradient-to-br from-brand-600 to-brand-800 p-8 text-white">
        <div className="flex items-start justify-between gap-4">
          <div className="space-y-2">
            <p className="text-brand-200 text-sm font-medium uppercase tracking-widest">
              Proposta de Patrocínio
            </p>
            <h1 className="text-3xl font-bold leading-tight">{projeto.titulo}</h1>
            <p className="text-brand-100 text-base max-w-xl">{projeto.descricao}</p>
          </div>
          {selos && (
            <div className="shrink-0 text-center bg-white/10 rounded-xl px-5 py-3">
              <div className="text-3xl">{selos.icon}</div>
              <div className="text-xs text-brand-100 mt-1">Selo {selos.label}</div>
            </div>
          )}
        </div>

        <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="bg-white/10 rounded-lg p-3 text-center">
            <div className="text-xl font-bold">{fmt(projeto.valorMeta)}</div>
            <div className="text-brand-200 text-xs">Meta total</div>
          </div>
          <div className="bg-white/10 rounded-lg p-3 text-center">
            <div className="text-xl font-bold">{fmt(valorRestante)}</div>
            <div className="text-brand-200 text-xs">Ainda a captar</div>
          </div>
          <div className="bg-white/10 rounded-lg p-3 text-center">
            <div className="text-xl font-bold">
              {projeto.beneficiarios.toLocaleString('pt-BR')}
            </div>
            <div className="text-brand-200 text-xs">Beneficiários</div>
          </div>
          <div className="bg-white/10 rounded-lg p-3 text-center">
            <div className="text-xl font-bold">{percentualCaptado}%</div>
            <div className="text-brand-200 text-xs">Captado</div>
          </div>
        </div>

        {/* Barra de progresso */}
        <div className="mt-4">
          <div className="h-2 bg-white/20 rounded-full overflow-hidden">
            <div
              className="h-2 bg-white rounded-full transition-all"
              style={{ width: `${percentualCaptado}%` }}
            />
          </div>
          <p className="text-brand-200 text-xs mt-1">
            {fmt(projeto.valorCaptado)} captados de {fmt(projeto.valorMeta)}
          </p>
        </div>

        {/* ODS */}
        <div className="mt-5 flex flex-wrap gap-2">
          {projeto.ods.map((o: number) => (
            <span key={o} className="px-2 py-1 bg-white/15 rounded-lg text-xs font-medium">
              ODS {o} — {ODS_NOME[o] ?? ''}
            </span>
          ))}
        </div>

        {/* Organização */}
        {org && (
          <div className="mt-4 text-brand-100 text-sm">
            📍 {org.razaoSocial} · {org.cnpj} · {org.cidade}, {org.estado}
          </div>
        )}
      </div>

      {/* ── 1. Objetivo do Projeto ─────────────────────────────────────── */}
      {objetivos && objetivos.length > 0 && (
        <section>
          <h2 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
            <span className="w-7 h-7 rounded-full bg-brand-600 text-white text-xs flex items-center justify-center font-bold">1</span>
            Objetivo do Projeto
          </h2>
          <div className="space-y-3">
            {objetivos.map((obj: any) => (
              <div key={obj.id} className="rounded-xl border border-gray-200 p-4 bg-white">
                <div className="flex items-start gap-3">
                  <span className="text-2xl mt-0.5">🎯</span>
                  <div>
                    <p className="font-semibold text-gray-800">{obj.titulo}</p>
                    <p className="text-sm text-gray-600 mt-1">{obj.descricao}</p>
                    {obj.indicadorPrincipal && (
                      <p className="text-xs text-brand-600 mt-2 font-medium">
                        Indicador principal: {obj.indicadorPrincipal}
                      </p>
                    )}
                    <div className="flex gap-1 mt-2">
                      {obj.ods?.map((o: number) => (
                        <span key={o} className="px-1.5 py-0.5 bg-green-50 text-green-700 text-xs rounded font-medium">
                          ODS {o}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ── 2. KRs — Metas e Indicadores ──────────────────────────────── */}
      {metas && metas.length > 0 && (
        <section>
          <h2 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
            <span className="w-7 h-7 rounded-full bg-brand-600 text-white text-xs flex items-center justify-center font-bold">2</span>
            Metas e Indicadores de Impacto
          </h2>
          <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white">
            <table className="w-full text-sm">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase">Meta</th>
                  <th className="text-right px-4 py-3 text-xs font-semibold text-gray-500 uppercase">Alvo</th>
                  <th className="text-right px-4 py-3 text-xs font-semibold text-gray-500 uppercase">Realizado</th>
                  <th className="text-right px-4 py-3 text-xs font-semibold text-gray-500 uppercase">Progresso</th>
                  <th className="px-4 py-3 text-xs font-semibold text-gray-500 uppercase">Prazo</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {metas.map((meta: any) => {
                  const p = pct(meta.realizado, meta.alvo);
                  const barColor = meta.status === 'concluido'
                    ? 'bg-green-500' : p >= 70 ? 'bg-blue-500' : 'bg-yellow-400';
                  return (
                    <tr key={meta.id} className="hover:bg-gray-50">
                      <td className="px-4 py-3">
                        <p className="font-medium text-gray-800">{meta.descricao}</p>
                        <p className="text-xs text-gray-400">{meta.indicador}</p>
                      </td>
                      <td className="px-4 py-3 text-right font-medium text-gray-700">
                        {meta.alvo.toLocaleString('pt-BR')} {meta.unidade}
                      </td>
                      <td className="px-4 py-3 text-right font-medium text-gray-700">
                        {meta.realizado.toLocaleString('pt-BR')} {meta.unidade}
                      </td>
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-2 justify-end">
                          <div className="w-20 h-2 bg-gray-100 rounded-full overflow-hidden">
                            <div className={`h-2 ${barColor} rounded-full`} style={{ width: `${p}%` }} />
                          </div>
                          <span className="text-xs text-gray-600 w-8 text-right">{p}%</span>
                        </div>
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-500">{meta.prazo}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </section>
      )}

      {/* ── 3. Orçamento ──────────────────────────────────────────────── */}
      {orcamento && (
        <section>
          <h2 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
            <span className="w-7 h-7 rounded-full bg-brand-600 text-white text-xs flex items-center justify-center font-bold">3</span>
            Orçamento do Projeto
          </h2>
          <div className="rounded-xl border border-gray-200 bg-white overflow-hidden">
            <div className="p-4 border-b border-gray-100 flex items-center justify-between">
              <p className="text-sm text-gray-500">Orçamento total aprovado</p>
              <p className="text-xl font-bold text-gray-900">{fmt(orcamento.total)}</p>
            </div>
            {orcamento.rubricas && orcamento.rubricas.length > 0 && (
              <div className="p-4 space-y-3">
                {/* Barra de rubricas */}
                <div className="flex h-4 rounded-full overflow-hidden gap-0.5">
                  {orcamento.rubricas.map((r: any) => (
                    <div
                      key={r.nome}
                      title={`${r.nome}: ${r.percentual}%`}
                      style={{ width: `${r.percentual}%`, backgroundColor: r.cor }}
                    />
                  ))}
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mt-3">
                  {orcamento.rubricas.map((r: any) => (
                    <div key={r.nome} className="flex items-center gap-2 text-sm">
                      <span
                        className="w-3 h-3 rounded-full shrink-0"
                        style={{ backgroundColor: r.cor }}
                      />
                      <span className="text-gray-600">{r.nome}</span>
                      <span className="ml-auto font-medium text-gray-700">{r.percentual}%</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      )}

      {/* ── 4. Modalidade de Captação Recomendada ─────────────────────── */}
      <section>
        <h2 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
          <span className="w-7 h-7 rounded-full bg-brand-600 text-white text-xs flex items-center justify-center font-bold">4</span>
          Modalidade de Captação Recomendada
        </h2>
        <div className="rounded-xl border border-purple-200 bg-purple-50 p-5 space-y-3">
          <div className="flex items-start gap-3">
            <span className="text-3xl">{mecanismo?.icone ?? '📋'}</span>
            <div>
              <p className="font-semibold text-gray-800 text-lg">{mecanismo?.nome}</p>
              <p className="text-xs text-purple-700 font-medium">{mecanismo?.lei}</p>
              <p className="text-sm text-gray-600 mt-1">{mecanismo?.descricao}</p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm">
            <div className="bg-white rounded-lg p-3 border border-purple-100">
              <p className="text-xs text-gray-400 mb-1">Dedução</p>
              <p className="font-semibold text-gray-800">{mecanismo?.deducaoLabel ?? '—'}</p>
            </div>
            <div className="bg-white rounded-lg p-3 border border-purple-100">
              <p className="text-xs text-gray-400 mb-1">Órgão aprovador</p>
              <p className="font-semibold text-gray-800">{mecanismo?.orgaoAprovador ?? '—'}</p>
            </div>
            <div className="bg-white rounded-lg p-3 border border-purple-100">
              <p className="text-xs text-gray-400 mb-1">Prazo de aprovação</p>
              <p className="font-semibold text-gray-800">{mecanismo?.prazoAprovacao ?? '—'}</p>
            </div>
          </div>
          {mecanismo?.eligibilidade && (
            <div className="flex flex-wrap gap-2 mt-1">
              {mecanismo.eligibilidade.lucroReal && (
                <span className="px-2 py-0.5 bg-green-100 text-green-800 text-xs rounded-full">✓ Lucro Real</span>
              )}
              {mecanismo.eligibilidade.lucroPresumido && (
                <span className="px-2 py-0.5 bg-green-100 text-green-800 text-xs rounded-full">✓ Lucro Presumido</span>
              )}
              {mecanismo.eligibilidade.simplesNacional && (
                <span className="px-2 py-0.5 bg-green-100 text-green-800 text-xs rounded-full">✓ Simples Nacional</span>
              )}
            </div>
          )}
        </div>
      </section>

      {/* ── 5. Contrapartidas para o Patrocinador ─────────────────────── */}
      <section>
        <h2 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
          <span className="w-7 h-7 rounded-full bg-brand-600 text-white text-xs flex items-center justify-center font-bold">5</span>
          O Que o Patrocinador Recebe
        </h2>
        <div className="rounded-xl border border-gray-200 bg-white p-5">
          <ul className="space-y-2">
            {contrapartidas.map((c, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                <span className="text-green-500 mt-0.5 shrink-0">✓</span>
                {c}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── 6. Próximos Passos ────────────────────────────────────────── */}
      <section>
        <h2 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
          <span className="w-7 h-7 rounded-full bg-brand-600 text-white text-xs flex items-center justify-center font-bold">6</span>
          Próximos Passos
        </h2>
        <div className="rounded-xl border border-gray-200 bg-white overflow-hidden">
          {(mecanismo?.etapas ?? [
            { titulo: 'Due Diligence', desc: 'Verificar documentação e elegibilidade do projeto' },
            { titulo: 'Formalização', desc: 'Assinatura do Termo de Parceria / Patrocínio' },
            { titulo: 'Transferência', desc: 'Primeiro aporte conforme marco contratual' },
            { titulo: 'Acompanhamento', desc: 'Relatórios periódicos via plataforma ONGanizator' },
          ]).map((etapa: any, i: number, arr: any[]) => (
            <div key={i} className={`flex items-start gap-4 p-4 ${i < arr.length - 1 ? 'border-b border-gray-100' : ''}`}>
              <div className="w-7 h-7 rounded-full bg-brand-100 text-brand-700 text-sm font-bold flex items-center justify-center shrink-0">
                {i + 1}
              </div>
              <div>
                <p className="font-medium text-gray-800 text-sm">{etapa.titulo}</p>
                <p className="text-xs text-gray-500 mt-0.5">{etapa.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Rodapé da proposta ────────────────────────────────────────── */}
      <div className="rounded-xl bg-gray-50 border border-gray-200 p-5 text-sm text-gray-600 space-y-1">
        <p className="font-semibold text-gray-800">Contato para parceria</p>
        {org && (
          <>
            <p>{org.razaoSocial} · CNPJ {org.cnpj}</p>
            <p>📍 {org.cidade}, {org.estado} · Área: {org.areaAtuacao}</p>
          </>
        )}
        <p className="text-xs text-gray-400 pt-2 italic">
          Proposta gerada via ONGanizator em {new Date().toLocaleDateString('pt-BR', { day: '2-digit', month: 'long', year: 'numeric' })}.
          As informações são verificáveis na plataforma e nos relatórios públicos do projeto.
        </p>
      </div>

      {/* ── Ações ─────────────────────────────────────────────────────── */}
      <div className="flex gap-3 print:hidden">
        <Link
          href={`/projetos/${id}`}
          className="px-4 py-2 border border-gray-300 text-gray-700 text-sm font-medium rounded-lg hover:bg-gray-50 transition-colors"
        >
          ← Voltar ao projeto
        </Link>
        <Link
          href={`/projetos/${id}/relatorio/anual`}
          className="px-4 py-2 border border-brand-300 text-brand-700 text-sm font-medium rounded-lg hover:bg-brand-50 transition-colors"
        >
          📋 Relatório Anual
        </Link>
      </div>
    </div>
  );
}
