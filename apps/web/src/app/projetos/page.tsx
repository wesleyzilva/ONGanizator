import { getProjects } from '@/lib/mockUtils';
import { StatusBadge } from '@/components/ui/StatusBadge';
import Link from 'next/link';

export default async function ProjetosPage() {
  const data = getProjects();

  const fmt = (n: number) =>
    n >= 1_000_000
      ? `R$ ${(n / 1_000_000).toFixed(1)}M`
      : `R$ ${(n / 1_000).toFixed(0)}K`;

  return (
    <div className="p-8 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Projetos</h1>
          <p className="text-sm text-gray-500 mt-1">{data.length} projetos cadastrados</p>
        </div>
        <Link href="/projetos/novo" className="btn-primary">+ Novo Projeto</Link>
      </div>

      <div className="card overflow-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-gray-100">
              <th className="text-left py-3 px-2 text-xs font-semibold text-gray-500 uppercase tracking-wide">Projeto</th>
              <th className="text-left py-3 px-2 text-xs font-semibold text-gray-500 uppercase tracking-wide">Organização</th>
              <th className="text-left py-3 px-2 text-xs font-semibold text-gray-500 uppercase tracking-wide">Status</th>
              <th className="text-right py-3 px-2 text-xs font-semibold text-gray-500 uppercase tracking-wide">Meta</th>
              <th className="text-right py-3 px-2 text-xs font-semibold text-gray-500 uppercase tracking-wide">Captado</th>
              <th className="text-right py-3 px-2 text-xs font-semibold text-gray-500 uppercase tracking-wide">Benef.</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {data.map((p: any) => (
              <tr key={p.id} className="hover:bg-gray-50 transition-colors">
                <td className="py-3 px-2">
                  <Link href={`/projetos/${p.id}`} className="font-medium text-gray-900 hover:text-brand-600">
                    {p.titulo}
                  </Link>
                  <p className="text-xs text-gray-400">{p.cidade}, {p.estado}</p>
                </td>
                <td className="py-3 px-2 text-gray-600">{p.organizacaoNome}</td>
                <td className="py-3 px-2"><StatusBadge status={p.status} /></td>
                <td className="py-3 px-2 text-right font-medium text-gray-800">{fmt(p.valorMeta)}</td>
                <td className="py-3 px-2 text-right font-semibold text-brand-600">{fmt(p.valorCaptado)}</td>
                <td className="py-3 px-2 text-right text-gray-600">{p.beneficiarios.toLocaleString('pt-BR')}</td>
                <td className="py-3 px-2 text-right space-x-2">
                  <Link href={`/projetos/${p.id}/contribuir`} className="text-xs text-white bg-brand-600 hover:bg-brand-700 rounded px-2 py-1">Contribuir</Link>
                  <Link href={`/projetos/${p.id}/editar`} className="text-xs text-gray-400 hover:text-brand-600 border border-gray-200 rounded px-2 py-1">✏️</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
 
