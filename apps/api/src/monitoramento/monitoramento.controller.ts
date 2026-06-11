import { Controller, Get, Param, NotFoundException } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import {
  MOCK_RELATORIOS,
  MOCK_TIMELINE,
  MOCK_DEPOIMENTOS,
} from "../mock/monitoramento";
import { MOCK_PROJECTS, MOCK_INDICATORS } from "../mock/seed";

@ApiTags("Monitoramento")
@Controller("monitoramento")
export class MonitoramentoController {
  @Get("projeto/:id")
  getByProjeto(@Param("id") id: string) {
    const projeto = MOCK_PROJECTS.find((p) => p.id === id);
    if (!projeto) throw new NotFoundException(`Projeto ${id} não encontrado`);

    const relatorios = MOCK_RELATORIOS.filter((r) => r.projetoId === id);
    const timeline = MOCK_TIMELINE.filter((t) => t.projetoId === id).sort(
      (a, b) => new Date(b.data).getTime() - new Date(a.data).getTime(),
    );
    const indicadores = MOCK_INDICATORS.filter((i) => i.projetoId === id);
    const depoimentos = MOCK_DEPOIMENTOS.filter((d) => d.projetoId === id);

    const totalAportes = timeline
      .filter((t) => t.tipo === "aporte")
      .reduce((s, t) => {
        const match = t.titulo.match(/R\$\s*([\d.]+)/);
        return s + (match ? Number(match[1].replace(".", "")) : 0);
      }, 0);

    return {
      projeto,
      relatorios,
      timeline,
      indicadores,
      depoimentos,
      resumo: {
        totalRelatorios: relatorios.length,
        totalEvidencias: relatorios.reduce(
          (s, r) => s + r.evidencias.length,
          0,
        ),
        ultimaAtualizacao: timeline[0]?.data || projeto.criadoEm,
        totalAportesBRL: totalAportes,
        percentualMeta: Math.round(
          (projeto.valorCaptado / projeto.valorMeta) * 100,
        ),
      },
    };
  }

  @Get("consolidado")
  getConsolidado() {
    const projetosAtivos = MOCK_PROJECTS.filter((p) => p.status === "ativo");

    return {
      projetosMonitorados: projetosAtivos.length,
      totalRelatorios: MOCK_RELATORIOS.length,
      totalEvidencias: MOCK_RELATORIOS.reduce(
        (s, r) => s + r.evidencias.length,
        0,
      ),
      totalDepoimentos: MOCK_DEPOIMENTOS.length,
      ultimasAtualizacoes: MOCK_TIMELINE.sort(
        (a, b) => new Date(b.data).getTime() - new Date(a.data).getTime(),
      ).slice(0, 8),
      alertas: [
        {
          tipo: "ok",
          mensagem: "4 projetos com relatório em dia",
          projetoId: null,
        },
        {
          tipo: "atencao",
          mensagem:
            'Projeto "Rota Verde de Reciclagem" aguarda relatório Q1/2025',
          projetoId: "prj-005",
        },
        {
          tipo: "ok",
          mensagem: "Todos os aportes aprovados têm evidências registradas",
          projetoId: null,
        },
      ],
      performanceIndicadores: MOCK_INDICATORS.map((i) => ({
        ...i,
        percentual: Math.round((i.realizado / i.meta) * 100),
        status:
          i.realizado >= i.meta
            ? "atingido"
            : i.realizado / i.meta >= 0.7
              ? "no_prazo"
              : "atencao",
      })),
    };
  }
}
