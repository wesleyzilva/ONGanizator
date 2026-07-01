# Roadmap — ONGanizator

## Status atual

- Frontend em Next.js 15 com export estático.
- Monorepo com `apps/web`, `apps/api` e `packages/shared`.
- Mock de dados implementado em `apps/web/src/lib/mockData.ts`.
- Autenticação/registro mock e seleção de perspectiva concluídas.
- `/perfil` acessível a todos os papéis autenticados.
- `/relatorios` alinhado e vinculado ao fluxo de prestação de contas.
- PIX mock no fluxo de contribuição de projeto.
- Exportação de relatório executivo via botão/confirmação de impressão.

## Arcabouço técnico

- Frontend: Next.js 15, React 19, Tailwind CSS.
- Backend: NestJS 11 com API mock local.
- Shared: `packages/shared` para tipos e contratos.
- Deploy: GitHub Pages via static export.

## Gaps principais

- **Persistência real:** dados ainda são mock estáticos; migrar para API/NestJS com armazenamento.
- **Legal / Compliance:** falta módulo de parcerias, contratos, cálculos fiscais e checklist documental.
- **Jornada de valor:** `ONG → projeto → captação → investidor → compliance/relatório` precisa estar mais evidente.
- **Menu de perspectivas:** deve ser reconstruído para suportar quatro visões sem ambiguidade.
- **Relatórios:** `/relatorios` deve ser ponto de convergência do dashboard executivo.
- **RBAC e multi-tenancy:** planejados, mas não entregues.

## Entregas recomendadas

### Sprint 1 — Jornada e experiência

- Consolidar seleção de perspectiva e sidebar adaptativa.
- Fortalecer a narrativa do projeto com fluxo de captação e relatório.
- Criar alias ou rota clara para `/relatorios` e integrá-la ao dashboard.
- Ajustar `/perfil` para visibilidade universal autenticada.

### Sprint 2 — Legal, compliance e contratos mock

- Criar `/parcerias` com mecanismos fiscais básicos e checklist documental.
- Adicionar telas de contrato/termos para advogados e contadores.
- Incluir documentação simples de regras legais brasileiras no produto mock.

### Sprint 3 — Backend e persistência

- Evoluir mock para chamada de API NestJS.
- Persistir cadastro de ONG, projetos, contribuições e consentimento.
- Preparar a arquitetura para entrega de dados reais e relatórios auditáveis.

## Roadmap AI-first

1. Priorizar o valor de decisão: clareza para investidor e confiança para ONG.
2. Construir o mínimo belo de compliance legal sem perder a narrativa.
3. Evoluir de mock estático para um backend modular e testável.
4. Manter entregas rápidas com foco na jornada e não em tecnologia isolada.

## Benchmark competitivo

ONGanizator posiciona-se como um MVP de governança e captação com auditoria embutida. O diferencial está na combinação de:
- diagnóstico de maturidade;
- captação de projetos com narrativa e PIX simulado;
- compliance legal com relatórios de impacto;
- visão adaptada a perfis de ONG, investidor, advogado/contador e ADM.

## Go-to-market inicial

- Fase 1: piloto com grupos parceiros e carteiras de projetos selecionados.
- Fase 2: expansão para institutos, fundações e patrocinadores corporativos.
- Fase 3: parcerias com consultorias e redes de impacto.

## Como usar este roteiro

- Este documento é o roteiro técnico e de produto para os próximos lançamentos.
- O PO deve revisar aqui sempre que mudar prioridade ou objetivo de sprint.
- O time deve referenciar `backlog.md` para tarefas específicas e `raid-log.md` para descobertas.
