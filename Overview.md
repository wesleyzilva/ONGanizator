# ONGanizator - Overview da Plataforma

## 1. Visao

ONGanizator e uma plataforma de governanca, captacao e financiamento de impacto social que conecta ONGs, cooperativas, negocios sociais, empresas doadoras, institutos, fundacoes e investidores sociais.

O objetivo central e criar uma jornada clara para a empresa e uma jornada auditavel para a ONG:

1. A empresa entende projetos, riscos, beneficios fiscais e contrapartidas ESG.
2. A ONG estrutura cadastro, documentos, projeto, orcamento, metas e evidencias.
3. A plataforma gera match, contrato, acompanhamento, prestacao de contas e relatorios.

## 2. Problema

Empresas querem doar ou patrocinar impacto social, mas enfrentam:

- baixa clareza sobre mecanismos legais e fiscais brasileiros;
- dificuldade de validar reputacao e capacidade de execucao das ONGs;
- falta de padrao contratual;
- pouca rastreabilidade entre aporte, execucao e impacto;
- relatorios ESG manuais e pouco auditaveis.

ONGs, por outro lado, precisam:

- organizar documentos e governanca;
- apresentar projetos com objetivos, metas SMART e orcamento;
- captar recursos em multiplos canais;
- comprovar execucao fisica e financeira;
- construir relacionamento recorrente com doadores.

## 3. Proposta de valor

| Publico | Valor entregue |
|---|---|
| ONG | Cadastro, diagnostico, projetos, crowdfunding, CRM, contabilidade, evidencias e prestacao de contas |
| Empresa | Busca de projetos, analise de risco, calculo de beneficio fiscal, contrato personalizado e relatorio ESG |
| Investidor social | Match com projetos alinhados a ODS, regiao, ticket, maturidade e tracao |
| Auditor/compliance | Trilha de documentos, contratos, pagamentos, marcos, evidencias e relatorios |
| Mentor/consultor | Marketplace para acelerar maturidade institucional das ONGs |

## 4. Modulos atuais

| Grupo | Modulo | Rota | Status |
|---|---|---|---|
| Principal | Dashboard | `/` | Implementado |
| Principal | Organizacoes | `/organizacoes` | Implementado |
| Principal | Projetos | `/projetos` | Implementado |
| Principal | Investidores | `/investidores` | Implementado |
| Captacao | Marketplace | `/marketplace` | Implementado |
| Captacao | Crowdfunding | `/crowdfunding` | Implementado |
| Captacao | CRM | `/crm` | Implementado |
| Governanca | Diagnostico | `/diagnostico` | Implementado |
| Governanca | Risco Reputacional | `/risco` | Implementado |
| Governanca | Contabilidade | `/contabilidade` | Implementado |
| Impacto | Monitoramento | `/monitoramento` | Implementado |
| Impacto | Impacto & ESG | `/impacto` | Implementado |
| Impacto | Mentoria | `/mentoria` | Implementado |
| Institucional | Para Investidores | `/para-investidores` | Implementado |
| Legal/Compliance | Parcerias legais | `/parcerias` | Planejado imediato |

## 5. Fluxos principais

### 5.1 Jornada da ONG

1. Cadastro institucional.
2. Diagnostico de maturidade.
3. Cadastro de projeto com objetivos, metas, orcamento e cronograma.
4. Publicacao no marketplace/crowdfunding.
5. Recebimento de interesse ou aporte.
6. Execucao do projeto com marcos e evidencias.
7. Lancamentos contabeis e DRE.
8. Relatorio periodico e prestacao de contas final.

### 5.2 Jornada da empresa doadora

1. Explora projetos por causa, ODS, regiao e ticket.
2. Consulta score de risco reputacional da ONG.
3. Escolhe mecanismo legal: doacao direta, FIA, Rouanet, Esporte, PRONON/PRONAS ou MROSC.
4. Simula beneficio fiscal e custo efetivo.
5. Gera contrato/termo personalizado.
6. Acompanha a execucao por dashboard.
7. Baixa relatorio ESG e pacote de auditoria.

### 5.3 Jornada do investidor social

1. Cadastra mandato de impacto.
2. Define ODS, regioes, ticket minimo/maximo e restricoes.
3. Recebe ranking de projetos por score de match.
4. Solicita relatorio completo ou conversa com ONG.
5. Acompanha indicadores de impacto.

## 6. Regras legais brasileiras no produto

A plataforma deve conhecer e operacionalizar regras legais brasileiras como base de orientacao, geracao de contratos e trilha auditavel. A implementacao deve conter:

- base de marcos legais com limites, requisitos, orgao aprovador e documentos obrigatorios;
- calculadora de beneficio fiscal estimado;
- seletor de mecanismo adequado por tipo de projeto e regime tributario;
- gerador de contratos/termos com campos obrigatorios;
- checklist documental para empresa e ONG;
- alertas de conformidade;
- pacote de auditoria exportavel.

Mecanismos cobertos inicialmente:

- Doacao direta;
- FIA;
- Lei Rouanet;
- Lei de Incentivo ao Esporte;
- PRONON/PRONAS;
- MROSC.

## 7. Dados e mock atual

A demo usa dados estaticos em `apps/web/src/lib/mockData.ts`, incluindo organizacoes, projetos, investidores, indicadores, relatorios, timeline, campanhas de crowdfunding, diagnostico, risco, CRM, mentoria, contabilidade, marcos legais brasileiros e calculadora de beneficio fiscal.

## 8. Metricas de produto

| Metrica | Objetivo |
|---|---|
| Score de maturidade | Indicar prontidao da ONG para receber recursos |
| Score de risco | Apoiar decisao da empresa antes da parceria |
| Score de match | Priorizar projetos para cada investidor |
| % de metas SMART | Acompanhar execucao real do projeto |
| % de orcamento executado | Comparar aporte, despesa e saldo |
| Evidencias por marco | Sustentar auditoria e relatorios ESG |
| Custo efetivo da doacao | Mostrar impacto dos beneficios fiscais |

## 9. Estado atual de entrega

- App web em Next.js 15 com export estatico.
- Monorepo com `apps/web`, `apps/api` e `packages/shared`.
- Deploy automatico para GitHub Pages via GitHub Actions.
- Build validado com rotas estaticas e `generateStaticParams` em rotas dinamicas.
- Dados mock suficientes para demonstracao executiva.

## 10. Proximas entregas recomendadas

1. Criar rota `/parcerias` com jornada legal, calculadora fiscal e gerador de contrato.
2. Adicionar workflow de documentos obrigatorios por mecanismo legal.
3. Criar pacote de auditoria exportavel por projeto.
4. Adicionar persistencia real com PostgreSQL/Prisma.
5. Integrar assinatura digital e armazenamento de documentos.
6. Evoluir API NestJS para substituir mock local.
