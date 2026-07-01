import { Module } from "@nestjs/common";
import { ImpactoController } from "./impacto.controller";

@Module({ controllers: [ImpactoController] })
export class ImpactoModule {}
