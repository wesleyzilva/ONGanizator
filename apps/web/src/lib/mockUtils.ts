import { PROJECTS } from './mockData';

type UserRole = 'administrador' | 'ong' | 'investidor' | 'doador_pf' | 'doador_pj';

export type UserProfile = {
  email: string;
  name?: string;
  role: UserRole;
  organization?: string;
  cnpj?: string;
  consent?: boolean;
};

const USER_KEY = 'onganizator_user';
const PROJECTS_KEY = 'onganizator_projects';
const CONTRIBUTIONS_KEY = 'onganizator_contributions';
const CONSENT_KEY = 'onganizator_consent';

function canUseStorage() {
  return typeof window !== 'undefined' && typeof window.localStorage !== 'undefined';
}

function readStorage<T>(key: string, fallback: T): T {
  if (!canUseStorage()) return fallback;
  try {
    const raw = window.localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : fallback;
  } catch {
    return fallback;
  }
}

function writeStorage<T>(key: string, value: T) {
  if (!canUseStorage()) return;
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
  } catch {
    // noop
  }
}

export function getUser(): UserProfile | null {
  const user = readStorage<UserProfile | null>(USER_KEY, null);
  if (user && typeof user.consent !== 'boolean') {
    user.consent = false;
  }
  return user;
}

export function setUser(user: UserProfile) {
  const next = { ...user, consent: user.consent ?? false };
  writeStorage(USER_KEY, next);
  return next;
}

export function clearUser() {
  if (!canUseStorage()) return;
  window.localStorage.removeItem(USER_KEY);
}

export function getConsent() {
  return readStorage<boolean>(CONSENT_KEY, false);
}

export function setConsent(value: boolean) {
  writeStorage(CONSENT_KEY, value);
  return value;
}

export function getProjects() {
  return readStorage<any[]>(PROJECTS_KEY, PROJECTS);
}

export function saveProjects(projects: any[]) {
  writeStorage(PROJECTS_KEY, projects);
  return projects;
}

export function addProject(project: any) {
  const stored = getProjects();
  const next = [project, ...stored];
  saveProjects(next);
  return next;
}

export function getContributions() {
  return readStorage<any[]>(CONTRIBUTIONS_KEY, []);
}

export function addContribution(contribution: any) {
  const stored = getContributions();
  const next = [...stored, contribution];
  writeStorage(CONTRIBUTIONS_KEY, next);
  return next;
}

export function clearMockStorage() {
  if (!canUseStorage()) return;
  window.localStorage.removeItem(PROJECTS_KEY);
  window.localStorage.removeItem(CONTRIBUTIONS_KEY);
  window.localStorage.removeItem(CONSENT_KEY);
  window.localStorage.removeItem(USER_KEY);
}
