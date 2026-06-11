import { Module } from "@nestjs/common";
import { OrganizacoesController } from "./organizacoes.controller";

@Module({ controllers: [OrganizacoesController] })
export class OrganizacoesModule {}
