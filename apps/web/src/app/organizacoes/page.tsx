import { api } from '@/lib/api';
import { StatusBadge } from '@/components/ui/StatusBadge';
import Link from 'next/link';

export default async function OrganizacoesPage() {
  const { data } = await api.organizacoes();

  const tipoLabel: Record<string, string> = {
    ong: 'ONG',
    cooperativa: 'Cooperativa',
    negocio_social: 'Negócio Social',
  };

  return (
    <div className="p-8 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Organizações</h1>
          <p className="text-sm text-gray-500 mt-1">{data.length} organizações cadastradas</p>
        </div>
        <Link href="/organizacoes/nova/editar" className="btn-primary">+ Nova Organização</Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {data.map((org: any) => (
          <Link href={`/organizacoes/${org.id}`} key={org.id}>
            <div className="card hover:shadow-md hover:border-brand-200 transition-all cursor-pointer">
              <div className="flex items-start justify-between mb-3">
                <div className="w-10 h-10 rounded-xl bg-brand-100 text-brand-700 flex items-center justify-center font-bold text-sm shrink-0">
                  {org.nomeFantasia.charAt(0)}
                </div>
                <StatusBadge status={org.nivel} />
              </div>
              <h3 className="font-semibold text-gray-900 text-sm">{org.nomeFantasia}</h3>
              <p className="text-xs text-gray-400 mt-0.5">{tipoLabel[org.tipo]} · {org.cidade}, {org.estado}</p>
              <p className="text-xs text-gray-500 mt-1">{org.areaAtuacao}</p>

              <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between">
                <div>
                  <p className="text-xs text-gray-400">Score</p>
                  <p className="text-lg font-bold text-brand-600">{org.score}</p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-gray-400">ODS</p>
                  <p className="text-xs font-medium text-gray-600">{org.ods.map((o: number) => `#${o}`).join(' ')}</p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
