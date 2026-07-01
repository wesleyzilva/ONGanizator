# PO Backlog - ONGanizator

## 1. Objetivo do backlog

Este e o backlog canonico do Product Owner para orientar desenvolvimento e suporte da plataforma. Ele traduz a visao de produto, referencias de mercado e RAID log em epicos, historias, criterios de aceite e validacoes.

O criterio principal de priorizacao e simples: primeiro provar a jornada auditavel em ambiente local e demo, depois preparar deploy estatico no GitHub Pages.

## 2. Norte do produto

ONGanizator deve demonstrar uma jornada completa e auditavel:

1. Advogado prospecta financiador.
2. Advogado cadastra/convida ONG.
3. ONG completa cadastro e projeto.
4. Contador valida orcamento e lancamentos.
5. Advogado valida elegibilidade juridica.
6. Investidor ou fundacao avalia risco, projeto e proposta.
7. ONG executa entregas com evidencias.
8. Plataforma consolida relatorio anual.

## 3. Backlog por marco

### M1 - Perfis, permissoes e navegacao

| ID | Historia | Prioridade | Criterios de aceite | Status |
|---|---|---|---|---|
| PO-001 | Como usuario, quero entrar como advogado, contador, ONG, investidor, fundacao ou admin para testar cada jornada separadamente. | P0 | Login exibe os 6 perfis; cada demo user salva role e perspective; /perfil mostra a perspectiva ativa. | [x] Concluido |
| PO-002 | Como stakeholder, quero ver um menu coerente com meu papel para reduzir ruido operacional. | P0 | Contador ve contabilidade, relatorios e pendencias; fundacao ve projetos, matches, risco e relatorios; advogado ve CRM, ONGs, projetos, risco e legal. | [x] Concluido |
| PO-003 | Como time tecnico, quero alinhar tipos compartilhados com as personas reais para evitar divergencia entre mock, API e web. | P0 | packages/shared contempla roles e entidades desejadas; web e API compilam. | [x] Concluido |
| PO-004 | Como admin, quero ver a matriz de permissoes por perfil para explicar quem pode editar, aprovar ou visualizar. | P1 | Tela /permissoes com 22 acoes em 7 modulos, visivel so para adm. | [x] Concluido |

### M2 - Projeto auditavel e selos

| ID | Historia | Prioridade | Criterios de aceite | Status |
|---|---|---|---|---|
| PO-005 | Como ONG, quero cadastrar projeto com objetivo, KRs, orcamento, cronograma e ODS para deixar a promessa mensuravel. | P0 | Projeto exibe objetivo, KRs, metas, responsaveis, orcamento e ODS; dados mock cobrem pelo menos 3 projetos. | [x] Concluido |
| PO-006 | Como advogado, quero aprovar projeto para prospeccao para controlar elegibilidade inicial. | P0 | Projeto tem estado em_avaliacao e aprovado_para_prospeccao; aprovacao gera evento mockado. | [x] Concluido |
| PO-007 | Como ONG e financiador, quero ver selos Bronze, Prata e Ouro para entender maturidade auditavel do projeto. | P0 | Existe um projeto mock por selo; cada selo mostra criterio e evidencia minima. | [x] Concluido |
| PO-008 | Como financiador, quero relatorio anual consolidado por projeto para comprovar entrega fisica, financeira e impacto. | P0 | Relatorio anual inclui objetivo, KRs, evidencias, orcamento executado, parecer contabil e parecer juridico. | [x] Concluido |

### M3 - Captacao conduzida pelo advogado

| ID | Historia | Prioridade | Criterios de aceite | Status |
|---|---|---|---|---|
| PO-009 | Como advogado, quero um kanban de prospeccao para acompanhar oportunidades por status e semaforo. | P0 | CRM usa colunas Backlog, Prospeccao, Em andamento e Finalizado; cards mostram financiador, projeto, ticket, semaforo e proxima acao. | [x] Concluido |
| PO-010 | Como advogado, quero associar financiador/fundacao a projeto para registrar hipotese de match. | P0 | Card de oportunidade mostra ONG, projeto, financiador, justificativa e data. | [x] Concluido |
| PO-011 | Como advogado, quero gerar proposta para patrocinador para apoiar conversas comerciais. | P0 | Proposta mostra objetivo, KRs, orcamento, ODS, modalidade de captacao e contrapartidas. | [x] Concluido |
| PO-012 | Como advogado/contador, quero uma pagina institucional propria para explicar o valor profissional da plataforma. | P1 | Rota /para-profissionais com jornada advogado + contador, dores e ganhos. | [x] Concluido |

