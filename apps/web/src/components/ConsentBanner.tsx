'use client';

import Link from 'next/link';

export default function ConsentBanner() {
  return (
    <div className="bg-brand-600 text-white px-6 py-4 text-sm sm:text-base">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-semibold">Consentimento mock registrado.</p>
          <p className="mt-1 text-white/80">Este protótipo grava consentimento em localStorage para simular login e perfil de stakeholders.</p>
        </div>
        <Link href="/perfil" className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-white hover:bg-white/20">
          Ver meu perfil
        </Link>
      </div>
    </div>
  );
}
