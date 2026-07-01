"use client";
import { useEffect, useState } from 'react';
import { getContributions } from '@/lib/mockUtils';

export default function ProjectContributions({ projetoId, baseCaptado }: { projetoId: string; baseCaptado: number }) {
  const [localSum, setLocalSum] = useState(0);

  useEffect(() => {
    try {
      const arr = getContributions();
      const sum = arr.filter((c: any) => c.projetoId === projetoId).reduce((s: number, c: any) => s + (Number(c.amount) || 0), 0);
      setLocalSum(sum);
    } catch (err) {
      setLocalSum(0);
    }
  }, [projetoId]);

  const total = (baseCaptado || 0) + (localSum || 0);
  const fmt = (n: number) => n >= 1_000_000 ? `R$ ${(n / 1_000_000).toFixed(1)}M` : `R$ ${(n / 1_000).toFixed(0)}K`;

  return (
    <div className="card p-4 text-center">
      <p className="text-xs text-gray-500 mb-1">Captado (base + simulado)</p>
      <p className="text-xl font-bold text-brand-600">{fmt(total)}</p>
      {localSum > 0 && <p className="text-xs text-gray-500 mt-1">Inclui R$ {localSum.toLocaleString('pt-BR')} de contribuições simuladas</p>}
    </div>
  );
}
