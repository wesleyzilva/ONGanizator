'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import clsx from 'clsx';
import { getMenuGroupsForPerspective, PERSPECTIVE_LABELS } from '@/lib/perspective';
import { clearUser, getUser, type UserProfile, type Perspective } from '@/lib/mockAuth';

interface SidebarProps {
  perspective: Perspective;
}

export function Sidebar({ perspective }: SidebarProps) {
  const pathname = usePathname();
  const router = useRouter();
  const [user, setUser] = useState<UserProfile | null>(null);

  useEffect(() => {
    setUser(getUser());
  }, [perspective]);

  const menuGroups = getMenuGroupsForPerspective(perspective);
  const persp = PERSPECTIVE_LABELS[perspective];

  function handleSair() {
    clearUser();
    router.replace('/login');
  }

  return (
    <aside className="w-72 bg-white border-r border-gray-200 flex flex-col shrink-0">
      <div className="p-5 border-b border-gray-100">
        <div className="flex items-center gap-2">
          <span className="w-8 h-8 bg-brand-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">O</span>
          <div>
            <p className="font-bold text-gray-900 text-sm leading-tight">ONGanizator</p>
            <p className="text-xs text-gray-400">Navegação operacional</p>
          </div>
        </div>
      </div>

      <nav className="flex-1 p-3 space-y-4 overflow-y-auto">
        {menuGroups.map((group) => (
          <div key={group.label}>
            <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 px-2 mb-1">{group.label}</p>
            <div className="space-y-0.5">
              {group.items.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={clsx(
                    'sidebar-link',
                    (pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href))) && 'active'
                  )}
                >
                  <span>{item.icon}</span>
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </nav>

      {/* Footer: perfil ativo + ações de sessão */}
      <div className="p-4 border-t border-gray-100 space-y-3">
        {/* Usuário */}
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-full bg-brand-100 flex items-center justify-center text-brand-700 text-sm font-bold shrink-0">
            {user?.name?.[0] ?? persp.icon}
          </div>
          <div className="min-w-0">
            <p className="text-xs font-semibold text-gray-900 truncate">{user?.name ?? persp.title}</p>
            <p className="text-[10px] text-gray-400 truncate">{user?.email ?? persp.subtitle}</p>
          </div>
        </div>
        {/* Ações */}
        <div className="flex gap-2">
          <Link
            href="/login"
            className="flex-1 text-center rounded-lg border border-gray-200 py-1.5 text-xs font-medium text-gray-600 hover:bg-gray-50 transition-colors"
          >
            ⇄ Trocar perfil
          </Link>
          <button
            onClick={handleSair}
            className="flex-1 rounded-lg border border-red-100 py-1.5 text-xs font-medium text-red-600 hover:bg-red-50 transition-colors"
          >
            ✕ Sair
          </button>
        </div>
      </div>
    </aside>
  );
}
