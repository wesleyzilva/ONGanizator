# Arquitetura por Capabilities — Visão Geral

Este documento descreve a proposta de arquitetura orientada a capabilities, adotando a camada preferida: Frontend → Facade → Negócio / Persistência → Tabelas. Serve como base para decisões de design e para manter consistência entre documentação e código.

## Princípios

- Camadas bem definidas: separar apresentação, orquestração (facade), regras de negócio e persistência.
- Reuso de campos: padronizar entidades e colunas reutilizáveis (audit, contato, endereço, ODS, tags).
- Capabilities como bounded contexts: cada capability (crowdfunding, projetos, finance, marketplace, editais) tem API/DB próprias quando necessário, mas compartilhando modelos comuns.
- Segurança e compliance desde o início: logs de auditoria, consentimento LGPD, criptografia, RBAC.

## Camadas e responsabilidades

1) Frontend (Responsividade / MVP do decisor)
- Single Page App responsiva (Next.js/React). Foco inicial: telas para decisores (pré → durante → pós).
- Responsável por validação mínima, acessibilidade e UX para decisores.

2) Facade (API Gateway / BFF)
- Orquestra fluxos de UI: compõe chamadas a serviços de negócio, simplifica contratos para o frontend.
- Valida políticas de autorização de alto nível, caching de views e transformação de DTOs.

3) Negócio (Services / Domain)
- Regras de negócio, validações complexas, motores de matching, geração de PDFs, cálculo de scores.
- Expõe APIs internas (REST/GraphQL) e workers para processamento assíncrono (fila para PDFs, pagamentos).

4) Persistência (Repository / DAO)
- Interface única para persistência. Implementações podem variar: PostgreSQL para entidades relacionais, ElasticSearch para busca, S3 para mídias.
- Versionamento de esquemas via migrations (Flyway, Liquibase, Prisma Migrate).

5) Tabelas (Modelo físico)
- Padronizar tabelas base: `orgs`, `projects`, `campaigns`, `donations`, `transactions`, `documents`, `users`, `roles`, `audit_logs`.
- Campos reutilizáveis recomendados:
  - `id` (uuid), `created_at`, `updated_at`, `deleted_at` (soft delete)
  - `org_id`, `owner_id`, `status`, `score`, `tags` (jsonb)
  - `contact` (telefone, email), `address` (jsonb estruturado)

## Multi‑tenancy e isolamento

- Modelo recomendado: shared schema com `org_id` nas tabelas críticas; migrar para schema por tenant apenas se escala/segurança exigir.
- Indices e políticas de row-level security (RLS) para proteção adicional.

## Persistência: diretrizes práticas

- Use `jsonb` para campos flexíveis (metas, indicadores) evitando multiplicar colunas.
- Defina índices GIN para buscas por tags/ODS.
- Planeje partições (time-based) para logs e transações de alto volume.

## Auditoria, logs e compliance

- `audit_logs` obrigatória para ações sensíveis (criação/alteração/exclusão de docs/valores financeiros).
- Armazenar consentimentos e versões de termos por usuário/org.

## Integrações e contratos (APIs)

- Documentar contratos via OpenAPI. Webhooks para eventos críticos (pagamento confirmado, prestação gerada).
- Facade deve expor endpoints orientados à view do frontend; serviços internos seguem contrato mais granular.

## Testes, mocks e ambiente

- Criar fixtures/seed para ONGs, doadores (PF/PJ), 3 projetos e 1 campanha para testes e demos.
- CI: testes unitários, contratos (Pact), integração com ambiente de pagamentos sandbox.

## Roadmap técnico imediato

1. Criar `docs/architecture.md` (este arquivo).
2. Atualizar `README.md` com visão e links para docs.
3. Gerar ERD inicial com entidades principais e campos reutilizáveis.
4. Implementar BFF simples para o MVP do decisor (pré/durante/pós).

---

Se quiser, gero agora o ERD em PlantUML e atualizo o `README.md` automaticamente. Qual prefere: ERD (PlantUML) ou CSV de issues com prioridades (Alto/Baixa)?
