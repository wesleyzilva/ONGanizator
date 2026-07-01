<<<<<<< HEAD
# Deprecated — não usar

Este arquivo é legado. As informações principais foram distribuídas para os documentos ativos:

- `productBacklog/vision.md`
- `productBacklog/roadmap.md`
- `productBacklog/backlog.md`
- `productBacklog/raid-log.md`

Use somente os arquivos acima para desenvolvimento AI-first.

---

Em uma arquitetura
Frontend React
Facade Java que conecta com
API´s Java por domínimos de capabilities para persistência em bancos.
=======
# RAID Log - ONGanizator
>>>>>>> bfbf6f688b78fd8d347da3df3afd1b96dad7c03e

## Contexto atual

Estamos reorganizando o projeto antes de iniciar a execucao local. A documentacao passa a refletir que ONGanizator nao e uma plataforma de alto volume, mas um sistema auditavel para coordenar poucos stakeholders com grande responsabilidade na jornada de captacao e prestacao de contas.

Referencias de mercado agora consideradas: Portal do Incentivo, Benevity e GlobalGiving. Analise consolidada em [Referencias-Mercado.md](../Referencias-Mercado.md) e diagnostico do app atual em [Analise-Projeto-Atual.md](../Analise-Projeto-Atual.md).

## Decisoes

| ID | Decisao | Motivo | Status |
|---|---|---|---|
| D1 | Priorizar jornada auditavel sobre escala tecnica | Baixo volume de usuarios e requests | Decidido |
| D2 | Tratar advogado como agente principal de prospeccao | Ele cadastra ONG, prospecta financiadores e estrutura relacao | Decidido |
| D3 | Tratar contador como agente de validacao financeira | Valores intermediarios e comprovantes precisam de visao propria | Decidido |
| D4 | Tratar projeto como unidade auditavel | Projeto conecta objetivo, KRs, orcamento, evidencias e relatorio anual | Decidido |
| D5 | Manter mock funcional para webinar antes de persistencia real | Objetivo e coletar feedback de ONGs | Decidido |
| D6 | Evitar criar novos campos sem reaproveitar entidades existentes | Reduz complexidade e retrabalho | Decidido |
| D7 | Criar documentacao legal separada, sem dumps colados | Facilita evolucao e reduz duplicidade | Decidido |
| D8 | Criar squad de agentes para desenvolvimento e suporte | Evita backlog solto e cria responsabilidade por produto, UX, frontend, backend, QA, seguranca e suporte | Decidido |
| D9 | Usar Portal do Incentivo como referencia de motor fiscal, nao como dump de conteudo | O produto precisa de workflow, calculadora e checklist | Decidido |
| D10 | Usar Benevity e GlobalGiving como benchmark de confianca, nao como escopo enterprise/global | MVP deve ficar Brasil-first e baixo volume | Decidido |
| D11 | Criar backlog canonico do PO separado do RAID log | O RAID registra decisoes/riscos; o PO backlog orienta desenvolvimento | Decidido |
| D12 | Arquivar materiais duplicados em `docs/backup` | Reduz ruido para agentes e preserva contexto historico | Decidido |

## Assumptions

| ID | Assumption | Como validar |
|---|---|---|
| A1 | ONGs aceitam entrar em um fluxo guiado de maturidade e selos | Testar no webinar com jornada Bronze/Prata/Ouro |
| A2 | Advogado consegue operar a prospeccao dentro de um kanban simples | Demonstrar CRM com leads, status e semaforo |
| A3 | Investidores e fundacoes valorizam pacote de auditoria e relatorio anual | Mostrar projeto com evidencias, financeiro e impacto |
| A4 | Contador precisa de tela propria, nao apenas campos dentro do projeto | Validar com fluxo de lancamentos e comprovantes |
| A5 | White-label aumenta aderencia da ONG | Demonstrar identidade visual configuravel em fase posterior |

## Risks

| ID | Risco | Impacto | Mitigacao |
|---|---|---|---|
| R1 | Escopo crescer para muitas frentes ao mesmo tempo | MVP perde foco | Manter jornada principal como criterio de corte |
| R2 | Regras legais serem interpretadas como parecer automatico | Risco juridico | Usar disclaimers e revisao por advogado |
| R3 | Dados mock parecerem artificiais | Demo perde credibilidade | Usar poucas ONGs/projetos realistas e com estados diferentes |
| R4 | Selos virarem enfeite visual | Perde valor auditavel | Cada selo deve exigir evidencia e evento |
| R5 | Relatorio anual virar tela manual | Perde rastreabilidade | Gerar relatorio a partir de eventos, KRs, evidencias e financeiro |

## Issues

| ID | Issue | Acao |
|---|---|---|
| I1 | Documentos estavam duplicando visao, benchmark e material legal | Consolidado em docs separados |
| I2 | RAID log continha textos juridicos longos colados | Substituido por backlog vivo e linkado ao guia legal |
| I3 | Arquivos de cidades tinham dumps repetitivos de fonte externa | Reduzir para listas curadas de prospeccao |
| I4 | Personas novas ainda nao estao necessariamente alinhadas no mock | Ajustar apos rodar app local |
| I5 | Paginas para ONGs e para Advogados/Contadores precisam ser definidas | Entrar no backlog funcional |
| I6 | `mockAuth.ts` nao separa contador e fundacao | Criar novos perfis e perspectivas no M1 |
| I7 | `packages/shared` usa papeis antigos diferentes do mock atual | Alinhar tipos no M1/M2 |
| I8 | CRM atual e de doadores, nao kanban de prospeccao do advogado | Transformar em oportunidade/prospecao no M3 |
| I9 | Leis de incentivo existem como dados, mas nao conduzem elegibilidade | Evoluir para calculadora/checklist no M4 |
| I10 | Raiz do repositorio tinha pitch, benchmark e dump bruto competindo com docs canonicos | Movido para `docs/backup` ou consolidado em docs canonicos |

## Dependencies

| ID | Dependencia | Observacao |
|---|---|---|
| DEP1 | Validacao com ONGs no webinar | Principal fonte de feedback de produto |
| DEP2 | Revisao juridica/contabil | Necessaria antes de usar regras legais em producao |
| DEP3 | Dados mock revisados | Precisam refletir agentes, selos, evidencias e relatorio anual |
| DEP4 | Rodar app local | Validado em 2026-07-01: web 3000 e API 3001 ativas na copia local |
| DEP5 | Validar build estatico GitHub Pages | Validado em 2026-07-01: `apps/web/out` gerado com sucesso |

## Backlog reestruturado por marco

### M0 - Squad, referencias e governanca do backlog

| Prioridade | Item | Resultado esperado | Status |
|---|---|---|---|
| P0 | Criar squad de agentes | Agentes de produto, legal, UX, frontend, backend, QA, seguranca e suporte documentados | Concluido |
| P0 | Criar agentes VS Code | `.github/agents/*.agent.md` disponiveis para desenvolvimento e suporte | Concluido |
| P0 | Consolidar referencias de mercado | Portal do Incentivo, Benevity e GlobalGiving traduzidos em decisoes | Concluido |
| P0 | Diagnosticar projeto atual | Gaps entre mock atual e plataforma desejada documentados | Concluido |
| P0 | Criar backlog do PO | `productBacklog/poBacklog.md` criado com historias, aceite e validacao | Concluido |
| P0 | Arquivar docs duplicados | Materiais nao canonicos movidos para `docs/backup` | Concluido |

### M1 - Perfis, permissoes e navegacao

| Prioridade | Item | Resultado esperado | Status |
|---|---|---|---|
| P0 | Separar perfis mock | Advogado, contador, ONG, investidor, fundacao e admin no login | A fazer |
| P0 | Separar perspectivas no menu | Contador e fundacao deixam de compartilhar visao com advogado/investidor | A fazer |
| P0 | Alinhar tipos compartilhados | `packages/shared` reflete roles e entidades desejadas | A fazer |
| P1 | Registrar matriz de permissoes na UI | Cada tela deixa claro quem pode editar, aprovar ou visualizar | A fazer |

### M2 - Projeto auditavel e selos

| Prioridade | Item | Resultado esperado | Status |
|---|---|---|---|
| P0 | Projeto com objetivo e KRs | Cadastro/detalhe mostra objetivo, KRs, indicadores e responsaveis | A fazer |
| P0 | Selos Bronze, Prata e Ouro | Um projeto mockado por selo, com criterio e evidencia | A fazer |
| P0 | Eventos de auditoria mockados | Alteracoes, aprovacoes, evidencias e relatorios aparecem na timeline | A fazer |
| P0 | Relatorio anual | Fechamento anual gerado a partir de KRs, evidencias e financeiro | A fazer |

### M3 - Captacao conduzida pelo advogado

| Prioridade | Item | Resultado esperado | Status |
|---|---|---|---|
| P0 | CRM vira kanban de prospeccao | Backlog, Prospeccao, Em andamento, Finalizado, semaforo e dono | A fazer |
| P0 | Associar oportunidade a projeto | Advogado conecta financiador/fundacao a projeto e registra hipotese de match | A fazer |
| P0 | Proposta para patrocinador | Gerar apresentacao simples com projeto, KRs, orcamento e contrapartidas | A fazer |
| P1 | Pagina para Advogados e Contadores | Explicar fluxo profissional e valor operacional | A fazer |

### M4 - Incentivos, compliance e contabilidade

| Prioridade | Item | Resultado esperado | Status |
|---|---|---|---|
| P0 | Calculadora de incentivo | Limite estimado por lei, tipo de financiador e imposto informado | A fazer |
| P0 | Checklist por mecanismo | Rouanet, Esporte, FIA, Idoso, PRONON, PRONAS, Reciclagem e Audiovisual | A fazer |
| P0 | Parecer advogado/contador | Validacao juridica e contabil aparece no projeto/oportunidade | A fazer |
| P1 | Pacote de auditoria | Exportar ou visualizar documentos, eventos, evidencias e financeiro | A fazer |

### M5 - Webinar e validacao

| Prioridade | Item | Resultado esperado | Status |
|---|---|---|---|
| P0 | Dados mock realistas | ONGs/projetos em estados Bronze, Prata e Ouro | A fazer |
| P0 | Roteiro de demonstracao | Caminho por perfil: advogado, ONG, contador, fundacao/investidor | A fazer |
| P0 | Rodar app local e revisar telas | App local rodando; revisao de telas segue para ajustes do M1 | Em andamento |
| P1 | White-label basico | Nome, logo e cores configuraveis para demo | A fazer |

## Validacoes executadas

| Data | Validacao | Resultado |
|---|---|---|
| 2026-07-01 | Build estatico web | `npm run build --workspace=apps/web` concluiu com sucesso e exportou 72 paginas |
| 2026-07-01 | Ambiente local | `npm run dev` subiu Next.js em `http://localhost:3000/ONGanizator` e NestJS em `http://localhost:3001/docs` |

## Criterios para o webinar

1. Conseguir entrar com cada perfil principal.
2. Mostrar uma ONG com cadastro incompleto e outra mais madura.
3. Mostrar tres projetos: Bronze, Prata e Ouro.
4. Mostrar advogado criando oportunidade e associando a projeto.
5. Mostrar contador validando orcamento/comprovantes.
6. Mostrar investidor ou fundacao acompanhando evidencias.
7. Mostrar relatorio anual como fechamento da jornada.

## Referencias internas

- [Overview.md](../Overview.md)
- [Analise-Projeto-Atual.md](../Analise-Projeto-Atual.md)
- [Referencias-Mercado.md](../Referencias-Mercado.md)
- [Stakeholders-Agentes.md](../Stakeholders-Agentes.md)
- [Squad-Agentes.md](../Squad-Agentes.md)
- [Jornada-Auditavel.md](../Jornada-Auditavel.md)
- [Legal-Captacao-ONGs.md](../Legal-Captacao-ONGs.md)
- [Arquitetura-MVP-Tradeoffs.md](../Arquitetura-MVP-Tradeoffs.md)
- [poBacklog.md](poBacklog.md)
- [Backup de docs](../docs/backup/README.md)

<<<<<<< HEAD
Constituição Formal e requisitos essenciais
Para que possam captar recursos formalmente, entidades do Terceiro Setor, como associações e fundações, devem ser legalmente constituídas como pessoas jurídicas sem fins lucrativos, o que implica que todo recurso captado deve ser aplicado integralmente em sua finalidade social.

A Lei nº 13.019/2014 (Marco Regulatório das Organizações da Sociedade Civil) define organização da sociedade civil como “entidade privada sem fins lucrativos que não distribua entre os seus sócios ou associados, , conselheiros, diretores, empregados, doadores ou terceiros eventuais resultados, sobras, excedentes operacionais, brutos ou líquidos (…)”, entendendo excedentes operacionais como o valor que sobra quando a organização arrecada mais do que gasta em suas atividades.

Nas organizações sem fins lucrativos, esse valor é aplicado integralmente ao objeto social (imediatamente ou por meio de fundo patrimonial).

Vedação à distribuição de excedentes operacionais
A regra geral é de que, associações e fundações podem arrecadar recursos, desde que não repartam lucros entre dirigentes ou associados, devendo reinvestir todo o valor em suas atividades, como descrito no MROSC e na Lei 9.790/1999.

Destinação do patrimônio em caso de dissolução
No estatuto social (ato constitutivo da organização), a legislação exige cláusulas específicas: além de definir denominação, fins e sede, deve prever “as fontes de recursos para sua manutenção” ( Código Civil) e condições de dissolução, incluindo destino do patrimônio remanescente.

Essa previsão é importante porque, quando há captação de recursos por associações e fundações, a entidade precisa prever o destino do seu patrimônio em caso de dissolução. O patrimônio líquido remanescente, por exemplo, pode ser transferido a outra entidade congênere (com os mesmos fins) ou instituição pública. Portanto, ser claro sobre as fontes de financiamento e a destinação dos bens no estatuto é requisito legal para captar recursos.

Modalidades de captação de recursos por associações e fundações
1. Doações de associados

A captação de recursos por associações e fundações pode ocorrer pelas mais diversas modalidades. A forma mais básica são doações e contribuições, prestadas por pessoas físicas e jurídicas em prol da entidade. Não há restrição legal geral a doações; contudo, pessoas físicas ou empresas que doam podem obter benefícios fiscais em certas condições. Por exemplo, leis federais de incentivo permitem que indivíduos destinem até 6% de seu Imposto de Renda e empresas até 4% (base de cálculo do IRPJ) ao financiamento de projetos culturais aprovados pelo Ministério da Cultura.

2. Doações com dedução fiscal

Doações com dedução de impostos são uma importante fonte para as organizações e o doador que colabora com a ONG recebe abatimento fiscal conforme a lei. Projetos esportivos elegíveis podem receber patrocínio via dedução fiscal pelo programa do setor (Lei nº 11.438/2006), e há leis semelhantes de incentivo para projetos de saúde, educação e pessoas com deficiência.

Mesmo quando não há incentivo fiscal específico, doações simples (sem benefício tributário) são lícitas e incentivadas pela legislação (não há exigência de autorização prévia para aceitar doações privadas, apenas a necessidade de transparência contábil e emissão de recibos quando exigido).

3. Contribuições recorrentes de associados

Outra fonte comum são as contribuições dos próprios associados. Associações frequentemente cobram mensalidades, anuidades ou taxas de filiação de seus integrantes. Essas receitas internas precisam estar previstas no estatuto e serem aplicadas nas atividades da entidade.

4. Parcerias públicas e convênios

Parcerias públicas e convênios governamentais são caminhos importantes para o financiamento do Terceiro Setor. Desde a Lei nº 13.019/2014, a Administração Pública (União, estados, municípios e autarquias) só pode transferir recursos a ONGs mediante instrumentos formais, como termo de colaboração, termo de fomento ou chamamento público.

Está com dúvidas sobre seus direitos
Receba orientações iniciais e entenda o que fazer no seu caso.
Solicitar orientação
Existem alguns requisitos para receber recursos públicos:

Não distribuir lucros: A entidade deve atender aos requisitos da lei, tais como ter objetivos sociais compatíveis e não distribuir lucros.
Governança sólida, anticorrupção e transparência: Convênios e parcerias exigem transparência (planos de trabalho, prestação de contas, controle social) e impedem a participação de ONGs com dirigentes inelegíveis por atos dolosos ou improbidade.
5. Editais e chamadas públicas

Editais e chamadas públicas (federais ou estaduais) também são formas muito utilizadas. Órgãos governamentais lançam chamadas de projetos sociais ou culturais (com recursos públicos), para os quais associações e fundações elegíveis podem se inscrever. A seleção é feita via critérios objetivos e os contratos/subvenções são firmados com cláusulas que garantem fiscalização e prestação de contas oficiais.

6. Eventos beneficentes e campanhas

Eventos beneficentes e campanhas (como jantares, bazares, rifas, leilões) também são rotas tradicionais de arrecadação. Entretanto, há regras específicas para que esses eventos possam ser realizados, sendo necessário, inclusive, autorização do Ministério da Fazenda, vinculação a resultados da Loteria Federal, entre outros pontos.

A falta de registro e autorização para esse tipo de arrecadação pode acarretar sanções. Por isso, antes de promover rifas ou sorteios beneficentes é imprescindível verificar a legislação federal e estadual aplicável, além de cumprir obrigações tributárias e de registro.

7. Crowdfunding e vaquinha digitais

Campanhas digitais de arrecadação (crowdfunding) têm crescido e não exigem autorização prévia, embora devam obedecer a normas de consumo e privacidade como previsto pela Lei Geral de Proteçâo de Dados (LGPD). Nada impede que uma ONG lance uma “vaquinha online”, por exemplo, desde que oriente corretamente os doadores sobre o uso dos recursos.

8. Doação de empresas

Empresas podem repassar recursos a ONGs, com ou sem benefício fiscal, conforme estratégia de responsabilidade social ou estratégia de marketing. Os canais privados de captação de recursos incluem patrocínio corporativo e apoio de fundações empresariais (investimento social privado).

A legislação brasileira não exige autorização para esse tipo de doação, mas recomenda boas práticas (contratos claros e transparência). Em alguns casos, se a doação for enquadrada em incentivo fiscal (patrocínio cultural, esportivo, da pessoa deficiente, entre outros), aplica-se a legislação pertinente (como tratamos acima).

9. Prestação de serviços

Atividades próprias de geração de renda são legalmente permitidas. Isso significa que associações e fundações podem comercializar produtos, prestar serviços sociais (como cursos e oficinas) ou cobrar por eventos, desde que esses recursos sejam reinvestidos no objeto social. Não se trata de atividade econômica vedada, mas toda renda obtida deve ser informada contabilmente e direcionada à causa. Estatuto e regulamentos internos podem prever unidades de geração de renda (por exemplo, uma loja de bazar ou editora social).

Para manter a natureza não-lucrativa e receber benefícios fiscais (isenção de tributos, por exemplo), muitas entidades cuidam para que suas atividades econômicas sejam acessórias ao fim social – isso é exigido, por exemplo, para manter imunidades tributárias previstas na Constituição e reguladas em leis (como a isenção de Imposto de Renda de entidades filantrópicas, Lei nº 12.101/2009).

Requisitos legais principais para uma ONG poder captar recursos
Constituição jurídica regular: ser registrada no Cartório de Pessoas Jurídicas com estatuto aprovado conforme o Código Civil (associação) ou escritura pública de constituição com dotação patrimonial (fundação). Sem o registro, a entidade não existe legalmente, ficando inviável qualquer captação de recursos formal.
Estatuto social completo: deve conter, sob pena de nulidade, cláusulas obrigatórias, como fins, sede, regras de admissão/exclusão de sócios, órgãos de gestão, prestação de contas e, fundamentalmente, as fontes de recursos para sua manutenção. Isso permite que a entidade justifique juridicamente seus mecanismos de captação de recursos.
Respeito à não lucratividade: todos os recursos devem ser aplicados no objeto social. A lei proíbe destinar lucros a dirigentes ou sócios (vedação expressa em leis do Terceiro Setor). O estatuto precisa prever, em caso de dissolução, que o patrimônio restante seja doado a outra entidade sem fins lucrativos ou ao setor público. Esse cuidado assegura que eventuais doações de bens (como venda de prédios e equipamentos) permaneçam no Terceiro Setor.
Regularidade fiscal e trabalhista: ao captar recursos, a ONG continua sujeita às obrigações de impostos (ISS sobre serviços próprios, por exemplo) e de contribuição previdenciária. Para receber incentivos fiscais (Fundo da Infância, Esporte, Cultura), é preciso estar em dia com obrigações tributárias e previdenciárias. Alguns editais públicos exigem certidões negativas de débito (federal, estaduais e municipais) e prova de inscrição em cadastros sociais (como o Cadastro Nacional de Entidades de Assistência Social).
Certificações específicas: embora não obrigatórias para captar recursos privados, diversas habilitações agregam credibilidade. Por exemplo, o CEBAS (Certificado de Entidade Beneficente de Assistência Social) é exigido para imunidades e parcerias na área social. O título de OSCIP (Lei 9.790/1999) pode ser interessante para acessar parcerias estaduais/federais. Se desejar realizar rifas, precisa de declaração de utilidade pública municipal ou estadual e autorização especial (Lei 5.768/71).
Prestações de contas e transparência: a legislação (especialmente em parcerias públicas) impõe rigor na destinação dos recursos. Em convênios ou termos de fomento, a ONG deve prestar contas detalhadas, comprovar aplicação e permitir auditorias. Assim, embora não seja lei específica para recursos privados, a boa governança (publicação de relatórios, demonstrações financeiras regulares) tornou-se um padrão exigido por doadores e certificações.
Proteção de dados e ética: com a Lei Geral de Proteçâo de Dados (13.709/2018), entidades que coletam informações de doadores devem cumprir regras de privacidade. O cumprimento da LGPD é obrigatório na comunicação de campanhas ou ao manter mailing de associados. Além disso, não podem usar publicidade enganosa ou captadores ilegítimos.
Estruturação jurídica para captação de recursos
Em síntese, uma ONG brasileira tem à disposição diversos mecanismos previstos em lei para captar recursos, mas deve cumprir requisitos legais de registro, estrutura estatutária e transparência. A legislação atual autoriza e até estimula a captação por meio de incentivos fiscais (como os da Lei Rouanet), parcerias governamentais regulamentadas e atividades beneficentes autorizadas .

O ponto central é manter sempre a conformidade estatutária e fiscal: assegurar que o ato constitutivo inclua fontes de receita e destinação do patrimônio, além de seguir rigorosamente as normas de aplicação dos recursos obtidos.

A VRP Advocacia e Consultoria atua na estruturação jurídica para captação de recursos por associações e fundações, orientando desde a elaboração do estatuto social até a prestação de contas. Entre em contato com a nossa equipe e com a empresa e passe a operar com segurança, transparência e sustentabilidade.

Informações relacionadas
As cláusulas pacta sunt servanda e rebus sic stantibus e suas consequências jurídicas
ArtigoData de publicação: 08/06/2018Geraldo Lopes
Geraldo Evangelista Lopes Resumo: A apresentação deste artigo visa demonstrar a finalidade e os cuidados na utilização das cláusulas pacta sunt servanda e rebus sic stantibus , a influência que os
Modelo De Termo De Criacão Do Instituto Tal
ModeloData de publicação: 16/11/2019Resumo Legal Site
TERMO DE CRIACÃO DO INSTITUTO TAL TITULO I DA DENOMINACÃO, SEDE, FINALIDADE E COMPETÊNCIA Art. 1º - O TAL, doravante denominado TAL, pessoa jurídica de direito privado, constituída na forma de
Envie as suas dúvidas
Receba orientações iniciais e entenda o que fazer no seu caso.

Descreva o que aconteceu e o que você gostaria de saber...
Solicitar orientação

Comentários (0)

Confira os comentários realizados por outras pessoas sobre esse artigo.

Valente Reis Pessali Sociedade de Advogados


Detalhes
Data de publicação
04/12/2025
Sobre o autor
Consultoria e assessoria jurídica
Publicações
510
Seguidores
124
Tipo de documento
Artigo
Visualizações
0
De onde vêm as informações do Jusbrasil?

Este conteúdo foi produzido e/ou disponibilizado por pessoas da Comunidade, que são responsáveis pelas respectivas opiniões. O Jusbrasil realiza a moderação do conteúdo de nossa Comunidade. Mesmo assim, caso entenda que o conteúdo deste artigo viole as Regras de Publicação, clique na opção "reportar" que o nosso time irá avaliar o relato e tomar as medidas cabíveis, se necessário. Conheça nossos Termos de uso e Regras de Publicação.

Para todas as pessoas
Consulta Processual•Acompanhe seu CPF•Conheça seus direitos•Artigos•Notícias
Para profissionais
Jus IA•Jurisprudência•Doutrina•Diários Oficiais•Peças Processuais•Modelos•Legislação
Para empresas
Jusbrasil Soluções•Departamentos jurídicos•Empresas•Escritórios de advocacia•API Jusbrasil
Jusbrasil
Sobre nós•Blog Justech•Planos•Ajuda•Newsletter•Termos de Uso•Política de Privacidade•Central de Privacidade•Denúncias
A sua principal fonte de informação jurídica - © 2026 Jusbrasil. Todos os direitos reservados.

ARTIGO

Formas de captação de recursos por associações e fundações no Brasil
Receba uma orientação

Todos
Pesquisar no Jusbrasil

Cadastre-se
Entrar
Home
Consulta processual
Jurisprudência
Doutrina
Artigos
Notícias
Diários
Peças Processuais
Modelos
Legislação
Diretório de Advogados

LEI Nº 5.768, DE 20 DE DEZEMBRO DE 1971
Abre a legislação sôbre distribuição gratuita de prêmios, mediante sorteio, vale-brinde ou concurso, a título de propaganda, estabelece normas de proteção à poupança popular, e dá outras providências


Sumário

Vide Lei nº 11.768, de 2008

O PRESIDENTE DA REPÚBLICA, faço saber que o CONGRESSO NACIONAL decreta e eu sanciono a seguinte Lei:

CAPÍTULO I
Da Distribuição Gratuita de Prêmios

Art 1º A distribuição gratuita de prêmios a título de propaganda quando efetuada mediante sorteio, vale-brinde, concurso ou operação assemelhada, dependerá de prévia autorização do Ministério da Fazenda, nos têrmos desta lei e de seu regulamento.

§ 1º A autorização sòmente poderá ser concedida a pessoas jurídicas que exerçam atividade comercial, industrial ou de compra e venda de bens imóveis comprovadamente quites com os impostos federais, estaduais e municipais, bem como com as contribuições da Previdência Social, a título precário e por prazo determinado, fixado em regulamento, renovável a critério da autoridade.

§ 2º O valor máximo dos prêmios será fixado em razão da receita operacional da emprêsa ou da natureza de sua atividade econômica, de forma a não desvirtuar a operação de compra e venda.

§ 3º É proibida a distribuição ou conversão dos prêmios em dinheiro.

§ 4º Obedecerão aos resultados da extração da Loteria Federal, os sorteios previstos neste artigo.

§ 4º Os sorteios previstos neste artigo obedecerão aos resultados da extração das Loterias Federais. (Redação dada pela Lei nº 14.027, de 2020)

§ 5º O Ministério da Fazenda, no caso de distribuição de prêmios a título de propaganda, mediante sorteio, poderá autorizar que até o limite de 30% (trinta por cento) dos prêmios a distribuir por essa modalidade seja excluído da obrigatoriedade prevista no parágrafo anterior, desde que o sorteio se processe exclusivamente em programas públicos nos auditórios das estações de rádio ou de televisão.

§ 6º Quando não fôr renovada a autorização de que trata êste artigo, a emprêsa que, na forma desta lei, venha distribuindo, gratuitamente, prêmios vinculados à pontualidade de seus prestamistas nas operações a que se referem os itens II e IV do art. 7º continuará a distribuí-los exclusivamente com relação aos contratos celebrados até a data do despacho denegatório.

§ 7º O ato de autorização poderá impor limitação, por número de inscrição no Cadastro de Pessoas Físicas (CPF), da participação de consumidores em cada um dos sorteios, vales-brindes, concursos ou operações assemelhadas. (Incluído pela Lei nº 14.790, de 2023)

§ 1º-A. Também poderão ser autorizadas as redes nacionais de televisão aberta, assim reconhecidas pela Agência Nacional de Telecomunicações - Anatel, que prestem serviços de entretenimento ao público por meio de aplicativos, de plataformas digitais ou de meios similares, na forma definida em regulamento, observado o disposto no § 1º. (Incluído pela Medida Provisória nº 923, de 2020)

§ 1º-B. Para fins do disposto no § 1º-A, será considerada rede nacional de televisão aberta o conjunto de estações geradoras e respectivos sistemas de retransmissão de televisão com abrangência nacional que veiculem a mesma programação básica. (Incluído pela Medida Provisória nº 923, de 2020)

§ 1º-C. A autorização de que trata o § 1º-A poderá ser concedida isoladamente às redes nacionais de televisão aberta ou em conjunto com outras pessoas jurídicas do mesmo grupo dessas concessionárias, desde que constituídas sob as leis brasileiras e que estejam sob controle comum. (Incluído pela Medida Provisória nº 923, de 2020)

Art. 1º-A. Depende de prévia autorização a distribuição gratuita de prêmios mediante sorteio, vale-brinde, concurso ou operação assemelhada, realizada por concessionária ou permissionária de serviço de radiodifusão. (Incluído pela Lei nº 14.027, de 2020)

§ 1º A autorização referida no caput deste artigo poderá ser concedida isoladamente a concessionária ou permissionária de serviço de radiodifusão ou a pessoa jurídica constituída sob as leis brasileiras, do mesmo grupo dessas concessionárias ou permissionárias de serviço de radiodifusão. (Incluído pela Lei nº 14.027, de 2020)

§ 2º O ato de autorização deverá impor limitação, por Cadastro de Pessoas Físicas (CPF), de participação em sorteios, vales-brindes, concursos ou operações assemelhadas. (Incluído pela Lei nº 14.027, de 2020)

§ 3º A participação do interessado será precedida de cadastro, por meio de aplicativo, de programa de computador ou de outra plataforma digital, que contenha o CPF, e a empresa autorizada deverá assegurar o sigilo das informações prestadas, vedado o cadastro de menores de 18 (dezoito) anos. (Incluído pela Lei nº 14.027, de 2020)

§ 4º (VETADO). (Incluído pela Lei nº 14.027, de 2020)

§ 5º São vedadas: (Incluído pela Lei nº 14.027, de 2020)

I – a realização de operações que configurem jogo de azar ou bingo; (Incluído pela Lei nº 14.027, de 2020)

II – a distribuição ou conversão dos prêmios em dinheiro. (Incluído pela Lei nº 14.027, de 2020)

§ 6º (VETADO). (Incluído pela Lei nº 14.027, de 2020)

Art. 1º-B. Além das exigências previstas no art. 1º-A desta Lei, as concessionárias ou permissionárias de serviço de radiodifusão deverão estar devidamente licenciadas para execução do serviço, ou autorizadas a funcionar em caráter provisório ou precário. (Incluído pela Lei nº 14.027, de 2020)

§ 1º Em qualquer caso, a regularização do pagamento do preço público da outorga do serviço de radiodifusão, quando devido em decorrência de processo de licitação, poderá ser feita mediante parcelamento mensal pelo tempo previsto na concessão ou permissão, por solicitação do requerente, o que não inviabilizará o licenciamento da estação ou o funcionamento em caráter provisório ou precário. (Incluído pela Lei nº 14.027, de 2020)

§ 2º (VETADO). (Incluído pela Lei nº 14.027, de 2020)

§ 3º Os parcelamentos previstos para pagamento de preço público da outorga para execução de serviços de radiodifusão decorrentes de processo de licitação, de alteração de características técnicas e de migração de outorga do serviço de radiodifusão sonora de onda média para o serviço de radiodifusão sonora em frequência modulada independerão da apresentação de qualquer garantia, inclusive seguro-garantia, e terão a correção das suas prestações mensais pela aplicação exclusiva da taxa do Sistema Especial de Liquidação e de Custódia (Selic). (Incluído pela Lei nº 14.351, de 2022)

§ 4º A penalidade de mora será aplicada apenas em relação às parcelas que forem pagas em atraso, considerada a data prevista do referido parcelamento. (Incluído pela Lei nº 14.351, de 2022

§ 5º Salvo disposição em contrário no edital de licitação do serviço de radiodifusão comercial, a correção monetária do valor ofertado pela outorga pelo pagamento de seu preço público será realizada conforme o Índice Nacional de Preços ao Consumidor Amplo (IPCA), a partir da aprovação do ato de outorga pelo Congresso Nacional. (Incluído pela Lei nº 15.182, de 2025)

Art 2º Além da emprêsa autorizada, nenhuma outra pessoa natural ou jurídica poderá participar do resultado financeiro da promoção publicitária de que trata o artigo anterior, ainda que a título de recebimento de royalties, aluguéis de marcas, de nomes ou assemelhados.

Art. 2º Além da empresa autorizada, nenhuma outra pessoa natural ou jurídica poderá participar do resultado financeiro das operações de que tratam os arts. 1º e 1º-A desta Lei, ainda que a título de recebimento de royalties, de aluguéis de marcas e de nomes ou assemelhados. (Redação dada pela Lei nº 14.027, de 2020)

Art 3º Independe de autorização, não se lhes aplicando o disposto nos artigos anteriores:

I - a distribuição gratuita de prêmios mediante sorteio realizado diretamente por pessoa jurídica de direito público, nos limites de sua jurisdição, como meio auxiliar de fiscalização ou arrecadação de tributos de sua competência;

II - a distribuição gratuita de prêmios em razão do resultado de concurso exclusivamente cultural artístico, desportivo ou recreativo, não subordinado a qualquer modalidade de álea ou pagamento pelos concorrentes, nem vinculação dêstes ou dos contemplados à aquisição ou uso de qualquer bem, direito ou serviço.

Parágrafo único. O Ministério da Fazenda poderá autorizar a realização de propaganda comercial, com distribuição gratuita de prêmios vinculada a sorteio realizado nos têrmos do tem I dêste artigo, atendido, no que couber, o disposto no art. 1º e observada a exigência do art. 5º.

Art 4º Fora dos casos e condições previstos nesta lei ou em lei especial, nenhuma pessoa jurídica ou natural poderá distribuir ou prometer distribuir prêmios mediante sorteio, vale-brinde, concurso ou operação assemelhada.

Art. 4º Nenhuma pessoa física ou jurídica poderá distribuir ou prometer distribuir prêmios mediante sorteios, vale-brinde, concursos ou operações assemelhadas, fora dos casos e condições previstos nesta lei, exceto quando tais operações tiverem origem em sorteios organizados por instituições declaradas de utilidade pública em virtude de lei e que se dediquem exclusivamente a atividades filantrópicas, com fim de obter recursos adicionais necessários à manutenção ou custeio de obra social a que se dedicam. (Redação da pela Lei nº 5.864, de 12.12.72)

Art. 4º A distribuição de prêmios mediante sorteio, vale-brinde, concurso ou operação assemelhada realizada por organizações da sociedade civil, com o intuito de arrecadar recursos adicionais destinados à sua manutenção ou custeio, depende de prévia autorização. (Redação dada pela Lei nº 14.027, de 2020)

§ 1º Compete ao Ministério da Fazenda promover a regulamentação, a fiscalização e controle, das autorizações dadas em caráter excepcional nos termos deste artigo, que ficarão basicamente sujeitas às seguintes exigências: (Incluído pela Lei nº 5.864, de 12.12.72)

§ 1º Compete ao Ministério da Economia promover a regulamentação, a fiscalização e o controle das autorizações dadas nos termos deste artigo, que ficarão sujeitas às seguintes exigências: (Redação dada pela Lei nº 14.027, de 2020)

a) comprovação de que a requerente satisfaz as condições especificadas nesta lei, no que couber, inclusive quanto à perfeita regularidade de sua situação como pessoa jurídica de direito civil; (Incluído pela Lei nº 5.864, de 12.12.72)

a) comprovação de que a requerente satisfaz as condições especificadas nesta Lei e de que se enquadra nos termos da Lei nº 13.019, de 31 de julho de 2014; (Redação dada pela Lei nº 14.027, de 2020)

b) indicação precisa da destinação dos recursos a obter através da mencionada autorização; (Incluído pela Lei nº 5.864, de 12.12.72)

c) prova de que a propriedade dos bens a sortear se tenha originado de doação de terceiros, devidamente formalizada; (Incluído pela Lei nº 5.864, de 12.12.72)

d) realização de um único sorteio por ano, exclusivamente com base nos resultados das extrações da Loteria Federal somente admitida uma única transferência de data, por autorização do Ministério da Fazenda e por motivo de força maior. (Incluído pela Lei nº 5.864, de 12.12.72)

d) embasamento nos resultados da extração das Loterias Federais, admitidos outros meios caso o sorteio se processe exclusivamente em programas públicos nos auditórios das estações de rádio ou de televisão. (Redação dada pela Lei nº 14.027, de 2020)

§ 1º-A. Para realizar as operações de que trata esta Lei, as organizações da sociedade civil devem apresentar, entre seus objetivos sociais, pelo menos uma das seguintes finalidades: (Incluído pela Lei nº 14.027, de 2020)

I – promoção da assistência social; (Incluído pela Lei nº 14.027, de 2020)

II – promoção da cultura e defesa e conservação do patrimônio histórico e artístico; (Incluído pela Lei nº 14.027, de 2020)

III – promoção da educação; (Incluído pela Lei nº 14.027, de 2020)

IV – promoção da saúde; (Incluído pela Lei nº 14.027, de 2020)

V – promoção da segurança alimentar e nutricional; (Incluído pela Lei nº 14.027, de 2020)

VI – defesa, preservação e conservação do meio ambiente e promoção do desenvolvimento sustentável; (Incluído pela Lei nº 14.027, de 2020)

VII – promoção do voluntariado; (Incluído pela Lei nº 14.027, de 2020)

VIII – promoção do desenvolvimento econômico e social e combate à pobreza; (Incluído pela Lei nº 14.027, de 2020)

IX – experimentação não lucrativa de novos modelos socioprodutivos e de sistemas alternativos de produção, comércio, emprego e crédito; (Incluído pela Lei nº 14.027, de 2020)

X – promoção de direitos estabelecidos, construção de novos direitos e assessoria jurídica gratuita de interesse suplementar; (Incluído pela Lei nº 14.027, de 2020)

XI – promoção da ética, da paz, da cidadania, dos direitos humanos, da democracia e de outros valores universais; (Incluído pela Lei nº 14.027, de 2020)

XII – realização, no caso de organizações religiosas, de atividades de interesse público e de cunho social distintas daquelas com fins exclusivamente religiosos; (Incluído pela Lei nº 14.027, de 2020)

XIII – estudos e pesquisas, desenvolvimento de tecnologias alternativas e produção e divulgação de informações e conhecimentos técnicos e científicos relacionados às atividades mencionadas neste artigo. (Incluído pela Lei nº 14.027, de 2020)

§ 1º-B. São vedadas: (Incluído pela Lei nº 14.027, de 2020)

I – a participação de entidades beneficiadas na forma deste artigo em campanhas de interesse político-partidário ou eleitorais, sob quaisquer meios ou formas; (Incluído pela Lei nº 14.027, de 2020)

II – a distribuição ou conversão dos prêmios em dinheiro. (Incluído pela Lei nº 14.027, de 2020)

§ 2º Sempre que for comprovado o desvirtuamento da aplicação dos recursos oriundos dos sorteios excepcionalmente autorizados neste artigo, bem como o descumprimento das normas baixadas para sua execução, será cassada a declaração de utilidade pública da infratora, sem prejuízo das penalidades do art. 13 desta lei. (Incluído pela Lei nº 5.864, de 12.12.72)

§ 2º Sempre que for comprovado o desvirtuamento da aplicação dos recursos oriundos dos sorteios autorizados nos termos deste artigo ou o descumprimento do plano de distribuição de prêmios, serão aplicadas as penalidades previstas no art. 13 desta Lei. (Redação dada pela Lei nº 14.027, de 2020)

§ 3º Será também considerada desvirtuamento da aplicação dos recursos obtidos pela forma excepcional prevista neste artigo a interveniência de terceiros, pessoas físicas ou jurídicas, que de qualquer forma venham a participar dos resultados da promoção. (Incluído pela Lei nº 5.864, de 12.12.72)

§ 4º Caberá à regulamentação tratar da limitação do número de sorteios e da aplicação de taxa de fiscalização das operações promovidas por organizações da sociedade civil. (Incluído pela Lei nº 14.027, de 2020)

§ 5º (VETADO). (Incluído pela Lei nº 14.027, de 2020)

Art 5º A concessão da autorização prevista no art. 1º sujeita as emprêsas autorizadas ao pagamento, a partir de 1º de janeiro de 1972, da "Taxa de Distribuição de Prêmios" de 10% (dez por cento), incidente sôbre o valor da promoção autorizada, assim compreendida a soma dos valôres dos prêmios prometidos. (Extinto pela Lei nº 8.522, de 1992)

§ 1º A taxa a que se refere êste artigo será paga em tantas parcelas mensais, iguais e sucessivas, quantos forem os meses de duração do plano promocional, vencendo-se a primeira no 10º (décimo) dia do mês subseqüente ao do início da execução do plano.

§ 2º Até 31 de dezembro de 1971, será exigida a Taxa de Distribuição de Prêmios de que trata o § 3º do art. 14 do Decreto-lei nº 34, de 18 de novembro de 1966, incidente sôbre o valor previsto no art. 8º, alínea a, do Decreto-lei nº 7.930, de 3 de setembro de 1945.

Art 6º Quando o prêmio sorteado, ou ganho em concurso, não fôr reclamado no prazo de 180 (cento e oitenta) dias, caducará o direito do respectivo titular e o valor correspondente será recolhido ao Tesouro Nacional no prazo de 10 (dez) dias pelo distribuidor autorizado.

CAPÍTULO II
De Outras Operações Sujeitas a Autorização

Art 7º Dependerão, igualmente, de prévia autorização do Ministério da Fazenda, na forma desta lei, e nos têrmos e condições gerais que forem fixados em regulamento, quando não sujeitas à de outra autoridade ou órgãos públicos federais: (Vide Lei nº 8.177, de 1991)

I

- as operações conhecidas como Consórcio, Fundo Mútuo e outras formas associativas assemelhadas, que objetivem a aquisição de bens de qualquer natureza;

(Revogado pela Lei nº 11.795, de 2008).

II - a venda ou promessa de venda de mercadorias a varejo, mediante oferta pública e com recebimento antecipado, parcial ou total, do respectivo preço;

III - a venda ou promessa de venda de direitos, inclusive cotas de propriedade de entidades civis, tais como hospital, motel, clube, hotel, centro de recreação ou alojamento e organização de serviços de qualquer natureza com ou sem rateio de despesas de manutenção, mediante oferta pública e com pagamento antecipado do preço;

IV - a venda ou promessa de venda de terrenos loteados a prestações mediante sorteio;

V

- qualquer outra modalidade de captação antecipada de poupança popular, mediante promessa de contraprestação em bens, direitos ou serviços de qualquer natureza.

(Revogado pela Lei nº 11.795, de 2008).

§ 1º Na operação referida no item II dêste artigo, a mercadoria deverá:

a) ser de preço corrente de venda a vista no mercado varejista da praça indicada e aprovada com o plano, à data da liquidação do contrato, e, não o havendo, ou sendo a mercadoria de venda exclusiva, ou de mercadoria similar na mesma praça, vedado qualquer acréscimo até sua efetiva entrega;

b) ser de produção nacional e considerada de primeira necessidade ou de uso geral;

c) ser descriminada no contrato referente à operação, podendo, entretanto, o prestamista, a seu critério exclusivo, escolher outra não constante da discriminação, desde que o existente no estoque do vendedor, atendidas as alíneas a e b, pagando o prestamista a diferença de preço se houver.

§ 2º A emprêsa que realizar a operação a que se refere o parágrafo anterior aplicará o mínimo de 20% (vinte por cento) de sua arrecadação mensal na formação de estoque de mercadoria que se propõe a vender, podendo o Ministério da Fazenda, a seu exclusivo critério, permitir que parte dessa percentagem seja aplicada no mercado de valôres mobiliários, nas condições que vierem a ser fixadas em regulamento; nos casos do item IV, manterá, livre de quaisquer ônus reais ou convencionais, quantidade de imóveis de sua propriedade, na mesma proporção acima mencionada.

§ 3º Na operação referida no item II dêste artigo, quando houver desistência ou inadimplemento do prestamista, a partir da 4ª (quarta) prestação, inclusive, êste receberá, no ato, em mercadorias nacionais, do estoque do vendedor, e pelo preço corrente de venda à vista no mercado varejista da praça indicada no plano, à data em que se verificar a desistência ou inadimplemento, o valor da tabela de resgate das prestações pagas, fixada pelo Ministro da Fazenda.

§ 4º O valor de resgate a que se refere o parágrafo anterior será fixado proporcional e progressivamente às prestações pagas pelo prestamista, não podendo ser inferior a 50% (cinqüenta por cento) das importâncias pagas, e, se não reclamado até 60 (sessenta) dias do término do contrato de venda, será recolhido ao Tesouro Nacional, dentro do prazo de 30 (trinta) dias.

§ 5º Paga a totalidade das prestações previstas nos contratos a que se refere o item II dêste artigo, o prestamista receberá mercadorias de valor correspondente à soma das prestações corrigidas monetàriamente segundo índices que o regulamento indicar, e, se não reclamado no prazo de 1 (um) ano do término do contrato de venda, será recolhido ao Tesouro Nacional dentro de 30 (trinta) dias.

§ 6º Nas operações previstas no item V dêste artigo, quando a contraprestação fôr em mercadorias, aplicar-se-á o disposto nos parágrafos anteriores.

§ 7º Para autorização das operações a que se refere êste artigo, quando a contraprestação fôr em imóveis, serão exigidas:

a) prova de propriedade dos imóveis objeto das vendas, promessas de venda ou contraprestações prometidas, e da inexistência de ônus reais que recaiam sôbre os mesmos;

b) prova de que os mesmos imóveis satisfazem a, pelo menos, duas das condições previstas do art. 32 do Código Tributário Nacional, preferencialmente a existência de escola a menos de 2 (dois) quilômetros de distância;

c) a manifestação do Banco Nacional da Habitação de que os imóveis se prestam a consecução de plano habitacional, quando se tratar de terrenos, ou quanto à viabilidade técnica e financeira, quando se tratar de edificações residenciais;

d) a compatibilidade do plano de vendas com o Plano de Integração Nacional, quando fôr o caso.

§ 8º É vedado à emprêsa autorizada a realizar as operações a que se refere êste artigo cobrar do prestamista qualquer outra quantia ou valor, além do preço do bem, direito ou serviço, ainda que a título de ressarcimento de tributos, ressalvado, quando fôr o caso, o disposto no item III do art. 8º.

CAPÍTULO III
Das Disposições Gerais e Penalidades

Art 8º O Ministério da Fazenda, nas operações previstas no artigo 7º, exigirá prova de capacidade financeira, econômica e gerencial da emprêsa, além dos estudos de viabilidade econômica do plano e das formas e condições de emprêgo das importâncias a receber, podendo: (Vide Lei nº 8.177, de 1991)

I - fixar limites de prazos e de participantes, normas e modalidades contratuais;

II - fixar limites mínimos de capital social;

III - estabelecer percentagens máximas permitidas, a título de despesas de administração;

IV - exigir que as respectivas receitas e despesas sejam contabilizadas destacadamente das demais.

Art 9º O Conselho Monetário Nacional, tendo em vista os critérios e objetivos compreendidos em sua competência legal, poderá intervir nas operações referidas no artigo 7º, para:

I - restringir seus limites e modalidades, bem como disciplinar as operações ou proibir novos lançamentos;

Il - exigir garantias ou formação de reservas técnicas, fundos especiais e provisões, sem prejuízos das reservas e fundos determinados em leis especiais;

III - alterar o valor de resgate previsto no § 4º do artigo 7º, bem como estendê-lo a alguma ou a tôdas daquelas operações.

§ 1º Os bens e valôres que representem as reservas e garantias técnicas para atender ao disposto neste artigo não poderão ser alienados prometidos alienar ou de qualquer forma gravados sem autorização expressa do Ministério da Fazenda, sendo nula, de pleno direito, a alienação realizada ou o gravame constituído com a violação dêste artigo.

§ 2º Quando a garantia ou reserva técnica fôr representada por bem imóvel, a cláusula de inalienabilidade e impenhorabilidade será obrigatoriamente registrada no competente Cartório do Registro Geral de Imóveis.

Art 10. O Banco Central do Brasil poderá intervir nas emprêsas autorizadas a realizar as operações a que se refere o artigo 7º, e decretar sua liquidação extrajudicial na forma e condições previstas na legislação especial aplicável às entidades financeiras.

Art 11. Os diretores, gerentes, sócios e prepostos com função de gestão na emprêsa que realizar operações referidas no artigo 7º:

I - serão considerados depositários, para todos os efeitos, das quantias que a emprêsa receber dos prestamistas na sua gestão, até o cumprimento da obrigação assumida;

II - responderão solidariamente pelas obrigações da emprêsa com o prestamista, contraídas na sua gestão.

Parágrafo único. O disposto neste artigo aplica-se também aos administradores da operação mencionada no item I do artigo 7º.

Art 12. A realização de operações regidas por esta lei sem prévia autorização, sujeita os infratores, cumulativamente, às seguintes penalidades:

I - no caso do que trata o artigo 1º:

a) multa igual ao valor total dos prêmios prometidos, não inferior a 100 (cem) vêzes o maior salário mínimo vigente no País;

b) perda dos bens prometidos como prêmios; e

c) proibição de realizar aquelas operações durante o prazo de 5 (cinco) anos.

II - nos casos a que se refere o artigo 7º:

a) multa igual ao valor total dos bens, direitos ou serviços que constituírem objeto da operação, não inferior a 500 (quinhentas) vêzes o maior salário-mínimo vigente no País;

b) proibição de realizar aquelas operações durante a prazo de 10 (dez) anos.

Parágrafo único. Incorre, também, nas penas previstas neste artigo quem, sem condições legais, prometer públicamente realizar operações regidas por esta lei.

Art. 12. A realização de operações regidas por esta Lei, sem prévia autorização, sujeita os infratores às seguintes sanções, aplicáveis separada ou cumulativamente: (Redação da pela Lei nº 7.691, de 15.12.88)

Art. 12. A realização de operações sem prévia autorização sujeita os infratores às seguintes sanções, aplicáveis alternativa ou cumulativamente: (Redação dada pela Lei nº 14.790, de 2023)

I - no caso de que trata o art. 1º: (Redação da pela Lei nº 7.691, de 15.12.88)

a) multa de até cem por cento da soma dos valores dos bens prometidos como prêmios; (Redação da pela Lei nº 7.691, de 15.12.88)

b) proibição de realizar tais operações durante o prazo de até dois anos; (Redação da pela Lei nº 7.691, de 15.12.88)

b) proibição de realizar as operações pelo prazo de até 2 (dois) anos; e (Redação dada pela Lei nº 14.790, de 2023)

c) advertência. (Incluído pela Lei nº 14.790, de 2023)

II - nos casos a que se refere o art. 7º: (Redação da pela Lei nº 7.691, de 15.12.88)

a) multa de até cem por cento das importâncias previstas em contrato, recebidas ou a receber, a título de taxa ou despesa de administração; (Redação da pela Lei nº 7.691, de 15.12.88)

b) proibição de realizar tais operações durante o prazo de até dois anos. (Redação da pela Lei nº 7.691, de 15.12.88)

Parágrafo único. Incorre, também, nas sanções previstas neste artigo quem, em desacordo com as normas aplicáveis, prometer publicamente realizar operações regidas por esta Lei. (Redação da pela Lei nº 7.691, de 15.12.88)

§ 1º Incorre também nas sanções previstas neste artigo quem, em desacordo com as normas aplicáveis, prometer publicamente realizar operações regidas por esta Lei. (Incluído pela Lei nº 14.790, de 2023)

§ 2º Caracteriza reincidência o cometimento de nova infração da mesma natureza no período de 3 (três) anos subsequente à data da decisão condenatória administrativa definitiva relativa à infração anterior. (Incluído pela Lei nº 14.790, de 2023)

§ 3º Na hipótese de reincidência, a sanção de multa será aplicada isolada ou cumulativamente com outras sanções, e seu valor será agravado em dobro. (Incluído pela Lei nº 14.790, de 2023)

Art 13. A emprêsa autorizada a realizar operações previstas no artigo 1º que não cumprir o plano de distribuição de prêmios ou desvirtuar a finalidade da operação fica sujeita, cumulativamente às seguintes penalidades:

I - cassação da autorização;

Il - proibição de realizar nova operação pelo prazo de 5 (cinco) anos;

III - perda dos bens prometidos em prêmio, se êstes ainda não tiverem sido entregues, ou multa igual ao valor dêsses prêmios, não inferior a 50 (cinqüenta) vêzes o maior salário-mínimo vigente no País, se os mesmos já tiverem sido entregues ou não forem encontrados.

Art 13. A empresa autorizada a realizar operações previstas no art. 1º, que não cumprir o plano de distribuição de prêmios ou desvirtuar a finalidade da operação, fica sujeita, separada ou cumulativamente, às seguintes sanções: (Redação da pela Lei nº 7.691, de 15.12.88)

I - cassação da autorização; (Redação da pela Lei nº 7.691, de 15.12.88)

II - proibição de realizar tais operações durante o prazo de até dois anos; (Redação da pela Lei nº 7.691, de 15.12.88)

III - multa de até cem por cento da soma dos valores dos bens prometidos como prêmio. (Redação da pela Lei nº 7.691, de 15.12.88)

III - multa de até 100% (cem por cento) da soma dos valores dos bens prometidos como prêmio; e (Redação dada pela Lei nº 14.790, de 2023)

IV - advertência. (Incluído pela Lei nº 14.790, de 2023)

Parágrafo único. Incorrem nas mesmas sanções as instituições declaradas de utilidade pública que realizarem as operações referidas neste artigo, sem autorização ou em desacordo com ela. (Incluído pela Lei nº 7.691, de 15.12.88)

§ 1º Incorre também nas sanções previstas neste artigo quem, em desacordo com as normas aplicáveis, prometer publicamente realizar operações regidas por esta Lei. (Incluído pela Lei nº 14.790, de 2023)

§ 2º Na hipótese de reincidência, nos termos do § 2º do art. 12 desta Lei, a sanção de multa será aplicada isolada ou cumulativamente com outras sanções, e seu valor será agravado em dobro. (Incluído pela Lei nº 14.790, de 2023)

Art. 13-A. A realização de operações previstas no art. 1º-A desta Lei sem prévia autorização ou daquelas que, ainda que autorizadas, não cumpram o plano de distribuição de prêmios ou desvirtuem a finalidade da operação, sujeita os infratores às seguintes sanções, aplicáveis separada ou cumulativamente: (Incluído pela Lei nº 14.027, de 2020)

I – cassação da autorização; (Incluído pela Lei nº 14.027, de 2020)

II – proibição de realizar as operações durante o prazo de até 3 (três) anos; (Incluído pela Lei nº 14.027, de 2020)

III – multa de até 100% (cem por cento) da soma dos valores dos bens prometidos como prêmios. (Incluído pela Lei nº 14.027, de 2020)

III - multa de até 100% (cem por cento) da soma dos valores dos bens prometidos como prêmio; e (Redação dada pela Lei nº 14.790, de 2023)

IV - advertência. (Incluído pela Lei nº 14.790, de 2023)

Parágrafo único. Na hipótese de reincidência, nos termos do § 2º do art. 12 desta Lei, a sanção de multa será aplicada isolada ou cumulativamente com outras sanções, e seu valor será agravado em dobro. (Incluído pela Lei nº 14.790, de 2023)

Art 14. A emprêsa autorizada, na forma desta lei e realizar operações referidas no artigo 7º que não cumprir o plano ficará sujeito, cumulativamente, às seguintes penalidades:

I - cassação da autorização;

II - proibição de realizar nova operação pelo prazo de 5 (cinco) anos; e

III - multa igual a 50% (cinqüenta por cento) do valor dos bens, direitos ou serviços que constituirem objeto da operação.

Art. 14. A empresa autorizada, na forma desta Lei, a realizar operações referidas no art. 7º, que descumprir os termos da autorização concedida ou normas que disciplinam a matéria, ficará sujeita, separada ou cumulativamente, às seguintes sanções: (Redação da pela Lei nº 7.691, de 15.12.88)

I - cassação da autorização; (Redação da pela Lei nº 7.691, de 15.12.88)

II - proibição de realizar nova operação durante o prazo de até dois anos; (Redação da pela Lei nº 7.691, de 15.12.88)

III - sujeição a regime especial de fiscalização; e (Redação da pela Lei nº 7.691, de 15.12.88)

III - sujeição a regime especial de fiscalização; (Redação dada pela Lei nº 14.790, de 2023)

IV - multa de até cem por cento das importâncias, recebidas ou a receber, previstas em contrato, a título de despesa ou taxa de administração. (Incluído pela Lei nº 7.691, de 15.12.88)

IV - multa de até 100% (cem por cento) das importâncias, recebidas ou a receber, previstas em contrato, a título de despesa ou taxa de administração; e (Incluído pela Lei nº 14.790, de 2023)

V - advertência. (Incluído pela Lei nº 14.790, de 2023)

Parágrafo único. Na hipótese de reincidência, nos termos do § 2º do art. 12 desta Lei, a sanção de multa será aplicada isolada ou cumulativamente com outras sanções, e seu valor será agravado em dobro. (Incluído pela Lei nº 14.790, de 2023)

Art. 14-A. As infrações ao disposto nesta Lei e nos atos que a regulamentem não alcançadas pelos arts. 12, 13 e 14 desta Lei sujeitam o infrator, de modo isolado ou cumulativo, às seguintes sanções: (Incluído pela Lei nº 14.790, de 2023)

I - cassação da autorização; (Incluído pela Lei nº 14.790, de 2023)

II - proibição de realizar as operações por período estabelecido pelo Ministério da Fazenda, que não poderá exceder a 2 (dois) anos; (Incluído pela Lei nº 14.790, de 2023)

III - multa de até 100% (cem por cento) da soma dos valores dos bens prometidos como prêmio, a ser estabelecida pelo Ministério da Fazenda; e (Incluído pela Lei nº 14.790, de 2023)

IV - advertência. (Incluído pela Lei nº 14.790, de 2023)

§ 1º Caracteriza reincidência o cometimento de nova infração da mesma natureza no período de 3 (três) anos subsequente à data da decisão condenatória administrativa definitiva relativa à infração anterior. (Incluído pela Lei nº 14.790, de 2023)

§ 2º Na hipótese de reincidência, a sanção de multa será aplicada isolada ou cumulativamente com outras sanções, e seu valor será agravado em dobro. (Incluído pela Lei nº 14.790, de 2023)

Art 15. A falta de recolhimento da Taxa de Distribuição de Prêmios, dentro dos prazos previstos nesta lei, sujeita o contribuinte à multa igual a 50% (cinqüenta por cento) da importância que deixou de ser recolhida.

Parágrafo único. Se o recolhimento fôr feito após o prazo legal, antes de qualquer procedimento fiscal, a multa será de 10% (dez por cento).

Art 16. As infrações a esta lei, a seu regulamento ou a atos normativos destinados a complementá-los, quando não compreendidas nos artigos anteriores, sujeitam o infrator à multa de 10 (dez) a 40 (quarenta) vêzes o maior salário-mínimo vigente no País, elevada ao dôbro no caso de reincidência.

Art 17. A aplicação das penalidades previstas nesta lei não exclui a responsabilidade e as sanções de natureza civil e penal, nos têrmos das respectivas legislações.

Art. 17-A. Na hipótese de denúncia com elementos insuficientes de autoria ou de materialidade ou que contenha defeitos ou irregularidades capazes de dificultar sua análise, poderá ser concedido prazo, apenas uma vez, para que o denunciante a emende, sob pena de arquivamento. (Incluído pela Lei nº 14.790, de 2023)

Art 18. O processo e o julgamento das infrações a esta lei serão estabelecidos em regulamento.

Art. 18-A. O Ministério da Fazenda, em juízo de conveniência e oportunidade devidamente fundamentado, com vistas a atender ao interesse público, poderá deixar de instaurar ou suspender, em qualquer fase que preceda a tomada da decisão de primeira instância, o processo administrativo destinado à apuração de infração prevista nesta Lei, se o investigado firmar termo de compromisso no qual se obrigue a, cumulativamente: (Incluído pela Lei nº 14.790, de 2023)

I - cessar a prática sob investigação ou os seus efeitos lesivos; (Incluído pela Lei nº 14.790, de 2023)

II - corrigir as irregularidades apontadas e indenizar os prejuízos; e (Incluído pela Lei nº 14.790, de 2023)

III - cumprir as demais condições que forem acordadas no caso concreto, com obrigatório recolhimento de contribuição pecuniária. (Incluído pela Lei nº 14.790, de 2023)

§ 1º A proposta de termo de compromisso poderá ser apresentada apenas uma vez. (Incluído pela Lei nº 14.790, de 2023)

§ 2º A proposta de termo de compromisso poderá, a requerimento do interessado ou mediante decisão fundamentada do Ministério da Fazenda, ser classificada como documento sigiloso. (Incluído pela Lei nº 14.790, de 2023)

§ 3º A apresentação de proposta de termo de compromisso suspenderá a contagem do prazo de prescrição. (Incluído pela Lei nº 14.790, de 2023)

§ 4º A proposta de termo de compromisso será rejeitada quando não houver acordo entre o Ministério da Fazenda e os investigados com relação às obrigações a serem compromissadas. (Incluído pela Lei nº 14.790, de 2023)

§ 5º A apresentação da proposta e a celebração do termo de compromisso não importarão confissão quanto à matéria de fato nem reconhecimento da ilicitude da conduta analisada. (Incluído pela Lei nº 14.790, de 2023)

§ 6º O termo de compromisso será celebrado pelo Ministro de Estado da Fazenda, admitida a delegação de competência, e sua versão pública será publicada no sítio eletrônico do Ministério da Fazenda no prazo de 5 (cinco) dias úteis, contado da data de sua assinatura. (Incluído pela Lei nº 14.790, de 2023)

§ 7º O termo de compromisso constituirá título executivo extrajudicial. (Incluído pela Lei nº 14.790, de 2023)

§ 8º O processo administrativo será suspenso na data da publicação do termo de compromisso pelo Ministério da Fazenda, sem prejuízo de sua retomada na hipótese de descumprimento das obrigações compromissadas. (Incluído pela Lei nº 14.790, de 2023)

§ 9º A suspensão do curso do processo administrativo e da contagem do prazo de prescrição somente terá efeito em relação ao interessado que apresentou a proposta e firmou o termo de compromisso, mantidos o curso do processo e a contagem do prazo em relação aos demais investigados ou envolvidos. (Incluído pela Lei nº 14.790, de 2023)

§ 10. O termo de compromisso fixará o valor da multa a ser aplicada na hipótese de descumprimento total ou parcial das obrigações compromissadas. (Incluído pela Lei nº 14.790, de 2023)

§ 11. Declarado o descumprimento das obrigações compromissadas, o Ministério da Fazenda aplicará as sanções previstas no termo de compromisso e adotará as demais medidas administrativas, extrajudiciais e judiciais cabíveis para sua execução. (Incluído pela Lei nº 14.790, de 2023)

§ 12. O processo administrativo será arquivado ao término do prazo fixado no termo de compromisso, desde que atendidas as obrigações compromissadas. (Incluído pela Lei nº 14.790, de 2023)

§ 13. O Ministério da Fazenda editará normas complementares sobre o termo de compromisso. (Incluído pela Lei nº 14.790, de 2023)

Art 19. A fiscalização das operações mencionadas nesta lei será exercida privativamente pela Secretaria da Receita Federal do Ministério da Fazenda.

CAPíTULO IV
Das Disposições Transitórias

Art 20. As operações de que trata o artigo 1º, autorizadas pelo Ministério da Fazenda e em curso na data do início da vigência desta Lei, serão adaptadas às suas disposições e às de seu regulamento, no prazo de 90 (noventa) dias, após o qual as respectivas autorizações serão consideradas canceladas de pleno direito, sujeitando-se quem as praticar, sem permissão legal às penalidades previstas nos itens Il e IlI, do artigo 13.

Art 21. As operações de que trata o artigo 7º, em curso na data em que entrar em vigor esta lei, deverão, no prazo de 90 (noventa) dias, contados a partir da vigência do regulamento, prorrogável a critério da administração ser adaptadas ao regime ora estabelecido sob pena de os responsáveis ficarem sujeitos às sanções estipuladas no artigo 14, cabendo ao Ministério da Fazenda fixar normas especiais aplicáveis à liquidação dos planos não suscetíveis de adaptação, respeitados os contratos já celebrados na vigência dos mesmos planos, e de forma a não prejudicar os direitos dos participantes.

§ 1º Consideram-se não suscetíveis de adaptação as operações previstas no inciso I do artigo 7º, já contratadas segundo as normas vigentes expedidas pelo Ministério da Fazenda ou pelo Banco Central do Brasil.

§ 2º Nas operações de que trata o artigo 7º, em curso, e que antes desta Lei não dependiam de autorização, os que as praticarem requererão, no mesmo prazo fixado no caput dêste artigo, as respectivas autorizações e, caso negada esta, terá aplicação o disposto no caput dêste artigo.

Art 22. O Poder Executivo baixará regulamento desta Lei no prazo de 90 (noventa) dias.

Art 23. Esta Lei entrará em vigor na data de sua publicação, revogados os Decretos-lei números 7.930, de 3 de setembro de 1945, e 418, de 10 de janeiro de 1969, e demais disposições em contrário.

Brasília, 20 de dezembro de 1971; 150º da Independência e 83º da República.

EMíLIO G. MÉDICI

Antônio Delfim Netto

Este texto não substitui o publicado no DOU de 21.12.1971

*

Voltar ao topo
Detalhes
Publicado por
Presidência da Republica
Tipo de documento
Legislação • Lei
Esfera
Federal
Casa
Presidência da Republica
Data de promulgação
20/12/1971
Assuntos
Lei nº 5.172 de 25 de Outubro de 1966
Art. 32 da Lei nº 5.172, de 25 de outubro de 1966
Lei nº 5.768 de 20 de Dezembro de 1971
Parágrafo 3º, art. 14 do Decreto-lei nº 34, de 18 de novembro de 1966
Para todas as pessoas
Consulta Processual•Acompanhe seu CPF•Conheça seus direitos•Artigos•Notícias
Para profissionais
Jus IA•Jurisprudência•Doutrina•Diários Oficiais•Peças Processuais•Modelos•Legislação
Para empresas
Jusbrasil Soluções•Departamentos jurídicos•Empresas•Escritórios de advocacia•API Jusbrasil
Jusbrasil
Sobre nós•Blog Justech•Planos•Ajuda•Newsletter•Termos de Uso•Política de Privacidade•Central de Privacidade•Denúncias
A sua principal fonte de informação jurídica - © 2026 Jusbrasil. Todos os direitos reservados.

LEGISLAÇÃO

LEI Nº 5.768, DE 20 DE DEZEMBRO DE 1971

Sumário




Todos
Pesquisar no Jusbrasil

Cadastre-se
Entrar
Home
Consulta processual
Jurisprudência
Doutrina
Artigos
Notícias
Diários
Peças Processuais
Modelos
Legislação
Diretório de Advogados

LEI Nº 12.101, DE 27 DE NOVEMBRO DE 2009
Dispõe sobre a certificação das entidades beneficentes de assistência social; regula os procedimentos de isenção de contribuições para a seguridade social; altera a Lei no 8.742, de 7 de dezembro de 1993; revoga dispositivos das Leis nos 8.212, de 24 de julho de 1991, 9.429, de 26 de dezembro de 1996, 9.732, de 11 de dezembro de 1998, 10.684, de 30 de maio de 2003, e da Medida Provisória no 2.187-13, de 24 de agosto de 2001; e dá outras providências


Sumário

Mensagem de veto

Regulamento

Vide Lei nº 12.868, de 2013

Regulamento

(Revogado pela Lei Complementar nº 187, de 2021)

O PRESIDENTE DA REPÚBLICA Faço saber que o Congresso Nacional decreta e eu sanciono a seguinte Lei:

CAPÍTULO I
DISPOSIÇÕES PRELIMINARES

Art. 1o A certificação das entidades beneficentes de assistência social e a isenção de contribuições para a seguridade social serão concedidas às pessoas jurídicas de direito privado, sem fins lucrativos, reconhecidas como entidades beneficentes de assistência social com a finalidade de prestação de serviços nas áreas de assistência social, saúde ou educação, e que atendam ao disposto nesta Lei. (Vide ADIN 4480)

Parágrafo único. (VETADO)

Art. 2o As entidades de que trata o art. 1o deverão obedecer ao princípio da universalidade do atendimento, sendo vedado dirigir suas atividades exclusivamente a seus associados ou a categoria profissional.

CAPÍTULO II
DA CERTIFICAÇÃO

Art. 3o A certificação ou sua renovação será concedida à entidade beneficente que demonstre, no exercício fiscal anterior ao do requerimento, observado o período mínimo de 12 (doze) meses de constituição da entidade, o cumprimento do disposto nas Seções I, II, III e IV deste Capítulo, de acordo com as respectivas áreas de atuação, e cumpra, cumulativamente, os seguintes requisitos: (Vide Lei nº 13.650, de 2018)

I - seja constituída como pessoa jurídica nos termos do caput do art. 1o; e

II - preveja, em seus atos constitutivos, em caso de dissolução ou extinção, a destinação do eventual patrimônio remanescente a entidade sem fins lucrativos congêneres ou a entidades públicas.

Parágrafo único. O período mínimo de cumprimento dos requisitos de que trata este artigo poderá ser reduzido se a entidade for prestadora de serviços por meio de convênio ou instrumento congênere com o Sistema Único de Saúde - SUS ou com o Sistema Único de Assistência Social - SUAS, em caso de necessidade local atestada pelo gestor do respectivo sistema.

Parágrafo único. O período mínimo de cumprimento dos requisitos de que trata este artigo poderá ser reduzido se a entidade for prestadora de serviços por meio de contrato, convênio ou instrumento congênere com o Sistema Único de Saúde (SUS) ou com o Sistema Único de Assistência Social (Suas), em caso de necessidade local atestada pelo gestor do respectivo sistema. (Redação dada pela Lei nº 12.868, de 2013)

Seção I

Da Saúde

Art. 4o Para ser considerada beneficente e fazer jus à certificação, a entidade de saúde deverá, nos termos do regulamento:

I - comprovar o cumprimento das metas estabelecidas em convênio ou instrumento congênere celebrado com o gestor local do SUS;

I - celebrar contrato, convênio ou instrumento congênere com o gestor do SUS; (Redação dada pela Lei nº 12.868, de 2013) (Vide Lei nº 13.650, de 2018)

II - ofertar a prestação de seus serviços ao SUS no percentual mínimo de 60% (sessenta por cento);

III - comprovar, anualmente, a prestação dos serviços de que trata o inciso II, com base no somatório das internações realizadas e dos atendimentos ambulatoriais prestados.

III - comprovar, anualmente, da forma regulamentada pelo Ministério da Saúde, a prestação dos serviços de que trata o inciso II, com base nas internações e nos atendimentos ambulatoriais realizados. (Redação dada pela Lei nº 12.453, de 2011)

§ 1o O atendimento do percentual mínimo de que trata o caput pode ser individualizado por estabelecimento ou pelo conjunto de estabelecimentos de saúde da pessoa jurídica, desde que não abranja outra entidade com personalidade jurídica própria que seja por ela mantida.

§ 2o Para fins do disposto no § 1o, no conjunto de estabelecimentos de saúde da pessoa jurídica, poderá ser incorporado aquele vinculado por força de contrato de gestão, na forma do regulamento.

§ 3o Para fins do disposto no inciso III do caput, a entidade de saúde que aderir a programas e estratégias prioritárias definidas pelo Ministério da Saúde fará jus a índice percentual que será adicionado ao total de prestação de seus serviços ofertados ao SUS, observado o limite máximo de 10% (dez por cento), conforme estabelecido em ato do Ministro de Estado da Saúde. (Incluído pela Lei nº 12.868, de 2013)

§ 4º Na hipótese de comprovada prestação de serviços pela entidade de saúde, sem a observância do disposto no inciso I do caput deste artigo, que dê causa ao indeferimento ou cancelamento da certificação, o Ministério da Saúde deverá informar aos órgãos de controle os indícios da irregularidade praticada pelo gestor do SUS. (Incluído pela Lei nº 13.650, de 2018)

Art. 5o A entidade de saúde deverá ainda informar, obrigatoriamente, ao Ministério da Saúde, na forma por ele estabelecida:

I - a totalidade das internações e atendimentos ambulatoriais realizados para os pacientes não usuários do SUS;

II - a totalidade das internações e atendimentos ambulatoriais realizados para os pacientes usuários do SUS; e

III - as alterações referentes aos registros no Cadastro Nacional de Estabelecimentos de Saúde - CNES.

Parágrafo único. A entidade deverá manter o Cadastro Nacional de Estabelecimentos de Saúde - CNES atualizado, de acordo com a forma e o prazo determinado pelo Ministério da Saúde. (Incluído pela Lei nº 12.453, de 2011)

Art. 6o A entidade de saúde que presta serviços exclusivamente na área ambulatorial deverá observar o disposto nos incisos I e II do art. 4o.

Art. 6o A entidade de saúde que presta serviços exclusivamente na área ambulatorial deverá observar o disposto nos incisos I e II do art. 4o, comprovando, anualmente, a prestação dos serviços no percentual mínimo de 60% (sessenta por cento). (Redação dada pela Lei nº 12.453, de 2011)

Art. 6o-A. Para os requerimentos de renovação de certificado, caso a entidade de saúde não cumpra o disposto no inciso III do caput do art. 4o no exercício fiscal anterior ao exercício do requerimento, o Ministério da Saúde avaliará o cumprimento do requisito com base na média do total de prestação de serviços ao SUS de que trata o inciso III do caput do art. 4o pela entidade durante todo o período de certificação em curso, que deverá ser de, no mínimo, 60% (sessenta por cento). (Incluído pela Lei nº 12.868, de 2013)

§ 1o Para fins do disposto no caput, apenas será admitida a avaliação pelo Ministério da Saúde caso a entidade tenha cumprido, no mínimo, 50% (cinquenta por cento) da prestação de seus serviços ao SUS de que trata o inciso III do caput do art. 4o em cada um dos anos do período de certificação. (Incluído pela Lei nº 12.868, de 2013)

§ 2o A comprovação da prestação dos serviços, conforme regulamento do Ministério da Saúde, será feita com base nas internações, nos atendimentos ambulatoriais e nas ações prioritárias realizadas. (Incluído pela Lei nº 12.868, de 2013)

Art. 7o Quando a disponibilidade de cobertura assistencial da população pela rede pública de determinada área for insuficiente, os gestores do SUS deverão observar, para a contratação de serviços privados, a preferência de participação das entidades beneficentes de saúde e das sem fins lucrativos.

Art. 7o-A. As instituições reconhecidas nos termos da legislação como serviços de atenção em regime residencial e transitório, incluídas as comunidades terapêuticas que prestem ao SUS serviços de atendimento e acolhimento, a pessoas com transtornos decorrentes do uso, abuso ou dependência de substância psicoativa poderão ser certificadas, desde que: (Incluído pela Lei nº 12.868, de 2013)

I - sejam qualificadas como entidades de saúde; e (Incluído pela Lei nº 12.868, de 2013)

II - comprovem a prestação de serviços de que trata o caput. (Incluído pela Lei nº 12.868, de 2013)

§ 1o O cumprimento dos requisitos estabelecidos nos incisos I e II do caput deverá observar os critérios definidos pelo Ministério da Saúde. (Incluído pela Lei nº 12.868, de 2013)

§ 2o A prestação dos serviços prevista no caput será pactuada com o gestor local do SUS por meio de contrato, convênio ou instrumento congênere. (Incluído pela Lei nº 12.868, de 2013)

§ 3o O atendimento dos requisitos previstos neste artigo dispensa a observância das exigências previstas no art. 4o. (Incluído pela Lei nº 12.868, de 2013)

Art. 8o Na impossibilidade do cumprimento do percentual mínimo a que se refere o inciso II do art. 4o, em razão da falta de demanda, declarada pelo gestor local do SUS, ou não havendo contratação dos serviços de saúde da entidade, deverá ela comprovar a aplicação de percentual da sua receita bruta em atendimento gratuito de saúde da seguinte forma:

Art. 8o Não havendo interesse de contratação pelo Gestor local do SUS dos serviços de saúde ofertados pela entidade no percentual mínimo a que se refere o inciso II do art. 4o, a entidade deverá comprovar a aplicação de percentual da sua receita em gratuidade na área da saúde, da seguinte forma: (Redação dada pela Lei nº 12.453, de 2011)

Art. 8o Não havendo interesse do gestor local do SUS na contratação dos serviços de saúde ofertados pela entidade de saúde ou de contratação abaixo do percentual mínimo a que se refere o inciso II do art. 4o, a entidade deverá comprovar a aplicação de percentual da sua receita em gratuidade na área da saúde, da seguinte forma: (Redação dada pela Lei nº 12.868, de 2013)

I - 20% (vinte por cento), se o percentual de atendimento ao SUS for inferior a 30% (trinta por cento);

I - 20% (vinte por cento), quando não houver interesse de contratação pelo gestor local do SUS ou se o percentual de prestação de serviços ao SUS for inferior a 30% (trinta por cento); (Redação dada pela Lei nº 12.868, de 2013)

II - 10% (dez por cento), se o percentual de atendimento ao SUS for igual ou superior a 30 (trinta) e inferior a 50% (cinquenta por cento); ou

II - 10% (dez por cento), se o percentual de prestação de serviços ao SUS for igual ou superior a 30% (trinta por cento) e inferior a 50% (cinquenta por cento); ou (Redação dada pela Lei nº 12.868, de 2013)

III - 5% (cinco por cento), se o percentual de atendimento ao SUS for igual ou superior a 50% (cinquenta por cento) ou se completar o quantitativo das internações hospitalares e atendimentos ambulatoriais, com atendimentos gratuitos devidamente informados de acordo com o disposto no art. 5o, não financiados pelo SUS ou por qualquer outra fonte.

III - 5% (cinco por cento), se o percentual de prestação de serviços ao SUS for igual ou superior a 50% (cinquenta por cento). (Redação dada pela Lei nº 12.868, de 2013)

Parágrafo único. (VETADO)

§ 2o A receita prevista no caput será a efetivamente recebida da prestação de serviços de saúde. (Incluído pela Lei nº 12.453, de 2011)

Art. 8o-A. Excepcionalmente, será admitida a certificação de entidades que atuem exclusivamente na promoção da saúde sem exigência de contraprestação do usuário pelas ações e serviços de saúde realizados, nos termos do regulamento. (Incluído pela Lei nº 12.868, de 2013)

§ 1o A oferta da totalidade de ações e serviços sem contraprestação do usuário dispensa a observância das exigências previstas no art. 4o. (Incluído pela Lei nº 12.868, de 2013)

§ 2o A execução de ações e serviços de gratuidade em promoção da saúde será previamente pactuada por meio de contrato, convênio ou instrumento congênere com o gestor local do SUS. (Incluído pela Lei nº 12.868, de 2013)

§ 3o Para efeito do disposto no caput, são consideradas ações e serviços de promoção da saúde as atividades voltadas para redução de risco à saúde, desenvolvidas em áreas como: (Incluído pela Lei nº 12.868, de 2013)

I - nutrição e alimentação saudável; (Incluído pela Lei nº 12.868, de 2013)

II - prática corporal ou atividade física; (Incluído pela Lei nº 12.868, de 2013)

III - prevenção e controle do tabagismo; (Incluído pela Lei nº 12.868, de 2013)

IV - prevenção ao câncer, ao vírus da imunodeficiência humana (HIV), às hepatites virais, à tuberculose, à hanseníase, à malária e à dengue; (Incluído pela Lei nº 12.868, de 2013)

V - redução da morbimortalidade em decorrência do uso abusivo de álcool e outras drogas; (Incluído pela Lei nº 12.868, de 2013)

VI - redução da morbimortalidade por acidentes de trânsito; (Incluído pela Lei nº 12.868, de 2013)

VII - prevenção da violência; e (Incluído pela Lei nº 12.868, de 2013)

VIII - redução da morbimortalidade nos diversos ciclos de vida. (Incluído pela Lei nº 12.868, de 2013)

Art. 8o-B. Excepcionalmente, será admitida a certificação de entidades que prestam serviços de atenção em regime residencial e transitório, incluídas as comunidades terapêuticas, que executem exclusivamente ações de promoção da saúde voltadas para pessoas com transtornos decorrentes do uso, abuso ou dependência de drogas, desde que comprovem a aplicação de, no mínimo, 20% (vinte por cento) de sua receita bruta em ações de gratuidade. (Incluído pela Lei nº 12.868, de 2013)

§ 1o Para fins do cálculo de que trata o caput, as receitas provenientes de subvenção pública e as despesas decorrentes não devem incorporar a receita bruta e o percentual aplicado em ações de gratuidade. (Incluído pela Lei nº 12.868, de 2013)

§ 2o A execução das ações de gratuidade em promoção da saúde será previamente pactuada com o gestor local do SUS, por meio de contrato, convênio ou instrumento congênere. (Incluído pela Lei nº 12.868, de 2013)

§ 3o O atendimento dos requisitos previstos neste artigo dispensa a observância das exigências previstas no art. 4o. (Incluído pela Lei nº 12.868, de 2013)

Art. 9o (VETADO)

Art. 10. Em hipótese alguma será admitida como aplicação em gratuidade a eventual diferença entre os valores pagos pelo SUS e os preços praticados pela entidade ou pelo mercado.

Art. 11. A entidade de saúde de reconhecida excelência poderá, alternativamente, para dar cumprimento ao requisito previsto no art. 4o, realizar projetos de apoio ao desenvolvimento institucional do SUS, celebrando ajuste com a União, por intermédio do Ministério da Saúde, nas seguintes áreas de atuação:

I - estudos de avaliação e incorporação de tecnologias;

II - capacitação de recursos humanos;

III - pesquisas de interesse público em saúde; ou

IV - desenvolvimento de técnicas e operação de gestão em serviços de saúde.

§ 1o O Ministério da Saúde definirá os requisitos técnicos essenciais para o reconhecimento de excelência referente a cada uma das áreas de atuação previstas neste artigo.

§ 2o O recurso despendido pela entidade de saúde no projeto de apoio não poderá ser inferior ao valor da isenção das contribuições sociais usufruída.

§ 3o O projeto de apoio será aprovado pelo Ministério da Saúde, ouvidas as instâncias do SUS, segundo procedimento definido em ato do Ministro de Estado.

§ 4o As entidades de saúde que venham a se beneficiar da condição prevista neste artigo poderão complementar as atividades relativas aos projetos de apoio com a prestação de serviços ambulatoriais e hospitalares ao SUS não remunerados, mediante pacto com o gestor local do SUS, observadas as seguintes condições:

I - a complementação não poderá ultrapassar 30% (trinta por cento) do valor usufruído com a isenção das contribuições sociais;

II - a entidade de saúde deverá apresentar ao gestor local do SUS plano de trabalho com previsão de atendimento e detalhamento de custos, os quais não poderão exceder o valor por ela efetivamente despendido;

III - a comprovação dos custos a que se refere o inciso II poderá ser exigida a qualquer tempo, mediante apresentação dos documentos necessários; e

IV - as entidades conveniadas deverão informar a produção na forma estabelecida pelo Ministério da Saúde, com observação de não geração de créditos.

§ 5o A participação das entidades de saúde ou de educação em projetos de apoio previstos neste artigo não poderá ocorrer em prejuízo das atividades beneficentes prestadas ao SUS.

§ 6o O conteúdo e o valor das atividades desenvolvidas em cada projeto de apoio ao desenvolvimento institucional e de prestação de serviços ao SUS deverão ser objeto de relatórios anuais, encaminhados ao Ministério da Saúde para acompanhamento e fiscalização, sem prejuízo das atribuições dos órgãos de fiscalização tributária.

Seção II

Da Educação

Art. 12. A certificação ou sua renovação será concedida à entidade de educação que atenda ao disposto nesta Seção e na legislação aplicável.

Parágrafo único. As entidades de educação certificadas na forma desta Lei deverão prestar informações ao Censo da Educação Básica e ao Censo da Educação Superior, conforme definido pelo Ministério da Educação. (Incluído pela Lei nº 12.868, de 2013)

Art. 12-A. As bolsas de estudo concedidas no âmbito do processo de certificação de entidades beneficentes de assistência social de que trata esta Lei constituem-se em instrumentos de promoção da política pública de acesso à educação do Ministério da Educação. (Incluído pela Lei nº 13.530, de 2017)

Art. 13. Para os fins da concessão da certificação de que trata esta Lei, a entidade de educação deverá aplicar anualmente em gratuidade, na forma do § 1o, pelo menos 20% (vinte por cento) da receita anual efetivamente recebida nos termos da Lei no 9.870, de 23 de novembro de 1999.

Art. 13. Para fins de concessão ou renovação da certificação, a entidade de educação que atua nas diferentes etapas e modalidades da educação básica, regular e presencial, deverá: (Redação dada pela Lei nº 12.868, de 2013) (Vide ADIN 4480)

I - demonstrar sua adequação às diretrizes e metas estabelecidas no Plano Nacional de Educacao (PNE), na forma do art. 214 da Constituição Federal; (Incluído pela Lei nº 12.868, de 2013)

II - atender a padrões mínimos de qualidade, aferidos pelos processos de avaliação conduzidos pelo Ministério da Educação; e (Incluído pela Lei nº 12.868, de 2013)

III - conceder anualmente bolsas de estudo na proporção de 1 (uma) bolsa de estudo integral para cada 5 (cinco) alunos pagantes. (Incluído pela Lei nº 12.868, de 2013)

§ 1o Para o cumprimento do disposto no caput, a entidade deverá:

§ 1o Para o cumprimento da proporção descrita no inciso III do caput, a entidade poderá oferecer bolsas de estudo parciais, observadas as seguintes condições: (Redação dada pela Lei nº 12.868, de 2013) (Vide ADIN 4480)

I - demonstrar adequação às diretrizes e metas estabelecidas no Plano Nacional de Educacao - PNE, na forma do art. 214 da Constituição Federal;

I - no mínimo, 1 (uma) bolsa de estudo integral para cada 9 (nove) alunos pagantes; e (Redação dada pela Lei nº 12.868, de 2013) (Vide ADIN 4480)

II - atender a padrões mínimos de qualidade, aferidos pelos processos de avaliação conduzidos pelo Ministério da Educação; e

II - bolsas de estudo parciais de 50% (cinquenta por cento), quando necessário para o alcance do número mínimo exigido, conforme definido em regulamento; (Redação dada pela Lei nº 12.868, de 2013) (Vide ADIN 4480)

III - oferecer bolsas de estudo nas seguintes proporções:

a) no mínimo, uma bolsa de estudo integral para cada 9 (nove) alunos pagantes da educação básica;

b) bolsas parciais de 50% (cinquenta por cento), quando necessário para o alcance do número mínimo exigido.

III - (revogado); (Redação dada pela Lei nº 12.868, de 2013) (Vide ADIN 4480)

a) (revogada); (Redação dada pela Lei nº 12.868, de 2013)

b) (revogada). (Redação dada pela Lei nº 12.868, de 2013)

§ 2o As proporções previstas no inciso III do § 1o poderão ser cumpridas considerando-se diferentes etapas e modalidades da educação básica presencial.

§ 2o Será facultado à entidade substituir até 25% (vinte e cinco por cento) da quantidade das bolsas de estudo definidas no inciso III do caput e no § 1o por benefícios complementares, concedidos aos alunos matriculados cuja renda familiar mensal per capita não exceda o valor de 1 (um) salário-mínimo e meio, como transporte, uniforme, material didático, moradia, alimentação e outros benefícios definidos em regulamento. (Redação dada pela Lei nº 12.868, de 2013)

§ 2o Será facultado à entidade substituir até 25% (vinte e cinco por cento) da quantidade das bolsas de estudo definidas no inciso III do caput e no § 1o por benefícios concedidos a beneficiários cuja renda familiar mensal per capita não exceda o valor de um salário mínimo e meio, tais como transporte, uniforme, material didático, moradia, alimentação e outros benefícios, ações e serviços definidos em ato do Ministro de Estado da Educação. (Redação dada pela Lei nº 13.043, de 2014) (Vide ADIN 4480)

§ 3o Complementarmente, para o cumprimento das proporções previstas no inciso III do § 1o, a entidade poderá contabilizar o montante destinado a ações assistenciais, bem como o ensino gratuito da educação básica em unidades específicas, programas de apoio a alunos bolsistas, tais como transporte, uniforme, material didático, além de outros, definidos em regulamento, até o montante de 25% (vinte e cinco por cento) da gratuidade prevista no caput.

§ 3o Admite-se o cumprimento do percentual disposto no § 2o com projetos e atividades para a garantia da educação em tempo integral para alunos matriculados na educação básica em escolas públicas, desde que em articulação com as respectivas instituições públicas de ensino, na forma definida pelo Ministério da Educação. (Redação dada pela Lei nº 12.868, de 2013) (Vide ADIN 4480)

§ 4o Para alcançar a condição prevista no § 3o, a entidade poderá observar a escala de adequação sucessiva, em conformidade com o exercício financeiro de vigência desta Lei:

I - até 75% (setenta e cinco por cento) no primeiro ano;

II - até 50% (cinquenta por cento) no segundo ano;

III - 25% (vinte e cinco por cento) a partir do terceiro ano.

§ 4o Para fins do cumprimento da proporção de que trata o inciso III do caput: (Redação dada pela Lei nº 12.868, de 2013) (Vide ADIN 4480)

I - cada bolsa de estudo integral concedida a aluno com deficiência, assim declarado ao Censo da Educação Básica, equivalerá a 1,2 (um inteiro e dois décimos) do valor da bolsa de estudo integral; e (Redação dada pela Lei nº 12.868, de 2013) (Vide ADIN 4480)

II - cada bolsa de estudo integral concedida a aluno matriculado na educação básica em tempo integral equivalerá a 1,4 (um inteiro e quatro décimos) do valor da bolsa de estudo integral; (Redação dada pela Lei nº 12.868, de 2013) (Vide ADIN 4480)

III - (revogado). (Redação dada pela Lei nº 12.868, de 2013) (Vide ADIN 4480)

§ 5o Consideram-se ações assistenciais aquelas previstas na Lei no 8.742, de 7 de dezembro de 1993.

§ 5o As equivalências previstas nos incisos I e II do § 4o não poderão ser cumulativas. (Redação dada pela Lei nº 12.868, de 2013) (Vide ADIN 4480)

§ 6o Para a entidade que, além de atuar na educação básica ou em área distinta da educação, também atue na educação superior, aplica-se o disposto no art. 10 da Lei no 11.096, de 13 de janeiro de 2005.

§ 6o Considera-se, para fins do disposto nos §§ 3o e 4o, educação básica em tempo integral a jornada escolar com duração igual ou superior a 7 (sete) horas diárias, durante todo o período letivo, e compreende tanto o tempo em que o aluno permanece na escola como aquele em que exerce atividades escolares em outros espaços educacionais, conforme definido pelo Ministério da Educação. (Redação dada pela Lei nº 12.868, de 2013) (Vide ADIN 4480)

§ 7o As entidades de educação que prestam serviços integralmente gratuitos deverão garantir a observância da proporção de, no mínimo, 1 (um) aluno cuja renda familiar mensal per capita não exceda o valor de um salário-mínimo e meio para cada 5 (cinco) alunos matriculados. (Incluído pela Lei nº 12.868, de 2013) (Vide ADIN 4480)

Art. 13-A. Para fins de concessão e de renovação da certificação, as entidades que atuam na educação superior e que aderiram ao Programa Universidade para Todos (Prouni), na forma do caput do art. 11 da Lei no 11.096, de 13 de janeiro de 2005, deverão atender às condições previstas nos incisos do caput e nos §§ 1o, 2o e 7o do art. 13 desta Lei. (Incluído pela Lei nº 12.868, de 2013)

§ 1o As entidades que atuam concomitantemente no nível de educação superior e que tenham aderido ao Prouni e no de educação básica estão obrigadas a cumprir os requisitos exigidos no art. 13, para cada nível de educação, inclusive quanto à complementação eventual da gratuidade por meio da concessão de bolsas de estudo parciais de 50% (cinquenta por cento) e de benefícios complementares, conforme previsto nos §§ 1o e 2o do art. 13. (Incluído pela Lei nº 12.868, de 2013)

§ 1o As entidades que atuam concomitantemente no nível de educação superior e que tenham aderido ao Prouni e no de educação básica estão obrigadas a cumprir os requisitos exigidos no art. 13, para cada nível de educação, inclusive quanto à complementação eventual da gratuidade por meio da concessão de bolsas de estudo parciais de 50% (cinquenta por cento) e de benefícios, conforme previsto nos §§ 1o e 2o do art. 13. (Redação dada pela Lei nº 13.043, de 2014)

§ 2o Somente serão aceitas no âmbito da educação superior bolsas de estudo vinculadas ao Prouni, salvo as bolsas integrais ou parciais de 50% (cinquenta por cento) para pós-graduação stricto sensu. (Incluído pela Lei nº 12.868, de 2013)

§ 3o Excepcionalmente, serão aceitas como gratuidade, no âmbito da educação superior, as bolsas de estudo integrais ou parciais de 50% (cinquenta por cento) oferecidas fora do Prouni aos alunos enquadrados nos arts. 14 e 15, desde que a entidade tenha cumprido a proporção de uma bolsa de estudo integral para cada 9 (nove) alunos pagantes no Prouni e que tenha ofertado bolsas no âmbito do Prouni que não tenham sido preenchidas. (Incluído pela Lei nº 12.868, de 2013)

§ 4o Para os fins do disposto neste artigo, somente serão computadas as bolsas concedidas em cursos de graduação ou sequencial de formação específica regulares, além das bolsas para pós-graduação stricto sensu previstas no § 2o. (Incluído pela Lei nº 12.868, de 2013)

Art. 13-B. Para os fins da concessão da certificação, as entidades que atuam na educação superior e que não tenham aderido ao Prouni na forma do art. 10 da Lei nº 11.096, de 13 de janeiro de 2005, deverão: (Incluído pela Lei nº 12.868, de 2013)

I - atender ao disposto nos incisos I e II do caput do art. 13; e (Incluído pela Lei nº 12.868, de 2013)

II - conceder anualmente bolsas de estudo na proporção de 1 (uma) bolsa de estudo integral para cada 4 (quatro) alunos pagantes. (Incluído pela Lei nº 12.868, de 2013)

§ 1o Para o cumprimento da proporção descrita no inciso II do caput, a entidade poderá oferecer bolsas de estudo parciais, desde que conceda: (Incluído pela Lei nº 12.868, de 2013)

I - no mínimo, 1 (uma) bolsa de estudo integral para cada 9 (nove) alunos pagantes; e (Incluído pela Lei nº 12.868, de 2013)

II - bolsas de estudo parciais de 50% (cinquenta por cento), quando necessário para o alcance do número mínimo exigido, conforme definido em regulamento. (Incluído pela Lei nº 12.868, de 2013)

§ 2o Será facultado à entidade que atue na educação superior substituir até 25% (vinte e cinco por cento) das bolsas de estudo definidas no inciso II do caput e no § 1o por benefícios complementares, concedidos aos alunos matriculados cuja renda familiar mensal per capita não exceda o valor de um salário-mínimo e meio, como transporte, uniforme, material didático, moradia, alimentação e outros benefícios definidos em regulamento. (Incluído pela Lei nº 12.868, de 2013)

§ 2o Será facultado à entidade substituir até 25% (vinte e cinco por cento) da quantidade das bolsas de estudo definidas no inciso II do caput e no § 1o por benefícios concedidos a beneficiários cuja renda familiar mensal per capita não exceda o valor de um salário mínimo e meio, tais como transporte, uniforme, material didático, moradia, alimentação e outros benefícios, ações e serviços definidos em ato do Ministro de Estado da Educação. (Redação dada pela Lei nº 13.043, de 2014)

§ 3o Sem prejuízo da proporção definida no inciso II do caput, a entidade de educação deverá ofertar, em cada uma de suas instituições de ensino superior, no mínimo, 1 (uma) bolsa integral para cada 25 (vinte e cinco) alunos pagantes.

§ 4o A entidade deverá ofertar bolsa integral em todos os cursos de todas as instituições de ensino superior por ela mantidos. (Incluído pela Lei nº 12.868, de 2013)

§ 5o As entidades que atuam concomitantemente na educação superior e na educação básica são obrigadas a cumprir os requisitos exigidos no art. 13 e neste artigo de maneira segregada, por nível de educação, inclusive quanto à eventual complementação da gratuidade por meio da concessão de bolsas de estudo parciais de 50% (cinquenta por cento) e de benefícios complementares. (Incluído pela Lei nº 12.868, de 2013)

§ 5o As entidades que atuam concomitantemente na educação superior e na educação básica são obrigadas a cumprir os requisitos exigidos no art. 13 e neste artigo de maneira segregada, por nível de educação, inclusive quanto à eventual complementação da gratuidade por meio da concessão de bolsas de estudo parciais de 50% (cinquenta por cento) e de benefícios. (Redação dada pela Lei nº 13.043, de 2014)

§ 6o Para os fins do disposto neste artigo, somente serão computadas as bolsas concedidas em cursos de graduação ou sequencial de formação específica regulares. (Incluído pela Lei nº 12.868, de 2013)

Art. 13-C. Consideram-se alunos pagantes, para fins de aplicação das proporções previstas nos arts. 13, 13-A e 13-B, o total de alunos que não possuem bolsas de estudo integrais. (Incluído pela Lei nº 12.868, de 2013)

§ 1o Na aplicação das proporções previstas nos arts. 13-A e 13-B, serão considerados os alunos pagantes matriculados em cursos de graduação ou sequencial de formação específica regulares. (Incluído pela Lei nº 12.868, de 2013)

§ 2o Não se consideram alunos pagantes os inadimplentes por período superior a 90 (noventa) dias, cujas matrículas tenham sido recusadas no período letivo imediatamente subsequente ao inadimplemento, conforme definido em regulamento. (Incluído pela Lei nº 12.868, de 2013)

Art. 14. Para os efeitos desta Lei, a bolsa de estudo refere-se às semestralidades ou anuidades escolares fixadas na forma da lei, vedada a cobrança de taxa de matrícula e de custeio de material didático. (Vide ADIN 4480)

§ 1o A bolsa de estudo integral será concedida a aluno cuja renda familiar mensal per capita não exceda o valor de 1 1/2 (um e meio) salário mínimo. (Vide ADIN 4480)

§ 2o A bolsa de estudo parcial será concedida a aluno cuja renda familiar mensal per capita não exceda o valor de 3 (três) salários mínimos. (Vide ADIN 4480)

Art. 15. Para fins da certificação a que se refere esta Lei, o aluno a ser beneficiado será pré-selecionado pelo perfil socioeconômico e, cumulativamente, por outros critérios definidos pelo Ministério da Educação.

§ 1o Os alunos beneficiários das bolsas de estudo de que trata esta Lei ou seus pais ou responsáveis, quando for o caso, respondem legalmente pela veracidade e autenticidade das informações socioeconômicas por eles prestadas.

§ 1o Os alunos beneficiários das bolsas de estudo de que trata esta Lei, ou seus pais ou responsáveis, quando for o caso, respondem legalmente pela veracidade e autenticidade das informações por eles prestadas. (Redação dada pela Lei nº 13.530, de 2017)

§ 2o Compete à entidade de educação aferir as informações relativas ao perfil socioeconômico do candidato.

§ 2o Compete à entidade de educação confirmar o atendimento, pelo candidato, ao perfil socioeconômico e aos demais critérios estabelecidos pelo Ministério da Educação. (Redação dada pela Lei nº 13.530, de 2017)

§ 3o As bolsas de estudo poderão ser canceladas a qualquer tempo, em caso de constatação de falsidade da informação prestada pelo bolsista ou seu responsável, ou de inidoneidade de documento apresentado, sem prejuízo das demais sanções cíveis e penais cabíveis.

§ 4o Os estudantes a serem beneficiados pelas bolsas de estudo para os cursos de graduação poderão ser pré-selecionados pelos resultados do Exame Nacional do Ensino Médio (Enem). (Incluído pela Lei nº 13.530, de 2017)

§ 5o É vedado ao estudante acumular bolsas de estudo em entidades de educação certificadas na forma desta Lei. (Incluído pela Lei nº 13.530, de 2017)

§ 6o O Ministério da Educação disporá sobre os procedimentos para seleção de bolsistas, especialmente quanto à sua operacionalização por meio de sistema específico. (Incluído pela Lei nº 13.530, de 2017)

Art. 16. É vedado qualquer discriminação ou diferença de tratamento entre alunos bolsistas e pagantes.

Art. 17. No ato de renovação da certificação, as entidades de educação que não tenham aplicado em gratuidade o percentual mínimo previsto no caput do art. 13 poderão compensar o percentual devido no exercício imediatamente subsequente com acréscimo de 20% (vinte por cento) sobre o percentual a ser compensado.

Parágrafo único. O disposto neste artigo alcança tão somente as entidades que tenham aplicado pelo menos 17% (dezessete por cento) em gratuidade, na forma do art. 13, em cada exercício financeiro a ser considerado.

Art. 17. No ato de concessão ou de renovação da certificação, as entidades de educação que não tenham aplicado em gratuidade o percentual mínimo previsto no caput do art. 13 poderão compensar o percentual devido nos 3 (três) exercícios subsequentes com acréscimo de 20% (vinte por cento) sobre o percentual a ser compensado, mediante a assinatura de Termo de Compromisso, nas condições estabelecidas pelo MEC. (Redação dada pela Lei nº 12.688, de 2012)

Art. 17. No ato de concessão ou de renovação da certificação, as entidades de educação que não tenham concedido o número mínimo de bolsas previsto nos arts. 13, 13-A e 13-B poderão compensar o número de bolsas devido nos 3 (três) exercícios subsequentes com acréscimo de 20% (vinte por cento) sobre o percentual não atingido ou o número de bolsas não concedido, mediante a assinatura de Termo de Ajuste de Gratuidade, nas condições estabelecidas pelo Ministério da Educação. (Redação dada pela Lei nº 12.868, de 2013)

§ 1o Na hipótese de descumprimento do Termo de Compromisso, a certificação da entidade será cancelada relativamente a todo o seu período de validade. (Incluído Lei nº 12.688, de 2012)

§ 1o Após a publicação da decisão relativa ao julgamento do requerimento de concessão ou de renovação da certificação na primeira instância administrativa, as entidades de educação a que se refere o caput disporão do prazo improrrogável de 30 (trinta) dias para requerer a assinatura do Termo de Ajuste de Gratuidade. (Redação dada pela Lei nº 12.868, de 2013)

§ 2o O Termo de Compromisso poderá ser celebrado somente 1 (uma) vez com cada entidade. (Incluído Lei nº 12.688, de 2012)

§ 2o Na hipótese de descumprimento do Termo de Ajuste de Gratuidade, a certificação da entidade será cancelada relativamente a todo o seu período de validade. (Redação dada pela Lei nº 12.868, de 2013)

§ 3o O disposto neste artigo aplica-se também aos percentuais mínimos previstos no § 1º do art. 10 e no inciso I do art. 11 da Lei no 11.096, de 13 de janeiro de 2005. (Incluído Lei nº 12.688, de 2012)

§ 3o O Termo de Ajuste de Gratuidade poderá ser celebrado somente 1 (uma) vez com cada entidade. (Redação dada pela Lei nº 12.868, de 2013)

§ 3o O Termo de Ajuste de Gratuidade poderá ser celebrado somente uma vez com a mesma entidade a cada período de 10 (dez) anos, a contar da data da assinatura do último termo e desde que este tenha sido devidamente cumprido. (Redação dada pela Lei nº 13.043, de 2014)

§ 4o As bolsas de pós-graduação stricto sensu poderão integrar o percentual de acréscimo de compensação de 20% (vinte por cento), desde que se refiram a áreas de formação definidas pelo Ministério da Educação. (Incluído pela Lei nº 12.868, de 2013)

Seção III

Da Assistência Social

Art. 18. A certificação ou sua renovação será concedida à entidade de assistência social que presta serviços ou realiza ações assistenciais, de forma gratuita, continuada e planejada, para os usuários e a quem deles necessitar, sem qualquer discriminação, observada a Lei nº 8.742, de 7 de dezembro de 1993.

Art. 18. A certificação ou sua renovação será concedida à entidade de assistência social que presta serviços ou realiza ações socioassistenciais, de forma gratuita, continuada e planejada, para os usuários e para quem deles necessitar, sem discriminação, observada a Lei nº 8.742, de 7 de dezembro de 1993. (Redação dada pela Lei nº 12.868, de 2013) (Vide ADIN 4480)

§ 1o As entidades de assistência social a que se refere o caput são aquelas que prestam, sem fins lucrativos, atendimento e assessoramento aos beneficiários, bem como as que atuam na defesa e garantia de seus direitos.

§ 1o Consideram-se entidades de assistência social aquelas que prestam, sem fins lucrativos, atendimento e assessoramento aos beneficiários abrangidos pela Lei nº 8.742, de 7 de dezembro de 1993, e as que atuam na defesa e garantia de seus direitos. (Redação dada pela Lei nº 12.868, de 2013)

§ 2o As entidades que prestam serviços com objetivo de habilitação e reabilitação de pessoa com deficiência e de promoção da sua integração à vida comunitária e aquelas abrangidas pelo disposto no art. 35 da Lei no 10.741, de 1o de outubro de 2003, poderão ser certificadas, desde que comprovem a oferta de, no mínimo, 60% (sessenta por cento) de sua capacidade de atendimento ao sistema de assistência social.

§ 2o Observado o disposto no caput e no § 1o, também são consideradas entidades de assistência social: (Redação dada pela Lei nº 12.868, de 2013)

I - as que prestam serviços ou ações socioassistenciais, sem qualquer exigência de contraprestação dos usuários, com o objetivo de habilitação e reabilitação da pessoa com deficiência e de promoção da sua inclusão à vida comunitária, no enfrentamento dos limites existentes para as pessoas com deficiência, de forma articulada ou não com ações educacionais ou de saúde; (Incluído pela Lei nº 12.868, de 2013)

II - as de que trata o inciso II do art. 430 da Consolidação das Leis do Trabalho ( CLT), aprovada pelo Decreto-Lei no 5.452, de 1o de maio de 1943, desde que os programas de aprendizagem de adolescentes, de jovens ou de pessoas com deficiência sejam prestados com a finalidade de promover a integração ao mercado de trabalho, nos termos da Lei nº 8.742, de 7 de dezembro de 1993, observadas as ações protetivas previstas na Lei no 8.069, de 13 de julho de 1990; e (Incluído pela Lei nº 12.868, de 2013)

III - as que realizam serviço de acolhimento institucional provisório de pessoas e de seus acompanhantes, que estejam em trânsito e sem condições de autossustento, durante o tratamento de doenças graves fora da localidade de residência, observada a Lei no 8.742, de 7 de dezembro de 1993. (Incluído pela Lei nº 12.868, de 2013)

§ 3o A capacidade de atendimento de que trata o § 2o será definida anualmente pela entidade, aprovada pelo órgão gestor de assistência social municipal ou distrital e comunicada ao Conselho Municipal de Assistência Social.

§ 3o Desde que observado o disposto no caput e no § 1o deste artigo e no art. 19, exceto a exigência de gratuidade, as entidades referidas no art. 35 da Lei no 10.741, de 1o de outubro de 2003, poderão ser certificadas, com a condição de que eventual cobrança de participação do idoso no custeio da entidade se dê nos termos e limites do § 2o do art. 35 da Lei no 10.741, de 1o de outubro de 2003. (Redação dada pela Lei nº 12.868, de 2013)

§ 4o As entidades certificadas como de assistência social terão prioridade na celebração de convênios, contratos, acordos ou ajustes com o poder público para a execução de programas, projetos e ações de assistência social.

§ 4o As entidades certificadas como de assistência social terão prioridade na celebração de convênios, contratos ou instrumentos congêneres com o poder público para a execução de programas, projetos e ações de assistência social. (Redação dada pela Lei nº 12.868, de 2013)

Art. 19. Constituem ainda requisitos para a certificação de uma entidade de assistência social:

I - estar inscrita no respectivo Conselho Municipal de Assistência Social ou no Conselho de Assistência Social do Distrito Federal, conforme o caso, nos termos do art. 9º da Lei nº 8.742, de 7 de dezembro de 1993; e

II - integrar o cadastro nacional de entidades e organizações de assistência social de que trata o inciso XI do art. 19 da Lei nº 8.742, de 7 de dezembro de 1993.

§ 1o Quando a entidade de assistência social atuar em mais de um Município ou Estado ou em quaisquer destes e no Distrito Federal, deverá inscrever suas atividades no Conselho de Assistência Social do respectivo Município de atuação ou do Distrito Federal, mediante a apresentação de seu plano ou relatório de atividades e do comprovante de inscrição no Conselho de sua sede ou de onde desenvolva suas principais atividades.

§ 2o Quando não houver Conselho de Assistência Social no Município, as entidades de assistência social dever-se-ão inscrever nos respectivos Conselhos Estaduais.

Art. 20. A comprovação do vínculo da entidade de assistência social à rede socioassistencial privada no âmbito do SUAS é condição suficiente para a concessão da certificação, no prazo e na forma a serem definidos em regulamento.

Seção IV

Da Concessão e do Cancelamento

Art. 21. A análise e decisão dos requerimentos de concessão ou de renovação dos certificados das entidades beneficentes de assistência social serão apreciadas no âmbito dos seguintes Ministérios:

I - da Saúde, quanto às entidades da área de saúde;

II - da Educação, quanto às entidades educacionais; e

III - do Desenvolvimento Social e Combate à Fome, quanto às entidades de assistência social.

§ 1o A entidade interessada na certificação deverá apresentar, juntamente com o requerimento, todos os documentos necessários à comprovação dos requisitos de que trata esta Lei, na forma do regulamento.

§ 2o A tramitação e a apreciação do requerimento deverão obedecer à ordem cronológica de sua apresentação, salvo em caso de diligência pendente, devidamente justificada.

§ 2o A tramitação e a apreciação do requerimento deverão obedecer à ordem cronológica de sua apresentação, salvo em caso de diligência pendente, devidamente justificada, ou no caso de entidade ou instituição sem fins lucrativos e organização da sociedade civil que celebrem parceria para executar projeto, atividade ou serviço em conformidade com acordo de cooperação internacional do qual a República Federativa do Brasil seja parte. (Redação dada pela Lei nº 13.204, de 2015)

§ 3o O requerimento será apreciado no prazo a ser estabelecido em regulamento, observadas as peculiaridades do Ministério responsável pela área de atuação da entidade.

§ 4o O prazo de validade da certificação será fixado em regulamento, observadas as especificidades de cada uma das áreas e o prazo mínimo de 1 (um) ano e máximo de 5 (cinco) anos.

§ 4o O prazo de validade da certificação será de 1 (um) a 5 (cinco) anos, conforme critérios definidos em regulamento. (Redação dada pela Lei nº 12.868, de 2013)

§ 5o O processo administrativo de certificação deverá, em cada Ministério envolvido, contar com plena publicidade de sua tramitação, devendo permitir à sociedade o acompanhamento pela internet de todo o processo.

§ 6o Os Ministérios responsáveis pela certificação deverão manter, nos respectivos sítios na internet, lista atualizada com os dados relativos aos certificados emitidos, seu período de vigência e sobre as entidades certificadas, incluindo os serviços prestados por essas dentro do âmbito certificado e recursos financeiros a elas destinados.

Art. 22. A entidade que atue em mais de uma das áreas especificadas no art. 1o deverá requerer a certificação e sua renovação no Ministério responsável pela área de atuação preponderante da entidade.

Parágrafo único. Considera-se área de atuação preponderante aquela definida como atividade econômica principal no Cadastro Nacional da Pessoa Jurídica do Ministério da Fazenda.

Art. 23. (VETADO)

Art. 23-A. As entidades de que trata o inciso I do § 2o do art. 18 serão certificadas exclusivamente pelo Ministério do Desenvolvimento Social e Combate à Fome, ainda que exerçam suas atividades em articulação com ações educacionais ou de saúde, dispensadas a manifestação do Ministério da Saúde e do Ministério da Educação e a análise do critério da atividade preponderante previsto no art. 22. (Incluído pela Lei nº 12.868, de 2013)

Parágrafo único. Para a certificação das entidades de que trata o inciso I do § 2o do art. 18, cabe ao Ministério do Desenvolvimento Social e Combate à Fome verificar, além dos requisitos do art. 19, o atendimento ao disposto:

I - no parágrafo único do art. 5o, pelas entidades que exerçam suas atividades em articulação com ações de saúde; e (Incluído pela Lei nº 12.868, de 2013)

II - no parágrafo único do art. 12, pelas entidades que exerçam suas atividades em articulação com ações educacionais. (Incluído pela Lei nº 12.868, de 2013)

Art. 24. Os Ministérios referidos no art. 21 deverão zelar pelo cumprimento das condições que ensejaram a certificação da entidade como beneficente de assistência social, cabendo-lhes confirmar que tais exigências estão sendo atendidas por ocasião da apreciação do pedido de renovação da certificação.

§ 1o O requerimento de renovação da certificação deverá ser protocolado com antecedência mínima de 6 (seis) meses do termo final de sua validade.

§ 1o Será considerado tempestivo o requerimento de renovação da certificação protocolado no decorrer dos 360 (trezentos e sessenta) dias que antecedem o termo final de validade do certificado. (Redação dada pela Lei nº 12.868, de 2013)

§ 2o A certificação da entidade permanecerá válida até a data da decisão sobre o requerimento de renovação tempestivamente apresentado.

§ 3o Os requerimentos protocolados antes de 360 (trezentos e sessenta) dias do termo final de validade do certificado não serão conhecidos. (Incluído pela Lei nº 12.868, de 2013)

Art. 25. Constatada, a qualquer tempo, a inobservância de exigência estabelecida neste Capítulo, será cancelada a certificação, nos termos de regulamento, assegurado o contraditório e a ampla defesa.

CAPÍTULO III
DOS RECURSOS E DA REPRESENTAÇÃO

Art. 26. Da decisão que indeferir o requerimento para concessão ou renovação de certificação e da decisão que cancelar a certificação caberá recurso por parte da entidade interessada, assegurados o contraditório, a ampla defesa e a participação da sociedade civil, na forma definida em regulamento, no prazo de 30 (trinta) dias, contado da publicação da decisão.

§ 1o O disposto no caput não impede o lançamento de ofício do crédito tributário correspondente. (Incluído pela Lei nº 12.868, de 2013)

§ 2o Se o lançamento de ofício a que se refere o § 1o for impugnado no tocante aos requisitos de certificação, a autoridade julgadora da impugnação aguardará o julgamento da decisão que julgar o recurso de que trata o caput. (Incluído pela Lei nº 12.868, de 2013)

§ 3o O sobrestamento do julgamento de que trata o § 2o não impede o trâmite processual de eventual processo administrativo fiscal relativo ao mesmo ou outro lançamento de ofício, efetuado por descumprimento aos requisitos de que trata o art. 29. (Incluído pela Lei nº 12.868, de 2013)

§ 4o Se a decisão final for pela procedência do recurso, o lançamento fundado nos requisitos de certificação, efetuado nos termos do § 1o, será objeto de comunicação, pelo ministério certificador, à Secretaria da Receita Federal do Brasil, que o cancelará de ofício. (Incluído pela Lei nº 12.868, de 2013)

Art. 27. Verificado prática de irregularidade na entidade certificada, são competentes para representar, motivadamente, ao Ministério responsável pela sua área de atuação, sem prejuízo das atribuições do Ministério Público:

I - o gestor municipal ou estadual do SUS ou do SUAS, de acordo com a sua condição de gestão, bem como o gestor da educação municipal, distrital ou estadual;

II - a Secretaria da Receita Federal do Brasil;

III - os conselhos de acompanhamento e controle social previstos na Lei no 11.494, de 20 de junho de 2007, e os Conselhos de Assistência Social e de Saúde; e

IV - o Tribunal de Contas da União.

Parágrafo único. A representação será dirigida ao Ministério que concedeu a certificação e conterá a qualificação do representante, a descrição dos fatos a serem apurados e, sempre que possível, a documentação pertinente e demais informações relevantes para o esclarecimento do seu objeto.

Art. 28. Caberá ao Ministério competente:

I - dar ciência da representação à entidade, que terá o prazo de 30 (trinta) dias para apresentação de defesa; e

II - decidir sobre a representação, no prazo de 30 (trinta) dias a contar da apresentação da defesa.

§ 1o Se improcedente a representação de que trata o inciso II, o processo será arquivado.

§ 2o Se procedente a representação de que trata o inciso II, após decisão final ou transcorrido o prazo para interposição de recurso, a autoridade responsável deverá cancelar a certificação e dar ciência do fato à Secretaria da Receita Federal do Brasil.

§ 3o O representante será cientificado das decisões de que tratam os §§ 1o e 2o.

CAPÍTULO IV
DA ISENÇÃO

Seção I

Dos Requisitos

Art. 29. A entidade beneficente certificada na forma do Capítulo II fará jus à isenção do pagamento das contribuições de que tratam os arts. 22 e 23 da Lei nº 8.212, de 24 de julho de 1991, desde que atenda, cumulativamente, aos seguintes requisitos: (Vide ADIN 4480)

I - não percebam seus diretores, conselheiros, sócios, instituidores ou benfeitores, remuneração, vantagens ou benefícios, direta ou indiretamente, por qualquer forma ou título, em razão das competências, funções ou atividades que lhes sejam atribuídas pelos respectivos atos constitutivos;

I - não percebam, seus dirigentes estatutários, conselheiros, sócios, instituidores ou benfeitores, remuneração, vantagens ou benefícios, direta ou indiretamente, por qualquer forma ou título, em razão das competências, funções ou atividades que lhes sejam atribuídas pelos respectivos atos constitutivos; (Redação dada pela Lei nº 12.868, de 2013)

I – não percebam seus diretores, conselheiros, sócios, instituidores ou benfeitores remuneração, vantagens ou benefícios, direta ou indiretamente, por qualquer forma ou título, em razão das competências, funções ou atividades que lhes sejam atribuídas pelos respectivos atos constitutivos, exceto no caso de associações assistenciais ou fundações, sem fins lucrativos, cujos dirigentes poderão ser remunerados, desde que atuem efetivamente na gestão executiva, respeitados como limites máximos os valores praticados pelo mercado na região correspondente à sua área de atuação, devendo seu valor ser fixado pelo órgão de deliberação superior da entidade, registrado em ata, com comunicação ao Ministério Público, no caso das fundações; (Redação dada pela Lei nº 13.151, de 2015)

II - aplique suas rendas, seus recursos e eventual superávit integralmente no território nacional, na manutenção e desenvolvimento de seus objetivos institucionais;

III - apresente certidão negativa ou certidão positiva com efeito de negativa de débitos relativos aos tributos administrados pela Secretaria da Receita Federal do Brasil e certificado de regularidade do Fundo de Garantia do Tempo de Serviço - FGTS;

IV - mantenha escrituração contábil regular que registre as receitas e despesas, bem como a aplicação em gratuidade de forma segregada, em consonância com as normas emanadas do Conselho Federal de Contabilidade;

V - não distribua resultados, dividendos, bonificações, participações ou parcelas do seu patrimônio, sob qualquer forma ou pretexto;

VI - conserve em boa ordem, pelo prazo de 10 (dez) anos, contado da data da emissão, os documentos que comprovem a origem e a aplicação de seus recursos e os relativos a atos ou operações realizados que impliquem modificação da situação patrimonial;

VII - cumpra as obrigações acessórias estabelecidas na legislação tributária;

VIII - apresente as demonstrações contábeis e financeiras devidamente auditadas por auditor independente legalmente habilitado nos Conselhos Regionais de Contabilidade quando a receita bruta anual auferida for superior ao limite fixado pela Lei Complementar no 123, de 14 de dezembro de 2006.

§ 1o A exigência a que se refere o inciso I do caput não impede: (Incluído pela Lei nº 12.868, de 2013)

I - a remuneração aos diretores não estatutários que tenham vínculo empregatício; (Incluído pela Lei nº 12.868, de 2013)

II - a remuneração aos dirigentes estatutários, desde que recebam remuneração inferior, em seu valor bruto, a 70% (setenta por cento) do limite estabelecido para a remuneração de servidores do Poder Executivo federal. (Incluído pela Lei nº 12.868, de 2013)

§ 2o A remuneração dos dirigentes estatutários referidos no inciso II do § 1o deverá obedecer às seguintes condições: (Incluído pela Lei nº 12.868, de 2013)

I - nenhum dirigente remunerado poderá ser cônjuge ou parente até 3o (terceiro) grau, inclusive afim, de instituidores, sócios, diretores, conselheiros, benfeitores ou equivalentes da instituição de que trata o caput deste artigo; e (Incluído pela Lei nº 12.868, de 2013)

II - o total pago a título de remuneração para dirigentes, pelo exercício das atribuições estatutárias, deve ser inferior a 5 (cinco) vezes o valor correspondente ao limite individual estabelecido neste parágrafo. (Incluído pela Lei nº 12.868, de 2013)

§ 3o O disposto nos §§ 1o e 2o não impede a remuneração da pessoa do dirigente estatutário ou diretor que, cumulativamente, tenha vínculo estatutário e empregatício, exceto se houver incompatibilidade de jornadas de trabalho. (Incluído pela Lei nº 12.868, de 2013)

Art. 30. A isenção de que trata esta Lei não se estende a entidade com personalidade jurídica própria constituída e mantida pela entidade à qual a isenção foi concedida.

Seção II

Do Reconhecimento e da Suspensão do Direito à Isenção

Art. 31. O direito à isenção das contribuições sociais poderá ser exercido pela entidade a contar da data da publicação da concessão de sua certificação, desde que atendido o disposto na Seção I deste Capítulo. (Vide ADIN 4480)

Art. 32. Constatado o descumprimento pela entidade dos requisitos indicados na Seção I deste Capítulo, a fiscalização da Secretaria da Receita Federal do Brasil lavrará o auto de infração relativo ao período correspondente e relatará os fatos que demonstram o não atendimento de tais requisitos para o gozo da isenção. (Vide ADIN 4480)

§ 1o Considerar-se-á automaticamente suspenso o direito à isenção das contribuições referidas no art. 31 durante o período em que se constatar o descumprimento de requisito na forma deste artigo, devendo o lançamento correspondente ter como termo inicial a data da ocorrência da infração que lhe deu causa.

§ 2o O disposto neste artigo obedecerá ao rito do processo administrativo fiscal vigente.

CAPÍTULO V
DISPOSIÇÕES GERAIS E TRANSITÓRIAS

Art. 33. A entidade que atue em mais de uma das áreas a que se refere o art. 1o deverá, na forma de regulamento, manter escrituração contábil segregada por área, de modo a evidenciar o patrimônio, as receitas, os custos e as despesas de cada atividade desempenhada.

Art. 34. Os pedidos de concessão originária de Certificado de Entidade Beneficente de Assistência Social que não tenham sido objeto de julgamento até a data de publicação desta Lei serão remetidos, de acordo com a área de atuação da entidade, ao Ministério responsável, que os julgará nos termos da legislação em vigor à época da protocolização do requerimento.

§ 1o Caso a entidade requerente atue em mais de uma das áreas abrangidas por esta Lei, o pedido será remetido ao Ministério responsável pela área de atuação preponderante da entidade.

§ 2o Das decisões proferidas nos termos do caput que sejam favoráveis às entidades não caberá recurso.

§ 3o Das decisões de indeferimento proferidas com base no caput caberá recurso no prazo de 30 (trinta) dias, dirigido ao Ministro de Estado responsável pela área de atuação da entidade.

§ 4o É a entidade obrigada a oferecer todas as informações necessárias à análise do pedido, nos termos do art. 60 da Lei no 9.784, de 29 de janeiro de 1999.

Art. 35. Os pedidos de renovação de Certificado de Entidade Beneficente de Assistência Social protocolados e ainda não julgados até a data de publicação desta Lei serão julgados pelo Ministério da área no prazo máximo de 180 (cento e oitenta) dias a contar da referida data. (Vide Lei nº 12.868, de 2013)

§ 1o As representações em curso no CNAS, em face da renovação do certificado referida no caput, serão julgadas no prazo máximo de 180 (cento e oitenta) dias após a publicação desta Lei.

§ 2o Das decisões de indeferimento proferidas com base no caput caberá recurso no prazo de 30 (trinta) dias, com efeito suspensivo, dirigido ao Ministro de Estado responsável pela área de atuação da entidade.

Art. 36. Constatada a qualquer tempo alguma irregularidade, considerar-se-á cancelada a certificação da entidade desde a data de lavratura da ocorrência da infração, sem prejuízo da exigibilidade do crédito tributário e das demais sanções previstas em lei.

Art. 37. (VETADO)

Art. 38. As entidades certificadas até o dia imediatamente anterior ao da publicação desta Lei poderão requerer a renovação do certificado até a data de sua validade.

Art. 38-A. As certificações concedidas ou que vierem a ser concedidas com base nesta Lei para requerimentos de renovação protocolados entre 30 de novembro de 2009 e 31 de dezembro de 2011 terão prazo de validade de 5 (cinco) anos. (Incluído pela Lei nº 12.868, de 2013)

Parágrafo único. As certificações concedidas ou que vierem a ser concedidas para requerimentos de renovação protocolados entre 10 de novembro de 2008 e 31 de dezembro de 2011 terão prazo de validade de 5 (cinco) anos, no caso de entidades que atuam exclusivamente na área de assistência social ou se enquadrem nos incisos I ou IIdo § 2o do art. 18 desta Lei e que, a partir da publicação desta Lei, sejam certificadas pelo Ministério do Desenvolvimento Social e Combate à Fome. (Incluído pela Lei nº 12.868, de 2013)

Art. 38-B. As entidades de educação previstas no art. 13 que tenham protocolado requerimentos de concessão ou de renovação no período compreendido entre 30 de novembro de 2009 e 31 de dezembro de 2010 poderão ser certificadas sem a exigência de uma bolsa de estudo integral para cada 9 (nove) alunos pagantes, desde que cumpridos os demais requisitos legais. (Incluído pela Lei nº 12.868, de 2013)

CAPÍTULO VI
DISPOSIÇÕES FINAIS

Art. 39. (VETADO)

Art. 40. Os Ministérios da Saúde, da Educação e do Desenvolvimento Social e Combate à Fome informarão à Secretaria da Receita Federal do Brasil, na forma e prazo por esta determinados, os pedidos de certificação originária e de renovação deferidos, bem como os definitivamente indeferidos, nos termos da Seção IV do Capítulo II.

Parágrafo único. Os Ministérios da Saúde, da Educação e do Desenvolvimento Social e Combate à Fome procederão ao recadastramento de todas as entidades sem fins lucrativos, beneficentes ou não, atuantes em suas respectivas áreas em até 180 (cento e oitenta) dias após a data de publicação desta Lei, e tornarão os respectivos cadastros disponíveis para consulta pública.

Art. 41. As entidades isentas na forma desta Lei deverão manter, em local visível ao público, placa indicativa contendo informações sobre a sua condição de beneficente e sobre sua área de atuação, conforme o disposto no art. 1o.

Parágrafo único. As entidades referidas no caput deverão dar publicidade e manter de fácil acesso ao público todos os demonstrativos contábeis e financeiros e o relatório de atividades. (Incluído pela Lei nº 12.868, de 2013)

Art. 42. Os incisos III e IV do art. 18 da Lei no 8.742, de 7 de dezembro de 1993, passam a vigorar com a seguinte redação:

“Art. 18. ................................................
.......................................................................................
III - acompanhar e fiscalizar o processo de certificação das entidades e organizações de assistência social no Ministério do Desenvolvimento Social e Combate à Fome;
IV - apreciar relatório anual que conterá a relação de entidades e organizações de assistência social certificadas como beneficentes e encaminhá-lo para conhecimento dos Conselhos de Assistência Social dos Estados, Municípios e do Distrito Federal;
................................................................................” (NR)

Art. 43. Serão objeto de auditoria operacional os atos dos gestores públicos previstos no parágrafo único do art. 3o, no art. 8o e no § 4o do art. 11.

Art. 44. Revogam-se:

I - o art. 55 da Lei no 8.212, de 24 de julho de 1991;

II - o § 3o do art. 9o e o parágrafo único do art. 18 da Lei nº 8.742, de 7 de dezembro de 1993;

III - o art. 5o da Lei no 9.429, de 26 de dezembro de 1996, na parte que altera o art. 55 da Lei nº 8.212, de 24 de julho de 1991;

IV - o art. 1o da Lei no 9.732, de 11 de dezembro de 1998, na parte que altera o art. 55 da Lei nº 8.212, de 24 de julho de 1991;

V - o art. 21 da Lei no 10.684, de 30 de maio de 2003;

VI - o art. 3o da Medida Provisória no 2.187-13, de 24 de agosto de 2001, na parte que altera o art. 55 da Lei nº 8.212, de 24 de julho de 1991; e

VII - o art. 5º da Medida Provisória nº 2.187-13, de 24 de agosto de 2001, na parte que altera os arts. 9º e 18 da Lei nº 8.742, de 7 de dezembro de 1993.

VIII - os §§ 1o e 2o do art. 10 da Lei no 11.096, de 13 de janeiro de 2005; e (Incluído pela Lei nº 12.868, de 2013)

IX - os incisos I e II do caput do art. 11 da Lei nº 11.096, de 13 de janeiro de 2005. (Incluído pela Lei nº 12.868, de 2013)

Art. 45. Esta Lei entra em vigor na data de sua publicação.

Brasília, 27 de novembro 2009; 188o da Independência e 121o da República.

LUIZ INÁCIO LULA DA SILVA

Guido Mantega

Fernando Haddad

José Gomes Temporão

Patrus Ananias

Este texto não substitui o publicado no DOU de 30.11.2009

*

Voltar ao topo
Detalhes
Publicado por
Presidência da Republica
Tipo de documento
Legislação • Lei
Esfera
Federal
Casa
Presidência da Republica
Data de promulgação
27/11/2009
Assuntos
Constituição Federal de 1988
Lei nº 8.069, de 13 de julho de 1990
Art. 214 da Constituição Federal, de 1988
Lc nº 123 de 14 de Dezembro de 2006
Para todas as pessoas
Consulta Processual•Acompanhe seu CPF•Conheça seus direitos•Artigos•Notícias
Para profissionais
Jus IA•Jurisprudência•Doutrina•Diários Oficiais•Peças Processuais•Modelos•Legislação
Para empresas
Jusbrasil Soluções•Departamentos jurídicos•Empresas•Escritórios de advocacia•API Jusbrasil
Jusbrasil
Sobre nós•Blog Justech•Planos•Ajuda•Newsletter•Termos de Uso•Política de Privacidade•Central de Privacidade•Denúncias
A sua principal fonte de informação jurídica - © 2026 Jusbrasil. Todos os direitos reservados.

LEGISLAÇÃO

LEI Nº 12.101, DE 27 DE NOVEMBRO DE 2009

Sumário


Todos
Pesquisar no Jusbrasil

Cadastre-se
Entrar
Home
Consulta processual
Jurisprudência
Doutrina
Artigos
Notícias
Diários
Peças Processuais
Modelos
Legislação
Diretório de Advogados

LEI Nº 12.101, DE 27 DE NOVEMBRO DE 2009
Dispõe sobre a certificação das entidades beneficentes de assistência social; regula os procedimentos de isenção de contribuições para a seguridade social; altera a Lei no 8.742, de 7 de dezembro de 1993; revoga dispositivos das Leis nos 8.212, de 24 de julho de 1991, 9.429, de 26 de dezembro de 1996, 9.732, de 11 de dezembro de 1998, 10.684, de 30 de maio de 2003, e da Medida Provisória no 2.187-13, de 24 de agosto de 2001; e dá outras providências


Sumário

Mensagem de veto

Regulamento

Vide Lei nº 12.868, de 2013

Regulamento

(Revogado pela Lei Complementar nº 187, de 2021)

O PRESIDENTE DA REPÚBLICA Faço saber que o Congresso Nacional decreta e eu sanciono a seguinte Lei:

CAPÍTULO I
DISPOSIÇÕES PRELIMINARES

Art. 1o A certificação das entidades beneficentes de assistência social e a isenção de contribuições para a seguridade social serão concedidas às pessoas jurídicas de direito privado, sem fins lucrativos, reconhecidas como entidades beneficentes de assistência social com a finalidade de prestação de serviços nas áreas de assistência social, saúde ou educação, e que atendam ao disposto nesta Lei. (Vide ADIN 4480)

Parágrafo único. (VETADO)

Art. 2o As entidades de que trata o art. 1o deverão obedecer ao princípio da universalidade do atendimento, sendo vedado dirigir suas atividades exclusivamente a seus associados ou a categoria profissional.

CAPÍTULO II
DA CERTIFICAÇÃO

Art. 3o A certificação ou sua renovação será concedida à entidade beneficente que demonstre, no exercício fiscal anterior ao do requerimento, observado o período mínimo de 12 (doze) meses de constituição da entidade, o cumprimento do disposto nas Seções I, II, III e IV deste Capítulo, de acordo com as respectivas áreas de atuação, e cumpra, cumulativamente, os seguintes requisitos: (Vide Lei nº 13.650, de 2018)

I - seja constituída como pessoa jurídica nos termos do caput do art. 1o; e

II - preveja, em seus atos constitutivos, em caso de dissolução ou extinção, a destinação do eventual patrimônio remanescente a entidade sem fins lucrativos congêneres ou a entidades públicas.

Parágrafo único. O período mínimo de cumprimento dos requisitos de que trata este artigo poderá ser reduzido se a entidade for prestadora de serviços por meio de convênio ou instrumento congênere com o Sistema Único de Saúde - SUS ou com o Sistema Único de Assistência Social - SUAS, em caso de necessidade local atestada pelo gestor do respectivo sistema.

Parágrafo único. O período mínimo de cumprimento dos requisitos de que trata este artigo poderá ser reduzido se a entidade for prestadora de serviços por meio de contrato, convênio ou instrumento congênere com o Sistema Único de Saúde (SUS) ou com o Sistema Único de Assistência Social (Suas), em caso de necessidade local atestada pelo gestor do respectivo sistema. (Redação dada pela Lei nº 12.868, de 2013)

Seção I

Da Saúde

Art. 4o Para ser considerada beneficente e fazer jus à certificação, a entidade de saúde deverá, nos termos do regulamento:

I - comprovar o cumprimento das metas estabelecidas em convênio ou instrumento congênere celebrado com o gestor local do SUS;

I - celebrar contrato, convênio ou instrumento congênere com o gestor do SUS; (Redação dada pela Lei nº 12.868, de 2013) (Vide Lei nº 13.650, de 2018)

II - ofertar a prestação de seus serviços ao SUS no percentual mínimo de 60% (sessenta por cento);

III - comprovar, anualmente, a prestação dos serviços de que trata o inciso II, com base no somatório das internações realizadas e dos atendimentos ambulatoriais prestados.

III - comprovar, anualmente, da forma regulamentada pelo Ministério da Saúde, a prestação dos serviços de que trata o inciso II, com base nas internações e nos atendimentos ambulatoriais realizados. (Redação dada pela Lei nº 12.453, de 2011)

§ 1o O atendimento do percentual mínimo de que trata o caput pode ser individualizado por estabelecimento ou pelo conjunto de estabelecimentos de saúde da pessoa jurídica, desde que não abranja outra entidade com personalidade jurídica própria que seja por ela mantida.

§ 2o Para fins do disposto no § 1o, no conjunto de estabelecimentos de saúde da pessoa jurídica, poderá ser incorporado aquele vinculado por força de contrato de gestão, na forma do regulamento.

§ 3o Para fins do disposto no inciso III do caput, a entidade de saúde que aderir a programas e estratégias prioritárias definidas pelo Ministério da Saúde fará jus a índice percentual que será adicionado ao total de prestação de seus serviços ofertados ao SUS, observado o limite máximo de 10% (dez por cento), conforme estabelecido em ato do Ministro de Estado da Saúde. (Incluído pela Lei nº 12.868, de 2013)

§ 4º Na hipótese de comprovada prestação de serviços pela entidade de saúde, sem a observância do disposto no inciso I do caput deste artigo, que dê causa ao indeferimento ou cancelamento da certificação, o Ministério da Saúde deverá informar aos órgãos de controle os indícios da irregularidade praticada pelo gestor do SUS. (Incluído pela Lei nº 13.650, de 2018)

Art. 5o A entidade de saúde deverá ainda informar, obrigatoriamente, ao Ministério da Saúde, na forma por ele estabelecida:

I - a totalidade das internações e atendimentos ambulatoriais realizados para os pacientes não usuários do SUS;

II - a totalidade das internações e atendimentos ambulatoriais realizados para os pacientes usuários do SUS; e

III - as alterações referentes aos registros no Cadastro Nacional de Estabelecimentos de Saúde - CNES.

Parágrafo único. A entidade deverá manter o Cadastro Nacional de Estabelecimentos de Saúde - CNES atualizado, de acordo com a forma e o prazo determinado pelo Ministério da Saúde. (Incluído pela Lei nº 12.453, de 2011)

Art. 6o A entidade de saúde que presta serviços exclusivamente na área ambulatorial deverá observar o disposto nos incisos I e II do art. 4o.

Art. 6o A entidade de saúde que presta serviços exclusivamente na área ambulatorial deverá observar o disposto nos incisos I e II do art. 4o, comprovando, anualmente, a prestação dos serviços no percentual mínimo de 60% (sessenta por cento). (Redação dada pela Lei nº 12.453, de 2011)

Art. 6o-A. Para os requerimentos de renovação de certificado, caso a entidade de saúde não cumpra o disposto no inciso III do caput do art. 4o no exercício fiscal anterior ao exercício do requerimento, o Ministério da Saúde avaliará o cumprimento do requisito com base na média do total de prestação de serviços ao SUS de que trata o inciso III do caput do art. 4o pela entidade durante todo o período de certificação em curso, que deverá ser de, no mínimo, 60% (sessenta por cento). (Incluído pela Lei nº 12.868, de 2013)

§ 1o Para fins do disposto no caput, apenas será admitida a avaliação pelo Ministério da Saúde caso a entidade tenha cumprido, no mínimo, 50% (cinquenta por cento) da prestação de seus serviços ao SUS de que trata o inciso III do caput do art. 4o em cada um dos anos do período de certificação. (Incluído pela Lei nº 12.868, de 2013)

§ 2o A comprovação da prestação dos serviços, conforme regulamento do Ministério da Saúde, será feita com base nas internações, nos atendimentos ambulatoriais e nas ações prioritárias realizadas. (Incluído pela Lei nº 12.868, de 2013)

Art. 7o Quando a disponibilidade de cobertura assistencial da população pela rede pública de determinada área for insuficiente, os gestores do SUS deverão observar, para a contratação de serviços privados, a preferência de participação das entidades beneficentes de saúde e das sem fins lucrativos.

Art. 7o-A. As instituições reconhecidas nos termos da legislação como serviços de atenção em regime residencial e transitório, incluídas as comunidades terapêuticas que prestem ao SUS serviços de atendimento e acolhimento, a pessoas com transtornos decorrentes do uso, abuso ou dependência de substância psicoativa poderão ser certificadas, desde que: (Incluído pela Lei nº 12.868, de 2013)

I - sejam qualificadas como entidades de saúde; e (Incluído pela Lei nº 12.868, de 2013)

II - comprovem a prestação de serviços de que trata o caput. (Incluído pela Lei nº 12.868, de 2013)

§ 1o O cumprimento dos requisitos estabelecidos nos incisos I e II do caput deverá observar os critérios definidos pelo Ministério da Saúde. (Incluído pela Lei nº 12.868, de 2013)

§ 2o A prestação dos serviços prevista no caput será pactuada com o gestor local do SUS por meio de contrato, convênio ou instrumento congênere. (Incluído pela Lei nº 12.868, de 2013)

§ 3o O atendimento dos requisitos previstos neste artigo dispensa a observância das exigências previstas no art. 4o. (Incluído pela Lei nº 12.868, de 2013)

Art. 8o Na impossibilidade do cumprimento do percentual mínimo a que se refere o inciso II do art. 4o, em razão da falta de demanda, declarada pelo gestor local do SUS, ou não havendo contratação dos serviços de saúde da entidade, deverá ela comprovar a aplicação de percentual da sua receita bruta em atendimento gratuito de saúde da seguinte forma:

Art. 8o Não havendo interesse de contratação pelo Gestor local do SUS dos serviços de saúde ofertados pela entidade no percentual mínimo a que se refere o inciso II do art. 4o, a entidade deverá comprovar a aplicação de percentual da sua receita em gratuidade na área da saúde, da seguinte forma: (Redação dada pela Lei nº 12.453, de 2011)

Art. 8o Não havendo interesse do gestor local do SUS na contratação dos serviços de saúde ofertados pela entidade de saúde ou de contratação abaixo do percentual mínimo a que se refere o inciso II do art. 4o, a entidade deverá comprovar a aplicação de percentual da sua receita em gratuidade na área da saúde, da seguinte forma: (Redação dada pela Lei nº 12.868, de 2013)

I - 20% (vinte por cento), se o percentual de atendimento ao SUS for inferior a 30% (trinta por cento);

I - 20% (vinte por cento), quando não houver interesse de contratação pelo gestor local do SUS ou se o percentual de prestação de serviços ao SUS for inferior a 30% (trinta por cento); (Redação dada pela Lei nº 12.868, de 2013)

II - 10% (dez por cento), se o percentual de atendimento ao SUS for igual ou superior a 30 (trinta) e inferior a 50% (cinquenta por cento); ou

II - 10% (dez por cento), se o percentual de prestação de serviços ao SUS for igual ou superior a 30% (trinta por cento) e inferior a 50% (cinquenta por cento); ou (Redação dada pela Lei nº 12.868, de 2013)

III - 5% (cinco por cento), se o percentual de atendimento ao SUS for igual ou superior a 50% (cinquenta por cento) ou se completar o quantitativo das internações hospitalares e atendimentos ambulatoriais, com atendimentos gratuitos devidamente informados de acordo com o disposto no art. 5o, não financiados pelo SUS ou por qualquer outra fonte.

III - 5% (cinco por cento), se o percentual de prestação de serviços ao SUS for igual ou superior a 50% (cinquenta por cento). (Redação dada pela Lei nº 12.868, de 2013)

Parágrafo único. (VETADO)

§ 2o A receita prevista no caput será a efetivamente recebida da prestação de serviços de saúde. (Incluído pela Lei nº 12.453, de 2011)

Art. 8o-A. Excepcionalmente, será admitida a certificação de entidades que atuem exclusivamente na promoção da saúde sem exigência de contraprestação do usuário pelas ações e serviços de saúde realizados, nos termos do regulamento. (Incluído pela Lei nº 12.868, de 2013)

§ 1o A oferta da totalidade de ações e serviços sem contraprestação do usuário dispensa a observância das exigências previstas no art. 4o. (Incluído pela Lei nº 12.868, de 2013)

§ 2o A execução de ações e serviços de gratuidade em promoção da saúde será previamente pactuada por meio de contrato, convênio ou instrumento congênere com o gestor local do SUS. (Incluído pela Lei nº 12.868, de 2013)

§ 3o Para efeito do disposto no caput, são consideradas ações e serviços de promoção da saúde as atividades voltadas para redução de risco à saúde, desenvolvidas em áreas como: (Incluído pela Lei nº 12.868, de 2013)

I - nutrição e alimentação saudável; (Incluído pela Lei nº 12.868, de 2013)

II - prática corporal ou atividade física; (Incluído pela Lei nº 12.868, de 2013)

III - prevenção e controle do tabagismo; (Incluído pela Lei nº 12.868, de 2013)

IV - prevenção ao câncer, ao vírus da imunodeficiência humana (HIV), às hepatites virais, à tuberculose, à hanseníase, à malária e à dengue; (Incluído pela Lei nº 12.868, de 2013)

V - redução da morbimortalidade em decorrência do uso abusivo de álcool e outras drogas; (Incluído pela Lei nº 12.868, de 2013)

VI - redução da morbimortalidade por acidentes de trânsito; (Incluído pela Lei nº 12.868, de 2013)

VII - prevenção da violência; e (Incluído pela Lei nº 12.868, de 2013)

VIII - redução da morbimortalidade nos diversos ciclos de vida. (Incluído pela Lei nº 12.868, de 2013)

Art. 8o-B. Excepcionalmente, será admitida a certificação de entidades que prestam serviços de atenção em regime residencial e transitório, incluídas as comunidades terapêuticas, que executem exclusivamente ações de promoção da saúde voltadas para pessoas com transtornos decorrentes do uso, abuso ou dependência de drogas, desde que comprovem a aplicação de, no mínimo, 20% (vinte por cento) de sua receita bruta em ações de gratuidade. (Incluído pela Lei nº 12.868, de 2013)

§ 1o Para fins do cálculo de que trata o caput, as receitas provenientes de subvenção pública e as despesas decorrentes não devem incorporar a receita bruta e o percentual aplicado em ações de gratuidade. (Incluído pela Lei nº 12.868, de 2013)

§ 2o A execução das ações de gratuidade em promoção da saúde será previamente pactuada com o gestor local do SUS, por meio de contrato, convênio ou instrumento congênere. (Incluído pela Lei nº 12.868, de 2013)

§ 3o O atendimento dos requisitos previstos neste artigo dispensa a observância das exigências previstas no art. 4o. (Incluído pela Lei nº 12.868, de 2013)

Art. 9o (VETADO)

Art. 10. Em hipótese alguma será admitida como aplicação em gratuidade a eventual diferença entre os valores pagos pelo SUS e os preços praticados pela entidade ou pelo mercado.

Art. 11. A entidade de saúde de reconhecida excelência poderá, alternativamente, para dar cumprimento ao requisito previsto no art. 4o, realizar projetos de apoio ao desenvolvimento institucional do SUS, celebrando ajuste com a União, por intermédio do Ministério da Saúde, nas seguintes áreas de atuação:

I - estudos de avaliação e incorporação de tecnologias;

II - capacitação de recursos humanos;

III - pesquisas de interesse público em saúde; ou

IV - desenvolvimento de técnicas e operação de gestão em serviços de saúde.

§ 1o O Ministério da Saúde definirá os requisitos técnicos essenciais para o reconhecimento de excelência referente a cada uma das áreas de atuação previstas neste artigo.

§ 2o O recurso despendido pela entidade de saúde no projeto de apoio não poderá ser inferior ao valor da isenção das contribuições sociais usufruída.

§ 3o O projeto de apoio será aprovado pelo Ministério da Saúde, ouvidas as instâncias do SUS, segundo procedimento definido em ato do Ministro de Estado.

§ 4o As entidades de saúde que venham a se beneficiar da condição prevista neste artigo poderão complementar as atividades relativas aos projetos de apoio com a prestação de serviços ambulatoriais e hospitalares ao SUS não remunerados, mediante pacto com o gestor local do SUS, observadas as seguintes condições:

I - a complementação não poderá ultrapassar 30% (trinta por cento) do valor usufruído com a isenção das contribuições sociais;

II - a entidade de saúde deverá apresentar ao gestor local do SUS plano de trabalho com previsão de atendimento e detalhamento de custos, os quais não poderão exceder o valor por ela efetivamente despendido;

III - a comprovação dos custos a que se refere o inciso II poderá ser exigida a qualquer tempo, mediante apresentação dos documentos necessários; e

IV - as entidades conveniadas deverão informar a produção na forma estabelecida pelo Ministério da Saúde, com observação de não geração de créditos.

§ 5o A participação das entidades de saúde ou de educação em projetos de apoio previstos neste artigo não poderá ocorrer em prejuízo das atividades beneficentes prestadas ao SUS.

§ 6o O conteúdo e o valor das atividades desenvolvidas em cada projeto de apoio ao desenvolvimento institucional e de prestação de serviços ao SUS deverão ser objeto de relatórios anuais, encaminhados ao Ministério da Saúde para acompanhamento e fiscalização, sem prejuízo das atribuições dos órgãos de fiscalização tributária.

Seção II

Da Educação

Art. 12. A certificação ou sua renovação será concedida à entidade de educação que atenda ao disposto nesta Seção e na legislação aplicável.

Parágrafo único. As entidades de educação certificadas na forma desta Lei deverão prestar informações ao Censo da Educação Básica e ao Censo da Educação Superior, conforme definido pelo Ministério da Educação. (Incluído pela Lei nº 12.868, de 2013)

Art. 12-A. As bolsas de estudo concedidas no âmbito do processo de certificação de entidades beneficentes de assistência social de que trata esta Lei constituem-se em instrumentos de promoção da política pública de acesso à educação do Ministério da Educação. (Incluído pela Lei nº 13.530, de 2017)

Art. 13. Para os fins da concessão da certificação de que trata esta Lei, a entidade de educação deverá aplicar anualmente em gratuidade, na forma do § 1o, pelo menos 20% (vinte por cento) da receita anual efetivamente recebida nos termos da Lei no 9.870, de 23 de novembro de 1999.

Art. 13. Para fins de concessão ou renovação da certificação, a entidade de educação que atua nas diferentes etapas e modalidades da educação básica, regular e presencial, deverá: (Redação dada pela Lei nº 12.868, de 2013) (Vide ADIN 4480)

I - demonstrar sua adequação às diretrizes e metas estabelecidas no Plano Nacional de Educacao (PNE), na forma do art. 214 da Constituição Federal; (Incluído pela Lei nº 12.868, de 2013)

II - atender a padrões mínimos de qualidade, aferidos pelos processos de avaliação conduzidos pelo Ministério da Educação; e (Incluído pela Lei nº 12.868, de 2013)

III - conceder anualmente bolsas de estudo na proporção de 1 (uma) bolsa de estudo integral para cada 5 (cinco) alunos pagantes. (Incluído pela Lei nº 12.868, de 2013)

§ 1o Para o cumprimento do disposto no caput, a entidade deverá:

§ 1o Para o cumprimento da proporção descrita no inciso III do caput, a entidade poderá oferecer bolsas de estudo parciais, observadas as seguintes condições: (Redação dada pela Lei nº 12.868, de 2013) (Vide ADIN 4480)

I - demonstrar adequação às diretrizes e metas estabelecidas no Plano Nacional de Educacao - PNE, na forma do art. 214 da Constituição Federal;

I - no mínimo, 1 (uma) bolsa de estudo integral para cada 9 (nove) alunos pagantes; e (Redação dada pela Lei nº 12.868, de 2013) (Vide ADIN 4480)

II - atender a padrões mínimos de qualidade, aferidos pelos processos de avaliação conduzidos pelo Ministério da Educação; e

II - bolsas de estudo parciais de 50% (cinquenta por cento), quando necessário para o alcance do número mínimo exigido, conforme definido em regulamento; (Redação dada pela Lei nº 12.868, de 2013) (Vide ADIN 4480)

III - oferecer bolsas de estudo nas seguintes proporções:

a) no mínimo, uma bolsa de estudo integral para cada 9 (nove) alunos pagantes da educação básica;

b) bolsas parciais de 50% (cinquenta por cento), quando necessário para o alcance do número mínimo exigido.

III - (revogado); (Redação dada pela Lei nº 12.868, de 2013) (Vide ADIN 4480)

a) (revogada); (Redação dada pela Lei nº 12.868, de 2013)

b) (revogada). (Redação dada pela Lei nº 12.868, de 2013)

§ 2o As proporções previstas no inciso III do § 1o poderão ser cumpridas considerando-se diferentes etapas e modalidades da educação básica presencial.

§ 2o Será facultado à entidade substituir até 25% (vinte e cinco por cento) da quantidade das bolsas de estudo definidas no inciso III do caput e no § 1o por benefícios complementares, concedidos aos alunos matriculados cuja renda familiar mensal per capita não exceda o valor de 1 (um) salário-mínimo e meio, como transporte, uniforme, material didático, moradia, alimentação e outros benefícios definidos em regulamento. (Redação dada pela Lei nº 12.868, de 2013)

§ 2o Será facultado à entidade substituir até 25% (vinte e cinco por cento) da quantidade das bolsas de estudo definidas no inciso III do caput e no § 1o por benefícios concedidos a beneficiários cuja renda familiar mensal per capita não exceda o valor de um salário mínimo e meio, tais como transporte, uniforme, material didático, moradia, alimentação e outros benefícios, ações e serviços definidos em ato do Ministro de Estado da Educação. (Redação dada pela Lei nº 13.043, de 2014) (Vide ADIN 4480)

§ 3o Complementarmente, para o cumprimento das proporções previstas no inciso III do § 1o, a entidade poderá contabilizar o montante destinado a ações assistenciais, bem como o ensino gratuito da educação básica em unidades específicas, programas de apoio a alunos bolsistas, tais como transporte, uniforme, material didático, além de outros, definidos em regulamento, até o montante de 25% (vinte e cinco por cento) da gratuidade prevista no caput.

§ 3o Admite-se o cumprimento do percentual disposto no § 2o com projetos e atividades para a garantia da educação em tempo integral para alunos matriculados na educação básica em escolas públicas, desde que em articulação com as respectivas instituições públicas de ensino, na forma definida pelo Ministério da Educação. (Redação dada pela Lei nº 12.868, de 2013) (Vide ADIN 4480)

§ 4o Para alcançar a condição prevista no § 3o, a entidade poderá observar a escala de adequação sucessiva, em conformidade com o exercício financeiro de vigência desta Lei:

I - até 75% (setenta e cinco por cento) no primeiro ano;

II - até 50% (cinquenta por cento) no segundo ano;

III - 25% (vinte e cinco por cento) a partir do terceiro ano.

§ 4o Para fins do cumprimento da proporção de que trata o inciso III do caput: (Redação dada pela Lei nº 12.868, de 2013) (Vide ADIN 4480)

I - cada bolsa de estudo integral concedida a aluno com deficiência, assim declarado ao Censo da Educação Básica, equivalerá a 1,2 (um inteiro e dois décimos) do valor da bolsa de estudo integral; e (Redação dada pela Lei nº 12.868, de 2013) (Vide ADIN 4480)

II - cada bolsa de estudo integral concedida a aluno matriculado na educação básica em tempo integral equivalerá a 1,4 (um inteiro e quatro décimos) do valor da bolsa de estudo integral; (Redação dada pela Lei nº 12.868, de 2013) (Vide ADIN 4480)

III - (revogado). (Redação dada pela Lei nº 12.868, de 2013) (Vide ADIN 4480)

§ 5o Consideram-se ações assistenciais aquelas previstas na Lei no 8.742, de 7 de dezembro de 1993.

§ 5o As equivalências previstas nos incisos I e II do § 4o não poderão ser cumulativas. (Redação dada pela Lei nº 12.868, de 2013) (Vide ADIN 4480)

§ 6o Para a entidade que, além de atuar na educação básica ou em área distinta da educação, também atue na educação superior, aplica-se o disposto no art. 10 da Lei no 11.096, de 13 de janeiro de 2005.

§ 6o Considera-se, para fins do disposto nos §§ 3o e 4o, educação básica em tempo integral a jornada escolar com duração igual ou superior a 7 (sete) horas diárias, durante todo o período letivo, e compreende tanto o tempo em que o aluno permanece na escola como aquele em que exerce atividades escolares em outros espaços educacionais, conforme definido pelo Ministério da Educação. (Redação dada pela Lei nº 12.868, de 2013) (Vide ADIN 4480)

§ 7o As entidades de educação que prestam serviços integralmente gratuitos deverão garantir a observância da proporção de, no mínimo, 1 (um) aluno cuja renda familiar mensal per capita não exceda o valor de um salário-mínimo e meio para cada 5 (cinco) alunos matriculados. (Incluído pela Lei nº 12.868, de 2013) (Vide ADIN 4480)

Art. 13-A. Para fins de concessão e de renovação da certificação, as entidades que atuam na educação superior e que aderiram ao Programa Universidade para Todos (Prouni), na forma do caput do art. 11 da Lei no 11.096, de 13 de janeiro de 2005, deverão atender às condições previstas nos incisos do caput e nos §§ 1o, 2o e 7o do art. 13 desta Lei. (Incluído pela Lei nº 12.868, de 2013)

§ 1o As entidades que atuam concomitantemente no nível de educação superior e que tenham aderido ao Prouni e no de educação básica estão obrigadas a cumprir os requisitos exigidos no art. 13, para cada nível de educação, inclusive quanto à complementação eventual da gratuidade por meio da concessão de bolsas de estudo parciais de 50% (cinquenta por cento) e de benefícios complementares, conforme previsto nos §§ 1o e 2o do art. 13. (Incluído pela Lei nº 12.868, de 2013)

§ 1o As entidades que atuam concomitantemente no nível de educação superior e que tenham aderido ao Prouni e no de educação básica estão obrigadas a cumprir os requisitos exigidos no art. 13, para cada nível de educação, inclusive quanto à complementação eventual da gratuidade por meio da concessão de bolsas de estudo parciais de 50% (cinquenta por cento) e de benefícios, conforme previsto nos §§ 1o e 2o do art. 13. (Redação dada pela Lei nº 13.043, de 2014)

§ 2o Somente serão aceitas no âmbito da educação superior bolsas de estudo vinculadas ao Prouni, salvo as bolsas integrais ou parciais de 50% (cinquenta por cento) para pós-graduação stricto sensu. (Incluído pela Lei nº 12.868, de 2013)

§ 3o Excepcionalmente, serão aceitas como gratuidade, no âmbito da educação superior, as bolsas de estudo integrais ou parciais de 50% (cinquenta por cento) oferecidas fora do Prouni aos alunos enquadrados nos arts. 14 e 15, desde que a entidade tenha cumprido a proporção de uma bolsa de estudo integral para cada 9 (nove) alunos pagantes no Prouni e que tenha ofertado bolsas no âmbito do Prouni que não tenham sido preenchidas. (Incluído pela Lei nº 12.868, de 2013)

§ 4o Para os fins do disposto neste artigo, somente serão computadas as bolsas concedidas em cursos de graduação ou sequencial de formação específica regulares, além das bolsas para pós-graduação stricto sensu previstas no § 2o. (Incluído pela Lei nº 12.868, de 2013)

Art. 13-B. Para os fins da concessão da certificação, as entidades que atuam na educação superior e que não tenham aderido ao Prouni na forma do art. 10 da Lei nº 11.096, de 13 de janeiro de 2005, deverão: (Incluído pela Lei nº 12.868, de 2013)

I - atender ao disposto nos incisos I e II do caput do art. 13; e (Incluído pela Lei nº 12.868, de 2013)

II - conceder anualmente bolsas de estudo na proporção de 1 (uma) bolsa de estudo integral para cada 4 (quatro) alunos pagantes. (Incluído pela Lei nº 12.868, de 2013)

§ 1o Para o cumprimento da proporção descrita no inciso II do caput, a entidade poderá oferecer bolsas de estudo parciais, desde que conceda: (Incluído pela Lei nº 12.868, de 2013)

I - no mínimo, 1 (uma) bolsa de estudo integral para cada 9 (nove) alunos pagantes; e (Incluído pela Lei nº 12.868, de 2013)

II - bolsas de estudo parciais de 50% (cinquenta por cento), quando necessário para o alcance do número mínimo exigido, conforme definido em regulamento. (Incluído pela Lei nº 12.868, de 2013)

§ 2o Será facultado à entidade que atue na educação superior substituir até 25% (vinte e cinco por cento) das bolsas de estudo definidas no inciso II do caput e no § 1o por benefícios complementares, concedidos aos alunos matriculados cuja renda familiar mensal per capita não exceda o valor de um salário-mínimo e meio, como transporte, uniforme, material didático, moradia, alimentação e outros benefícios definidos em regulamento. (Incluído pela Lei nº 12.868, de 2013)

§ 2o Será facultado à entidade substituir até 25% (vinte e cinco por cento) da quantidade das bolsas de estudo definidas no inciso II do caput e no § 1o por benefícios concedidos a beneficiários cuja renda familiar mensal per capita não exceda o valor de um salário mínimo e meio, tais como transporte, uniforme, material didático, moradia, alimentação e outros benefícios, ações e serviços definidos em ato do Ministro de Estado da Educação. (Redação dada pela Lei nº 13.043, de 2014)

§ 3o Sem prejuízo da proporção definida no inciso II do caput, a entidade de educação deverá ofertar, em cada uma de suas instituições de ensino superior, no mínimo, 1 (uma) bolsa integral para cada 25 (vinte e cinco) alunos pagantes.

§ 4o A entidade deverá ofertar bolsa integral em todos os cursos de todas as instituições de ensino superior por ela mantidos. (Incluído pela Lei nº 12.868, de 2013)

§ 5o As entidades que atuam concomitantemente na educação superior e na educação básica são obrigadas a cumprir os requisitos exigidos no art. 13 e neste artigo de maneira segregada, por nível de educação, inclusive quanto à eventual complementação da gratuidade por meio da concessão de bolsas de estudo parciais de 50% (cinquenta por cento) e de benefícios complementares. (Incluído pela Lei nº 12.868, de 2013)

§ 5o As entidades que atuam concomitantemente na educação superior e na educação básica são obrigadas a cumprir os requisitos exigidos no art. 13 e neste artigo de maneira segregada, por nível de educação, inclusive quanto à eventual complementação da gratuidade por meio da concessão de bolsas de estudo parciais de 50% (cinquenta por cento) e de benefícios. (Redação dada pela Lei nº 13.043, de 2014)

§ 6o Para os fins do disposto neste artigo, somente serão computadas as bolsas concedidas em cursos de graduação ou sequencial de formação específica regulares. (Incluído pela Lei nº 12.868, de 2013)

Art. 13-C. Consideram-se alunos pagantes, para fins de aplicação das proporções previstas nos arts. 13, 13-A e 13-B, o total de alunos que não possuem bolsas de estudo integrais. (Incluído pela Lei nº 12.868, de 2013)

§ 1o Na aplicação das proporções previstas nos arts. 13-A e 13-B, serão considerados os alunos pagantes matriculados em cursos de graduação ou sequencial de formação específica regulares. (Incluído pela Lei nº 12.868, de 2013)

§ 2o Não se consideram alunos pagantes os inadimplentes por período superior a 90 (noventa) dias, cujas matrículas tenham sido recusadas no período letivo imediatamente subsequente ao inadimplemento, conforme definido em regulamento. (Incluído pela Lei nº 12.868, de 2013)

Art. 14. Para os efeitos desta Lei, a bolsa de estudo refere-se às semestralidades ou anuidades escolares fixadas na forma da lei, vedada a cobrança de taxa de matrícula e de custeio de material didático. (Vide ADIN 4480)

§ 1o A bolsa de estudo integral será concedida a aluno cuja renda familiar mensal per capita não exceda o valor de 1 1/2 (um e meio) salário mínimo. (Vide ADIN 4480)

§ 2o A bolsa de estudo parcial será concedida a aluno cuja renda familiar mensal per capita não exceda o valor de 3 (três) salários mínimos. (Vide ADIN 4480)

Art. 15. Para fins da certificação a que se refere esta Lei, o aluno a ser beneficiado será pré-selecionado pelo perfil socioeconômico e, cumulativamente, por outros critérios definidos pelo Ministério da Educação.

§ 1o Os alunos beneficiários das bolsas de estudo de que trata esta Lei ou seus pais ou responsáveis, quando for o caso, respondem legalmente pela veracidade e autenticidade das informações socioeconômicas por eles prestadas.

§ 1o Os alunos beneficiários das bolsas de estudo de que trata esta Lei, ou seus pais ou responsáveis, quando for o caso, respondem legalmente pela veracidade e autenticidade das informações por eles prestadas. (Redação dada pela Lei nº 13.530, de 2017)

§ 2o Compete à entidade de educação aferir as informações relativas ao perfil socioeconômico do candidato.

§ 2o Compete à entidade de educação confirmar o atendimento, pelo candidato, ao perfil socioeconômico e aos demais critérios estabelecidos pelo Ministério da Educação. (Redação dada pela Lei nº 13.530, de 2017)

§ 3o As bolsas de estudo poderão ser canceladas a qualquer tempo, em caso de constatação de falsidade da informação prestada pelo bolsista ou seu responsável, ou de inidoneidade de documento apresentado, sem prejuízo das demais sanções cíveis e penais cabíveis.

§ 4o Os estudantes a serem beneficiados pelas bolsas de estudo para os cursos de graduação poderão ser pré-selecionados pelos resultados do Exame Nacional do Ensino Médio (Enem). (Incluído pela Lei nº 13.530, de 2017)

§ 5o É vedado ao estudante acumular bolsas de estudo em entidades de educação certificadas na forma desta Lei. (Incluído pela Lei nº 13.530, de 2017)

§ 6o O Ministério da Educação disporá sobre os procedimentos para seleção de bolsistas, especialmente quanto à sua operacionalização por meio de sistema específico. (Incluído pela Lei nº 13.530, de 2017)

Art. 16. É vedado qualquer discriminação ou diferença de tratamento entre alunos bolsistas e pagantes.

Art. 17. No ato de renovação da certificação, as entidades de educação que não tenham aplicado em gratuidade o percentual mínimo previsto no caput do art. 13 poderão compensar o percentual devido no exercício imediatamente subsequente com acréscimo de 20% (vinte por cento) sobre o percentual a ser compensado.

Parágrafo único. O disposto neste artigo alcança tão somente as entidades que tenham aplicado pelo menos 17% (dezessete por cento) em gratuidade, na forma do art. 13, em cada exercício financeiro a ser considerado.

Art. 17. No ato de concessão ou de renovação da certificação, as entidades de educação que não tenham aplicado em gratuidade o percentual mínimo previsto no caput do art. 13 poderão compensar o percentual devido nos 3 (três) exercícios subsequentes com acréscimo de 20% (vinte por cento) sobre o percentual a ser compensado, mediante a assinatura de Termo de Compromisso, nas condições estabelecidas pelo MEC. (Redação dada pela Lei nº 12.688, de 2012)

Art. 17. No ato de concessão ou de renovação da certificação, as entidades de educação que não tenham concedido o número mínimo de bolsas previsto nos arts. 13, 13-A e 13-B poderão compensar o número de bolsas devido nos 3 (três) exercícios subsequentes com acréscimo de 20% (vinte por cento) sobre o percentual não atingido ou o número de bolsas não concedido, mediante a assinatura de Termo de Ajuste de Gratuidade, nas condições estabelecidas pelo Ministério da Educação. (Redação dada pela Lei nº 12.868, de 2013)

§ 1o Na hipótese de descumprimento do Termo de Compromisso, a certificação da entidade será cancelada relativamente a todo o seu período de validade. (Incluído Lei nº 12.688, de 2012)

§ 1o Após a publicação da decisão relativa ao julgamento do requerimento de concessão ou de renovação da certificação na primeira instância administrativa, as entidades de educação a que se refere o caput disporão do prazo improrrogável de 30 (trinta) dias para requerer a assinatura do Termo de Ajuste de Gratuidade. (Redação dada pela Lei nº 12.868, de 2013)

§ 2o O Termo de Compromisso poderá ser celebrado somente 1 (uma) vez com cada entidade. (Incluído Lei nº 12.688, de 2012)

§ 2o Na hipótese de descumprimento do Termo de Ajuste de Gratuidade, a certificação da entidade será cancelada relativamente a todo o seu período de validade. (Redação dada pela Lei nº 12.868, de 2013)

§ 3o O disposto neste artigo aplica-se também aos percentuais mínimos previstos no § 1º do art. 10 e no inciso I do art. 11 da Lei no 11.096, de 13 de janeiro de 2005. (Incluído Lei nº 12.688, de 2012)

§ 3o O Termo de Ajuste de Gratuidade poderá ser celebrado somente 1 (uma) vez com cada entidade. (Redação dada pela Lei nº 12.868, de 2013)

§ 3o O Termo de Ajuste de Gratuidade poderá ser celebrado somente uma vez com a mesma entidade a cada período de 10 (dez) anos, a contar da data da assinatura do último termo e desde que este tenha sido devidamente cumprido. (Redação dada pela Lei nº 13.043, de 2014)

§ 4o As bolsas de pós-graduação stricto sensu poderão integrar o percentual de acréscimo de compensação de 20% (vinte por cento), desde que se refiram a áreas de formação definidas pelo Ministério da Educação. (Incluído pela Lei nº 12.868, de 2013)

Seção III

Da Assistência Social

Art. 18. A certificação ou sua renovação será concedida à entidade de assistência social que presta serviços ou realiza ações assistenciais, de forma gratuita, continuada e planejada, para os usuários e a quem deles necessitar, sem qualquer discriminação, observada a Lei nº 8.742, de 7 de dezembro de 1993.

Art. 18. A certificação ou sua renovação será concedida à entidade de assistência social que presta serviços ou realiza ações socioassistenciais, de forma gratuita, continuada e planejada, para os usuários e para quem deles necessitar, sem discriminação, observada a Lei nº 8.742, de 7 de dezembro de 1993. (Redação dada pela Lei nº 12.868, de 2013) (Vide ADIN 4480)

§ 1o As entidades de assistência social a que se refere o caput são aquelas que prestam, sem fins lucrativos, atendimento e assessoramento aos beneficiários, bem como as que atuam na defesa e garantia de seus direitos.

§ 1o Consideram-se entidades de assistência social aquelas que prestam, sem fins lucrativos, atendimento e assessoramento aos beneficiários abrangidos pela Lei nº 8.742, de 7 de dezembro de 1993, e as que atuam na defesa e garantia de seus direitos. (Redação dada pela Lei nº 12.868, de 2013)

§ 2o As entidades que prestam serviços com objetivo de habilitação e reabilitação de pessoa com deficiência e de promoção da sua integração à vida comunitária e aquelas abrangidas pelo disposto no art. 35 da Lei no 10.741, de 1o de outubro de 2003, poderão ser certificadas, desde que comprovem a oferta de, no mínimo, 60% (sessenta por cento) de sua capacidade de atendimento ao sistema de assistência social.

§ 2o Observado o disposto no caput e no § 1o, também são consideradas entidades de assistência social: (Redação dada pela Lei nº 12.868, de 2013)

I - as que prestam serviços ou ações socioassistenciais, sem qualquer exigência de contraprestação dos usuários, com o objetivo de habilitação e reabilitação da pessoa com deficiência e de promoção da sua inclusão à vida comunitária, no enfrentamento dos limites existentes para as pessoas com deficiência, de forma articulada ou não com ações educacionais ou de saúde; (Incluído pela Lei nº 12.868, de 2013)

II - as de que trata o inciso II do art. 430 da Consolidação das Leis do Trabalho ( CLT), aprovada pelo Decreto-Lei no 5.452, de 1o de maio de 1943, desde que os programas de aprendizagem de adolescentes, de jovens ou de pessoas com deficiência sejam prestados com a finalidade de promover a integração ao mercado de trabalho, nos termos da Lei nº 8.742, de 7 de dezembro de 1993, observadas as ações protetivas previstas na Lei no 8.069, de 13 de julho de 1990; e (Incluído pela Lei nº 12.868, de 2013)

III - as que realizam serviço de acolhimento institucional provisório de pessoas e de seus acompanhantes, que estejam em trânsito e sem condições de autossustento, durante o tratamento de doenças graves fora da localidade de residência, observada a Lei no 8.742, de 7 de dezembro de 1993. (Incluído pela Lei nº 12.868, de 2013)

§ 3o A capacidade de atendimento de que trata o § 2o será definida anualmente pela entidade, aprovada pelo órgão gestor de assistência social municipal ou distrital e comunicada ao Conselho Municipal de Assistência Social.

§ 3o Desde que observado o disposto no caput e no § 1o deste artigo e no art. 19, exceto a exigência de gratuidade, as entidades referidas no art. 35 da Lei no 10.741, de 1o de outubro de 2003, poderão ser certificadas, com a condição de que eventual cobrança de participação do idoso no custeio da entidade se dê nos termos e limites do § 2o do art. 35 da Lei no 10.741, de 1o de outubro de 2003. (Redação dada pela Lei nº 12.868, de 2013)

§ 4o As entidades certificadas como de assistência social terão prioridade na celebração de convênios, contratos, acordos ou ajustes com o poder público para a execução de programas, projetos e ações de assistência social.

§ 4o As entidades certificadas como de assistência social terão prioridade na celebração de convênios, contratos ou instrumentos congêneres com o poder público para a execução de programas, projetos e ações de assistência social. (Redação dada pela Lei nº 12.868, de 2013)

Art. 19. Constituem ainda requisitos para a certificação de uma entidade de assistência social:

I - estar inscrita no respectivo Conselho Municipal de Assistência Social ou no Conselho de Assistência Social do Distrito Federal, conforme o caso, nos termos do art. 9º da Lei nº 8.742, de 7 de dezembro de 1993; e

II - integrar o cadastro nacional de entidades e organizações de assistência social de que trata o inciso XI do art. 19 da Lei nº 8.742, de 7 de dezembro de 1993.

§ 1o Quando a entidade de assistência social atuar em mais de um Município ou Estado ou em quaisquer destes e no Distrito Federal, deverá inscrever suas atividades no Conselho de Assistência Social do respectivo Município de atuação ou do Distrito Federal, mediante a apresentação de seu plano ou relatório de atividades e do comprovante de inscrição no Conselho de sua sede ou de onde desenvolva suas principais atividades.

§ 2o Quando não houver Conselho de Assistência Social no Município, as entidades de assistência social dever-se-ão inscrever nos respectivos Conselhos Estaduais.

Art. 20. A comprovação do vínculo da entidade de assistência social à rede socioassistencial privada no âmbito do SUAS é condição suficiente para a concessão da certificação, no prazo e na forma a serem definidos em regulamento.

Seção IV

Da Concessão e do Cancelamento

Art. 21. A análise e decisão dos requerimentos de concessão ou de renovação dos certificados das entidades beneficentes de assistência social serão apreciadas no âmbito dos seguintes Ministérios:

I - da Saúde, quanto às entidades da área de saúde;

II - da Educação, quanto às entidades educacionais; e

III - do Desenvolvimento Social e Combate à Fome, quanto às entidades de assistência social.

§ 1o A entidade interessada na certificação deverá apresentar, juntamente com o requerimento, todos os documentos necessários à comprovação dos requisitos de que trata esta Lei, na forma do regulamento.

§ 2o A tramitação e a apreciação do requerimento deverão obedecer à ordem cronológica de sua apresentação, salvo em caso de diligência pendente, devidamente justificada.

§ 2o A tramitação e a apreciação do requerimento deverão obedecer à ordem cronológica de sua apresentação, salvo em caso de diligência pendente, devidamente justificada, ou no caso de entidade ou instituição sem fins lucrativos e organização da sociedade civil que celebrem parceria para executar projeto, atividade ou serviço em conformidade com acordo de cooperação internacional do qual a República Federativa do Brasil seja parte. (Redação dada pela Lei nº 13.204, de 2015)

§ 3o O requerimento será apreciado no prazo a ser estabelecido em regulamento, observadas as peculiaridades do Ministério responsável pela área de atuação da entidade.

§ 4o O prazo de validade da certificação será fixado em regulamento, observadas as especificidades de cada uma das áreas e o prazo mínimo de 1 (um) ano e máximo de 5 (cinco) anos.

§ 4o O prazo de validade da certificação será de 1 (um) a 5 (cinco) anos, conforme critérios definidos em regulamento. (Redação dada pela Lei nº 12.868, de 2013)

§ 5o O processo administrativo de certificação deverá, em cada Ministério envolvido, contar com plena publicidade de sua tramitação, devendo permitir à sociedade o acompanhamento pela internet de todo o processo.

§ 6o Os Ministérios responsáveis pela certificação deverão manter, nos respectivos sítios na internet, lista atualizada com os dados relativos aos certificados emitidos, seu período de vigência e sobre as entidades certificadas, incluindo os serviços prestados por essas dentro do âmbito certificado e recursos financeiros a elas destinados.

Art. 22. A entidade que atue em mais de uma das áreas especificadas no art. 1o deverá requerer a certificação e sua renovação no Ministério responsável pela área de atuação preponderante da entidade.

Parágrafo único. Considera-se área de atuação preponderante aquela definida como atividade econômica principal no Cadastro Nacional da Pessoa Jurídica do Ministério da Fazenda.

Art. 23. (VETADO)

Art. 23-A. As entidades de que trata o inciso I do § 2o do art. 18 serão certificadas exclusivamente pelo Ministério do Desenvolvimento Social e Combate à Fome, ainda que exerçam suas atividades em articulação com ações educacionais ou de saúde, dispensadas a manifestação do Ministério da Saúde e do Ministério da Educação e a análise do critério da atividade preponderante previsto no art. 22. (Incluído pela Lei nº 12.868, de 2013)

Parágrafo único. Para a certificação das entidades de que trata o inciso I do § 2o do art. 18, cabe ao Ministério do Desenvolvimento Social e Combate à Fome verificar, além dos requisitos do art. 19, o atendimento ao disposto:

I - no parágrafo único do art. 5o, pelas entidades que exerçam suas atividades em articulação com ações de saúde; e (Incluído pela Lei nº 12.868, de 2013)

II - no parágrafo único do art. 12, pelas entidades que exerçam suas atividades em articulação com ações educacionais. (Incluído pela Lei nº 12.868, de 2013)

Art. 24. Os Ministérios referidos no art. 21 deverão zelar pelo cumprimento das condições que ensejaram a certificação da entidade como beneficente de assistência social, cabendo-lhes confirmar que tais exigências estão sendo atendidas por ocasião da apreciação do pedido de renovação da certificação.

§ 1o O requerimento de renovação da certificação deverá ser protocolado com antecedência mínima de 6 (seis) meses do termo final de sua validade.

§ 1o Será considerado tempestivo o requerimento de renovação da certificação protocolado no decorrer dos 360 (trezentos e sessenta) dias que antecedem o termo final de validade do certificado. (Redação dada pela Lei nº 12.868, de 2013)

§ 2o A certificação da entidade permanecerá válida até a data da decisão sobre o requerimento de renovação tempestivamente apresentado.

§ 3o Os requerimentos protocolados antes de 360 (trezentos e sessenta) dias do termo final de validade do certificado não serão conhecidos. (Incluído pela Lei nº 12.868, de 2013)

Art. 25. Constatada, a qualquer tempo, a inobservância de exigência estabelecida neste Capítulo, será cancelada a certificação, nos termos de regulamento, assegurado o contraditório e a ampla defesa.

CAPÍTULO III
DOS RECURSOS E DA REPRESENTAÇÃO

Art. 26. Da decisão que indeferir o requerimento para concessão ou renovação de certificação e da decisão que cancelar a certificação caberá recurso por parte da entidade interessada, assegurados o contraditório, a ampla defesa e a participação da sociedade civil, na forma definida em regulamento, no prazo de 30 (trinta) dias, contado da publicação da decisão.

§ 1o O disposto no caput não impede o lançamento de ofício do crédito tributário correspondente. (Incluído pela Lei nº 12.868, de 2013)

§ 2o Se o lançamento de ofício a que se refere o § 1o for impugnado no tocante aos requisitos de certificação, a autoridade julgadora da impugnação aguardará o julgamento da decisão que julgar o recurso de que trata o caput. (Incluído pela Lei nº 12.868, de 2013)

§ 3o O sobrestamento do julgamento de que trata o § 2o não impede o trâmite processual de eventual processo administrativo fiscal relativo ao mesmo ou outro lançamento de ofício, efetuado por descumprimento aos requisitos de que trata o art. 29. (Incluído pela Lei nº 12.868, de 2013)

§ 4o Se a decisão final for pela procedência do recurso, o lançamento fundado nos requisitos de certificação, efetuado nos termos do § 1o, será objeto de comunicação, pelo ministério certificador, à Secretaria da Receita Federal do Brasil, que o cancelará de ofício. (Incluído pela Lei nº 12.868, de 2013)

Art. 27. Verificado prática de irregularidade na entidade certificada, são competentes para representar, motivadamente, ao Ministério responsável pela sua área de atuação, sem prejuízo das atribuições do Ministério Público:

I - o gestor municipal ou estadual do SUS ou do SUAS, de acordo com a sua condição de gestão, bem como o gestor da educação municipal, distrital ou estadual;

II - a Secretaria da Receita Federal do Brasil;

III - os conselhos de acompanhamento e controle social previstos na Lei no 11.494, de 20 de junho de 2007, e os Conselhos de Assistência Social e de Saúde; e

IV - o Tribunal de Contas da União.

Parágrafo único. A representação será dirigida ao Ministério que concedeu a certificação e conterá a qualificação do representante, a descrição dos fatos a serem apurados e, sempre que possível, a documentação pertinente e demais informações relevantes para o esclarecimento do seu objeto.

Art. 28. Caberá ao Ministério competente:

I - dar ciência da representação à entidade, que terá o prazo de 30 (trinta) dias para apresentação de defesa; e

II - decidir sobre a representação, no prazo de 30 (trinta) dias a contar da apresentação da defesa.

§ 1o Se improcedente a representação de que trata o inciso II, o processo será arquivado.

§ 2o Se procedente a representação de que trata o inciso II, após decisão final ou transcorrido o prazo para interposição de recurso, a autoridade responsável deverá cancelar a certificação e dar ciência do fato à Secretaria da Receita Federal do Brasil.

§ 3o O representante será cientificado das decisões de que tratam os §§ 1o e 2o.

CAPÍTULO IV
DA ISENÇÃO

Seção I

Dos Requisitos

Art. 29. A entidade beneficente certificada na forma do Capítulo II fará jus à isenção do pagamento das contribuições de que tratam os arts. 22 e 23 da Lei nº 8.212, de 24 de julho de 1991, desde que atenda, cumulativamente, aos seguintes requisitos: (Vide ADIN 4480)

I - não percebam seus diretores, conselheiros, sócios, instituidores ou benfeitores, remuneração, vantagens ou benefícios, direta ou indiretamente, por qualquer forma ou título, em razão das competências, funções ou atividades que lhes sejam atribuídas pelos respectivos atos constitutivos;

I - não percebam, seus dirigentes estatutários, conselheiros, sócios, instituidores ou benfeitores, remuneração, vantagens ou benefícios, direta ou indiretamente, por qualquer forma ou título, em razão das competências, funções ou atividades que lhes sejam atribuídas pelos respectivos atos constitutivos; (Redação dada pela Lei nº 12.868, de 2013)

I – não percebam seus diretores, conselheiros, sócios, instituidores ou benfeitores remuneração, vantagens ou benefícios, direta ou indiretamente, por qualquer forma ou título, em razão das competências, funções ou atividades que lhes sejam atribuídas pelos respectivos atos constitutivos, exceto no caso de associações assistenciais ou fundações, sem fins lucrativos, cujos dirigentes poderão ser remunerados, desde que atuem efetivamente na gestão executiva, respeitados como limites máximos os valores praticados pelo mercado na região correspondente à sua área de atuação, devendo seu valor ser fixado pelo órgão de deliberação superior da entidade, registrado em ata, com comunicação ao Ministério Público, no caso das fundações; (Redação dada pela Lei nº 13.151, de 2015)

II - aplique suas rendas, seus recursos e eventual superávit integralmente no território nacional, na manutenção e desenvolvimento de seus objetivos institucionais;

III - apresente certidão negativa ou certidão positiva com efeito de negativa de débitos relativos aos tributos administrados pela Secretaria da Receita Federal do Brasil e certificado de regularidade do Fundo de Garantia do Tempo de Serviço - FGTS;

IV - mantenha escrituração contábil regular que registre as receitas e despesas, bem como a aplicação em gratuidade de forma segregada, em consonância com as normas emanadas do Conselho Federal de Contabilidade;

V - não distribua resultados, dividendos, bonificações, participações ou parcelas do seu patrimônio, sob qualquer forma ou pretexto;

VI - conserve em boa ordem, pelo prazo de 10 (dez) anos, contado da data da emissão, os documentos que comprovem a origem e a aplicação de seus recursos e os relativos a atos ou operações realizados que impliquem modificação da situação patrimonial;

VII - cumpra as obrigações acessórias estabelecidas na legislação tributária;

VIII - apresente as demonstrações contábeis e financeiras devidamente auditadas por auditor independente legalmente habilitado nos Conselhos Regionais de Contabilidade quando a receita bruta anual auferida for superior ao limite fixado pela Lei Complementar no 123, de 14 de dezembro de 2006.

§ 1o A exigência a que se refere o inciso I do caput não impede: (Incluído pela Lei nº 12.868, de 2013)

I - a remuneração aos diretores não estatutários que tenham vínculo empregatício; (Incluído pela Lei nº 12.868, de 2013)

II - a remuneração aos dirigentes estatutários, desde que recebam remuneração inferior, em seu valor bruto, a 70% (setenta por cento) do limite estabelecido para a remuneração de servidores do Poder Executivo federal. (Incluído pela Lei nº 12.868, de 2013)

§ 2o A remuneração dos dirigentes estatutários referidos no inciso II do § 1o deverá obedecer às seguintes condições: (Incluído pela Lei nº 12.868, de 2013)

I - nenhum dirigente remunerado poderá ser cônjuge ou parente até 3o (terceiro) grau, inclusive afim, de instituidores, sócios, diretores, conselheiros, benfeitores ou equivalentes da instituição de que trata o caput deste artigo; e (Incluído pela Lei nº 12.868, de 2013)

II - o total pago a título de remuneração para dirigentes, pelo exercício das atribuições estatutárias, deve ser inferior a 5 (cinco) vezes o valor correspondente ao limite individual estabelecido neste parágrafo. (Incluído pela Lei nº 12.868, de 2013)

§ 3o O disposto nos §§ 1o e 2o não impede a remuneração da pessoa do dirigente estatutário ou diretor que, cumulativamente, tenha vínculo estatutário e empregatício, exceto se houver incompatibilidade de jornadas de trabalho. (Incluído pela Lei nº 12.868, de 2013)

Art. 30. A isenção de que trata esta Lei não se estende a entidade com personalidade jurídica própria constituída e mantida pela entidade à qual a isenção foi concedida.

Seção II

Do Reconhecimento e da Suspensão do Direito à Isenção

Art. 31. O direito à isenção das contribuições sociais poderá ser exercido pela entidade a contar da data da publicação da concessão de sua certificação, desde que atendido o disposto na Seção I deste Capítulo. (Vide ADIN 4480)

Art. 32. Constatado o descumprimento pela entidade dos requisitos indicados na Seção I deste Capítulo, a fiscalização da Secretaria da Receita Federal do Brasil lavrará o auto de infração relativo ao período correspondente e relatará os fatos que demonstram o não atendimento de tais requisitos para o gozo da isenção. (Vide ADIN 4480)

§ 1o Considerar-se-á automaticamente suspenso o direito à isenção das contribuições referidas no art. 31 durante o período em que se constatar o descumprimento de requisito na forma deste artigo, devendo o lançamento correspondente ter como termo inicial a data da ocorrência da infração que lhe deu causa.

§ 2o O disposto neste artigo obedecerá ao rito do processo administrativo fiscal vigente.

CAPÍTULO V
DISPOSIÇÕES GERAIS E TRANSITÓRIAS

Art. 33. A entidade que atue em mais de uma das áreas a que se refere o art. 1o deverá, na forma de regulamento, manter escrituração contábil segregada por área, de modo a evidenciar o patrimônio, as receitas, os custos e as despesas de cada atividade desempenhada.

Art. 34. Os pedidos de concessão originária de Certificado de Entidade Beneficente de Assistência Social que não tenham sido objeto de julgamento até a data de publicação desta Lei serão remetidos, de acordo com a área de atuação da entidade, ao Ministério responsável, que os julgará nos termos da legislação em vigor à época da protocolização do requerimento.

§ 1o Caso a entidade requerente atue em mais de uma das áreas abrangidas por esta Lei, o pedido será remetido ao Ministério responsável pela área de atuação preponderante da entidade.

§ 2o Das decisões proferidas nos termos do caput que sejam favoráveis às entidades não caberá recurso.

§ 3o Das decisões de indeferimento proferidas com base no caput caberá recurso no prazo de 30 (trinta) dias, dirigido ao Ministro de Estado responsável pela área de atuação da entidade.

§ 4o É a entidade obrigada a oferecer todas as informações necessárias à análise do pedido, nos termos do art. 60 da Lei no 9.784, de 29 de janeiro de 1999.

Art. 35. Os pedidos de renovação de Certificado de Entidade Beneficente de Assistência Social protocolados e ainda não julgados até a data de publicação desta Lei serão julgados pelo Ministério da área no prazo máximo de 180 (cento e oitenta) dias a contar da referida data. (Vide Lei nº 12.868, de 2013)

§ 1o As representações em curso no CNAS, em face da renovação do certificado referida no caput, serão julgadas no prazo máximo de 180 (cento e oitenta) dias após a publicação desta Lei.

§ 2o Das decisões de indeferimento proferidas com base no caput caberá recurso no prazo de 30 (trinta) dias, com efeito suspensivo, dirigido ao Ministro de Estado responsável pela área de atuação da entidade.

Art. 36. Constatada a qualquer tempo alguma irregularidade, considerar-se-á cancelada a certificação da entidade desde a data de lavratura da ocorrência da infração, sem prejuízo da exigibilidade do crédito tributário e das demais sanções previstas em lei.

Art. 37. (VETADO)

Art. 38. As entidades certificadas até o dia imediatamente anterior ao da publicação desta Lei poderão requerer a renovação do certificado até a data de sua validade.

Art. 38-A. As certificações concedidas ou que vierem a ser concedidas com base nesta Lei para requerimentos de renovação protocolados entre 30 de novembro de 2009 e 31 de dezembro de 2011 terão prazo de validade de 5 (cinco) anos. (Incluído pela Lei nº 12.868, de 2013)

Parágrafo único. As certificações concedidas ou que vierem a ser concedidas para requerimentos de renovação protocolados entre 10 de novembro de 2008 e 31 de dezembro de 2011 terão prazo de validade de 5 (cinco) anos, no caso de entidades que atuam exclusivamente na área de assistência social ou se enquadrem nos incisos I ou IIdo § 2o do art. 18 desta Lei e que, a partir da publicação desta Lei, sejam certificadas pelo Ministério do Desenvolvimento Social e Combate à Fome. (Incluído pela Lei nº 12.868, de 2013)

Art. 38-B. As entidades de educação previstas no art. 13 que tenham protocolado requerimentos de concessão ou de renovação no período compreendido entre 30 de novembro de 2009 e 31 de dezembro de 2010 poderão ser certificadas sem a exigência de uma bolsa de estudo integral para cada 9 (nove) alunos pagantes, desde que cumpridos os demais requisitos legais. (Incluído pela Lei nº 12.868, de 2013)

CAPÍTULO VI
DISPOSIÇÕES FINAIS

Art. 39. (VETADO)

Art. 40. Os Ministérios da Saúde, da Educação e do Desenvolvimento Social e Combate à Fome informarão à Secretaria da Receita Federal do Brasil, na forma e prazo por esta determinados, os pedidos de certificação originária e de renovação deferidos, bem como os definitivamente indeferidos, nos termos da Seção IV do Capítulo II.

Parágrafo único. Os Ministérios da Saúde, da Educação e do Desenvolvimento Social e Combate à Fome procederão ao recadastramento de todas as entidades sem fins lucrativos, beneficentes ou não, atuantes em suas respectivas áreas em até 180 (cento e oitenta) dias após a data de publicação desta Lei, e tornarão os respectivos cadastros disponíveis para consulta pública.

Art. 41. As entidades isentas na forma desta Lei deverão manter, em local visível ao público, placa indicativa contendo informações sobre a sua condição de beneficente e sobre sua área de atuação, conforme o disposto no art. 1o.

Parágrafo único. As entidades referidas no caput deverão dar publicidade e manter de fácil acesso ao público todos os demonstrativos contábeis e financeiros e o relatório de atividades. (Incluído pela Lei nº 12.868, de 2013)

Art. 42. Os incisos III e IV do art. 18 da Lei no 8.742, de 7 de dezembro de 1993, passam a vigorar com a seguinte redação:

“Art. 18. ................................................
.......................................................................................
III - acompanhar e fiscalizar o processo de certificação das entidades e organizações de assistência social no Ministério do Desenvolvimento Social e Combate à Fome;
IV - apreciar relatório anual que conterá a relação de entidades e organizações de assistência social certificadas como beneficentes e encaminhá-lo para conhecimento dos Conselhos de Assistência Social dos Estados, Municípios e do Distrito Federal;
................................................................................” (NR)

Art. 43. Serão objeto de auditoria operacional os atos dos gestores públicos previstos no parágrafo único do art. 3o, no art. 8o e no § 4o do art. 11.

Art. 44. Revogam-se:

I - o art. 55 da Lei no 8.212, de 24 de julho de 1991;

II - o § 3o do art. 9o e o parágrafo único do art. 18 da Lei nº 8.742, de 7 de dezembro de 1993;

III - o art. 5o da Lei no 9.429, de 26 de dezembro de 1996, na parte que altera o art. 55 da Lei nº 8.212, de 24 de julho de 1991;

IV - o art. 1o da Lei no 9.732, de 11 de dezembro de 1998, na parte que altera o art. 55 da Lei nº 8.212, de 24 de julho de 1991;

V - o art. 21 da Lei no 10.684, de 30 de maio de 2003;

VI - o art. 3o da Medida Provisória no 2.187-13, de 24 de agosto de 2001, na parte que altera o art. 55 da Lei nº 8.212, de 24 de julho de 1991; e

VII - o art. 5º da Medida Provisória nº 2.187-13, de 24 de agosto de 2001, na parte que altera os arts. 9º e 18 da Lei nº 8.742, de 7 de dezembro de 1993.

VIII - os §§ 1o e 2o do art. 10 da Lei no 11.096, de 13 de janeiro de 2005; e (Incluído pela Lei nº 12.868, de 2013)

IX - os incisos I e II do caput do art. 11 da Lei nº 11.096, de 13 de janeiro de 2005. (Incluído pela Lei nº 12.868, de 2013)

Art. 45. Esta Lei entra em vigor na data de sua publicação.

Brasília, 27 de novembro 2009; 188o da Independência e 121o da República.

LUIZ INÁCIO LULA DA SILVA

Guido Mantega

Fernando Haddad

José Gomes Temporão

Patrus Ananias

Este texto não substitui o publicado no DOU de 30.11.2009

*

Voltar ao topo
Detalhes
Publicado por
Presidência da Republica
Tipo de documento
Legislação • Lei
Esfera
Federal
Casa
Presidência da Republica
Data de promulgação
27/11/2009
Assuntos
Constituição Federal de 1988
Lei nº 8.069, de 13 de julho de 1990
Art. 214 da Constituição Federal, de 1988
Lc nº 123 de 14 de Dezembro de 2006
Para todas as pessoas
Consulta Processual•Acompanhe seu CPF•Conheça seus direitos•Artigos•Notícias
Para profissionais
Jus IA•Jurisprudência•Doutrina•Diários Oficiais•Peças Processuais•Modelos•Legislação
Para empresas
Jusbrasil Soluções•Departamentos jurídicos•Empresas•Escritórios de advocacia•API Jusbrasil
Jusbrasil
Sobre nós•Blog Justech•Planos•Ajuda•Newsletter•Termos de Uso•Política de Privacidade•Central de Privacidade•Denúncias
A sua principal fonte de informação jurídica - © 2026 Jusbrasil. Todos os direitos reservados.

LEGISLAÇÃO

LEI Nº 12.101, DE 27 DE NOVEMBRO DE 2009

Sumário
Ir ao conteúdo
Ir à navegação principal
Página inicial
Ativar VLibras Acessibilidade Fale Conosco Congresso Senado PT 
Assuntos 
Institucional 
Deputados 
Atividade Legislativa 
Comunicação 
Transparência e prestação de contas
Pesquise no Portal da Câmara
Buscar
Início
Atividade Legislativa
Legislação
Esta página
Legislação
Legislação Informatizada - LEI Nº 13.019, DE 31 DE JULHO DE 2014 - Publicação Original
Veja também:
Texto Atualizado (HTML)  (formato doc)   (formato pdf)VetoProposição OrigináriaDados da Norma
LEI Nº 13.019, DE 31 DE JULHO DE 2014
Estabelece o regime jurídico das parcerias voluntárias, envolvendo ou não transferências de recursos financeiros, entre a administração pública e as organizações da sociedade civil, em regime de mútua cooperação, para a consecução de finalidades de interesse público; define diretrizes para a política de fomento e de colaboração com organizações da sociedade civil; institui o termo de colaboração e o termo de fomento; e altera as Leis nºs 8.429, de 2 de junho de 1992, e 9.790, de 23 de março de 1999.

     A PRESIDENTA DA REPÚBLICA
     Faço saber que o Congresso Nacional decreta e eu sanciono a seguinte Lei:

     Art. 1º Esta Lei institui normas gerais para as parcerias voluntárias, envolvendo ou não transferências de recursos financeiros, estabelecidas pela União, Estados, Distrito Federal, Municípios e respectivas autarquias, fundações, empresas públicas e sociedades de economia mista prestadoras de serviço público, e suas subsidiárias, com organizações da sociedade civil, em regime de mútua cooperação, para a consecução de finalidades de interesse público; define diretrizes para a política de fomento e de colaboração com as organizações da sociedade civil; e institui o termo de colaboração e o termo de fomento.

CAPÍTULO I

DISPOSIÇÕES PRELIMINARES


     Art. 2º Para os fins desta Lei, considera-se:

     I - organização da sociedade civil: pessoa jurídica de direito privado sem fins lucrativos que não distribui, entre os seus sócios ou associados, conselheiros, diretores, empregados ou doadores, eventuais resultados, sobras, excedentes operacionais, brutos ou líquidos, dividendos, bonificações, participações ou parcelas do seu patrimônio, auferidos mediante o exercício de suas atividades, e que os aplica integralmente na consecução do respectivo objeto social, de forma imediata ou por meio da constituição de fundo patrimonial ou fundo de reserva;

     II - administração pública: União, Estados, Distrito Federal, Municípios e respectivas autarquias, fundações, empresas públicas e sociedades de economia mista prestadoras de serviço público, e suas subsidiárias;

     III - parceria: qualquer modalidade de parceria prevista nesta Lei, que envolva ou não transferências voluntárias de recursos financeiros, entre administração pública e organizações da sociedade civil para ações de interesse recíproco em regime de mútua cooperação;

     IV - dirigente: pessoa que detenha poderes de administração, gestão ou controle da organização da sociedade civil;

     V - administrador público: agente público, titular do órgão, autarquia, fundação, empresa pública ou sociedade de economia mista competente para assinar instrumento de cooperação com organização da sociedade civil para a consecução de finalidades de interesse público;

     VI - gestor: agente público responsável pela gestão da parceria, designado por ato publicado em meio oficial de comunicação, com poderes de controle e fiscalização;

     VII - termo de colaboração: instrumento pelo qual são formalizadas as parcerias estabelecidas pela administração pública com organizações da sociedade civil, selecionadas por meio de chamamento público, para a consecução de finalidades de interesse público propostas pela administração pública, sem prejuízo das definições atinentes ao contrato de gestão e ao termo de parceria, respectivamente, conforme as Leis nºs 9.637, de 15 de maio de 1998, e 9.790, de 23 de março de 1999;

     VIII - termo de fomento: instrumento pelo qual são formalizadas as parcerias estabelecidas pela administração pública com organizações da sociedade civil, selecionadas por meio de chamamento público, para a consecução de finalidades de interesse público propostas pelas organizações da sociedade civil, sem prejuízo das definições atinentes ao contrato de gestão e ao termo de parceria, respectivamente, conforme as Leis nºs 9.637, de 15 de maio de 1998, e 9.790, de 23 de março de 1999;

     IX - conselho de política pública: órgão criado pelo poder público para atuar como instância consultiva, na respectiva área de atuação, na formulação, implementação, acompanhamento, monitoramento e avaliação de políticas públicas;

     X - comissão de seleção: órgão colegiado da administração pública destinado a processar e julgar chamamentos públicos, composto por agentes públicos, designados por ato publicado em meio oficial de comunicação, sendo, pelo menos, 2/3 (dois terços) de seus membros servidores ocupantes de cargos permanentes do quadro de pessoal da administração pública realizadora do chamamento público;

     XI - comissão de monitoramento e avaliação: órgão colegiado da administração pública destinado a monitorar e avaliar as parcerias celebradas com organizações da sociedade civil nos termos desta Lei, composto por agentes públicos, designados por ato publicado em meio oficial de comunicação, sendo, pelo menos, 2/3 (dois terços) de seus membros servidores ocupantes de cargos permanentes do quadro de pessoal da administração pública realizadora do chamamento público;

     XII - chamamento público: procedimento destinado a selecionar organização da sociedade civil para firmar parceria por meio de termo de colaboração ou de fomento, no qual se garanta a observância dos princípios da isonomia, da legalidade, da impessoalidade, da moralidade, da igualdade, da publicidade, da probidade administrativa, da vinculação ao instrumento convocatório, do julgamento objetivo e dos que lhes são correlatos;

     XIII - bens remanescentes: equipamentos e materiais permanentes adquiridos com recursos da parceria, necessários à consecução do objeto, mas que a ele não se incorporam;

     XIV - prestação de contas: procedimento em que se analisa e se avalia a execução da parceria quanto aos aspectos de legalidade, legitimidade, economicidade, eficiência e eficácia, pelo qual seja possível verificar o cumprimento do objeto da parceria e o alcance das metas e dos resultados previstos, compreendendo 2 (duas) fases:

a)	apresentação das contas, de responsabilidade da organização da sociedade civil;
b)	análise e manifestação conclusiva das contas, de responsabilidade da administração pública, sem prejuízo da atuação dos órgãos de controle;

     XV - termo aditivo: instrumento que tem por objetivo a modificação de termo de colaboração ou de termo de fomento celebrado, vedada a alteração do objeto aprovado.

     Art. 3º Não se aplicam as exigências desta Lei:

     I - às transferências de recursos homologadas pelo Congresso Nacional ou autorizadas pelo Senado Federal naquilo em que as disposições dos tratados, acordos e convenções internacionais específicas conflitarem com esta Lei, quando os recursos envolvidos forem integralmente oriundos de fonte externa de financiamento;

     II - às transferências voluntárias regidas por lei específica, naquilo em que houver disposição expressa em contrário;

     III - aos contratos de gestão celebrados com organizações sociais, na forma estabelecida pela Lei nº 9.637, de 15 de maio de 1998.

     Art. 4º Aplicam-se as disposições desta Lei, no que couber, às relações da administração pública com entidades qualificadas como organizações da sociedade civil de interesse público, de que trata a Lei nº 9.790, de 23 de março de 1999, regidas por termos de parceria.

CAPÍTULO II
 
DA CELEBRAÇÃO DO TERMO DE COLABORAÇÃO
OU DE FOMENTO


Seção I

Normas Gerais


     Art. 5º O regime jurídico de que trata esta Lei tem como fundamentos a gestão pública democrática, a participação social, o fortalecimento da sociedade civil e a transparência na aplicação dos recursos públicos, devendo obedecer aos princípios da legalidade, da legitimidade, da impessoalidade, da moralidade, da publicidade, da economicidade, da eficiência e da eficácia, além dos demais princípios constitucionais aplicáveis e dos relacionados a seguir:

     I - o reconhecimento da participação social como direito do cidadão;

     II - a solidariedade, a cooperação e o respeito à diversidade para a construção de valores de cidadania e de inclusão social e produtiva;

     III - a promoção do desenvolvimento local, regional e nacional, inclusivo e sustentável;

     IV - o direito à informação, à transparência e ao controle social das ações públicas;

     V - a integração e a transversalidade dos procedimentos, mecanismos e instâncias de participação social;

     VI - a valorização da diversidade cultural e da educação para a cidadania ativa;

     VII - a promoção e a defesa dos direitos humanos;

     VIII - a preservação, a conservação e a proteção dos recursos hídricos e do meio ambiente;

     IX - a valorização dos direitos dos povos indígenas e das comunidades tradicionais;

     X - a preservação e a valorização do patrimônio cultural brasileiro, em suas dimensões material e imaterial.

     Art. 6º São diretrizes fundamentais do regime jurídico de fomento ou de colaboração:

     I - a promoção, o fortalecimento institucional, a capacitação e o incentivo à organização da sociedade civil para a cooperação com o poder público;

     II - a priorização do controle de resultados;

     III - o incentivo ao uso de recursos atualizados de tecnologias de informação e comunicação;

     IV - o fortalecimento das ações de cooperação institucional entre os entes federados nas relações com as organizações da sociedade civil;

     V - o estabelecimento de mecanismos que ampliem a gestão de informação, transparência e publicidade;

     VI - a ação integrada, complementar e descentralizada, de recursos e ações, entre os entes da Federação, evitando sobreposição de iniciativas e fragmentação de recursos;

     VII - a sensibilização, a capacitação, o aprofundamento e o aperfeiçoamento do trabalho de gestores públicos, na implementação de atividades e projetos de interesse público e relevância social com organizações da sociedade civil;

     VIII - a adoção de práticas de gestão administrativa necessárias e suficientes para coibir a obtenção, individual ou coletiva, de benefícios ou vantagens indevidas, em decorrência da participação no respectivo processo decisório ou ocupação de posições estratégicas;

     IX - a promoção de soluções derivadas da aplicação de conhecimentos, da ciência e tecnologia e da inovação para atender necessidades e demandas de maior qualidade de vida da população em situação de desigualdade social.

Seção II

Da Capacitação de Gestores, Conselheiros e Sociedade
Civil Organizada


     Art. 7º A União, em coordenação com os Estados, Distrito Federal, Municípios e organizações da sociedade civil, instituirá programas de capacitação para gestores, representantes de organizações da sociedade civil e conselheiros dos conselhos de políticas públicas, não constituindo a participação nos referidos programas condição para o exercício da função.

     Art. 8º Ao decidir sobre a celebração de parcerias previstas nesta Lei, o administrador público considerará, obrigatoriamente, a capacidade operacional do órgão ou entidade da administração pública para instituir processos seletivos, avaliará as propostas de parceria com o rigor técnico necessário, fiscalizará a execução em tempo hábil e de modo eficaz e apreciará as prestações de contas na forma e nos prazos determinados nesta Lei e na legislação específica.

     Parágrafo único. A administração pública adotará as medidas necessárias, tanto na capacitação de pessoal, quanto no provimento dos recursos materiais e tecnológicos necessários, para assegurar a capacidade técnica e operacional de que trata o caput deste artigo.

Seção III

Da Transparência e do Controle


     Art. 9º No início de cada ano civil, a administração pública fará publicar, nos meios oficiais de divulgação, os valores aprovados na lei orçamentária anual vigente para execução de programas e ações do plano plurianual em vigor, que poderão ser executados por meio de parcerias previstas nesta Lei.

     Art. 10. A administração pública deverá manter, em seu sítio oficial na internet, a relação das parcerias celebradas, em ordem alfabética, pelo nome da organização da sociedade civil, por prazo não inferior a 5 (cinco) anos, contado da apreciação da prestação de contas final da parceria.

     Art. 11. A organização da sociedade civil deverá divulgar, em seu sítio na internet, caso mantenha, e em locais visíveis de suas sedes sociais e dos estabelecimentos em que exerça suas ações, todas as parcerias celebradas com o poder público.

     Parágrafo único. As informações de que tratam este artigo e o art. 10 deverão incluir, no mínimo:

     I - data de assinatura e identificação do instrumento de parceria e do órgão da administração pública responsável;

     II - nome da organização da sociedade civil e seu número de inscrição no Cadastro Nacional da Pessoa Jurídica - CNPJ da Secretaria da Receita Federal do Brasil - RFB;

     III - descrição do objeto da parceria;

     IV - valor total da parceria e valores liberados;

     V - situação da prestação de contas da parceria, que deverá informar a data prevista para a sua apresentação, a data em que foi apresentada, o prazo para a sua análise e o resultado conclusivo.

     Art. 12. A administração pública deverá divulgar pela internet os meios para apresentação de denúncia sobre a aplicação irregular dos recursos transferidos.

Seção IV

Do Fortalecimento da Participação Social e da Divulgação
das Ações


     Art. 13. (VETADO).

     Art. 14. O poder público, na forma de regulamento, divulgará, nos meios públicos de comunicação por radiodifusão de sons e de sons e imagens, campanhas publicitárias e programações desenvolvidas por organizações da sociedade civil, no âmbito das parcerias com a administração pública, com previsão de recursos tecnológicos e linguagem adequados à garantia de acessibilidade por pessoas com deficiência.

     Art. 15. Poderá ser criado, no âmbito do Poder Executivo federal, o Conselho Nacional de Fomento e Colaboração, de composição paritária entre representantes governamentais e organizações da sociedade civil, com a finalidade de divulgar boas práticas e de propor e apoiar políticas e ações voltadas ao fortalecimento das relações de fomento e de colaboração previstas nesta Lei.

     § 1º A composição e o funcionamento do Conselho Nacional de Fomento e Colaboração serão disciplinados em regulamento.

     § 2º Os demais entes federados também poderão criar instância participativa, nos termos deste artigo.

Seção V

Dos Termos de Colaboração e de Fomento


     Art. 16. O termo de colaboração deve ser adotado pela administração pública em caso de transferências voluntárias de recursos para consecução de planos de trabalho propostos pela administração pública, em regime de mútua cooperação com organizações da sociedade civil, selecionadas por meio de chamamento público, ressalvadas as exceções previstas nesta Lei.

     Parágrafo único. Os conselhos de políticas públicas poderão apresentar propostas à administração pública para celebração de termo de colaboração com organizações da sociedade civil.

     Art. 17. O termo de fomento deve ser adotado pela administração pública em caso de transferências voluntárias de recursos para consecução de planos de trabalho propostos pelas organizações da sociedade civil, em regime de mútua cooperação com a administração pública, selecionadas por meio de chamamento público, ressalvadas as exceções previstas nesta Lei.

Seção VI

Do Procedimento de Manifestação de Interesse Social


     Art. 18. É instituído o Procedimento de Manifestação de Interesse Social como instrumento por meio do qual as organizações da sociedade civil, movimentos sociais e cidadãos poderão apresentar propostas ao poder público para que este avalie a possibilidade de realização de um chamamento público objetivando a celebração de parceria.

     Art. 19. A proposta a ser encaminhada à administração pública deverá atender aos seguintes requisitos:

     I - identificação do subscritor da proposta;

     II - indicação do interesse público envolvido;

     III - diagnóstico da realidade que se quer modificar, aprimorar ou desenvolver e, quando possível, indicação da viabilidade, dos custos, dos benefícios e dos prazos de execução da ação pretendida.

     Art. 20. Preenchidos os requisitos do art. 19, a administração pública deverá tornar pública a proposta em seu sítio eletrônico e, verificada a conveniência e oportunidade para realização do Procedimento de Manifestação de Interesse Social, o instaurará para oitiva da sociedade sobre o tema.

     Parágrafo único. Os prazos e regras do procedimento de que trata esta Seção observarão regulamento próprio de cada ente federado, a ser aprovado após a publicação desta Lei.

     Art. 21. A realização do Procedimento de Manifestação de Interesse Social não implicará necessariamente na execução do chamamento público, que acontecerá de acordo com os interesses da administração.

     § 1º A realização do Procedimento de Manifestação de Interesse Social não dispensa a convocação por meio de chamamento público para a celebração de parceria.

     § 2º A proposição ou a participação no Procedimento de Manifestação de Interesse Social não impede a organização da sociedade civil de participar no eventual chamamento público subsequente.

Seção VII

Do Plano de Trabalho


     Art. 22. Deverá constar do plano de trabalho, sem prejuízo da modalidade de parceria adotada:

     I - diagnóstico da realidade que será objeto das atividades da parceria, devendo ser demonstrado o nexo entre essa realidade e as atividades ou metas a serem atingidas;

     II - descrição pormenorizada de metas quantitativas e mensuráveis a serem atingidas e de atividades a serem executadas, devendo estar claro, preciso e detalhado o que se pretende realizar ou obter, bem como quais serão os meios utilizados para tanto;

     III - prazo para a execução das atividades e o cumprimento das metas;

     IV - definição dos indicadores, qualitativos e quantitativos, a serem utilizados para a aferição do cumprimento das metas;

     V - elementos que demonstrem a compatibilidade dos custos com os preços praticados no mercado ou com outras parcerias da mesma natureza, devendo existir elementos indicativos da mensuração desses custos, tais como: cotações, tabelas de preços de associações profissionais, publicações especializadas ou quaisquer outras fontes de informação disponíveis ao público;

     VI - plano de aplicação dos recursos a serem desembolsados pela administração pública;

     VII - estimativa de valores a serem recolhidos para pagamento de encargos previdenciários e trabalhistas das pessoas envolvidas diretamente na consecução do objeto, durante o período de vigência proposto;

     VIII - valores a serem repassados, mediante cronograma de desembolso compatível com os gastos das etapas vinculadas às metas do cronograma físico;

     IX - modo e periodicidade das prestações de contas, compatíveis com o período de realização das etapas vinculadas às metas e com o período de vigência da parceria, não se admitindo periodicidade superior a 1 (um) ano ou que dificulte a verificação física do cumprimento do objeto;

     X - prazos de análise da prestação de contas pela administração pública responsável pela parceria.

     Parágrafo único. Cada ente federado estabelecerá, de acordo com a sua realidade, o valor máximo que poderá ser repassado em parcela única para a execução da parceria, o que deverá ser justificado pelo administrador público no plano de trabalho.

Seção VIII

Do Chamamento Público


     Art. 23. A administração pública deverá adotar procedimentos claros, objetivos, simplificados e, sempre que possível, padronizados, que orientem os interessados e facilitem o acesso direto aos órgãos da administração pública, independentemente da modalidade de parceria prevista nesta Lei.

     Parágrafo único. Sempre que possível, a administração pública estabelecerá critérios e indicadores padronizados a serem seguidos, especialmente quanto às seguintes características:

     I - objetos;

     II - metas;

     III - métodos;

     IV - custos;

     V - plano de trabalho;

     VI - indicadores, quantitativos e qualitativos, de avaliação de resultados.

     Art. 24. Para a celebração das parcerias previstas nesta Lei, a administração pública deverá realizar chamamento público para selecionar organizações da sociedade civil que torne mais eficaz a execução do objeto.

     § 1º O edital do chamamento público especificará, no mínimo:

     I - a programação orçamentária que autoriza e fundamenta a celebração da parceria;

     II - o tipo de parceria a ser celebrada;

     III - o objeto da parceria;

     IV - as datas, os prazos, as condições, o local e a forma de apresentação das propostas;

     V - as datas e os critérios objetivos de seleção e julgamento das propostas, inclusive no que se refere à metodologia de pontuação e ao peso atribuído a cada um dos critérios estabelecidos, se for o caso;

     VI - o valor previsto para a realização do objeto;

     VII - a exigência de que a organização da sociedade civil possua:

a)	no mínimo, 3 (três) anos de existência, com cadastro ativo, comprovados por meio de documentação emitida pela Secretaria da Receita Federal do Brasil, com base no Cadastro Nacional da Pessoa Jurídica - CNPJ;
b)	experiência prévia na realização, com efetividade, do objeto da parceria ou de natureza semelhante;
c)	capacidade técnica e operacional para o desenvolvimento das atividades previstas e o cumprimento das metas estabelecidas.

     § 2º É vedado admitir, prever, incluir ou tolerar, nos atos de convocação, cláusulas ou condições que comprometam, restrinjam ou frustrem o seu caráter competitivo e estabeleçam preferências ou distinções em razão da naturalidade, da sede ou do domicílio dos concorrentes ou de qualquer outra circunstância impertinente ou irrelevante para o específico objeto da parceria.

     Art. 25. É permitida a atuação em rede para a execução de iniciativas agregadoras de pequenos projetos, por 2 (duas) ou mais organizações da sociedade civil, mantida a integral responsabilidade da organização celebrante do termo de fomento ou de colaboração, desde que:

     I - essa possibilidade seja autorizada no edital do chamamento público e a forma de atuação esteja prevista no plano de trabalho;

     II - a organização da sociedade civil responsável pelo termo de fomento e/ou de colaboração possua:
a)	mais de 5 (cinco) anos de inscrição no CNPJ;
b)	mais de 3 (três) anos de experiência de atuação em rede, comprovada na forma prevista no edital; e
c)	capacidade técnica e operacional para supervisionar e orientar diretamente a atuação da organização que com ela estiver atuando em rede;

     III - seja observado o limite de atuação mínima previsto em edital referente à execução do plano de trabalho que cabe à organização da sociedade civil celebrante do termo de fomento e colaboração;

     IV - a organização da sociedade civil executante e não celebrante do termo de fomento ou de colaboração comprove regularidade jurídica e fiscal, nos termos do regulamento;

     V - seja comunicada à administração pública, no ato da celebração do termo de fomento ou de colaboração, a relação das organizações da sociedade civil executantes e não celebrantes do termo de fomento ou de colaboração.

     Parágrafo único. A relação das organizações da sociedade civil executantes e não celebrantes do termo de fomento ou de colaboração de que trata o inciso V do caput não poderá ser alterada sem prévio consentimento da administração pública, não podendo as eventuais alterações descumprir os requisitos previstos neste artigo.

     Art. 26. O edital deverá ser amplamente divulgado em página do sítio oficial do órgão ou entidade na internet.

     Parágrafo único. As pessoas jurídicas de direito público interno e as entidades personalizadas da administração poderão criar portal único na internet que reúna as informações sobre todas as parcerias por elas celebradas, bem como os editais publicados.

     Art. 27. O grau de adequação da proposta aos objetivos específicos do programa ou ação em que se insere o tipo de parceria e ao valor de referência constante do chamamento público é critério obrigatório de julgamento.

     § 1º As propostas serão julgadas por uma comissão de seleção previamente designada, nos termos desta Lei.

     § 2º Será impedida de participar da comissão de seleção pessoa que, nos últimos 5 (cinco) anos, tenha mantido relação jurídica com, ao menos, 1 (uma) das entidades em disputa.

     § 3º Configurado o impedimento previsto no § 2º, deverá ser designado membro substituto que possua qualificação equivalente à do substituído.

     § 4º A administração pública homologará e divulgará o resultado do julgamento em página do sítio oficial da administração pública na internet ou sítio eletrônico oficial equivalente.

     Art. 28. Somente depois de encerrada a etapa competitiva e ordenadas as propostas, a administração pública procederá à verificação dos documentos que comprovem o atendimento pela organização da sociedade civil selecionada dos requisitos previstos no inciso VII do § 1º do art. 24.

     § 1º Na hipótese de a organização da sociedade civil selecionada não atender aos requisitos exigidos no inciso VII do § 1º do art. 24, aquela imediatamente mais bem classificada será convidada a aceitar a celebração de parceria nos mesmos termos ofertados pela concorrente desqualificada.

     § 2º Caso a organização da sociedade civil convidada nos termos do § 1º deste artigo aceite celebrar a parceria, proceder-se-á à verificação dos documentos que comprovem o atendimento aos requisitos previstos no inciso VII do § 1º do art. 24.

     § 3º O procedimento dos §§ 1º e 2º será seguido sucessivamente até que se conclua a seleção prevista no edital.

     Art. 29. Exceto nas hipóteses expressamente previstas nesta Lei, a celebração de qualquer modalidade de parceria será precedida de chamamento público.

     Art. 30. A administração pública poderá dispensar a realização do chamamento público:

     I - no caso de urgência decorrente de paralisação ou iminência de paralisação de atividades de relevante interesse público realizadas no âmbito de parceria já celebrada, limitada a vigência da nova parceria ao prazo do termo original, desde que atendida a ordem de classificação do chamamento público, mantidas e aceitas as mesmas condições oferecidas pela organização da sociedade civil vencedora do certame;

     II - nos casos de guerra ou grave perturbação da ordem pública, para firmar parceria com organizações da sociedade civil que desenvolvam atividades de natureza continuada nas áreas de assistência social, saúde ou educação, que prestem atendimento direto ao público e que tenham certificação de entidade beneficente de assistência social, nos termos da Lei nº 12.101, de 27 de novembro de 2009;

     III - quando se tratar da realização de programa de proteção a pessoas ameaçadas ou em situação que possa comprometer a sua segurança;

     IV - (VETADO).

     Art. 31. Será considerado inexigível o chamamento público na hipótese de inviabilidade de competição entre as organizações da sociedade civil, em razão da natureza singular do objeto do plano de trabalho ou quando as metas somente puderem ser atingidas por uma entidade específica.

     Art. 32. Nas hipóteses dos arts. 30 e 31 desta Lei, a ausência de realização de processo seletivo será detalhadamente justificada pelo administrador público.

     § 1º Sob pena de nulidade do ato de formalização de parceria prevista nesta Lei, o extrato da justificativa previsto no caput deste artigo deverá ser publicado, pelo menos, 5 (cinco) dias antes dessa formalização, em página do sítio oficial da administração pública na internet e, eventualmente, a critério do administrador público, também no meio oficial de publicidade da administração pública, a fim de garantir ampla e efetiva transparência.

     § 2º Admite-se a impugnação à justificativa, desde que apresentada antes da celebração da parceria, cujo teor deve ser analisado pelo administrador público responsável.

     § 3º Havendo fundamento na impugnação, será revogado o ato que declarou a dispensa ou considerou inexigível o chamamento público, e será imediatamente iniciado o procedimento para a realização do chamamento público, conforme o caso.


Seção IX

Dos Requisitos para Celebração do Termo de Colaboração
e do Termo de Fomento


     Art. 33. Para poder celebrar as parcerias previstas nesta Lei, as organizações da sociedade civil deverão ser regidas por estatutos cujas normas disponham, expressamente, sobre:

     I - objetivos voltados à promoção de atividades e finalidades de relevância pública e social;

     II - a constituição de conselho fiscal ou órgão equivalente, dotado de atribuição para opinar sobre os relatórios de desempenho financeiro e contábil e sobre as operações patrimoniais realizadas;

     III - a previsão de que, em caso de dissolução da entidade, o respectivo patrimônio líquido seja transferido a outra pessoa jurídica de igual natureza que preencha os requisitos desta Lei e cujo objeto social seja, preferencialmente, o mesmo da entidade extinta;

     IV - normas de prestação de contas sociais a serem observadas pela entidade, que determinarão, no mínimo:

a)	a observância dos princípios fundamentais de contabilidade e das Normas Brasileiras de Contabilidade;
b)	que se dê publicidade, por qualquer meio eficaz, no encerramento do exercício fiscal, ao relatório de atividades e demonstrações financeiras da entidade, incluídas as certidões negativas de débitos com a Previdência Social e com o Fundo de Garantia do Tempo de Serviço - FGTS, colocando-os à disposição para exame de qualquer cidadão.

     Parágrafo único. Serão dispensados do atendimento ao disposto no inciso III do caput os serviços sociais autônomos destinatários de contribuições dos empregadores incidentes sobre a folha de salários.

     Art. 34. Para celebração das parcerias previstas nesta Lei, as organizações da sociedade civil deverão apresentar:

     I - prova da propriedade ou posse legítima do imóvel, caso seja necessário à execução do objeto pactuado;

     II - certidões de regularidade fiscal, previdenciária, tributária, de contribuições e de dívida ativa, de acordo com a legislação aplicável de cada ente federado;

     III - certidão de existência jurídica expedida pelo cartório de registro civil ou cópia do estatuto registrado e eventuais alterações;

     IV - documento que evidencie a situação das instalações e as condições materiais da entidade, quando essas instalações e condições forem necessárias para a realização do objeto pactuado;

     V - cópia da ata de eleição do quadro dirigente atual;

     VI - relação nominal atualizada dos dirigentes da entidade, com endereço, número e órgão expedidor da carteira de identidade e número de registro no Cadastro de Pessoas Físicas - CPF da Secretaria da Receita Federal do Brasil - RFB de cada um deles;

     VII - cópia de documento que comprove que a organização da sociedade civil funciona no endereço registrado no Cadastro Nacional da Pessoa Jurídica - CNPJ da Secretaria da Receita Federal do Brasil - RFB;

     VIII - regulamento de compras e contratações, próprio ou de terceiro, aprovado pela administração pública celebrante, em que se estabeleça, no mínimo, a observância dos princípios da legalidade, da moralidade, da boa-fé, da probidade, da impessoalidade, da economicidade, da eficiência, da isonomia, da publicidade, da razoabilidade e do julgamento objetivo e a busca permanente de qualidade e durabilidade.

     Parágrafo único. (VETADO):

     I - (VETADO);

     II - (VETADO);

     III - (VETADO).

     Art. 35. A celebração e a formalização do termo de colaboração e do termo de fomento dependerão da adoção das seguintes providências pela administração pública:

     I - realização de chamamento público, ressalvadas as hipóteses previstas nesta Lei;

     II - indicação expressa da existência de prévia dotação orçamentária para execução da parceria;

     III - demonstração de que os objetivos e finalidades institucionais e a capacidade técnica e operacional da organização da sociedade civil foram avaliados e são compatíveis com o objeto;

     IV - aprovação do plano de trabalho, a ser apresentado nos termos desta Lei;

     V - emissão de parecer de órgão técnico da administração pública, que deverá pronunciar-se, de forma expressa, a respeito:


a)	do mérito da proposta, em conformidade com a modalidade de parceria adotada;
b)	da identidade e da reciprocidade de interesse das partes na realização, em mútua cooperação, da parceria prevista nesta Lei;
c)	da viabilidade de sua execução, inclusive no que se refere aos valores estimados, que deverão ser compatíveis com os preços praticados no mercado;
d)	da verificação do cronograma de desembolso previsto no plano de trabalho, e se esse é adequado e permite a sua efetiva fiscalização;
e)	da descrição de quais serão os meios disponíveis a serem utilizados para a fiscalização da execução da parceria, assim como dos procedimentos que deverão ser adotados para avaliação da execução física e financeira, no cumprimento das metas e objetivos;
f)	da descrição de elementos mínimos de convicção e de meios de prova que serão aceitos pela administração pública na prestação de contas;
g)	da designação do gestor da parceria;
h)	da designação da comissão de monitoramento e avaliação da parceria;
i)	da aprovação do regulamento de compras e contratações apresentado pela organização da sociedade civil, demonstrando a compatibilidade entre a alternativa escolhida e a natureza e o valor do objeto da parceria, a natureza e o valor dos serviços, e as compras passíveis de contratação, conforme aprovado no plano de trabalho;

     VI - emissão de parecer jurídico do órgão de assessoria ou consultoria jurídica da administração pública acerca da possibilidade de celebração da parceria, com observância das normas desta Lei e da legislação específica.

     § 1º Não será exigida contrapartida financeira como requisito para celebração de parceria, facultada a exigência de contrapartida em bens e serviços economicamente mensuráveis.

     § 2º Caso o parecer técnico ou o parecer jurídico de que tratam, respectivamente, os incisos V e VI do caput deste artigo conclua pela possibilidade de celebração da parceria com ressalvas, deverá o administrador público cumprir o que houver sido ressalvado ou, mediante ato formal, justificar as razões pelas quais deixou de fazê-lo.

     § 3º Na hipótese de o gestor da parceria deixar de ser agente público ou ser lotado em outro órgão ou entidade, o administrador público deverá designar novo gestor, assumindo, enquanto isso não ocorrer, todas as obrigações do gestor, com as respectivas responsabilidades.

     § 4º Deverá constar, expressamente, do próprio instrumento de parceria ou de seu anexo que a organização da sociedade civil cumpre as exigências constantes do inciso VII do § 1º do art. 24 desta Lei.

     § 5º Caso a organização da sociedade civil adquira equipamentos e materiais permanentes com recursos provenientes da celebração da parceria, o bem será gravado com cláusula de inalienabilidade, e ela deverá formalizar promessa de transferência da propriedade à administração pública, na hipótese de sua extinção.

     § 6º Será impedida de participar como gestor da parceria ou como membro da comissão de monitoramento e avaliação pessoa que, nos últimos 5 (cinco) anos, tenha mantido relação jurídica com, ao menos, 1 (uma) das organizações da sociedade civil partícipes.

     § 7º Configurado o impedimento do § 6º, deverá ser designado gestor ou membro substituto que possua qualificação técnica equivalente à do substituído.

     Art. 36. Será obrigatória a estipulação do destino a ser dado aos bens remanescentes da parceria.

     Parágrafo único. Os bens remanescentes adquiridos com recursos transferidos poderão, a critério do administrador público, ser doados quando, após a consecução do objeto, não forem necessários para assegurar a continuidade do objeto pactuado, observado o disposto no respectivo termo e na legislação vigente.

     Art. 37. A organização da sociedade civil indicará ao menos 1 (um) dirigente que se responsabilizará, de forma solidária, pela execução das atividades e cumprimento das metas pactuadas na parceria, devendo essa indicação constar do instrumento da parceria.

     Art. 38. O termo de fomento e o termo de colaboração somente produzirão efeitos jurídicos após a publicação dos respectivos extratos no meio oficial de publicidade da administração pública.

Seção X

Das Vedações


     Art. 39. Ficará impedida de celebrar qualquer modalidade de parceria prevista nesta Lei a organização da sociedade civil que:

     I - não esteja regularmente constituída ou, se estrangeira, não esteja autorizada a funcionar no território nacional;

     II - esteja omissa no dever de prestar contas de parceria anteriormente celebrada;

     III - tenha como dirigente agente político de Poder ou do Ministério Público, dirigente de órgão ou entidade da administração pública de qualquer esfera governamental, ou respectivo cônjuge ou companheiro, bem como parente em linha reta, colateral ou por afinidade, até o segundo grau;

     IV - tenha tido as contas rejeitadas pela administração pública nos últimos 5 (cinco) anos, enquanto não for sanada a irregularidade que motivou a rejeição e não forem quitados os débitos que lhe foram eventualmente imputados, ou for reconsiderada ou revista a decisão pela rejeição;

     V - tenha sido punida com uma das seguintes sanções, pelo período que durar a penalidade:

a)	suspensão de participação em licitação e impedimento de contratar com a administração;
b)	declaração de inidoneidade para licitar ou contratar com a administração pública;
c)	a prevista no inciso II do art. 73 desta Lei;
d)	a prevista no inciso III do art. 73 desta Lei;

     VI - tenha tido contas de parceria julgadas irregulares ou rejeitadas por Tribunal ou Conselho de Contas de qualquer esfera da Federação, em decisão irrecorrível, nos últimos 8 (oito) anos;

     VII - tenha entre seus dirigentes pessoa:

a)	cujas contas relativas a parcerias tenham sido julgadas irregulares ou rejeitadas por Tribunal ou Conselho de Contas de qualquer esfera da Federação, em decisão irrecorrível, nos últimos 8 (oito) anos;
b)	julgada responsável por falta grave e inabilitada para o exercício de cargo em comissão ou função de confiança, enquanto durar a inabilitação;
c)	considerada responsável por ato de improbidade, enquanto durarem os prazos estabelecidos nos incisos I, II e III do art. 12 da Lei nº 8.429, de 2 de junho de 1992.

     § 1º Nas hipóteses deste artigo, é igualmente vedada a transferência de novos recursos no âmbito de parcerias em execução, excetuando-se os casos de serviços essenciais que não podem ser adiados sob pena de prejuízo ao erário ou à população, desde que precedida de expressa e fundamentada autorização do dirigente máximo do órgão ou entidade da administração pública, sob pena de responsabilidade solidária.

     § 2º Em qualquer das hipóteses previstas no caput, persiste o impedimento para celebrar parceria enquanto não houver o ressarcimento do dano ao erário, pelo qual seja responsável a organização da sociedade civil ou seu dirigente.

     § 3º A vedação prevista no inciso III do caput deste artigo, no que tange a ter como dirigente agente político de Poder, não se aplica aos serviços sociais autônomos destinatários de contribuições dos empregadores incidentes sobre a folha de salários.

     Art. 40. É vedada a celebração de parcerias previstas nesta Lei que tenham por objeto, envolvam ou incluam, direta ou indiretamente:

     I - delegação das funções de regulação, de fiscalização, do exercício do poder de polícia ou de outras atividades exclusivas do Estado;

     II - prestação de serviços ou de atividades cujo destinatário seja o aparelho administrativo do Estado.

     Parágrafo único. É vedado também ser objeto de parceria:

     I - a contratação de serviços de consultoria, com ou sem produto determinado;

     II - o apoio administrativo, com ou sem disponibilização de pessoal, fornecimento de materiais consumíveis ou outros bens.

     Art. 41. É vedada a criação de outras modalidades de parceria ou a combinação das previstas nesta Lei.

     Parágrafo único. A hipótese do caput não traz prejuízos aos contratos de gestão e termos de parceria regidos, respectivamente, pelas Leis nºs 9.637, de 15 de maio de 1998, e 9.790, de 23 de março de 1999.

CAPÍTULO III
 
DA FORMALIZAÇÃO E DA EXECUÇÃO


Seção I
Disposições Preliminares


     Art. 42. As parcerias serão formalizadas mediante a celebração de termo de colaboração ou de termo de fomento, conforme o caso, que terá como cláusulas essenciais:

     I - a descrição do objeto pactuado;

     II - as obrigações das partes;

     III - o valor total do repasse e o cronograma de desembolso;

     IV - a classificação orçamentária da despesa, mencionando-se o número, a data da nota de empenho e a declaração de que, em termos aditivos, indicar-se-ão os créditos e empenhos para sua cobertura, de cada parcela da despesa a ser transferida em exercício futuro;

     V - a contrapartida, quando for o caso, e a forma de sua aferição em bens e/ou serviços necessários à consecução do objeto;

     VI - a vigência e as hipóteses de prorrogação;

     VII - a obrigação de prestar contas com definição de forma e prazos;

     VIII - a forma de monitoramento e avaliação, com a indicação dos recursos humanos e tecnológicos que serão empregados na atividade ou, se for o caso, a indicação da participação de apoio técnico nos termos previstos no § 1º do art. 58 desta Lei;

     IX - a obrigatoriedade de restituição de recursos, nos casos previstos nesta Lei;

     X - a definição, se for o caso, da titularidade dos bens e direitos remanescentes na data da conclusão ou extinção da parceria e que, em razão dessa, houverem sido adquiridos, produzidos ou transformados com recursos repassados pela administração pública;

     XI - a estimativa de aplicação financeira e as formas de destinação dos recursos aplicados;

     XII - a prerrogativa do órgão ou da entidade transferidora dos recursos financeiros de assumir ou de transferir a responsabilidade pela execução do objeto, no caso de paralisação ou da ocorrência de fato relevante, de modo a evitar sua descontinuidade;

     XIII - a previsão de que, na ocorrência de cancelamento de restos a pagar, o quantitativo possa ser reduzido até a etapa que apresente funcionalidade;

     XIV - a obrigação de a organização da sociedade civil manter e movimentar os recursos na conta bancária específica da parceria em instituição financeira indicada pela administração pública;

     XV - o livre acesso dos servidores dos órgãos ou das entidades públicas repassadoras dos recursos, do controle interno e do Tribunal de Contas correspondentes aos processos, aos documentos, às informações referentes aos instrumentos de transferências regulamentados por esta Lei, bem como aos locais de execução do objeto;

     XVI - a faculdade dos partícipes rescindirem o instrumento, a qualquer tempo, com as respectivas condições, sanções e delimitações claras de responsabilidades, além da estipulação de prazo mínimo de antecedência para a publicidade dessa intenção, que não poderá ser inferior a 60 (sessenta) dias;

     XVII - a indicação do foro para dirimir as dúvidas decorrentes da execução da parceria, estabelecendo a obrigatoriedade da prévia tentativa de solução administrativa com a participação da Advocacia-Geral da União, em caso de os partícipes serem da esfera federal, administração direta ou indireta, nos termos do art. 11 da Medida Provisória nº 2.180-35, de 24 de agosto de 2001;

     XVIII - a obrigação de a organização da sociedade civil inserir cláusula, no contrato que celebrar com fornecedor de bens ou serviços com a finalidade de executar o objeto da parceria, que permita o livre acesso dos servidores ou empregados dos órgãos ou das entidades públicas repassadoras dos recursos públicos, bem como dos órgãos de controle, aos documentos e registros contábeis da empresa contratada, nos termos desta Lei, salvo quando o contrato obedecer a normas uniformes para todo e qualquer contratante;

     XIX - a responsabilidade exclusiva da organização da sociedade civil pelo gerenciamento administrativo e financeiro dos recursos recebidos, inclusive no que diz respeito às despesas de custeio, de investimento e de pessoal;

     XX - a responsabilidade exclusiva da organização da sociedade civil pelo pagamento dos encargos trabalhistas, previdenciários, fiscais e comerciais relativos ao funcionamento da instituição e ao adimplemento do termo de colaboração ou de fomento, não se caracterizando responsabilidade solidária ou subsidiária da administração pública pelos respectivos pagamentos, qualquer oneração do objeto da parceria ou restrição à sua execução.

     Parágrafo único. Constarão como anexos do instrumento de parceria:

     I - o plano de trabalho, que dele é parte integrante e indissociável;

     II - o regulamento de compras e contratações adotado pela organização da sociedade civil, devidamente aprovado pela administração pública parceira.


Seção II

Das Contratações Realizadas pelas Organizações
da Sociedade Civil


     Art. 43. As contratações de bens e serviços pelas organizações da sociedade civil, feitas com o uso de recursos transferidos pela administração pública, deverão observar os princípios da legalidade, da moralidade, da boa-fé, da probidade, da impessoalidade, da economicidade, da eficiência, da isonomia, da publicidade, da razoabilidade e do julgamento objetivo e a busca permanente de qualidade e durabilidade, de acordo com o regulamento de compras e contratações aprovado para a consecução do objeto da parceria.

     § 1º O processamento das compras e contratações poderá ser efetuado por meio de sistema eletrônico disponibilizado pela administração pública às organizações da sociedade civil, aberto ao público via internet, que permita aos interessados formular propostas.

     § 2º O sistema eletrônico de que trata o § 1º conterá ferramenta de notificação dos fornecedores do ramo da contratação que constem do cadastro de que trata o art. 34 da Lei nº 8.666, de 21 de junho de 1993.

     Art. 44. O gerenciamento administrativo e financeiro dos recursos recebidos é de responsabilidade exclusiva da organização da sociedade civil, inclusive no que diz respeito às despesas de custeio, investimento e pessoal.

     § 1º (VETADO).

     § 2º Os encargos trabalhistas, previdenciários, fiscais e comerciais relativos ao funcionamento da instituição e ao adimplemento do termo de colaboração ou de fomento são de responsabilidade exclusiva das organizações da sociedade civil, não se caracterizando responsabilidade solidária ou subsidiária da administração pública pelos respectivos pagamentos, qualquer oneração do objeto da parceria ou restrição à sua execução.

Seção III

Das Despesas


     Art. 45. As parcerias deverão ser executadas com estrita observância das cláusulas pactuadas, sendo vedado:

     I - realizar despesas a título de taxa de administração, de gerência ou similar;

     II - pagar, a qualquer título, servidor ou empregado público com recursos vinculados à parceria, salvo nas hipóteses previstas em lei específica e na lei de diretrizes orçamentárias;

     III - modificar o objeto, exceto no caso de ampliação de metas, desde que seja previamente aprovada a adequação do plano de trabalho pela administração pública;

     IV - (VETADO);

     V - utilizar, ainda que em caráter emergencial, recursos para finalidade diversa da estabelecida no plano de trabalho;

     VI - realizar despesa em data anterior à vigência da parceria;

     VII - efetuar pagamento em data posterior à vigência da parceria, salvo se expressamente autorizado pela autoridade competente da administração pública;

     VIII - transferir recursos para clubes, associações de servidores, partidos políticos ou quaisquer entidades congêneres;

     IX - realizar despesas com:

a)	multas, juros ou correção monetária, inclusive referentes a pagamentos ou a recolhimentos fora dos prazos, salvo se decorrentes de atrasos da administração pública na liberação de recursos financeiros;
b)	publicidade, salvo as previstas no plano de trabalho e diretamente vinculadas ao objeto da parceria, de caráter educativo, informativo ou de orientação social, das quais não constem nomes, símbolos ou imagens que caracterizem promoção pessoal;
c)	pagamento de pessoal contratado pela organização da sociedade civil que não atendam às exigências do art. 46;
d)	obras que caracterizem a ampliação de área construída ou a instalação de novas estruturas físicas.

     Art. 46. Poderão ser pagas com recursos vinculados à parceria, desde que aprovadas no plano de trabalho, as despesas com:

     I - remuneração da equipe dimensionada no plano de trabalho, inclusive de pessoal próprio da organização da sociedade civil, durante a vigência da parceria, podendo contemplar as despesas com pagamentos de impostos, contribuições sociais, Fundo de Garantia do Tempo de Serviço - FGTS, férias, décimo-terceiro salário, salários proporcionais, verbas rescisórias e demais encargos sociais, desde que tais valores:

a)	correspondam às atividades previstas para a consecução do objeto e à qualificação técnica necessária para a execução da função a ser desempenhada;
b)	sejam compatíveis com o valor de mercado da região onde atua e não superior ao teto do Poder Executivo;
c)	sejam proporcionais ao tempo de trabalho efetiva e exclusivamente dedicado à parceria celebrada;

     II - diárias referentes a deslocamento, hospedagem e alimentação nos casos em que a execução do objeto da parceria assim o exija;

     III - multas e encargos vinculados a atraso no cumprimento de obrigações previstas nos planos de trabalho e de execução financeira, em consequência do inadimplemento da administração pública em liberar, tempestivamente, as parcelas acordadas;

     IV - aquisição de equipamentos e materiais permanentes essenciais à consecução do objeto e serviços de adequação de espaço físico, desde que necessários à instalação dos referidos equipamentos e materiais.

     § 1º A remuneração de equipe de trabalho com recursos transferidos pela administração pública não gera vínculo trabalhista com o ente transferidor.

     § 2º A inadimplência da organização da sociedade civil em relação aos encargos trabalhistas não transfere à União a responsabilidade por seu pagamento.

     § 3º Serão detalhados, no plano de trabalho, os valores dos impostos, contribuições sociais, Fundo de Garantia do Tempo de Serviço - FGTS, férias, décimo-terceiro salário, salários proporcionais, verbas rescisórias e demais encargos sociais incidentes sobre as atividades previstas para a execução do objeto, de responsabilidade da entidade, a serem pagos com os recursos transferidos por meio da parceria, durante sua vigência.

     § 4º Não se incluem na previsão do § 3º os tributos de natureza direta e personalíssima que onerem a entidade.

     § 5º (VETADO).

     Art. 47. O plano de trabalho poderá incluir o pagamento de custos indiretos necessários à execução do objeto, em proporção nunca superior a 15% (quinze por cento) do valor total da parceria, desde que tais custos sejam decorrentes exclusivamente de sua realização e que:

     I - sejam necessários e proporcionais ao cumprimento do objeto;

     II - fique demonstrada, no plano de trabalho, a vinculação entre a realização do objeto e os custos adicionais pagos, bem como a proporcionalidade entre o valor pago e o percentual de custo aprovado para a execução do objeto;

     III - tais custos proporcionais não sejam pagos por qualquer outro instrumento de parceria.

     § 1º Os custos indiretos proporcionais de que trata este artigo podem incluir despesas de internet, transporte, aluguel e telefone, bem como remunerações de serviços contábeis e de assessoria jurídica, nos termos do caput, sempre que tenham por objeto o plano de trabalho pactuado com a administração pública.

     § 2º Despesas com auditoria externa contratada pela organização da sociedade civil, mesmo que relacionadas com a execução do termo de fomento e/ou de colaboração, não podem ser incluídas nos custos indiretos de que trata o caput deste artigo.

     § 3º A seleção e a contratação pela organização da sociedade civil de equipe envolvida na execução do termo de fomento e/ou de colaboração deverão observar os princípios da administração pública previstos no caput do art. 37 da Constituição Federal.

     § 4º A organização da sociedade civil deverá dar ampla transparência aos valores pagos a título de remuneração de sua equipe de trabalho vinculada à execução do termo de fomento ou de colaboração.

     § 5º Não poderão fazer jus à remuneração de que trata este artigo pessoas naturais que tenham sido condenadas por crimes:

     I - contra a administração pública ou o patrimônio público;

     II - eleitorais, para os quais a lei comine pena privativa de liberdade;

     III - de lavagem ou ocultação de bens, direitos e valores.

     § 6º O pagamento de remuneração da equipe contratada pela organização da sociedade civil com recursos destinados pela administração pública não gera vínculo trabalhista com o poder público.

     § 7º A inadimplência da organização da sociedade civil em relação aos encargos trabalhistas, fiscais e comerciais não transfere à administração pública a responsabilidade por seu pagamento nem poderá onerar o objeto do termo de fomento ou de colaboração ou restringir a sua execução.

     § 8º Quando os custos indiretos forem pagos também por outras fontes, a organização da sociedade civil deve apresentar a memória de cálculo do rateio da despesa, vedada a duplicidade ou a sobreposição de fontes de recursos no custeio de uma mesma parcela dos custos indiretos.

Seção IV

Da Liberação dos Recursos


     Art. 48. As parcelas dos recursos transferidos no âmbito da parceria serão liberadas em estrita conformidade com o cronograma de desembolso aprovado, exceto nos casos a seguir, nos quais ficarão retidas até o saneamento das impropriedades:

     I - quando houver fundados indícios de não ter ocorrido boa e regular aplicação da parcela anteriormente recebida, na forma da legislação aplicável, inclusive quando aferidos em procedimentos de fiscalização local, realizados periodicamente pela entidade ou órgão repassador dos recursos e pelos órgãos de controle interno e externo da administração pública;

     II - quando verificado desvio de finalidade na aplicação dos recursos, atrasos não justificados no cumprimento das etapas ou fases programadas, práticas atentatórias aos princípios fundamentais da administração pública nas contratações e demais atos praticados na execução da parceria ou o inadimplemento da organização da sociedade civil com relação a outras cláusulas básicas;

     III - quando a organização da sociedade civil deixar de adotar as medidas saneadoras apontadas pela administração pública ou pelos órgãos de controle interno ou externo.

     Art. 49. No caso de o plano de trabalho e o cronograma de desembolso preverem mais de 1 (uma) parcela de repasse de recursos, para recebimento de cada parcela, a organização da sociedade civil deverá:

     I - ter preenchido os requisitos exigidos nesta Lei para celebração da parceria;

     II - apresentar a prestação de contas da parcela anterior;

     III - estar em situação regular com a execução do plano de trabalho.

     Art. 50. A administração pública deverá viabilizar o acompanhamento pela internet dos processos de liberação de recursos referentes às parcerias celebradas nos termos desta Lei.

Seção V

Da Movimentação e Aplicação Financeira dos Recursos


     Art. 51. Os recursos recebidos em decorrência da parceria serão depositados e geridos em conta bancária específica, em instituição financeira pública indicada pela administração pública, e, enquanto não empregados na sua finalidade, serão obrigatoriamente aplicados em cadernetas de poupança, se a previsão de seu uso for igual ou superior a 1 (um) mês, ou em fundo de aplicação financeira de curto prazo ou operação de mercado aberto lastreada em títulos da dívida pública, quando o prazo previsto para sua utilização for igual ou inferior a 1 (um) mês.

     Parágrafo único. Os rendimentos das aplicações financeiras, quando autorizados nos termos do art. 57, serão obrigatoriamente aplicados no objeto da parceria, estando sujeitos às mesmas condições de prestação de contas exigidas para os recursos transferidos.

     Art. 52. Por ocasião da conclusão, denúncia, rescisão ou extinção da parceria, os saldos financeiros remanescentes, inclusive os provenientes das receitas obtidas das aplicações financeiras realizadas, serão devolvidos à entidade ou órgão repassador dos recursos, no prazo improrrogável de 30 (trinta) dias do evento, sob pena de imediata instauração de tomada de contas especial do responsável, providenciada pela autoridade competente do órgão ou entidade titular dos recursos.

     Art. 53. Toda a movimentação de recursos no âmbito da parceria será realizada mediante transferência eletrônica sujeita à identificação do beneficiário final e à obrigatoriedade de depósito em sua conta bancária.

     Parágrafo único. Os pagamentos deverão ser realizados mediante crédito na conta bancária de titularidade dos fornecedores e prestadores de serviços.

     Art. 54. Em casos excepcionais, desde que fique demonstrada no plano de trabalho a impossibilidade física de pagamento mediante transferência eletrônica, em função das peculiaridades do objeto da parceria, da região onde se desenvolverão as atividades e dos serviços a serem prestados, o termo de colaboração ou de fomento poderá admitir a realização de pagamentos em espécie, observados cumulativamente os seguintes pré-requisitos:

     I - os pagamentos em espécie estarão restritos, em qualquer caso, ao limite individual de R$ 800,00 (oitocentos reais) por beneficiário e ao limite global de 10% (dez por cento) do valor total da parceria, ambos calculados levando-se em conta toda a duração da parceria;

     II - os pagamentos em espécie deverão estar previstos no plano de trabalho, que especificará os itens de despesa passíveis desse tipo de execução financeira, a natureza dos beneficiários a serem pagos nessas condições e o cronograma de saques e pagamentos, com limites individuais e total, observando o previsto no inciso I;

     III - os pagamentos de que trata este artigo serão realizados por meio de saques realizados na conta do termo de fomento ou de colaboração, ficando por eles responsáveis as pessoas físicas que os realizarem, as quais:

a)	prestarão contas à organização da sociedade civil do valor total recebido, em até 30 (trinta) dias a contar da data do último saque realizado, por meio da apresentação organizada das notas fiscais ou recibos que comprovem os pagamentos efetuados e que registrem a identificação do beneficiário final de cada pagamento;
b)	devolverão à conta do termo de fomento ou de colaboração, mediante depósito bancário, a totalidade dos valores recebidos e não aplicados à data a que se refere a alínea a deste inciso;

     IV - a responsabilidade perante a administração pública pela boa e regular aplicação dos valores aplicados nos termos deste artigo permanece com a organização da sociedade civil e com os respectivos responsáveis consignados no termo de colaboração ou de fomento, podendo estes agir regressivamente em relação à pessoa física que, de qualquer forma, houver dado causa à irregularidade na aplicação desses recursos;

     V - a regulamentação poderá substituir o saque à conta do termo de fomento ou de colaboração pelo crédito do valor a ser sacado em conta designada pela entidade, hipótese em que a responsabilidade pelo desempenho das atribuições previstas no inciso III deste artigo recairá integralmente sobre os responsáveis pela organização da sociedade civil consignados no termo de colaboração ou de fomento, mantidas todas as demais condições previstas neste artigo;

     VI - será considerado irregular, caracterizará desvio de recursos e deverá ser restituído aos cofres públicos qualquer pagamento, nos termos deste artigo, de despesas não autorizadas no plano de trabalho, de despesas nas quais não esteja identificado o beneficiário final ou de despesas realizadas em desacordo com qualquer das condições ou restrições estabelecidas neste artigo.

Seção VI

Das Alterações


     Art. 55. A vigência da parceria poderá ser alterada mediante solicitação da organização da sociedade civil, devidamente formalizada e justificada, a ser apresentada na administração pública em, no mínimo, 30 (trinta) dias antes do término de sua vigência.

     Parágrafo único. A prorrogação de ofício da vigência do instrumento deve ser feita pela administração pública, antes do seu término, quando ela der causa a atraso na liberação dos recursos, limitada ao exato período do atraso verificado.

     Art. 56. A administração pública poderá autorizar o remanejamento de recursos do plano de aplicação, durante a vigência da parceria, para consecução do objeto pactuado, de modo que, separadamente para cada categoria econômica da despesa, corrente ou de capital, a organização da sociedade civil remaneje, entre si, os valores definidos para os itens de despesa, desde que, individualmente, os aumentos ou diminuições não ultrapassem 25% (vinte e cinco por cento) do valor originalmente aprovado no plano de trabalho para cada item.

     Parágrafo único. O remanejamento dos recursos de que trata o caput somente ocorrerá mediante prévia solicitação, com justificativa apresentada pela organização da sociedade civil e aprovada pela administração pública responsável pela parceria.

     Art. 57. Havendo relevância para o interesse público e mediante aprovação pela administração pública da alteração no plano de trabalho, os rendimentos das aplicações financeiras e eventuais saldos remanescentes poderão ser aplicados pela organização da sociedade civil na ampliação de metas do objeto da parceria, desde que essa ainda esteja vigente.

     Parágrafo único. As alterações previstas no caput prescindem de aprovação de novo plano de trabalho pela administração pública, mas não da análise jurídica prévia da minuta do termo aditivo da parceria e da publicação do extrato do termo aditivo em meios oficiais de divulgação.

Seção VII

Do Monitoramento e Avaliação


     Art. 58. A administração pública está incumbida de realizar procedimentos de fiscalização das parcerias celebradas antes do término da sua vigência, inclusive por meio de visitas in loco, para fins de monitoramento e avaliação do cumprimento do objeto, na forma do regulamento.

     § 1º Para a implementação do disposto no caput, o órgão poderá valer-se do apoio técnico de terceiros, delegar competência ou firmar parcerias com órgãos ou entidades que se situem próximos ao local de aplicação dos recursos.

     § 2º Nas parcerias com vigência superior a 1 (um) ano, a administração pública realizará, sempre que possível, pesquisa de satisfação com os beneficiários do plano de trabalho e utilizará os resultados como subsídio na avaliação da parceria celebrada e do cumprimento dos objetivos pactuados, bem como na reorientação e no ajuste das metas e atividades definidas.

     § 3º Para a implementação do disposto no § 2º, a administração pública poderá valer-se do apoio técnico de terceiros, delegar competência ou firmar parcerias com órgãos ou entidades que se situem próximos ao local de aplicação dos recursos.

     Art. 59. A administração pública emitirá relatório técnico de monitoramento e avaliação da parceria e o submeterá à comissão de monitoramento e avaliação designada, que o homologará, independentemente da obrigatoriedade de apresentação da prestação de contas devida pela organização da sociedade civil.

     Parágrafo único. O relatório técnico de monitoramento e avaliação da parceria, sem prejuízo de outros elementos, deverá conter:

     I - descrição sumária das atividades e metas estabelecidas;

     II - análise das atividades realizadas, do cumprimento das metas e do impacto do benefício social obtido em razão da execução do objeto até o período, com base nos indicadores estabelecidos e aprovados no plano de trabalho;

     III - valores efetivamente transferidos pela administração pública e valores comprovadamente utilizados;

     IV - quando for o caso, os valores pagos nos termos do art. 54, os custos indiretos, os remanejamentos efetuados, as sobras de recursos financeiros, incluindo as aplicações financeiras, e eventuais valores devolvidos aos cofres públicos;

     V - análise dos documentos comprobatórios das despesas apresentados pela organização da sociedade civil na prestação de contas;

     VI - análise das auditorias realizadas pelos controles interno e externo, no âmbito da fiscalização preventiva, bem como de suas conclusões e das medidas que tomaram em decorrência dessas auditorias.

     Art. 60. Sem prejuízo da fiscalização pela administração pública e pelos órgãos de controle, a execução da parceria poderá ser acompanhada e fiscalizada pelos conselhos de políticas públicas das áreas correspondentes de atuação existentes, em cada esfera de governo.

     Parágrafo único. As parcerias de que trata esta Lei estarão também sujeitas aos mecanismos de controle social previstos na legislação.


Seção VIII

Das Obrigações do Gestor


     Art. 61. São obrigações do gestor:

     I - acompanhar e fiscalizar a execução da parceria;

     II - informar ao seu superior hierárquico a existência de fatos que comprometam ou possam comprometer as atividades ou metas da parceria e de indícios de irregularidades na gestão dos recursos, bem como as providências adotadas ou que serão adotadas para sanar os problemas detectados;

     III - (VETADO);

     IV - emitir parecer técnico conclusivo de análise da prestação de contas final, com base no relatório técnico de monitoramento e avaliação de que trata o art. 59 desta Lei;

     V - disponibilizar materiais e equipamentos tecnológicos necessários às atividades de monitoramento e avaliação.

     Art. 62. Na hipótese de não execução ou má execução de parceria em vigor ou de parceria não renovada, exclusivamente para assegurar o atendimento de serviços essenciais à população, a administração pública poderá, por ato próprio e independentemente de autorização judicial, a fim de realizar ou manter a execução das metas ou atividades pactuadas:

     I - retomar os bens públicos em poder da organização da sociedade civil parceira, qualquer que tenha sido a modalidade ou título que concedeu direitos de uso de tais bens; 

     II - assumir a responsabilidade pela execução do restante do objeto previsto no plano de trabalho, no caso de paralisação ou da ocorrência de fato relevante, de modo a evitar sua descontinuidade, devendo ser considerado na prestação de contas o que foi executado pela organização da sociedade civil até o momento em que a administração assumiu essas responsabilidades.

     Parágrafo único. As situações previstas no caput devem ser comunicadas pelo gestor ao administrador público.

CAPÍTULO IV
 
 DA PRESTAÇÃO DE CONTAS


Seção I

Normas Gerais


     Art. 63. A prestação de contas deverá ser feita observando-se as regras previstas nesta Lei, além de prazos e normas de elaboração constantes do instrumento de parceria e do plano de trabalho.

     § 1º A administração pública fornecerá manuais específicos às organizações da sociedade civil por ocasião da celebração das parcerias.

     § 2º Eventuais alterações no conteúdo dos manuais referidos no § 1º deste artigo devem ser previamente informadas à organização da sociedade civil e publicadas em meios oficiais de comunicação.

     § 3º O regulamento poderá, com base na complexidade do objeto, estabelecer procedimentos diferenciados para prestação de contas, desde que o valor da parceria não seja igual ou superior a R$ 600.000,00 (seiscentos mil reais).

     Art. 64. A prestação de contas apresentada pela organização da sociedade civil deverá conter elementos que permitam ao gestor da parceria avaliar o andamento ou concluir que o seu objeto foi executado conforme pactuado, com a descrição pormenorizada das atividades realizadas e a comprovação do alcance das metas e dos resultados esperados, até o período de que trata a prestação de contas.

     § 1º Serão glosados nas prestações de contas os valores que não atenderem ao disposto no caput deste artigo e nos arts. 53 e 54.

     § 2º Os dados financeiros serão analisados com o intuito de estabelecer o nexo de causalidade entre a receita e a despesa realizada, a sua conformidade e o cumprimento das normas pertinentes.

     § 3º A análise da prestação de contas deverá considerar a verdade real e os resultados alcançados.

     § 4º A prestação de contas da parceria observará regras específicas de acordo com o montante de recursos públicos envolvidos, nos termos das disposições e procedimentos estabelecidos conforme previsto no plano de trabalho e no termo de colaboração ou de fomento.

     Art. 65. A prestação de contas e de todos os atos que dela decorram dar-se-á, sempre que possível, em plataforma eletrônica, permitindo a visualização por qualquer interessado.

     Art. 66. A prestação de contas relativa à execução do termo de colaboração ou de fomento dar-se-á mediante a análise dos documentos previstos no plano de trabalho, nos termos do inciso IX do art. 22, além dos seguintes relatórios:

     I - Relatório de Execução do Objeto, elaborado pela organização da sociedade civil, assinado pelo seu representante legal, contendo as atividades desenvolvidas para o cumprimento do objeto e o comparativo de metas propostas com os resultados alcançados, a partir do cronograma acordado, anexando-se documentos de comprovação da realização das ações, tais como listas de presença, fotos e vídeos, se for o caso;

     II - Relatório de Execução Financeira, assinado pelo seu representante legal e o contador responsável, com a descrição das despesas e receitas efetivamente realizadas.

     Parágrafo único. O órgão público signatário do termo de colaboração ou do termo de fomento deverá considerar ainda em sua análise os seguintes relatórios elaborados internamente:

     I - relatório da visita técnica in loco realizada durante a execução da parceria, nos termos do art. 58;

     II - relatório técnico de monitoramento e avaliação, homologado pela comissão de monitoramento e avaliação designada, sobre a conformidade do cumprimento do objeto e os resultados alcançados durante a execução do termo de colaboração ou de fomento.

     Art. 67. O gestor emitirá parecer técnico de análise de prestação de contas da parceria celebrada.

     § 1º No caso de parcela única, o gestor emitirá parecer técnico conclusivo para fins de avaliação do cumprimento do objeto.

     § 2º No caso de previsão de mais de 1 (uma) parcela, a organização da sociedade civil deverá apresentar prestação de contas parcial, para fins de monitoramento do cumprimento das metas do objeto vinculadas à parcela liberada.

     § 3º A análise da prestação de contas de que trata o § 2º deverá ser feita no prazo definido no plano de trabalho aprovado.

     § 4º Para fins de avaliação quanto à eficácia e efetividade das ações em execução ou que já foram realizadas, os pareceres técnicos de que tratam o caput e o § 1º deste artigo deverão, obrigatoriamente, mencionar:

     I - os resultados já alcançados e seus benefícios;

     II - os impactos econômicos ou sociais;

     III - o grau de satisfação do público-alvo;

     IV - a possibilidade de sustentabilidade das ações após a conclusão do objeto pactuado.

     Art. 68. Os documentos incluídos pela entidade na plataforma eletrônica prevista no art. 65, desde que possuam garantia da origem e de seu signatário por certificação digital, serão considerados originais para os efeitos de prestação de contas.

     Parágrafo único. Durante o prazo de 10 (dez) anos, contado do dia útil subsequente ao da prestação de contas, a entidade deve manter em seu arquivo os documentos originais que compõem a prestação de contas.

Seção II

Dos Prazos


     Art. 69. A organização da sociedade civil está obrigada a prestar as contas finais da boa e regular aplicação dos recursos recebidos no prazo de até 90 (noventa) dias a partir do término da vigência da parceria, conforme estabelecido no respectivo instrumento.

     § 1º A definição do prazo para a prestação final de contas será estabelecida, fundamentadamente, de acordo com a complexidade do objeto da parceria e integra a etapa de análise técnica da proposição e celebração do instrumento.

     § 2º O disposto no caput não impede que o instrumento de parceria estabeleça prestações de contas parciais, periódicas ou exigíveis após a conclusão de etapas vinculadas às metas do objeto.

     § 3º O dever de prestar contas surge no momento da liberação da primeira parcela dos recursos financeiros.

     § 4º O prazo referido no caput poderá ser prorrogado por até 30 (trinta) dias, desde que devidamente justificado.

     § 5º A manifestação conclusiva sobre a prestação de contas pela administração pública observará os prazos previstos no plano de trabalho aprovado e no termo de colaboração ou de fomento, devendo dispor sobre:

     I - aprovação da prestação de contas;

     II - aprovação da prestação de contas com ressalvas, quando evidenciada impropriedade ou qualquer outra falta de natureza formal de que não resulte dano ao erário; ou

     III - rejeição da prestação de contas e a determinação da imediata instauração de tomada de contas especial.

     § 6º As impropriedades que deram causa às ressalvas ou à rejeição da prestação de contas serão registradas em plataforma eletrônica de acesso público, devendo ser levadas em consideração por ocasião da assinatura de futuras parcerias com a administração pública, conforme definido em regulamento.

     Art. 70. Constatada irregularidade ou omissão na prestação de contas, será concedido prazo para a organização da sociedade civil sanar a irregularidade ou cumprir a obrigação.

     § 1º O prazo referido no caput é limitado a 45 (quarenta e cinco) dias por notificação, prorrogável, no máximo, por igual período, dentro do prazo que a administração pública possui para analisar e decidir sobre a prestação de contas e comprovação de resultados.

     § 2º Transcorrido o prazo para saneamento da irregularidade ou da omissão, não havendo o saneamento, a autoridade administrativa competente, sob pena de responsabilidade solidária, deve adotar as providências para apuração dos fatos, identificação dos responsáveis, quantificação do dano e obtenção do ressarcimento, nos termos da legislação vigente.

     Art. 71. A administração pública terá como objetivo apreciar a prestação final de contas apresentada, no prazo de 90 (noventa) a 150 (cento e cinquenta) dias, contado da data de seu recebimento, conforme estabelecido no instrumento da parceria.

     § 1º A definição do prazo para a apreciação da prestação final de contas será estabelecida, fundamentadamente, de acordo com a complexidade do objeto da parceria e integra a etapa de análise técnica da proposição e celebração do instrumento.

     § 2º O prazo para apreciar a prestação final de contas poderá ser prorrogado, no máximo, por igual período, desde que devidamente justificado.

     § 3º Na hipótese do descumprimento do prazo definido nos termos do caput e dos §§ 1º e 2º em até 15 (quinze) dias do seu transcurso, a unidade responsável pela apreciação da prestação final de contas reportará os motivos ao Ministro de Estado ou ao Secretário Estadual ou Municipal, conforme o caso, bem como ao conselho de políticas públicas e ao órgão de controle interno correspondentes.

     § 4º O transcurso do prazo definido nos termos do caput e do § 1º sem que as contas tenham sido apreciadas:

     I - não significa impossibilidade de apreciação em data posterior ou vedação a que se adotem medidas saneadoras, punitivas ou destinadas a ressarcir danos que possam ter sido causados aos cofres públicos;

     II - nos casos em que não for constatado dolo da organização da sociedade civil parceira ou de seus prepostos, sem prejuízo da atualização monetária, impede a incidência de juros de mora sobre débitos eventualmente apurados, no período entre o final do prazo referido no caput deste parágrafo e a data em que foi ultimada a apreciação pela administração pública.

     Art. 72. As prestações de contas serão avaliadas:

     I - regulares, quando expressarem, de forma clara e objetiva, a exatidão dos demonstrativos contábeis, a legalidade, a legitimidade e a economicidade dos atos de gestão do responsável;

     II - regulares com ressalva, quando evidenciarem impropriedade ou qualquer outra falta de natureza formal de que não resulte em dano ao erário;

     III - irregulares, quando comprovada qualquer das seguintes ocorrências:

a)	omissão no dever de prestar contas;
b)	prática de ato de gestão ilegal, ilegítimo ou antieconômico, ou de infração a norma legal ou regulamentar de natureza contábil, financeira, orçamentária, operacional ou patrimonial;
c)	dano ao erário decorrente de ato de gestão ilegítimo ou antieconômico;
d)	desfalque ou desvio de dinheiro, bens ou valores públicos.

     Parágrafo único. A autoridade competente para assinar o termo de fomento ou de colaboração é a responsável pela decisão sobre a aprovação da prestação de contas, tendo como base os pareceres técnico e financeiro, sendo permitida delegação a autoridades diretamente subordinadas, vedada a subdelegação.

CAPÍTULO V
 
DA RESPONSABILIDADE E DAS SANÇÕES


Seção I

Das Sanções Administrativas à Entidade


     Art. 73. Pela execução da parceria em desacordo com o plano de trabalho e com as normas desta Lei e da legislação específica, a administração poderá, garantida a prévia defesa, aplicar à organização da sociedade civil parceira as seguintes sanções:

     I - advertência;

     II - suspensão temporária da participação em chamamento público e impedimento de celebrar termos de fomento, termos de colaboração e contratos com órgãos e entidades da esfera de governo da administração pública sancionadora, por prazo não superior a 2 (dois) anos;

     III - declaração de inidoneidade para participar em chamamento público ou celebrar termos de fomento, termos de colaboração e contratos com órgãos e entidades de todas as esferas de governo, enquanto perdurarem os motivos determinantes da punição ou até que seja promovida a reabilitação perante a própria autoridade que aplicou a penalidade, que será concedida sempre que a organização da sociedade civil ressarcir a administração pelos prejuízos resultantes, e após decorrido o prazo da sanção aplicada com base no inciso II deste artigo.

     Parágrafo único. A sanção estabelecida no inciso III do caput deste artigo é de competência exclusiva do Ministro de Estado ou do Secretário Estadual ou Municipal, conforme o caso, facultada a defesa do interessado no respectivo processo, no prazo de 10 (dez) dias da abertura de vista, podendo a reabilitação ser requerida após 2 (dois) anos de sua aplicação.

Seção II
 
Da Responsabilidade pela Execução e pela Emissão
de Pareceres Técnicos


     Art. 74. (VETADO).

     Art. 75. O responsável por parecer técnico que conclua indevidamente pela capacidade operacional e técnica de organização da sociedade civil para execução de determinada parceria responderá administrativa, penal e civilmente, caso tenha agido com dolo ou culpa, pela restituição aos cofres públicos dos valores repassados, sem prejuízo da responsabilidade do administrador público, do gestor, da organização da sociedade civil e de seus dirigentes.

     Art. 76. A pessoa que atestar ou o responsável por parecer técnico que concluir pela realização de determinadas atividades ou pelo cumprimento de metas estabelecidas responderá administrativa, penal e civilmente pela restituição aos cofres públicos dos valores repassados, caso se verifique que as atividades não foram realizadas tal como afirmado no parecer ou que as metas não foram integralmente cumpridas.

Seção III
 
Dos Atos de Improbidade Administrativa


     Art. 77. O art. 10 da Lei nº 8.429, de 2 de junho de 1992, passa a vigorar com as seguintes alterações:

"Art. 10. ..................................................................................
................................................................................................

VIII - frustrar a licitude de processo licitatório ou de processo seletivo para celebração de parcerias com entidades sem fins lucrativos, ou dispensá-los indevidamente;
.........................................................................................................

XVI - facilitar ou concorrer, por qualquer forma, para a incorporação, ao patrimônio particular de pessoa física ou jurídica, de bens, rendas, verbas ou valores públicos transferidos pela administração pública a entidades privadas mediante celebração de parcerias, sem a observância das formalidades legais ou regulamentares aplicáveis à espécie;

XVII - permitir ou concorrer para que pessoa física ou jurídica privada utilize bens, rendas, verbas ou valores públicos transferidos pela administração pública a entidade privada mediante celebração de parcerias, sem a observância das formalidades legais ou regulamentares aplicáveis à espécie;

XVIII - celebrar parcerias da administração pública com entidades privadas sem a observância das formalidades legais ou regulamentares aplicáveis à espécie;

XIX - frustrar a licitude de processo seletivo para celebração de parcerias da administração pública com entidades privadas ou dispensá-lo indevidamente;

XX - agir negligentemente na celebração, fiscalização e análise das prestações de contas de parcerias firmadas pela administração pública com entidades privadas;

XXI - liberar recursos de parcerias firmadas pela administração pública com entidades privadas sem a estrita observância das normas pertinentes ou influir de qualquer forma para a sua aplicação irregular." (NR)
     Art. 78. O art. 11 da Lei nº 8.429, de 2 de junho de 1992, passa a vigorar acrescido do seguinte inciso VIII:

"Art. 11. ..................................................................................
.................................................................................................

VIII - descumprir as normas relativas à celebração, fiscalização e aprovação de contas de parcerias firmadas pela administração pública com entidades privadas." (NR)


CAPÍTULO VI
 
 DISPOSIÇÕES FINAIS


     Art. 79. (VETADO).

     Art. 80. O Sistema de Cadastramento Unificado de Fornecedores - SICAF, mantido pela União, fica disponibilizado aos demais entes federados, para fins do disposto no § 2º do art. 43 desta Lei, sem prejuízo do uso de seus próprios sistemas.

     Art. 81. Mediante autorização da União, os Estados, os Municípios e o Distrito Federal poderão aderir ao Sistema de Gestão de Convênios e Contratos de Repasse - SICONV para utilizar suas funcionalidades no cumprimento desta Lei.

     Art. 82. (VETADO).

     Art. 83. As parcerias existentes no momento da entrada em vigor desta Lei permanecerão regidas pela legislação vigente ao tempo de sua celebração, sem prejuízo da aplicação subsidiária desta Lei, naquilo em que for cabível, desde que em benefício do alcance do objeto da parceria.

     § 1º A exceção do que trata o caput, não se aplica às prorrogações de parcerias firmadas após a promulgação desta Lei, exceto no caso de prorrogação de ofício prevista em lei ou regulamento, exclusivamente para a hipótese de atraso na liberação de recursos por parte da administração pública.

     § 2º Para qualquer parceria referida no caput eventualmente firmada por prazo indeterminado antes da promulgação desta Lei, a administração pública promoverá, em prazo não superior a 1 (um) ano, sob pena de responsabilização, a repactuação para adaptação de seus termos a esta Lei ou a respectiva rescisão.

     Art. 84. Salvo nos casos expressamente previstos, não se aplica às relações de fomento e de colaboração regidas por esta Lei o disposto na Lei nº 8.666, de 21 de junho de 1993, e na legislação referente a convênios, que ficarão restritos a parcerias firmadas entre os entes federados.

     Parágrafo único. Os convênios e acordos congêneres vigentes entre as organizações da sociedade civil e a administração pública na data de entrada em vigor desta Lei serão executados até o término de seu prazo de vigência, observado o disposto no art. 83.

     Art. 85. O art. 1º da Lei nº 9.790, de 23 de março de 1999, passa a vigorar com a seguinte redação:

"Art. 1º Podem qualificar-se como Organizações da Sociedade Civil de Interesse Público as pessoas jurídicas de direito privado sem fins lucrativos que tenham sido constituídas e se encontrem em funcionamento regular há, no mínimo, 3 (três) anos, desde que os respectivos objetivos sociais e normas estatutárias atendam aos requisitos instituídos por esta Lei." (NR)
     Art. 86. A Lei nº 9.790, de 23 de março de 1999, passa a vigorar acrescida dos seguintes arts. 15-A e 15-B:

"Art. 15-A. (VETADO)."
"Art. 15-B. A prestação de contas relativa à execução do Termo de Parceria perante o órgão da entidade estatal parceira refere-se à correta aplicação dos recursos públicos recebidos e ao adimplemento do objeto do Termo de Parceria, mediante a apresentação dos seguintes documentos:

I - relatório anual de execução de atividades, contendo especificamente relatório sobre a execução do objeto do Termo de Parceria, bem como comparativo entre as metas propostas e os resultados alcançados;

II - demonstrativo integral da receita e despesa realizadas na execução;

III - extrato da execução física e financeira;

IV - demonstração de resultados do exercício;

V - balanço patrimonial;

VI - demonstração das origens e das aplicações de recursos;

VII - demonstração das mutações do patrimônio social;

VIII - notas explicativas das demonstrações contábeis, caso necessário;

IX - parecer e relatório de auditoria, se for o caso."
     Art. 87. As exigências de transparência e publicidade previstas em todas as etapas que envolvem o termo de fomento ou de colaboração, desde a fase preparatória até o fim da prestação de contas, naquilo em que for necessário, serão excepcionadas quando se tratar de programa de proteção a pessoas ameaçadas ou em situação que possa comprometer a sua segurança, na forma do regulamento.

     Art. 88. Esta Lei entra em vigor após decorridos 90 (noventa) dias de sua publicação oficial.

     Brasília, 31 de julho de 2014; 193º da Independência e 126º da República.

DILMA ROUSSEFF
José Eduardo Cardozo
Guido Mantega
Miriam Belchior
Tereza Campello
Clélio Campolina Diniz
Vinícius Nobre Lages
Gilberto Carvalho
Luís Inácio Lucena Adams
Jorge Hage Sobrinho


Este texto não substitui o original publicado no Diário Oficial da União - Seção 1 de 01/08/2014


Publicação:
Diário Oficial da União - Seção 1 - 1/8/2014, Página 1 (Publicação Original)
57ª Legislatura - 4ª Sessão Legislativa Ordinária

Câmara dos Deputados - Palácio do Congresso Nacional - Praça dos Três Poderes
Brasília - DF - Brasil - CEP 70160-900
CNPJ: 00.530.352/0001-59
Disque-Câmara: 0800-0-619-619, das 8h às 20h
Atendimento por WhatsApp: (61) 3216-0000, das 8h às 19h
Atendimento presencial: das 9h às 19h
Whatsapp 
Telegram 
Facebook 
X 
Youtube 
Tiktok 
Instagram 
Threads 
Bluesky
Sobre o portal Termos de uso Aplicativos Extranet

Todos
Pesquisar no Jusbrasil

Cadastre-se
Entrar
Home
Consulta processual
Jurisprudência
Doutrina
Artigos
Notícias
Diários
Peças Processuais
Modelos
Legislação
Diretório de Advogados

LEI Nº 11.438, DE 29 DE DEZEMBRO DE 2006
Dispõe sobre incentivos e benefícios para fomentar as atividades de caráter desportivo e dá outras providências


Sumário

Revogado pela Lei Complementar nº 222, de 2025

O PRESIDENTE DA REPÚBLICA Faço saber que o Congresso Nacional decreta e eu sanciono a seguinte Lei:

CAPÍTULO I
DOS INCENTIVOS AO DESPORTO

Art. 1º Até o ano-calendário de 2015, inclusive, poderão ser deduzidos do imposto de renda devido, apurado na Declaração de Ajuste Anual pela pessoa física, ou em cada período de apuração, trimestral ou anual, pela pessoa jurídica tributada com base no lucro real os valores despendidos a título de patrocínio ou doação, no apoio direto a projetos desportivos e paradesportivos previamente aprovados pelo Ministério do Esporte. (Vide Medida Provisória nº 342, de 2006).

Art. 1º A partir do ano-calendário de 2007 e até o ano-calendário de 2015, inclusive, poderão ser deduzidos do imposto de renda devido, apurado na Declaração de Ajuste Anual pelas pessoas físicas ou em cada período de apuração, trimestral ou anual, pela pessoa jurídica tributada com base no lucro real os valores despendidos a título de patrocínio ou doação, no apoio direto a projetos desportivos e paradesportivos previamente aprovados pelo Ministério do Esporte. (Redação dada pela Lei nº 11.472, de 2007)

Art. 1º A partir do ano-calendário de 2007 e até o ano-calendário de 2022, inclusive, poderão ser deduzidos do imposto de renda devido, apurado na Declaração de Ajuste Anual pelas pessoas físicas ou em cada período de apuração, trimestral ou anual, pela pessoa jurídica tributada com base no lucro real os valores despendidos a título de patrocínio ou doação, no apoio direto a projetos desportivos e paradesportivos previamente aprovados pelo Ministério do Esporte. (Redação dada pela Lei nº 13.155, de 2015)

Art. 1º A partir do ano-calendário de 2007, até o ano-calendário de 2027, inclusive, poderão ser deduzidos do imposto de renda devido, apurado na Declaração de Ajuste Anual pelas pessoas físicas ou em cada período de apuração, trimestral ou anual, pela pessoa jurídica tributada com base no lucro real, os valores despendidos a título de patrocínio ou doação no apoio direto a projetos desportivos e paradesportivos previamente aprovados pelo Ministério da Cidadania. (Redação dada pela Lei nº 14.439, de 2022) Produção de efeitos

§ 1º As deduções de que trata o caput deste artigo ficam limitadas:

I - relativamente à pessoa jurídica, a 4% (quatro por cento) do imposto devido, observado o limite previsto no inciso II do caput do art. 6º da Lei nº 9.532, de 10 de dezembro de 1997, em cada período de apuração; (Vide Medida Provisória nº 342, de 2006).

I - relativamente à pessoa jurídica, a 1% (um por cento) do imposto devido, observado o disposto no § 4º do art. 3º da Lei nº 9.249, de 26 de dezembro de 1995, em cada período de apuração; (Redação dada pela Lei nº 11.472, de 2007)

I - relativamente à pessoa jurídica, a 2% (dois por cento) do imposto devido, observado o disposto no § 4º do art. 3º da Lei nº 9.249, de 26 de dezembro de 1995, em cada período de apuração; (Redação dada pela Lei nº 14.439, de 2022) Produção de efeitos

II - relativamente à pessoa física, a 6% (seis por cento) do imposto devido na Declaração de Ajuste Anual, conjuntamente com as deduções de que trata o art. 22 da Lei nº 9.532, de 10 de dezembro de 1997.

II - relativamente à pessoa física, a 7% (sete por cento) do imposto devido na Declaração de Ajuste Anual, conjuntamente com as deduções a que se referem os incisos I, II e III do art. 12 da Lei nº 9.250, de 26 de dezembro de 1995. (Redação dada pela Lei nº 14.439, de 2022) Produção de efeitos

§ 2º As pessoas jurídicas não poderão deduzir os valores de que trata o caput deste artigo para fins de determinação do lucro real e da base de cálculo da Contribuição Social sobre o Lucro Líquido - CSLL.

§ 3º Os benefícios de que trata este artigo não excluem ou reduzem outros benefícios fiscais e deduções em vigor.

§ 4º Não são dedutíveis os valores destinados a patrocínio ou doação em favor de projetos que beneficiem, direta ou indiretamente, pessoa física ou jurídica vinculada ao doador ou patrocinador.

§ 5º Consideram-se vinculados ao patrocinador ou ao doador:

I - a pessoa jurídica da qual o patrocinador ou o doador seja titular, administrador, gerente, acionista ou sócio, na data da operação ou nos 12 (doze) meses anteriores;

II - o cônjuge, os parentes até o terceiro grau, inclusive os afins, e os dependentes do patrocinador, do doador ou dos titulares, administradores, acionistas ou sócios de pessoa jurídica vinculada ao patrocinador ou ao doador, nos termos do inciso I deste parágrafo;

III - a pessoa jurídica coligada, controladora ou controlada, ou que tenha como titulares, administradores acionistas ou sócios alguma das pessoas a que se refere o inciso II deste parágrafo.

§ 6º O limite previsto no inciso I do § 1º deste artigo será de 4% (quatro por cento) quando o projeto desportivo ou paradesportivo for destinado a promover a inclusão social por meio do esporte, preferencialmente em comunidades em situação de vulnerabilidade social, nos termos do § 1º do art. 2º desta Lei, conjuntamente com as deduções a que se referem o art. 26 da Lei nº 8.313, de 23 de dezembro de 1991, e o art. 1º da Lei nº 8.685, de 20 de julho de 1993. (Incluído pela Lei nº 14.439, de 2022) Produção de efeitos

§ 7º (VETADO). (Incluído pela Lei nº 14.439, de 2022) Produção de efeitos

Art. 2º Os projetos desportivos, em cujo favor serão captados e direcionados os recursos oriundos dos incentivos previstos nesta Lei, atenderão a pelo menos uma das seguintes manifestações: (Vide Medida Provisória nº 342, de 2006).

Art. 2º Os projetos desportivos e paradesportivos, em cujo favor serão captados e direcionados os recursos oriundos dos incentivos previstos nesta Lei, atenderão a pelo menos uma das seguintes manifestações, nos termos e condições definidas em regulamento: (Redação dada pela Lei nº 11.472, de 2007)

I - desporto educacional;

II - desporto de participação;

III - desporto de rendimento.

§ 1º Poderão receber os recursos oriundos dos incentivos previstos nesta Lei os projetos desportivos destinados a promover a inclusão social por meio do esporte, preferencialmente em comunidades de vulnerabilidade social.

§ 2º É vedada a utilização dos recursos oriundos dos incentivos previstos nesta Lei para o pagamento de remuneração de atletas profissionais, nos termos da Lei nº 9.615, de 24 de março de 1998, em qualquer modalidade desportiva.

§ 3º O proponente não poderá captar, para cada projeto, entre patrocínio e doação, valor superior ao aprovado pelo Ministério do Esporte, na forma do art. 4º desta Lei.

Art. 3º Para fins do disposto nesta Lei, considera-se:

I - patrocínio:

a ) a transferência gratuita, em caráter definitivo, ao proponente, de numerário para a realização de projetos esportivos, com finalidade promocional e institucional de publicidade; (Vide Medida Provisória nº 342, de 2006).

b) o pagamento de despesas ou a utilização de bens, móveis ou imóveis, do patrimônio do patrocinador, sem transferência de domínio, para a realização de projetos esportivos pelo proponente; (Vide Medida Provisória nº 342, de 2006).

a) a transferência gratuita, em caráter definitivo, ao proponente de que trata o inciso V do caput deste artigo de numerário para a realização de projetos desportivos e paradesportivos, com finalidade promocional e institucional de publicidade; (Redação dada pela Lei nº 11.472, de 2007)

b) a cobertura de gastos ou a utilização de bens, móveis ou imóveis, do patrocinador, sem transferência de domínio, para a realização de projetos desportivos e paradesportivos pelo proponente de que trata o inciso V do caput deste artigo; (Redação dada pela Lei nº 11.472, de 2007)

II - doação:

a) a transferência gratuita, em caráter definitivo, ao proponente, de numerário, bens ou serviços para a realização de projetos esportivos, desde que não empregados em publicidade, ainda que para divulgação das atividades objeto do respectivo projeto; (Vide Medida Provisória nº 342, de 2006).

b) a distribuição gratuita de ingressos para eventos de caráter esportivo por pessoa jurídica a empregados e seus dependentes legais ou a integrantes de comunidades de vulnerabilidade social; (Vide Medida Provisória nº 342, de 2006).

a) a transferência gratuita, em caráter definitivo, ao proponente de que trata o inciso V do caput deste artigo de numerário, bens ou serviços para a realização de projetos desportivos e paradesportivos, desde que não empregados em publicidade, ainda que para divulgação das atividades objeto do respectivo projeto; (Redação dada pela Lei nº 11.472, de 2007)

b) a distribuição gratuita de ingressos para eventos de caráter desportivo e paradesportivo por pessoa jurídica a empregados e seus dependentes legais ou a integrantes de comunidades de vulnerabilidade social; (Redação dada pela Lei nº 11.472, de 2007)

III - patrocinador: a pessoa física ou jurídica, contribuinte do imposto de renda, que apóie projetos aprovados pelo Ministério do Esporte nos termos do inciso I do caput deste artigo;

IV - doador: a pessoa física ou jurídica, contribuinte do imposto de renda, que apóie projetos aprovados pelo Ministério do Esporte nos termos do inciso II do caput deste artigo;

V - proponente: a pessoa jurídica de direito público, ou de direito privado com fins não econômicos, de natureza esportiva, que tenha projetos aprovados nos termos desta Lei.

V - proponente: a pessoa jurídica de direito público, de direito privado com fins não econômicos, de natureza esportiva, bem como as instituições de ensino fundamental, médio e superior, que tenham projeto aprovado nos termos desta Lei. (Redação dada pela Lei nº 14.439, de 2022) Produção de efeitos

V - proponente: a pessoa física ou a pessoa jurídica de direito público, ou de direito privado com fins não econômicos, de natureza esportiva, bem como as instituições de ensino fundamental, médio e superior, que tenham projeto aprovado nos termos desta Lei. (Redação dada pela Lei nº 14.933, de 2024)

Art. 4º A avaliação e a aprovação do enquadramento dos projetos apresentados na forma prevista no art. 5º desta Lei cabem a uma Comissão Técnica vinculada ao Ministério do Esporte, garantindo-se a participação de representantes governamentais, designados pelo Ministro do Esporte, e representantes do setor desportivo, indicados pelo Conselho Nacional de Esporte.

Parágrafo único. A composição, a organização e o funcionamento da comissão serão estipulados e definidos em regulamento.

Art. 5º Os projetos desportivos e paradesportivos de que trata o art. 1º desta Lei serão submetidos ao Ministério do Esporte, acompanhados da documentação estabelecida em regulamento e de orçamento analítico.

§ 1º A aprovação dos projetos de que trata o caput deste artigo somente terá eficácia após a publicação de ato oficial contendo o título do projeto aprovado, a instituição responsável, o valor autorizado para captação e o prazo de validade da autorização.

§ 2º Os projetos aprovados e executados com recursos desta Lei serão acompanhados e avaliados pelo Ministério do Esporte.

CAPÍTULO II
DISPOSIÇÕES GERAIS

Art. 6º A divulgação das atividades, bens ou serviços resultantes dos projetos desportivos e paradesportivos financiados nos termos desta Lei mencionará o apoio institucional, com inserção da Bandeira Nacional, nos termos da Lei nº 5.700, de 1º de setembro de 1971.

Art. 7º A prestação de contas dos projetos beneficiados pelos incentivos previstos nesta Lei fica a cargo do proponente e será apresentada ao Ministério do Esporte, na forma estabelecida pelo regulamento.

Art. 8º O Ministério do Esporte informará à Secretaria da Receita Federal, até o último dia útil do mês de março, os valores correspondentes a doação ou patrocínio, destinados ao apoio direto a projetos desportivos e paradesportivos, no ano-calendário anterior.

Art. 8º O Ministério do Esporte informará à Secretaria da Receita Federal do Brasil - RFB os valores correspondentes a doação ou patrocínio destinados ao apoio direto a projetos desportivos e paradesportivos, no ano-calendário anterior. (Redação dada pela Lei nº 13.043, de 2014)

Parágrafo único. As informações de que trata este artigo serão prestadas na forma e condições a serem estabelecidas pela Secretaria da Receita Federal.

Parágrafo único. A RFB estabelecerá, em ato normativo próprio, a forma, o prazo e as condições para o cumprimento da obrigação acessória a que se refere o caput deste artigo. (Redação dada pela Lei nº 13.043, de 2014)

Art. 9º Compete à Secretaria da Receita Federal, no âmbito de suas atribuições, a fiscalização dos incentivos previstos nesta Lei.

Art. 10. Constituem infração aos dispositivos desta Lei:

I - o recebimento pelo patrocinador ou doador de qualquer vantagem financeira ou material em decorrência do patrocínio ou da doação que com base nela efetuar;

II - agir o patrocinador, o doador ou o proponente com dolo, fraude ou simulação para utilizar incentivo nela previsto;

III - desviar para finalidade diversa da fixada nos respectivos projetos dos recursos, bens, valores ou benefícios com base nela obtidos;

IV - adiar, antecipar ou cancelar, sem justa causa, atividade desportiva beneficiada pelos incentivos nela previstos;

V - o descumprimento de qualquer das suas disposições ou das estabelecidas em sua regulamentação.

Art. 11. As infrações aos dispositivos desta Lei, sem prejuízo das demais sanções cabíveis, sujeitarão:

I - o patrocinador ou o doador ao pagamento do imposto não recolhido, além das penalidades e demais acréscimos previstos na legislação;

II - o infrator ao pagamento de multa correspondente a 2 (duas) vezes o valor da vantagem auferida indevidamente, sem prejuízo do disposto no inciso I do caput deste artigo.

Parágrafo único. O proponente é solidariamente responsável por inadimplência ou irregularidade verificada quanto ao disposto no inciso I do caput deste artigo.

Art. 12. Os recursos provenientes de doações ou patrocínios efetuados nos termos do art. 1º desta Lei serão depositados e movimentados em conta bancária específica, no Banco do Brasil S.A. ou na Caixa Econômica Federal, que tenha como titular o proponente do projeto aprovado pelo Ministério do Esporte.

Parágrafo único. Não são dedutíveis, nos termos desta Lei, os valores em relação aos quais não se observe o disposto neste artigo.

Art. 13. Todos os recursos utilizados no apoio direto a projetos desportivos e paradesportivos previstos nesta Lei deverão ser disponibilizados na rede mundial de computadores, de acordo com a Lei nº 9.755, de 16 de dezembro de 1998.

Parágrafo único. Os recursos a que se refere o caput deste artigo ainda deverão ser disponibilizados, mensalmente, no sítio do Ministério do Esporte, constando a sua origem e destinação.

Art. 13-A. O valor máximo das deduções de que trata o art. 1º desta Lei será fixado anualmente em ato do Poder Executivo, com base em um percentual da renda tributável das pessoas físicas e do imposto sobre a renda devido por pessoas jurídicas tributadas com base no lucro real. (Incluído pela Lei nº 11.472, de 2007)

Art. 13-A. O valor máximo das deduções de que trata o art. 1º desta Lei será fixado anualmente em ato do Poder Executivo, com base em um percentual da renda tributável das pessoas físicas e do imposto sobre a renda devido por pessoas jurídicas. (Redação dada pela Lei nº 14.439, de 2022) Produção de efeitos

Parágrafo único. Do valor máximo a que se refere o caput deste artigo o Poder Executivo fixará os limites a serem aplicados para cada uma das manifestações de que trata o art. 2º desta Lei. (Incluído pela Lei nº 11.472, de 2007)

Art. 13-B. A divulgação das atividades, bens ou serviços resultantes de projetos desportivos e paradesportivos, culturais e de produção audiovisual e artística financiados com recursos públicos mencionará o apoio institucional com a inserção da Bandeira Nacional, nos termos da Lei nº 5.700, de 1º de setembro de 1971. (Incluído pela Lei nº 11.472, de 2007)

Art. 13-C. Sem prejuízo do disposto no art. 166 da Constituição Federal, os Ministérios da Cultura e do Esporte encaminharão ao Congresso Nacional relatórios detalhados acerca da destinação e regular aplicação dos recursos provenientes das deduções e benefícios fiscais previstos nas Leis nºs 8.313, de 23 de dezembro de 1991, e 11.438, de 29 de dezembro de 2006, para fins de acompanhamento e fiscalização orçamentária das operações realizadas. (Incluído pela Lei nº 11.472, de 2007)

Art. 14. Esta Lei entra em vigor na data de sua publicação.

Brasília, 29 de dezembro de 2006; 185º da Independência e 118º da República.

LUIZ INÁCIO LULA DA SILVA

Orlando Silva de Jesus Júnior

Este texto não substitui o publicado no DOU de 29.12.2006 - Edição extra

*

Voltar ao topo
Detalhes
Publicado por
Presidência da Republica
Tipo de documento
Legislação • Lei
Esfera
Federal
Casa
Presidência da Republica
Data de promulgação
29/12/2006
Assuntos
Constituição Federal de 1988
Art. 166 da Constituição Federal, de 1988
Medida Provisória nº 342, de 29 de dezembro de 2006
Lei nº 11.438, de 29 de dezembro de 2006
Para todas as pessoas
Consulta Processual•Acompanhe seu CPF•Conheça seus direitos•Artigos•Notícias
Para profissionais
Jus IA•Jurisprudência•Doutrina•Diários Oficiais•Peças Processuais•Modelos•Legislação
Para empresas
Jusbrasil Soluções•Departamentos jurídicos•Empresas•Escritórios de advocacia•API Jusbrasil
Jusbrasil
Sobre nós•Blog Justech•Planos•Ajuda•Newsletter•Termos de Uso•Política de Privacidade•Central de Privacidade•Denúncias
A sua principal fonte de informação jurídica - © 2026 Jusbrasil. Todos os direitos reservados.

LEGISLAÇÃO

LEI Nº 11.438, DE 29 DE DEZEMBRO DE 2006

Sumário


Todos
Pesquisar no Jusbrasil

Cadastre-se
Entrar
Home
Consulta processual
Jurisprudência
Doutrina
Artigos
Notícias
Diários
Peças Processuais
Modelos
Legislação
Diretório de Advogados

LEI Nº 9.790, DE 23 DE MARÇO DE 1999
Dispõe sobre a qualificação de pessoas jurídicas de direito privado, sem fins lucrativos, como Organizações da Sociedade Civil de Interesse Público, institui e disciplina o Termo de Parceria, e dá outras providências


Sumário

Regulamento

(Vide Lei nº 13.800, de 2019)

O PRESIDENTE DA REPÚBLICA Faço saber que o Congresso Nacional decreta e eu sanciono a seguinte Lei:

CAPÍTULO I
DA QUALIFICAÇÃO COMO ORGANIZAÇÃO DA SOCIEDADE CIVIL

DE INTERESSE PÚBLICO

Art. 1o Podem qualificar-se como Organizações da Sociedade Civil de Interesse Público as pessoas jurídicas de direito privado, sem fins lucrativos, desde que os respectivos objetivos sociais e normas estatutárias atendam aos requisitos instituídos por esta Lei.

Art. 1o Podem qualificar-se como Organizações da Sociedade Civil de Interesse Público as pessoas jurídicas de direito privado sem fins lucrativos que tenham sido constituídas e se encontrem em funcionamento regular há, no mínimo, 3 (três) anos, desde que os respectivos objetivos sociais e normas estatutárias atendam aos requisitos instituídos por esta Lei. (Redação dada pela Lei nº 13.019, de 2014) (Vigência)

§ 1o Para os efeitos desta Lei, considera-se sem fins lucrativos a pessoa jurídica de direito privado que não distribui, entre os seus sócios ou associados, conselheiros, diretores, empregados ou doadores, eventuais excedentes operacionais, brutos ou líquidos, dividendos, bonificações, participações ou parcelas do seu patrimônio, auferidos mediante o exercício de suas atividades, e que os aplica integralmente na consecução do respectivo objeto social.

§ 2o A outorga da qualificação prevista neste artigo é ato vinculado ao cumprimento dos requisitos instituídos por esta Lei.

Art. 2o Não são passíveis de qualificação como Organizações da Sociedade Civil de Interesse Público, ainda que se dediquem de qualquer forma às atividades descritas no art. 3o desta Lei:

I - as sociedades comerciais;

II - os sindicatos, as associações de classe ou de representação de categoria profissional;

III - as instituições religiosas ou voltadas para a disseminação de credos, cultos, práticas e visões devocionais e confessionais;

IV - as organizações partidárias e assemelhadas, inclusive suas fundações;

V - as entidades de benefício mútuo destinadas a proporcionar bens ou serviços a um círculo restrito de associados ou sócios;

VI - as entidades e empresas que comercializam planos de saúde e assemelhados;

VII - as instituições hospitalares privadas não gratuitas e suas mantenedoras;

VIII - as escolas privadas dedicadas ao ensino formal não gratuito e suas mantenedoras;

IX - as organizações sociais;

X - as cooperativas;

XI - as fundações públicas;

XII - as fundações, sociedades civis ou associações de direito privado criadas por órgão público ou por fundações públicas;

XIII - as organizações creditícias que tenham quaisquer tipo de vinculação com o sistema financeiro nacional a que se refere o art. 192 da Constituição Federal.

Parágrafo único. Não constituem impedimento à qualificação como Organização da Sociedade Civil de Interesse Público as operações destinadas a microcrédito realizadas com instituições financeiras na forma de recebimento de repasses, venda de operações realizadas ou atuação como mandatárias. (Incluído pela Lei nº 13.999, de 2020)

Parágrafo único. Não constituem impedimento à qualificação como Organização da Sociedade Civil de Interesse Público as operações destinadas a microcrédito, microcrédito produtivo orientado e microfinanças realizadas com instituições financeiras na forma de recebimento de repasses, venda de operações realizadas ou atuação como mandatárias. (Redação dada pela Lei nº 15.364, de 2026)

Art. 3o A qualificação instituída por esta Lei, observado em qualquer caso, o princípio da universalização dos serviços, no respectivo âmbito de atuação das Organizações, somente será conferida às pessoas jurídicas de direito privado, sem fins lucrativos, cujos objetivos sociais tenham pelo menos uma das seguintes finalidades:

I - promoção da assistência social;

II - promoção da cultura, defesa e conservação do patrimônio histórico e artístico;

III - promoção gratuita da educação, observando-se a forma complementar de participação das organizações de que trata esta Lei;

IV - promoção gratuita da saúde, observando-se a forma complementar de participação das organizações de que trata esta Lei;

V - promoção da segurança alimentar e nutricional;

VI - defesa, preservação e conservação do meio ambiente e promoção do desenvolvimento sustentável;

VII - promoção do voluntariado;

VIII - promoção do desenvolvimento econômico e social e combate à pobreza;

IX - experimentação, não lucrativa, de novos modelos sócio-produtivos e de sistemas alternativos de produção, comércio, emprego e crédito;

X - promoção de direitos estabelecidos, construção de novos direitos e assessoria jurídica gratuita de interesse suplementar;

XI - promoção da ética, da paz, da cidadania, dos direitos humanos, da democracia e de outros valores universais;

XII - estudos e pesquisas, desenvolvimento de tecnologias alternativas, produção e divulgação de informações e conhecimentos técnicos e científicos que digam respeito às atividades mencionadas neste artigo.

XIII - estudos e pesquisas para o desenvolvimento, a disponibilização e a implementação de tecnologias voltadas à mobilidade de pessoas, por qualquer meio de transporte. (Incluído pela Lei nº 13.019, de 2014) (Vigência)

XIV – disponibilização de produtos ou serviços nas áreas de microcrédito, microcrédito produtivo orientado e microfinanças. (Incluído pela Lei nº 15.364, de 2026)

Parágrafo único. Para os fins deste artigo, a dedicação às atividades nele previstas configura-se mediante a execução direta de projetos, programas, planos de ações correlatas, por meio da doação de recursos físicos, humanos e financeiros, ou ainda pela prestação de serviços intermediários de apoio a outras organizações sem fins lucrativos e a órgãos do setor público que atuem em áreas afins.

Art. 4o Atendido o disposto no art. 3o, exige-se ainda, para qualificarem-se como Organizações da Sociedade Civil de Interesse Público, que as pessoas jurídicas interessadas sejam regidas por estatutos cujas normas expressamente disponham sobre:

I - a observância dos princípios da legalidade, impessoalidade, moralidade, publicidade, economicidade e da eficiência;

II - a adoção de práticas de gestão administrativa, necessárias e suficientes a coibir a obtenção, de forma individual ou coletiva, de benefícios ou vantagens pessoais, em decorrência da participação no respectivo processo decisório;

III - a constituição de conselho fiscal ou órgão equivalente, dotado de competência para opinar sobre os relatórios de desempenho financeiro e contábil, e sobre as operações patrimoniais realizadas, emitindo pareceres para os organismos superiores da entidade;

IV - a previsão de que, em caso de dissolução da entidade, o respectivo patrimônio líquido será transferido a outra pessoa jurídica qualificada nos termos desta Lei, preferencialmente que tenha o mesmo objeto social da extinta;

V - a previsão de que, na hipótese de a pessoa jurídica perder a qualificação instituída por esta Lei, o respectivo acervo patrimonial disponível, adquirido com recursos públicos durante o período em que perdurou aquela qualificação, será transferido a outra pessoa jurídica qualificada nos termos desta Lei, preferencialmente que tenha o mesmo objeto social;

VI - a possibilidade de se instituir remuneração para os dirigentes da entidade que atuem efetivamente na gestão executiva e para aqueles que a ela prestam serviços específicos, respeitados, em ambos os casos, os valores praticados pelo mercado, na região correspondente a sua área de atuação;

VII - as normas de prestação de contas a serem observadas pela entidade, que determinarão, no mínimo:

a) a observância dos princípios fundamentais de contabilidade e das Normas Brasileiras de Contabilidade;

b) que se dê publicidade por qualquer meio eficaz, no encerramento do exercício fiscal, ao relatório de atividades e das demonstrações financeiras da entidade, incluindo-se as certidões negativas de débitos junto ao INSS e ao FGTS, colocando-os à disposição para exame de qualquer cidadão;

c) a realização de auditoria, inclusive por auditores externos independentes se for o caso, da aplicação dos eventuais recursos objeto do termo de parceria conforme previsto em regulamento;

d) a prestação de contas de todos os recursos e bens de origem pública recebidos pelas Organizações da Sociedade Civil de Interesse Público será feita conforme determina o parágrafo único do art. 70 da Constituição Federal.

Parágrafo único. É permitida a participação de servidores públicos na composição de conselho de Organização da Sociedade Civil de Interesse Público, vedada a percepção de remuneração ou subsídio, a qualquer título.(Vide Medida Provisória nº 37, de 2002)(Incluído pela Lei nº 10.539, de 2002)

Parágrafo único. É permitida a participação de servidores públicos na composição de conselho ou diretoria de Organização da Sociedade Civil de Interesse Público. (Redação dada pela Lei nº 13.019, de 2014) (Vigência)

Art. 5o Cumpridos os requisitos dos arts. 3o e 4o desta Lei, a pessoa jurídica de direito privado sem fins lucrativos, interessada em obter a qualificação instituída por esta Lei, deverá formular requerimento escrito ao Ministério da Justiça, instruído com cópias autenticadas dos seguintes documentos:

I - estatuto registrado em cartório;

II - ata de eleição de sua atual diretoria;

III - balanço patrimonial e demonstração do resultado do exercício;

IV - declaração de isenção do imposto de renda;

V - inscrição no Cadastro Geral de Contribuintes.

Art. 6o Recebido o requerimento previsto no artigo anterior, o Ministério da Justiça decidirá, no prazo de trinta dias, deferindo ou não o pedido.

§ 1o No caso de deferimento, o Ministério da Justiça emitirá, no prazo de quinze dias da decisão, certificado de qualificação da requerente como Organização da Sociedade Civil de Interesse Público.

§ 2o Indeferido o pedido, o Ministério da Justiça, no prazo do § 1o, dará ciência da decisão, mediante publicação no Diário Oficial.

§ 3o O pedido de qualificação somente será indeferido quando:

I - a requerente enquadrar-se nas hipóteses previstas no art. 2o desta Lei;

II - a requerente não atender aos requisitos descritos nos arts. 3o e 4o desta Lei;

III - a documentação apresentada estiver incompleta.

Art. 7o Perde-se a qualificação de Organização da Sociedade Civil de Interesse Público, a pedido ou mediante decisão proferida em processo administrativo ou judicial, de iniciativa popular ou do Ministério Público, no qual serão assegurados, ampla defesa e o devido contraditório.

Art. 8o Vedado o anonimato, e desde que amparado por fundadas evidências de erro ou fraude, qualquer cidadão, respeitadas as prerrogativas do Ministério Público, é parte legítima para requerer, judicial ou administrativamente, a perda da qualificação instituída por esta Lei.

CAPÍTULO II
DO TERMO DE PARCERIA

Art. 9o Fica instituído o Termo de Parceria, assim considerado o instrumento passível de ser firmado entre o Poder Público e as entidades qualificadas como Organizações da Sociedade Civil de Interesse Público destinado à formação de vínculo de cooperação entre as partes, para o fomento e a execução das atividades de interesse público previstas no art. 3o desta Lei.

Art. 10. O Termo de Parceria firmado de comum acordo entre o Poder Público e as Organizações da Sociedade Civil de Interesse Público discriminará direitos, responsabilidades e obrigações das partes signatárias.

§ 1o A celebração do Termo de Parceria será precedida de consulta aos Conselhos de Políticas Públicas das áreas correspondentes de atuação existentes, nos respectivos níveis de governo.

§ 2o São cláusulas essenciais do Termo de Parceria:

I - a do objeto, que conterá a especificação do programa de trabalho proposto pela Organização da Sociedade Civil de Interesse Público;

II - a de estipulação das metas e dos resultados a serem atingidos e os respectivos prazos de execução ou cronograma;

III - a de previsão expressa dos critérios objetivos de avaliação de desempenho a serem utilizados, mediante indicadores de resultado;

IV - a de previsão de receitas e despesas a serem realizadas em seu cumprimento, estipulando item por item as categorias contábeis usadas pela organização e o detalhamento das remunerações e benefícios de pessoal a serem pagos, com recursos oriundos ou vinculados ao Termo de Parceria, a seus diretores, empregados e consultores;

V - a que estabelece as obrigações da Sociedade Civil de Interesse Público, entre as quais a de apresentar ao Poder Público, ao término de cada exercício, relatório sobre a execução do objeto do Termo de Parceria, contendo comparativo específico das metas propostas com os resultados alcançados, acompanhado de prestação de contas dos gastos e receitas efetivamente realizados, independente das previsões mencionadas no inciso IV;

VI - a de publicação, na imprensa oficial do Município, do Estado ou da União, conforme o alcance das atividades celebradas entre o órgão parceiro e a Organização da Sociedade Civil de Interesse Público, de extrato do Termo de Parceria e de demonstrativo da sua execução física e financeira, conforme modelo simplificado estabelecido no regulamento desta Lei, contendo os dados principais da documentação obrigatória do inciso V, sob pena de não liberação dos recursos previstos no Termo de Parceria.

Art. 11. A execução do objeto do Termo de Parceria será acompanhada e fiscalizada por órgão do Poder Público da área de atuação correspondente à atividade fomentada, e pelos Conselhos de Políticas Públicas das áreas correspondentes de atuação existentes, em cada nível de governo.

§ 1o Os resultados atingidos com a execução do Termo de Parceria devem ser analisados por comissão de avaliação, composta de comum acordo entre o órgão parceiro e a Organização da Sociedade Civil de Interesse Público.

§ 2o A comissão encaminhará à autoridade competente relatório conclusivo sobre a avaliação procedida.

§ 3o Os Termos de Parceria destinados ao fomento de atividades nas áreas de que trata esta Lei estarão sujeitos aos mecanismos de controle social previstos na legislação.

Art. 12. Os responsáveis pela fiscalização do Termo de Parceria, ao tomarem conhecimento de qualquer irregularidade ou ilegalidade na utilização de recursos ou bens de origem pública pela organização parceira, darão imediata ciência ao Tribunal de Contas respectivo e ao Ministério Público, sob pena de responsabilidade solidária.

Art. 13. Sem prejuízo da medida a que se refere o art. 12 desta Lei, havendo indícios fundados de malversação de bens ou recursos de origem pública, os responsáveis pela fiscalização representarão ao Ministério Público, à Advocacia-Geral da União, para que requeiram ao juízo competente a decretação da indisponibilidade dos bens da entidade e o seqüestro dos bens dos seus dirigentes, bem como de agente público ou terceiro, que possam ter enriquecido ilicitamente ou causado dano ao patrimônio público, além de outras medidas consubstanciadas na Lei no 8.429, de 2 de junho de 1992, e na Lei Complementar no 64, de 18 de maio de 1990.

§ 1o O pedido de seqüestro será processado de acordo com o disposto nos arts. 822 e 825 do Código de Processo Civil.

§ 2o Quando for o caso, o pedido incluirá a investigação, o exame e o bloqueio de bens, contas bancárias e aplicações mantidas pelo demandado no País e no exterior, nos termos da lei e dos tratados internacionais.

§ 3o Até o término da ação, o Poder Público permanecerá como depositário e gestor dos bens e valores seqüestrados ou indisponíveis e velará pela continuidade das atividades sociais da organização parceira.

Art. 14. A organização parceira fará publicar, no prazo máximo de trinta dias, contado da assinatura do Termo de Parceria, regulamento próprio contendo os procedimentos que adotará para a contratação de obras e serviços, bem como para compras com emprego de recursos provenientes do Poder Público, observados os princípios estabelecidos no inciso I do art. 4o desta Lei.

Art. 15. Caso a organização adquira bem imóvel com recursos provenientes da celebração do Termo de Parceria, este será gravado com cláusula de inalienabilidade.

Art. 15-A. (VETADO). (Incluído pela Lei nº 13.019, de 2014) (Vigência)

Art. 15-B. A prestação de contas relativa à execução do Termo de Parceria perante o órgão da entidade estatal parceira refere-se à correta aplicação dos recursos públicos recebidos e ao adimplemento do objeto do Termo de Parceria, mediante a apresentação dos seguintes documentos: (Incluído pela Lei nº 13.019, de 2014) (Vigência)

I - relatório anual de execução de atividades, contendo especificamente relatório sobre a execução do objeto do Termo de Parceria, bem como comparativo entre as metas propostas e os resultados alcançados; (Incluído pela Lei nº 13.019, de 2014) (Vigência)

II - demonstrativo integral da receita e despesa realizadas na execução; (Incluído pela Lei nº 13.019, de 2014) (Vigência)

III - extrato da execução física e financeira; (Incluído pela Lei nº 13.019, de 2014) (Vigência)

IV - demonstração de resultados do exercício; (Incluído pela Lei nº 13.019, de 2014) (Vigência)

V - balanço patrimonial; (Incluído pela Lei nº 13.019, de 2014) (Vigência)

VI - demonstração das origens e das aplicações de recursos; (Incluído pela Lei nº 13.019, de 2014) (Vigência)

VII - demonstração das mutações do patrimônio social; (Incluído pela Lei nº 13.019, de 2014) (Vigência)

VIII - notas explicativas das demonstrações contábeis, caso necessário; (Incluído pela Lei nº 13.019, de 2014) (Vigência)

IX - parecer e relatório de auditoria, se for o caso. (Incluído pela Lei nº 13.019, de 2014) (Vigência)

CAPÍTULO III
DAS DISPOSIÇÕES FINAIS E TRANSITÓRIAS

Art. 16. É vedada às entidades qualificadas como Organizações da Sociedade Civil de Interesse Público a participação em campanhas de interesse político-partidário ou eleitorais, sob quaisquer meios ou formas.

Art. 17. O Ministério da Justiça permitirá, mediante requerimento dos interessados, livre acesso público a todas as informações pertinentes às Organizações da Sociedade Civil de Interesse Público.

Art. 18. As pessoas jurídicas de direito privado sem fins lucrativos, qualificadas com base em outros diplomas legais, poderão qualificar-se como Organizações da Sociedade Civil de Interesse Público, desde que atendidos os requisitos para tanto exigidos, sendo-lhes assegurada a manutenção simultânea dessas qualificações, até dois anos contados da data de vigência desta Lei

Art. 18. As pessoas jurídicas de direito privado sem fins lucrativos, qualificadas com base em outros diplomas legais, poderão qualificar-se como Organizações da Sociedade Civil de Interesse Público, desde que atendidos aos requisitos para tanto exigidos, sendo-lhes assegurada a manutenção simultânea dessas qualificações, até cinco anos contados da data de vigência desta Lei. (Vide Medida Provisória nº 2.123-29, de 2001) (Redação dada pela Medida Provisória nº 2.216-37, de 2001)

§ 1o Findo o prazo de dois anos, a pessoa jurídica interessada em manter a qualificação prevista nesta Lei deverá por ela optar, fato que implicará a renúncia automática de suas qualificações anteriores.

§ 1o Findo o prazo de cinco anos, a pessoa jurídica interessada em manter a qualificação prevista nesta Lei deverá por ela optar, fato que implicará a renúncia automática de suas qualificações anteriores. (Vide Medida Provisória nº 2.123-29, de 2001) (Redação dada pela Medida Provisória nº 2.216-37, de 2001)

§ 2o Caso não seja feita a opção prevista no parágrafo anterior, a pessoa jurídica perderá automaticamente a qualificação obtida nos termos desta Lei.

Art. 19. O Poder Executivo regulamentará esta Lei no prazo de trinta dias.

Art. 20. Esta Lei entra em vigor na data de sua publicação.

Brasília, 23 de março de 1999; 178o da Independência e 111o da República.

FERNANDO HENRIQUE CARDOSO

Renan Calheiros

Pedro Mallan

Ailton Barcelos Fernandes

Paulo Renato Souza

Francisco Dornelles

Waldeck Ornélas

José Serra

Paulo Paiva

Clovis de Barros Carvalho

Este texto não substitui o publicado no DOU de 24.3.1999

*

Voltar ao topo
Detalhes
Publicado por
Presidência da Republica
Tipo de documento
Legislação • Lei
Esfera
Federal
Casa
Presidência da Republica
Data de promulgação
23/03/1999
Assuntos
Constituição Federal de 1988
Art. 70 da Constituição Federal, de 1988
Art. 825 da Lei nº 5.869, de 11 de janeiro de 1973
Art. 822 da Lei nº 5.869, de 11 de janeiro de 1973
Para todas as pessoas
Consulta Processual•Acompanhe seu CPF•Conheça seus direitos•Artigos•Notícias
Para profissionais
Jus IA•Jurisprudência•Doutrina•Diários Oficiais•Peças Processuais•Modelos•Legislação
Para empresas
Jusbrasil Soluções•Departamentos jurídicos•Empresas•Escritórios de advocacia•API Jusbrasil
Jusbrasil
Sobre nós•Blog Justech•Planos•Ajuda•Newsletter•Termos de Uso•Política de Privacidade•Central de Privacidade•Denúncias
A sua principal fonte de informação jurídica - © 2026 Jusbrasil. Todos os direitos reservados.

LEGISLAÇÃO

LEI Nº 9.790, DE 23 DE MARÇO DE 1999

Sumário
Ir para o conteúdo
Valente Reis Pessali Advocacia e Consultoria
Serviços de advocacia
Consultoria Empresarial
Terceiro Setor
Escritório
Blog
Contato
Blog > Direito do Terceiro Setor

Marco Regulatório do Terceiro Setor (MROSC): segurança jurídica no Terceiro Setor
Atualizado em 28 outubro / 2025
por Mariane Reis Cruz
O Marco Regulatório das Organizações da Sociedade Civil (MROSC) representa um passo decisivo para o fortalecimento do Terceiro Setor, ao criar regras claras para parcerias com o Poder Público e estabelecer padrões mais elevados de transparência e prestação de contas. 

Para se manterem fortes, sustentáveis e relevantes em sua missão de interesse público, as OSCs precisam adotar práticas sólidas de governança e assegurar conformidade jurídica, garantindo não apenas o cumprimento da lei, mas também a confiança de parceiros, financiadores e da sociedade.

Formalizado pela Lei nº 13.019/2014, o MROSC é um importante avanço para reger as parcerias entre o Poder Público e as Organizações da Sociedade Civil (OSCs). Essa legislação trouxe maior transparência, responsabilidade e segurança jurídica, estabelecendo padrões mais claros para a celebração de parcerias entre a Administração pública e OSCs.

Neste texto, analiso os principais pontos da Lei e explico como a regulamentação jurídica de OSCs pode fazer toda a diferença na atuação e na relevância da organização.

Reconhecimento das organizações do Terceiro Setor
Antes do MROSC, o setor era regulado por instrumentos como a Lei nº 91/1935 (Declaração de Utilidade Pública), a Lei das OSCIPs (Lei nº 9.790/1999) e Organizações Sociais (Lei nº 9.637/1998), que criavam titulações diversas, geralmente com critérios vagos e sem padronização. Isso gerava insegurança jurídica e disparidade entre as entidades.

Com o Código Civil de 2002, as associações e fundações foram claramente reconhecidas como pessoas jurídicas, eliminando a terminologia imprecisa de “sociedade civil” e exigindo maior coerência estatutária. O Marco Regulatório das Organizações da Sociedade Civil (Lei 13.019/2014) instituiu ainda a definição legal de “Organização da Sociedade Civil (OSC)”, delimitando quem pode firmar parcerias com o Estado.

A evolução entre o período anterior e o atual é clara: o setor ganhou maior formalização, consolidando figuras jurídicas definidas no Código Civil e no próprio Marco. Esse arcabouço fortalece a segurança jurídica das OSCs.

Principais mudanças introduzidas com o MROSC
Antes do Marco Regulatório do Terceiro Setor (MROSC), as organizações se vinculavam ao Estado por meio de convênios, termos de parceria (OSCIPs) ou contratos de gestão (OSs), criados sem uniformidade e com pouca transparência.

Com a Lei 13.019/2014, foi proibido o uso de convênios para parcerias com OSCs, substituindo-os por Termos de Colaboração (iniciativa do Estado) e Termos de Fomento (propostos pelas OSCs). O equilíbrio entre iniciativa pública e privada ganhou estrutura, e os termos antigos continuam vigentes somente até seu término ou eventual prorrogação conforme regras de transição. 

Além disso, o Acordo de Cooperação também passou a ser um instrumento jurídico de formalização de parceria, quando não há repasse financeiro. A mudança proporcionou regras diferenciadas conforme o tipo de parceria, permitindo melhor alinhamento com objetivos da organização e mais segurança jurídica, especialmente na captação de recursos.

Anteriormente, as parcerias eram estabelecidas majoritariamente por livre escolha do gestor público — sem chamamento público, com pouca publicidade e pouca clareza nos critérios de seleção. O MROSC tornou obrigatório o chamamento público para seleção de OSCs e exigiu maior transparência, divulgação das parcerias, publicação de informações e prestação de contas rigorosa.

Estrutura estatutária, governança e princípios jurídicos
O Código Civil de 2002 formalizou a distinção entre tipos jurídicos, mas ainda carecia de diretrizes claras sobre governança interna e passou a exigir regras claras sobre quorum, exclusão de associados, assembleias e destinação de patrimônio em caso de dissolução, fortalecendo a governança.

O Marco Regulatório do Terceiro Setor (MROSC) reforçou a exigência de plano de trabalho, prestação de contas, limites administrativos e remanejamentos, alinhando os instrumentos legais com práticas de transparência e profissionalização. Hoje temos uma base normativa robusta para garantir governança sólida, transparência e responsabilidade institucional nas OSCs.

Principais requisitos celebração de parcerias
Dentre outros requisitos, para celebração de parcerias, o Marco Regulatório do Terceiro Setor determina:

Tempo mínimo de atuação, com exceções: 1 ano (municípios), 2 anos (estados) e 3 anos (união).
Experiência comprovada, capacidade técnica e operacional.
Estrutura de governança.
Regulamento interno para compras e contratações.
Garantir a conformidade jurídica da OSC atendendo os critérios especificados pela Lei pode garantir financiamento público e diminuir riscos jurídicos ligados à governança da entidade.

Transparência e prestação de contas
Quando se trata de elaboração de projetos e prestação de contas, as OSCs têm que se manter igualmente atentas e seguir perfeitamente os critérios definidos pelo Marco Regulatório do Terceiro Setor. Os principais são:

Exigência de plano de trabalho detalhado, com descrição de atividades, orçamento, metas, indicadores e cronograma.
Publicação obrigatória das parcerias nos portais da Administração Pública e da própria OSC, com prazo máximo de até 180 dias após o término dos projetos.
Prestação de contas rigorosa, com repasses direcionados para conta específica isenta de tarifas, e possibilidade de suspensão em caso de irregularidades.
É importante ressaltar que tanto a atuação do Poder Público quanto da OSC implicam o interesse público e devem manter a transparência, desde seus procedimentos internos de constituição, contratação, compras, até a prestação de contas de recursos recebidos.

Avanços e desafios com o MROSC
A transição do período anterior, marcado por normas dispersas e incerteza jurídica, para o contexto regulado pelo Código Civil de 2002 e pelo Marco Regulatório (Lei 13.019/2014) representa a consolidação jurídica e institucional do Terceiro Setor brasileiro.

No entanto, por mais que o MROSC tenha trazido vários avanços jurídicos para o setor, em muitos casos isso pode ser entendido como complexidade burocrática, o que pode dificultar o cumprimento das exigências legais para as organizações. Além disso, existem oscilações na interpretação das normas entre os diferentes entes federativos, o que pode demandar adaptações específicas.

Consultoria Jurídica para o Terceiro Setor
Agora, as OSCs têm mais clareza em suas categorias jurídicas, instrumentos de parceria assegurados, requisitos de seleção transparentes e exigências estatutárias robustas. Isso fortalece sua credibilidade, atratividade junto à sociedade e eficiência na execução de políticas públicas.

Se a sua organização busca segurança jurídica, eficiência e credibilidade em parcerias com o poder público, ou deseja se adaptar ao Marco Regulatório do Terceiro Setor com excelência e autonomia, a Valente Reis Pessali assessora OSCs em todo o Brasil. Oferecemos:

Revisão e adequação estatutária.
Elaboração de termos de trabalho e planos de compliance.
Orientação completa sobre mecanismos legais e melhores práticas de governança.
Entre em contato para proteger sua missão e impulsionar seu impacto no terceiro setor com respaldo jurídico especializado.

Mariane Reis Cruz - Advogada Sênior e Sócia Fundadora
Mariane Reis
Advogada Especialista em Terceiro Setor

Mestra e bacharela em Direito pela Universidade Federal de Minas Gerais (UFMG), com formação complementar em Direito e Políticas Públicas pela Université de Lille, na França, e Humanidades pela Universidad de la República, no Uruguai. Advogada há quase 15 anos, especializou-se nos últimos anos no assessoramento jurídico a organizações do Terceiro Setor, com ênfase em governança, compliance, gênero e direitos humanos.

OAB/MG n. 151460 e OAB/DF n. 87.757

Conheça →
Agende uma conversa
Conte para a gente sobre a sua necessidade. Vamos analisar o seu caso e identificar as melhores estratégias para auxiliar você.


Nome
Digite o seu nome
E-mail
Digite o seu e-mail
Mensagem
Digite a sua mensagem
 Ao enviar os dados você concorda com a nossa Política de Proteção de Dados
Valente Reis Pessali Advocacia e Consultoria
Atendimento

de segunda a sexta das 9h às 17h

contato@valentereispessali.com.br
Fale conosco!
Serviços de advocacia
Consultoria Empresarial
Terceiro Setor
Escritório
Blog
Contato
Linkedin Instagram Facebook
Serviços de advocacia
Direito Patrimonial
Direito do Trabalho
Direito Civil
Direito do Consumidor
Valente Reis Pessali
CNPJ 28.830.067/0001-72
Política de privacidade


VER ARQYUVOS
Arquitetura-MVP-Tradeoffs
BenchMark
Overview

Qual a sugestão de nome desta aplicação? Atualmente é ONGanizator.

Tela de Boa Vinda
Objetivo
Apresentar a plataforma e explicar o processo de maturidade, e o selo Bronze
Conteúdo
Vídeo de apresentação
Missão da plataforma
Benefícios do programa
Passos para obtenção dos selos
Selos de Maturidade
🥉 Bronze – Organização  Cadastrada
🥈 Prata – Organização com Documentação Validadade e pelo menos um Projeto Estruturado
🥇 Ouro – Organização Apta à Captação, e com pelo menos um projeto anterior validado
💎 Diamante – Organização com Captação Ativa, com um projeto completo na plataforma
Botão:
Iniciar Diagnóstico

Auto Diagnostico institucional

Autoavaliação
20 perguntas distribuídas em 5 dimensões:
Governança/Documentação
Estatuto atualizado?
Diretoria formalizada?
Conselho ativo?
Assembleia realizada regularmente?
Gestão Administrativa
Planejamento estratégico?
Processos documentados?
Indicadores definidos?
Gestão de riscos?
Gestão Financeira
Prestação de contas regular?
Fluxo de caixa?
Controle orçamentário?
Demonstrações financeiras?
Impacto Social
Indicadores de impacto?
Teoria da mudança?
ODS relacionadas?
Monitoramento de resultados?
Captação de Recursos
Portfólio de projetos?
Banco de parceiros?
Histórico de captação?
Plano de sustentabilidade?

Resultado do Diagnóstico
Exibir:
Score Geral
Exemplo:
72%
Score por Dimensão
Governança: 80%
Gestão Financeira: 65%
Impacto Social: 70%
Captação: 55%
Recomendações Automáticas
Itens pendentes para atingir o próximo nível, com recomendações de ações e parceiros para resolver o problema.

Resultado:
Resultado do Diagnóstico
Exibir:
Score Geral
Exemplo:
72%
Score por Dimensão
Governança: 80%
Gestão Financeira: 65%
Impacto Social: 70%
Captação: 55%
Recomendações Automáticas
Itens pendentes para atingir o próximo nível, com recomendações de ações e parceiros para resolver o problema.

Cadastro 4. Cadastro Institucional Completo
Dados Institucionais
Razão social
Nome fantasia
CNPJ
Endereço
Telefone
Site
Redes sociais
Representantes Legais
Presidente
Diretor Financeiro
Diretor Executivo
Áreas de Atuação
Educação
Saúde
Meio Ambiente
Cultura
Direitos Humanos
Outros
Público Beneficiado
Crianças
Jovens
Mulheres
Idosos
PCD
Comunidades tradicionais
Planejamento Estratégico:
Propósito
Missão
Visão
Valores
Objetivo Geral
Objetivos Especificos
Histórico da ONG
Atuando deste? 
O que a ONG já realizou
Projetos Concluidos
Projetos Em Andamento

Gestão documental menos importante neste momento:
5. Gestão Documental
Upload de Documentos
Jurídicos
Estatuto Social
Ata de eleição
CNPJ
Certificados
Financeiros
Balanço
DRE
Relatórios financeiros
Institucionais
Planejamento estratégico
Relatório anual
Portfólio institucional
Evidências
Fotos
Vídeos
Publicações
Reportagens


Outras informações que podemos aproveitar: # ongs-doacao
Lista de ONGs para doação

Listas baseadas no artigo https://www.uol.com.br/ecoa/ultimas-noticias/2021/03/23/fome-no-brasil-como-ajudar-pessoas-a-comer-e-sobreviver-na-pandemia.htm

Brasil: https://github.com/renatolm/ongs-doacao/blob/main/Brasil.md

Norte: https://github.com/renatolm/ongs-doacao/blob/main/Norte.md

Nordeste: https://github.com/renatolm/ongs-doacao/blob/main/Nordeste.md

Centro-Oeste: https://github.com/renatolm/ongs-doacao/blob/main/Centro-Oeste.md

Sudeste: https://github.com/renatolm/ongs-doacao/blob/main/Sudeste.md

Sul: https://github.com/renatolm/ongs-doacao/blob/main/Sul.md

Unicamp: https://github.com/renatolm/ongs-doacao/blob/main/Unicamp.md


=======
>>>>>>> bfbf6f688b78fd8d347da3df3afd1b96dad7c03e