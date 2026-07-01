'use client';

import Link from 'next/link';
import { type Perspective } from '@/lib/mockAuth';
import { PERSPECTIVE_LABELS } from '@/lib/perspective';

interface HeaderProps {
  perspective: Perspective;
  onToggleSidebar: () => void;
}

export default function Header({ perspective, onToggleSidebar }: HeaderProps) {
  return (
    <header className="sticky top-0 z-30 h-16 border-b border-gray-200 bg-white">
      <div className="flex h-full w-full items-center gap-3 px-4 sm:px-6 lg:px-8">
        {/* Hamburger */}
        <button
          type="button"
          onClick={onToggleSidebar}
          className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-gray-200 bg-white text-gray-600 hover:bg-gray-50"
        >
          <span className="text-base">&#9776;</span>
          <span className="sr-only">Menu</span>
        </button>

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-600 text-sm font-bold text-white">O</span>
          <span className="hidden font-bold text-gray-900 sm:block">ONGanizator</span>
        </Link>

        {/* Perfil ativo — clique para trocar */}
        <Link
          href="/login"
          title="Trocar perfil"
          className="ml-auto flex items-center gap-2 rounded-xl border border-gray-200 bg-gray-50 px-3 py-1.5 hover:border-brand-300 hover:bg-brand-50 transition-colors group"
        >
          <span className="text-base leading-none">{PERSPECTIVE_LABELS[perspective].icon}</span>
          <div className="hidden sm:block">
            <p className="text-xs font-semibold leading-tight text-gray-900 group-hover:text-brand-700">{PERSPECTIVE_LABELS[perspective].title}</p>
            <p className="text-[10px] leading-tight text-gray-400">clique para trocar</p>
          </div>
          <span className="text-gray-300 group-hover:text-brand-400 text-xs">⇄</span>
        </Link>
      </div>
    </header>
  );
}
