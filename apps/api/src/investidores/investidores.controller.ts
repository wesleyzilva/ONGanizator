import { Controller, Get, Param, NotFoundException } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { MOCK_INVESTORS } from "../mock/seed";

@ApiTags("Investidores")
@Controller("investidores")
export class InvestidoresController {
  @Get()
  findAll() {
    return { total: MOCK_INVESTORS.length, data: MOCK_INVESTORS };
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    const inv = MOCK_INVESTORS.find((i) => i.id === id);
    if (!inv) throw new NotFoundException(`Investidor ${id} não encontrado`);
    return inv;
  }

  @Get(":id/match")
  getMatch(@Param("id") id: string) {
    const inv = MOCK_INVESTORS.find((i) => i.id === id);
    if (!inv) throw new NotFoundException();
    const { MOCK_PROJECTS } = require("../mock/seed");
    const matches = MOCK_PROJECTS.filter(
      (p: any) =>
        p.status === "ativo" &&
        p.valorMeta >= inv.ticketMin &&
        p.valorMeta <= inv.ticketMax &&
        (inv.regioes.includes(p.estado) || inv.regioes.length === 0) &&
        p.ods.some((o: number) => inv.ods.includes(o as any)),
    );
    return {
      investidorId: id,
      totalMatches: matches.length,
      projetos: matches,
    };
  }
}
