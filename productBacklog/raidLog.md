# RAID Log - ONGanizator

## Contexto atual

Estamos reorganizando o projeto antes de iniciar a execucao local. A documentacao passa a refletir que ONGanizator nao e uma plataforma de alto volume, mas um sistema auditavel para coordenar poucos stakeholders com grande responsabilidade na jornada de captacao e prestacao de contas.

Referencias de mercado agora consideradas: Portal do Incentivo, Benevity e GlobalGiving. Analise consolidada em [Referencias-Mercado.md](../Referencias-Mercado.md) e diagnostico do app atual em [Analise-Projeto-Atual.md](../Analise-Projeto-Atual.md).

## Decisoes

| ID | Decisao | Motivo | Status |
|---|---|---|---|
| D1 | Priorizar jornada auditavel sobre escala tecnica | Baixo volume de usuarios e requests | Decidido |
| D2 | Tratar advogado como agente principal de prospeccao | Ele cadastra ONG, prospecta financiadores e estrutura relacao | Decidido |
| D3 | Tratar contador como agente de validacao financeira | Valores intermediarios e comprovantes precisam de visao propria | Decidido |
| D4 | Tratar projeto como unidade auditavel | Projeto conecta objetivo, KRs, orcamento, evidencias e relatorio anual | Decidido |
| D5 | Manter mock funcional para webinar antes de persistencia real | Objetivo e coletar feedback de ONGs | Decidido |
| D6 | Evitar criar novos campos sem reaproveitar entidades existentes | Reduz complexidade e retrabalho | Decidido |
| D7 | Criar documentacao legal separada, sem dumps colados | Facilita evolucao e reduz duplicidade | Decidido |
| D8 | Criar squad de agentes para desenvolvimento e suporte | Evita backlog solto e cria responsabilidade por produto, UX, frontend, backend, QA, seguranca e suporte | Decidido |
| D9 | Usar Portal do Incentivo como referencia de motor fiscal, nao como dump de conteudo | O produto precisa de workflow, calculadora e checklist | Decidido |
| D10 | Usar Benevity e GlobalGiving como benchmark de confianca, nao como escopo enterprise/global | MVP deve ficar Brasil-first e baixo volume | Decidido |
| D11 | Criar backlog canonico do PO separado do RAID log | O RAID registra decisoes/riscos; o PO backlog orienta desenvolvimento | Decidido |
| D12 | Arquivar materiais duplicados em `docs/backup` | Reduz ruido para agentes e preserva contexto historico | Decidido |

## Assumptions

| ID | Assumption | Como validar |
|---|---|---|
| A1 | ONGs aceitam entrar em um fluxo guiado de maturidade e selos | Testar no webinar com jornada Bronze/Prata/Ouro |
| A2 | Advogado consegue operar a prospeccao dentro de um kanban simples | Demonstrar CRM com leads, status e semaforo |
| A3 | Investidores e fundacoes valorizam pacote de auditoria e relatorio anual | Mostrar projeto com evidencias, financeiro e impacto |
| A4 | Contador precisa de tela propria, nao apenas campos dentro do projeto | Validar com fluxo de lancamentos e comprovantes |
| A5 | White-label aumenta aderencia da ONG | Demonstrar identidade visual configuravel em fase posterior |

## Risks

| ID | Risco | Impacto | Mitigacao |
|---|---|---|---|
| R1 | Escopo crescer para muitas frentes ao mesmo tempo | MVP perde foco | Manter jornada principal como criterio de corte |
| R2 | Regras legais serem interpretadas como parecer automatico | Risco juridico | Usar disclaimers e revisao por advogado |
| R3 | Dados mock parecerem artificiais | Demo perde credibilidade | Usar poucas ONGs/projetos realistas e com estados diferentes |
| R4 | Selos virarem enfeite visual | Perde valor auditavel | Cada selo deve exigir evidencia e evento |
| R5 | Relatorio anual virar tela manual | Perde rastreabilidade | Gerar relatorio a partir de eventos, KRs, evidencias e financeiro |

