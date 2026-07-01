'use client';

import { useState } from 'react';
import Link from 'next/link';

const TIPOS_EVIDENCIA = ['foto', 'video', 'documento'] as const;

function Field({ label, required, children }: { label: string; required?: boolean; children: React.ReactNode }) {
  return (
    <div className="space-y-1">
      <label className="block text-sm font-medium text-gray-700">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      {children}
    </div>
  );
}

const inputCls = 'w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-transparent';
const textareaCls = `${inputCls} resize-none`;

export default function NovoRelatorioPage({ projetoId }: { projetoId: string }) {
  const [submitted, setSubmitted] = useState(false);

  const [form, setForm] = useState({
    titulo: '',
    tipo: 'trimestral',
    periodoInicio: '',
    periodoFim: '',
    narrativa: '',
  });

  const [indicadores, setIndicadores] = useState([
    { nome: '', meta: '', realizado: '', unidade: '' },
  ]);

  const [financeiro, setFinanceiro] = useState({
    despesasPeriodo: '',
    narrativaFinanceira: '',
  });

  const [evidencias, setEvidencias] = useState([
    { tipo: 'foto' as typeof TIPOS_EVIDENCIA[number], descricao: '', arquivo: '' },
  ]);

  const [marco, setMarco] = useState('');

  function updateInd(idx: number, field: string, value: string) {
    setIndicadores(arr => arr.map((x, i) => i === idx ? { ...x, [field]: value } : x));
  }

  function updateEv(idx: number, field: string, value: string) {
    setEvidencias(arr => arr.map((x, i) => i === idx ? { ...x, [field]: value } : x));
  }

  if (submitted) {
    return (
      <div className="p-8 flex items-center justify-center min-h-96">
        <div className="card p-12 text-center max-w-md">
          <div className="text-5xl mb-4">📋</div>
          <h2 className="text-xl font-bold text-gray-900 mb-2">Relatório enviado!</h2>
          <p className="text-sm text-gray-500 mb-6">
            O relatório foi submetido e será analisado pela equipe de auditoria.
            As evidências ficarão disponíveis para os investidores.
          </p>
          <div className="flex gap-3 justify-center">
            <Link href={`/projetos/${projetoId}`}
              className="px-4 py-2 bg-brand-600 text-white text-sm font-medium rounded-lg hover:bg-brand-700 transition-colors">
              Ver projeto
            </Link>
            <button onClick={() => setSubmitted(false)}
              className="px-4 py-2 border border-gray-200 text-sm text-gray-600 rounded-lg hover:bg-gray-50">
              Novo relatório
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-8 max-w-3xl mx-auto space-y-8">
      {/* header */}
      <div>
        <Link href={`/projetos/${projetoId}`} className="text-xs text-gray-400 hover:text-brand-600">
          ← Voltar ao projeto
        </Link>
        <h1 className="text-2xl font-bold text-gray-900 mt-1">Novo Relatório Periódico</h1>
        <p className="text-sm text-gray-500 mt-1">
          Registre o progresso do período com indicadores, evidências e dados financeiros.
        </p>
      </div>

      {/* ── Identificação ──────────────────────────────────────────── */}
      <div className="card p-6 space-y-5">
        <h2 className="text-base font-semibold text-gray-900 border-b border-gray-100 pb-3">📋 Identificação do Relatório</h2>

        <Field label="Título do relatório" required>
          <input className={inputCls} placeholder="Ex: Relatório Trimestral Q2/2025" value={form.titulo}
            onChange={e => setForm(f => ({ ...f, titulo: e.target.value }))} />
        </Field>

        <div className="grid grid-cols-3 gap-4">
          <Field label="Tipo" required>
            <select className={inputCls} value={form.tipo} onChange={e => setForm(f => ({ ...f, tipo: e.target.value }))}>
              <option value="D0">D0 — Linha de base</option>
              <option value="mensal">Mensal</option>
              <option value="trimestral">Trimestral</option>
              <option value="quadrimestral">Quadrimestral</option>
              <option value="semestral">Semestral</option>
              <option value="anual">Anual</option>
              <option value="final">Relatório Final</option>
            </select>
          </Field>
          <Field label="Início do período" required>
            <input className={inputCls} type="date" value={form.periodoInicio}
              onChange={e => setForm(f => ({ ...f, periodoInicio: e.target.value }))} />
          </Field>
          <Field label="Fim do período" required>
            <input className={inputCls} type="date" value={form.periodoFim}
              onChange={e => setForm(f => ({ ...f, periodoFim: e.target.value }))} />
          </Field>
        </div>

        <Field label="Marco associado (opcional)">
          <select className={inputCls} value={marco} onChange={e => setMarco(e.target.value)}>
            <option value="">Nenhum</option>
            <option value="m1">M1 — Linha de base</option>
            <option value="m2">M2 — 50 nascentes</option>
            <option value="m3">M3 — 100 nascentes</option>
            <option value="m4">M4 — Encerramento</option>
          </select>
        </Field>
      </div>

      {/* ── Narrativa ──────────────────────────────────────────────── */}
      <div className="card p-6 space-y-4">
        <h2 className="text-base font-semibold text-gray-900 border-b border-gray-100 pb-3">✍️ Narrativa do Período</h2>

        <Field label="Resumo das atividades realizadas" required>
          <textarea className={textareaCls} rows={5}
            placeholder="Descreva as principais atividades realizadas no período, avanços, desafios encontrados e como foram superados…"
            value={form.narrativa} onChange={e => setForm(f => ({ ...f, narrativa: e.target.value }))} />
        </Field>
      </div>

      {/* ── Indicadores ────────────────────────────────────────────── */}
      <div className="card p-6 space-y-5">
        <h2 className="text-base font-semibold text-gray-900 border-b border-gray-100 pb-3">📊 Indicadores do Período</h2>

        {indicadores.map((ind, idx) => (
          <div key={idx} className="grid grid-cols-4 gap-3 items-end relative">
            <Field label={idx === 0 ? 'Indicador' : ''}>
              <input className={inputCls} placeholder="Nascentes restauradas" value={ind.nome}
                onChange={e => updateInd(idx, 'nome', e.target.value)} />
            </Field>
            <Field label={idx === 0 ? 'Meta' : ''}>
              <input className={inputCls} type="number" placeholder="150" value={ind.meta}
                onChange={e => updateInd(idx, 'meta', e.target.value)} />
            </Field>
            <Field label={idx === 0 ? 'Realizado' : ''}>
              <input className={inputCls} type="number" placeholder="93" value={ind.realizado}
                onChange={e => updateInd(idx, 'realizado', e.target.value)} />
            </Field>
            <div className="flex gap-2 items-end">
              <Field label={idx === 0 ? 'Unidade' : ''}>
                <input className={inputCls} placeholder="unid." value={ind.unidade}
                  onChange={e => updateInd(idx, 'unidade', e.target.value)} />
              </Field>
              {idx > 0 && (
                <button onClick={() => setIndicadores(arr => arr.filter((_, i) => i !== idx))}
                  className="pb-2 text-red-400 hover:text-red-600 shrink-0">✕</button>
              )}
            </div>
          </div>
        ))}

        {indicadores.some(i => i.nome && i.realizado && i.meta) && (
          <div className="bg-gray-50 rounded-xl p-4 space-y-2">
            {indicadores.filter(i => i.nome && i.meta).map((ind, i) => {
              const pct = Math.min(100, Math.round((Number(ind.realizado) / Number(ind.meta)) * 100));
              return (
                <div key={i}>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-gray-700">{ind.nome}</span>
                    <span className="font-medium">{ind.realizado}/{ind.meta} {ind.unidade} ({pct}%)</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-brand-500 rounded-full" style={{ width: `${pct}%` }} />
                  </div>
                </div>
              );
            })}
          </div>
        )}

        <button onClick={() => setIndicadores(arr => [...arr, { nome: '', meta: '', realizado: '', unidade: '' }])}
          className="w-full py-2 border-2 border-dashed border-gray-200 rounded-xl text-sm text-gray-400 hover:border-brand-300 hover:text-brand-600 transition-colors">
          + Adicionar indicador
        </button>
      </div>

      {/* ── Financeiro ─────────────────────────────────────────────── */}
      <div className="card p-6 space-y-4">
        <h2 className="text-base font-semibold text-gray-900 border-b border-gray-100 pb-3">💰 Financeiro do Período</h2>

        <Field label="Total de despesas no período (R$)" required>
          <input className={inputCls} type="number" min={0} placeholder="14200" value={financeiro.despesasPeriodo}
            onChange={e => setFinanceiro(f => ({ ...f, despesasPeriodo: e.target.value }))} />
        </Field>

        <Field label="Narrativa financeira">
          <textarea className={textareaCls} rows={3}
            placeholder="Descreva brevemente a utilização dos recursos no período. Ex: gastos com pessoal, insumos adquiridos, etc."
            value={financeiro.narrativaFinanceira}
            onChange={e => setFinanceiro(f => ({ ...f, narrativaFinanceira: e.target.value }))} />
        </Field>

        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4">
          <p className="text-xs font-semibold text-yellow-800 mb-1">📎 Documentos fiscais</p>
          <p className="text-xs text-yellow-700">
            Anexe as Notas Fiscais e recibos na seção de Evidências abaixo, selecionando o tipo "documento".
          </p>
        </div>
      </div>

      {/* ── Evidências ─────────────────────────────────────────────── */}
      <div className="card p-6 space-y-5">
        <h2 className="text-base font-semibold text-gray-900 border-b border-gray-100 pb-3">🗂️ Evidências</h2>
        <p className="text-sm text-gray-500">
          Adicione fotos, vídeos e documentos que comprovem as atividades realizadas no período.
        </p>

        {evidencias.map((ev, idx) => (
          <div key={idx} className="border border-gray-200 rounded-xl p-4 space-y-3 relative">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-brand-700">Evidência {idx + 1}</span>
              {idx > 0 && (
                <button onClick={() => setEvidencias(arr => arr.filter((_, i) => i !== idx))}
                  className="text-xs text-red-400 hover:text-red-600">Remover</button>
              )}
            </div>

            <div className="grid grid-cols-3 gap-3">
              <Field label="Tipo">
                <select className={inputCls} value={ev.tipo}
                  onChange={e => updateEv(idx, 'tipo', e.target.value)}>
                  {TIPOS_EVIDENCIA.map(t => (
                    <option key={t} value={t}>
                      {t === 'foto' ? '📸 Foto' : t === 'video' ? '🎥 Vídeo' : '📄 Documento'}
                    </option>
                  ))}
                </select>
              </Field>
              <Field label="Descrição" >
                <input className={inputCls} placeholder="Ex: Foto da nascente MT-047" value={ev.descricao}
                  onChange={e => updateEv(idx, 'descricao', e.target.value)} />
              </Field>
              <Field label={ev.tipo === 'foto' ? 'Arquivo (simulado)' : 'URL / Link'}>
                <input className={inputCls}
                  placeholder={ev.tipo === 'foto' ? 'foto_nascente.jpg' : 'https://drive.google.com/…'}
                  value={ev.arquivo} onChange={e => updateEv(idx, 'arquivo', e.target.value)} />
              </Field>
            </div>

            {ev.tipo === 'foto' && (
              <div className="mt-2 flex items-center justify-center border-2 border-dashed border-gray-200 rounded-lg h-20 bg-gray-50 cursor-pointer hover:border-brand-300 hover:bg-brand-50 transition-colors">
                <p className="text-xs text-gray-400">📸 Clique para selecionar arquivo ou arraste aqui</p>
              </div>
            )}
          </div>
        ))}

        <button onClick={() => setEvidencias(arr => [...arr, { tipo: 'foto', descricao: '', arquivo: '' }])}
          className="w-full py-2 border-2 border-dashed border-gray-200 rounded-xl text-sm text-gray-400 hover:border-brand-300 hover:text-brand-600 transition-colors">
          + Adicionar evidência
        </button>
      </div>

      {/* ── Submeter ───────────────────────────────────────────────── */}
      <div className="flex items-center justify-between">
        <Link href={`/projetos/${projetoId}`}
          className="px-4 py-2 border border-gray-200 text-sm text-gray-600 rounded-lg hover:bg-gray-50">
          Cancelar
        </Link>
        <button
          onClick={() => setSubmitted(true)}
          className="px-6 py-2 bg-brand-600 text-white text-sm font-medium rounded-lg hover:bg-brand-700 transition-colors"
        >
          Enviar relatório →
        </button>
      </div>
    </div>
  );
}
 
