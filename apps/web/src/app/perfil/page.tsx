'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { clearUser, getUser, setUser, type UserProfile } from '@/lib/mockAuth';
import ProfileCompleteness from '@/components/ProfileCompleteness';

export default function PerfilPage() {
  const router = useRouter();
  const [user, setUserState] = useState<UserProfile | null>(null);
  const [message, setMessage] = useState('');
  const [consent, setConsentState] = useState(false);

  useEffect(() => {
    const current = getUser();
    if (!current) {
      router.push('/login');
      return;
    }
    setUserState(current);
    setConsentState(Boolean(current.consent));
  }, [router]);

  if (!user) {
    return <div className="p-8 text-center text-gray-500">Carregando perfil...</div>;
  }

  function updateField(field: keyof UserProfile, value: string) {
    setUserState((current) => (current ? { ...current, [field]: value } : current));
  }

  function handleSave() {
    if (!user) return;
    setUser(user);
    setMessage('Perfil atualizado com sucesso.');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function handleLogout() {
    clearUser();
    router.push('/login');
  }

  function handleConsent() {
    if (!user) return;
    const updated = { ...user, consent: true };
    setUser(updated);
    setUserState(updated);
    setConsentState(true);
  }

  return (
    <div className="p-8 max-w-3xl mx-auto space-y-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Meu perfil</h1>
          <p className="text-sm text-gray-500 mt-1">Visualize e atualize seus dados mock de usuário.</p>
        </div>
        <button onClick={handleLogout} className="rounded-lg border border-gray-200 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Sair</button>
      </div>

      {message && <div className="rounded-2xl bg-green-50 border border-green-100 p-4 text-sm text-green-700">{message}</div>}

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.2fr,0.8fr]">
        <div className="space-y-6">
          <div className="card p-6 space-y-5">
            <h2 className="text-lg font-semibold text-gray-900">Dados do usuário</h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <label className="space-y-1 text-sm text-gray-700">
                <span>Email</span>
                <input
                  value={user.email}
                  onChange={(e) => updateField('email', e.target.value)}
                  className="w-full border border-gray-200 rounded-lg px-3 py-2"
                />
              </label>
              <label className="space-y-1 text-sm text-gray-700">
                <span>Nome</span>
                <input
                  value={user.name}
                  onChange={(e) => updateField('name', e.target.value)}
                  className="w-full border border-gray-200 rounded-lg px-3 py-2"
                />
              </label>
            </div>
            <label className="space-y-1 text-sm text-gray-700">
              <span>Perfil</span>
              <input
                value={user.role}
                disabled
                className="w-full border border-gray-200 rounded-lg px-3 py-2 bg-gray-50"
              />
            </label>
            {user.role === 'ong' && (
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <label className="space-y-1 text-sm text-gray-700">
                  <span>Organização</span>
                  <input
                    value={user.organization ?? ''}
                    onChange={(e) => updateField('organization', e.target.value)}
                    className="w-full border border-gray-200 rounded-lg px-3 py-2"
                  />
                </label>
                <label className="space-y-1 text-sm text-gray-700">
                  <span>CNPJ</span>
                  <input
                    value={user.cnpj ?? ''}
                    onChange={(e) => updateField('cnpj', e.target.value)}
                    className="w-full border border-gray-200 rounded-lg px-3 py-2"
                  />
                </label>
              </div>
            )}
            <button onClick={handleSave} className="rounded-lg bg-brand-600 text-white px-5 py-2.5 text-sm font-semibold">Salvar perfil</button>
          </div>

          <div className="card p-6 space-y-4">
            <h2 className="text-lg font-semibold text-gray-900">Consentimento</h2>
            <p className="text-sm text-gray-500">Você pode confirmar o uso do protótipo para simulação de dados em localStorage.</p>
            <div className="flex items-center gap-3">
              <span className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${consent ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>
                {consent ? 'Aceito' : 'Pendente'}
              </span>
              {!consent && (
                <button onClick={handleConsent} className="rounded-lg bg-brand-600 text-white px-4 py-2 text-sm">Aceitar consentimento</button>
              )}
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="card p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Status do perfil</h2>
            <ProfileCompleteness data={user} />
          </div>
          <div className="card p-6 bg-brand-50 border border-brand-100">
            <p className="text-sm text-brand-700">
              Um perfil completo torna sua ONG ou doador mais confiável no protótipo. Complete nome, email, organização e CNPJ para melhorar o histórico mock.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
 