## Issues

| ID | Issue | Acao |
|---|---|---|
| I1 | Documentos estavam duplicando visao, benchmark e material legal | Consolidado em docs separados |
| I2 | RAID log continha textos juridicos longos colados | Substituido por backlog vivo e linkado ao guia legal |
| I3 | Arquivos de cidades tinham dumps repetitivos de fonte externa | Reduzir para listas curadas de prospeccao |
| I4 | Personas novas ainda nao estao necessariamente alinhadas no mock | Ajustar apos rodar app local |
| I5 | Paginas para ONGs e para Advogados/Contadores precisam ser definidas | Entrar no backlog funcional |
| I6 | `mockAuth.ts` nao separa contador e fundacao | Criar novos perfis e perspectivas no M1 |
| I7 | `packages/shared` usa papeis antigos diferentes do mock atual | Alinhar tipos no M1/M2 |
| I8 | CRM atual e de doadores, nao kanban de prospeccao do advogado | Transformar em oportunidade/prospecao no M3 |
| I9 | Leis de incentivo existem como dados, mas nao conduzem elegibilidade | Evoluir para calculadora/checklist no M4 |
| I10 | Raiz do repositorio tinha pitch, benchmark e dump bruto competindo com docs canonicos | Movido para `docs/backup` ou consolidado em docs canonicos |

## Dependencies

| ID | Dependencia | Observacao |
|---|---|---|
| DEP1 | Validacao com ONGs no webinar | Principal fonte de feedback de produto |
| DEP2 | Revisao juridica/contabil | Necessaria antes de usar regras legais em producao |
| DEP3 | Dados mock revisados | Precisam refletir agentes, selos, evidencias e relatorio anual |
| DEP4 | Rodar app local | Validado em 2026-07-01: web 3000 e API 3001 ativas na copia local |
| DEP5 | Validar build estatico GitHub Pages | Validado em 2026-07-01: `apps/web/out` gerado com sucesso |

## Backlog reestruturado por marco

### M0 - Squad, referencias e governanca do backlog

| Prioridade | Item | Resultado esperado | Status |
|---|---|---|---|
| P0 | Criar squad de agentes | Agentes de produto, legal, UX, frontend, backend, QA, seguranca e suporte documentados | Concluido |
| P0 | Criar agentes VS Code | `.github/agents/*.agent.md` disponiveis para desenvolvimento e suporte | Concluido |
| P0 | Consolidar referencias de mercado | Portal do Incentivo, Benevity e GlobalGiving traduzidos em decisoes | Concluido |
| P0 | Diagnosticar projeto atual | Gaps entre mock atual e plataforma desejada documentados | Concluido |
| P0 | Criar backlog do PO | `productBacklog/poBacklog.md` criado com historias, aceite e validacao | Concluido |
| P0 | Arquivar docs duplicados | Materiais nao canonicos movidos para `docs/backup` | Concluido |

### M1 - Perfis, permissoes e navegacao

| Prioridade | Item | Resultado esperado | Status |
|---|---|---|---|
| P0 | Separar perfis mock | Advogado, contador, ONG, investidor, fundacao e admin no login | A fazer |
| P0 | Separar perspectivas no menu | Contador e fundacao deixam de compartilhar visao com advogado/investidor | A fazer |
| P0 | Alinhar tipos compartilhados | `packages/shared` reflete roles e entidades desejadas | A fazer |
| P1 | Registrar matriz de permissoes na UI | Cada tela deixa claro quem pode editar, aprovar ou visualizar | A fazer |

### M2 - Projeto auditavel e selos

