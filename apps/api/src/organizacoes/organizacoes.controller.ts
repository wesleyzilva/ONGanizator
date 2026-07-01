import {
  Controller,
  Get,
  Param,
  Query,
  NotFoundException,
} from "@nestjs/common";
import { ApiTags, ApiQuery } from "@nestjs/swagger";
import { MOCK_ORGANIZATIONS } from "../mock/seed";

@ApiTags("Organizações")
@Controller("organizacoes")
export class OrganizacoesController {
  @Get()
  @ApiQuery({ name: "tipo", required: false })
  @ApiQuery({ name: "estado", required: false })
  @ApiQuery({ name: "ods", required: false })
  @ApiQuery({ name: "nivel", required: false })
  findAll(
    @Query("tipo") tipo?: string,
    @Query("estado") estado?: string,
    @Query("ods") ods?: string,
    @Query("nivel") nivel?: string,
  ) {
    let data = [...MOCK_ORGANIZATIONS];
    if (tipo) data = data.filter((o) => o.tipo === tipo);
    if (estado) data = data.filter((o) => o.estado === estado);
    if (nivel) data = data.filter((o) => o.nivel === nivel);
    if (ods) {
      const odsNum = Number(ods);
      data = data.filter((o) => o.ods.includes(odsNum as any));
    }
    return { total: data.length, data };
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    const org = MOCK_ORGANIZATIONS.find((o) => o.id === id);
    if (!org) throw new NotFoundException(`Organização ${id} não encontrada`);
    return org;
  }

  @Get(":id/score")
  getScore(@Param("id") id: string) {
    const org = MOCK_ORGANIZATIONS.find((o) => o.id === id);
    if (!org) throw new NotFoundException();
    return {
      organizacaoId: id,
      score: org.score,
      nivel: org.nivel,
      dimensoes: {
        governanca: Math.min(100, org.score + 5),
        financeiro: Math.max(0, org.score - 8),
        compliance: Math.min(100, org.score + 2),
        capacidadeExecucao: Math.max(0, org.score - 3),
        impacto: Math.min(100, org.score + 7),
      },
    };
  }
}
