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
  | "aprovado_para_prospeccao"
  | "ativo"
  | "pausado"
  | "concluido"
  | "encerrado";

export type SeloNivel = "bronze" | "prata" | "ouro";

export type UserRole =
  | "administrador"
  | "ong"
  | "investidor"
  | "advogado"
  | "contador"
  | "fundacao";

export type Perspective =
  | "adm"
  | "ong"
  | "investidor"
  | "advogado"
  | "contador"
  | "fundacao";

export type MecanismoCaptacao =
  | "doacao-direta"
  | "fia"
  | "lei-rouanet"
  | "lei-esporte"
  | "pronon-pronas"
  | "mrosc"
  | "fundo-idoso"
  | "lei-reciclagem"
  | "lei-audiovisual"
  | "edital-publico";

export type CRMEtapa =
  | "Backlog"
  | "Prospecção"
  | "Em andamento"
  | "Finalizado";

export type CRMSemaforo = "verde" | "amarelo" | "vermelho";

export type TimelineEventType =
  | "marco"
  | "relatorio"
  | "aporte"
  | "conquista"
  | "auditoria"
  | "aprovacao";

export interface TimelineEvent {
  projetoId: string;
  data: string;
  tipo: TimelineEventType;
  titulo: string;
  descricao: string;
  responsavel?: string;
}

export interface AuditEvent {
  id: string;
  entidade: string;
  entidadeId: string;
  tipo: string;
  descricao: string;
  responsavel: string;
  perspectiva: Perspective;
  data: string;
}

export interface Selo {
  nivel: SeloNivel;
  label: string;
  icon: string;
  criterios: string[];
}

export interface CRMLead {
  id: string;
  financiadorNome: string;
  financiadorId?: string;
  projetoId?: string;
  projetoNome?: string;
  orgNome?: string;
  etapa: CRMEtapa;
  semaforo: CRMSemaforo;
  ticket?: number;
  mecanismo?: MecanismoCaptacao;
  proximaAcao?: string;
  criadoEm: string;
  atualizadoEm?: string;
}

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
  selo?: SeloNivel | null;
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
  projetosPorStatus: Partial<Record<ProjectStatus, number>>;
  distribuicaoODS: Record<string, number>;
}

export interface BeneficioFiscal {
  economiaEstimada: number;
  valorEfetivo: number;
  percentualDesconto: number;
  limiteDeducao: number;
  IR_TOTAL: number;
  mecanismo: MecanismoCaptacao;
}

