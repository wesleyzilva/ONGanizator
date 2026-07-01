import { Module } from "@nestjs/common";
import { OrganizacoesModule } from "./organizacoes/organizacoes.module";
import { ProjetosModule } from "./projetos/projetos.module";
import { InvestidoresModule } from "./investidores/investidores.module";
import { DashboardModule } from "./dashboard/dashboard.module";
import { ImpactoModule } from "./impacto/impacto.module";
import { AuthModule } from "./auth/auth.module";
import { MonitoramentoModule } from "./monitoramento/monitoramento.module";
import { ReportsModule } from "./reports/reports.module";

@Module({
  imports: [
    AuthModule,
    OrganizacoesModule,
    ProjetosModule,
    InvestidoresModule,
    DashboardModule,
    ImpactoModule,
    MonitoramentoModule,
    ReportsModule,
  ],
})
export class AppModule {}
 
