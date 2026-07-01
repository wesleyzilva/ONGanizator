# Deprecated — veja os documentos ativos

Este arquivo foi mantido apenas como histórico. Os documentos ativos do backlog agora são:

- `vision.md` — visão de produto, perfis e jornada.
- `roadmap.md` — status técnico, gaps e roteiro de execução.
- `backlog.md` — backlog priorizado e status de entrega.
- `raid-log.md` — descobertas, contexto e notas de evolução.

## Este documento não é mais usado

Use `backlog.md` para priorização e status do PO.

---

# AI-First Backlog — Prioridade vs Complexidade

Este backlog AI-first foi elaborado com foco no roadmap do PO e nas quatro visões centrais do produto. Use-o para guiar entregas por prioridade e complexidade, mantendo o trabalho alinhado com o desenvolvimento e as jornadas de usuário.

## Documentos ativos
- `vision.md` — visão de produto, perfis e jornada.
- `roadmap.md` — status técnico, gaps e roteiro de execução.
- `backlog.md` — backlog priorizado e status de entrega.
- `raid-log.md` — descobertas, contexto e notas de evolução.

## Como usar

- Marcar uma tarefa como `DONE` quando implementada.
- Priorizar o bloco "Alto / Baixa" para entregas rápidas (quick wins).
- Para tarefas de alta complexidade/alto impacto, criar épicos e dividir em user stories.

## O que falta e atenção imediata

- Legal e compliance: módulo de parceria/contrato com cálculos fiscais e checklist documental.
- Persistência e backend: migrar mock estático para API/NestJS e armazenar dados reais.
- Jornada de valor: reforçar `ONG → projeto → captação → investidor → compliance/relatório`.
- Relatórios: consolidar `/relatorios` como ponto de convergência do fluxo e do dashboard executivo.
- Perspectivas: garantir quatro visões claras (ADM, ONG, Investidor, Advogado/Contabilidade) e menus adaptativos.
- Qualidade e validação: testes, QA, observabilidade e documentação de API.

---

## Alto / Baixa (Prioridade alta, Complexidade baixa) — Quick wins

- [x] Implementar telas de cadastro e login (ONG, Doador PF, Doador PJ) — `docs/ong-cadastro-diagnostico.md`, `docs/doador-pj.md`
- [x] Criar fluxo "Criar Campanha" mínimo (dados gerais + upload de mídia + publicação) — `docs/crowdfunding-campanhas.md`
- [x] Habilitar pagamento PIX (configuração básica e captura de comprovante) para doações únicas — `docs/crowdfunding-campanhas.md`
- [x] Implementar barra de completude no cadastro ONG / PJ (visualização do progresso) — `docs/ong-cadastro-diagnostico.md`
- [x] Gerar PDFs simples de prestação de contas (template executivo) para download manual — `docs/financeiro-prestacao-contas.md`

---

## Alto / Média (Prioridade alta, Complexidade média)

- [ ] Integração com gateway de pagamentos (Stripe / Mercado Pago) — recorrência, boletos e carteiras digitais — `docs/crowdfunding-campanhas.md`
- [ ] Gestão documental com uploads e verificação básica (validade de documentos, tipagem) — `docs/ong-cadastro-diagnostico.md`
- [ ] Pipeline do CRM para doadores (lead → qualificação → proposta) e dashboard do doador — `docs/modulo-administrador.md`, `docs/doador-pj.md`
- [ ] Geração automática de PDF executivo/técnico ao clicar "Gerar Prestação de Contas" (background job) — `docs/financeiro-prestacao-contas.md`
- [ ] Módulo de Projetos: criar estrutura lógica (ODS → Objetivo → Meta → Atividade → Item de despesa) e vinculação a lançamentos financeiros — `docs/projetos-monitoramento.md`

---

## Alto / Alta (Prioridade alta, Complexidade alta)

- [ ] Motor de matching entre Editais / Empresas / Investidores e ONGs (algoritmo com pesos configuráveis) — `docs/editais-match.md`, `docs/doador-pj.md`
- [ ] Integração completa de conciliação financeira (OFX/CSV + regras de conciliação) e gestão de chargebacks/reembolsos — `docs/financeiro-prestacao-contas.md`
- [ ] Implementação de RBAC (SuperADM, Admin ONG, Financeiro ONG, Auditor, Prestador) e multi-tenancy segura — `docs/modulo-administrador.md`
- [ ] Emissão automática de recibos fiscais / NF (integração com serviços locais de NF-e) — `docs/financeiro-prestacao-contas.md`

