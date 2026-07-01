# Módulo Administrador — Transcrição do Diagrama

Este documento contém a transcrição estruturada do diagrama do **Módulo Administrador** para servir como base para definição de fluxo, backlog e melhorias na aplicação.

## Visão geral do fluxo

SuperADM → Módulo Superadministrador (Gestão do Ecossistema) → Dashboard Executivo Principal → CRM Geral da Plataforma → Gestão Comercial → Módulo de Gestão Financeira → Business Intelligence → Central Administrativa → Gestão de Conteúdo & Comunicação

---

## SuperADM

- Papel com acesso total ao sistema (superadministrador).

## Módulo Superadministrador / Gestão do Ecossistema

Objetivo: permitir a administração completa da plataforma, monitorando:

- ONGs
- Empresas
- Doadores
- Campanhas
- Editais
- Projetos
- Consultores
- Mentores
- Parceiros
- Cursos
- Receita da plataforma
- Indicadores de impacto

Funcionalidades esperadas:

- Gerenciamento CRUD das entidades acima.
- Controles de permissão e auditoria.

## Dashboard Executivo Principal

Visão geral ao realizar login como Superadministrador. Itens:

- Visão geral do ecossistema (usuários e entidades cadastradas)
  - ONGs cadastradas
  - Empresas cadastradas
  - Doadores cadastrados
  - Consultores cadastrados
  - Parceiros cadastrados

- Projetos
  - Projetos ativos
  - Projetos concluídos
  - Projetos em análise
  - Projetos captando recursos

- Campanhas
  - Campanhas ativas
  - Campanhas concluídas
  - Campanhas suspensas

- Editais
  - Editais ativos
  - Editais encerrados
  - Editais em elaboração

- Financeiro (indicadores)
  - Valor total captado
  - Valor movimentado
  - Receita da plataforma
  - Comissões recebidas
  - Assinaturas ativas

- Impacto
  - Beneficiários atendidos
  - Municípios alcançados
  - Estados alcançados
  - ODS apoiadas
  - Investimento social mobilizado

## CRM Geral da Plataforma

Visão única de todos os relacionamentos e cadastro de leads:

- Tipos: ONGs, Empresas, Institutos, Fundações, Órgãos Públicos, Consultores, Parceiros

Pipeline Comercial — Etapas:
1. Lead Captado
2. Qualificação
3. Diagnóstico
4. Proposta Enviada
5. Negociação
6. Contrato
7. Implantação
8. Cliente Ativo

Funcionalidades:

- Cadastro e histórico de interações
- Gestão de contatos e organizações
- Relacionamento entre entidades (ex.: ONG ↔ Doador)

## Gestão Comercial

Produtos/comercializados e serviços:

- Produtos comercializados
- Governança
- ESG
- Captação de Recursos
- Planejamento Estratégico

Cursos e formações:
- Captação de Recursos
- Gestão de ONGs
- ESG
- ODS
- Prestação de Contas

Certificações:
- Maturidade Institucional
- Compliance
- ESG
- Transparência

Mentorias:
- Individual
- Grupo
- Executiva

Observação: manter registro de clientes, contratos e faturamento relacionados.

## Módulo de Gestão Financeira

Objetivo: controlar contabilidade e finanças — mesma estrutura das ONGs, mas com plano de contas próprios.

Funcionalidades esperadas:

- Plano de contas
- Contas a pagar / receber
- Lançamentos financeiros
- Relatórios financeiros (fluxo de caixa, DRE simplificado)
- Integração com CRM para faturamento por produto/curso/assessoria

## Business Intelligence (BI)

Indicadores estratégicos do ecossistema:

- Crescimento de usuários
- Taxa de retenção
- Taxa de conversão

Impacto:
- Beneficiários
- Projetos apoiados
- ODS alcançadas

Financeiro (exemplos):
- Receita recorrente mensal (MRR)
- Receita anual (ARR)
- Ticket médio
- Lifetime Value (LTV)

Comercial:
- Leads gerados
- Clientes ativos
- Taxa de fechamento

## Central Administrativa

Responsabilidades e permissões administrativas:

- Central administrativa para gestão de usuários
- Permissões: Superadministrador, Controle total, Administrador, Controle operacional, Analista, Acesso parcial
- Suporte, Atendimento e Comercial
- Integração com CRM e equipe de vendas

## Gestão de Conteúdo & Comunicação

Publicações e canais:

- Publicação de: notícias, artigos, editais, eventos, webinars

Central de Comunicação:
- E-mail marketing (campanhas segmentadas)
- WhatsApp (integração para campanhas)
- Push Notification
- Aplicativo móvel

---

## Próximos passos sugeridos

1. Revisar o conteúdo deste arquivo com o time (corrigir termos e prioridades).
2. Converter seções em epics e user stories no backlog.
3. Priorizar integrações críticas (pagamento, e-mail, WhatsApp, BI).
4. Definir APIs e contratos de dados entre CRM, Financeiro e BI.

Se quiser, posso dividir as seções em issues prontas para importar no GitHub Projects.
