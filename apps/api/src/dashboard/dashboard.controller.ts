import { Controller, Get } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import {
  MOCK_ORGANIZATIONS,
  MOCK_PROJECTS,
  MOCK_INVESTORS,
} from "../mock/seed";

@ApiTags("Dashboard")
@Controller("dashboard")
export class DashboardController {
  @Get()
  getSummary() {
    const projetosPorStatus: Record<string, number> = {};
    MOCK_PROJECTS.forEach((p) => {
      projetosPorStatus[p.status] = (projetosPorStatus[p.status] || 0) + 1;
    });

    const odsCount: Record<string, number> = {};
    MOCK_PROJECTS.forEach((p) => {
      p.ods.forEach((o) => {
        odsCount[`ODS ${o}`] = (odsCount[`ODS ${o}`] || 0) + 1;
      });
    });

    const scoreMedia = Math.round(
      MOCK_ORGANIZATIONS.reduce((s, o) => s + o.score, 0) /
        MOCK_ORGANIZATIONS.length,
    );

    return {
      totalOrganizacoes: MOCK_ORGANIZATIONS.length,
      totalProjetos: MOCK_PROJECTS.length,
      totalInvestidores: MOCK_INVESTORS.length,
      totalCaptadoBRL: MOCK_PROJECTS.reduce((s, p) => s + p.valorCaptado, 0),
      totalMetaBRL: MOCK_PROJECTS.reduce((s, p) => s + p.valorMeta, 0),
      totalBeneficiarios: MOCK_PROJECTS.reduce(
        (s, p) => s + p.beneficiarios,
        0,
      ),
      projetosPorStatus,
      distribuicaoODS: odsCount,
      scoreMedioOrganizacoes: scoreMedia,
      topProjetos: MOCK_PROJECTS.filter((p) => p.status === "ativo")
        .sort((a, b) => b.valorCaptado - a.valorCaptado)
        .slice(0, 5),
    };
  }
}