### M4 - Incentivos, compliance e contabilidade

| ID | Historia | Prioridade | Criterios de aceite | Status |
|---|---|---|---|---|
| PO-013 | Como advogado, quero selecionar o mecanismo de captacao mais adequado para orientar a proposta. | P0 | Mecanismos: Rouanet, Esporte, FIA, Fundo do Idoso, PRONON, PRONAS, Reciclagem, Audiovisual, doacao direta e edital. | [x] Concluido |
| PO-014 | Como financiador, quero simular limite de incentivo para estimar aporte possivel. | P0 | Calculadora recebe tipo de financiador, imposto estimado, mecanismo e retorna limite, alertas e documentos. | [x] Concluido |
| PO-015 | Como contador, quero validar recibos, comprovantes e conciliacao para apoiar prestacao de contas. | P0 | Contabilidade mostra pendencias, recibos, comprovantes, status e parecer. | [x] Concluido |
| PO-016 | Como admin/financiador, quero pacote de auditoria por projeto para baixar ou visualizar evidencias e documentos. | P1 | Pacote lista projeto, eventos, contrato/termo, comprovantes, evidencias e relatorios. | [x] Concluido |

### M5 - GitHub Pages, demo local e webinar

| ID | Historia | Prioridade | Criterios de aceite | Status |
|---|---|---|---|---|
| PO-017 | Como time, quero rodar o app localmente para iniciar ajustes guiados pelo backlog. | P0 | Dependencias instaladas; npm run dev sobe web/API; URL local registrada no RAID. | [x] Concluido |
| PO-018 | Como time, quero garantir build estatico para GitHub Pages antes de deploy. | P0 | npm run build gera apps/web/out; .nojekyll previsto no workflow. | [x] Concluido |
| PO-019 | Como PO, quero roteiro de demo por perfil para conduzir webinar. | P0 | Roteiro passa por advogado, ONG, contador, fundacao/investidor e admin. | [x] Concluido |
| PO-020 | Como admin, quero white-label basico para demonstrar uso por ONG/rede parceira. | P1 | Config mock permite nome, cor e logo textual. | [x] Concluido |

---

## 4. Sprint 03 — Proximos passos (2026-07-08+)

### M6 - Conteudo real e maturidade das paginas

| ID | Historia | Prioridade | Criterios de aceite |
|---|---|---|---|
| PO-021 | Como ONG, quero que /mentoria exiba mentores reais categorizados por area para eu poder entrar em contato. | P1 | /mentoria lista pelo menos 8 mentores com nome, area, especialidade, CTA de contato e filtro por dimensao. |
| PO-022 | Como advogado, quero que /risco exiba analise real de riscos categorizada para fundamentar due diligence. | P1 | /risco mostra riscos por categoria (juridico, financeiro, reputacional), semaforo, evidencias e recomendacoes. |
| PO-023 | Como ONG, quero completar o onboarding com as 25 perguntas e receber plano de acao com proximos passos concretos. | P1 | /onboarding exibe 25 perguntas em 5 dimensoes; resultado mostra score por dimensao, selo recomendado e lista de acoes priorizadas. |
| PO-024 | Como qualquer perfil, quero que o botao Imprimir no relatorio anual funcione sem quebrar o build estatico. | P2 | PrintButton extraido como client component; botao window.print() funciona na versao deployada. |

### M7 - Selo Diamante e gamificacao completa

