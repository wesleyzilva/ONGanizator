'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { DEMO_USERS, getUser, ROLE_TO_PERSPECTIVE, setUser, UserProfile, UserRole } from '@/lib/mockAuth';

const ROLE_LABELS: Record<UserRole, string> = {
  administrador: 'Administrador',
  ong: 'ONG',
  investidor: 'Investidor',
  advogado: 'Advogado',
  contador: 'Contador',
  fundacao: 'Fundação / Instituto',
};

export default function LoginPage() {
  const [current, setCurrent] = useState<Partial<UserProfile>>({
    name: 'Administrador Demo',
    email: 'admin@onganizator.com.br',
    role: 'administrador',
  });
  const [message, setMessage] = useState('');
  const [isSwitching, setIsSwitching] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsSwitching(!!getUser());
  }, []);

  function handleChange(field: keyof UserProfile, value: string) {
    setCurrent((prev) => ({ ...prev, [field]: value }));
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!current.email || !current.name || !current.role) {
      setMessage('Preencha nome, email e perfil para continuar.');
      return;
    }

    const role = current.role as UserRole;
    setUser({
      name: current.name,
      email: current.email,
      role,
      perspective: ROLE_TO_PERSPECTIVE[role],
      consent: true,
    });

    router.push('/');
  }

  function loginDemo(user: UserProfile) {
    setUser(user);
    router.push('/');
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl space-y-8">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">
              {isSwitching ? 'Trocar perfil' : 'Entrar no ONGanizator'}
            </h1>
            <p className="mt-2 text-sm text-gray-600">
              {isSwitching
                ? 'Selecione outro perfil para mudar a jornada ativa. Seus dados de sessão serão atualizados.'
                : 'Selecione o perfil com que deseja navegar. Cada perfil ativa menus e jornadas específicas.'}
            </p>
          </div>
          {isSwitching && (
            <button
              onClick={() => router.back()}
              className="shrink-0 text-sm text-gray-500 hover:text-gray-700 border border-gray-200 rounded-lg px-3 py-1.5"
            >
              ← Voltar
            </button>
          )}
        </div>

        <div className="grid gap-4 lg:grid-cols-2">
          <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-gray-900">Entrar como usuário</h2>
            <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nome</label>
                <input
                  id="name"
                  type="text"
                  value={current.name}
                  onChange={(event) => handleChange('name', event.target.value)}
                  className="mt-1 w-full rounded-xl border-gray-300 bg-gray-50 px-4 py-3 focus:border-brand-500 focus:ring-brand-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  id="email"
                  type="email"
                  value={current.email}
                  onChange={(event) => handleChange('email', event.target.value)}
                  className="mt-1 w-full rounded-xl border-gray-300 bg-gray-50 px-4 py-3 focus:border-brand-500 focus:ring-brand-500"
                />
              </div>
              <div>
                <label htmlFor="role" className="block text-sm font-medium text-gray-700">Perfil</label>
                <select
                  id="role"
                  value={current.role}
                  onChange={(event) => handleChange('role', event.target.value)}
                  className="mt-1 w-full rounded-xl border-gray-300 bg-gray-50 px-4 py-3 focus:border-brand-500 focus:ring-brand-500"
                >
                  {Object.entries(ROLE_LABELS).map(([value, label]) => (
                    <option key={value} value={value}>{label}</option>
                  ))}
                </select>
              </div>
              {message && <p className="text-sm text-red-600">{message}</p>}
              <button
                type="submit"
                className="w-full rounded-xl bg-brand-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-brand-700"
              >
                Entrar
              </button>
            </form>
          </div>

          <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-gray-900">Perfis de exemplo</h2>
            <p className="mt-2 text-sm text-gray-600">Use um perfil pronto para simular rapidamente cada jornada do sistema.</p>
            <div className="mt-5 space-y-3">
              {DEMO_USERS.map((user) => (
                <button
                  key={user.email}
                  type="button"
                  onClick={() => loginDemo(user)}
                  className="flex w-full items-center justify-between rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 text-left text-sm font-medium text-gray-800 hover:border-brand-300 hover:bg-white"
                >
                  <span>{user.name}</span>
                  <span className="text-xs text-gray-500">{ROLE_LABELS[user.role]}</span>
                </button>
              ))}
            </div>
            <p className="mt-4 text-xs text-gray-500">Se já tiver um perfil, acesse sua página de perfil depois do login.</p>
            <Link href="/registro" className="mt-4 inline-flex rounded-xl border border-brand-600 bg-brand-50 px-4 py-3 text-sm font-semibold text-brand-700 hover:bg-brand-100">
              Criar novo perfil
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
