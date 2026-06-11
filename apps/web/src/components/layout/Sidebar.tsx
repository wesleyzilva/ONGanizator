'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

const NAV_GROUPS = [
  {
    label: 'Principal',
    items: [
      { label: 'Dashboard', href: '/', icon: '⬛' },
      { label: 'Organizações', href: '/organizacoes', icon: '🏢' },
      { label: 'Projetos', href: '/projetos', icon: '🌱' },
      { label: 'Investidores', href: '/investidores', icon: '💼' },
    ],
  },
  {
    label: 'Captação',
    items: [
      { label: 'Marketplace', href: '/marketplace', icon: '🔍' },
      { label: 'Crowdfunding', href: '/crowdfunding', icon: '🎁' },
      { label: 'CRM', href: '/crm', icon: '👥' },
    ],
  },
  {
    label: 'Governança',
    items: [
      { label: 'Diagnóstico', href: '/diagnostico', icon: '🩺' },
      { label: 'Risco Reputacional', href: '/risco', icon: '⚠️' },
      { label: 'Contabilidade', href: '/contabilidade', icon: '📒' },
    ],
  },
  {
    label: 'Impacto',
    items: [
      { label: 'Monitoramento', href: '/monitoramento', icon: '📡' },
      { label: 'Impacto & ESG', href: '/impacto', icon: '📊' },
      { label: 'Mentoria', href: '/mentoria', icon: '🎓' },
    ],
  },
  {
    label: 'Institucional',
    items: [
      { label: 'Para Investidores', href: '/para-investidores', icon: '🚀' },
    ],
  },
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

      <nav className="flex-1 p-3 space-y-4 overflow-y-auto">
        {NAV_GROUPS.map(group => (
          <div key={group.label}>
            <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 px-2 mb-1">{group.label}</p>
            <div className="space-y-0.5">
              {group.items.map(item => (
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