| ID | Historia | Prioridade | Criterios de aceite |
|---|---|---|---|
| PO-025 | Como ONG, quero entender os criterios do Selo Diamante para planejar evolucao apos o Ouro. | P1 | Detalhe do projeto e /onboarding exibem criterios do Diamante: captacao ativa + projeto completo anterior validado. |
| PO-026 | Como ONG, quero ver progresso visual de maturidade entre selos para me motivar a evoluir. | P2 | Barra de progresso ou radar em /organizacoes/[id] mostrando distancia para o proximo nivel de selo. |

### M8 - Deploy e observabilidade

| ID | Historia | Prioridade | Criterios de aceite |
|---|---|---|---|
| PO-027 | Como time, quero confirmar que o GitHub Actions executou o deploy com sucesso apos o push. | P0 | push origin main dispara workflow; GitHub Pages serve a versao atualizada em wesleyzilva.github.io/ONGanizator. |
| PO-028 | Como time, quero validar o build pos-Sprint 02 antes do push para evitar regressao. | P0 | npm run build no workspace apps/web exporta sem erros; numero de paginas >= 101. |
| PO-029 | Como PO, quero que o roteiro de demo em /demo reflita todos os perfis e rotas atuais para o webinar. | P1 | /demo inclui steps para os 6 perfis (adm, ong, investidor, advogado, contador, fundacao) com rotas e falas atualizadas. |

### M9 - Qualidade e seguranca

| ID | Historia | Prioridade | Criterios de aceite |
|---|---|---|---|
| PO-030 | Como time, quero revisar LGPD e dados sensiveis antes do deploy publico. | P1 | Nenhum CPF, CNPJ real, dado pessoal identificavel ou credencial real presente em mockData. ConsentBanner presente na UI. |
| PO-031 | Como time, quero garantir responsividade mobile nas paginas principais. | P2 | Dashboard, /projetos, /crm e /investidores renderizam sem overflow em viewport 375px. |
| PO-032 | Como admin, quero que a pagina /demo esteja atualizada para usar no webinar de apresentacao. | P1 | /demo lista os 6 perfis; cada perfil tem pelo menos 5 steps com rota, acao e fala sugerida. |

---

## 5. Regras de aceite globais

- Toda historia P0 deve indicar stakeholder, etapa da jornada e evidencia auditavel.
- Toda alteracao de perfil/menu deve respeitar perspective.ts (VIEW_ALLOWED_HREFS e NAV_GROUPS).
- Toda regra legal deve manter disclaimer de revisao profissional.
- Toda alteracao em dados compartilhados deve avaliar mockData.ts, seed.ts e packages/shared/src/index.ts.
- Toda entrega deve registrar validacao executada ou bloqueio no raidLog.md.

---

## 6. Validacoes executadas

| Data | Item | Resultado |
|---|---|---|
| 2026-07-01 | PO-018 - build estatico web | npm run build executado com sucesso; Next exportou 72 paginas |
| 2026-07-01 | PO-017 - ambiente local | npm run dev subiu web :3000 e API :3001; 200 OK em ambos |
| 2026-07-01 | PO-001 a PO-020 | Todos os itens P0 e P1 do Sprint 01/02 validados e commitados |
| 2026-07-01 | Sprint 02 - jornadas | Permissoes corrigidas para ong, investidor, contador, fundacao; investidores/[id] criado; troca de perfil funcional |
| 2026-07-01 | Build final P0+P1 | 101 paginas exportadas sem erros |
| 2026-07-01 | Docs atualizados | README, Overview, Arquitetura e raidLog refletem estado atual |

---

## 7. Proximo corte recomendado (Sprint 03)

Prioridade imediata:
1. **PO-028** — validar build pos-Sprint 02 (antes de qualquer push)
2. **PO-027** — push + confirmar deploy no GitHub Pages
3. **PO-021** — /mentoria com conteudo real (placeholder atual nao passa em demo)
4. **PO-022** — /risco com analise real categorizada
5. **PO-029** — /demo atualizado para os 6 perfis e rotas atuais

Decisao de produto pendente:
- Nomear a versao publica do produto (ONGanizator e o nome definitivo?)
- Definir cohort piloto: quantas ONGs e financiadores para o primeiro ciclo real
- Priorizar fase 2: persistencia (Prisma + PostgreSQL) ou integracao (CNPJ, pagamentos)?

