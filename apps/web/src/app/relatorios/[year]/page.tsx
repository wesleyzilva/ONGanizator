'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function RelatoriosYearPage({ params }: { params: { year: string } }) {
  const year = Number(params.year || '2024');
  const [report, setReport] = useState<any | null>(null);
  const router = useRouter();

  useEffect(() => {
    fetch(`/api/reports/annual?year=${year}&perspective=investidor`)
      .then((r) => r.json())
      .then(setReport)
      .catch(() => setReport(null));
  }, [year]);

  return (
    <div className="min-h-screen p-6">
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold">Relatório Anual — {year}</h1>
          <button onClick={() => router.back()} className="text-sm text-gray-600">Voltar</button>
        </div>

        {!report && <p className="text-sm text-gray-500">Carregando relatório...</p>}

        {report && (
          <div className="space-y-4">
            <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
              <h2 className="text-lg font-semibold">Resumo financeiro</h2>
              <div className="mt-2 grid grid-cols-3 gap-3">
                <div>
                  <p className="text-xs text-gray-500">Receita</p>
                  <p className="font-bold">R$ {Number(report.totals.receita).toLocaleString()}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500">Despesas</p>
                  <p className="font-bold">R$ {Number(report.totals.despesas).toLocaleString()}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500">Saldo</p>
                  <p className="font-bold">R$ {Number(report.totals.saldo).toLocaleString()}</p>
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
              <h2 className="text-lg font-semibold">Projetos</h2>
              <ul className="mt-3 space-y-2">
                {report.projects.map((p: any) => (
                  <li key={p.id} className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">{p.titulo}</p>
                      <p className="text-xs text-gray-500">{p.organizacaoNome}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm">R$ {Number(p.valorCaptado).toLocaleString()}</p>
                      <p className="text-xs text-gray-500">Beneficiários: {p.beneficiarios}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
