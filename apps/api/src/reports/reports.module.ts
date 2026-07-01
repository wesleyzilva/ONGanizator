import { Module } from "@nestjs/common";
import { AnnualReportsController } from "./annual.controller";

@Module({
  controllers: [AnnualReportsController],
})
export class ReportsModule {}