---

## 8. Decisoes de produto — 2026-07-01

### Nome da plataforma
- **Semente** (nome publico definitivo)
- Subtitulo: Governanca e captacao para impacto social
- Dominio alvo: semente.org.br / semente.app
- ONGanizator mantido como nome tecnico do repositorio GitHub

### Cohort piloto (primeiros 3-6 meses)
| Perfil | Meta | Canal |
|---|---|---|
| 5 ONGs (Selo Bronze) | Onboarding + projeto cadastrado | Francisco Beltrao e Pato Branco/PR |
| 2 fundacoes medias | Match com projetos + dashboard ESG | GIFE membros regionais |
| 3 empresas doadoras | Calculadora fiscal + proposta | Parceiros contabeis |
| 2 advogados especialistas | CRM + mecanismo legal | OAB Terceiro Setor PR/SP |
| 2 contadores OSC | Contabilidade + prestacao de contas | CFC / escritorios parceiros |

---

## 9. Estrategia de captacao de investimento

### Aceleradoras e fundos (entrada recomendada)
| Investidor | Tipo | Ticket | Como entrar |
|---|---|---|---|
| Artemisia | Aceleradora negocio social | R$ 50-200k | artemisia.org.br/inscreva-se |
| Vox Capital | Fundo VC impacto | R$ 500k-5M | voxcapital.com.br |
| MOV Investimentos | Fundo impacto | R$ 200k-2M | movinvestimentos.com.br |
| PIPE/FAPESP | Subvencao nao-dilutiva | R$ 200k-1,2M | fapesp.br/pipe |
| InovAtiva Brasil | Aceleracao + FINEP | R$ 200k-500k | inovativabrasil.com.br |
| Anjos do Brasil | Rede de anjos | R$ 50-300k | anjosdobrasil.net |
| BNDES Garagem | Subvencao | R$ 200k | bndes.gov.br |

### Plano para chegar ao primeiro cheque
1. Mes 1-2: 5 ONGs reais usando a plataforma (piloto Francisco Beltrao/PR)
2. Mes 2-3: Coletar metricas (NPS, projetos cadastrados, captacao intermediada)
3. Mes 3-4: Montar deck 10 slides + inscrever no Artemisia e InovAtiva
4. Mes 4-6: Demo Days ABStartups / Impact Hub + reunioes com anjos estrategicos

### Modelo de receita

| Plano | Publico | Preco/mes |
|---|---|---|
| Gratuito | ONGs pequenas | R$ 0 |
| Bronze | ONGs estruturadas | R$ 149 |
| Prata | ONGs medias | R$ 349 |
| Ouro / Redes | Institutos e redes | R$ 890 |

Receitas complementares:
- Taxa de sucesso: 1-3% sobre captacao intermediada
- Diagnostico premium com parecer humano: R$ 490/relatorio
- Licenca calculadora fiscal para advogados: R$ 299/advogado/mes
- White-label para redes (GIFE, ABONG): R$ 2.000-8.000/mes

Projecao mes 12: ~R$ 24.000 MRR com 50 ONGs Bronze + 20 Prata + 5 Ouro

---

## 10. Arquitetura fase 2 — Plataforma real (custo ~R$ 28/mes)

| Servico | Papel | Plano |
|---|---|---|
| Vercel | Frontend Next.js | Hobby gratuito |
| Railway | API NestJS | Starter /mes |
| Supabase | PostgreSQL + Auth + Storage | Free tier (500MB) |
| Resend | E-mail transacional | Free (3k emails/mes) |
| Upstash | Redis rate-limit/cache | Free (10k req/dia) |
| Sentry | Erros e performance | Free (5k events/mes) |
| BetterStack | Logs + uptime monitoring | Free (1GB logs/mes) |
| Cloudflare | CDN + WAF basico | Free |

### Migracao do MVP atual para fase 2

