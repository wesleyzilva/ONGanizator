export type { Perspective } from './mockAuth';
import type { Perspective } from './mockAuth';

export interface NavItem {
  label: string;
  href: string;
  icon: string;
}

export interface NavGroup {
  label: string;
  items: NavItem[];
}

export const PERSPECTIVE_LABELS: Record<Perspective, { title: string; subtitle: string }> = {
  adm: { title: 'ADM', subtitle: 'Visão completa de governança e operação' },
  ong: { title: 'ONG', subtitle: 'Jornada gamificada por selos e maturidade' },
  investidor: { title: 'Investidor', subtitle: 'Decisão de investimento com clareza e contrapartida' },
  advogado: { title: 'Advogado/Contador', subtitle: 'CRM profissional e compliance financeiro' },
};

const NAV_GROUPS: NavGroup[] = [
  {
    label: 'Principal',
    items: [
      { label: 'Dashboard', href: '/', icon: '⬛' },
      { label: 'Perfil', href: '/perfil', icon: '👤' },
      { label: 'Organizações', href: '/organizacoes', icon: '🏢' },
      { label: 'Projetos', href: '/projetos', icon: '🌱' },
      { label: 'Investidores', href: '/investidores', icon: '💼' },
    ],
  },
  {
    label: 'Captação',
    items: [
      { label: 'Marketplace', href: '/marketplace', icon: '🔍' },
      { label: 'Crowdfunding', href: '/crowdfunding', icon: '🎁' },
      { label: 'CRM', href: '/crm', icon: '👥' },
    ],
  },
  {
    label: 'Governança',
    items: [
      { label: 'Diagnóstico', href: '/diagnostico', icon: '🩺' },
      { label: 'Risco Reputacional', href: '/risco', icon: '⚠️' },
      { label: 'Contabilidade', href: '/contabilidade', icon: '📒' },
    ],
  },
  {
    label: 'Impacto',
    items: [
      { label: 'Monitoramento', href: '/monitoramento', icon: '📡' },
      { label: 'Impacto & ESG', href: '/impacto', icon: '📊' },
      { label: 'Mentoria', href: '/mentoria', icon: '🎓' },
    ],
  },
  {
    label: 'Institucional',
    items: [
      { label: 'Para Investidores', href: '/para-investidores', icon: '🚀' },
    ],
  },
];

const VIEW_ALLOWED_HREFS: Record<Perspective, string[]> = {
  adm: [
    '/',
    '/organizacoes',
    '/projetos',
    '/investidores',
    '/marketplace',
    '/crowdfunding',
    '/crm',
    '/diagnostico',
    '/risco',
    '/contabilidade',
    '/monitoramento',
    '/impacto',
    '/mentoria',
    '/para-investidores',
    '/login',
    '/registro',
    '/perfil',
  ],
  ong: [
    '/',
    '/organizacoes',
    '/projetos',
    '/diagnostico',
    '/monitoramento',
    '/impacto',
    '/crowdfunding',
    '/perfil',
    '/login',
    '/registro',
  ],
  investidor: [
    '/',
    '/investidores',
    '/marketplace',
    '/crowdfunding',
    '/para-investidores',
    '/perfil',
    '/login',
    '/registro',
  ],
  advogado: [
    '/',
    '/organizacoes',
    '/projetos',
    '/investidores',
    '/crm',
    '/contabilidade',
    '/risco',
    '/perfil',
    '/login',
    '/registro',
  ],
};

export function getMenuGroupsForPerspective(perspective: Perspective) {
  const allowed = new Set(VIEW_ALLOWED_HREFS[perspective]);
  return NAV_GROUPS.map((group) => ({
    ...group,
    items: group.items.filter((item) => allowed.has(item.href)),
  })).filter((group) => group.items.length > 0);
}
