# ONGanizator

Plataforma white-label para governanca, captacao e prestacao de contas de projetos sociais, desenhada para uma operacao pequena, auditavel e orientada por stakeholders.

<<<<<<< HEAD
> O repositório agora usa um backlog AI-first ativo centralizado em `productBacklog`.
=======
O foco do projeto nao e volume alto de usuarios ou requisicoes. O foco e coordenar poucos agentes com responsabilidades claras: advogado, contador, ONG, projeto, investidor, fundacao/instituto e administrador da plataforma. A plataforma deve registrar a jornada completa da prospeccao ate o relatorio anual do que foi entregue.
>>>>>>> bfbf6f688b78fd8d347da3df3afd1b96dad7c03e

<<<<<<< HEAD
## Documentos ativos
=======
## Problema que a plataforma resolve
>>>>>>> bfbf6f688b78fd8d347da3df3afd1b96dad7c03e

<<<<<<< HEAD
- `productBacklog/vision.md` — visão de produto, perfis, públicos e jornada.
- `productBacklog/roadmap.md` — status técnico, gaps, roteiro de execução e sprints.
- `productBacklog/backlog.md` — backlog priorizado com status de entrega.
- `productBacklog/raid-log.md` — descobertas, contexto e decisões de evolução.
=======
ONGs e fundacoes pequenas normalmente nao tem um sistema auditavel para gerir projetos, evidencias, orcamento, prestacao de contas e captacao recorrente. Isso cria perda de memoria, baixa confianca para investidores e dificuldade de comprovar o que foi entregue.
>>>>>>> bfbf6f688b78fd8d347da3df3afd1b96dad7c03e

<<<<<<< HEAD
## Status atual
=======
ONGanizator organiza essa jornada em um fluxo unico:
>>>>>>> bfbf6f688b78fd8d347da3df3afd1b96dad7c03e

<<<<<<< HEAD
- Frontend em Next.js 15 com export estático.
- Backend mock em NestJS 11 para API local.
- Persistência de dados mock, menu adaptativo e perspectivas de usuário implementados.
- Fluxo de crowdfunding com PIX simulado e relatórios básicos disponível.
- As principais lacunas são persistência real, legal/compliance e backend de produção.
=======
1. Advogado prospecta investidores, empresas e fundacoes.
2. Advogado cadastra ou convida a ONG.
3. ONG completa cadastro, documentos e projetos.
4. Projeto passa por avaliacao, OKRs/KRs, orcamento e risco.
5. Contador acompanha valores, lancamentos, comprovantes e saldo.
6. Investidor ou fundacao avalia, aprova e acompanha a execucao.
7. Plataforma registra evidencias, alteracoes e entregas.
8. Relatorio anual consolida execucao fisica, financeira e impacto.
>>>>>>> bfbf6f688b78fd8d347da3df3afd1b96dad7c03e

<<<<<<< HEAD
## Como usar
=======
## Documentacao reorganizada
>>>>>>> bfbf6f688b78fd8d347da3df3afd1b96dad7c03e

<<<<<<< HEAD
1. Consulte `productBacklog/vision.md` para a visão de produto e personas.
2. Use `productBacklog/roadmap.md` para planejar entregas e próximos sprints.
3. Use `productBacklog/backlog.md` para priorizar tarefas e acompanhar status.
4. Use `productBacklog/raid-log.md` para registrar hipóteses, descobertas e contexto.
=======
| Documento | Finalidade |
|---|---|
| [Overview.md](Overview.md) | Visao do produto, problema, modulos e jornadas principais |
| [Analise-Projeto-Atual.md](Analise-Projeto-Atual.md) | Diagnostico do app atual contra a plataforma desejada |
| [Referencias-Mercado.md](Referencias-Mercado.md) | Analise de Portal do Incentivo, Benevity e GlobalGiving |
| [Stakeholders-Agentes.md](Stakeholders-Agentes.md) | Agentes da plataforma, permissoes, interacoes e acoes combinadas |
| [Squad-Agentes.md](Squad-Agentes.md) | Agentes da squad de desenvolvimento e suporte |
| [Jornada-Auditavel.md](Jornada-Auditavel.md) | Fluxo auditavel da prospeccao ao relatorio anual |
| [Legal-Captacao-ONGs.md](Legal-Captacao-ONGs.md) | Referencia inicial sobre captacao, incentivos e obrigacoes legais |
| [Arquitetura-MVP-Tradeoffs.md](Arquitetura-MVP-Tradeoffs.md) | Arquitetura atual, trade-offs e caminho tecnico do MVP |
| [productBacklog/poBacklog.md](productBacklog/poBacklog.md) | Backlog canonico do PO com epicos, historias e aceite |
| [productBacklog/raidLog.md](productBacklog/raidLog.md) | Decisoes, riscos, assumptions, issues e backlog vivo |
| [productBacklog/cidades/franciscoBeltrao.md](productBacklog/cidades/franciscoBeltrao.md) | Base enxuta de prospeccao local em Francisco Beltrao |
| [productBacklog/cidades/patobranco.md](productBacklog/cidades/patobranco.md) | Base enxuta de prospeccao local em Pato Branco |
| [docs/backup/README.md](docs/backup/README.md) | Materiais arquivados para nao confundir os agentes |
>>>>>>> bfbf6f688b78fd8d347da3df3afd1b96dad7c03e

