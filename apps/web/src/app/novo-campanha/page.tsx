"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { addProject } from '@/lib/mockUtils';

export default function NovoCampanhaPage() {
  const router = useRouter();
  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");
  const [meta, setMeta] = useState(0);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const id = `prj-new-${Date.now()}`;
    const novo = {
      id,
      organizacaoId: "org-001",
      organizacaoNome: "Demo Org",
      titulo,
      descricao,
      ods: [],
      status: "rascunho",
      valorMeta: meta,
      valorCaptado: 0,
      beneficiarios: 0,
      estado: "--",
      cidade: "--",
      dataInicio: new Date().toISOString().slice(0,10),
      dataFim: new Date().toISOString().slice(0,10),
      criadoEm: new Date().toISOString(),
    };
    addProject(novo);
    router.push(`/projetos/${id}`);
  }

  return (
    <div className="p-8 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Criar Campanha (Demo)</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm text-gray-600">Título</label>
          <input value={titulo} onChange={(e) => setTitulo(e.target.value)} className="w-full border rounded px-3 py-2" />
        </div>
        <div>
          <label className="block text-sm text-gray-600">Descrição</label>
          <textarea value={descricao} onChange={(e) => setDescricao(e.target.value)} className="w-full border rounded px-3 py-2" />
        </div>
        <div>
          <label className="block text-sm text-gray-600">Meta (R$)</label>
          <input type="number" value={meta || ''} onChange={(e) => setMeta(Number(e.target.value))} className="w-full border rounded px-3 py-2" />
        </div>
        <div>
          <button className="bg-brand-600 text-white px-4 py-2 rounded">Criar campanha</button>
        </div>
      </form>
    </div>
  );
}
