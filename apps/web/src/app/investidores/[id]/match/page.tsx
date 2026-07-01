import { INVESTORS, ORGS, PROJECTS } from '@/lib/mockData';
import Link from 'next/link';

export function generateStaticParams() {
  return INVESTORS.map((i) => ({ id: i.id }));
}

// ── Motor de compatibilidade ──────────────────────────────────────────────────
function calcScore(inv: any, projeto: any): { total: number; breakdown: Record<string, { score: number; max: number; label: string }> } {
  const org = ORGS.find((o) => o.id === projeto.organizacaoId);

  // ODS overlap (40 pts)
  const odsMatch = projeto.ods.filter((o: number) => inv.ods.includes(o)).length;
  const odsMax = Math.max(projeto.ods.length, inv.ods.length);
  const odsScore = Math.round((odsMatch / odsMax) * 40);

  // Geografia (20 pts)
  const geoScore = inv.regioes.includes(projeto.estado) ? 20 : inv.regioes.length === 0 ? 10 : 0;

  // Ticket (20 pts)
  let ticketScore = 0;
  const gap = projeto.valorMeta - inv.ticketMin;
  const range = inv.ticketMax - inv.ticketMin;
  if (projeto.valorMeta >= inv.ticketMin && projeto.valorMeta <= inv.ticketMax) {
    // ideal quando meta está no centro do range do investidor
    const pctRange = range > 0 ? 1 - Math.abs((gap - range / 2) / (range / 2)) : 1;
    ticketScore = Math.round(pctRange * 20);
  } else if (projeto.valorMeta > inv.ticketMax) {
    // acima do ticket — pode co-investir
    ticketScore = 5;
  }

  // Maturidade da ONG (10 pts)
  const orgScore = org ? Math.round((org.score / 100) * 10) : 0;

  // Tração do projeto (10 pts)
  const tracScore = Math.round((projeto.valorCaptado / projeto.valorMeta) * 10);

  const total = odsScore + geoScore + ticketScore + orgScore + tracScore;
  return {
    total,
    breakdown: {
      ods: { score: odsScore, max: 40, label: `${odsMatch}/${odsMax} ODS em comum` },
      geografia: { score: geoScore, max: 20, label: inv.regioes.includes(projeto.estado) ? `${projeto.estado} dentro das regiões alvo` : 'Fora das regiões alvo' },
      ticket: { score: ticketScore, max: 20, label: `Ticket do projeto dentro do range` },
      maturidade: { score: orgScore, max: 10, label: `Score ONG: ${org?.score ?? 0}/100` },
      tracao: { score: tracScore, max: 10, label: `${Math.round((projeto.valorCaptado / projeto.valorMeta) * 100)}% captado` },
    },
  };
}

function MatchBar({ score, max }: { score: number; max: number }) {
  const p = Math.round((score / max) * 100);
  const color = p >= 75 ? 'bg-green-500' : p >= 40 ? 'bg-yellow-400' : 'bg-red-400';
  return (
    <div className="flex items-center gap-2">
      <div className="flex-1 h-1.5 bg-gray-100 rounded-full overflow-hidden">
        <div className={`h-full rounded-full ${color}`} style={{ width: `${p}%` }} />
      </div>
      <span className="text-xs text-gray-500 w-12 text-right">{score}/{max}</span>
    </div>
  );
}

function ScoreRing({ score }: { score: number }) {
  const color = score >= 75 ? 'text-green-600' : score >= 50 ? 'text-yellow-600' : 'text-red-500';
  const bg = score >= 75 ? 'bg-green-50 border-green-200' : score >= 50 ? 'bg-yellow-50 border-yellow-200' : 'bg-red-50 border-red-200';
  const label = score >= 80 ? 'Excelente' : score >= 65 ? 'Bom match' : score >= 45 ? 'Match moderado' : 'Match fraco';
  return (
    <div className={`flex flex-col items-center justify-center w-20 h-20 rounded-full border-2 ${bg} shrink-0`}>
      <span className={`text-xl font-black ${color}`}>{score}</span>
      <span className={`text-[10px] font-semibold ${color} leading-tight text-center px-1`}>{label}</span>
    </div>
  );
}

function fmt(n: number) {
  return n >= 1_000_000 ? `R$ ${(n / 1_000_000).toFixed(1)}M` : `R$ ${(n / 1_000).toFixed(0)}K`;
}

