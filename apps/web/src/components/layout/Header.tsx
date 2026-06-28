'use client';

import { useState } from 'react';
import PerspectiveSelector from '@/components/PerspectiveSelector';
import { type Perspective } from '@/lib/mockAuth';
import { PERSPECTIVE_LABELS } from '@/lib/perspective';

interface HeaderProps {
  perspective: Perspective;
  onToggleSidebar: () => void;
  onPerspectiveChange: (value: Perspective) => void;
}

export default function Header({ perspective, onToggleSidebar, onPerspectiveChange }: HeaderProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <header className="border-b border-gray-200 bg-white">
      <div className="mx-auto flex h-20 items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={onToggleSidebar}
            className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-gray-200 bg-white text-gray-600 shadow-sm hover:bg-gray-50 lg:hidden"
          >
            <span className="text-base">☰</span>
            <span className="sr-only">Abrir menu</span>
          </button>

          <div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-gray-500">Visão ativa</p>
            <p className="text-sm font-semibold text-gray-900">{PERSPECTIVE_LABELS[perspective].title}</p>
            <p className="text-xs text-gray-500">{PERSPECTIVE_LABELS[perspective].subtitle}</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => setExpanded((value) => !value)}
            className="rounded-2xl border border-gray-200 bg-white px-4 py-2 text-sm font-semibold text-gray-700 shadow-sm hover:bg-gray-50"
          >
            {expanded ? 'Fechar visão' : 'Alterar visão'}
          </button>
        </div>
      </div>

      {expanded && (
        <div className="border-t border-gray-200 bg-gray-50 px-4 py-4 sm:px-6 lg:px-8">
          <PerspectiveSelector onChange={onPerspectiveChange} />
        </div>
      )}
    </header>
  );
}
