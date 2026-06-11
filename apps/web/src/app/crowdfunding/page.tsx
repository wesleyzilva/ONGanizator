import { CAMPANHAS, getCrowdfundingStats } from '@/lib/mockData';
import Link from 'next/link';

const TIPO_BADGE: Record<string, string> = {
  vaquinha_corporativa: '🏢 Vaquinha Corporativa',
  crowdfunding_publico: '🌐 Crowdfunding Público',
};

const TIPO_COLOR: Record<string, string> = {
  vaquinha_corporativa: 'bg-blue-100 text-blue-800',
  crowdfunding_publico: 'bg-purple-100 text-purple-800',
};

function fmt(n: number) {
  return n >= 1_000_000 ? `R$ ${(n / 1_000_000).toFixed(1)}M` : `R$ ${(n / 1_000).toFixed(0)}K`;
}

function pct(a: number, b: number) {
  return Math.min(100, Math.round((a / b) * 100));
}

export default function CrowdfundingPage() {
  const stats = getCrowdfundingStats();
  const ativas = CAMPANHAS.filter((c) => c.status === 'ativa');
  const encerradas = CAMPANHAS.filter((c) => c.status === 'encerrada');

  return (
    <div className="p-8 space-y-8 max-w-5xl mx-auto">
      {/* header */}
      <div className="flex items-start justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Crowdfunding & Vaquinha Corporativa</h1>
          <p className="text-sm text-gray-500 mt-1">
            Campanhas públicas e vaquinhas corporativas para financiar projetos de impacto.
          </p>
        </div>
        <button className="px-4 py-2 bg-brand-600 text-white text-sm font-medium rounded-lg hover:bg-brand-700 transition-colors">
          + Nova Campanha
        </button>
      </div>

      {/* KPIs */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="card p-4 text-center">
          <p className="text-xs text-gray-500 mb-1">Campanhas ativas</p>
          <p className="text-2xl font-bold text-brand-600">{stats.campanhasAtivas}</p>
        </div>
        <div className="card p-4 text-center">
          <p className="text-xs text-gray-500 mb-1">Total arrecadado</p>
          <p className="text-2xl font-bold text-gray-900">{fmt(stats.totalArrecadado)}</p>
        </div>
        <div className="card p-4 text-center">
          <p className="text-xs text-gray-500 mb-1">Contribuições</p>
          <p className="text-2xl font-bold text-gray-900">{stats.totalContribuicoes.toLocaleString('pt-BR')}</p>
        </div>
        <div className="card p-4 text-center">
          <p className="text-xs text-gray-500 mb-1">Ticket médio</p>
          <p className="text-2xl font-bold text-gray-900">
            R$ {Math.round(stats.totalArrecadado / stats.totalContribuicoes).toLocaleString('pt-BR')}
          </p>
        </div>
      </div>

      {/* como funciona */}
      <div className="card p-6 bg-gradient-to-r from-brand-50 to-blue-50 border-brand-200">
        <h2 className="text-sm font-bold text-brand-800 mb-3">💡 Como funciona a Vaquinha Corporativa</h2>
        <div className="grid md:grid-cols-4 gap-4">
          {[
            { n: '1', t: 'Empresa cria', d: 'A empresa abre uma campanha e define a ONG beneficiada e a meta.' },
            { n: '2', t: 'Convida a equipe', d: 'Funcionários, parceiros e clientes recebem o link da vaquinha.' },
            { n: '3', t: 'Todos contribuem', d: 'Cada pessoa contribui o quanto quiser via PIX ou cartão.' },
            { n: '4', t: 'Relatório automático', d: 'A empresa recebe relatório de impacto para ESG com evidências.' },
          ].map((s) => (
            <div key={s.n} className="text-center">
              <div className="w-8 h-8 rounded-full bg-brand-600 text-white font-bold text-sm flex items-center justify-center mx-auto mb-2">{s.n}</div>
              <p className="text-xs font-semibold text-gray-800 mb-1">{s.t}</p>
              <p className="text-xs text-gray-500">{s.d}</p>
            </div>
          ))}
        </div>
        <div className="mt-4 flex items-center gap-4 text-xs text-brand-700">
          <span>✅ Taxa plataforma: 2% sobre cada doação</span>
          <span>✅ Relatório automático incluído</span>
          <span>✅ Notas fiscais para dedução fiscal</span>
        </div>
      </div>

      {/* campanhas ativas */}
      <section>
        <h2 className="text-lg font-semibold text-gray-900 mb-4">🔥 Campanhas Ativas</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {ativas.map((c) => {
            const p = pct(c.arrecadado, c.meta);
            return (
              <div key={c.id} className="card overflow-hidden hover:shadow-md transition-shadow">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={c.imagemUrl} alt={c.titulo} className="w-full h-36 object-cover" />
                <div className="p-5 space-y-3">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="font-semibold text-gray-900 leading-tight">{c.titulo}</h3>
                    <span className={`shrink-0 text-xs px-2 py-0.5 rounded-full font-medium ${TIPO_COLOR[c.tipo]}`}>
                      {TIPO_BADGE[c.tipo]}
                    </span>
                  </div>
                  <p className="text-xs text-gray-500">{c.descricao}</p>
                  {c.empresaPatrocinadora && (
                    <p className="text-xs text-blue-600">🏢 Patrocinada por: <strong>{c.empresaPatrocinadora}</strong></p>
                  )}
                  <div>
                    <div className="flex justify-between text-xs text-gray-500 mb-1">
                      <span><strong className="text-brand-600 text-sm">{fmt(c.arrecadado)}</strong> de {fmt(c.meta)}</span>
                      <span>{p}% atingido</span>
                    </div>
                    <div className="h-2.5 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-brand-500 rounded-full" style={{ width: `${p}%` }} />
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-xs text-gray-400">
                    <span>👥 {c.contribuicoes.toLocaleString('pt-BR')} contribuições</span>
                    <span>⏰ {c.diasRestantes} dias restantes</span>
                    <span>💚 {c.ods.map(o => `ODS ${o}`).join(', ')}</span>
                  </div>
                  <div className="flex gap-2 pt-1">
                    <button className="flex-1 py-2 bg-brand-600 text-white text-xs font-semibold rounded-lg hover:bg-brand-700 transition-colors">
                      Contribuir agora
                    </button>
                    <button className="px-3 py-2 border border-gray-200 text-xs text-gray-600 rounded-lg hover:bg-gray-50">
                      Compartilhar
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* encerradas */}
      {encerradas.length > 0 && (
        <section>
          <h2 className="text-lg font-semibold text-gray-900 mb-4">✅ Campanhas Encerradas</h2>
          <div className="space-y-3">
            {encerradas.map((c) => (
              <div key={c.id} className="card p-4 flex items-center gap-4 opacity-75">
                <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center text-green-600 shrink-0 font-bold text-lg">✓</div>
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-gray-900 text-sm truncate">{c.titulo}</p>
                  <p className="text-xs text-gray-400">{c.organizacaoNome} · {c.contribuicoes} contribuições</p>
                </div>
                <div className="text-right shrink-0">
                  <p className="font-bold text-green-700 text-sm">{fmt(c.arrecadado)}</p>
                  <p className="text-xs text-gray-400">Meta: {fmt(c.meta)}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* CTA empresa */}
      <div className="card p-8 text-center bg-gradient-to-br from-blue-600 to-brand-700 text-white">
        <h2 className="text-xl font-bold mb-2">Sua empresa quer criar uma Vaquinha Corporativa?</h2>
        <p className="text-sm text-blue-100 mb-6 max-w-lg mx-auto">
          Engaje sua equipe, apoie uma causa alinhada ao seu ESG e receba relatório de impacto automático.
          Empresas que usam a plataforma reportam 3× mais engajamento em programas de RSE.
        </p>
        <div className="flex gap-3 justify-center">
          <button className="px-6 py-3 bg-white text-blue-700 font-semibold text-sm rounded-lg hover:bg-blue-50 transition-colors">
            Criar campanha gratuita
          </button>
          <button className="px-6 py-3 border border-white text-white text-sm rounded-lg hover:bg-white/10 transition-colors">
            Falar com consultor
          </button>
        </div>
      </div>
    </div>
  );
}
