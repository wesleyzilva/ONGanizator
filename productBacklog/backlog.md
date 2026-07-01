# Backlog Prioritário — ONGanizator

## Como usar

Este é o backlog ativo do PO. Atualize o status dos itens aqui e mantenha uma visão única dos próximos passos.

## Alto / Baixa — Quick wins

- [x] Login e registro mock para perfis: ONG, Doador PF, Doador PJ, ADM, Advogado/Contador.
- [x] Perspectiva seletora e menus adaptativos para paralelizar visões.
- [x] Cadastro de campanha/projeto mínimo com persistência local mock.
- [x] Fluxo de contribuição via PIX simulado em `/projetos/[id]/contribuir`.
- [x] Barra de completude de perfil e consentimento LGPD.
- [x] Exportação de relatório executivo simples via impressão/PDF.

## Alto / Média

- [ ] Integração com gateway de pagamentos real (Stripe/Mercado Pago/PIX real).
- [ ] Gestão documental com uploads, validade e tipagem de documentos.
- [ ] Pipeline de CRM para doadores com lead → qualificação → proposta.
- [ ] Geração automática de PDF executivo/técnico ao acionar "Gerar Prestação de Contas".
- [ ] Estrutura lógica de projeto: ODS → Objetivo → Meta → Atividade → Item de despesa.

## Alto / Alta

- [ ] Motor de matching entre editais, empresas, investidores e ONGs com pesos configuráveis.
- [ ] Conciliação financeira completa (OFX/CSV) e gestão de chargebacks/reembolsos.
- [ ] RBAC completo com SuperADM, Admin ONG, Financeiro ONG, Auditor, Prestador.
- [ ] Emissão automática de recibos fiscais / NF-e.

## Médio / Baixa

- [ ] Marketplace de serviços/curso com publicação e busca básica.
- [ ] Avaliações e comentários para serviços e cursos.
- [ ] Relatório institucional avulso para download.

## Médio / Média

- [ ] Integração WhatsApp Business API para notificações e compartilhamento.
- [ ] Painel BI básico com MRR, ARR, taxa de conversão e filtros por período.
- [ ] Workflow de validação manual de documentos e SLOs de análise de selos.

## Médio / Alta

- [ ] Plataforma de cursos com avaliação e emissão de certificados.
- [ ] Relatórios ESG e SROI automatizados com cálculo e agendamento.

## Baixo / Baixa

- [ ] Templates de kit de divulgação e geração de imagens básicas.
- [ ] Páginas públicas SEO-friendly para campanhas.

## Baixo / Média

- [ ] Relatório de due diligence e reputacional.
- [ ] Portal do investidor com histórico de relatórios recebidos.

## Baixo / Alta

- [ ] Integração Open Finance e conciliações bancárias em tempo real.
- [ ] Automação de matching e recomendação com ML.

## Itens transversais

- [ ] Segurança & conformidade: LGPD, logs de consentimento, criptografia.
- [ ] Testes e QA: cenários mock para fluxos críticos.
- [ ] Infra & observabilidade: jobs, filas e monitoramento.
- [ ] Documentação de APIs e contratos (OpenAPI).
