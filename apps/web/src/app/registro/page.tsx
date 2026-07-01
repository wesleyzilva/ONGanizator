'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { getUser, ROLE_TO_PERSPECTIVE, setUser, UserProfile, UserRole } from '@/lib/mockAuth';

const ROLE_LABELS: Record<UserRole, string> = {
  administrador: 'Administrador',
  ong: 'ONG',
  investidor: 'Investidor',
  advogado: 'Advogado',
};

export default function RegisterPage() {
  const [current, setCurrent] = useState<Partial<UserProfile>>({
    name: '',
    email: '',
    role: 'ong',
  });
  const [message, setMessage] = useState('');
  const router = useRouter();

  useEffect(() => {
    if (getUser()) {
      router.replace('/perfil');
    }
  }, [router]);

  function handleChange(field: keyof UserProfile, value: string) {
    setCurrent((prev) => ({ ...prev, [field]: value }));
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!current.email || !current.name || !current.role) {
      setMessage('Preencha nome, email e perfil para criar sua conta.');
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

    router.push('/perfil');
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl space-y-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">Registro de perfil</h1>
          <p className="mt-2 text-sm text-gray-600">Cadastre um perfil mockado para explorar as jornadas de ONG, Investidor, Advogado/Contador e ADM.</p>
        </div>

        <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nome</label>
              <input
                id="name"
                type="text"
                value={current.name}
                onChange={(event) => handleChange('name', event.target.value)}
                className="mt-1 w-full rounded-xl border-gray-300 bg-gray-50 px-4 py-3 focus:border-brand-500 focus:ring-brand-500"
                placeholder="Seu nome"
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
                placeholder="seu@email.com"
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
              Criar perfil
            </button>
          </form>
          <div className="mt-6 text-center text-sm text-gray-500">
            <p>Já possui um perfil? <Link href="/login" className="font-semibold text-brand-600 underline">Entrar</Link></p>
          </div>
        </div>
      </div>
    </div>
  );
}
 
