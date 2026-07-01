import { LANCAMENTOS, getContabilidadeResumo } from '@/lib/mockData';
import Link from 'next/link';

const TIPO_COLOR: Record<string, string> = {
  receita: 'text-green-700 bg-green-50',
  despesa: 'text-red-600 bg-red-50',
  transferencia: 'text-blue-700 bg-blue-50',
};

function fmt(n: number): string {
  return n.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

export default function ContabilidadePage() {
  const resumo = getContabilidadeResumo('org-001');
  const { totalReceitas, totalDespesas, saldo, porCategoria } = resumo;
  const saldoP = totalReceitas > 0 ? Math.round((saldo / totalReceitas) * 100) : 0;

  // receitas por categoria (calculado dos lançamentos)
  const porCatReceita: Record<string, number> = {};
  LANCAMENTOS.filter((l) => l.tipo === 'receita').forEach((l) => {
    porCatReceita[l.categoria] = (porCatReceita[l.categoria] || 0) + l.valor;
  });
  const receitasArr = Object.entries(porCatReceita).map(([categoria, valor]) => ({ categoria, valor }));
  const despesasArr = Object.entries(porCategoria).map(([categoria, valor]) => ({ categoria, valor }));

  return (
    <div className="p-8 space-y-8 max-w-5xl mx-auto">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">📒 Contabilidade</h1>
          <p className="text-sm text-gray-500 mt-1">
            Controle financeiro simplificado para ONGs: receitas, despesas, DRE e NF.
          </p>
        </div>
        <div className="flex gap-2">
          <button className="px-3 py-2 border border-gray-200 text-xs text-gray-600 rounded-lg hover:bg-gray-50">
            📤 Exportar CSV
          </button>
          <button className="px-4 py-2 bg-brand-600 text-white text-sm font-medium rounded-lg hover:bg-brand-700">
            + Novo lançamento
          </button>
        </div>
      </div>

      {/* KPI cards */}
      <div className="grid grid-cols-3 gap-4">
        <div className="card p-5 bg-green-50 border-green-200">
          <p className="text-xs font-medium text-green-700 uppercase tracking-wide">Total de Receitas</p>
          <p className="text-2xl font-bold text-green-800 mt-1">{fmt(totalReceitas)}</p>
        </div>
        <div className="card p-5 bg-red-50 border-red-200">
          <p className="text-xs font-medium text-red-700 uppercase tracking-wide">Total de Despesas</p>
          <p className="text-2xl font-bold text-red-700 mt-1">{fmt(totalDespesas)}</p>
        </div>
        <div className={`card p-5 ${saldo >= 0 ? 'bg-blue-50 border-blue-200' : 'bg-red-50 border-red-200'}`}>
          <p className={`text-xs font-medium uppercase tracking-wide ${saldo >= 0 ? 'text-blue-700' : 'text-red-700'}`}>Saldo do Período</p>
          <p className={`text-2xl font-bold mt-1 ${saldo >= 0 ? 'text-blue-800' : 'text-red-800'}`}>{fmt(saldo)}</p>
          <p className={`text-xs mt-0.5 ${saldo >= 0 ? 'text-blue-600' : 'text-red-600'}`}>{saldoP}% da receita</p>
        </div>
      </div>

      {/* DRE simplificado */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Receitas */}
        <div className="card p-5 space-y-4">
          <h2 className="text-sm font-semibold text-gray-900">📈 Receitas por Categoria</h2>
          {receitasArr.map((r) => {
            const pct = Math.round((r.valor / totalReceitas) * 100);
            return (
              <div key={r.categoria} className="space-y-1">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-700">{r.categoria}</span>
                  <span className="font-semibold text-green-700">{fmt(r.valor)}</span>
                </div>
                <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full bg-green-400 rounded-full" style={{ width: `${pct}%` }} />
                </div>
                <p className="text-xs text-gray-400">{pct}% do total</p>
              </div>
            );
          })}
          <p className="border-t pt-2 text-sm font-bold text-green-700">Total: {fmt(totalReceitas)}</p>
        </div>

        {/* Despesas */}
        <div className="card p-5 space-y-4">
          <h2 className="text-sm font-semibold text-gray-900">📉 Despesas por Categoria</h2>
          {despesasArr.map((d) => {
            const pct = Math.round((d.valor / totalDespesas) * 100);
            return (
              <div key={d.categoria} className="space-y-1">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-700">{d.categoria}</span>
                  <span className="font-semibold text-red-600">{fmt(d.valor)}</span>
                </div>
                <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full bg-red-400 rounded-full" style={{ width: `${pct}%` }} />
                </div>
                <p className="text-xs text-gray-400">{pct}% do total</p>
              </div>
            );
          })}
          <p className="border-t pt-2 text-sm font-bold text-red-600">Total: {fmt(totalDespesas)}</p>
        </div>
      </div>

      {/* filtros */}
      <div className="flex flex-wrap gap-2 items-center">
        {['Todos', 'Receitas', 'Despesas', 'Transferências'].map((f) => (
          <button key={f} className={`px-3 py-1.5 text-xs rounded-lg border transition-colors ${f === 'Todos' ? 'bg-brand-600 text-white border-brand-600' : 'border-gray-200 text-gray-600 hover:bg-gray-50'}`}>
            {f}
          </button>
        ))}
        <select title="Filtrar por período" className="ml-auto border border-gray-200 rounded-lg px-3 py-1.5 text-xs text-gray-600 focus:outline-none focus:ring-1 focus:ring-brand-400">
          <option>2024</option>
          <option>2023</option>
          <option>2022</option>
        </select>
      </div>

      {/* tabela de lançamentos */}
      <div className="card overflow-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-gray-100 bg-gray-50">
              <th className="text-left py-3 px-4 text-xs font-semibold text-gray-500 uppercase tracking-wide">Data</th>
              <th className="text-left py-3 px-4 text-xs font-semibold text-gray-500 uppercase tracking-wide">Descrição</th>
              <th className="text-left py-3 px-4 text-xs font-semibold text-gray-500 uppercase tracking-wide">Categoria</th>
              <th className="text-center py-3 px-4 text-xs font-semibold text-gray-500 uppercase tracking-wide">Tipo</th>
              <th className="text-right py-3 px-4 text-xs font-semibold text-gray-500 uppercase tracking-wide">Valor</th>
              <th className="text-center py-3 px-4 text-xs font-semibold text-gray-500 uppercase tracking-wide">NF</th>
              <th className="py-3 px-4"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {LANCAMENTOS.map((l) => (
              <tr key={l.id} className="hover:bg-gray-50 transition-colors">
                <td className="py-3 px-4 text-xs text-gray-500 whitespace-nowrap">
                  {new Date(l.data).toLocaleDateString('pt-BR')}
                </td>
                <td className="py-3 px-4">
                  <p className="text-sm text-gray-900 font-medium">{l.descricao}</p>
                  {l.projetoId && <p className="text-xs text-gray-400">📂 {l.projetoId}</p>}
                </td>
                <td className="py-3 px-4 text-xs text-gray-500">{l.categoria}</td>
                <td className="py-3 px-4 text-center">
                  <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${TIPO_COLOR[l.tipo] ?? 'bg-gray-100 text-gray-600'}`}>
                    {l.tipo}
                  </span>
                </td>
                <td className={`py-3 px-4 text-right font-bold ${l.tipo === 'receita' ? 'text-green-700' : l.tipo === 'despesa' ? 'text-red-600' : 'text-blue-600'}`}>
                  {l.tipo === 'receita' ? '+' : '-'}{fmt(l.valor)}
                </td>
                <td className="py-3 px-4 text-center">
                  {l.nf ? (
                    <button className="text-xs text-brand-600 hover:text-brand-700 font-medium">📄 Ver NF</button>
                  ) : (
                    <span className="text-xs text-gray-300">—</span>
                  )}
                </td>
                <td className="py-3 px-4">
                  <button className="text-xs px-2 py-1 border border-gray-200 rounded hover:bg-gray-50 text-gray-400">✏️</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* planos */}
      <div className="card p-6 bg-gradient-to-br from-slate-50 to-blue-50 border-slate-200">
        <h2 className="text-base font-semibold text-gray-900 mb-4">💼 Contabilidade profissional integrada</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {[
            { nome: 'Starter', preco: 'R$ 149/mês', itens: ['Lançamentos ilimitados', 'DRE simplificado', 'Exportação CSV', '1 organização'], cor: 'border-gray-200' },
            { nome: 'Pro', preco: 'R$ 299/mês', itens: ['Tudo do Starter', 'Conciliação bancária', 'NF-e integrada', 'Até 5 projetos'], cor: 'border-brand-400', destaque: true },
            { nome: 'Enterprise', preco: 'R$ 499/mês', itens: ['Tudo do Pro', 'Contador parceiro', 'Relatórios auditáveis', 'API para ERP'], cor: 'border-slate-300' },
          ].map((p) => (
            <div key={p.nome} className={`rounded-xl p-5 border-2 bg-white ${p.cor} ${p.destaque ? 'ring-2 ring-brand-400' : ''}`}>
              {p.destaque && <div className="text-xs font-bold text-brand-600 uppercase tracking-wide mb-2">⭐ Mais popular</div>}
              <h3 className="text-lg font-bold text-gray-900">{p.nome}</h3>
              <p className="text-2xl font-black text-brand-600 mt-1">{p.preco}</p>
              <ul className="mt-3 space-y-1">
                {p.itens.map((i) => <li key={i} className="text-xs text-gray-600 flex items-center gap-1"><span className="text-green-500">✓</span>{i}</li>)}
              </ul>
              <button className={`w-full mt-4 py-2 text-xs font-semibold rounded-lg transition-colors ${p.destaque ? 'bg-brand-600 text-white hover:bg-brand-700' : 'border border-gray-200 text-gray-700 hover:bg-gray-50'}`}>
                {p.destaque ? 'Contratar →' : 'Começar grátis'}
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* ── Pendências e Comprovantes ─────────────────────────────────── */}
      <section>
        <h2 className="text-lg font-semibold text-gray-900 mb-4">⚠️ Pendências para Prestação de Contas</h2>
        <div className="space-y-3">
          {[
            { id: 'pend-001', projetoId: 'prj-001', descricao: 'Comprovante de pagamento — Salários Março/2025', tipo: 'comprovante', status: 'pendente', prazo: '2025-04-30', responsavel: 'ONG Pantanal Vivo' },
            { id: 'pend-002', projetoId: 'prj-001', descricao: 'Nota fiscal — Equipamentos de monitoramento (NF-9012)', tipo: 'nota_fiscal', status: 'pendente', prazo: '2025-04-15', responsavel: 'ONG Pantanal Vivo' },
            { id: 'pend-003', projetoId: 'prj-005', descricao: 'Relatório de impacto Q1/2025 não enviado', tipo: 'relatorio', status: 'atrasado', prazo: '2025-03-31', responsavel: 'Recicla Solidária' },
            { id: 'pend-004', projetoId: 'prj-001', descricao: 'Conciliação bancária — Fevereiro/2025', tipo: 'conciliacao', status: 'ok', prazo: '2025-03-15', responsavel: 'Contador parceiro' },
          ].map((p) => (
            <div key={p.id} className={`card p-4 flex items-center gap-4 ${p.status === 'atrasado' ? 'border-red-200 bg-red-50' : p.status === 'ok' ? 'border-green-200 bg-green-50' : ''}`}>
              <div className="shrink-0 text-xl">
                {p.status === 'ok' ? '✅' : p.status === 'atrasado' ? '🔴' : '⏳'}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900">{p.descricao}</p>
                <p className="text-xs text-gray-500 mt-0.5">
                  📂 {p.projetoId} · 🏢 {p.responsavel} · Prazo: {new Date(p.prazo).toLocaleDateString('pt-BR')}
                </p>
              </div>
              <div className="shrink-0">
                <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                  p.status === 'ok' ? 'bg-green-100 text-green-700'
                  : p.status === 'atrasado' ? 'bg-red-100 text-red-700'
                  : 'bg-yellow-100 text-yellow-700'
                }`}>
                  {p.status === 'ok' ? 'Concluído' : p.status === 'atrasado' ? 'Atrasado' : 'Pendente'}
                </span>
              </div>
              {p.status !== 'ok' && (
                <button className="shrink-0 text-xs px-3 py-1.5 bg-brand-600 text-white rounded-lg hover:bg-brand-700">
                  Enviar
                </button>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ── Parecer Contábil ──────────────────────────────────────────── */}
      <section>
        <h2 className="text-lg font-semibold text-gray-900 mb-4">📋 Parecer Contábil</h2>
        <div className="card p-6 space-y-4">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-sm font-semibold text-gray-900">Parecer ref. Projeto: Adote uma Nascente (prj-001)</p>
              <p className="text-xs text-gray-500 mt-0.5">Emitido em 15/01/2025 · Contador: Dr. Ricardo Alves (CRC-SP 123.456)</p>
            </div>
            <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-green-100 text-green-700 font-semibold">✅ Homologado</span>
          </div>
          <p className="text-sm text-gray-700 border-l-4 border-brand-400 pl-4 py-1 bg-brand-50 rounded-r-lg">
            As demonstrações financeiras do projeto Adote uma Nascente, referentes ao exercício Jan–Dez/2024,
            foram examinadas e encontram-se em conformidade com os princípios contábeis aplicáveis às Organizações
            da Sociedade Civil. Os valores captados de R$ 312.000 estão devidamente registrados, os lançamentos
            possuem documentação comprobatória (NF e recibos) e o saldo disponível é consistente com o relatório
            de execução financeira.
          </p>
          <div className="flex flex-wrap gap-2 pt-2 border-t border-gray-100">
            {['📄 DRE Completa', '📊 Balancete', '📎 Comprovantes (12)', '📤 Exportar PDF'].map((a) => (
              <button key={a} className="text-xs px-3 py-1.5 border border-gray-200 rounded-lg text-gray-600 hover:bg-gray-50">
                {a}
              </button>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
