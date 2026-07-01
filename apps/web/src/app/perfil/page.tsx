'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { clearUser, getUser, getPerspective, setPerspective, UserProfile, Perspective, PERSPECTIVE_OPTIONS } from '@/lib/mockAuth';
import { PERSPECTIVE_LABELS } from '@/lib/perspective';

const PERSPECTIVE_JOURNEYS: Record<Perspective, { title: string; steps: { phase: string; description: string }[] }> = {
  adm: {
    title: 'Visão Geral',
    steps: [
      { phase: 'Pré', description: 'Mapear todos os perfis e preparar a visão corporativa completa.' },
      { phase: 'Durante', description: 'Acompanhar dashboards, governança e fluxo de trabalho geral.' },
      { phase: 'Pós', description: 'Validar resultados, relatórios e evolução do ecossistema.' },
    ],
  },
  ong: {
    title: 'ONG Gamificada',
    steps: [
      { phase: 'Pré', description: 'Onboarding gamificado, autoavaliação e jornada de selos.' },
      { phase: 'Durante', description: 'Gerenciar projetos, validação documental e entregas auditáveis.' },
      { phase: 'Pós', description: 'Monitorar impacto, relatórios de evidências e evolução de selo.' },
    ],
  },
  investidor: {
    title: 'Projeto em decisão de investimento',
    steps: [
      { phase: 'Pré', description: 'Analisar clareza, segurança e contrapartida do projeto.' },
      { phase: 'Durante', description: 'Validar transação de valor e comunicação com decisores.' },
      { phase: 'Pós', description: 'Acompanhar resultados, prestação de contas e evidências.' },
    ],
  },
  advogado: {
    title: 'Advogado',
    steps: [
      { phase: 'Pré',     description: 'Prospectar financiadores, validar elegibilidade juridica e preparar documentos.' },
      { phase: 'Durante', description: 'Gerir CRM de oportunidades, associar financiador a projeto e negociar termos.' },
      { phase: 'Pós',     description: 'Revisar contratos, acompanhar compliance e validar relatorio anual.' },
    ],
  },
  contador: {
    title: 'Contador',
    steps: [
      { phase: 'Pré',     description: 'Validar orçamento, estrutura financeira e capacidade de prestacao de contas da ONG.' },
      { phase: 'Durante', description: 'Acompanhar lancamentos, comprovantes, recibos e conciliacao por projeto.' },
      { phase: 'Pós',     description: 'Fechar DRE, emitir parecer contabil e auxiliar no relatorio anual.' },
    ],
  },
  fundacao: {
    title: 'Fundacao / Instituto',
    steps: [
      { phase: 'Pré',     description: 'Criar chamada ou edital, definir criterios, ODS e ticket por area tematica.' },
      { phase: 'Durante', description: 'Avaliar propostas, aprovar grants e acompanhar execucao e evidencias.' },
      { phase: 'Pós',     description: 'Receber relatorio anual, analisar impacto e renovar apoio com base em dados.' },
    ],
  },
};

export default function ProfilePage() {
  const [user, setUserState] = useState<UserProfile | null>(null);
  const [perspective, setPerspectiveState] = useState(getPerspective());
  const router = useRouter();

  useEffect(() => {
    const current = getUser();
    if (!current) {
      router.replace('/login');
      return;
    }
    setUserState(current);
    setPerspectiveState(getPerspective());
  }, [router]);

  function handleLogout() {
    clearUser();
    router.push('/login');
  }

  function changePerspective(value: Perspective) {
    setPerspective(value);
    setPerspectiveState(value);
    const current = getUser();
    if (current) {
      setUserState(current);
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl space-y-8">
        <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Meu Perfil</h1>
              <p className="mt-1 text-sm text-gray-500">Gerencie seu perfil de acesso e selecione a perspectiva do stakeholder.</p>
            </div>
            <button
              type="button"
              onClick={handleLogout}
              className="rounded-xl border border-gray-200 bg-white px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-50"
            >
              Sair
            </button>
          </div>

          {user ? (
            <div className="mt-8 space-y-6">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl border border-gray-100 bg-gray-50 p-5">
                  <p className="text-xs uppercase tracking-[0.25em] text-gray-500">Nome</p>
                  <p className="mt-2 text-lg font-semibold text-gray-900">{user.name}</p>
                  <p className="text-sm text-gray-500">{user.email}</p>
                </div>
                <div className="rounded-3xl border border-gray-100 bg-gray-50 p-5">
                  <p className="text-xs uppercase tracking-[0.25em] text-gray-500">Perfil</p>
                  <p className="mt-2 text-lg font-semibold text-gray-900">{user.role}</p>
                  <p className="text-sm text-gray-500">Seu acesso base para o sistema</p>
                </div>
              </div>

              <div className="rounded-3xl border border-gray-100 bg-white p-6">
                <p className="text-sm font-semibold text-gray-900">Perspectiva ativa</p>
                <p className="text-sm text-gray-500 mt-1">Selecione a visão do stakeholder que você deseja simular.</p>
                <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {PERSPECTIVE_OPTIONS.map((value) => (
                    <button
                      key={value}
                      type="button"
                      onClick={() => changePerspective(value)}
                      className={`rounded-2xl border px-4 py-3 text-left text-sm ${
                        perspective === value
                          ? 'border-brand-600 bg-brand-50 text-brand-700'
                          : 'border-gray-200 bg-gray-50 text-gray-700 hover:border-gray-300'
                      }`}
                    >
                      <span className="text-base">{PERSPECTIVE_LABELS[value].icon}</span>
                      <span className="ml-2 font-semibold">{PERSPECTIVE_LABELS[value].title}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="rounded-3xl border border-gray-100 bg-white p-6">
                <h2 className="text-base font-semibold text-gray-900">Validação de jornada</h2>
                <p className="mt-2 text-sm text-gray-500">Veja o status de consentimento e os passos principais da sua jornada atual.</p>
                <div className="mt-4 space-y-3">
                  <div className="flex items-center justify-between rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3">
                    <span className="text-sm text-gray-700">Consentimento</span>
                    <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">Aceito</span>
                  </div>
                  <div className="rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3">
                    <p className="text-sm font-semibold text-gray-900">Checklist de jornada</p>
                    <ul className="mt-3 space-y-2 text-sm text-gray-600">
                      <li>• Login/Registro mockado</li>
                      <li>• Seleção de perfil e perspectiva</li>
                      <li>• Navegação filtrada por jornada</li>
                      <li>• Validação dos recursos disponíveis</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="rounded-3xl border border-gray-100 bg-white p-6">
                <h2 className="text-base font-semibold text-gray-900">Jornada {PERSPECTIVE_LABELS[perspective].title}</h2>
                <p className="mt-2 text-sm text-gray-500">Foco da visão atual com fases de pré, durante e pós.</p>
                <div className="mt-4 grid gap-4 sm:grid-cols-3">
                  {PERSPECTIVE_JOURNEYS[perspective].steps.map((step) => (
                    <div key={step.phase} className="rounded-2xl border border-gray-200 bg-gray-50 p-4">
                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">{step.phase}</p>
                      <p className="mt-2 text-sm text-gray-700">{step.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div className="rounded-3xl border border-gray-100 bg-gray-50 p-6 text-center text-sm text-gray-600">
              Carregando perfil...
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
