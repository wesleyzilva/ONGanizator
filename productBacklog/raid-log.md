# RAID Log — Descobertas e Contexto

## Propósito

Este documento deve armazenar hipóteses, descobertas, contexto de usuário e referências legais. Ele é o diário da evolução do backlog e serve como base para criar novas tarefas e decisões.

## Contexto inicial

- O sistema é um white-label mock funcional para apresentação e validação com ONGs.
- O foco principal é uma demo para webinar e feedback de ONGs, investidores e advogados.
- Não é necessário priorizar Sonar, JUnit ou backlog técnico extenso neste momento.

## Problemas identificados

- ONG não tem um sistema de projetos auditável.
- ONG não tem captação ativa com evidências documentadas.
- Investidor precisa de comparabilidade entre projetos.
- Advogado e contador precisam acompanhar valores e compliance.
- A falta de trilha de evidência e relatório torna difícil justificar ajuda financeira.

## Jornadas

### Jornada principal mock

1. Advogado cadastra ONG.
2. Advogado libera acesso para ONG.
3. ONG atualiza cadastro.
4. ONG cadastra e mantém projeto com histórico auditável.
5. Projeto inicia sem selos e evolui com autoavaliação, score e entregas.
6. Selo Bronze / Prata / Ouro reflete progresso mockado.

### Jornada de prospecção de empresas (planejada)

1. Advogado cadastra empresa e potencial de valor.
2. Advogado associa ONG e projeto à empresa.
3. Advogado acompanha o projeto em um kanban de status.
4. Kanban exibe semáforo de risco/saúde do projeto.

## Necessidades de conteúdo

- Página "Para Investidores de projetos".
- Página para ONGs.
- Página para Advogados e Contadores.
- Explicação sobre ODS e como integrar no produto.
- Pesquisa sobre captação de recursos, leis e obrigatoriedades brasileiras.

## Requisitos legais e inputs

- ONG deve ser constituída formalmente e manter estatuto social claro.
- Naz melhores práticas de não distribuição de excedentes operacionais.
- Exigir transparência e prestação de contas para parcerias públicas e privadas.
- É importante mapear mecanismos de incentivo fiscal: Lei Rouanet, Esporte, PRONON/PRONAS, MROSC, doação direta.
- LGPD deve estar presente na experiência de consentimento.

## Mecanismos cobertos inicialmente

- Doação direta
- FIA
- Lei Rouanet
- Lei de Incentivo ao Esporte
- PRONON/PRONAS
- MROSC

## Referências

- Artigos de captação para associações e fundações.
- Regras do Marco Regulatório das Organizações da Sociedade Civil (Lei 13.019/2014).
- Lei 9.790/1999 e CEBAS.
- Lei 11.438/2006 (esporte) e outros incentivos fiscais aplicáveis.
- Modelo de receita, posicionamento e diferenciação do produto para o mercado brasileiro.

## Observações de design e execução

- O menu lateral deve respeitar as quatro visões e ser configurável por perspectiva.
- O whitelabel deve permitir personalização visual sem alterar a jornada.
- A narrativa do produto deve seguir: ONG → projeto → captação → investidor → compliance/relatório.
- O dashboard executivo deve ancorar a jornada de relatórios e prestação de contas.

## Uso futuro

Use este arquivo para registrar novas suposições, mudanças de escopo e decisões que devem ser transformadas em tarefas no `backlog.md`.
