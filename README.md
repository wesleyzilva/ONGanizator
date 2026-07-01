# ONGanizator

**Plataforma de Governança, Captação e Monitoramento de Impacto Social**

> MVP Demo · Next.js 15 · NestJS 11 · Tailwind CSS · Dados Mock · GitHub Pages

🌐 **[Demo ao vivo](https://wesleyzilva.github.io/ONGanizator/)**

---

## O que é

ONGanizator é uma plataforma digital que conecta organizações de impacto social (ONGs, cooperativas e negócios sociais) com investidores, patrocinadores e financiadores, oferecendo:

- **Onboarding gamificado** — diagnóstico institucional com emissão de Selos Bronze/Prata/Ouro
- **Governança** — diagnóstico de maturidade em 5 dimensões e gestão de risco reputacional
- **Marketplace de projetos** — vitrine pública filtrada por ODS, região e faixa de aporte
- **Matching automático** — vincula investidores aos projetos alinhados ao seu mandato e ODS
- **Monitoramento** — relatórios, evidências fotográficas, timeline e indicadores de impacto
- **Relatório ESG/ODS** — prestação de contas auditável para financiadores
- **Captação multicanal** — crowdfunding, CRM de doadores, calculadora de incentivos fiscais
- **Contabilidade** — DRE e lançamentos contábeis da ONG
- **Mentoria** — marketplace de mentores para acelerar maturidade institucional

---

## Rotas implementadas

| Rota | Descrição |
|------|-----------|
| `/` | Dashboard executivo com KPIs globais |
| `/login` | Autenticação e troca de perfil |
| `/registro` | Cadastrar novo perfil demo |
| `/organizacoes` | Catálogo de organizações com scores de maturidade |
| `/organizacoes/[id]` | Perfil institucional + radar de maturidade |
| `/organizacoes/[id]/editar` | Edição de organização |
| `/projetos` | Tabela completa de projetos com ações (Relatório, Auditoria, Editar) |
| `/projetos/novo` | Cadastro multi-etapa de projeto |
| `/projetos/[id]` | Detalhe: ODS, KRs, metas, orçamento, marcos, timeline |
| `/projetos/[id]/editar` | Edição de projeto |
| `/projetos/[id]/relatorio/anual` | Relatório anual com 11 seções |
| `/projetos/[id]/auditoria` | Pacote de auditoria: checklist, docs jurídicos, trilha de evidências |
| `/projetos/[id]/proposta` | Proposta para patrocinador com ODS, KRs e mecanismo recomendado |
| `/investidores` | Perfis de investidores com matching automático |
| `/investidores/[id]` | Detalhe do investidor: mandato, ODS, projetos compatíveis |
| `/investidores/[id]/editar` | Edição de investidor |
| `/investidores/[id]/match` | Motor de match inteligente |
| `/marketplace` | Vitrine pública filtrada por ODS e região |
| `/crowdfunding` | Campanhas e vaquinhas corporativas |
| `/captacao` | Seletor de mecanismo legal + calculadora de incentivo fiscal |
| `/crm` | CRM kanban de doadores (4 colunas + semáforo) |
| `/crm/lead` | Associação de financiador a lead (vínculo projeto + investidor) |
| `/diagnostico` | Quiz de maturidade institucional (score em 5 dimensões) |
| `/onboarding` | Onboarding gamificado com emissão de Selos Bronze/Prata/Ouro |
| `/risco` | Relatórios de risco reputacional |
| `/contabilidade` | DRE, lançamentos e semáforo de pendências |
| `/monitoramento` | Prestação de contas: indicadores, evidências, timeline |
| `/impacto` | Painel consolidado ESG/ODS |
| `/mentoria` | Marketplace de mentores por área de especialidade |
| `/para-investidores` | Pitch institucional para investidores |
| `/para-profissionais` | Jornada advogado + contador: dores, ganhos e módulos |
| `/permissoes` | Matriz de permissões (22 ações × 7 módulos) — adm only |
| `/configuracoes` | White-label: logo, cores, fontes, modo escuro, preview ao vivo |
| `/demo` | Roteiro de demo com 5 perfis, steps e falas sugeridas |

---

## Jornadas por perfil

O sidebar adapta o menu ao perfil ativo. Troca de perfil via footer da sidebar ("⇄ Trocar perfil") ou badge clicável no header.

| Perfil | Módulos disponíveis |
|--------|-------------------|
| **Administrador** | Todos os módulos + Permissões + Configurações + Demo |
| **ONG** | Dashboard · Organizações · Projetos · Marketplace · Diagnóstico · Monitoramento · Impacto · Mentoria · Onboarding |
| **Investidor** | Dashboard · Projetos · Investidores · Marketplace · Crowdfunding · Impacto · Para Investidores |
| **Advogado** | Dashboard · Organizações · Projetos · Investidores · CRM · Captação · Risco · Contabilidade |
| **Contador** | Dashboard · Organizações · Projetos · Captação · Contabilidade · Monitoramento · Para Profissionais |
| **Fundação** | Dashboard · Projetos · Investidores · Marketplace · Diagnóstico · Monitoramento · Impacto · Para Investidores |

---

## Stack

### Frontend
- [Next.js 15.3.3](https://nextjs.org/) — App Router, Server Components, `output: 'export'`
- [React 19](https://react.dev/) · [Tailwind CSS 3](https://tailwindcss.com/) · TypeScript 5

### Backend (API local)
- [NestJS 11](https://nestjs.com/) — BFF modular, Swagger em `/docs`
- Dados mock em memória (sem banco de dados)

### Monorepo
```
ONGanizator/
├── apps/
│   ├── web/        # Next.js 15 (frontend)
│   └── api/        # NestJS 11 (API local)
├── packages/
│   └── shared/     # Tipos TypeScript compartilhados
└── package.json    # npm workspaces
```

---

## Rodando localmente

**Requisitos:** Node.js 18+ e npm 9+

```bash
git clone https://github.com/wesleyzilva/ONGanizator.git
cd ONGanizator
npm install --workspaces --include-workspace-root --legacy-peer-deps
npm run dev
```

| Serviço | URL |
|---------|-----|
| Frontend | http://localhost:3000/ONGanizator |
| API | http://localhost:3001 |
| Swagger | http://localhost:3001/docs |

**Credenciais demo** — qualquer senha funciona no mock:

| Email | Perfil |
|-------|--------|
| `admin@onganizator.com.br` | Administrador (visão completa) |
| `ong@demo.org` | ONG |
| `investidor@demo.com.br` | Investidor |
| `advogado@demo.com.br` | Advogado |
| `contador@demo.com.br` | Contador |
| `fundacao@demo.org` | Fundação/Instituto |

> Dica: após login, use o footer da sidebar ("⇄ Trocar perfil") para navegar entre perspectivas sem sair.

---

## Endpoints da API

| Método | Rota | Descrição |
|--------|------|-----------|
| `POST` | `/api/auth/login` | Autenticação mock |
| `GET` | `/api/dashboard` | KPIs executivos |
| `GET` | `/api/organizacoes` | Lista de organizações |
| `GET` | `/api/organizacoes/:id/score` | Score de maturidade |
| `GET` | `/api/projetos` | Lista de projetos |
| `GET` | `/api/investidores/:id/match` | Match automático de projetos |
| `GET` | `/api/impacto/resumo` | Resumo ESG/ODS |
| `GET` | `/api/monitoramento/consolidado` | Monitoramento consolidado |
| `GET` | `/api/monitoramento/projeto/:id` | Timeline + evidências |

---

## Deploy (GitHub Pages)

Deploy automático via GitHub Actions a cada push em `main`.

```
push → main → GitHub Actions → build estático → branch gh-pages → GitHub Pages
```

Workflow: [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml)

> `basePath` e `assetPrefix` configurados como `/ONGanizator` no `next.config.js`.

---

## Documentação

- [`One-Page-ONGanizator.md`](One-Page-ONGanizator.md) — pitch executivo para investidores
- [`Overview.md`](Overview.md) — visão geral de módulos e jornadas
- [`Arquitetura-MVP-Tradeoffs.md`](Arquitetura-MVP-Tradeoffs.md) — decisões técnicas e roadmap
- [`BenchMark.md`](BenchMark.md) — análise competitiva e posicionamento
- [`productBacklog/raidLog.md`](productBacklog/raidLog.md) — log de sprints, riscos e decisões

---

## Licença

MIT
