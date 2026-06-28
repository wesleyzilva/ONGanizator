'use client';

import { useEffect, useState } from 'react';
import clsx from 'clsx';
import Header from '@/components/layout/Header';
import { Sidebar } from '@/components/layout/Sidebar';
import { getPerspective, type Perspective } from '@/lib/mockAuth';

interface ShellProps {
  children: React.ReactNode;
}

export default function Shell({ children }: ShellProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [perspective, setPerspective] = useState<Perspective>('adm');

  useEffect(() => {
    setPerspective(getPerspective());
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header
        perspective={perspective}
        onToggleSidebar={() => setSidebarOpen((value) => !value)}
        onPerspectiveChange={setPerspective}
      />

      <div className="flex min-h-[calc(100vh-5rem)] overflow-hidden">
        <div
          className={clsx(
            'fixed inset-y-0 left-0 z-40 w-72 transform border-r border-gray-200 bg-white transition-transform duration-200 ease-in-out lg:relative lg:translate-x-0',
            sidebarOpen ? 'translate-x-0' : '-translate-x-full'
          )}
        >
          <Sidebar perspective={perspective} />
        </div>

        <main className="flex-1 overflow-auto px-4 py-6 sm:px-6 lg:px-8">
          {children}
        </main>
      </div>
    </div>
  );
}
