'use client';

import { useEffect, useState } from 'react';
import { getPerspective, setPerspective, Perspective, PERSPECTIVE_OPTIONS } from '@/lib/mockAuth';
import { PERSPECTIVE_LABELS } from '@/lib/perspective';

export default function PerspectiveSelector({ onChange }: { onChange?: (perspective: Perspective) => void }) {
  const [active, setActive] = useState<Perspective>('adm');

  useEffect(() => {
    const stored = getPerspective();
    setActive(stored);
    onChange?.(stored);
  }, [onChange]);

  function selectPerspective(perspective: Perspective) {
    setActive(perspective);
    setPerspective(perspective);
    onChange?.(perspective);
  }

  return (
    <div className="space-y-3">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">Visão</p>
        <p className="text-sm font-medium text-gray-800">{PERSPECTIVE_LABELS[active].title}</p>
      </div>
      <div className="grid gap-2">
        {PERSPECTIVE_OPTIONS.map((perspective) => (
          <button
            key={perspective}
            type="button"
            className={`rounded-lg border px-3 py-2 text-left text-sm transition ${
              active === perspective
                ? 'border-brand-600 bg-brand-50 text-brand-700'
                : 'border-gray-200 bg-white text-gray-700 hover:border-gray-300'
            }`}
            onClick={() => selectPerspective(perspective)}
          >
            <span className="font-semibold">{PERSPECTIVE_LABELS[perspective].title}</span>
            <p className="text-xs text-gray-500">{PERSPECTIVE_LABELS[perspective].subtitle}</p>
          </button>
        ))}
      </div>
    </div>
  );
}
