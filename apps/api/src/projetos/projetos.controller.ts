import {
  Controller,
  Get,
  Param,
  Query,
  NotFoundException,
} from "@nestjs/common";
import { ApiTags, ApiQuery } from "@nestjs/swagger";
import { MOCK_PROJECTS } from "../mock/seed";

@ApiTags("Projetos")
@Controller("projetos")
export class ProjetosController {
  @Get()
  @ApiQuery({ name: "status", required: false })
  @ApiQuery({ name: "estado", required: false })
  @ApiQuery({ name: "ods", required: false })
  @ApiQuery({ name: "ticketMin", required: false })
  @ApiQuery({ name: "ticketMax", required: false })
  findAll(
    @Query("status") status?: string,
    @Query("estado") estado?: string,
    @Query("ods") ods?: string,
    @Query("ticketMin") ticketMin?: string,
    @Query("ticketMax") ticketMax?: string,
  ) {
    let data = [...MOCK_PROJECTS];
    if (status) data = data.filter((p) => p.status === status);
    if (estado) data = data.filter((p) => p.estado === estado);
    if (ods) {
      const odsNum = Number(ods);
      data = data.filter((p) => p.ods.includes(odsNum as any));
    }
    if (ticketMin) data = data.filter((p) => p.valorMeta >= Number(ticketMin));
    if (ticketMax) data = data.filter((p) => p.valorMeta <= Number(ticketMax));
    return { total: data.length, data };
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    const prj = MOCK_PROJECTS.find((p) => p.id === id);
    if (!prj) throw new NotFoundException(`Projeto ${id} não encontrado`);
    return prj;
  }
}