export default async function MatchPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const inv = INVESTORS.find((i) => i.id === id);
  if (!inv) return <div className="p-8 text-gray-500">Investidor não encontrado. <Link href="/investidores" className="text-brand-600 underline">Voltar</Link></div>;

  // calcular score para todos os projetos ativos
  const projetosComScore = PROJECTS
    .filter((p) => p.status === 'ativo' || p.status === 'em_avaliacao')
    .map((p) => ({ projeto: p, org: ORGS.find((o) => o.id === p.organizacaoId), ...calcScore(inv, p) }))
    .sort((a, b) => b.total - a.total);

  const excelentes = projetosComScore.filter((m) => m.total >= 70);
  const bons = projetosComScore.filter((m) => m.total >= 45 && m.total < 70);
  const fracos = projetosComScore.filter((m) => m.total < 45);

  // match reverso: quais outros investidores têm interesse semelhante?
  const investidoresSimilares = INVESTORS
    .filter((i) => i.id !== inv.id)
    .map((i) => ({ inv: i, odsComum: i.ods.filter((o: number) => inv.ods.includes(o)).length }))
    .filter((x) => x.odsComum >= 2)
    .sort((a, b) => b.odsComum - a.odsComum);

  const tipoLabel: Record<string, string> = { pessoa_fisica: 'Pessoa Física', empresa: 'Empresa', instituto: 'Instituto', fundacao: 'Fundação' };

  return (
    <div className="p-8 space-y-8 max-w-5xl mx-auto">
      {/* breadcrumb */}
      <div>
        <Link href="/investidores" className="text-xs text-gray-400 hover:text-brand-600">← Investidores</Link>
      </div>

      {/* perfil investidor */}
      <div className="card p-6">
        <div className="flex items-start gap-5">
          <div className="w-14 h-14 rounded-2xl bg-blue-100 text-blue-700 flex items-center justify-center font-black text-xl shrink-0">
            {inv.nome.charAt(0)}
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 flex-wrap">
              <h1 className="text-xl font-bold text-gray-900">{inv.nome}</h1>
              <span className="text-xs px-2 py-0.5 bg-blue-100 text-blue-700 rounded-full">{tipoLabel[inv.tipo]}</span>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
              <div><p className="text-xs text-gray-400">Ticket mínimo</p><p className="font-semibold text-gray-800">{fmt(inv.ticketMin)}</p></div>
              <div><p className="text-xs text-gray-400">Ticket máximo</p><p className="font-semibold text-gray-800">{fmt(inv.ticketMax)}</p></div>
              <div>
                <p className="text-xs text-gray-400 mb-1">ODS de interesse</p>
                <div className="flex flex-wrap gap-1">{inv.ods.map((o: number) => <span key={o} className="text-xs px-1.5 py-0.5 bg-green-50 text-green-700 rounded font-medium">ODS {o}</span>)}</div>
              </div>
              <div>
                <p className="text-xs text-gray-400 mb-1">Regiões alvo</p>
                <div className="flex flex-wrap gap-1">{inv.regioes.map((r: string) => <span key={r} className="text-xs px-1.5 py-0.5 bg-gray-100 text-gray-600 rounded">{r}</span>)}</div>
              </div>
            </div>
          </div>
          <Link href={`/investidores/${id}/editar`}
            className="shrink-0 px-3 py-1.5 border border-gray-200 text-xs text-gray-600 rounded-lg hover:bg-gray-50">
            ✏️ Editar
          </Link>
        </div>
      </div>

      {/* resumo matches */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="card p-4 text-center border-green-200 bg-green-50">
          <p className="text-3xl font-black text-green-600">{excelentes.length}</p>
          <p className="text-xs text-green-700 font-semibold mt-1">Excelentes matches</p>
          <p className="text-xs text-green-600">Score ≥ 70</p>
        </div>
        <div className="card p-4 text-center border-yellow-200 bg-yellow-50">
          <p className="text-3xl font-black text-yellow-600">{bons.length}</p>
          <p className="text-xs text-yellow-700 font-semibold mt-1">Bons matches</p>
          <p className="text-xs text-yellow-600">Score 45–69</p>
        </div>
        <div className="card p-4 text-center border-gray-200 bg-gray-50">
          <p className="text-3xl font-black text-gray-500">{fracos.length}</p>
          <p className="text-xs text-gray-600 font-semibold mt-1">Match fraco</p>
          <p className="text-xs text-gray-400">Score {"<"} 45</p>
        </div>
      </div>

      {/* como o score é calculado */}
      <div className="card p-5 bg-blue-50 border-blue-200">
        <h3 className="text-sm font-bold text-blue-900 mb-3">🧠 Como o Score de Compatibilidade é calculado</h3>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3 text-xs text-center">
          {[
            { label: 'Alinhamento ODS', pts: '40 pts', desc: 'ODS em comum entre investidor e projeto' },
            { label: 'Geografia', pts: '20 pts', desc: 'Projeto na região alvo do investidor' },
            { label: 'Ticket', pts: '20 pts', desc: 'Meta do projeto dentro do range do investidor' },
            { label: 'Maturidade ONG', pts: '10 pts', desc: 'Score de governança da organização' },
            { label: 'Tração', pts: '10 pts', desc: '% do projeto já captado (prova de conceito)' },
          ].map((c) => (
            <div key={c.label} className="bg-white rounded-lg p-3 border border-blue-100">
              <p className="font-bold text-blue-800">{c.pts}</p>
              <p className="font-semibold text-gray-800 mt-1">{c.label}</p>
              <p className="text-gray-400 mt-0.5 leading-tight">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* projetos por tier */}
      {[
        { titulo: '🟢 Excelentes Matches', lista: excelentes, empty: 'Nenhum projeto atingiu score ≥ 70 para este perfil.' },
        { titulo: '🟡 Bons Matches', lista: bons, empty: 'Nenhum projeto nesta faixa.' },
        { titulo: '🔴 Match Fraco — oportunidades de ajuste', lista: fracos, empty: null },
      ].map(({ titulo, lista, empty }) => lista.length > 0 ? (
        <section key={titulo}>
          <h2 className="text-lg font-semibold text-gray-900 mb-4">{titulo}</h2>
          <div className="space-y-4">
            {lista.map(({ projeto, org, total, breakdown }) => (
              <div key={projeto.id} className="card p-5">
                <div className="flex items-start gap-4">
                  <ScoreRing score={total} />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <Link href={`/projetos/${projeto.id}`} className="font-semibold text-gray-900 hover:text-brand-600">
                          {projeto.titulo}
                        </Link>
                        <p className="text-xs text-gray-400 mt-0.5">{org?.nomeFantasia} · {projeto.cidade}, {projeto.estado}</p>
                      </div>
                      <div className="flex gap-2 shrink-0">
                        {projeto.ods.map((o: number) => <span key={o} className="text-xs px-1.5 py-0.5 bg-green-50 text-green-700 rounded font-medium">ODS {o}</span>)}
                      </div>
                    </div>

                    <p className="text-sm text-gray-500 mt-2 mb-3">{projeto.descricao}</p>

                    {/* breakdown score */}
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-2">
                      {Object.entries(breakdown).map(([key, val]) => (
                        <div key={key} className="space-y-0.5">
                          <div className="flex justify-between text-xs">
                            <span className="text-gray-500 capitalize">{key}</span>
                          </div>
                          <MatchBar score={val.score} max={val.max} />
                          <p className="text-[10px] text-gray-400 leading-tight">{val.label}</p>
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center gap-6 mt-3 pt-3 border-t border-gray-100 text-xs text-gray-500">
                      <span>💰 Meta: <strong className="text-gray-800">{fmt(projeto.valorMeta)}</strong></span>
                      <span>📊 Captado: <strong className="text-brand-600">{fmt(projeto.valorCaptado)}</strong></span>
                      <span>👥 {projeto.beneficiarios.toLocaleString('pt-BR')} beneficiários</span>
                      <span>📅 Até {new Date(projeto.dataFim).toLocaleDateString('pt-BR')}</span>
                    </div>

                    <div className="flex gap-2 mt-3">
                      <button className="px-4 py-1.5 bg-brand-600 text-white text-xs font-semibold rounded-lg hover:bg-brand-700 transition-colors">
                        Demonstrar interesse
                      </button>
                      <Link href={`/projetos/${projeto.id}`}
                        className="px-4 py-1.5 border border-gray-200 text-xs text-gray-600 rounded-lg hover:bg-gray-50">
                        Ver projeto completo
                      </Link>
                      <button className="px-4 py-1.5 border border-blue-200 text-xs text-blue-600 rounded-lg hover:bg-blue-50">
                        Solicitar relatório risco
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      ) : empty ? (
        <section key={titulo}>
          <h2 className="text-lg font-semibold text-gray-900 mb-2">{titulo}</h2>
          <div className="card p-6 text-center text-gray-400 text-sm">{empty}</div>
        </section>
      ) : null)}

      {/* co-investidores */}
      {investidoresSimilares.length > 0 && (
        <section>
          <h2 className="text-lg font-semibold text-gray-900 mb-4">🤝 Investidores com Perfil Semelhante (co-investimento)</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {investidoresSimilares.map(({ inv: similar, odsComum }) => (
              <div key={similar.id} className="card p-4">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center font-bold shrink-0">
                    {similar.nome.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-sm text-gray-900">{similar.nome}</p>
                    <p className="text-xs text-gray-400">{tipoLabel[similar.tipo]}</p>
                  </div>
                </div>
                <p className="text-xs text-green-700 bg-green-50 rounded px-2 py-1">
                  {odsComum} ODS em comum · {similar.regioes.filter((r: string) => inv.regioes.includes(r)).length} regiões sobrepostas
                </p>
                <Link href={`/investidores/${similar.id}/match`}
                  className="mt-3 flex items-center justify-center w-full py-1.5 border border-gray-200 text-xs text-gray-600 rounded-lg hover:bg-gray-50">
                  Ver matches →
                </Link>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
