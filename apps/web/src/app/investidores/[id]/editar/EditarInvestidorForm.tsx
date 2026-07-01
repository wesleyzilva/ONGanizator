'use client';
import { useState } from 'react';
import { INVESTORS } from '@/lib/mockData';
import Link from 'next/link';

const inputCls = 'w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-400';
const ODS_LIST = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17];
const ESTADOS = ['AC','AL','AP','AM','BA','CE','DF','ES','GO','MA','MT','MS','MG','PA','PB','PR','PE','PI','RJ','RN','RS','RO','RR','SC','SP','SE','TO'];

function Field({ label, required, children }: { label: string; required?: boolean; children: React.ReactNode }) {
  return (
    <div className="space-y-1">
      <label className="block text-sm font-medium text-gray-700">{label}{required && <span className="text-red-500"> *</span>}</label>
      {children}
    </div>
  );
}

export default function EditarInvestidorForm({ id }: { id: string }) {
  const isNew = id === 'novo';
  const existing = isNew ? null : INVESTORS.find((i) => i.id === id);

  const [saved, setSaved] = useState(false);
  const [form, setForm] = useState({
    nome: existing?.nome ?? '',
    tipo: (existing?.tipo ?? 'empresa') as string,
    ticketMin: String(existing?.ticketMin ?? ''),
    ticketMax: String(existing?.ticketMax ?? ''),
    ods: existing?.ods ?? [] as number[],
    regioes: existing?.regioes ?? [] as string[],
    descricao: '',
    email: '',
    site: '',
    prioridade: 'impacto',
    restricoes: '',
  });

  const toggleOds = (n: number) => setForm(f => ({ ...f, ods: f.ods.includes(n) ? f.ods.filter(x => x !== n) : [...f.ods, n] }));
  const toggleEstado = (e: string) => setForm(f => ({ ...f, regioes: f.regioes.includes(e) ? f.regioes.filter(x => x !== e) : [...f.regioes, e] }));

  if (saved) {
    return (
      <div className="p-8 flex items-center justify-center min-h-96">
        <div className="card p-12 text-center max-w-md">
          <div className="text-5xl mb-4">✅</div>
          <h2 className="text-xl font-bold text-gray-900 mb-2">{isNew ? 'Investidor cadastrado!' : 'Alterações salvas!'}</h2>
          <p className="text-sm text-gray-500 mb-6">As informações foram atualizadas com sucesso.</p>
          <div className="flex gap-3 justify-center">
            <Link href="/investidores" className="px-4 py-2 bg-brand-600 text-white text-sm font-medium rounded-lg hover:bg-brand-700">Ver investidores</Link>
            {!isNew && (
              <Link href={`/investidores/${id}/match`} className="px-4 py-2 border border-gray-200 text-sm text-gray-600 rounded-lg hover:bg-gray-50">Ver matches</Link>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-8 max-w-3xl mx-auto space-y-8">
      <div>
        <Link href="/investidores" className="text-xs text-gray-400 hover:text-brand-600">← Investidores</Link>
        <h1 className="text-2xl font-bold text-gray-900 mt-1">{isNew ? 'Cadastrar Investidor / Patrocinador' : `Editar: ${existing?.nome}`}</h1>
        <p className="text-sm text-gray-500 mt-1">Perfil do investidor é usado pelo motor de match para cruzar com projetos.</p>
      </div>

      <div className="card p-6 space-y-5">
        <h2 className="text-base font-semibold text-gray-900 border-b border-gray-100 pb-3">🏢 Identificação</h2>
        <div className="grid grid-cols-2 gap-4">
          <Field label="Nome / Razão Social" required>
            <input className={inputCls} value={form.nome} onChange={e => setForm(f => ({ ...f, nome: e.target.value }))} placeholder="Fundação Horizonte Verde" />
          </Field>
          <Field label="Tipo" required>
            <select title="Tipo de investidor" className={inputCls} value={form.tipo} onChange={e => setForm(f => ({ ...f, tipo: e.target.value }))}>
              <option value="fundacao">Fundação</option>
              <option value="instituto">Instituto</option>
              <option value="empresa">Empresa</option>
              <option value="fundo">Fundo de Impacto</option>
              <option value="pessoa_fisica">Pessoa Física</option>
              <option value="governo">Governo / Edital</option>
            </select>
          </Field>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <Field label="Email de contato">
            <input className={inputCls} type="email" value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))} placeholder="esg&#64;empresa.com.br" />
          </Field>
          <Field label="Site">
            <input className={inputCls} value={form.site} onChange={e => setForm(f => ({ ...f, site: e.target.value }))} placeholder="https://empresa.com.br" />
          </Field>
        </div>
        <Field label="Breve descrição / mandato">
          <textarea title="Descrição" className={inputCls + ' resize-none'} rows={3} value={form.descricao}
            onChange={e => setForm(f => ({ ...f, descricao: e.target.value }))}
            placeholder="Descreva o foco de investimento, missão ou programa social..." />
        </Field>
      </div>

      <div className="card p-6 space-y-5">
        <h2 className="text-base font-semibold text-gray-900 border-b border-gray-100 pb-3">🎯 Critérios de Match</h2>
        <p className="text-xs text-gray-500">Estes dados alimentam o motor de compatibilidade com projetos.</p>
        <div className="grid grid-cols-2 gap-4">
          <Field label="Ticket mínimo (R$)" required>
            <input className={inputCls} type="number" min={0} value={form.ticketMin} onChange={e => setForm(f => ({ ...f, ticketMin: e.target.value }))} placeholder="50000" />
          </Field>
          <Field label="Ticket máximo (R$)" required>
            <input className={inputCls} type="number" min={0} value={form.ticketMax} onChange={e => setForm(f => ({ ...f, ticketMax: e.target.value }))} placeholder="1000000" />
          </Field>
        </div>
        <Field label="Prioridade de investimento" required>
          <div className="grid grid-cols-3 gap-2">
            {[
              { v: 'impacto', l: '🌱 Impacto social' },
              { v: 'retorno', l: '📈 Retorno + impacto' },
              { v: 'esg', l: '♻️ Compliance ESG' },
            ].map(o => (
              <label key={o.v} className={`flex items-center gap-2 px-3 py-2 rounded-lg border cursor-pointer text-xs transition-colors ${form.prioridade === o.v ? 'border-brand-400 bg-brand-50 text-brand-700' : 'border-gray-200 hover:bg-gray-50'}`}>
                <input type="radio" className="hidden" checked={form.prioridade === o.v} onChange={() => setForm(f => ({ ...f, prioridade: o.v }))} />
                {o.l}
              </label>
            ))}
          </div>
        </Field>
        <Field label="ODS de interesse" required>
          <div className="grid grid-cols-6 gap-1.5">
            {ODS_LIST.map(n => (
              <label key={n} className={`flex items-center justify-center px-2 py-1.5 rounded-lg border cursor-pointer text-xs font-bold transition-colors ${form.ods.includes(n) ? 'border-brand-400 bg-brand-50 text-brand-700' : 'border-gray-200 text-gray-400 hover:bg-gray-50'}`}>
                <input type="checkbox" className="hidden" checked={form.ods.includes(n)} onChange={() => toggleOds(n)} />
                {n}
              </label>
            ))}
          </div>
          <p className="text-xs text-gray-400 mt-1">{form.ods.length} ODS selecionados</p>
        </Field>
        <Field label="Regiões de atuação (estados)" required>
          <div className="grid grid-cols-7 gap-1.5">
            {ESTADOS.map(e => (
              <label key={e} className={`flex items-center justify-center px-2 py-1.5 rounded border cursor-pointer text-xs font-semibold transition-colors ${form.regioes.includes(e) ? 'border-brand-400 bg-brand-50 text-brand-700' : 'border-gray-200 text-gray-400 hover:bg-gray-50'}`}>
                <input type="checkbox" className="hidden" checked={form.regioes.includes(e)} onChange={() => toggleEstado(e)} />
                {e}
              </label>
            ))}
          </div>
          <p className="text-xs text-gray-400 mt-1">{form.regioes.length} estados selecionados</p>
        </Field>
        <Field label="Restrições / critérios excludentes">
          <textarea title="Restrições" className={inputCls + ' resize-none'} rows={2} value={form.restricoes}
            onChange={e => setForm(f => ({ ...f, restricoes: e.target.value }))}
            placeholder="Ex: Não apoiamos projetos na área de segurança pública." />
        </Field>
      </div>

      {(form.ods.length > 0 || form.regioes.length > 0) && (
        <div className="card p-5 bg-green-50 border-green-200">
          <p className="text-sm font-semibold text-green-800 mb-2">🔍 Preview de match</p>
          <p className="text-xs text-green-700">• {form.ods.length} ODS selecionados · {form.regioes.length} estados</p>
        </div>
      )}

      <div className="flex items-center justify-between">
        <Link href="/investidores" className="px-4 py-2 border border-gray-200 text-sm text-gray-600 rounded-lg hover:bg-gray-50">Cancelar</Link>
        <button onClick={() => setSaved(true)} className="px-6 py-2 bg-brand-600 text-white text-sm font-medium rounded-lg hover:bg-brand-700 transition-colors">
          {isNew ? 'Cadastrar investidor' : 'Salvar alterações'}
        </button>
      </div>
    </div>
  );
}
 
