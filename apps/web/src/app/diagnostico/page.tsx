'use client';
import { useState } from 'react';
import { DIAGNOSTICO_DIMENSOES, TRILHAS } from '@/lib/mockData';
import Link from 'next/link';

type Respostas = Record<string, boolean | null>;

function ScoreBar({ score, max, label }: { score: number; max: number; label: string }) {
  const p = Math.round((score / max) * 100);
  const color = p >= 75 ? 'bg-green-500' : p >= 50 ? 'bg-yellow-400' : 'bg-red-400';
  const textColor = p >= 75 ? 'text-green-700' : p >= 50 ? 'text-yellow-700' : 'text-red-600';
  return (
    <div className="space-y-1">
      <div className="flex justify-between text-sm">
        <span className="font-medium text-gray-800">{label}</span>
        <span className={`font-bold ${textColor}`}>{score}/{max}</span>
      </div>
      <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
        <div className={`h-full rounded-full transition-all ${color}`} style={{ width: `${p}%` }} />
      </div>
    </div>
  );
}

export default function DiagnosticoPage() {
  const [step, setStep] = useState<'intro' | 'quiz' | 'resultado'>('intro');
  const [dimIdx, setDimIdx] = useState(0);
  const [respostas, setRespostas] = useState<Respostas>({});

  const dim = DIAGNOSTICO_DIMENSOES[dimIdx];
  const totalPerguntas = DIAGNOSTICO_DIMENSOES.reduce((s, d) => s + d.perguntas.length, 0);
  const respondidas = Object.keys(respostas).length;

  // calcular scores
  const scores = DIAGNOSTICO_DIMENSOES.map((d) => {
    const pts = d.perguntas.reduce((s, p) => s + (respostas[p.id] ? p.peso : 0), 0);
    const max = d.perguntas.reduce((s, p) => s + p.peso, 0);
    return { id: d.id, titulo: d.titulo, icone: d.icone, pts, max, pct: Math.round((pts / max) * 100) };
  });
  const scoreTotal = Math.round(scores.reduce((s, d) => s + d.pct, 0) / scores.length);
  const nivel = scoreTotal >= 80 ? 'Referência' : scoreTotal >= 65 ? 'Consolidado' : scoreTotal >= 45 ? 'Em Desenvolvimento' : 'Iniciante';
  const nivelColor = scoreTotal >= 80 ? 'text-green-700 bg-green-100' : scoreTotal >= 65 ? 'text-blue-700 bg-blue-100' : scoreTotal >= 45 ? 'text-yellow-700 bg-yellow-100' : 'text-red-700 bg-red-100';

  const dimFraca = [...scores].sort((a, b) => a.pct - b.pct)[0];
  const trilhaSugerida = TRILHAS.find((t) => t.dimensao === dimFraca?.id);

  if (step === 'intro') {
    return (
      <div className="p-8 max-w-3xl mx-auto space-y-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">🩺 Diagnóstico de Maturidade Institucional</h1>
          <p className="text-sm text-gray-500 mt-1">Avalie sua organização em 5 dimensões e receba um plano de evolução personalizado.</p>
        </div>

        <div className="grid md:grid-cols-5 gap-4">
          {DIAGNOSTICO_DIMENSOES.map((d) => (
            <div key={d.id} className="card p-4 text-center">
              <div className="text-2xl mb-2">{d.icone}</div>
              <p className="text-xs font-semibold text-gray-800">{d.titulo}</p>
              <p className="text-xs text-gray-400 mt-1">{d.perguntas.length} perguntas</p>
            </div>
          ))}
        </div>

        <div className="card p-6 space-y-4">
          <h2 className="text-base font-semibold text-gray-900">📌 O que você vai receber</h2>
          <div className="grid md:grid-cols-2 gap-3">
            {[
              { icon: '📊', label: 'Score 0–100', desc: 'Em cada dimensão e score geral de maturidade.' },
              { icon: '🎯', label: 'Plano de ação', desc: 'Checklist de melhorias por prioridade.' },
              { icon: '🎓', label: 'Trilha de evolução', desc: 'Cursos e mentorias para subir o score.' },
              { icon: '🤝', label: 'Match aprimorado', desc: 'Score alto = acesso a projetos e investidores maiores.' },
            ].map((i) => (
              <div key={i.label} className="flex items-start gap-3">
                <span className="text-xl">{i.icon}</span>
                <div>
                  <p className="text-sm font-semibold text-gray-800">{i.label}</p>
                  <p className="text-xs text-gray-500">{i.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="text-sm text-gray-500">
            ⏱️ ~15 minutos · {totalPerguntas} perguntas · gratuito
          </div>
          <button onClick={() => setStep('quiz')} className="px-6 py-3 bg-brand-600 text-white font-semibold rounded-lg hover:bg-brand-700 transition-colors">
            Iniciar diagnóstico →
          </button>
        </div>
      </div>
    );
  }

  if (step === 'quiz') {
    const progress = Math.round((dimIdx / DIAGNOSTICO_DIMENSOES.length) * 100);
    return (
      <div className="p-8 max-w-2xl mx-auto space-y-6">
        <div>
          <div className="flex justify-between text-xs text-gray-500 mb-1">
            <span>Dimensão {dimIdx + 1} de {DIAGNOSTICO_DIMENSOES.length}</span>
            <span>{respondidas}/{totalPerguntas} respondidas</span>
          </div>
          <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
            <div className="h-full bg-brand-500 rounded-full transition-all" style={{ width: `${progress}%` }} />
          </div>
        </div>

        <div className="card p-6 space-y-6">
          <div className="flex items-center gap-3">
            <span className="text-3xl">{dim.icone}</span>
            <div>
              <h2 className="text-lg font-bold text-gray-900">{dim.titulo}</h2>
              <p className="text-sm text-gray-500">{dim.descricao}</p>
            </div>
          </div>

          <div className="space-y-4">
            {dim.perguntas.map((p) => (
              <div key={p.id} className="border border-gray-200 rounded-xl p-4">
                <p className="text-sm text-gray-800 mb-3">{p.texto}</p>
                <div className="flex gap-3">
                  <button
                    onClick={() => setRespostas(r => ({ ...r, [p.id]: true }))}
                    className={`flex-1 py-2 text-sm font-medium rounded-lg border transition-colors ${respostas[p.id] === true ? 'bg-green-600 text-white border-green-600' : 'border-gray-200 text-gray-600 hover:bg-green-50 hover:border-green-300'}`}
                  >
                    ✅ Sim
                  </button>
                  <button
                    onClick={() => setRespostas(r => ({ ...r, [p.id]: false }))}
                    className={`flex-1 py-2 text-sm font-medium rounded-lg border transition-colors ${respostas[p.id] === false ? 'bg-red-500 text-white border-red-500' : 'border-gray-200 text-gray-600 hover:bg-red-50 hover:border-red-300'}`}
                  >
                    ❌ Não
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between">
          <button
            onClick={() => setDimIdx(i => Math.max(0, i - 1))}
            disabled={dimIdx === 0}
            className="px-4 py-2 border border-gray-200 text-sm text-gray-600 rounded-lg hover:bg-gray-50 disabled:opacity-40"
          >
            ← Anterior
          </button>
          {dimIdx < DIAGNOSTICO_DIMENSOES.length - 1 ? (
            <button onClick={() => setDimIdx(i => i + 1)} className="px-5 py-2 bg-brand-600 text-white text-sm font-medium rounded-lg hover:bg-brand-700">
              Próxima dimensão →
            </button>
          ) : (
            <button onClick={() => setStep('resultado')} className="px-5 py-2 bg-green-600 text-white text-sm font-semibold rounded-lg hover:bg-green-700">
              Ver resultado →
            </button>
          )}
        </div>
      </div>
    );
  }

  // resultado
  return (
    <div className="p-8 max-w-3xl mx-auto space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">📊 Resultado do Diagnóstico</h1>
        <p className="text-sm text-gray-500 mt-1">Baseado nas {respondidas} respostas fornecidas</p>
      </div>

      {/* score geral */}
      <div className="card p-8 text-center">
        <div className={`inline-flex flex-col items-center justify-center w-28 h-28 rounded-full text-3xl font-black border-4 ${nivelColor} border-current`}>
          {scoreTotal}
          <span className="text-xs font-semibold mt-0.5">/100</span>
        </div>
        <h2 className="text-xl font-bold text-gray-900 mt-4">Nível: {nivel}</h2>
        <p className="text-sm text-gray-500 mt-1">
          {scoreTotal >= 80 ? 'Parabéns! Sua organização é referência em governança.' :
           scoreTotal >= 65 ? 'Ótimo progresso! Pequenos ajustes vão te levar ao nível Referência.' :
           scoreTotal >= 45 ? 'Você está no caminho certo. Foque nas dimensões mais fracas.' :
           'Há bastante espaço para evolução. Comece pela governança e compliance.'}
        </p>
      </div>

      {/* scores por dimensão */}
      <div className="card p-6 space-y-4">
        <h2 className="text-base font-semibold text-gray-900">Resultado por dimensão</h2>
        {scores.map((s) => (
          <ScoreBar key={s.id} score={s.pts} max={s.max} label={`${s.icone} ${s.titulo}`} />
        ))}
      </div>

      {/* plano de ação */}
      <div className="card p-6 space-y-4">
        <h2 className="text-base font-semibold text-gray-900">🎯 Plano de Ação Prioritário</h2>
        <div className="space-y-2">
          {DIAGNOSTICO_DIMENSOES.map((d) => {
            const pts = d.perguntas.reduce((s, p) => s + (respostas[p.id] ? p.peso : 0), 0);
            const max = d.perguntas.reduce((s, p) => s + p.peso, 0);
            const nao = d.perguntas.filter((p) => respostas[p.id] === false);
            if (nao.length === 0) return null;
            return (
              <div key={d.id} className={`rounded-xl p-4 ${pts / max < 0.5 ? 'bg-red-50 border border-red-200' : 'bg-yellow-50 border border-yellow-200'}`}>
                <p className="text-sm font-semibold text-gray-800 mb-2">{d.icone} {d.titulo} — {nao.length} ponto(s) a melhorar</p>
                <ul className="space-y-1">
                  {nao.map((p) => (
                    <li key={p.id} className="text-xs text-gray-600 flex items-start gap-1">
                      <span className="text-red-400 shrink-0">→</span> {p.texto}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>

      {/* trilha sugerida */}
      {trilhaSugerida && (
        <div className="card p-6 bg-brand-50 border-brand-200">
          <h2 className="text-base font-semibold text-brand-900 mb-3">🎓 Trilha Recomendada: {trilhaSugerida.titulo}</h2>
          <p className="text-sm text-brand-700 mb-4">Baseada na sua dimensão mais fraca: {dimFraca?.titulo}</p>
          <div className="space-y-2">
            {trilhaSugerida.modulos.map((m, i) => (
              <div key={i} className="flex items-center gap-3 bg-white rounded-lg p-3 border border-brand-100">
                <span className="text-lg">{m.tipo === 'curso' ? '📚' : m.tipo === 'mentoria' ? '🤝' : '📄'}</span>
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900">{m.titulo}</p>
                  <p className="text-xs text-gray-400">{m.tipo} · {m.duracao}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 flex items-center justify-between">
            <span className="text-sm font-bold text-brand-700">Trilha completa: R$ {trilhaSugerida.preco.toLocaleString('pt-BR')}</span>
            <button className="px-4 py-2 bg-brand-600 text-white text-sm font-medium rounded-lg hover:bg-brand-700 transition-colors">
              Contratar trilha
            </button>
          </div>
        </div>
      )}

      <div className="flex justify-between">
        <button onClick={() => { setStep('intro'); setRespostas({}); setDimIdx(0); }}
          className="px-4 py-2 border border-gray-200 text-sm text-gray-600 rounded-lg hover:bg-gray-50">
          Refazer diagnóstico
        </button>
        <Link href="/organizacoes" className="px-4 py-2 bg-brand-600 text-white text-sm font-medium rounded-lg hover:bg-brand-700">
          Ver meu perfil →
        </Link>
      </div>
    </div>
  );
}
