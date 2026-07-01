# Visão de Produto — ONGanizator

> Este documento reúne a visão de produto e o backlog ativo para orientar desenvolvimento e prioridades.

## Propósito

ONGanizator é uma plataforma de governança, captação e prestação de contas para ONGs, investidores sociais, advogados/contadores e administradores. A proposta é transformar a jornada em uma experiência auditável, com narrativa clara de valor entre ONG, projeto, captação, investidor e relatório.

## Tese do projeto

ONGanizator reduz a assimetria de informação entre quem precisa de recursos e quem financia impacto social, com transparência, padronização e monitoramento contínuo. O produto une governo institucional, captação de projetos e prestação de contas em um fluxo único.

## Problema central

- ONGs não têm um sistema de projetos auditável e transparentes para doadores.
- Investidores e empresas não conseguem comparar oportunidades de impacto com dados confiáveis.
- Advogados e contadores precisam de uma visão profissional e de compliance no fluxo de financiamento.
- A falta de evidências e relatórios cria risco de perda de recursos e baixa confiança.

## Stakeholders e perfis

- **ONG**: deve cadastrar instituição, projetos, provas e evoluir com selos e entregas.
- **Investidor / Empresa**: busca projetos com clareza, segurança, contrapartida e potencial de impacto.
- **Advogado / Contador**: monitora compliance, contratos e fluxo de financiamento.
- **Administrador (ADM)**: vê todas as visões e garante governança da plataforma.

## Público-alvo

- **Oferta**: ONGs, cooperativas e negócios sociais.
- **Demanda**: empresas patrocinadoras, institutos, fundações e investidores de impacto.
- **Operação**: avaliadores técnicos, advogados e gestores de captação.

## Proposta de valor

| Público | Valor entregue |
|---|---|
| ONG | Cadastro, diagnóstico, projetos, crowdfunding, CRM, contabilidade, evidências e prestação de contas |
| Empresa | Busca de projetos, análise de risco, cálculo de benefício fiscal, contrato personalizado e relatório ESG |
| Investidor social | Match com projetos alinhados a ODS, região, ticket, maturidade e tração |
| Auditor/compliance | Trilha de documentos, contratos, pagamentos, marcos, evidências e relatórios |
| Mentor/consultor | Marketplace para acelerar maturidade institucional das ONGs |

## Diferenciais competitivos

- Unir governança institucional com crowdfunding, CRM e prestação de contas.
- Trilha auditável que conecta doação, execução e resultado.
- Especialização em regras fiscais brasileiras e compliance para ONG, investidor e advogado.
- Arquitetura preparada para evoluir de mock para backend real.

## Quatro visões principais

1. **ONG**
   - Gamificação por selos.
   - Cadastro institucional e projeto.
   - Provas, autoavaliação e prestação de contas.

2. **Investidor**
   - Avaliação de projetos por ODS, risco e ticket.
   - Relatórios de impacto e visão de decisão de investimento.

3. **Advogado / Contabilidade**
   - Fluxo de parcerias, contratos e due diligence.
   - Visão de CRM e status financeiro.

4. **ADM**
   - Visão completa do sistema.
   - Controle de perfis, menus e estruturas de acesso.

## Jornada central do MVP

1. Advogado cadastra ONG.
2. ONG valida perfil e atualiza cadastro.
3. ONG cria projeto e mantém histórico auditável.
4. Projeto é exposto em crowdfunding/marketplace.
5. Investidor analisa e contribui via PIX mock.
6. Sistema gera evidências e relatório executivo.

## MVP de apresentação

O MVP deve permitir:
- autenticação e perfis mock para diferentes stakeholders;
- cadastro institucional e de projeto com metadados mínimos;
- fluxo de captação com PIX simulado;
- relatório executivo exportável;
- visão adaptada por perspectiva.

## Escopo do backlog ativo

- Perfis e login mock para as quatro visões.
- Perspectiva seletora e menu adaptativo.
- Projeto/campanha com cadastro e detail.
- Crowdfunding PIX simulado.
- Perfil com completude e consentimento LGPD.
- Exportação de relatórios simples.

## Módulos atuais

| Grupo | Módulo | Rota | Status |
|---|---|---|---|
| Principal | Dashboard | `/` | Implementado |
| Principal | Organizações | `/organizacoes` | Implementado |
| Principal | Projetos | `/projetos` | Implementado |
| Principal | Investidores | `/investidores` | Implementado |
| Captação | Marketplace | `/marketplace` | Implementado |
| Captação | Crowdfunding | `/crowdfunding` | Implementado |
| Captação | CRM | `/crm` | Implementado |
| Governança | Diagnóstico | `/diagnostico` | Implementado |
| Governança | Risco Reputacional | `/risco` | Implementado |
| Governança | Contabilidade | `/contabilidade` | Implementado |
| Impacto | Monitoramento | `/monitoramento` | Implementado |
| Impacto | Impacto & ESG | `/impacto` | Implementado |
| Impacto | Mentoria | `/mentoria` | Implementado |
| Institucional | Para investidores | `/para-investidores` | Implementado |
| Legal / Compliance | Parcerias legais | `/parcerias` | Planejado imediato |

## Regras legais brasileiras no produto

A plataforma deve conhecer e operacionalizar regras legais brasileiras como base de orientação, geração de contratos e trilha auditável. A implementação deve conter:

- base de marcos legais com limites, requisitos, órgão aprovador e documentos obrigatórios;
- calculadora de benefício fiscal estimado;
- seletor de mecanismo adequado por tipo de projeto e regime tributário;
- gerador de contratos/termos com campos obrigatórios;
- checklist documental para empresa e ONG;
- alertas de conformidade;
- pacote de auditoria exportável.

Mecanismos cobertos inicialmente:

- Doação direta;
- FIA;
- Lei Rouanet;
- Lei de Incentivo ao Esporte;
- PRONON/PRONAS;
- MROSC.

## Métricas de produto

| Métrica | Objetivo |
|---|---|
| Score de maturidade | Indicar prontidão da ONG para receber recursos |
| Score de risco | Apoiar decisão da empresa antes da parceria |
| Score de match | Priorizar projetos para cada investidor |
| % de metas SMART | Acompanhar execução real do projeto |
| % de orçamento executado | Comparar aporte, despesa e saldo |
| Evidências por marco | Sustentar auditoria e relatórios ESG |
| Custo efetivo da doação | Mostrar impacto dos benefícios fiscais |

## Modelo de receita inicial

- Assinatura por organização e usuário para ONGs.
- Plano para empresas patrocinadoras que inclui pipeline ESG, risco, contratos e relatórios.
- Taxa de sucesso sobre captação concluída.
- Taxa por campanha/crowdfunding e transação.
- Pacotes premium para contabilidade, CRM e geração de contratos.

## Dados mock atuais

A demo usa dados estáticos em `apps/web/src/lib/mockData.ts`, incluindo organizações, projetos, investidores, indicadores, relatórios, timeline, campanhas de crowdfunding, diagnóstico, risco, CRM, mentoria, contabilidade, marcos legais brasileiros e calculadora de benefício fiscal.

## Regras de uso deste documento

Este arquivo deve ser o ponto de referência para o produto: visão, problema, stakeholders, perfis e a jornada MVP. Tudo o que for redefinido no backlog deve ser reconciliado aqui.
