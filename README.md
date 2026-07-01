# ONGanizator

Plataforma white-label para governanca, captacao e prestacao de contas de projetos sociais, desenhada para uma operacao pequena, auditavel e orientada por stakeholders.

O foco do projeto nao e volume alto de usuarios ou requisicoes. O foco e coordenar poucos agentes com responsabilidades claras: advogado, contador, ONG, projeto, investidor, fundacao/instituto e administrador da plataforma. A plataforma deve registrar a jornada completa da prospeccao ate o relatorio anual do que foi entregue.

## Problema que a plataforma resolve

ONGs e fundacoes pequenas normalmente nao tem um sistema auditavel para gerir projetos, evidencias, orcamento, prestacao de contas e captacao recorrente. Isso cria perda de memoria, baixa confianca para investidores e dificuldade de comprovar o que foi entregue.

ONGanizator organiza essa jornada em um fluxo unico:

1. Advogado prospecta investidores, empresas e fundacoes.
2. Advogado cadastra ou convida a ONG.
3. ONG completa cadastro, documentos e projetos.
4. Projeto passa por avaliacao, OKRs/KRs, orcamento e risco.
5. Contador acompanha valores, lancamentos, comprovantes e saldo.
6. Investidor ou fundacao avalia, aprova e acompanha a execucao.
7. Plataforma registra evidencias, alteracoes e entregas.
8. Relatorio anual consolida execucao fisica, financeira e impacto.

## Documentacao reorganizada

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

## Escopo do mock atual

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
npm install --workspaces --include-workspace-root
npm run dev
```

| Servico | URL |
|---|---|
| Frontend | http://localhost:3000 |
| API | http://localhost:3001 |
| Swagger | http://localhost:3001/docs |

Para validar o export estatico antes do deploy no GitHub Pages:

```bash
npm run build --workspace=apps/web
```

O workflow [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) publica `apps/web/out` no branch `gh-pages` a partir da branch `main`.

## Principio de produto

Cada acao relevante deve responder quatro perguntas: quem fez, por que fez, o que mudou e qual evidencia sustenta a mudanca. Se a resposta nao puder aparecer no relatorio anual, a acao ainda nao esta bem modelada.
