import { api } from '@/lib/api';
import { StatusBadge } from '@/components/ui/StatusBadge';

export default async function ImpactoPage() {
  const resumo = await api.impactoResumo();

  const fmt = (n: number) =>
    n >= 1_000_000
      ? `R$ ${(n / 1_000_000).toFixed(1)}M`
      : `R$ ${(n / 1_000).toFixed(0)}K`;

  return (
    <div className="p-8 space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Impacto & ESG</h1>
        <p className="text-sm text-gray-500 mt-1">Monitoramento consolidado de resultados</p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="card text-center">
          <p className="text-3xl font-bold text-brand-600">{resumo.totalBeneficiarios?.toLocaleString('pt-BR')}</p>
          <p className="text-sm text-gray-500 mt-1">Beneficiários diretos</p>
        </div>
        <div className="card text-center">
          <p className="text-3xl font-bold text-blue-600">{fmt(resumo.totalCaptadoBRL)}</p>
          <p className="text-sm text-gray-500 mt-1">Total captado</p>
        </div>
        <div className="card text-center">
          <p className="text-3xl font-bold text-amber-600">{resumo.projetosAtivos}</p>
          <p className="text-sm text-gray-500 mt-1">Projetos ativos</p>
        </div>
        <div className="card text-center">
          <p className="text-3xl font-bold text-violet-600">{Object.keys(resumo.distribuicaoODS || {}).length}</p>
          <p className="text-sm text-gray-500 mt-1">ODS cobertos</p>
        </div>
      </div>

      <div className="card">
        <h2 className="font-semibold text-gray-800 mb-4">Alinhamento com ODS — Agenda 2030</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {Object.entries(resumo.distribuicaoODS || {})
            .sort((a, b) => Number(b[1]) - Number(a[1]))
            .map(([ods, count]) => (
              <div key={ods} className="flex items-center justify-between bg-brand-50 rounded-lg px-4 py-3">
                <span className="text-sm font-semibold text-brand-800">{ods}</span>
                <span className="badge bg-brand-100 text-brand-700">{String(count)}</span>
              </div>
            ))}
        </div>
      </div>

      <div className="card">
        <h2 className="font-semibold text-gray-800 mb-2">ESG — Síntese</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          <div className="bg-green-50 rounded-xl p-4">
            <p className="text-xs font-semibold text-green-600 uppercase tracking-wide">E — Ambiental</p>
            <p className="text-sm text-gray-700 mt-2">Projetos de restauração de nascentes, combate a incêndios e biodiversidade no Pantanal e Cerrado.</p>
          </div>
          <div className="bg-blue-50 rounded-xl p-4">
            <p className="text-xs font-semibold text-blue-600 uppercase tracking-wide">S — Social</p>
            <p className="text-sm text-gray-700 mt-2">Geração de renda, segurança alimentar, acesso a água, educação e inclusão de comunidades vulneráveis.</p>
          </div>
          <div className="bg-violet-50 rounded-xl p-4">
            <p className="text-xs font-semibold text-violet-600 uppercase tracking-wide">G — Governança</p>
            <p className="text-sm text-gray-700 mt-2">Score institucional, validação documental, trilha de auditoria e monitoramento contínuo de resultados.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
