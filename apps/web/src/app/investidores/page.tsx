import { api } from '@/lib/api';
import Link from 'next/link';

export default async function InvestidoresPage() {
  const { data } = await api.investidores();

  const tipoLabel: Record<string, string> = {
    pessoa_fisica: 'Pessoa Física',
    empresa: 'Empresa',
    instituto: 'Instituto',
    fundacao: 'Fundação',
  };

  const fmt = (n: number) =>
    n >= 1_000_000
      ? `R$ ${(n / 1_000_000).toFixed(1)}M`
      : `R$ ${(n / 1_000).toFixed(0)}K`;

  return (
    <div className="p-8 space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Investidores & Patrocinadores</h1>
        <p className="text-sm text-gray-500 mt-1">{data.length} investidores ativos na plataforma</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {data.map((inv: any) => (
          <div key={inv.id} className="card">
            <div className="flex items-start justify-between mb-3">
              <div>
                <h3 className="font-semibold text-gray-900">{inv.nome}</h3>
                <p className="text-xs text-gray-400">{tipoLabel[inv.tipo]}</p>
              </div>
              <Link
                href={`/investidores/${inv.id}/match`}
                className="text-xs text-brand-600 hover:text-brand-700 font-semibold border border-brand-200 rounded-lg px-3 py-1.5"
              >
                Ver Matches
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <p className="text-xs text-gray-400">Ticket Mínimo</p>
                <p className="text-sm font-semibold text-gray-800">{fmt(inv.ticketMin)}</p>
              </div>
              <div>
                <p className="text-xs text-gray-400">Ticket Máximo</p>
                <p className="text-sm font-semibold text-gray-800">{fmt(inv.ticketMax)}</p>
              </div>
            </div>

            <div className="mt-3">
              <p className="text-xs text-gray-400 mb-1.5">ODS de interesse</p>
              <div className="flex flex-wrap gap-1">
                {inv.ods.map((o: number) => (
                  <span key={o} className="badge bg-brand-50 text-brand-700">ODS {o}</span>
                ))}
              </div>
            </div>

            <div className="mt-3">
              <p className="text-xs text-gray-400 mb-1.5">Regiões</p>
              <div className="flex flex-wrap gap-1">
                {inv.regioes.map((r: string) => (
                  <span key={r} className="badge bg-gray-100 text-gray-600">{r}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
