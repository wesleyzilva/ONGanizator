import { Controller, Get, Param, NotFoundException } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { MOCK_INDICATORS } from "../mock/seed";
import { MOCK_PROJECTS } from "../mock/seed";

@ApiTags("Impacto")
@Controller("impacto")
export class ImpactoController {
  @Get("projeto/:id")
  getByProjeto(@Param("id") id: string) {
    const prj = MOCK_PROJECTS.find((p) => p.id === id);
    if (!prj) throw new NotFoundException();
    const indicadores = MOCK_INDICATORS.filter((i) => i.projetoId === id);
    return { projeto: prj, indicadores };
  }

  @Get("resumo")
  getResumo() {
    const totalBeneficiarios = MOCK_PROJECTS.reduce(
      (s, p) => s + p.beneficiarios,
      0,
    );
    const totalCaptado = MOCK_PROJECTS.reduce((s, p) => s + p.valorCaptado, 0);
    const odsCount: Record<string, number> = {};
    MOCK_PROJECTS.forEach((p) => {
      p.ods.forEach((o) => {
        odsCount[`ODS ${o}`] = (odsCount[`ODS ${o}`] || 0) + 1;
      });
    });
    return {
      totalBeneficiarios,
      totalCaptadoBRL: totalCaptado,
      distribuicaoODS: odsCount,
      projetosAtivos: MOCK_PROJECTS.filter((p) => p.status === "ativo").length,
    };
  }
}
