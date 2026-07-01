import { api } from '@/lib/api';
import { KpiCard } from '@/components/ui/KpiCard';
import { StatusBadge } from '@/components/ui/StatusBadge';

export default async function DashboardPage() {
  const data = await api.dashboard();

  const pct = (v: number, t: number) => t > 0 ? Math.round((v / t) * 100) : 0;
  const captadoPct = pct(data.totalCaptadoBRL, data.totalMetaBRL);
  const fmt = (n: number) =>
    n >= 1_000_000
      ? `R$ ${(n / 1_000_000).toFixed(1)}M`
      : `R$ ${(n / 1_000).toFixed(0)}K`;

  return (
    <div className="p-8 space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Dashboard Executivo</h1>
        <p className="text-sm text-gray-500 mt-1">Visão geral do ecossistema de impacto social</p>
      </div>

      {/* KPIs */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <KpiCard title="Organizações" value={data.totalOrganizacoes} sub="Ativamente cadastradas" color="green" icon="🏢" />
        <KpiCard title="Projetos" value={data.totalProjetos} sub={`${data.projetosPorStatus?.ativo || 0} ativos`} color="blue" icon="🌱" />
        <KpiCard title="Total Captado" value={fmt(data.totalCaptadoBRL)} sub={`${captadoPct}% da meta total`} color="amber" icon="💰" />
        <KpiCard title="Beneficiários" value={data.totalBeneficiarios?.toLocaleString('pt-BR')} sub="Impacto direto estimado" color="violet" icon="👥" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Status dos projetos */}
        <div className="card">
          <h2 className="font-semibold text-gray-800 mb-4">Projetos por Status</h2>
          <div className="space-y-3">
            {Object.entries(data.projetosPorStatus || {}).map(([status, count]) => (
              <div key={status} className="flex items-center justify-between">
                <StatusBadge status={status} />
                <span className="font-semibold text-gray-700">{String(count)}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Top projetos */}
        <div className="card">
          <h2 className="font-semibold text-gray-800 mb-4">Top Projetos por Captação</h2>
          <div className="space-y-3">
            {(data.topProjetos || []).map((p: any) => (
              <div key={p.id} className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-800">{p.titulo}</p>
                  <p className="text-xs text-gray-400">{p.organizacaoNome}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-semibold text-brand-600">{fmt(p.valorCaptado)}</p>
                  <p className="text-xs text-gray-400">de {fmt(p.valorMeta)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ODS */}
      <div className="card">
        <h2 className="font-semibold text-gray-800 mb-4">Cobertura por ODS</h2>
        <div className="flex flex-wrap gap-2">
          {Object.entries(data.distribuicaoODS || {}).sort((a, b) => Number(b[1]) - Number(a[1])).map(([ods, count]) => (
            <span key={ods} className="badge bg-brand-50 text-brand-700 text-xs px-3 py-1">
              {ods} · {String(count)} projetos
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
