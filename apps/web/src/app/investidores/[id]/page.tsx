import { INVESTORS, PROJECTS, ORGS } from '@/lib/mockData';
import Link from 'next/link';

export function generateStaticParams() {
  return INVESTORS.map((i) => ({ id: i.id }));
}

const TIPO_LABEL: Record<string, string> = {
  fundacao: 'Fundação',
  instituto: 'Instituto',
  empresa: 'Empresa',
  pessoa_fisica: 'Pessoa Física',
};

const ODS_NOME: Record<number, string> = {
  1: 'Erradicação da Pobreza', 2: 'Fome Zero', 3: 'Saúde e Bem-Estar',
  4: 'Educação de Qualidade', 5: 'Igualdade de Gênero', 6: 'Água Potável',
  7: 'Energia Limpa', 8: 'Trabalho Decente', 9: 'Indústria e Inovação',
  10: 'Redução das Desigualdades', 11: 'Cidades Sustentáveis', 12: 'Consumo Responsável',
  13: 'Ação Climática', 14: 'Vida na Água', 15: 'Vida Terrestre',
  16: 'Paz e Justiça', 17: 'Parcerias',
};

function fmt(n: number) {
  return n >= 1_000_000 ? `R$ ${(n / 1_000_000).toFixed(1)}M` : `R$ ${(n / 1_000).toFixed(0)}K`;
}

function odsMatch(inv: number[], proj: number[]) {
  return proj.filter((o) => inv.includes(o)).length;
}

export default async function InvestidorDetalhePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const inv = INVESTORS.find((i) => i.id === id);

  if (!inv) {
    return (
      <div className="p-8 text-center text-gray-500">
        Financiador não encontrado.{' '}
        <Link href="/investidores" className="text-brand-600 underline">Voltar</Link>
      </div>
    );
  }

  // Projetos com match de ODS
  const projComMatch = PROJECTS
    .filter((p) => p.status !== 'rascunho')
    .map((p) => ({ projeto: p, match: odsMatch(inv.ods, p.ods) }))
    .filter((x) => x.match > 0)
    .sort((a, b) => b.match - a.match);

  return (
    <div className="p-8 space-y-8 max-w-4xl mx-auto">
      {/* Header */}
      <div className="flex items-start justify-between gap-4">
        <div>
          <Link href="/investidores" className="text-xs text-gray-400 hover:text-brand-600">
            ← Financiadores
          </Link>
          <h1 className="text-2xl font-bold text-gray-900 mt-1">{inv.nome}</h1>
          <p className="text-sm text-gray-500 mt-1">{TIPO_LABEL[inv.tipo] ?? inv.tipo}</p>
        </div>
        <div className="flex gap-2">
          <Link
            href={`/investidores/${id}/match`}
            className="px-4 py-2 bg-brand-600 text-white text-sm font-semibold rounded-lg hover:bg-brand-700"
          >
            🎯 Ver Match de Projetos
          </Link>
          <Link
            href={`/investidores/${id}/editar`}
            className="px-4 py-2 border border-gray-300 text-gray-600 text-sm rounded-lg hover:bg-gray-50"
          >
            ✏️ Editar
          </Link>
        </div>
      </div>

      {/* Perfil */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="card p-5 space-y-4">
          <h2 className="font-bold text-gray-900">📋 Perfil do Financiador</h2>
          <div className="space-y-3 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-500">Tipo</span>
              <span className="font-medium text-gray-900">{TIPO_LABEL[inv.tipo] ?? inv.tipo}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Status</span>
              <span className={`px-2 py-0.5 rounded-full text-xs font-semibold ${inv.ativo ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-500'}`}>
                {inv.ativo ? 'Ativo' : 'Inativo'}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Ticket mínimo</span>
              <span className="font-semibold text-gray-900">{fmt(inv.ticketMin)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Ticket máximo</span>
              <span className="font-semibold text-brand-600">{fmt(inv.ticketMax)}</span>
            </div>
            <div>
              <span className="text-gray-500 block mb-2">Regiões de atuação</span>
              <div className="flex flex-wrap gap-1">
                {inv.regioes.map((r) => (
                  <span key={r} className="px-2 py-0.5 bg-blue-50 text-blue-700 rounded text-xs font-medium">{r}</span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="card p-5 space-y-4">
          <h2 className="font-bold text-gray-900">🌱 ODS de Interesse</h2>
          <div className="space-y-2">
            {inv.ods.map((o) => (
              <div key={o} className="flex items-center gap-2">
                <span className="w-7 h-7 rounded-full bg-green-100 text-green-700 text-xs font-bold flex items-center justify-center shrink-0">{o}</span>
                <span className="text-sm text-gray-700">{ODS_NOME[o] ?? `ODS ${o}`}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Projetos com match */}
      <div className="card p-5 space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="font-bold text-gray-900">🎯 Projetos com compatibilidade de ODS</h2>
          <Link href={`/investidores/${id}/match`} className="text-xs text-brand-600 hover:underline">
            Ver match completo →
          </Link>
        </div>
        {projComMatch.length === 0 ? (
          <p className="text-sm text-gray-400">Nenhum projeto com ODS compatíveis no momento.</p>
        ) : (
          <div className="divide-y divide-gray-100">
            {projComMatch.slice(0, 5).map(({ projeto, match }) => (
              <div key={projeto.id} className="py-3 flex items-center justify-between gap-4">
                <div>
                  <Link href={`/projetos/${projeto.id}`} className="text-sm font-medium text-gray-900 hover:text-brand-600">
                    {projeto.titulo}
                  </Link>
                  <p className="text-xs text-gray-400">{projeto.organizacaoNome} · {projeto.cidade}, {projeto.estado}</p>
                </div>
                <div className="flex items-center gap-3 shrink-0">
                  <span className="text-xs text-gray-500">{match} ODS em comum</span>
                  <span className={`px-2 py-0.5 rounded-full text-xs font-semibold ${
                    match >= 3 ? 'bg-green-100 text-green-700' :
                    match === 2 ? 'bg-yellow-100 text-yellow-700' :
                    'bg-gray-100 text-gray-500'
                  }`}>
                    {match >= 3 ? '🔥 Alto' : match === 2 ? '⭐ Médio' : 'Baixo'}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* CTA */}
      <div className="rounded-2xl bg-gradient-to-r from-brand-600 to-brand-700 p-6 text-white flex items-center justify-between gap-6">
        <div>
          <p className="font-bold text-lg">Encontrou fit com esta organização?</p>
          <p className="text-sm text-brand-100 mt-1">Execute o motor de match para identificar os projetos com maior compatibilidade.</p>
        </div>
        <Link
          href={`/investidores/${id}/match`}
          className="shrink-0 px-5 py-2.5 bg-white text-brand-700 text-sm font-bold rounded-xl hover:bg-brand-50 transition-colors"
        >
          🎯 Rodar Match
        </Link>
      </div>
    </div>
  );
}
