import { api } from '@/lib/api';
import { StatusBadge } from '@/components/ui/StatusBadge';
import { ORGS } from '@/lib/mockData';
import Link from 'next/link';

export function generateStaticParams() {
  return ORGS.map(o => ({ id: o.id }));
}

export default async function OrgDetalhe({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const [org, score] = await Promise.all([
    api.organizacao(id),
    api.orgScore(id),
  ]);

  if (!org) return <div className="p-8 text-gray-500">Organização não encontrada.</div>;

  const tipoLabel: Record<string, string> = {
    ong: 'ONG', cooperativa: 'Cooperativa', negocio_social: 'Negócio Social',
  };

  return (
    <div className="p-8 space-y-6 max-w-4xl">
      <div className="flex items-start gap-4">
        <div className="w-14 h-14 rounded-2xl bg-brand-100 text-brand-700 flex items-center justify-center font-bold text-xl shrink-0">
          {org.nomeFantasia.charAt(0)}
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-3">
            <h1 className="text-2xl font-bold text-gray-900">{org.nomeFantasia}</h1>
            <Link href={`/organizacoes/${id}/editar`} className="px-3 py-1 border border-gray-200 text-xs text-gray-600 rounded-lg hover:bg-gray-50">✏️ Editar</Link>
          </div>
          <p className="text-sm text-gray-500">{org.razaoSocial} · CNPJ {org.cnpj}</p>
          <div className="flex gap-2 mt-2">
            <span className="badge bg-gray-100 text-gray-600">{tipoLabel[org.tipo]}</span>
            <StatusBadge status={org.nivel} />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="card">
          <p className="text-xs text-gray-400 mb-1">Área de Atuação</p>
          <p className="font-semibold text-gray-800">{org.areaAtuacao}</p>
        </div>
        <div className="card">
          <p className="text-xs text-gray-400 mb-1">Localização</p>
          <p className="font-semibold text-gray-800">{org.cidade}, {org.estado}</p>
        </div>
      </div>

      <div className="card">
        <h2 className="font-semibold text-gray-800 mb-4">Score de Maturidade: {score.score} / 100</h2>
        <div className="space-y-3">
          {Object.entries(score.dimensoes).map(([dim, val]) => (
            <div key={dim}>
              <div className="flex justify-between mb-1">
                <span className="text-sm text-gray-600 capitalize">{dim.replace(/([A-Z])/g, ' $1')}</span>
                <span className="text-sm font-semibold text-gray-800">{String(val)}</span>
              </div>
              <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                <div
                  className="h-full bg-brand-500 rounded-full"
                  style={{ width: `${val}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="card">
        <h2 className="font-semibold text-gray-800 mb-3">ODS Relacionados</h2>
        <div className="flex flex-wrap gap-2">
          {org.ods.map((o: number) => (
            <span key={o} className="badge bg-brand-50 text-brand-700">ODS {o}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
