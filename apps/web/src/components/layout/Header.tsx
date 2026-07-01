'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import PerspectiveSelector from '@/components/PerspectiveSelector';
import { type Perspective, getUser, clearUser } from '@/lib/mockAuth';
import { PERSPECTIVE_LABELS } from '@/lib/perspective';

interface HeaderProps {
  perspective: Perspective;
  onToggleSidebar: () => void;
  onPerspectiveChange: (value: Perspective) => void;
}

export default function Header({ perspective, onToggleSidebar, onPerspectiveChange }: HeaderProps) {
  const [expanded, setExpanded] = useState(false);
  const [userExists, setUserExists] = useState<boolean>(() => Boolean(getUser()));

  useEffect(() => {
    const id = setInterval(() => {
      const exists = Boolean(getUser());
      setUserExists((prev) => (prev === exists ? prev : exists));
    }, 400);
    return () => clearInterval(id);
  }, []);

  const router = useRouter();

  function handleLogout() {
    clearUser();
    router.push('/login');
  }

  return (
    <header className="border-b border-gray-200 bg-white">
      <div className="mx-auto flex h-20 items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={onToggleSidebar}
            className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-gray-200 bg-white text-gray-600 shadow-sm hover:bg-gray-50"
          >
            <span className="text-base">☰</span>
            <span className="sr-only">Alternar menu</span>
          </button>

          <div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-gray-500">Visão ativa</p>
            <p className="text-sm font-semibold text-gray-900">{PERSPECTIVE_LABELS[perspective].title}</p>
            <p className="text-xs text-gray-500">{PERSPECTIVE_LABELS[perspective].subtitle}</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Link href="/relatorios" className="inline-flex items-center rounded-2xl border border-gray-200 bg-white px-3 py-2 text-sm font-semibold text-gray-700 shadow-sm hover:bg-gray-50">
            Relatórios
          </Link>

          <button
            type="button"
            onClick={() => setExpanded((value) => !value)}
            className="rounded-2xl border border-gray-200 bg-white px-4 py-2 text-sm font-semibold text-gray-700 shadow-sm hover:bg-gray-50"
          >
            {expanded ? 'Fechar visão' : 'Alterar visão'}
          </button>

          {userExists && (
            <button
              type="button"
              onClick={handleLogout}
              className="rounded-2xl border border-gray-200 bg-white px-4 py-2 text-sm font-semibold text-gray-700 shadow-sm hover:bg-gray-50"
            >
              Sair
            </button>
          )}
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
 
