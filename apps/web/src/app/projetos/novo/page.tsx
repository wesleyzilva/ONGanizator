'use client';

import { useState } from 'react';
import Link from 'next/link';

const STEPS = [
  { id: 1, titulo: 'Dados Básicos', icon: '📋' },
  { id: 2, titulo: 'Objetivos Estratégicos', icon: '🎯' },
  { id: 3, titulo: 'Metas e Indicadores', icon: '📈' },
  { id: 4, titulo: 'Orçamento', icon: '💰' },
  { id: 5, titulo: 'Cronograma', icon: '🏁' },
];

const ODS_LIST = [
  { num: 1, label: 'Erradicação da Pobreza' },
  { num: 2, label: 'Fome Zero' },
  { num: 3, label: 'Saúde e Bem-Estar' },
  { num: 4, label: 'Educação de Qualidade' },
  { num: 5, label: 'Igualdade de Gênero' },
  { num: 6, label: 'Água Potável e Saneamento' },
  { num: 7, label: 'Energia Limpa' },
  { num: 8, label: 'Trabalho Decente e Crescimento Econômico' },
  { num: 9, label: 'Indústria, Inovação e Infraestrutura' },
  { num: 10, label: 'Redução das Desigualdades' },
  { num: 11, label: 'Cidades Sustentáveis' },
  { num: 12, label: 'Consumo e Produção Responsáveis' },
  { num: 13, label: 'Ação Contra a Mudança do Clima' },
  { num: 14, label: 'Vida na Água' },
  { num: 15, label: 'Vida Terrestre' },
  { num: 16, label: 'Paz, Justiça e Instituições Eficazes' },
  { num: 17, label: 'Parcerias e Meios de Implementação' },
];

const FREQUENCIAS = ['mensal', 'bimestral', 'trimestral', 'semestral', 'anual'];

