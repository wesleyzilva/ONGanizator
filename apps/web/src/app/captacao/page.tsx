'use client';
// PO-013 + PO-014 — Seletor de Mecanismo de Captação + Calculadora de Incentivo Fiscal
// Rota: /captacao

import { useState } from 'react';
import { MARCOS_LEGAIS, calcularBeneficioFiscal } from '@/lib/mockData';

type Marco = typeof MARCOS_LEGAIS[number];

const COR_MAP: Record<string, string> = {
  blue:   'border-blue-300 bg-blue-50 text-blue-800',
  yellow: 'border-yellow-300 bg-yellow-50 text-yellow-800',
  purple: 'border-purple-300 bg-purple-50 text-purple-800',
  green:  'border-green-300 bg-green-50 text-green-800',
  red:    'border-red-300 bg-red-50 text-red-800',
  slate:  'border-gray-300 bg-gray-50 text-gray-800',
};

const COR_BADGE: Record<string, string> = {
  blue:   'bg-blue-100 text-blue-700',
  yellow: 'bg-yellow-100 text-yellow-700',
  purple: 'bg-purple-100 text-purple-700',
  green:  'bg-green-100 text-green-700',
  red:    'bg-red-100 text-red-700',
  slate:  'bg-gray-100 text-gray-700',
};

function fmt(n: number) {
  if (n >= 1_000_000) return `R$ ${(n / 1_000_000).toFixed(2)}M`;
  if (n >= 1_000) return `R$ ${(n / 1_000).toFixed(1)}k`;
  return `R$ ${n.toFixed(0)}`;
}

function fmtPct(n: number) {
  return `${n.toFixed(1)}%`;
}