| O que migrar | Para onde | Esforco |
|---|---|---|
| mockData.ts | Supabase PostgreSQL via Prisma | 2-3 semanas |
| Sem auth real | Supabase Auth (magic link + senha) | 1 semana |
| GitHub Pages estatico | Vercel (SSR habilitado, dominio proprio) | 2 dias |
| NestJS sem banco | NestJS + Prisma + Railway | 1 semana |
| Sem e-mail | Resend (welcome, notificacoes) | 2 dias |
| Sem observabilidade | Sentry + BetterStack | 1 dia |

### Seguranca OWASP — mitigacoes gratuitas
| Vulnerabilidade | Mitigacao |
|---|---|
| Injecao SQL | Prisma ORM (queries parametrizadas) |
| Autenticacao fraca | Supabase Auth bcrypt + JWT + MFA opcional |
| Dados expostos | Supabase Row Level Security (RLS) por perfil |
| Rate limiting | Upstash Redis + NestJS ThrottlerGuard |
| XSS | Next.js sanitiza por padrao + CSP headers Vercel |
| LGPD | Supabase hospedado AWS sa-east-1 (Sao Paulo) |

---

## 11. Sprint 04 — Fase 2 (proximos passos apos deploy Pages)

### M10 - Infraestrutura real

| ID | Historia | Prioridade | Criterios de aceite |
|---|---|---|---|
| PO-033 | Como time, quero banco de dados real para sair do mockData e validar persistencia. | P0 | Supabase criado; schema Organization + User + Project migrado via Prisma; seed automatico. |
| PO-034 | Como time, quero autenticacao real para substituir o mockAuth.ts. | P0 | Supabase Auth com magic link; login salva sessao real; perfil lido do banco. |
| PO-035 | Como time, quero deploy no Vercel para ter dominio proprio e SSR. | P0 | semente.app ou semente.org.br apontando para Vercel; build sem erros; env vars configuradas. |
| PO-036 | Como time, quero API NestJS no Railway conectada ao Supabase. | P0 | Railway sobe NestJS; variavel DATABASE_URL configurada; endpoint /organizacoes retorna dados reais. |
| PO-037 | Como time, quero observabilidade basica para diagnosticar erros em producao. | P1 | Sentry configurado no frontend e backend; BetterStack recebe logs da API; uptime monitor ativo. |

### M11 - Piloto com ONGs reais

| ID | Historia | Prioridade | Criterios de aceite |
|---|---|---|---|
| PO-038 | Como ONG piloto, quero me cadastrar com CNPJ e dados reais para validar o fluxo. | P0 | Formulario de cadastro salva Organization no Supabase; e-mail de boas-vindas enviado via Resend. |
| PO-039 | Como ONG, quero que meu projeto cadastrado persista entre sessoes. | P0 | Projeto salvo no banco; acessivel apos logout + login; nao depende de mock. |
| PO-040 | Como financiador, quero que o match retorne projetos do banco real. | P1 | API /investidores/:id/match consulta Supabase com filtros ODS + regiao + ticket. |
| PO-041 | Como time, quero NPS automatico apos 30 dias de uso. | P1 | E-mail Resend dispara pergunta NPS em D+30; respostas salvas no banco. |

### M12 - Pitch e captacao

| ID | Historia | Prioridade | Criterios de aceite |
|---|---|---|---|
| PO-042 | Como PO, quero deck de pitch de 10 slides baseado nos dados do piloto. | P1 | Deck com: problema, solucao, mercado (TAM/SAM/SOM), produto, tracao, time, pedir. |
| PO-043 | Como PO, quero one-pager atualizado com metricas reais do piloto. | P1 | One-Page-Semente.md com NPS, ONGs ativas, projetos, captacao intermediada. |
| PO-044 | Como time, quero inscrever no Artemisia e InovAtiva com dados de tracao. | P0 | Formularios preenchidos; one-pager e deck enviados antes do prazo da chamada. |

---

## 12. Metricas de sucesso do piloto (12 semanas)

| Metrica | Meta minima | Meta ideal |
|---|---|---|
| ONGs cadastradas | 5 | 15 |
| Projetos publicados | 5 | 20 |
| Matches gerados | 3 | 15 |
| NPS medio | 40 | 60+ |
| Relatorios anuais gerados | 3 | 10 |
| Receita MRR | R$ 0 (piloto gratis) | R$ 1.500 |

