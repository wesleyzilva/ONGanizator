import { DOADORES, getCRMStats } from '@/lib/mockData';
import Link from 'next/link';

const TIPO_COLOR: Record<string, string> = {
  PJ: 'bg-blue-100 text-blue-700',
  PF: 'bg-purple-100 text-purple-700',
};
const TAG_COLOR: Record<string, string> = {
  investidor: 'bg-green-100 text-green-700',
  patrocinador: 'bg-blue-100 text-blue-700',
  doador_recorrente: 'bg-brand-100 text-brand-700',
  doador_eventual: 'bg-gray-100 text-gray-600',
  convenio: 'bg-yellow-100 text-yellow-700',
};
const FREQ_LABEL: Record<string, string> = {
  mensal: '🔄 Mensal',
  por_projeto: '📦 Por projeto',
  recorrente: '🔄 Recorrente',
  eventual: '⚡ Eventual',
};

function fmt(n: number) {
  return n >= 1_000_000 ? `R$ ${(n / 1_000_000).toFixed(1)}M` : `R$ ${(n / 1_000).toFixed(0)}K`;
}

export default function CRMPage() {
  const stats = getCRMStats('org-001');
  return (
    <div className="p-8 space-y-8 max-w-5xl mx-auto">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">👥 CRM de Doadores e Parceiros</h1>
          <p className="text-sm text-gray-500 mt-1">Gerencie relacionamentos, histórico de doações e ações de fidelização.</p>
        </div>
        <button className="px-4 py-2 bg-brand-600 text-white text-sm font-medium rounded-lg hover:bg-brand-700">
          + Novo contato
        </button>
      </div>

      {/* KPIs */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="card p-4 text-center">
          <p className="text-xs text-gray-500 mb-1">Total de contatos</p>
          <p className="text-2xl font-bold text-gray-900">{stats.totalDoadores}</p>
        </div>
        <div className="card p-4 text-center">
          <p className="text-xs text-gray-500 mb-1">Ativos</p>
          <p className="text-2xl font-bold text-brand-600">{stats.doadoresAtivos}</p>
        </div>
        <div className="card p-4 text-center">
          <p className="text-xs text-gray-500 mb-1">Total arrecadado</p>
          <p className="text-2xl font-bold text-gray-900">{fmt(stats.totalArrecadado)}</p>
        </div>
        <div className="card p-4 text-center">
          <p className="text-xs text-gray-500 mb-1">Ticket médio</p>
          <p className="text-2xl font-bold text-gray-900">{fmt(stats.ticketMedio)}</p>
        </div>
      </div>

      {/* filtros rápidos */}
      <div className="flex flex-wrap gap-2">
        {['Todos', 'PJ', 'PF', 'Ativos', 'Recorrentes', 'Inativos'].map((f) => (
          <button key={f} className={`px-3 py-1.5 text-xs rounded-lg border transition-colors ${f === 'Todos' ? 'bg-brand-600 text-white border-brand-600' : 'border-gray-200 text-gray-600 hover:bg-gray-50'}`}>
            {f}
          </button>
        ))}
        <div className="ml-auto">
          <input className="border border-gray-200 rounded-lg px-3 py-1.5 text-xs w-48 focus:outline-none focus:ring-1 focus:ring-brand-400" placeholder="🔍 Buscar contato…" />
        </div>
      </div>

      {/* tabela */}
      <div className="card overflow-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-gray-100 bg-gray-50">
              <th className="text-left py-3 px-4 text-xs font-semibold text-gray-500 uppercase tracking-wide">Nome</th>
              <th className="text-left py-3 px-4 text-xs font-semibold text-gray-500 uppercase tracking-wide">Tag</th>
              <th className="text-left py-3 px-4 text-xs font-semibold text-gray-500 uppercase tracking-wide">Frequência</th>
              <th className="text-right py-3 px-4 text-xs font-semibold text-gray-500 uppercase tracking-wide">Total doado</th>
              <th className="text-center py-3 px-4 text-xs font-semibold text-gray-500 uppercase tracking-wide">Última doação</th>
              <th className="text-center py-3 px-4 text-xs font-semibold text-gray-500 uppercase tracking-wide">Status</th>
              <th className="py-3 px-4"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {DOADORES.map((d) => (
              <tr key={d.id} className="hover:bg-gray-50 transition-colors">
                <td className="py-3 px-4">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-full bg-brand-100 text-brand-700 flex items-center justify-center text-xs font-bold shrink-0">
                      {d.nome.charAt(0)}
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">{d.nome}</p>
                      <p className="text-xs text-gray-400">{d.email}</p>
                    </div>
                  </div>
                </td>
                <td className="py-3 px-4">
                  <div className="flex gap-1">
                    <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${TIPO_COLOR[d.tipo]}`}>{d.tipo}</span>
                    <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${TAG_COLOR[d.tag] ?? 'bg-gray-100 text-gray-600'}`}>{d.tag.replace('_', ' ')}</span>
                  </div>
                </td>
                <td className="py-3 px-4 text-xs text-gray-600">{FREQ_LABEL[d.frequencia] ?? d.frequencia}</td>
                <td className="py-3 px-4 text-right font-bold text-gray-900">{fmt(d.valorTotal)}</td>
                <td className="py-3 px-4 text-center text-xs text-gray-500">{new Date(d.ultimaDoacao).toLocaleDateString('pt-BR')}</td>
                <td className="py-3 px-4 text-center">
                  <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${d.status === 'ativo' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-500'}`}>
                    {d.status}
                  </span>
                </td>
                <td className="py-3 px-4">
                  <div className="flex gap-1">
                    <button className="text-xs px-2 py-1 border border-gray-200 rounded hover:bg-gray-50 text-gray-500">✏️</button>
                    <button className="text-xs px-2 py-1 border border-gray-200 rounded hover:bg-gray-50 text-gray-500">📧</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ações de engajamento */}
      <div className="card p-6">
        <h2 className="text-base font-semibold text-gray-900 mb-4">📧 Ações de Engajamento</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {[
            { icon: '🔄', label: 'Reativar inativos', desc: '1 doador inativo há mais de 3 meses. Enviar campanha de reconexão.', cta: 'Criar campanha', color: 'border-yellow-200 bg-yellow-50' },
            { icon: '🎂', label: 'Doadores VIP', desc: '3 doadores doaram mais de R$ 100k. Enviar relatório de impacto personalizado.', cta: 'Enviar relatório', color: 'border-blue-200 bg-blue-50' },
            { icon: '📈', label: 'Upsell recorrente', desc: '2 doadores eventuais com alto ticket. Convidar para plano recorrente.', cta: 'Criar convite', color: 'border-green-200 bg-green-50' },
          ].map((a) => (
            <div key={a.label} className={`rounded-xl p-4 border ${a.color}`}>
              <div className="text-2xl mb-2">{a.icon}</div>
              <p className="text-sm font-semibold text-gray-900">{a.label}</p>
              <p className="text-xs text-gray-500 mt-1 mb-3">{a.desc}</p>
              <button className="text-xs font-medium text-brand-600 hover:text-brand-700">{a.cta} →</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
 
