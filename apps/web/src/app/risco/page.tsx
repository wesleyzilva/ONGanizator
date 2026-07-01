import { RISK_REPORTS } from '@/lib/mockData';
import Link from 'next/link';

const NIVEL_COLOR: Record<string, string> = {
  green: 'bg-green-100 text-green-800 border-green-300',
  yellow: 'bg-yellow-100 text-yellow-800 border-yellow-300',
  red: 'bg-red-100 text-red-800 border-red-300',
};
const NIVEL_BG: Record<string, string> = {
  green: 'from-green-50 to-emerald-50 border-green-200',
  yellow: 'from-yellow-50 to-amber-50 border-yellow-200',
  red: 'from-red-50 to-rose-50 border-red-200',
};

function ScoreDim({ label, score, obs }: { label: string; score: number; obs: string }) {
  const color = score >= 80 ? 'bg-green-500' : score >= 60 ? 'bg-yellow-400' : 'bg-red-400';
  const text = score >= 80 ? 'text-green-700' : score >= 60 ? 'text-yellow-700' : 'text-red-600';
  return (
    <div className="space-y-1">
      <div className="flex justify-between text-sm">
        <span className="text-gray-700">{label}</span>
        <span className={`font-bold ${text}`}>{score}/100</span>
      </div>
      <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
        <div className={`h-full rounded-full ${color}`} style={{ width: `${score}%` }} />
      </div>
      <p className="text-xs text-gray-400">{obs}</p>
    </div>
  );
}

