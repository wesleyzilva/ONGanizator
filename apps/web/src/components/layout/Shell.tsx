'use client';

import { useEffect, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import Header from '@/components/layout/Header';
import { Sidebar } from '@/components/layout/Sidebar';
import { getUser, getPerspective, type Perspective } from '@/lib/mockAuth';
import { isRouteAllowed } from '@/lib/perspective';

/** Routes that don't require authentication and render without the app shell */
const PUBLIC_PATHS = ['/login', '/registro'];

export default function Shell({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [perspective, setPerspective] = useState<Perspective>('adm');
  const [isPublic, setIsPublic] = useState(false);
  const [mounted, setMounted] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    // Strip basePath (/ONGanizator) to get the app-relative path
    const raw = window.location.pathname;
    const path = raw.replace(/^\/ONGanizator/, '') || '/';

    const publicRoute = PUBLIC_PATHS.some((p) => path === p || path.startsWith(p + '/'));
    setIsPublic(publicRoute);

    const user = getUser();

    // Not logged in → redirect to login (public routes are exempt)
    if (!user && !publicRoute) {
      router.replace('/login');
      // Don't set mounted yet — avoid flash of protected shell
      return;
    }

    if (user) {
      // Always re-read perspective from storage (handles profile switch)
      const p = getPerspective();
      setPerspective(p);

      // Route not allowed for this perspective → redirect to dashboard
      if (!publicRoute && !isRouteAllowed(p, path)) {
        router.replace('/');
        return;
      }
    }

    if (window.innerWidth < 1024) setSidebarOpen(false);
    setMounted(true);
  // Re-run whenever pathname changes so switching profile → back to app updates everything
  }, [router, pathname]);

  // Prevent flash: nothing until we know the auth/route state
  if (!mounted) return null;

  // Public routes (login, registro) render without header/sidebar
  if (isPublic) return <>{children}</>;

  return (
    <div className="min-h-screen bg-gray-50">
      <Header
        perspective={perspective}
        onToggleSidebar={() => setSidebarOpen((v) => !v)}
      />

      <div className="flex h-[calc(100vh-4rem)]">
        {/* Backdrop — só no mobile, quando o drawer está aberto */}
        {sidebarOpen && (
          <div
            className="fixed inset-x-0 bottom-0 top-16 z-30 bg-black/40 lg:hidden"
            onClick={() => setSidebarOpen(false)}
            aria-hidden="true"
          />
        )}

        {/* Sidebar — drawer sobreposto no mobile, coluna fixa no desktop */}
        <div
          className={`fixed bottom-0 left-0 top-16 z-40 w-72 overflow-hidden border-r border-gray-200 bg-white transition-transform duration-200 ease-in-out lg:static lg:top-0 lg:z-auto lg:shrink-0 lg:transition-[width] ${
            sidebarOpen
              ? 'translate-x-0 lg:w-72'
              : '-translate-x-full lg:w-0 lg:translate-x-0'
          }`}
        >
          <div className="h-full w-72">
            <Sidebar perspective={perspective} />
          </div>
        </div>

        <main className="flex-1 overflow-auto px-4 py-6 sm:px-6 lg:px-8">
          {children}
        </main>
      </div>
    </div>
  );
}
