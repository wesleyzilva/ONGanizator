# Crowdfunding & Campanhas — Transcrição

Transcrição estruturada do fluxo de Crowdfunding e Campanhas para servir como base de requisitos, fluxo e backlog.

## Visão geral do módulo

Menu Principal → Crowdfunding → (Criar Campanha, Minhas Campanhas, Relatórios, Doadores, Compartilhamento, Prestação de Contas)

Objetivo: permitir que organizações cadastradas criem campanhas públicas para captação de recursos em diversas modalidades (financeira, itens, serviços, venda de produtos sociais, voluntariado, etc.).

---

## Modalidades suportadas

- Doação Financeira
- Doação de Produtos e Insumos
- Doação de Serviços
- Voluntariado
- Venda de Produtos Sociais (artesanato, vestuário, alimentos)
- Negócios Sociais
- Campanha Mista (combinação de recursos financeiros, produtos e serviços)

---

## Fluxo — Criar Campanha

Passos principais ao selecionar "Nova Campanha":

1. Tipo de Campanha (Doação Financeira / Itens / Serviços / Venda de Produtos / Mista)
2. Dados Gerais
   - Nome da campanha
   - Categoria
   - Resumo executivo
   - Descrição detalhada
   - Período da campanha
   - Meta financeira
   - Meta de arrecadação de itens
   - Meta de vendas
3. Vinculação institucional: campanha vinculada automaticamente ao cadastro da ONG (exibir perfil da organização)
   - Nome da ONG
   - Área de atuação
   - Cidade / Estado
   - Ano de fundação
4. Indicadores de confiança
   - Score de maturidade (ex.: 85/100)
   - Ranking institucional (ex.: Top 10% da plataforma)
   - Selos (Bronze / Prata / Ouro / Diamante)
   - Compliance (Status: verificada, documentação validada, prestação de contas regular)
5. ODS relacionadas (seleção múltipla)
6. Objetivo Geral (campo obrigatório)
7. Objetivos Específicos (cadastro estruturado)
8. Metas (ex.: atender 200 jovens, distribuir 500 cestas básicas)
9. Público beneficiado (ex.: crianças, jovens, mulheres, PCD, comunidades tradicionais)
10. Upload de mídias
    - Fotos (banner principal, galeria)
    - Vídeos (apresentação institucional, depoimentos)
11. Storytelling (história da organização, problema, solução, impacto esperado)

---

## Formas de Doação / Pagamento

- PIX (chave, conta vinculada)
- Cartão de Crédito (Visa, Mastercard, Elo, Amex)
- Boleto Bancário
- Transferência Bancária
- Carteiras Digitais (PayPal, Mercado Pago, PagSeguro)

Configuração de modalidades de contribuição:

- Doação única (valores sugeridos: R$20, R$50, R$100, R$500, outro valor)
- Doação recorrente (mensal, trimestral, semestral, anual)
- Programa de mantenedores (níveis: Amigo, Parceiro, Patrocinador, Embaixador)

Integração com gateway de pagamento para geração de cobranças, boletos, e captura de comprovantes.

---

## Página pública da campanha

Elementos exibidos na página pública:

- Foto / Banner
- Nome da campanha
- Nome da ONG
- Cidade / Estado
- ODS relacionadas
- Meta financeira e valor arrecadado (percentual)
- Dias restantes
- Descrição do projeto, metas, beneficiários e evidências
- Prestação de contas e atualizações

Funcionalidades públicas:

- Link curto e QR Code
- Landing page própria
- Botões de compartilhamento (WhatsApp, E-mail, LinkedIn, Instagram, Facebook, X)
- Kit de divulgação automático (banner, folder, card para redes, carta para empresas, e-mail marketing)

---

## Compartilhamento e Divulgação

- Integração direta: WhatsApp (botão), E-mail (disparo para contatos), LinkedIn, Instagram, Facebook, X
- Gerar kit de divulgação com imagens e textos prontos

---

## Prestação de Contas da Campanha (Obrigatória)

Seções mínimas:

- Financeiro: valores recebidos e utilizados
- Evidências: notas fiscais, recibos, contratos, fotos e vídeos
- Indicadores: metas atingidas, beneficiários impactados, ODS alcançadas
- Atualizações públicas para doadores

Ferramentas de auditoria e exportação de relatórios.

---

## Área do Doador (Doador PF)

Após a doação, o doador tem acesso a um Dashboard com:

- Histórico de doações
- Projetos apoiados
- Recibos e declarações (certificados)
- Impacto (fotos, relatórios)

Login / Cadastro:

- Tela de login: e-mail, senha, recuperação de senha
- Tela de cadastro: dados básicos (nome, e-mail, senha)
- Cadastro para empresas/ONGs: Nome da instituição, CNPJ, nome do responsável, cargo, telefone
- Cadastro de cartão de crédito / forma de pagamento

---

## Relatórios e Monitoramento

- Relatórios para ONGs: desempenho de campanhas, origem de doações, conversão de visitantes
- Relatórios para administradores: top campanhas, taxas, métricas de confiança e compliance

---

## Integrações críticas sugeridas

- Gateways de pagamento (Pix, Stripe/Adyen, Mercado Pago)
- Serviços de e-mail marketing
- WhatsApp Business API
- Sistemas de emissão de NF / Recibos eletrônicos
- BI para métricas financeiras e de impacto

---

## Próximos passos sugeridos

1. Rever e priorizar campos obrigatórios e opcionais.
2. Mapear APIs necessárias para pagamentos e emissão de comprovantes.
3. Converter este documento em epics e user stories.
4. Criar protótipos da tela de criação de campanha e da página pública.

Posso converter essas seções em issues e user stories prontas para importação no GitHub Projects — quer que eu faça isso agora? 
