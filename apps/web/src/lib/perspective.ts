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

export const PERSPECTIVE_LABELS: Record<Perspective, { title: string; subtitle: string; icon: string }> = {
  adm:       { title: 'Administrador',       subtitle: 'Visão completa de governança e operação',                   icon: '⚙️' },
  ong:       { title: 'ONG',                 subtitle: 'Projetos, selos, evidências e prestação de contas',         icon: '🌱' },
  investidor:{ title: 'Investidor',          subtitle: 'Decisão de aporte com clareza, risco e contrapartida',      icon: '💼' },
  advogado:  { title: 'Advogado',            subtitle: 'Prospecção de financiadores, compliance e contratos',       icon: '⚖️' },
  contador:  { title: 'Contador',            subtitle: 'Validação financeira, comprovantes e prestação de contas',  icon: '📒' },
  fundacao:  { title: 'Fundação / Instituto',subtitle: 'Grants, chamadas, avaliação de projetos e impacto social',  icon: '🏛️' },
};

const NAV_GROUPS: NavGroup[] = [
  {
    label: 'Principal',
    items: [
      { label: 'Dashboard',    href: '/',             icon: '⬛' },
      { label: 'Organizações', href: '/organizacoes', icon: '🏢' },
      { label: 'Projetos',     href: '/projetos',     icon: '🌱' },
      { label: 'Financiadores',href: '/investidores', icon: '💼' },
    ],
  },
  {
    label: 'Captação',
    items: [
      { label: 'Prospecção',   href: '/crm',          icon: '🎯' },
      { label: 'Incentivos Fiscais', href: '/captacao', icon: '📊' },
      { label: 'Marketplace',  href: '/marketplace',  icon: '🔍' },
      { label: 'Crowdfunding', href: '/crowdfunding', icon: '🎁' },
    ],
  },
  {
    label: 'Governança',
    items: [
      { label: 'Diagnóstico',  href: '/diagnostico',  icon: '🩺' },
      { label: 'Risco',        href: '/risco',        icon: '⚠️' },
      { label: 'Contabilidade',href: '/contabilidade',icon: '📒' },
    ],
  },
  {
    label: 'Impacto',
    items: [
      { label: 'Monitoramento',href: '/monitoramento',icon: '📡' },
      { label: 'Impacto & ESG',href: '/impacto',      icon: '📊' },
      { label: 'Mentoria',     href: '/mentoria',     icon: '🎓' },
    ],
  },
  {
    label: 'Institucional',
    items: [
      { label: 'Para Investidores', href: '/para-investidores', icon: '🚀' },
      { label: 'Para Profissionais', href: '/para-profissionais', icon: '🎓' },
    ],
  },
  {
    label: 'Configuração',
    items: [
      { label: 'Usuários / Perfil', href: '/perfil', icon: '👤' },
      { label: 'Permissões', href: '/permissoes', icon: '🔐' },
      { label: 'White-label', href: '/configuracoes', icon: '🎨' },
      { label: 'Demo', href: '/demo', icon: '🎬' },
    ],
  },
];

// Rotas permitidas por perspectiva.
// advogado: prospecção, ONGs, projetos, financiadores e risco (sem contabilidade — isso é do contador).
// contador: contabilidade, projetos e monitoramento (sem CRM/prospecção).
// fundacao: como financiador institucional — projetos, financiadores, marketplace e impacto.
const VIEW_ALLOWED_HREFS: Record<Perspective, string[]> = {
  adm: [
    '/', '/organizacoes', '/projetos', '/investidores',
    '/marketplace', '/crowdfunding', '/crm', '/captacao',
    '/diagnostico', '/risco', '/contabilidade',
    '/monitoramento', '/impacto', '/mentoria',
    '/para-investidores', '/para-profissionais',
    '/permissoes', '/configuracoes',
    '/login', '/registro', '/perfil', '/demo',
    '/onboarding', '/crm/lead',
  ],
  ong: [
    '/', '/organizacoes', '/projetos',
    '/diagnostico', '/monitoramento', '/impacto',
    '/crowdfunding', '/marketplace', '/mentoria',
    '/login', '/registro',
    '/onboarding',
  ],
  investidor: [
    '/', '/investidores', '/projetos', '/marketplace', '/crowdfunding',
    '/para-investidores', '/impacto',
    '/login', '/registro',
  ],
  advogado: [
    '/', '/organizacoes', '/projetos', '/investidores',
    '/crm', '/crm/lead', '/captacao', '/risco',
    '/para-profissionais', '/login', '/registro',
  ],
  contador: [
    '/', '/projetos', '/organizacoes', '/contabilidade', '/monitoramento',
    '/captacao', '/para-profissionais', '/login', '/registro',
  ],
  fundacao: [
    '/', '/projetos', '/investidores', '/marketplace',
    '/monitoramento', '/impacto', '/para-investidores',
    '/diagnostico', '/login', '/registro',
  ],
};

export function getMenuGroupsForPerspective(perspective: Perspective) {
  const allowed = new Set(VIEW_ALLOWED_HREFS[perspective]);
  return NAV_GROUPS.map((group) => ({
    ...group,
    items: group.items.filter((item) => allowed.has(item.href)),
  })).filter((group) => group.items.length > 0);
}

/**
 * Checks whether a given app-relative pathname is accessible for the perspective.
 * pathname should already have the basePath (/ONGanizator) stripped.
 * Supports sub-routes: e.g. '/projetos/123' is allowed if '/projetos' is in the list.
 */
export function isRouteAllowed(perspective: Perspective, pathname: string): boolean {
  const allowed = VIEW_ALLOWED_HREFS[perspective];
  return allowed.some((href) => pathname === href || pathname.startsWith(href + '/'));
}
