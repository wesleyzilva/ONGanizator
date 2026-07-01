# ONGanizator - Overview da Plataforma

## 1. Visao

ONGanizator e uma plataforma de governanca, captacao e monitoramento auditavel para ONGs, fundacoes e projetos sociais. A proposta e ajudar uma operacao pequena, com poucos usuarios e baixo volume de requisicoes, a funcionar com clareza, rastreabilidade e confianca para quem executa e para quem financia.

O produto deve funcionar como um ambiente white-label que uma ONG ou rede parceira possa usar como se fosse seu, mantendo a administracao da plataforma, a captacao profissional, a contabilidade e a auditoria em uma mesma trilha.

## 2. Tese

O valor central nao esta em escala tecnica de alto volume. O valor esta em coordenar agentes que dependem uns dos outros:

- a ONG precisa organizar cadastro, documentos, projetos, metas e evidencias;
- o advogado precisa prospectar investidores, empresas e fundacoes, estruturar a relacao e acompanhar riscos;
- o contador precisa enxergar valores intermediarios, comprovantes, receitas, despesas e saldos;
- o investidor ou fundacao precisa decidir com seguranca e acompanhar o que foi entregue;
- o administrador da plataforma precisa garantir acesso, configuracao, auditoria e consistencia;
- o projeto precisa ser a unidade auditavel que conecta objetivo, KRs, orcamento, entregas e relatorio anual.

## 3. Problema

ONGs pequenas normalmente nao tem:

- sistema de gestao de projetos auditavel;
- captacao ativa e estruturada;
- padrao para evidencias ao longo do tempo;
- clareza sobre obricoes legais, contabeis e fiscais;
- historico confiavel para mostrar ao investidor o que foi prometido, executado e comprovado.

Investidores, empresas e fundacoes, por outro lado, precisam de:

- pipeline confiavel de projetos;
- comparabilidade entre ONGs;
- analise de risco reputacional;
- transparencia financeira;
- relatorio anual com impacto, evidencias e prestacao de contas.

## 4. Stakeholders da plataforma

| Agente | Papel principal | Resultado esperado |
|---|---|---|
| Advogado | Captacao, prospeccao, estruturacao juridica e relacao com financiadores | Pipeline de oportunidades e parcerias juridicamente organizadas |
| Contador | Validacao financeira, lancamentos, comprovantes e saldos | Prestacao de contas consistente e auditavel |
| ONG | Dono institucional da causa e da execucao | Cadastro completo, projetos vivos e evidencias reais |
| Projeto | Unidade operacional auditavel | Objetivos, KRs, orcamento, status, entregas e relatorio anual |
| Investidor | Financiador com mandato de impacto | Decisao baseada em risco, tese, ticket, ODS e execucao |
| Fundacao/Instituto | Financiador ou parceiro institucional | Apoio recorrente, editais, grants e acompanhamento de resultados |
| Administrador da plataforma | Governanca do ambiente, acessos e parametrizacao white-label | Plataforma consistente, segura e configuravel |

Detalhamento em [Stakeholders-Agentes.md](Stakeholders-Agentes.md).

## 5. Jornada principal do MVP mock

1. Advogado cadastra uma ONG ou convida uma ONG existente.
2. Advogado libera acesso para a ONG.
3. ONG atualiza cadastro, documentos e informacoes institucionais.
4. ONG cadastra um projeto com objetivo, KRs, orcamento, cronograma e ODS.
5. Projeto nasce sem selo e entra em avaliacao.
6. Advogado aprova elegibilidade inicial e encaminha pendencias quando necessario.
7. Contador valida estrutura financeira e acompanha valores intermediarios.
8. Advogado prospecta investidor, empresa ou fundacao e associa oportunidade ao projeto.
9. Financiador avalia risco, tese de impacto, documentos e contrapartidas.
10. Projeto recebe aporte, executa marcos e registra evidencias.
11. Plataforma gera prestacao de contas periodica e relatorio anual.

Fluxo detalhado em [Jornada-Auditavel.md](Jornada-Auditavel.md).

## 6. Gamificacao por selos

Os selos representam maturidade auditavel do projeto e da ONG, nao apenas pontuacao visual.

