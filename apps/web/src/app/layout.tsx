import type { Metadata } from 'next';
import './globals.css';
import Shell from '@/components/layout/Shell';

export const metadata: Metadata = {
  title: 'ONGanizator — Plataforma de Impacto Social',
  description: 'Governança, captação e monitoramento de projetos de impacto social',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
        <Shell>{children}</Shell>
      </body>
    </html>
  );
}
