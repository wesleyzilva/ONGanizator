'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { getPerspective, type Perspective, getUser } from '@/lib/mockAuth';
import AnnualReportCard from '@/components/AnnualReportCard';
import { PERSPECTIVE_LABELS } from '@/lib/perspective';

const BRAND_OPTIONS: Record<Perspective, { logo: string; title: string; subtitle: string; tone: string }> = {
  adm: {
    logo: 'O',
    title: 'ONGanizator',
    subtitle: 'Plataforma whitelabel corporativa',
    tone: 'bg-brand-600 text-white',
  },
  ong: {
    logo: 'ONG',
    title: 'Logo da ONG',
    subtitle: 'Mostre seu impacto social em cada relatório',
    tone: 'bg-emerald-600 text-white',
  },
  investidor: {
    logo: 'EMP',
    title: 'Logo da Empresa',
    subtitle: 'Sua assinatura em relatórios e dashboards',
    tone: 'bg-sky-600 text-white',
  },
  advogado: {
    logo: 'ADV',
    title: 'Logo do Escritório',
    subtitle: 'Branding para compliance e relatório anual',
    tone: 'bg-violet-600 text-white',
  },
};

const JOURNEY_STEPS: Record<Perspective, string[]> = {
  adm: [
    'Planejar visões de stakeholder com relatórios e métricas corporativas.',
    'Centralizar dados de projetos, compliance e resultados sociais.',
    'Publicar relatórios anuais com marca própria.',
  ],
  ong: [
    'Captar recursos e engajar comunidade com projetos de impacto.',
    'Construir relatórios anuais de evidências e ODS.',
    'Mostrar resultados com identidade visual da sua ONG.',
  ],
  investidor: [
    'Consolidar due diligence e benefícios fiscais em relatórios.',
    'Acompanhar projetos apoiados e contrapartidas sociais.',
    'Usar marca corporativa no painel executivo e no relatório anual.',
  ],
  advogado: [
    'Gerir compliance fiscal e relatórios de prestação de contas.',
    'Organizar documentos e evidências por cliente.',
    'Entregar relatórios anuais com marca profissional.',
  ],
};

const ANNUAL_CARDS: { label: string; description: string; perspectives: Perspective[] }[] = [
  {
    label: 'Para Empresas',
    description: 'Relatório anual de investimento, benefícios fiscais e ESG com marca corporativa.',
    perspectives: ['adm', 'investidor'],
  },
  {
    label: 'Para Advogados/Contadores',
    description: 'Documentação fiscal e compliance em um único painel anual.',
    perspectives: ['advogado'],
  },
  {
    label: 'Para ONG',
    description: 'Impacto social, evidências e prestação de contas na jornada anual.',
    perspectives: ['ong'],
  },
];

export default function DashboardWhitelabel() {
  const [perspective, setPerspective] = useState<Perspective>('adm');

  useEffect(() => {
    setPerspective(getPerspective());
    const id = setInterval(() => setPerspective(getPerspective()), 400);
    return () => clearInterval(id);
  }, []);

  const brand = BRAND_OPTIONS[perspective];
  const journey = JOURNEY_STEPS[perspective];

  return (
    <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
        <div className="flex items-start gap-4">
          <div className={`flex h-16 w-16 items-center justify-center rounded-3xl text-xl font-bold ${brand.tone}`}>
            {brand.logo}
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-gray-400">Whitelabel</p>
            <h2 className="text-2xl font-bold text-gray-900">{brand.title}</h2>
            <p className="mt-2 text-sm text-gray-500">{brand.subtitle}</p>
          </div>
        </div>

        <div className="space-y-3 text-right lg:text-left">
          <p className="text-sm font-semibold text-brand-700">Seu logo aqui</p>
          <p className="text-sm text-gray-500">Personalize a jornada e o relatório anual para sua marca.</p>
          <Link
            href="/perfil"
            className="inline-flex items-center justify-center rounded-2xl border border-brand-600 bg-brand-50 px-4 py-2 text-sm font-semibold text-brand-700 hover:bg-brand-100"
          >
            Personalizar perfil
          </Link>
        </div>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-[1.5fr,1fr]">
        <div className="rounded-3xl bg-brand-50 p-5">
          <p className="text-sm font-semibold text-gray-900">Jornada personalizada</p>
          <div className="mt-4 space-y-3">
            {journey.map((step) => (
              <div key={step} className="rounded-2xl border border-gray-200 bg-white p-4">
                <p className="text-sm text-gray-700">{step}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-3">
          {ANNUAL_CARDS.map((card) => (
            <div
              key={card.label}
              className={`rounded-3xl border p-4 ${card.perspectives.includes(perspective) ? 'border-brand-600 bg-brand-50' : 'border-gray-200 bg-white'}`}
            >
              <p className="text-xs uppercase tracking-[0.2em] text-gray-500">{card.label}</p>
              <p className="mt-2 text-sm text-gray-700">{card.description}</p>
            </div>
          ))}

          <div className="mt-3">
            <AnnualReportCard year={2024} perspective={perspective} />
          </div>
        </div>
      </div>

      <div className="mt-6 rounded-3xl border border-brand-100 bg-brand-50 p-5">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-brand-700">Relatórios</p>
            <h3 className="mt-2 text-lg font-semibold text-gray-900">Relatórios que conectam captação, impacto e compliance</h3>
            <p className="mt-3 text-sm text-gray-600">
              Relatórios anuais e de projeto mostram como recursos são captados, investidos e auditados para resultados sociais mensuráveis.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-gray-600">
              <li>📌 Dados de captação vinculados a projetos e investidores.</li>
              <li>📄 Compliance e evidências integradas para due diligence.</li>
              <li>📈 Transparência na prestação de contas e resultados de impacto.</li>
            </ul>
          </div>
          <Link
            href="/relatorios"
            className="inline-flex items-center justify-center rounded-2xl bg-brand-600 px-4 py-3 text-sm font-semibold text-white hover:bg-brand-700"
          >
            Ver relatórios
          </Link>
        </div>
      </div>
    </div>
  );
}
