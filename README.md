# ONGanizator

**Governance, Fundraising & Social Impact Monitoring Platform**

> MVP Demo — Next.js 15 · NestJS 11 · Tailwind CSS · Mock Data · GitHub Pages

🌐 **[Live demo](https://wesleyzilva.github.io/ONGanizator/)**

---

## What is it

ONGanizator is a digital platform that connects social impact organizations (NGOs, cooperatives and social businesses) with investors, sponsors and funders, providing:

- **Institutional governance** — maturity diagnostic with a score across 5 dimensions
- **Document management** — KYC validation and legal compliance tracking
- **Project marketplace** — public catalogue filtered by SDG, region and investment ticket
- **Automatic matching** — links investors to the projects best aligned with their portfolio
- **Real-time monitoring** — reports, photo evidence, timeline and impact indicators
- **ESG / SDG reporting** — auditable accountability for funders

---

## Pages

| Route | Description |
|-------|-------------|
| `/` | Executive dashboard with global KPIs |
| `/organizacoes` | Organization catalogue with maturity scores |
| `/organizacoes/:id` | Institutional detail + maturity radar |
| `/projetos` | Full project table |
| `/marketplace` | Public showcase filtered by SDG and region |
| `/investidores` | Investor profiles with automatic matching |
| `/impacto` | Consolidated ESG / SDG panel |
| `/monitoramento` | Accountability: reports, evidence, timeline |
| `/para-investidores` | Investor pitch one-pager |

---

## Tech stack

### Frontend
- [Next.js 15](https://nextjs.org/) — App Router, Server Components, Static Export
- [React 19](https://react.dev/)
- [Tailwind CSS 3](https://tailwindcss.com/)
- [Lucide React](https://lucide.dev/) — icons
- TypeScript 5

### Backend (local API)
- [NestJS 11](https://nestjs.com/) — modular, decorators, Swagger
- [ts-node-dev](https://github.com/wclr/ts-node-dev) — hot reload
- In-memory mock data (no database required)

### Monorepo structure
```
ONGanizator/
├── apps/
│   ├── web/        # Next.js 15 (frontend)
│   └── api/        # NestJS 11 (local backend)
├── packages/
│   └── shared/     # Shared TypeScript types
└── package.json    # npm workspaces
```

---

## Running locally

**Requirements:** Node.js 18+ and npm 9+

```bash
# 1. Clone
git clone https://github.com/wesleyzilva/ONGanizator.git
cd ONGanizator

# 2. Install dependencies
npm install --workspaces --include-workspace-root

# 3. Start API (port 3001)
npm run dev:api

# 4. Start frontend (port 3000) — in a separate terminal
npm run dev:web
```

| Service | URL |
|---------|-----|
| Frontend | http://localhost:3000 |
| API | http://localhost:3001 |
| Swagger | http://localhost:3001/docs |

**Demo credentials:**

| Email | Password | Role |
|-------|----------|------|
| `admin@onganizator.com.br` | `demo@2026` | Administrator |
| `ong@demo.org` | `demo@2026` | NGO |
| `investidor@demo.com.br` | `demo@2026` | Investor |

---

## API endpoints

| Method | Route | Description |
|--------|-------|-------------|
| `POST` | `/api/auth/login` | Mock authentication |
| `GET` | `/api/dashboard` | Executive KPIs |
| `GET` | `/api/organizacoes` | Organization list with filters |
| `GET` | `/api/organizacoes/:id/score` | Maturity score breakdown |
| `GET` | `/api/projetos` | Project list with filters |
| `GET` | `/api/investidores/:id/match` | Automatic project matching |
| `GET` | `/api/impacto/resumo` | ESG / SDG summary |
| `GET` | `/api/monitoramento/consolidado` | Consolidated monitoring |
| `GET` | `/api/monitoramento/projeto/:id` | Project timeline + evidence |

---

## Deployment (GitHub Pages)

Deployment is fully automated via GitHub Actions on every push to `main`.

```
push → main → GitHub Actions → static build → gh-pages branch → GitHub Pages
```

Workflow: [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml)

---

## Business context

This MVP was built to demonstrate the platform to social investors and funders.
Full documentation:

- [`One-Page-ONGanizator.md`](One-Page-ONGanizator.md) — investor pitch one-pager
- [`Arquitetura-MVP-Tradeoffs.md`](Arquitetura-MVP-Tradeoffs.md) — technical decisions and roadmap

---

## License

MIT
