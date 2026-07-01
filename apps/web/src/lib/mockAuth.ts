export type UserRole = 'administrador' | 'ong' | 'investidor' | 'advogado' | 'contador' | 'fundacao';
export type Perspective = 'adm' | 'ong' | 'investidor' | 'advogado' | 'contador' | 'fundacao';

export interface UserProfile {
  name: string;
  email: string;
  role: UserRole;
  perspective: Perspective;
  consent: boolean;
}

const USER_KEY = 'onganizator_user';
const PERSPECTIVE_KEY = 'onganizator_perspective';

function readStorage<T>(key: string, fallback: T): T {
  if (typeof window === 'undefined') return fallback;
  try {
    const raw = window.localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : fallback;
  } catch {
    return fallback;
  }
}

function writeStorage<T>(key: string, value: T) {
  if (typeof window === 'undefined') return;
  window.localStorage.setItem(key, JSON.stringify(value));
}

export const ROLE_TO_PERSPECTIVE: Record<UserRole, Perspective> = {
  administrador: 'adm',
  ong: 'ong',
  investidor: 'investidor',
  advogado: 'advogado',
  contador: 'contador',
  fundacao: 'fundacao',
};

export const PERSPECTIVE_OPTIONS: Perspective[] = ['adm', 'ong', 'investidor', 'advogado', 'contador', 'fundacao'];

export function getUser(): UserProfile | null {
  const stored = readStorage<Partial<UserProfile> | null>(USER_KEY, null);
  if (!stored || typeof stored.email !== 'string' || typeof stored.name !== 'string') {
    return null;
  }

  const role = stored.role && ['administrador', 'ong', 'investidor', 'advogado', 'contador', 'fundacao'].includes(stored.role)
    ? stored.role
    : 'administrador';

  const perspective = (stored.perspective && PERSPECTIVE_OPTIONS.includes(stored.perspective))
    ? stored.perspective
    : ROLE_TO_PERSPECTIVE[role as UserRole];

  return {
    name: stored.name,
    email: stored.email,
    role: role as UserRole,
    perspective,
    consent: Boolean(stored.consent),
  };
}

export function setUser(user: UserProfile) {
  writeStorage(USER_KEY, user);
  setPerspective(user.perspective);
}

export function clearUser() {
  if (typeof window === 'undefined') return;
  window.localStorage.removeItem(USER_KEY);
  window.localStorage.removeItem(PERSPECTIVE_KEY);
}

export function getPerspective(): Perspective {
  const stored = readStorage<Perspective | null>(PERSPECTIVE_KEY, null);
  return stored && PERSPECTIVE_OPTIONS.includes(stored) ? stored : 'adm';
}

export function setPerspective(perspective: Perspective) {
  writeStorage(PERSPECTIVE_KEY, perspective);
  const user = getUser();
  if (user) {
    writeStorage(USER_KEY, { ...user, perspective });
  }
}

export const DEMO_USERS: UserProfile[] = [
  {
    name: 'Administrador Demo',
    email: 'admin@onganizator.com.br',
    role: 'administrador',
    perspective: 'adm',
    consent: true,
  },
  {
    name: 'ONG Demo',
    email: 'ong@demo.org',
    role: 'ong',
    perspective: 'ong',
    consent: true,
  },
  {
    name: 'Investidor Demo',
    email: 'investidor@demo.com.br',
    role: 'investidor',
    perspective: 'investidor',
    consent: true,
  },
  {
    name: 'Advogado Demo',
    email: 'advogado@demo.com.br',
    role: 'advogado',
    perspective: 'advogado',
    consent: true,
  },
  {
    name: 'Contador Demo',
    email: 'contador@demo.com.br',
    role: 'contador',
    perspective: 'contador',
    consent: true,
  },
  {
    name: 'Fundação Demo',
    email: 'fundacao@demo.org',
    role: 'fundacao',
    perspective: 'fundacao',
    consent: true,
  },
];
