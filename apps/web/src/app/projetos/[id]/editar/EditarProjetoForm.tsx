'use client';
import { useState } from 'react';
import { PROJECTS, ORGS } from '@/lib/mockData';
import Link from 'next/link';

const inputCls = 'w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-400';
const ODS_LIST = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17];

function Field({ label, required, children }: { label: string; required?: boolean; children: React.ReactNode }) {
  return (
    <div className="space-y-1">
      <label className="block text-sm font-medium text-gray-700">{label}{required && <span className="text-red-500"> *</span>}</label>
      {children}
    </div>
  );
}

export default function EditarProjetoForm({ id }: { id: string }) {
  const isNew = id === 'novo';
  const existing = isNew ? null : PROJECTS.find((p) => p.id === id);

  const [saved, setSaved] = useState(false);
  const [form, setForm] = useState({
    titulo: existing?.titulo ?? '',
    descricao: existing?.descricao ?? '',
    organizacaoId: existing?.organizacaoId ?? '',
    estado: existing?.estado ?? '',
    cidade: existing?.cidade ?? '',
    status: existing?.status ?? 'rascunho',
    valorMeta: String(existing?.valorMeta ?? ''),
    beneficiarios: String(existing?.beneficiarios ?? ''),
    dataInicio: existing?.dataInicio ?? '',
    dataFim: existing?.dataFim ?? '',
    ods: existing?.ods ?? [] as number[],
  });

  const toggleOds = (n: number) => setForm(f => ({ ...f, ods: f.ods.includes(n) ? f.ods.filter(x => x !== n) : [...f.ods, n] }));

  if (saved) {
    return (
      <div className="p-8 flex items-center justify-center min-h-96">
        <div className="card p-12 text-center max-w-md">
          <div className="text-5xl mb-4">{isNew ? '🎉' : '✅'}</div>
          <h2 className="text-xl font-bold text-gray-900 mb-2">{isNew ? 'Projeto criado!' : 'Alterações salvas!'}</h2>
          <div className="flex gap-3 justify-center mt-6">
            <Link href="/projetos" className="px-4 py-2 bg-brand-600 text-white text-sm font-medium rounded-lg hover:bg-brand-700">Ver projetos</Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-8 max-w-3xl mx-auto space-y-8">
      <div>
        <Link href="/projetos" className="text-xs text-gray-400 hover:text-brand-600">← Projetos</Link>
        <h1 className="text-2xl font-bold text-gray-900 mt-1">{isNew ? 'Novo Projeto' : `Editar: ${existing?.titulo}`}</h1>
      </div>

      <div className="card p-6 space-y-5">
        <h2 className="text-base font-semibold text-gray-900 border-b pb-3">📋 Dados Gerais</h2>
        <Field label="Título" required>
          <input className={inputCls} value={form.titulo} onChange={e => setForm(f => ({ ...f, titulo: e.target.value }))} placeholder="Ex: Adote uma Nascente" />
        </Field>
        <Field label="Descrição" required>
          <textarea title="Descrição" className={inputCls + ' resize-none'} rows={3} value={form.descricao}
            onChange={e => setForm(f => ({ ...f, descricao: e.target.value }))} placeholder="Descreva o projeto em 2-3 frases..." />
        </Field>
        <div className="grid grid-cols-2 gap-4">
          <Field label="Organização responsável" required>
            <select title="Organização" className={inputCls} value={form.organizacaoId} onChange={e => setForm(f => ({ ...f, organizacaoId: e.target.value }))}>
              <option value="">Selecione…</option>
              {ORGS.map(o => <option key={o.id} value={o.id}>{o.nomeFantasia}</option>)}
            </select>
          </Field>
          <Field label="Status" required>
            <select title="Status" className={inputCls} value={form.status} onChange={e => setForm(f => ({ ...f, status: e.target.value }))}>
              <option value="rascunho">Rascunho</option>
              <option value="em_avaliacao">Em Avaliação</option>
              <option value="ativo">Ativo</option>
              <option value="concluido">Concluído</option>
            </select>
          </Field>
        </div>
        <div className="grid grid-cols-3 gap-4">
          <Field label="Estado">
            <input className={inputCls} maxLength={2} value={form.estado} onChange={e => setForm(f => ({ ...f, estado: e.target.value.toUpperCase() }))} placeholder="MT" />
          </Field>
          <Field label="Cidade">
            <input className={inputCls} value={form.cidade} onChange={e => setForm(f => ({ ...f, cidade: e.target.value }))} placeholder="Cuiabá" />
          </Field>
          <Field label="Beneficiários estimados">
            <input className={inputCls} type="number" value={form.beneficiarios} onChange={e => setForm(f => ({ ...f, beneficiarios: e.target.value }))} placeholder="500" />
          </Field>
        </div>
        <div className="grid grid-cols-3 gap-4">
          <Field label="Meta de captação (R$)" required>
            <input className={inputCls} type="number" value={form.valorMeta} onChange={e => setForm(f => ({ ...f, valorMeta: e.target.value }))} placeholder="500000" />
          </Field>
          <Field label="Data início" required>
            <input className={inputCls} type="date" title="Data início" value={form.dataInicio} onChange={e => setForm(f => ({ ...f, dataInicio: e.target.value }))} />
          </Field>
          <Field label="Data fim" required>
            <input className={inputCls} type="date" title="Data fim" value={form.dataFim} onChange={e => setForm(f => ({ ...f, dataFim: e.target.value }))} />
          </Field>
        </div>
        <Field label="ODS vinculados" required>
          <div className="grid grid-cols-6 gap-1.5">
            {ODS_LIST.map(n => (
              <label key={n} className={`flex items-center justify-center px-2 py-1.5 rounded-lg border cursor-pointer text-xs font-bold transition-colors ${form.ods.includes(n) ? 'border-brand-400 bg-brand-50 text-brand-700' : 'border-gray-200 text-gray-400 hover:bg-gray-50'}`}>
                <input type="checkbox" className="hidden" checked={form.ods.includes(n)} onChange={() => toggleOds(n)} />
                {n}
              </label>
            ))}
          </div>
        </Field>
      </div>

      <div className="flex items-center justify-between">
        <Link href="/projetos" className="px-4 py-2 border border-gray-200 text-sm text-gray-600 rounded-lg hover:bg-gray-50">Cancelar</Link>
        <button onClick={() => setSaved(true)} className="px-6 py-2 bg-brand-600 text-white text-sm font-medium rounded-lg hover:bg-brand-700">
          {isNew ? 'Criar projeto' : 'Salvar alterações'}
        </button>
      </div>
    </div>
  );
}
 
