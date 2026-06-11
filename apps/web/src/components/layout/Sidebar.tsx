'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

const NAV = [
  { label: 'Dashboard', href: '/', icon: '⬛' },
  { label: 'Organizações', href: '/organizacoes', icon: '🏢' },
  { label: 'Projetos', href: '/projetos', icon: '🌱' },
  { label: 'Marketplace', href: '/marketplace', icon: '🔍' },
  { label: 'Investidores', href: '/investidores', icon: '💼' },
  { label: 'Impacto & ESG', href: '/impacto', icon: '📊' },
  { label: 'Monitoramento', href: '/monitoramento', icon: '📡' },
  { label: 'Para Investidores', href: '/para-investidores', icon: '🚀' },
];

export function Sidebar() {
  const pathname = usePathname();
  return (
    <aside className="w-60 bg-white border-r border-gray-200 flex flex-col shrink-0">
      <div className="p-5 border-b border-gray-100">
        <div className="flex items-center gap-2">
          <span className="w-8 h-8 bg-brand-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">O</span>
          <div>
            <p className="font-bold text-gray-900 text-sm leading-tight">ONGanizator</p>
            <p className="text-xs text-gray-400">Impacto Social</p>
          </div>
        </div>
      </div>

      <nav className="flex-1 p-3 space-y-0.5">
        {NAV.map(item => (
          <Link
            key={item.href}
            href={item.href}
            className={clsx(
              'sidebar-link',
              pathname === item.href && 'active'
            )}
          >
            <span>{item.icon}</span>
            {item.label}
          </Link>
        ))}
      </nav>

      <div className="p-4 border-t border-gray-100">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-full bg-brand-100 flex items-center justify-center text-brand-700 text-xs font-bold">A</div>
          <div>
            <p className="text-xs font-medium text-gray-800">Administrador</p>
            <p className="text-xs text-gray-400">admin&#64;onganizator.com.br</p>
          </div>
        </div>
      </div>
    </aside>
  );
}
