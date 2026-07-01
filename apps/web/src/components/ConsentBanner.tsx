'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { getConsent, setConsent } from '@/lib/mockUtils';

export default function ConsentBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(!getConsent());
  }, []);

  if (!visible) return null;

  return (
    <div className="bg-brand-600 text-white px-4 py-3">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        <div>
          <p className="font-semibold">Uso de dados em modo demo</p>
          <p className="text-sm text-white/90 mt-1">Este protótipo grava seu consentimento em localStorage e permite simular login, cadastro e contribuições.</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-2 items-start sm:items-center">
          <Link href="/perfil" className="text-sm text-white underline">Meu perfil</Link>
          <button
            className="rounded-lg bg-white text-brand-600 px-4 py-2 text-sm font-semibold"
            onClick={() => {
              setConsent(true);
              setVisible(false);
            }}
          >
            Aceito os termos
          </button>
        </div>
      </div>
    </div>
  );
}
