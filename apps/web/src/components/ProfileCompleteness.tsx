"use client";
import React from 'react';

export default function ProfileCompleteness({ data }: { data: Record<string, any> }) {
  const required = ['razaoSocial', 'nomeFantasia', 'cnpj', 'areaAtuacao', 'ods', 'estado', 'cidade'];
  const total = required.length;
  let filled = 0;
  required.forEach((k) => {
    const v = data[k];
    if (Array.isArray(v)) {
      if (v.length > 0) filled += 1;
    } else if (v !== undefined && v !== null && String(v).trim() !== '') {
      filled += 1;
    }
  });
  const pct = Math.round((filled / total) * 100);

  return (
    <div>
      <div className="flex items-center justify-between mb-2">
        <div className="text-sm text-gray-600">Completeness</div>
        <div className="text-sm font-semibold text-gray-800">{pct}%</div>
      </div>
      <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
        <div className="h-full bg-brand-500 rounded-full transition-all" style={{ width: `${pct}%` }} />
      </div>
    </div>
  );
}
