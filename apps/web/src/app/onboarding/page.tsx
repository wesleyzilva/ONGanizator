'use client';
// Tela de boas-vindas + autodiagnóstico gamificado para emissão de Selos
// Fluxo: splash → 5 dimensões (5 perguntas cada) → resultado com selo recomendado

import { useState } from 'react';
import Link from 'next/link';
import { DIAGNOSTICO_DIMENSOES } from '@/lib/mockData';

type Resposta = 'sim' | 'nao' | 'parcial' | null;

interface Respostas {
  [perguntaId: string]: Resposta;
}

const SELO_INFO = {
  bronze: {
    label: '🥉 Selo Bronze',
    desc: 'Organização cadastrada, projeto aprovado para prospecção.',
    cor: 'bg-amber-50 border-amber-300 text-amber-800',
    corBtn: 'bg-amber-600 hover:bg-amber-700',
    requisito: 'Mínimo 40% de conformidade nas dimensões básicas.',
    proxPasso: 'Complete o cadastro da organização e aprove pelo menos um projeto.',
  },
  prata: {
    label: '🥈 Selo Prata',
    desc: 'Documentação validada, Key Results cadastrados e metas mensuráveis.',
    cor: 'bg-gray-50 border-gray-300 text-gray-700',
    corBtn: 'bg-gray-500 hover:bg-gray-600',
    requisito: 'Mínimo 65% de conformidade nas 5 dimensões.',
    proxPasso: 'Valide a documentação e cadastre os KRs dos projetos.',
  },
  ouro: {
    label: '🥇 Selo Ouro',
    desc: 'Primeira entrega auditável com relatório de impacto e prestação de contas.',
    cor: 'bg-yellow-50 border-yellow-300 text-yellow-800',
    corBtn: 'bg-yellow-600 hover:bg-yellow-700',
    requisito: 'Mínimo 85% de conformidade em todas as dimensões.',
    proxPasso: 'Publique o relatório anual e conclua o pacote de auditoria.',
  },
  diamante: {
    label: '💎 Selo Diamante',
    desc: 'Organização com Captação Ativa e prestação de contas validada.',
    cor: 'bg-cyan-50 border-cyan-300 text-cyan-800',
    corBtn: 'bg-cyan-600 hover:bg-cyan-700',
    requisito: 'Selo Ouro atingido + ao menos 1 projeto com captação concluída e prestação de contas validada.',
    proxPasso: 'Conclua um projeto com captação e submeta a prestação de contas para validação.',
  },
} as const;

// Peso por resposta
const PESO: Record<NonNullable<Resposta>, number> = { sim: 1, parcial: 0.5, nao: 0 };

// Ações prioritárias por dimensão (chaveado pelo id da dimensão: gov, fin, comp, exec, imp)
const ACOES_POR_DIMENSAO: Record<string, string[]> = {
  gov: [
    'Atualizar estatuto social com advogado especialista',
    'Formalizar ata de eleição da diretoria',
    'Ativar Conselho Fiscal com reuniões regulares',
    'Registrar assembleia geral anual em ata',
  ],
  exec: [
    'Elaborar planejamento estratégico 2024-2026',
    'Documentar processos operacionais chave',
    'Definir indicadores de desempenho (KPIs)',
    'Implantar gestão de riscos básica',
  ],
  fin: [
    'Contratar contador com experiência em terceiro setor',
    'Implantar fluxo de caixa mensal',
    'Elaborar DRE semestral',
    'Constituir fundo de reserva operacional (3 meses)',
  ],
  imp: [
    'Definir teoria da mudança do projeto',
    'Mapear ODS relacionados à missão',
    'Implantar coleta de indicadores de impacto',
    'Produzir relatório de resultados semestral',
  ],
  comp: [
    'Mapear mecanismos de captação elegíveis (Rouanet, FIA)',
    'Montar portfólio de projetos com KRs',
    'Cadastrar banco de potenciais financiadores',
    'Elaborar plano de sustentabilidade financeira',
  ],
};

