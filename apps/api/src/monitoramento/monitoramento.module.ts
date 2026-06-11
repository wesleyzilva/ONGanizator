import { Module } from "@nestjs/common";
import { MonitoramentoController } from "./monitoramento.controller";

@Module({ controllers: [MonitoramentoController] })
export class MonitoramentoModule {}