---

## Médio / Baixa

- [ ] Marketplace: cadastro simples de serviço/curso (publicação e busca básica) — `docs/marketplace-servicos.md`
- [ ] Sistema de avaliações (0–5) e comentários para serviços e cursos — `docs/marketplace-servicos.md`
- [ ] Relatório institucional avulso (download) — `docs/marketplace-servicos.md`

---

## Médio / Média

- [ ] Integração com WhatsApp Business API para compartilhamento e notificações — `docs/crowdfunding-campanhas.md`
- [ ] Painel BI básico (MRR, ARR, taxa de conversão, leads) com filtros por período — `docs/modulo-administrador.md`, `docs/financeiro-prestacao-contas.md`
- [ ] Workflow de validação manual de documentos e SLOs para análise de selos — `docs/ong-cadastro-diagnostico.md`

---

## Médio / Alta

- [ ] Plataforma de cursos com avaliação e emissão de certificados (ciclo completo) — `docs/marketplace-servicos.md`
- [ ] Relatórios ESG e SROI automatizados (cálculo e agendamento) — `docs/financeiro-prestacao-contas.md`, `docs/projetos-monitoramento.md`

---

## Baixo / Baixa

- [ ] Templates de kit de divulgação (geração de imagens básicas) — `docs/crowdfunding-campanhas.md`
- [ ] Páginas públicas e SEO-friendly para campanhas — `docs/crowdfunding-campanhas.md`

---

## Baixo / Média

- [ ] Relatório de due diligence e reputacional (versão básica) — `docs/marketplace-servicos.md`
- [ ] Portal do investidor com histórico de relatórios recebidos — `docs/financeiro-prestacao-contas.md`

---

## Baixo / Alta

- [ ] Integração com Open Finance e conciliações bancárias em tempo real — `docs/financeiro-prestacao-contas.md`
- [ ] Automação avançada para matching e recomendação (ML) — `docs/editais-match.md`, `docs/marketplace-servicos.md`

---

## Itens transversais (priorizar paralelamente)

- [ ] Segurança & conformidade: LGPD, logs de consentimento, criptografia em trânsito e repouso — (crítico)
- [ ] Testes e QA: criar cenários mock e dados de teste para cada módulo (ONGs, Doadores, Projetos, Campanhas) — (essencial antes de demo)
- [ ] Infra & observabilidade: jobs, filas, monitoramento e alertas para processos longos (PDF, pagamentos) — (essencial)
- [ ] Documentação de APIs e contratos (OpenAPI) — (importante)

---

## Próximo passo recomendado

1. Conferir e ajustar prioridades com PM e advogada (segurança/legal).
2. Exportar os itens de alto/baixa para o backlog como issues (posso gerar CSV/JSON pronto para import).
3. Começar pelos 3 primeiros itens de "Alto / Baixa" como sprint inicial.

---

## Ações imediatas (adicionar ao RAID e README)

- [ ] Atualizar `README.md` e principais `docs/*.md` para evitar divergência de informação — incluir versão e data.
- [ ] Documentar arquitetura por "capabilities" em `docs/architecture.md` (camadas, bounded contexts, responsabilidades).
- [ ] Alinhar foco inicial: Frontend responsivo (MVP) com objetivo de suportar a jornada do decisor de investimento:
	- Objetivo do MVP: permitir avaliação rápida do "Projeto em decisão de investimento" com clareza, segurança e evidências de contrapartida.
	- Critérios chave: clareza da proposta, garantias/segurança, detalhamento da contrapartida, fluxo de transação de valor, linguagem do decisor.
	- Jornada: pré-investimento (documentos, diagnóstico, score), durante (transação segura, acompanhamento) e pós (prestação de contas, evidências, relatórios).
	- Entregáveis iniciais: telas responsivas de visualização do projeto, botão de intenção/compromisso, captura de comprovante (PIX) e página de resumo para decisores.

---

## Observação

Essas ações devem ser executadas em paralelo ao desenvolvimento backend mínimo; prioridade alta para README/arquitetura e frontend MVP para fins de apresentação à advogada e ONG piloto.