| Selo | Condicao minima no mock | Valor para a jornada |
|---|---|---|
| Bronze | ONG cadastrada, curso de imersao concluido, projeto cadastrado e aprovado pelo advogado | Prontidao inicial para prospeccao |
| Prata | Tudo do Bronze, documentos revisados, KRs completos, orcamento validado e curso complementar concluido | Projeto pronto para abordagem ativa de financiadores |
| Ouro | Tudo do Prata, primeira entrega auditavel registrada, evidencias aprovadas e lancamentos conciliados | Projeto com capacidade comprovada de execucao |

O mock precisa ter pelo menos um projeto em cada selo para demonstracao.

## 7. Prospecao e captacao

A captacao deve ser vista como uma esteira de relacionamento conduzida pelo advogado, com apoio do contador e da ONG.

| Etapa | Responsavel | Saida auditavel |
|---|---|---|
| Identificar financiador | Advogado | Lead com tipo, tese, ticket e potencial |
| Associar ONG/projeto | Advogado | Hipotese de match documentada |
| Validar capacidade financeira | Contador | Parecer financeiro simplificado |
| Preparar proposta | Advogado + ONG | Proposta com objetivo, KRs, orcamento e contrapartidas |
| Negociar e aprovar | Advogado + Financiador | Termo, contrato ou aceite |
| Executar e prestar contas | ONG + Contador | Evidencias, despesas e relatorios |

O kanban de prospeccao deve iniciar com status: `Backlog`, `Prospeccao`, `Em andamento`, `Finalizado`. Cada card pode ter semaforo `Verde`, `Amarelo` ou `Vermelho`.

## 8. Modulos do produto

| Modulo | Objetivo | Estado na demo |
|---|---|---|
| Login e perfis | Entrar como stakeholder mock | Existente, precisa alinhar personas novas |
| Organizacoes | Cadastro e governanca da ONG | Existente |
| Projetos | Objetivos, KRs, orcamento, cronograma e evidencias | Existente, precisa reforcar OKR e auditoria |
| CRM | Prospecao de investidores, empresas e fundacoes | Existente, precisa virar kanban principal do advogado |
| Investidores/Fundacoes | Mandato, ticket, ODS, restricoes e historico | Existente, precisa separar fundacao/instituto |
| Contabilidade | Entradas, despesas, DRE, comprovantes e pendencias | Existente |
| Risco | Reputacao, compliance e documentos | Existente |
| Monitoramento | Marcos, evidencias, timeline e prestacao de contas | Existente |
| Impacto | ODS, ESG e relatorios consolidados | Existente |
| White-label | Identidade visual por ONG/rede | Planejado |
| Relatorio anual | Consolidado de entrega fisica, financeira e impacto | Planejado como fluxo central |

## 9. Metricas de produto

| Metrica | Por que importa |
|---|---|
| % de cadastro completo | Mede prontidao institucional da ONG |
| % de documentos validados | Reduz risco juridico e reputacional |
| Score de maturidade | Ajuda a comparar ONGs sem simplificar demais |
| Score de match | Prioriza financiadores e projetos com melhor alinhamento |
| % de KRs com evidencia | Mede qualidade da execucao auditavel |
| % de orcamento executado | Mostra uso do recurso e saldo |
| Pendencias contabeis abertas | Ajuda contador e ONG a manter prestacao de contas em dia |
| Tempo de prospeccao ate aporte | Mede eficiencia da captacao |
| Relatorios anuais entregues | Mede fechamento da promessa feita ao financiador |

## 10. ODS no produto

ODS significa Objetivos de Desenvolvimento Sustentavel. No produto, ODS deve ser usado como linguagem de classificacao e comunicacao de impacto, nao como enfeite.

Cada projeto deve ter:

- ODS principal;
- ODS secundarios opcionais;
- justificativa simples de aderencia;
- indicadores relacionados;
- evidencias ligadas aos KRs.

## 11. Norte de implementacao

Antes de criar novas telas ou campos, validar se o dado ja existe em organizacao, projeto, investidor, relatorio, evidencia, lancamento contabil ou evento de auditoria. A arquitetura deve privilegiar reaproveitamento e eventos auditaveis em vez de crescer tabelas e campos sem criterio.