function calcularScore(respostas: Respostas) {
  let totalPeso = 0;
  let pontos = 0;
  for (const dim of DIAGNOSTICO_DIMENSOES) {
    for (const p of dim.perguntas) {
      totalPeso += p.peso;
      const r = respostas[p.id];
      if (r && r !== 'nao') {
        pontos += p.peso * PESO[r];
      }
    }
  }
  return totalPeso > 0 ? Math.round((pontos / totalPeso) * 100) : 0;
}

function seloParaScore(score: number): 'bronze' | 'prata' | 'ouro' | null {
  if (score >= 85) return 'ouro';
  if (score >= 65) return 'prata';
  if (score >= 40) return 'bronze';
  return null;
}

function ProgressBar({ current, total }: { current: number; total: number }) {
  const pct = Math.round((current / total) * 100);
  return (
    <div className="w-full bg-gray-100 rounded-full h-2">
      <div
        className="h-2 rounded-full bg-brand-500 transition-all duration-500"
        style={{ width: `${pct}%` }}
      />
    </div>
  );
}

export default function OnboardingPage() {
  const [etapa, setEtapa] = useState<'splash' | 'questionario' | 'resultado'>('splash');
  const [dimIndex, setDimIndex] = useState(0);
  const [pergIndex, setPergIndex] = useState(0);
  const [respostas, setRespostas] = useState<Respostas>({});

  const totalPerguntas = DIAGNOSTICO_DIMENSOES.reduce((acc, d) => acc + d.perguntas.length, 0);
  const respondidas = Object.keys(respostas).length;

  const dimAtual = DIAGNOSTICO_DIMENSOES[dimIndex];
  const pergAtual = dimAtual?.perguntas[pergIndex];

  function responder(r: Resposta) {
    if (!pergAtual) return;
    const novas = { ...respostas, [pergAtual.id]: r };
    setRespostas(novas);

    // avança
    const proxPerg = pergIndex + 1;
    if (proxPerg < dimAtual.perguntas.length) {
      setPergIndex(proxPerg);
    } else {
      const proxDim = dimIndex + 1;
      if (proxDim < DIAGNOSTICO_DIMENSOES.length) {
        setDimIndex(proxDim);
        setPergIndex(0);
      } else {
        setEtapa('resultado');
      }
    }
  }

  function voltar() {
    if (pergIndex > 0) {
      setPergIndex(pergIndex - 1);
    } else if (dimIndex > 0) {
      const dimAnterior = dimIndex - 1;
      setDimIndex(dimAnterior);
      setPergIndex(DIAGNOSTICO_DIMENSOES[dimAnterior].perguntas.length - 1);
    }
  }

  // ── SPLASH ─────────────────────────────────────────────────────────────────
  if (etapa === 'splash') {
    return (
      <div className="min-h-[80vh] flex items-center justify-center p-6">
        <div className="max-w-xl w-full text-center space-y-8">
          {/* logo / mascote */}
          <div className="flex justify-center">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-brand-400 to-brand-600 flex items-center justify-center text-4xl shadow-lg">
              🌱
            </div>
          </div>

          <div className="space-y-3">
            <h1 className="text-3xl font-bold text-gray-900">
              Bem-vindo ao ONGanizator!
            </h1>
            <p className="text-gray-500 text-base leading-relaxed">
              Vamos fazer um autodiagnóstico rápido para entender a maturidade da sua organização
              e indicar o <strong>Selo de Credibilidade</strong> mais adequado para vocês.
            </p>
          </div>

          {/* selos preview */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-sm">
            {(['bronze', 'prata', 'ouro', 'diamante'] as const).map((s) => (
              <div key={s} className={`rounded-xl border-2 p-3 ${SELO_INFO[s].cor}`}>
                <p className="font-bold">{SELO_INFO[s].label}</p>
                <p className="text-xs mt-1 opacity-80">{SELO_INFO[s].desc}</p>
              </div>
            ))}
          </div>

          <div className="space-y-2 text-sm text-gray-500">
            <p>📋 {totalPerguntas} perguntas em 5 dimensões</p>
            <p>⏱️ Aproximadamente 5 minutos</p>
            <p>🎯 Resultado imediato com recomendações</p>
          </div>

          <button
            onClick={() => setEtapa('questionario')}
            className="w-full py-3.5 px-6 rounded-xl bg-brand-600 text-white font-semibold text-base hover:bg-brand-700 transition-colors shadow-md"
          >
            Iniciar autodiagnóstico →
          </button>

          <p className="text-xs text-gray-400">
            Já tem uma conta?{' '}
            <Link href="/login" className="text-brand-600 hover:underline">
              Fazer login
            </Link>
          </p>
        </div>
      </div>
    );
  }

  // ── QUESTIONÁRIO ───────────────────────────────────────────────────────────
  if (etapa === 'questionario' && pergAtual) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center p-6">
        <div className="max-w-xl w-full space-y-6">
          {/* progresso geral */}
          <div className="space-y-1">
            <div className="flex justify-between text-xs text-gray-500">
              <span>Progresso</span>
              <span>{respondidas}/{totalPerguntas} perguntas</span>
            </div>
            <ProgressBar current={respondidas} total={totalPerguntas} />
          </div>

          {/* dimensão atual */}
          <div className="flex items-center gap-3">
            <span className="text-3xl">{dimAtual.icone}</span>
            <div>
              <p className="text-xs text-brand-600 font-semibold uppercase tracking-wider">
                Dimensão {dimIndex + 1} de {DIAGNOSTICO_DIMENSOES.length}
              </p>
              <p className="text-base font-bold text-gray-900">{dimAtual.titulo}</p>
              <p className="text-xs text-gray-500">{dimAtual.descricao}</p>
            </div>
          </div>

          {/* card de pergunta */}
          <div className="rounded-2xl border-2 border-brand-100 bg-white p-6 shadow-sm space-y-5">
            <div className="flex items-start gap-3">
              <span className="flex-shrink-0 w-7 h-7 rounded-full bg-brand-100 text-brand-700 text-sm font-bold flex items-center justify-center">
                {pergIndex + 1}
              </span>
              <p className="text-gray-800 text-base leading-relaxed">{pergAtual.texto}</p>
            </div>

            {/* botões de resposta */}
            <div className="grid grid-cols-3 gap-3">
              <button
                onClick={() => responder('sim')}
                className="py-3 rounded-xl border-2 border-green-200 bg-green-50 text-green-700 font-semibold hover:bg-green-100 hover:border-green-400 transition-colors"
              >
                ✓ Sim
              </button>
              <button
                onClick={() => responder('parcial')}
                className="py-3 rounded-xl border-2 border-yellow-200 bg-yellow-50 text-yellow-700 font-semibold hover:bg-yellow-100 hover:border-yellow-400 transition-colors"
              >
                ◑ Parcial
              </button>
              <button
                onClick={() => responder('nao')}
                className="py-3 rounded-xl border-2 border-red-200 bg-red-50 text-red-700 font-semibold hover:bg-red-100 hover:border-red-400 transition-colors"
              >
                ✗ Não
              </button>
            </div>
          </div>

          {/* navegação */}
          <div className="flex justify-between items-center">
            <button
              onClick={voltar}
              disabled={dimIndex === 0 && pergIndex === 0}
              className="text-sm text-gray-500 hover:text-gray-700 disabled:opacity-30"
            >
              ← Voltar
            </button>
            <div className="flex gap-1">
              {DIAGNOSTICO_DIMENSOES.map((d, i) => (
                <span
                  key={d.id}
                  className={`w-2.5 h-2.5 rounded-full transition-colors ${
                    i < dimIndex
                      ? 'bg-brand-500'
                      : i === dimIndex
                      ? 'bg-brand-300'
                      : 'bg-gray-200'
                  }`}
                />
              ))}
            </div>
            <p className="text-xs text-gray-400">
              {pergIndex + 1}/{dimAtual.perguntas.length} nesta dimensão
            </p>
          </div>
        </div>
      </div>
    );
  }

  // ── RESULTADO ──────────────────────────────────────────────────────────────
  if (etapa === 'resultado') {
    const score = calcularScore(respostas);
    const seloKey = seloParaScore(score);
    const selo = seloKey ? SELO_INFO[seloKey] : null;

    // score por dimensão
    const scoresPorDim = DIAGNOSTICO_DIMENSOES.map((dim) => {
      let totalPeso = 0;
      let pontos = 0;
      for (const p of dim.perguntas) {
        totalPeso += p.peso;
        const r = respostas[p.id];
        if (r && r !== 'nao') pontos += p.peso * PESO[r];
      }
      return {
        ...dim,
        score: totalPeso > 0 ? Math.round((pontos / totalPeso) * 100) : 0,
      };
    });

    const scoreCor = score >= 85 ? 'text-yellow-600' : score >= 65 ? 'text-gray-500' : score >= 40 ? 'text-amber-600' : 'text-red-500';

    return (
      <div className="p-6 max-w-2xl mx-auto space-y-8">
        {/* resultado principal */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-brand-100 to-brand-200 text-5xl shadow-md">
            {score >= 85 ? '🥇' : score >= 65 ? '🥈' : score >= 40 ? '🥉' : '📋'}
          </div>
          <div>
            <p className="text-4xl font-black text-gray-900">
              <span className={scoreCor}>{score}%</span>
            </p>
            <p className="text-sm text-gray-500 mt-1">índice geral de maturidade</p>
          </div>

          {selo ? (
            <div className={`rounded-2xl border-2 p-5 ${selo.cor}`}>
              <p className="text-xl font-bold">{selo.label}</p>
              <p className="text-sm mt-1">{selo.desc}</p>
              <p className="text-xs mt-2 opacity-70">{selo.requisito}</p>
            </div>
          ) : (
            <div className="rounded-2xl border-2 border-gray-200 bg-gray-50 p-5 text-gray-500">
              <p className="font-bold">Ainda sem selo elegível</p>
              <p className="text-sm mt-1">
                Pontuação abaixo de 40%. Foque nas dimensões com menor score para atingir o Selo Bronze.
              </p>
            </div>
          )}
        </div>

        {/* score por dimensão */}
        <div className="card p-5 space-y-4">
          <h2 className="font-bold text-gray-900">Resultado por dimensão</h2>
          {scoresPorDim.map((dim) => {
            const cor =
              dim.score >= 80
                ? 'bg-green-500'
                : dim.score >= 60
                ? 'bg-yellow-400'
                : 'bg-red-400';
            const txt =
              dim.score >= 80
                ? 'text-green-700'
                : dim.score >= 60
                ? 'text-yellow-700'
                : 'text-red-600';
            return (
              <div key={dim.id} className="space-y-1">
                <div className="flex justify-between text-sm">
                  <span className="flex gap-1.5 items-center font-medium text-gray-700">
                    <span>{dim.icone}</span> {dim.titulo}
                  </span>
                  <span className={`font-bold ${txt}`}>{dim.score}%</span>
                </div>
                <div className="h-2.5 bg-gray-100 rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full ${cor} transition-all duration-700`}
                    style={{ width: `${dim.score}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* próximos passos */}
        {selo && (
          <div className="card p-5 space-y-3">
            <h2 className="font-bold text-gray-900">Próximos passos para {selo.label}</h2>
            <p className="text-sm text-gray-600">{selo.proxPasso}</p>
            <div className="flex gap-3 flex-wrap">
              <Link
                href="/diagnostico"
                className="px-4 py-2 rounded-lg border border-brand-300 text-brand-700 text-sm font-medium hover:bg-brand-50"
              >
                Ver diagnóstico completo
              </Link>
              <Link
                href="/organizacoes"
                className="px-4 py-2 rounded-lg bg-brand-600 text-white text-sm font-medium hover:bg-brand-700"
              >
                Cadastrar organização
              </Link>
            </div>
          </div>
        )}

        {/* Caminho para o Diamante */}
        <div className="card p-5 space-y-3">
          <h2 className="font-bold text-gray-900">Seu caminho para o Diamante</h2>
          <p className="text-xs text-gray-500">Os 4 níveis de certificação da plataforma ONGanizator</p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {(['bronze', 'prata', 'ouro', 'diamante'] as const).map((s, idx) => {
              const ORDEM = ['bronze', 'prata', 'ouro', 'diamante'];
              const currentIdx = seloKey ? ORDEM.indexOf(seloKey) : -1;
              const isAtual = s === seloKey;
              const isAlcancado = idx <= currentIdx;
              return (
                <div
                  key={s}
                  className={`rounded-xl border-2 p-3 text-center transition-all ${
                    isAtual
                      ? SELO_INFO[s].cor + ' ring-2 ring-offset-1 ring-indigo-400 shadow-sm'
                      : isAlcancado
                      ? SELO_INFO[s].cor
                      : 'bg-gray-50 border-gray-200 opacity-50'
                  }`}
                >
                  <p className="font-bold text-sm leading-tight">{SELO_INFO[s].label}</p>
                  {isAtual && (
                    <span className="inline-block text-xs mt-1 px-2 py-0.5 bg-white/70 rounded-full font-medium">
                      Nível atual
                    </span>
                  )}
                  {!isAtual && s === 'diamante' && (
                    <span className="inline-block text-xs mt-1 text-cyan-600 font-medium">
                      Próximo horizonte
                    </span>
                  )}
                </div>
              );
            })}
          </div>
          {seloKey === 'ouro' && (
            <p className="text-xs text-cyan-700 font-medium">
              💎 Você está próximo do Diamante! Conclua um projeto com captação e submeta a prestação de contas.
            </p>
          )}
        </div>

        {/* plano de ação prioritário */}
        {(() => {
          const dimsBaixas = scoresPorDim.filter((d) => d.score < 70).slice(0, 3);
          if (dimsBaixas.length === 0) return null;
          return (
            <div className="card p-5 space-y-4">
              <div>
                <h2 className="font-bold text-gray-900">Plano de Ação Prioritário</h2>
                <p className="text-xs text-gray-500 mt-0.5">
                  Dimensões com score abaixo de 70% — ações sugeridas para avançar
                </p>
              </div>
              {dimsBaixas.map((dim) => (
                <div key={dim.id} className="space-y-2">
                  <p className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                    <span>{dim.icone}</span>
                    <span>{dim.titulo}</span>
                    <span className="text-red-500 font-normal">({dim.score}%)</span>
                  </p>
                  <ul className="space-y-1 pl-1">
                    {(ACOES_POR_DIMENSAO[dim.id] ?? []).map((acao, i) => (
                      <li key={i} className="flex gap-2 text-sm text-gray-600">
                        <span className="text-gray-300 shrink-0 select-none">□</span>
                        {acao}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          );
        })()}

        {/* ações */}
        <div className="flex gap-3 flex-wrap">
          <button
            onClick={() => {
              setRespostas({});
              setDimIndex(0);
              setPergIndex(0);
              setEtapa('questionario');
            }}
            className="px-4 py-2 rounded-lg border border-gray-300 text-gray-600 text-sm hover:bg-gray-50"
          >
            ↺ Refazer diagnóstico
          </button>
          <Link
            href="/"
            className="px-4 py-2 rounded-lg bg-brand-600 text-white text-sm font-medium hover:bg-brand-700"
          >
            Ir para o painel →
          </Link>
        </div>
      </div>
    );
  }

  return null;
}