| Prioridade | Item | Resultado esperado | Status |
|---|---|---|---|
| P0 | Projeto com objetivo e KRs | Cadastro/detalhe mostra objetivo, KRs, indicadores e responsaveis | A fazer |
| P0 | Selos Bronze, Prata e Ouro | Um projeto mockado por selo, com criterio e evidencia | A fazer |
| P0 | Eventos de auditoria mockados | Alteracoes, aprovacoes, evidencias e relatorios aparecem na timeline | A fazer |
| P0 | Relatorio anual | Fechamento anual gerado a partir de KRs, evidencias e financeiro | A fazer |

### M3 - Captacao conduzida pelo advogado

| Prioridade | Item | Resultado esperado | Status |
|---|---|---|---|
| P0 | CRM vira kanban de prospeccao | Backlog, Prospeccao, Em andamento, Finalizado, semaforo e dono | A fazer |
| P0 | Associar oportunidade a projeto | Advogado conecta financiador/fundacao a projeto e registra hipotese de match | A fazer |
| P0 | Proposta para patrocinador | Gerar apresentacao simples com projeto, KRs, orcamento e contrapartidas | A fazer |
| P1 | Pagina para Advogados e Contadores | Explicar fluxo profissional e valor operacional | A fazer |

### M4 - Incentivos, compliance e contabilidade

| Prioridade | Item | Resultado esperado | Status |
|---|---|---|---|
| P0 | Calculadora de incentivo | Limite estimado por lei, tipo de financiador e imposto informado | A fazer |
| P0 | Checklist por mecanismo | Rouanet, Esporte, FIA, Idoso, PRONON, PRONAS, Reciclagem e Audiovisual | A fazer |
| P0 | Parecer advogado/contador | Validacao juridica e contabil aparece no projeto/oportunidade | A fazer |
| P1 | Pacote de auditoria | Exportar ou visualizar documentos, eventos, evidencias e financeiro | A fazer |

### M5 - Webinar e validacao

| Prioridade | Item | Resultado esperado | Status |
|---|---|---|---|
| P0 | Dados mock realistas | ONGs/projetos em estados Bronze, Prata e Ouro | A fazer |
| P0 | Roteiro de demonstracao | Caminho por perfil: advogado, ONG, contador, fundacao/investidor | A fazer |
| P0 | Rodar app local e revisar telas | App local rodando; revisao de telas segue para ajustes do M1 | Em andamento |
| P1 | White-label basico | Nome, logo e cores configuraveis para demo | A fazer |

## Validacoes executadas

| Data | Validacao | Resultado |
|---|---|---|
| 2026-07-01 | Build estatico web | `npm run build --workspace=apps/web` concluiu com sucesso e exportou 72 paginas |
| 2026-07-01 | Ambiente local | `npm run dev` subiu Next.js em `http://localhost:3000/ONGanizator` e NestJS em `http://localhost:3001/docs` |

## Criterios para o webinar

1. Conseguir entrar com cada perfil principal.
2. Mostrar uma ONG com cadastro incompleto e outra mais madura.
3. Mostrar tres projetos: Bronze, Prata e Ouro.
4. Mostrar advogado criando oportunidade e associando a projeto.
5. Mostrar contador validando orcamento/comprovantes.
6. Mostrar investidor ou fundacao acompanhando evidencias.
7. Mostrar relatorio anual como fechamento da jornada.

## Referencias internas

- [Overview.md](../Overview.md)
- [Analise-Projeto-Atual.md](../Analise-Projeto-Atual.md)
- [Referencias-Mercado.md](../Referencias-Mercado.md)
- [Stakeholders-Agentes.md](../Stakeholders-Agentes.md)
- [Squad-Agentes.md](../Squad-Agentes.md)
- [Jornada-Auditavel.md](../Jornada-Auditavel.md)
- [Legal-Captacao-ONGs.md](../Legal-Captacao-ONGs.md)
- [Arquitetura-MVP-Tradeoffs.md](../Arquitetura-MVP-Tradeoffs.md)
- [poBacklog.md](poBacklog.md)
- [Backup de docs](../docs/backup/README.md)
