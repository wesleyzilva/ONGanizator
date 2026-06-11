'use client';
import { useState } from 'react';
import { ORGS } from '@/lib/mockData';
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

export default function EditarOrgForm({ id }: { id: string }) {
  const isNew = id === 'nova';
  const existing = isNew ? null : ORGS.find((o) => o.id === id);

  const [saved, setSaved] = useState(false);
  const [form, setForm] = useState({
    razaoSocial: existing?.razaoSocial ?? '',
    nomeFantasia: existing?.nomeFantasia ?? '',
    cnpj: existing?.cnpj ?? '',
    tipo: existing?.tipo ?? 'ong',
    areaAtuacao: existing?.areaAtuacao ?? '',
    estado: existing?.estado ?? '',
    cidade: existing?.cidade ?? '',
    ods: existing?.ods ?? [] as number[],
    email: '',
    telefone: '',
    site: '',
    missao: '',
    historia: '',
  });

  const toggleOds = (n: number) => setForm(f => ({ ...f, ods: f.ods.includes(n) ? f.ods.filter(x => x !== n) : [...f.ods, n] }));

  if (saved) {
    return (
      <div className="p-8 flex items-center justify-center min-h-96">
        <div className="card p-12 text-center max-w-md">
          <div className="text-5xl mb-4">✅</div>
          <h2 className="text-xl font-bold text-gray-900 mb-2">{isNew ? 'Organização cadastrada!' : 'Alterações salvas!'}</h2>
          <div className="flex gap-3 justify-center mt-6">
            <Link href="/organizacoes" className="px-4 py-2 bg-brand-600 text-white text-sm font-medium rounded-lg hover:bg-brand-700">Ver organizações</Link>
            {!isNew && <Link href={`/organizacoes/${id}`} className="px-4 py-2 border border-gray-200 text-sm text-gray-600 rounded-lg hover:bg-gray-50">Ver perfil</Link>}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-8 max-w-3xl mx-auto space-y-8">
      <div>
        <Link href="/organizacoes" className="text-xs text-gray-400 hover:text-brand-600">← Organizações</Link>
        <h1 className="text-2xl font-bold text-gray-900 mt-1">{isNew ? 'Cadastrar Organização' : `Editar: ${existing?.nomeFantasia}`}</h1>
        <p className="text-sm text-gray-500 mt-1">Dados completos habilitam o diagnóstico e aumentam o score de governança.</p>
      </div>

      <div className="card p-6 space-y-5">
        <h2 className="text-base font-semibold text-gray-900 border-b pb-3">📋 Dados Legais</h2>
        <div className="grid grid-cols-2 gap-4">
          <Field label="Razão Social" required>
            <input className={inputCls} value={form.razaoSocial} onChange={e => setForm(f => ({ ...f, razaoSocial: e.target.value }))} placeholder="Instituto Pantanal Vivo" />
          </Field>
          <Field label="Nome Fantasia" required>
            <input className={inputCls} value={form.nomeFantasia} onChange={e => setForm(f => ({ ...f, nomeFantasia: e.target.value }))} placeholder="Pantanal Vivo" />
          </Field>
        </div>
        <div className="grid grid-cols-3 gap-4">
          <Field label="CNPJ" required>
            <input className={inputCls} value={form.cnpj} onChange={e => setForm(f => ({ ...f, cnpj: e.target.value }))} placeholder="00.000.000/0001-00" />
          </Field>
          <Field label="Tipo" required>
            <select title="Tipo" className={inputCls} value={form.tipo} onChange={e => setForm(f => ({ ...f, tipo: e.target.value }))}>
              <option value="ong">ONG / Associação</option>
              <option value="cooperativa">Cooperativa</option>
              <option value="negocio_social">Negócio Social</option>
              <option value="fundacao">Fundação</option>
              <option value="oscip">OSCIP</option>
            </select>
          </Field>
          <Field label="Área de atuação" required>
            <input className={inputCls} value={form.areaAtuacao} onChange={e => setForm(f => ({ ...f, areaAtuacao: e.target.value }))} placeholder="Meio Ambiente" />
          </Field>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <Field label="Estado" required>
            <select title="Estado" className={inputCls} value={form.estado} onChange={e => setForm(f => ({ ...f, estado: e.target.value }))}>
              <option value="">Selecione…</option>
              {ESTADOS.map(e => <option key={e}>{e}</option>)}
            </select>
          </Field>
          <Field label="Cidade" required>
            <input className={inputCls} value={form.cidade} onChange={e => setForm(f => ({ ...f, cidade: e.target.value }))} placeholder="Cuiabá" />
          </Field>
        </div>
      </div>

      <div className="card p-6 space-y-4">
        <h2 className="text-base font-semibold text-gray-900 border-b pb-3">📞 Contato</h2>
        <div className="grid grid-cols-3 gap-4">
          <Field label="Email principal">
            <input className={inputCls} type="email" value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))} placeholder="contato&#64;ong.org.br" />
          </Field>
          <Field label="Telefone">
            <input className={inputCls} value={form.telefone} onChange={e => setForm(f => ({ ...f, telefone: e.target.value }))} placeholder="(65) 99999-0000" />
          </Field>
          <Field label="Site">
            <input className={inputCls} value={form.site} onChange={e => setForm(f => ({ ...f, site: e.target.value }))} placeholder="https://ong.org.br" />
          </Field>
        </div>
      </div>

      <div className="card p-6 space-y-4">
        <h2 className="text-base font-semibold text-gray-900 border-b pb-3">✍️ Missão e História</h2>
        <Field label="Missão institucional">
          <textarea title="Missão" className={inputCls + ' resize-none'} rows={2} value={form.missao}
            onChange={e => setForm(f => ({ ...f, missao: e.target.value }))}
            placeholder="Ex: Proteger os recursos hídricos do Pantanal envolvendo comunidades locais." />
        </Field>
        <Field label="Nossa história (para o perfil público)">
          <textarea title="História" className={inputCls + ' resize-none'} rows={4} value={form.historia}
            onChange={e => setForm(f => ({ ...f, historia: e.target.value }))}
            placeholder="Conte como a organização nasceu, os principais marcos e conquistas..." />
        </Field>
      </div>

      <div className="card p-6 space-y-4">
        <h2 className="text-base font-semibold text-gray-900 border-b pb-3">🌱 ODS de Atuação</h2>
        <p className="text-xs text-gray-500">ODS selecionados aumentam o match com investidores alinhados.</p>
        <div className="grid grid-cols-6 gap-1.5">
          {ODS_LIST.map(n => (
            <label key={n} className={`flex items-center justify-center px-2 py-1.5 rounded-lg border cursor-pointer text-xs font-bold transition-colors ${form.ods.includes(n) ? 'border-brand-400 bg-brand-50 text-brand-700' : 'border-gray-200 text-gray-400 hover:bg-gray-50'}`}>
              <input type="checkbox" className="hidden" checked={form.ods.includes(n)} onChange={() => toggleOds(n)} />
              {n}
            </label>
          ))}
        </div>
        <p className="text-xs text-gray-400">{form.ods.length} ODS selecionados</p>
      </div>

      <div className="flex items-center justify-between">
        <Link href="/organizacoes" className="px-4 py-2 border border-gray-200 text-sm text-gray-600 rounded-lg hover:bg-gray-50">Cancelar</Link>
        <button onClick={() => setSaved(true)} className="px-6 py-2 bg-brand-600 text-white text-sm font-medium rounded-lg hover:bg-brand-700">
          {isNew ? 'Cadastrar organização' : 'Salvar alterações'}
        </button>
      </div>
    </div>
  );
}