<<<<<<< HEAD
## Rodar localmente
=======
## Escopo do mock atual
>>>>>>> bfbf6f688b78fd8d347da3df3afd1b96dad7c03e

<<<<<<< HEAD
```powershell
=======
O repositorio ja possui uma demo em monorepo com frontend Next.js, API NestJS preparada e dados mock. Antes de rodar localmente e avaliar telas, a documentacao passa a ser a referencia do que o mock deve demonstrar:

- login por perfil de stakeholder;
- menu filtrado por papel e perspectiva;
- cadastro de ONG feito pelo advogado, com liberacao de acesso;
- cadastro e manutencao de projetos pela ONG;
- trilha auditavel para alteracoes de projeto, orcamento, documentos e evidencias;
- gamificacao por selos Bronze, Prata e Ouro;
- CRM/kanban de prospeccao de investidores, empresas e fundacoes;
- visao contabil dos valores intermediarios;
- monitoramento de entregas com evidencias e relatorio anual.

## Rotas ja existentes na demo

| Rota | Uso esperado na nova narrativa |
|---|---|
| `/` | Dashboard executivo e resumo auditavel |
| `/login` | Entrada por perfil mock |
| `/perfil` | Selecao de perspectiva e consentimentos |
| `/organizacoes` | Cadastro, lista e maturidade das ONGs |
| `/projetos` | Projetos, objetivos, KRs, orcamento e status |
| `/investidores` | Investidores, fundacoes e mandatos de impacto |
| `/crm` | Prospecao feita pelo advogado |
| `/contabilidade` | Visao do contador sobre entradas, despesas e pendencias |
| `/risco` | Risco reputacional e compliance |
| `/monitoramento` | Evidencias, timeline e prestacao de contas |
| `/impacto` | Indicadores ODS/ESG e relatorios |
| `/para-investidores` | Pitch para investidores e fundacoes |

## Stack

| Camada | Tecnologia |
|---|---|
| Web | Next.js 15, React 19, TypeScript, Tailwind CSS |
| API local | NestJS 11 |
| Compartilhado | npm workspaces e `packages/shared` |
| Dados atuais | Mock em memoria e arquivos TypeScript |
| Deploy demo | GitHub Pages via GitHub Actions |

## Executar localmente

Use estes comandos para iniciar o desenvolvimento local:

```bash
>>>>>>> bfbf6f688b78fd8d347da3df3afd1b96dad7c03e
npm install --workspaces --include-workspace-root
<<<<<<< HEAD
npm run dev:web
=======
npm run dev
>>>>>>> bfbf6f688b78fd8d347da3df3afd1b96dad7c03e
```

<<<<<<< HEAD
## Observação
=======
| Servico | URL |
|---|---|
| Frontend | http://localhost:3000 |
| API | http://localhost:3001 |
| Swagger | http://localhost:3001/docs |
>>>>>>> bfbf6f688b78fd8d347da3df3afd1b96dad7c03e

<<<<<<< HEAD
Os arquivos de documentação de nível antigo permanecem como histórico e estão depreciados.
Use apenas os documentos ativos em `productBacklog/` para planejamento e execução.
=======
Para validar o export estatico antes do deploy no GitHub Pages:
>>>>>>> bfbf6f688b78fd8d347da3df3afd1b96dad7c03e

<<<<<<< HEAD
=======
```bash
npm run build --workspace=apps/web
```

O workflow [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) publica `apps/web/out` no branch `gh-pages` a partir da branch `main`.

## Principio de produto

Cada acao relevante deve responder quatro perguntas: quem fez, por que fez, o que mudou e qual evidencia sustenta a mudanca. Se a resposta nao puder aparecer no relatorio anual, a acao ainda nao esta bem modelada.

>>>>>>> bfbf6f688b78fd8d347da3df3afd1b96dad7c03e