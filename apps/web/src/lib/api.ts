import {
  ORGS,
  PROJECTS,
  INVESTORS,
  getDashboard,
  getImpactoResumo,
  getMonitoramentoConsolidado,
  getMonitoramentoProjeto,
  getOrgScore,
} from "./mockData";

function asPromise<T>(v: T): Promise<T> {
  return Promise.resolve(v);
}

export const api = {
  dashboard: () => asPromise(getDashboard()),
  organizacoes: (params?: Record<string, string>) => {
    let data = [...ORGS];
    if (params?.tipo) data = data.filter((o) => o.tipo === params.tipo);
    if (params?.estado) data = data.filter((o) => o.estado === params.estado);
    if (params?.nivel) data = data.filter((o) => o.nivel === params.nivel);
    if (params?.ods)
      data = data.filter((o) => o.ods.includes(Number(params.ods) as any));
    return asPromise({ total: data.length, data });
  },
  organizacao: (id: string) => asPromise(ORGS.find((o) => o.id === id)),
  orgScore: (id: string) => asPromise(getOrgScore(id)),
  projetos: (params?: Record<string, string>) => {
    let data = [...PROJECTS];
    if (params?.status) data = data.filter((p) => p.status === params.status);
    if (params?.estado) data = data.filter((p) => p.estado === params.estado);
    if (params?.ods)
      data = data.filter((p) => p.ods.includes(Number(params.ods) as any));
    return asPromise({ total: data.length, data });
  },
  projeto: (id: string) => asPromise(PROJECTS.find((p) => p.id === id)),
  investidores: () => asPromise({ total: INVESTORS.length, data: INVESTORS }),
  matchInvestidor: (id: string) => {
    const inv = INVESTORS.find((i) => i.id === id)!;
    const matches = PROJECTS.filter(
      (p) =>
        p.status === "ativo" &&
        p.valorMeta >= inv.ticketMin &&
        p.valorMeta <= inv.ticketMax &&
        (inv.regioes.includes(p.estado) || inv.regioes.length === 0) &&
        p.ods.some((o) => inv.ods.includes(o as any)),
    );
    return asPromise({
      investidorId: id,
      totalMatches: matches.length,
      projetos: matches,
    });
  },
  impactoResumo: () => asPromise(getImpactoResumo()),
  impactoProjeto: (id: string) => asPromise(null),
  monitoramentoConsolidado: () => asPromise(getMonitoramentoConsolidado()),
  monitoramentoProjeto: (id: string) => asPromise(getMonitoramentoProjeto(id)),
};
