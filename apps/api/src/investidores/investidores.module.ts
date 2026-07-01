import { Module } from "@nestjs/common";
import { InvestidoresController } from "./investidores.controller";

@Module({ controllers: [InvestidoresController] })
export class InvestidoresModule {}
