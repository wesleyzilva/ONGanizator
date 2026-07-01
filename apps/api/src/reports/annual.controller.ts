import { Controller, Get, Query } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import {
  MOCK_PROJECTS,
  MOCK_INDICATORS,
} from "../mock/seed";
import { AnnualReport } from "@onganizator/shared";

@ApiTags("Reports")
@Controller("reports/annual")
export class AnnualReportsController {
  @Get()
  getAnnualReport(@Query('year') year = '2024', @Query('perspective') perspective = 'investidor') {
    const y = Number(year || 2024);

    const projects = MOCK_PROJECTS.map((p) => ({
      id: p.id,
      titulo: p.titulo,
      organizacaoNome: p.organizacaoNome,
      valorMeta: p.valorMeta,
      valorCaptado: p.valorCaptado,
      beneficiarios: p.beneficiarios,
      ods: p.ods,
    }));

    const receita = projects.reduce((s, p) => s + p.valorCaptado, 0);
    const despesas = Math.round(receita * 0.18); // mock
    const saldo = receita - despesas;
    const totalBeneficiarios = projects.reduce((s, p) => s + p.beneficiarios, 0);

    const report: AnnualReport = {
      year: y,
      perspective: perspective as any,
      totals: {
        receita,
        despesas,
        saldo,
        totalBeneficiarios,
        totalProjetos: projects.length,
      },
      projects,
      indicators: MOCK_INDICATORS,
      generatedAt: new Date().toISOString(),
    };

    return report;
  }
}
