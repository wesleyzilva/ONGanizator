// Tipos compartilhados entre web e api

export type ODS =
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12
  | 13
  | 14
  | 15
  | 16
  | 17;

export type OrgType = "ong" | "cooperativa" | "negocio_social";

export type MaturityLevel =
  | "iniciante"
  | "em_desenvolvimento"
  | "consolidado"
  | "referencia";

export type DocumentStatus =
  | "pendente"
  | "em_analise"
  | "aprovado"
  | "reprovado";

export type ProjectStatus =
  | "rascunho"
  | "em_avaliacao"
  | "ativo"
  | "pausado"
  | "encerrado";

export type UserRole =
  | "admin"
  | "avaliador"
  | "gestor_captacao"
  | "organizacao"
  | "investidor"
  | "patrocinador";

export interface Organization {
  id: string;
  razaoSocial: string;
  nomeFantasia: string;
  cnpj: string;
  tipo: OrgType;
  areaAtuacao: string;
  ods: ODS[];
  score: number;
  nivel: MaturityLevel;
  estado: string;
  cidade: string;
  ativo: boolean;
  criadoEm: string;
}

export interface Project {
  id: string;
  organizacaoId: string;
  organizacaoNome: string;
  titulo: string;
  descricao: string;
  ods: ODS[];
  status: ProjectStatus;
  valorMeta: number;
  valorCaptado: number;
  beneficiarios: number;
  estado: string;
  cidade: string;
  dataInicio: string;
  dataFim: string;
  criadoEm: string;
}

export interface Investor {
  id: string;
  nome: string;
  tipo: "pessoa_fisica" | "empresa" | "instituto" | "fundacao";
  ods: ODS[];
  ticketMin: number;
  ticketMax: number;
  regioes: string[];
  ativo: boolean;
}

export interface ImpactIndicator {
  projetoId: string;
  nome: string;
  meta: number;
  realizado: number;
  unidade: string;
  periodo: string;
}

export interface DashboardSummary {
  totalOrganizacoes: number;
  totalProjetos: number;
  totalInvestidores: number;
  totalCaptado: number;
  totalBeneficiarios: number;
  projetosPorStatus: Record<ProjectStatus, number>;
  distribuicaoODS: Record<string, number>;
}

// Relatório anual compartilhado
export interface AnnualProjectSummary {
  id: string;
  titulo: string;
  organizacaoNome: string;
  valorMeta: number;
  valorCaptado: number;
  beneficiarios: number;
  ods: ODS[];
}

export interface AnnualReport {
  year: number;
  perspective: 'investidor' | 'advogado' | 'ong' | 'adm';
  totals: {
    receita: number;
    despesas: number;
    saldo: number;
    totalBeneficiarios: number;
    totalProjetos: number;
  };
  projects: AnnualProjectSummary[];
  indicators?: ImpactIndicator[];
  generatedAt?: string;
}