// ── Componente principal ─────────────────────────────────────────────────────
export default function CaptacaoPage() {
  const [aba, setAba] = useState<'seletor' | 'calculadora'>('seletor');

  // Filtros seletor
  const [filtroArea, setFiltroArea] = useState('');
  const [filtroRegime, setFiltroRegime] = useState<'lucroReal' | 'lucroPresumido' | 'simplesNacional' | ''>('');
  const [selecionado, setSelecionado] = useState<Marco | null>(null);

  // Calculadora
  const [calcMarco, setCalcMarco] = useState('doacao-direta');
  const [lucroAnual, setLucroAnual] = useState(1000000);
  const [receitaOp, setReceitaOp] = useState(5000000);
  const [valorDoacao, setValorDoacao] = useState(100000);

  const todosAreas = Array.from(
    new Set(MARCOS_LEGAIS.flatMap((m: any) => m.focoAreas as string[]))
  ).sort();

  const mecsFiltrados = MARCOS_LEGAIS.filter((m: any) => {
    if (filtroArea && !m.focoAreas.includes(filtroArea)) return false;
    if (filtroRegime && !m.eligibilidade[filtroRegime]) return false;
    return true;
  });

  const resultado = calcularBeneficioFiscal(calcMarco, lucroAnual, receitaOp, valorDoacao);
  const marcoCalc = MARCOS_LEGAIS.find((m) => m.id === calcMarco) as any;

  return (
    <div className="p-8 space-y-6 max-w-5xl mx-auto">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Captação com Incentivo Fiscal</h1>
        <p className="text-sm text-gray-500 mt-1">
          Selecione o mecanismo mais adequado ao projeto e calcule o benefício para o patrocinador.
        </p>
      </div>

      {/* Abas */}
      <div className="flex border-b border-gray-200">
        {(['seletor', 'calculadora'] as const).map((a) => (
          <button
            key={a}
            onClick={() => setAba(a)}
            className={`px-5 py-2.5 text-sm font-medium border-b-2 transition-colors ${
              aba === a
                ? 'border-brand-600 text-brand-700'
                : 'border-transparent text-gray-500 hover:text-gray-700'
            }`}
          >
            {a === 'seletor' ? '📋 Seletor de Mecanismo' : '🧮 Calculadora de Incentivo'}
          </button>
        ))}
      </div>

      {/* ── ABA 1: Seletor ──────────────────────────────────────────────── */}
      {aba === 'seletor' && (
        <div className="space-y-5">
          {/* Filtros */}
          <div className="flex flex-wrap gap-3">
            <select
              value={filtroArea}
              onChange={(e) => setFiltroArea(e.target.value)}
              className="text-sm border border-gray-200 rounded-lg px-3 py-2 bg-white"
            >
              <option value="">Todas as áreas</option>
              {todosAreas.map((a) => (
                <option key={a} value={a}>{a}</option>
              ))}
            </select>
            <select
              value={filtroRegime}
              onChange={(e) => setFiltroRegime(e.target.value as any)}
              className="text-sm border border-gray-200 rounded-lg px-3 py-2 bg-white"
            >
              <option value="">Todos os regimes</option>
              <option value="lucroReal">Lucro Real</option>
              <option value="lucroPresumido">Lucro Presumido</option>
              <option value="simplesNacional">Simples Nacional</option>
            </select>
            {(filtroArea || filtroRegime) && (
              <button
                onClick={() => { setFiltroArea(''); setFiltroRegime(''); }}
                className="text-xs text-gray-400 hover:text-gray-700 px-2"
              >
                ✕ Limpar filtros
              </button>
            )}
          </div>

          <p className="text-xs text-gray-400">
            {mecsFiltrados.length} mecanismo{mecsFiltrados.length !== 1 ? 's' : ''} encontrado{mecsFiltrados.length !== 1 ? 's' : ''}
          </p>

          {/* Grid de mecanismos */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {mecsFiltrados.map((m: any) => (
              <button
                key={m.id}
                onClick={() => setSelecionado(selecionado?.id === m.id ? null : m as Marco)}
                className={`text-left rounded-xl border-2 p-4 transition-all ${
                  selecionado?.id === m.id
                    ? `${COR_MAP[m.cor] ?? COR_MAP.slate} ring-2 ring-offset-1 ring-brand-400`
                    : 'border-gray-200 bg-white hover:border-gray-300'
                }`}
              >
                <div className="flex items-start gap-3">
                  <span className="text-2xl shrink-0">{m.icone}</span>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <p className="font-semibold text-gray-800 text-sm leading-tight">{m.nome}</p>
                      <span className={`shrink-0 px-2 py-0.5 rounded-full text-xs font-bold ${COR_BADGE[m.cor] ?? COR_BADGE.slate}`}>
                        {m.deducaoLabel}
                      </span>
                    </div>
                    <p className="text-xs text-gray-400 mt-0.5">{m.lei}</p>
                    <p className="text-xs text-gray-600 mt-1 line-clamp-2">{m.descricao}</p>
                    <div className="flex flex-wrap gap-1 mt-2">
                      {m.eligibilidade.lucroReal && (
                        <span className="px-1.5 py-0.5 bg-green-50 text-green-700 text-xs rounded">Lucro Real</span>
                      )}
                      {m.eligibilidade.lucroPresumido && (
                        <span className="px-1.5 py-0.5 bg-blue-50 text-blue-700 text-xs rounded">L. Presumido</span>
                      )}
                      {m.eligibilidade.simplesNacional && (
                        <span className="px-1.5 py-0.5 bg-purple-50 text-purple-700 text-xs rounded">Simples</span>
                      )}
                      <span className="px-1.5 py-0.5 bg-gray-50 text-gray-500 text-xs rounded">
                        ⏱ {m.prazoAprovacao}
                      </span>
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Detalhe do mecanismo selecionado */}
          {selecionado && (
            <div className={`rounded-2xl border-2 p-6 space-y-5 ${COR_MAP[(selecionado as any).cor] ?? COR_MAP.slate}`}>
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{(selecionado as any).icone}</span>
                  <div>
                    <h2 className="text-xl font-bold text-gray-800">{selecionado.nome}</h2>
                    <p className="text-sm text-gray-500">{(selecionado as any).lei}</p>
                  </div>
                </div>
                <button
                  onClick={() => {
                    setCalcMarco(selecionado.id);
                    setAba('calculadora');
                  }}
                  className="shrink-0 px-4 py-2 bg-brand-600 text-white text-sm font-medium rounded-lg hover:bg-brand-700 transition-colors"
                >
                  🧮 Calcular benefício
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="bg-white/70 rounded-lg p-3">
                  <p className="text-xs text-gray-400 mb-1">Dedução</p>
                  <p className="font-bold text-gray-800">{(selecionado as any).deducaoLabel}</p>
                </div>
                <div className="bg-white/70 rounded-lg p-3">
                  <p className="text-xs text-gray-400 mb-1">Órgão aprovador</p>
                  <p className="font-semibold text-gray-700 text-sm">{(selecionado as any).orgaoAprovador}</p>
                </div>
                <div className="bg-white/70 rounded-lg p-3">
                  <p className="text-xs text-gray-400 mb-1">Tipo de contrato</p>
                  <p className="font-semibold text-gray-700 text-sm">{(selecionado as any).tipoContrato}</p>
                </div>
              </div>

              {/* Áreas de foco */}
              <div>
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Áreas de foco</p>
                <div className="flex flex-wrap gap-2">
                  {(selecionado as any).focoAreas.map((a: string) => (
                    <span key={a} className="px-2 py-0.5 bg-white/60 border border-current/20 text-xs rounded-full">
                      {a}
                    </span>
                  ))}
                </div>
              </div>

              {/* Benefícios + Obrigações */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-white/70 rounded-lg p-4">
                  <p className="text-xs font-semibold text-gray-500 uppercase mb-2">Benefícios para o Patrocinador</p>
                  <ul className="space-y-1">
                    {(selecionado as any).beneficiosEmpresa.map((b: string, i: number) => (
                      <li key={i} className="text-xs text-gray-700 flex gap-1.5">
                        <span className="text-green-500 shrink-0">✓</span>{b}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-white/70 rounded-lg p-4">
                  <p className="text-xs font-semibold text-gray-500 uppercase mb-2">Obrigações da ONG</p>
                  <ul className="space-y-1">
                    {(selecionado as any).obrigacoesONG.map((o: string, i: number) => (
                      <li key={i} className="text-xs text-gray-700 flex gap-1.5">
                        <span className="text-brand-500 shrink-0">→</span>{o}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Etapas */}
              <div>
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">Etapas do Processo</p>
                <div className="space-y-2">
                  {(selecionado as any).etapas.map((e: any, i: number) => (
                    <div key={i} className="flex gap-3 items-start bg-white/50 rounded-lg p-2.5">
                      <span className="w-5 h-5 rounded-full bg-white border border-current/20 text-xs font-bold flex items-center justify-center shrink-0">
                        {i + 1}
                      </span>
                      <div>
                        <p className="text-sm font-medium text-gray-800">{e.titulo}</p>
                        <p className="text-xs text-gray-500">{e.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* ONGs sugeridas */}
              {(selecionado as any).ongsSugeridas && (
                <div className="bg-white/70 rounded-lg p-3">
                  <p className="text-xs font-semibold text-gray-500 uppercase mb-2">Tipos de ONG elegíveis</p>
                  <div className="flex flex-wrap gap-1.5">
                    {(selecionado as any).ongsSugeridas.map((o: string) => (
                      <span key={o} className="px-2 py-0.5 bg-white border border-current/20 text-xs rounded-full text-gray-700">
                        {o}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Aviso legal */}
              <p className="text-xs text-gray-400 italic">
                ⚠️ As informações acima têm caráter orientativo. Consulte sempre um advogado ou contador especializado em terceiro setor antes de formalizar qualquer destinação fiscal.
              </p>
            </div>
          )}
        </div>
      )}

      {/* ── ABA 2: Calculadora ─────────────────────────────────────────── */}
      {aba === 'calculadora' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Inputs */}
            <div className="space-y-4">
              <h2 className="text-base font-semibold text-gray-800">Dados do Financiador</h2>

              <div>
                <label className="block text-xs font-medium text-gray-600 mb-1">
                  Mecanismo de captação
                </label>
                <select
                  value={calcMarco}
                  onChange={(e) => setCalcMarco(e.target.value)}
                  className="w-full text-sm border border-gray-200 rounded-lg px-3 py-2.5 bg-white focus:outline-none focus:ring-2 focus:ring-brand-300"
                >
                  {MARCOS_LEGAIS.map((m: any) => (
                    <option key={m.id} value={m.id}>
                      {m.icone} {m.nome} — {m.deducaoLabel}
                    </option>
                  ))}
                </select>
                {marcoCalc && (
                  <p className="text-xs text-gray-400 mt-1">{marcoCalc.lei}</p>
                )}
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-600 mb-1">
                  Lucro anual estimado (R$)
                </label>
                <input
                  type="number"
                  min={0}
                  step={10000}
                  value={lucroAnual}
                  onChange={(e) => setLucroAnual(Number(e.target.value))}
                  className="w-full text-sm border border-gray-200 rounded-lg px-3 py-2.5 bg-white focus:outline-none focus:ring-2 focus:ring-brand-300"
                />
                <p className="text-xs text-gray-400 mt-1">Base para cálculo do IR (IRPJ + CSLL)</p>
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-600 mb-1">
                  Receita operacional líquida anual (R$)
                </label>
                <input
                  type="number"
                  min={0}
                  step={100000}
                  value={receitaOp}
                  onChange={(e) => setReceitaOp(Number(e.target.value))}
                  className="w-full text-sm border border-gray-200 rounded-lg px-3 py-2.5 bg-white focus:outline-none focus:ring-2 focus:ring-brand-300"
                />
                <p className="text-xs text-gray-400 mt-1">Usado para dedução como despesa operacional (Doação Direta)</p>
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-600 mb-1">
                  Valor do aporte / doação pretendida (R$)
                </label>
                <input
                  type="number"
                  min={0}
                  step={10000}
                  value={valorDoacao}
                  onChange={(e) => setValorDoacao(Number(e.target.value))}
                  className="w-full text-sm border border-gray-200 rounded-lg px-3 py-2.5 bg-white focus:outline-none focus:ring-2 focus:ring-brand-300"
                />
              </div>
            </div>

            {/* Resultado */}
            <div className="space-y-4">
              <h2 className="text-base font-semibold text-gray-800">Resultado da Simulação</h2>

              {marcoCalc?.deducaoTipo === 'nao_aplicavel' ? (
                <div className="rounded-xl border-2 border-gray-200 bg-gray-50 p-5 space-y-3">
                  <div className="flex items-center gap-2 text-gray-600">
                    <span className="text-2xl">{marcoCalc?.icone}</span>
                    <p className="font-medium">Mecanismo público — sem dedução fiscal privada</p>
                  </div>
                  <p className="text-sm text-gray-500">
                    O MROSC (Marco Regulatório das OSCs) é aplicável principalmente para parcerias com poder público.
                    Não há dedução fiscal para patrocinadores privados nesta modalidade.
                  </p>
                </div>
              ) : (
                <div className="space-y-3">
                  {/* Card principal */}
                  <div className="rounded-xl border-2 border-brand-200 bg-brand-50 p-5">
                    <p className="text-xs text-brand-600 font-medium uppercase tracking-wide mb-3">
                      {marcoCalc?.nome}
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-xs text-gray-500">Valor do aporte</p>
                        <p className="text-2xl font-bold text-gray-900">{fmt(valorDoacao)}</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">Economia fiscal estimada</p>
                        <p className="text-2xl font-bold text-green-700">{fmt(resultado.economiaEstimada)}</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">Custo efetivo ao patrocinador</p>
                        <p className="text-xl font-bold text-gray-700">{fmt(resultado.valorEfetivo)}</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">Desconto real</p>
                        <p className="text-xl font-bold text-brand-700">{fmtPct(resultado.percentualDesconto)}</p>
                      </div>
                    </div>
                  </div>

                  {/* Detalhes do cálculo */}
                  <div className="rounded-xl border border-gray-200 bg-white p-4 space-y-2 text-sm">
                    <p className="text-xs font-semibold text-gray-500 uppercase">Detalhes do cálculo</p>
                    <div className="flex justify-between text-gray-600">
                      <span>IR total estimado</span>
                      <span className="font-medium">{fmt(resultado.IR_TOTAL ?? 0)}</span>
                    </div>
                    <div className="flex justify-between text-gray-600">
                      <span>Limite de dedução ({marcoCalc?.deducaoLabel})</span>
                      <span className="font-medium">{fmt(resultado.limiteDeducao ?? 0)}</span>
                    </div>
                    <div className="flex justify-between text-gray-600">
                      <span>Valor válido para dedução</span>
                      <span className="font-medium">{fmt(Math.min(valorDoacao, resultado.limiteDeducao ?? 0))}</span>
                    </div>
                    <div className="h-px bg-gray-100" />
                    <div className="flex justify-between font-semibold text-gray-800">
                      <span>Economia fiscal efetiva</span>
                      <span className="text-green-700">{fmt(resultado.economiaEstimada)}</span>
                    </div>
                  </div>

                  {/* Alertas */}
                  {valorDoacao > (resultado.limiteDeducao ?? 0) && (
                    <div className="rounded-lg border border-yellow-200 bg-yellow-50 p-3 text-xs text-yellow-800 flex gap-2">
                      <span className="shrink-0">⚠️</span>
                      <span>
                        O valor do aporte ({fmt(valorDoacao)}) supera o limite de dedução ({fmt(resultado.limiteDeducao ?? 0)}).
                        Apenas {fmt(resultado.limiteDeducao ?? 0)} será deduzível. A diferença de {fmt(valorDoacao - (resultado.limiteDeducao ?? 0))} não gera economia fiscal.
                      </span>
                    </div>
                  )}

                  {!marcoCalc?.eligibilidade.lucroPresumido && (
                    <div className="rounded-lg border border-blue-200 bg-blue-50 p-3 text-xs text-blue-800 flex gap-2">
                      <span className="shrink-0">ℹ️</span>
                      <span>
                        Este mecanismo é exclusivo para empresas no regime de <strong>Lucro Real</strong>.
                        Empresas no Lucro Presumido ou Simples Nacional não podem utilizar este incentivo.
                      </span>
                    </div>
                  )}

                  {/* Documentos necessários */}
                  <div className="rounded-xl border border-gray-200 bg-white p-4">
                    <p className="text-xs font-semibold text-gray-500 uppercase mb-2">Documentos necessários</p>
                    <ul className="space-y-1">
                      {[
                        marcoCalc?.tipoContrato && `${marcoCalc.tipoContrato} assinado`,
                        'CNPJ e certidões negativas da ONG',
                        marcoCalc?.orgaoAprovador !== 'Nenhum (declaração na DIPJ/ECF)'
                          ? `Aprovação do ${marcoCalc?.orgaoAprovador}`
                          : 'Recibo/NF emitido pela ONG',
                        'Comprovante de transferência bancária',
                        'Lançamento na ECF/DIPJ do exercício',
                      ].filter(Boolean).map((doc, i) => (
                        <li key={i} className="flex gap-2 text-xs text-gray-700">
                          <span className="text-brand-500 shrink-0">📄</span>{doc}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {/* Aviso legal */}
              <p className="text-xs text-gray-400 italic">
                ⚠️ Simulação de caráter orientativo. Alíquotas e limites podem variar por porte, setor e exercício fiscal.
                Consulte seu contador ou advogado tributarista antes de tomar qualquer decisão.
              </p>
            </div>
          </div>

          {/* Tabela comparativa */}
          <div>
            <h2 className="text-base font-semibold text-gray-800 mb-3">Comparativo de Todos os Mecanismos</h2>
            <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white">
              <table className="w-full text-sm">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase">Mecanismo</th>
                    <th className="text-right px-3 py-3 text-xs font-semibold text-gray-500 uppercase">Limite</th>
                    <th className="text-right px-3 py-3 text-xs font-semibold text-gray-500 uppercase">Economia (sim.)</th>
                    <th className="text-right px-3 py-3 text-xs font-semibold text-gray-500 uppercase">Custo efetivo</th>
                    <th className="px-3 py-3 text-xs font-semibold text-gray-500 uppercase">Regime</th>
                    <th className="px-3 py-3 text-xs font-semibold text-gray-500 uppercase">Prazo</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {MARCOS_LEGAIS.map((m: any) => {
                    const r = calcularBeneficioFiscal(m.id, lucroAnual, receitaOp, valorDoacao);
                    const isSel = m.id === calcMarco;
                    return (
                      <tr
                        key={m.id}
                        onClick={() => setCalcMarco(m.id)}
                        className={`cursor-pointer transition-colors ${isSel ? 'bg-brand-50' : 'hover:bg-gray-50'}`}
                      >
                        <td className="px-4 py-3">
                          <div className="flex items-center gap-2">
                            <span>{m.icone}</span>
                            <div>
                              <p className={`font-medium ${isSel ? 'text-brand-700' : 'text-gray-800'}`}>{m.nome}</p>
                              <p className="text-xs text-gray-400">{m.deducaoLabel}</p>
                            </div>
                          </div>
                        </td>
                        <td className="px-3 py-3 text-right text-gray-600 font-medium">
                          {m.deducaoTipo === 'nao_aplicavel' ? '—' : fmt(r.limiteDeducao ?? 0)}
                        </td>
                        <td className={`px-3 py-3 text-right font-bold ${r.economiaEstimada > 0 ? 'text-green-700' : 'text-gray-400'}`}>
                          {m.deducaoTipo === 'nao_aplicavel' ? '—' : fmt(r.economiaEstimada)}
                        </td>
                        <td className="px-3 py-3 text-right text-gray-700">
                          {m.deducaoTipo === 'nao_aplicavel' ? '—' : fmt(r.valorEfetivo)}
                        </td>
                        <td className="px-3 py-3">
                          <div className="flex flex-wrap gap-1">
                            {m.eligibilidade.lucroReal && <span className="px-1 py-0.5 bg-green-50 text-green-700 text-xs rounded">LR</span>}
                            {m.eligibilidade.lucroPresumido && <span className="px-1 py-0.5 bg-blue-50 text-blue-700 text-xs rounded">LP</span>}
                            {m.eligibilidade.simplesNacional && <span className="px-1 py-0.5 bg-purple-50 text-purple-700 text-xs rounded">SN</span>}
                          </div>
                        </td>
                        <td className="px-3 py-3 text-xs text-gray-500">{m.prazoAprovacao}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-400 mt-2">
              Clique em uma linha para selecionar o mecanismo e recalcular. LR = Lucro Real · LP = Lucro Presumido · SN = Simples Nacional.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
