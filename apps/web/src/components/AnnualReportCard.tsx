'use client';

import { useEffect, useState } from 'react';

interface Summary {
  year: number;
  totals: {
    receita: number;
    despesas: number;
    saldo: number;
    totalBeneficiarios: number;
    totalProjetos: number;
  };
}

export default function AnnualReportCard({ year = 2024, perspective = 'investidor' }: { year?: number; perspective?: string }) {
  const [summary, setSummary] = useState<Summary | null>(null);

  useEffect(() => {
    fetch(`/api/reports/annual?year=${year}&perspective=${perspective}`)
      .then((r) => r.json())
      .then((data) => setSummary({ year: data.year, totals: data.totals }))
      .catch(() => setSummary(null));
  }, [year, perspective]);

  if (!summary) {
    return (
      <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
        <p className="text-sm text-gray-500">Carregando relatório anual...</p>
      </div>
    );
  }

  return (
    <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
      <div className="flex items-baseline justify-between">
        <div>
          <p className="text-xs text-gray-400">Relatório Anual</p>
          <p className="text-lg font-semibold text-gray-900">{summary.year} — {perspective}</p>
        </div>
        <div className="text-right">
          <p className="text-sm text-gray-500">Receita</p>
          <p className="text-lg font-bold text-green-600">R$ {Number(summary.totals.receita).toLocaleString()}</p>
        </div>
      </div>

      <div className="mt-4 grid grid-cols-3 gap-3">
        <div className="p-3 bg-gray-50 rounded">
          <p className="text-xs text-gray-500">Despesas</p>
          <p className="font-semibold">R$ {Number(summary.totals.despesas).toLocaleString()}</p>
        </div>
        <div className="p-3 bg-gray-50 rounded">
          <p className="text-xs text-gray-500">Saldo</p>
          <p className="font-semibold">R$ {Number(summary.totals.saldo).toLocaleString()}</p>
        </div>
        <div className="p-3 bg-gray-50 rounded">
          <p className="text-xs text-gray-500">Projetos</p>
          <p className="font-semibold">{summary.totals.totalProjetos}</p>
        </div>
      </div>

      <div className="mt-4 flex gap-2">
        <a href={`/relatorios/${summary.year}`} className="inline-flex items-center rounded-md bg-brand-600 px-3 py-2 text-sm font-semibold text-white">Ver relatório</a>
        <button className="inline-flex items-center rounded-md border border-gray-200 px-3 py-2 text-sm">Exportar (PDF)</button>
      </div>
    </div>
  );
}
