'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import PerspectiveSelector from '@/components/PerspectiveSelector';
import { getMenuGroupsForPerspective, type Perspective } from '@/lib/perspective';
import { getUser, type UserProfile } from '@/lib/mockAuth';

interface SidebarProps {
  perspective: Perspective;
  onChangePerspective: (perspective: Perspective) => void;
  collapsed?: boolean;
}

export function Sidebar({ perspective, onChangePerspective, collapsed = false }: SidebarProps) {
  const pathname = usePathname();
  const [user, setUser] = useState<UserProfile | null>(() => getUser());

  useEffect(() => {
    const id = setInterval(() => setUser(getUser()), 400);
    return () => clearInterval(id);
  }, []);

  const menuGroups = getMenuGroupsForPerspective(perspective);

  return (
    <aside className={clsx('bg-white border-r border-gray-200 flex flex-col shrink-0', collapsed ? 'w-16' : 'w-72')}>
      <div className="p-5 border-b border-gray-100">
        <div className="flex items-center gap-2">
          <span className="w-8 h-8 bg-brand-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">O</span>
          {!collapsed && (
            <div>
              <p className="font-bold text-gray-900 text-sm leading-tight">ONGanizator</p>
              <p className="text-xs text-gray-400">Navegação operacional</p>
            </div>
          )}
        </div>
      </div>

      <div className="p-4 border-b border-gray-100">
        {!collapsed && !user && <PerspectiveSelector value={perspective} onChange={onChangePerspective} />}
      </div>

      <nav className="flex-1 p-3 space-y-4 overflow-y-auto">
        {menuGroups.map((group) => (
          <div key={group.label}>
            {!collapsed && <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 px-2 mb-1">{group.label}</p>}
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
                  <span className="w-6 inline-flex items-center justify-center">{item.icon}</span>
                  {!collapsed && <span className="ml-2">{item.label}</span>}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </nav>

      <div className="p-4 border-t border-gray-100">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-full bg-brand-100 flex items-center justify-center text-brand-700 text-xs font-bold">{user?.name?.[0] ?? 'V'}</div>
          {!collapsed ? (
            <div>
              <p className="text-xs font-medium text-gray-800">{user?.name ?? 'Visitante'}</p>
              {user ? (
                <p className="text-xs text-gray-400">{user.email}</p>
              ) : (
                <Link href="/login" className="text-xs font-semibold text-brand-600 hover:underline">Entrar</Link>
              )}
            </div>
          ) : null}
        </div>
      </div>
    </aside>
  );
}
 
