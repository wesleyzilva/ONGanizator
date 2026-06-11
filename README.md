# ONGanizator

**Plataforma de Governança, Captação e Monitoramento de Impacto Social**

> Demo MVP — Next.js 15 · NestJS 11 · Tailwind CSS · Dados Mock · GitHub Pages

🌐 **[Acessar demo online](https://wesleyzilva.github.io/ONGanizator/)**

---

## O que é

ONGanizator é uma plataforma digital que conecta organizações de impacto social (ONGs, cooperativas e negócios sociais) com investidores, patrocinadores e financiadores, oferecendo:

- **Governança institucional** — diagnóstico de maturidade e score em 5 dimensões
- **Gestão documental** — validação de KYC e conformidade legal
- **Marketplace de projetos** — vitrine com filtros por ODS, região e ticket
- **Matching automático** — conecta investidores aos projetos mais aderentes ao seu perfil
- **Monitoramento em tempo real** — relatórios, evidências, timeline e indicadores de impacto
- **Relatórios ESG/ODS** — prestação de contas auditável para financiadores

---

## Telas

| Página | Descrição |
|--------|-----------|
| `/` | Dashboard executivo com KPIs globais |
| `/organizacoes` | Catálogo de organizações com score de maturidade |
| `/organizacoes/:id` | Detalhe institucional + radar de maturidade |
| `/projetos` | Tabela de todos os projetos |
| `/marketplace` | Vitrine pública com filtros por ODS e região |
| `/investidores` | Perfis de investidores com matching automático |
| `/impacto` | Painel ESG/ODS consolidado |
| `/monitoramento` | Prestação de contas: relatórios, evidências, timeline |
| `/para-investidores` | One page de pitch para captação de investimento |

---

## Stack

### Frontend
- [Next.js 15](https://nextjs.org/) — App Router, Server Components, Static Export
- [React 19](https://react.dev/)
- [Tailwind CSS 3](https://tailwindcss.com/)
- [Lucide React](https://lucide.dev/) — ícones
- TypeScript 5

### Backend (API local)
- [NestJS 11](https://nestjs.com/) — modular, decorators, Swagger
- [ts-node-dev](https://github.com/wclr/ts-node-dev) — hot reload
- Dados mock em memória (sem banco de dados)

### Monorepo
```
ONGanizator/
├── apps/
│   ├── web/        # Next.js 15 (frontend)
│   └── api/        # NestJS 11 (backend local)
├── packages/
│   └── shared/     # Tipos TypeScript compartilhados
└── package.json    # npm workspaces
```

---

## Rodar localmente

**Pré-requisitos:** Node.js 18+ e npm 9+

```bash
# 1. Clonar
git clone https://github.com/wesleyzilva/ONGanizator.git
cd ONGanizator

# 2. Instalar dependências
npm install --workspaces --include-workspace-root

# 3. Subir API (porta 3001)
npm run dev:api

# 4. Subir frontend (porta 3000) — em outro terminal
npm run dev:web
```

| Serviço | URL |
|---------|-----|
| Frontend | http://localhost:3000 |
| API | http://localhost:3001 |
| Swagger | http://localhost:3001/docs |

**Credenciais de demo:**

| E-mail | Senha | Perfil |
|--------|-------|--------|
| `admin@onganizator.com.br` | `demo@2026` | Administrador |
| `ong@demo.org` | `demo@2026` | ONG |
| `investidor@demo.com.br` | `demo@2026` | Investidor |

---

## Endpoints da API

| Método | Rota | Descrição |
|--------|------|-----------|
| `POST` | `/api/auth/login` | Autenticação mock |
| `GET` | `/api/dashboard` | KPIs executivos |
| `GET` | `/api/organizacoes` | Lista com filtros |
| `GET` | `/api/organizacoes/:id/score` | Score de maturidade |
| `GET` | `/api/projetos` | Lista com filtros |
| `GET` | `/api/investidores/:id/match` | Matching automático |
| `GET` | `/api/impacto/resumo` | Painel ESG/ODS |
| `GET` | `/api/monitoramento/consolidado` | Relatórios consolidados |
| `GET` | `/api/monitoramento/projeto/:id` | Timeline + evidências do projeto |

---

## Deploy (GitHub Pages)

O deploy é automático via GitHub Actions a cada push na branch `main`.

```
push → main → GitHub Actions → build estático → gh-pages branch → GitHub Pages
```

Workflow: [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml)

---

## Contexto de negócio

Este MVP foi desenvolvido para demonstração a financiadores e investidores sociais.
Documentação completa em:

- [`One-Page-ONGanizator.md`](One-Page-ONGanizator.md) — pitch para investidores
- [`Arquitetura-MVP-Tradeoffs.md`](Arquitetura-MVP-Tradeoffs.md) — decisões técnicas e roadmap

---

## Licença

MIT