function StepIndicator({ step, current }: { step: typeof STEPS[0]; current: number }) {
  const done = current > step.id;
  const active = current === step.id;
  return (
    <div className="flex flex-col items-center gap-1">
      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-colors ${
        done ? 'bg-brand-600 text-white' : active ? 'bg-brand-600 text-white ring-4 ring-brand-100' : 'bg-gray-100 text-gray-400'
      }`}>
        {done ? '✓' : step.id}
      </div>
      <span className={`text-xs hidden md:block ${active ? 'text-brand-700 font-semibold' : 'text-gray-400'}`}>
        {step.titulo}
      </span>
    </div>
  );
}

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

export default function NovoProjetoPage() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);

  // ── estado do formulário ──────────────────────────────────────────
  const [dados, setDados] = useState({
    titulo: '',
    descricao: '',
    organizacao: '',
    estado: '',
    cidade: '',
    dataInicio: '',
    dataFim: '',
    categoria: '',
    ods: [] as number[],
    beneficiarios: '',
  });

  const [objetivos, setObjetivos] = useState([
    { titulo: '', descricao: '', ods: [] as number[] },
  ]);

  const [metas, setMetas] = useState([
    { descricao: '', indicador: '', linhaDeBase: '', alvo: '', unidade: '', prazo: '', frequencia: 'trimestral' },
  ]);

  const [orcamento, setOrcamento] = useState({
    total: '',
    rubricas: [
      { nome: '', percentual: '', valor: '' },
    ],
  });

  const [marcos, setMarcos] = useState([
    { titulo: '', descricao: '', prazo: '', valorLiberado: '' },
  ]);

  // ── helpers ───────────────────────────────────────────────────────
  const toggleOds = (num: number) => {
    setDados(d => ({
      ...d,
      ods: d.ods.includes(num) ? d.ods.filter(o => o !== num) : [...d.ods, num],
    }));
  };

  function addItem<T>(setter: React.Dispatch<React.SetStateAction<T[]>>, item: T) {
    setter(arr => [...arr, item]);
  }

  function removeItem<T>(setter: React.Dispatch<React.SetStateAction<T[]>>, idx: number) {
    setter(arr => arr.filter((_, i) => i !== idx));
  }

  function updateItem<T>(setter: React.Dispatch<React.SetStateAction<T[]>>, idx: number, field: keyof T, value: any) {
    setter(arr => arr.map((item, i) => i === idx ? { ...item, [field]: value } : item));
  }

  if (submitted) {
    return (
      <div className="p-8 flex items-center justify-center min-h-96">
        <div className="card p-12 text-center max-w-md">
          <div className="text-5xl mb-4">🎉</div>
          <h2 className="text-xl font-bold text-gray-900 mb-2">Projeto enviado para revisão!</h2>
          <p className="text-sm text-gray-500 mb-6">
            Nossa equipe analisará sua proposta e entrará em contato em até 5 dias úteis.
            Você acompanhe o status em <strong>Projetos</strong>.
          </p>
          <div className="flex gap-3 justify-center">
            <Link href="/projetos" className="px-4 py-2 bg-brand-600 text-white text-sm font-medium rounded-lg hover:bg-brand-700 transition-colors">
              Ver projetos
            </Link>
            <button onClick={() => { setSubmitted(false); setStep(1); }} className="px-4 py-2 border border-gray-200 text-sm text-gray-600 rounded-lg hover:bg-gray-50">
              Novo projeto
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
        <Link href="/projetos" className="text-xs text-gray-400 hover:text-brand-600">← Projetos</Link>
        <h1 className="text-2xl font-bold text-gray-900 mt-1">Cadastrar Novo Projeto</h1>
        <p className="text-sm text-gray-500 mt-1">Preencha todas as etapas para submeter seu projeto à plataforma.</p>
      </div>

      {/* step indicator */}
      <div className="flex items-center gap-2">
        {STEPS.map((s, i) => (
          <div key={s.id} className="flex items-center flex-1">
            <StepIndicator step={s} current={step} />
            {i < STEPS.length - 1 && (
              <div className={`flex-1 h-0.5 mx-2 ${step > s.id ? 'bg-brand-400' : 'bg-gray-200'}`} />
            )}
          </div>
        ))}
      </div>

      {/* ── Step 1: Dados Básicos ─────────────────────────────────────── */}
      {step === 1 && (
        <div className="card p-6 space-y-5">
          <h2 className="text-lg font-semibold text-gray-900">📋 Dados Básicos</h2>

          <Field label="Título do Projeto" required>
            <input className={inputCls} placeholder="Ex: Restauração de Nascentes do Cerrado" value={dados.titulo}
              onChange={e => setDados(d => ({ ...d, titulo: e.target.value }))} />
          </Field>

          <Field label="Descrição executiva" required>
            <textarea className={textareaCls} rows={3} placeholder="Descreva em 2-3 frases o que é o projeto e qual problema resolve."
              value={dados.descricao} onChange={e => setDados(d => ({ ...d, descricao: e.target.value }))} />
          </Field>

          <div className="grid grid-cols-2 gap-4">
            <Field label="Organização responsável" required>
              <select className={inputCls} value={dados.organizacao} onChange={e => setDados(d => ({ ...d, organizacao: e.target.value }))}>
                <option value="">Selecione…</option>
                <option>Pantanal Vivo</option>
                <option>Brigadas Pantanal</option>
                <option>Sementes Cerrado</option>
                <option>SocialTech</option>
                <option>Água Limpa</option>
                <option>Recicla Solidária</option>
                <option>Raízes</option>
                <option>EduImpacto</option>
              </select>
            </Field>
            <Field label="Categoria / Área" required>
              <select className={inputCls} value={dados.categoria} onChange={e => setDados(d => ({ ...d, categoria: e.target.value }))}>
                <option value="">Selecione…</option>
                <option>Meio Ambiente</option>
                <option>Educação</option>
                <option>Saúde</option>
                <option>Agricultura Familiar</option>
                <option>Saneamento</option>
                <option>Reciclagem</option>
                <option>Tecnologia Social</option>
                <option>Segurança Alimentar</option>
              </select>
            </Field>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <Field label="Estado">
              <input className={inputCls} placeholder="MT" maxLength={2} value={dados.estado}
                onChange={e => setDados(d => ({ ...d, estado: e.target.value.toUpperCase() }))} />
            </Field>
            <Field label="Cidade">
              <input className={inputCls} placeholder="Cuiabá" value={dados.cidade}
                onChange={e => setDados(d => ({ ...d, cidade: e.target.value }))} />
            </Field>
            <Field label="Nº estimado de beneficiários">
              <input className={inputCls} type="number" min={0} placeholder="500" value={dados.beneficiarios}
                onChange={e => setDados(d => ({ ...d, beneficiarios: e.target.value }))} />
            </Field>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Field label="Data de início" required>
              <input className={inputCls} type="date" value={dados.dataInicio}
                onChange={e => setDados(d => ({ ...d, dataInicio: e.target.value }))} />
            </Field>
            <Field label="Data de encerramento prevista" required>
              <input className={inputCls} type="date" value={dados.dataFim}
                onChange={e => setDados(d => ({ ...d, dataFim: e.target.value }))} />
            </Field>
          </div>

          <Field label="ODS vinculados" required>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
              {ODS_LIST.map(o => (
                <label key={o.num} className={`flex items-center gap-2 px-3 py-2 rounded-lg border cursor-pointer text-xs transition-colors ${
                  dados.ods.includes(o.num) ? 'border-brand-400 bg-brand-50 text-brand-700' : 'border-gray-200 hover:bg-gray-50'
                }`}>
                  <input type="checkbox" className="hidden" checked={dados.ods.includes(o.num)} onChange={() => toggleOds(o.num)} />
                  <span className="font-bold">ODS {o.num}</span>
                  <span className="text-gray-500 truncate">{o.label}</span>
                </label>
              ))}
            </div>
          </Field>
        </div>
      )}

      {/* ── Step 2: Objetivos Estratégicos ───────────────────────────── */}
      {step === 2 && (
        <div className="card p-6 space-y-5">
          <h2 className="text-lg font-semibold text-gray-900">🎯 Objetivos Estratégicos</h2>
          <p className="text-sm text-gray-500">Defina 1 a 3 objetivos que justificam o projeto e alinhe cada um aos ODS.</p>

          {objetivos.map((obj, idx) => (
            <div key={idx} className="border border-gray-200 rounded-xl p-5 space-y-4 relative">
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-brand-700">Objetivo {idx + 1}</span>
                {idx > 0 && (
                  <button onClick={() => removeItem(setObjetivos, idx)} className="text-xs text-red-400 hover:text-red-600">
                    Remover
                  </button>
                )}
              </div>

              <Field label="Título do objetivo" required>
                <input className={inputCls} placeholder="Ex: Restaurar biodiversidade hídrica" value={obj.titulo}
                  onChange={e => updateItem(setObjetivos, idx, 'titulo', e.target.value)} />
              </Field>

              <Field label="Justificativa / Descrição" required>
                <textarea className={textareaCls} rows={3}
                  placeholder="Por que este objetivo é estratégico? Qual problema ele endereça?" value={obj.descricao}
                  onChange={e => updateItem(setObjetivos, idx, 'descricao', e.target.value)} />
              </Field>

              <Field label="ODS vinculados a este objetivo">
                <div className="flex flex-wrap gap-2">
                  {ODS_LIST.map(o => (
                    <label key={o.num} className={`flex items-center gap-1 px-2 py-1 rounded border cursor-pointer text-xs transition-colors ${
                      obj.ods.includes(o.num) ? 'border-brand-400 bg-brand-50 text-brand-700' : 'border-gray-200 hover:bg-gray-50'
                    }`}>
                      <input type="checkbox" className="hidden" checked={obj.ods.includes(o.num)}
                        onChange={() => updateItem(setObjetivos, idx, 'ods',
                          obj.ods.includes(o.num) ? obj.ods.filter(x => x !== o.num) : [...obj.ods, o.num])} />
                      ODS {o.num}
                    </label>
                  ))}
                </div>
              </Field>
            </div>
          ))}

          {objetivos.length < 3 && (
            <button onClick={() => addItem(setObjetivos, { titulo: '', descricao: '', ods: [] as number[] })}
              className="w-full py-2 border-2 border-dashed border-gray-200 rounded-xl text-sm text-gray-400 hover:border-brand-300 hover:text-brand-600 transition-colors">
              + Adicionar objetivo
            </button>
          )}
        </div>
      )}

      {/* ── Step 3: Metas e Indicadores ──────────────────────────────── */}
      {step === 3 && (
        <div className="card p-6 space-y-5">
          <h2 className="text-lg font-semibold text-gray-900">📈 Metas e Indicadores (SMART)</h2>
          <p className="text-sm text-gray-500">Cada meta precisa ser Específica, Mensurável, Alcançável, Relevante e Temporal.</p>

          {metas.map((m, idx) => (
            <div key={idx} className="border border-gray-200 rounded-xl p-5 space-y-4 relative">
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-brand-700">Meta {idx + 1}</span>
                {idx > 0 && (
                  <button onClick={() => removeItem(setMetas, idx)} className="text-xs text-red-400 hover:text-red-600">Remover</button>
                )}
              </div>

              <Field label="Descrição da meta" required>
                <input className={inputCls} placeholder="Ex: Restaurar 150 nascentes na Bacia do Alto Paraguai" value={m.descricao}
                  onChange={e => updateItem(setMetas, idx, 'descricao', e.target.value)} />
              </Field>

              <div className="grid grid-cols-2 gap-4">
                <Field label="Indicador (nome)" required>
                  <input className={inputCls} placeholder="Ex: Nascentes restauradas" value={m.indicador}
                    onChange={e => updateItem(setMetas, idx, 'indicador', e.target.value)} />
                </Field>
                <Field label="Unidade de medida" required>
                  <input className={inputCls} placeholder="Ex: nascentes, %, R$, pessoas" value={m.unidade}
                    onChange={e => updateItem(setMetas, idx, 'unidade', e.target.value)} />
                </Field>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <Field label="Linha de base">
                  <input className={inputCls} type="number" placeholder="0" value={m.linhaDeBase}
                    onChange={e => updateItem(setMetas, idx, 'linhaDeBase', e.target.value)} />
                </Field>
                <Field label="Alvo / Meta" required>
                  <input className={inputCls} type="number" placeholder="150" value={m.alvo}
                    onChange={e => updateItem(setMetas, idx, 'alvo', e.target.value)} />
                </Field>
                <Field label="Prazo" required>
                  <input className={inputCls} placeholder="Dez/2025" value={m.prazo}
                    onChange={e => updateItem(setMetas, idx, 'prazo', e.target.value)} />
                </Field>
              </div>

              <Field label="Frequência de medição">
                <select className={inputCls} value={m.frequencia}
                  onChange={e => updateItem(setMetas, idx, 'frequencia', e.target.value)}>
                  {FREQUENCIAS.map(f => <option key={f}>{f}</option>)}
                </select>
              </Field>
            </div>
          ))}

          <button onClick={() => addItem(setMetas, { descricao: '', indicador: '', linhaDeBase: '', alvo: '', unidade: '', prazo: '', frequencia: 'trimestral' })}
            className="w-full py-2 border-2 border-dashed border-gray-200 rounded-xl text-sm text-gray-400 hover:border-brand-300 hover:text-brand-600 transition-colors">
            + Adicionar meta
          </button>
        </div>
      )}

      {/* ── Step 4: Orçamento ────────────────────────────────────────── */}
      {step === 4 && (
        <div className="card p-6 space-y-5">
          <h2 className="text-lg font-semibold text-gray-900">💰 Orçamento Detalhado</h2>
          <p className="text-sm text-gray-500">Informe o total e a distribuição por rubrica. O percentual de cada rubrica deve somar 100%.</p>

          <Field label="Valor total do projeto (R$)" required>
            <input className={inputCls} type="number" min={0} placeholder="500000" value={orcamento.total}
              onChange={e => setOrcamento(o => ({ ...o, total: e.target.value }))} />
          </Field>

          <div className="space-y-3">
            <p className="text-sm font-medium text-gray-700">Rubricas orçamentárias</p>
            {orcamento.rubricas.map((r, idx) => (
              <div key={idx} className="grid grid-cols-3 gap-3 items-end">
                <Field label={idx === 0 ? 'Rubrica' : ''}>
                  <input className={inputCls} placeholder="Ex: Pessoal técnico" value={r.nome}
                    onChange={e => setOrcamento(o => ({ ...o, rubricas: o.rubricas.map((x, i) => i === idx ? { ...x, nome: e.target.value } : x) }))} />
                </Field>
                <Field label={idx === 0 ? '% do total' : ''}>
                  <input className={inputCls} type="number" min={0} max={100} placeholder="35"
                    value={r.percentual}
                    onChange={e => setOrcamento(o => ({ ...o, rubricas: o.rubricas.map((x, i) => i === idx ? { ...x, percentual: e.target.value, valor: String(Math.round(Number(o.total) * Number(e.target.value) / 100)) } : x) }))} />
                </Field>
                <div className="flex gap-2 items-end">
                  <Field label={idx === 0 ? 'Valor (R$)' : ''}>
                    <input className={inputCls} type="number" placeholder="175000" value={r.valor}
                      onChange={e => setOrcamento(o => ({ ...o, rubricas: o.rubricas.map((x, i) => i === idx ? { ...x, valor: e.target.value } : x) }))} />
                  </Field>
                  {idx > 0 && (
                    <button onClick={() => setOrcamento(o => ({ ...o, rubricas: o.rubricas.filter((_, i) => i !== idx) }))}
                      className="pb-2 text-red-400 hover:text-red-600 text-sm shrink-0">✕</button>
                  )}
                </div>
              </div>
            ))}
            <button onClick={() => setOrcamento(o => ({ ...o, rubricas: [...o.rubricas, { nome: '', percentual: '', valor: '' }] }))}
              className="w-full py-2 border-2 border-dashed border-gray-200 rounded-xl text-sm text-gray-400 hover:border-brand-300 hover:text-brand-600 transition-colors">
              + Adicionar rubrica
            </button>
          </div>

          {orcamento.total && (
            <div className="bg-brand-50 rounded-xl p-4">
              <p className="text-sm font-semibold text-brand-800 mb-2">Resumo orçamentário</p>
              <div className="space-y-1">
                {orcamento.rubricas.filter(r => r.nome).map((r, i) => (
                  <div key={i} className="flex justify-between text-sm">
                    <span className="text-gray-700">{r.nome}</span>
                    <span className="font-medium">
                      {r.valor ? `R$ ${Number(r.valor).toLocaleString('pt-BR')}` : '—'}{' '}
                      {r.percentual && <span className="text-gray-400">({r.percentual}%)</span>}
                    </span>
                  </div>
                ))}
                <div className="flex justify-between text-sm font-bold border-t border-brand-200 pt-2 mt-2">
                  <span>Total</span>
                  <span>R$ {Number(orcamento.total).toLocaleString('pt-BR')}</span>
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* ── Step 5: Cronograma e Marcos ──────────────────────────────── */}
      {step === 5 && (
        <div className="card p-6 space-y-5">
          <h2 className="text-lg font-semibold text-gray-900">🏁 Cronograma e Marcos</h2>
          <p className="text-sm text-gray-500">
            Marcos são pontos de verificação que liberam parcelas financeiras. Cada marco deve ter evidências obrigatórias.
          </p>

          {marcos.map((m, idx) => (
            <div key={idx} className="border border-gray-200 rounded-xl p-5 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-brand-700">Marco {idx + 1}</span>
                {idx > 0 && (
                  <button onClick={() => removeItem(setMarcos, idx)} className="text-xs text-red-400 hover:text-red-600">Remover</button>
                )}
              </div>

              <Field label="Título do marco" required>
                <input className={inputCls} placeholder="Ex: Linha de base + equipe contratada" value={m.titulo}
                  onChange={e => updateItem(setMarcos, idx, 'titulo', e.target.value)} />
              </Field>

              <Field label="Descrição / Entregável">
                <textarea className={textareaCls} rows={2}
                  placeholder="O que precisa ser entregue/demonstrado para este marco ser validado?"
                  value={m.descricao} onChange={e => updateItem(setMarcos, idx, 'descricao', e.target.value)} />
              </Field>

              <div className="grid grid-cols-2 gap-4">
                <Field label="Prazo previsto" required>
                  <input className={inputCls} type="date" value={m.prazo}
                    onChange={e => updateItem(setMarcos, idx, 'prazo', e.target.value)} />
                </Field>
                <Field label="Valor a liberar (R$)" required>
                  <input className={inputCls} type="number" min={0} placeholder="150000" value={m.valorLiberado}
                    onChange={e => updateItem(setMarcos, idx, 'valorLiberado', e.target.value)} />
                </Field>
              </div>
            </div>
          ))}

          <button onClick={() => addItem(setMarcos, { titulo: '', descricao: '', prazo: '', valorLiberado: '' })}
            className="w-full py-2 border-2 border-dashed border-gray-200 rounded-xl text-sm text-gray-400 hover:border-brand-300 hover:text-brand-600 transition-colors">
            + Adicionar marco
          </button>

          {/* resumo marcos */}
          {marcos.some(m => m.titulo) && (
            <div className="bg-gray-50 rounded-xl p-4">
              <p className="text-sm font-semibold text-gray-700 mb-2">Cronograma resumido</p>
              <div className="space-y-1">
                {marcos.filter(m => m.titulo).map((m, i) => (
                  <div key={i} className="flex justify-between text-sm">
                    <span className="text-gray-700">M{i + 1}: {m.titulo}</span>
                    <span className="text-gray-500 text-xs">
                      {m.prazo && new Date(m.prazo).toLocaleDateString('pt-BR')}{' '}
                      {m.valorLiberado && <span className="text-green-700 font-medium">R$ {Number(m.valorLiberado).toLocaleString('pt-BR')}</span>}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* ── Navegação ─────────────────────────────────────────────────── */}
      <div className="flex items-center justify-between">
        <button
          onClick={() => setStep(s => Math.max(1, s - 1))}
          disabled={step === 1}
          className="px-4 py-2 border border-gray-200 text-sm text-gray-600 rounded-lg hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed"
        >
          ← Anterior
        </button>

        <span className="text-xs text-gray-400">Etapa {step} de {STEPS.length}</span>

        {step < STEPS.length ? (
          <button
            onClick={() => setStep(s => Math.min(STEPS.length, s + 1))}
            className="px-4 py-2 bg-brand-600 text-white text-sm font-medium rounded-lg hover:bg-brand-700 transition-colors"
          >
            Próximo →
          </button>
        ) : (
          <button
            onClick={() => setSubmitted(true)}
            className="px-5 py-2 bg-green-600 text-white text-sm font-medium rounded-lg hover:bg-green-700 transition-colors"
          >
            ✅ Enviar para revisão
          </button>
        )}
      </div>
    </div>
  );
}