export default function RiscoPage() {
  return (
    <div className="p-8 space-y-8 max-w-5xl mx-auto">
      {/* header */}
      <div className="flex items-start justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">⚠️ Risco Reputacional</h1>
          <p className="text-sm text-gray-500 mt-1">
            Due diligence completa antes de firmar parceria com uma ONG.
            Relatório profissional para C-suite, jurídico e compliance ESG.
          </p>
        </div>
        <button className="px-4 py-2 bg-brand-600 text-white text-sm font-medium rounded-lg hover:bg-brand-700 transition-colors">
          Solicitar novo relatório
        </button>
      </div>

      {/* o que é */}
      <div className="card p-6 bg-gradient-to-r from-slate-50 to-blue-50 border-slate-200">
        <h2 className="text-sm font-bold text-slate-800 mb-4">🔍 O que o relatório analisa</h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {[
            { icon: '🏛️', label: 'Governança', desc: 'Estatuto, conselho, atas, transparência' },
            { icon: '💰', label: 'Financeiro', desc: 'Auditoria, certidões, saúde fiscal' },
            { icon: '✅', label: 'Compliance', desc: 'CNPJ, LGPD, certidões, trabalhista' },
            { icon: '📰', label: 'Mídia & Reputação', desc: 'Menções em mídia, redes sociais, alertas' },
            { icon: '📦', label: 'Entrega', desc: 'Histórico de projetos, marcos cumpridos' },
          ].map((i) => (
            <div key={i.label} className="text-center">
              <div className="text-2xl mb-1">{i.icon}</div>
              <p className="text-xs font-semibold text-gray-800">{i.label}</p>
              <p className="text-xs text-gray-400 mt-0.5 leading-tight">{i.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-5 flex flex-wrap gap-4 text-xs text-slate-700">
          <span>💼 Relatório básico: <strong>R$ 2.900</strong></span>
          <span>📋 Relatório completo: <strong>R$ 7.900</strong></span>
          <span>🔐 Relatório enterprise + entrevistas: <strong>R$ 14.900</strong></span>
          <span>⚡ Entrega em 3 dias úteis</span>
        </div>
      </div>

      {/* relatórios demo */}
      <section>
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Relatórios recentes</h2>
        <div className="space-y-6">
          {RISK_REPORTS.map((r) => (
            <div key={r.id} className={`card p-6 bg-gradient-to-br ${NIVEL_BG[r.corNivel]}`}>
              {/* header relatório */}
              <div className="flex items-start justify-between gap-4 mb-5">
                <div>
                  <div className="flex items-center gap-3">
                    <h3 className="text-lg font-bold text-gray-900">{r.organizacaoNome}</h3>
                    <span className={`text-xs px-2 py-1 rounded-full border font-bold ${NIVEL_COLOR[r.corNivel]}`}>
                      {r.nivel}
                    </span>
                  </div>
                  <p className="text-xs text-gray-500 mt-0.5">CNPJ {r.cnpj} · Gerado em {new Date(r.geradoEm).toLocaleDateString('pt-BR')}</p>
                </div>
                <div className="text-center shrink-0">
                  <div className={`w-16 h-16 rounded-full flex flex-col items-center justify-center border-2 font-black ${NIVEL_COLOR[r.corNivel]}`}>
                    <span className="text-2xl">{r.scoreFinal}</span>
                    <span className="text-[10px]">/100</span>
                  </div>
                </div>
              </div>

              {/* dimensões */}
              <div className="space-y-3 mb-5">
                <ScoreDim label="🏛️ Governança" score={r.dimensoes.governance.score} obs={r.dimensoes.governance.observacao} />
                <ScoreDim label="💰 Financeiro" score={r.dimensoes.financeiro.score} obs={r.dimensoes.financeiro.observacao} />
                <ScoreDim label="✅ Compliance" score={r.dimensoes.compliance.score} obs={r.dimensoes.compliance.observacao} />
                <ScoreDim label="📰 Mídia e Reputação" score={r.dimensoes.midiaReputacao.score} obs={r.dimensoes.midiaReputacao.observacao} />
                <ScoreDim label="📦 Entrega de Projetos" score={r.dimensoes.entregaProjetos.score} obs={r.dimensoes.entregaProjetos.observacao} />
              </div>

              {/* red flags */}
              {r.redFlags.length > 0 && (
                <div className="mb-4 space-y-2">
                  <p className="text-xs font-bold text-red-700 uppercase tracking-wide">⚠️ Alertas identificados</p>
                  {r.redFlags.map((f: any, i: number) => (
                    <div key={i} className={`flex items-start gap-2 px-3 py-2 rounded-lg text-xs ${f.tipo === 'critico' ? 'bg-red-100 text-red-800' : 'bg-yellow-100 text-yellow-800'}`}>
                      <span>{f.tipo === 'critico' ? '🔴' : '🟡'}</span>
                      {f.descricao}
                    </div>
                  ))}
                </div>
              )}

              {/* menções positivas */}
              {r.mencoesPositivas.length > 0 && (
                <div className="mb-4 space-y-1">
                  <p className="text-xs font-bold text-green-700 uppercase tracking-wide">✅ Menções positivas</p>
                  {r.mencoesPositivas.map((m: string, i: number) => (
                    <p key={i} className="text-xs text-green-700 flex items-start gap-1">
                      <span>•</span> {m}
                    </p>
                  ))}
                </div>
              )}

              {/* recomendação */}
              <div className={`rounded-xl p-4 border ${NIVEL_COLOR[r.corNivel]}`}>
                <p className="text-xs font-bold uppercase tracking-wide mb-1">Recomendação</p>
                <p className="text-sm">{r.recomendacao}</p>
              </div>

              <div className="flex gap-2 mt-4">
                <button className="px-4 py-2 bg-white border border-gray-300 text-xs text-gray-700 font-medium rounded-lg hover:bg-gray-50">
                  📄 Baixar PDF completo
                </button>
                <Link href={`/organizacoes/${r.organizacaoId}`}
                  className="px-4 py-2 border border-gray-200 text-xs text-brand-600 rounded-lg hover:bg-brand-50">
                  Ver perfil ONG
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <div className="card p-8 text-center bg-gradient-to-br from-slate-800 to-slate-900 text-white">
        <h2 className="text-xl font-bold mb-2">Precisa validar uma parceria?</h2>
        <p className="text-sm text-slate-300 mb-6 max-w-lg mx-auto">
          Antes de aportar recursos em uma ONG, solicite o relatório de due diligence.
          Entregamos em 3 dias úteis. Disponível para PJ com nota fiscal.
        </p>
        <div className="flex gap-3 justify-center">
          <button className="px-6 py-3 bg-white text-slate-900 font-semibold text-sm rounded-lg hover:bg-slate-100 transition-colors">
            Solicitar relatório — R$ 2.900
          </button>
          <button className="px-6 py-3 border border-white/30 text-white text-sm rounded-lg hover:bg-white/10">
            Falar com especialista
          </button>
        </div>
      </div>
    </div>
  );
}
 
