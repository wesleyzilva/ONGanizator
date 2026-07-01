import { api } from '@/lib/api';
import { StatusBadge } from '@/components/ui/StatusBadge';
import Link from 'next/link';

export default async function MarketplacePage() {
  const { data } = await api.projetos({ status: 'ativo' });

  const fmt = (n: number) =>
    n >= 1_000_000
      ? `R$ ${(n / 1_000_000).toFixed(1)}M`
      : `R$ ${(n / 1_000).toFixed(0)}K`;

  return (
    <div className="p-8 space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Marketplace de Projetos</h1>
        <p className="text-sm text-gray-500 mt-1">{data.length} projetos disponíveis para apoio</p>
      </div>

      <div className="flex gap-2 flex-wrap">
        <select className="text-sm border border-gray-200 rounded-lg px-3 py-2 bg-white">
          <option>Todos os ODS</option>
          {[3,6,8,9,12,13,15].map(o => <option key={o}>ODS {o}</option>)}
        </select>
        <select className="text-sm border border-gray-200 rounded-lg px-3 py-2 bg-white">
          <option>Todos os estados</option>
          {['MT','MS','GO','SP','RJ','BA','PE','AM'].map(e => <option key={e}>{e}</option>)}
        </select>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5">
        {data.map((p: any) => {
          const pct = Math.round((p.valorCaptado / p.valorMeta) * 100);
          return (
            <Link href={`/projetos/${p.id}`} key={p.id}>
              <div className="card hover:shadow-md hover:border-brand-200 transition-all cursor-pointer h-full flex flex-col">
                <div className="flex items-start justify-between mb-3">
                  <StatusBadge status={p.status} />
                  <span className="text-xs text-gray-400">{p.estado}</span>
                </div>

                <h3 className="font-semibold text-gray-900">{p.titulo}</h3>
                <p className="text-xs text-brand-600 mt-0.5">{p.organizacaoNome}</p>
                <p className="text-sm text-gray-500 mt-2 flex-1 line-clamp-2">{p.descricao}</p>

                <div className="mt-4">
                  <div className="flex justify-between text-xs text-gray-500 mb-1">
                    <span>Captado: {fmt(p.valorCaptado)}</span>
                    <span>{pct}%</span>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full bg-brand-500 rounded-full" style={{ width: `${Math.min(pct, 100)}%` }} />
                  </div>
                  <p className="text-xs text-gray-400 mt-1">Meta: {fmt(p.valorMeta)}</p>
                </div>

                <div className="mt-3 pt-3 border-t border-gray-100 flex items-center justify-between">
                  <div className="flex gap-1 flex-wrap">
                    {p.ods.map((o: number) => (
                      <span key={o} className="badge bg-green-50 text-green-700">ODS {o}</span>
                    ))}
                  </div>
                  <span className="text-xs text-gray-500">{p.beneficiarios.toLocaleString('pt-BR')} benef.</span>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
 
