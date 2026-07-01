# Deprecated — não usar

Este arquivo é legado. As informações principais foram distribuídas para os documentos ativos:

- `productBacklog/vision.md`
- `productBacklog/roadmap.md`
- `productBacklog/backlog.md`
- `productBacklog/raid-log.md`

Use somente os arquivos acima para desenvolvimento AI-first.

---

# RAID Backlog — User Stories (Extraído de `raid-checklist.md`)

Arquivo gerado automaticamente a partir do RAID Checklist. Uso: converter em issues, priorizar e planejar sprint.

## Como ler
- Priority: Alto / Médio / Baixo
- Complexity: Baixa / Média / Alta

---

## Priority: Alto — Complexity: Baixa (Quickwins)

1. [x] **Cadastro e Login — Usuários (ONG, Doador PF, Doador PJ)**
   - Descrição: Implementar telas de cadastro e login para os três perfis com validação básica e fluxo de recuperação de senha (mock).
   - Critérios de aceite:
     - Usuário pode criar conta e logar (persistência em mock/localStorage ou API mock).
     - Perfis: `ong`, `doador_pf`, `doador_pj` selecionáveis no cadastro.
     - Tela de login acessível via `/login`.
   - Labels: `priority:high`, `complexity:low`, `area:auth`

2. [x] **Criar Campanha (fluxo mínimo)**
   - Descrição: Formulário mínimo para criar campanha (título, descrição, meta, upload de mídia simulado) e publicar como rascunho.
   - Critérios de aceite:
     - Formulário com campos obrigatórios e validações mínimas.
     - Upload de mídia aceita (simulado, URL ou localStorage).
     - Publicar cria um registro visível em `/projetos`.
   - Labels: `priority:high`, `complexity:low`, `area:crowdfunding`

3. [x] **Pagamento PIX — fluxo mock e captura de comprovante**
   - Descrição: Implementar fluxo de contribuição via PIX simulado e registrar comprovante simples (localStorage).
   - Critérios de aceite:
     - Geração de QR/valor simulado e confirmação de pagamento manual.
     - Registro de contribuição em `onganizator_contributions` no localStorage.
     - Valor refletido no detalhe do projeto (soma base + simulado).
   - Labels: `priority:high`, `complexity:low`, `area:payments`

4. [x] **Barra de completude no cadastro (ONG / PJ)**
   - Descrição: Exibir progresso de preenchimento do cadastro para ONG e PJ (barra visual).
   - Critérios de aceite:
     - Cada campo importante incrementa o percentual.
     - Barra visível na página de perfil/cadastro.
   - Labels: `priority:high`, `complexity:low`, `area:onboarding`

5. [x] **Gerar PDF simples de prestação de contas (template executivo)**
   - Descrição: Botão para gerar PDF estático/templated com campos chave (resumo financeiro, indicadores) para download manual.
   - Critérios de aceite:
     - Gera um PDF/arquivo estático com placeholders preenchidos por dados mock.
     - Download acionável no detalhe do projeto ou área financeira.
   - Labels: `priority:high`, `complexity:low`, `area:finance`

---

## Atualização de status

- Itens 1 a 5 já implementados no frontend mock.
- Consentimento LGPD mock implementado com banner e armazenamento local.
- Próximos focos: testes/QA, documentação API/OpenAPI e infraestrutura de observabilidade.

## Itens Transversais (priorizar em paralelo)

6. **Segurança & Conformidade (LGPD básico)**
   - Descrição: Implementar banner de consentimento e gravar logs de consentimento em mock; checklist de dados sensíveis.
   - Labels: `priority:high`, `complexity:medium`, `area:security`

7. **Testes e QA — cenários mock**
   - Descrição: Criar dados de teste e cenários básicos para os fluxos críticos (autenticação, criação de campanha, contribuições).
   - Labels: `priority:high`, `complexity:medium`, `area:qa`

8. **Infra & Observability (jobs, filas, monitoramento)**
   - Descrição: Documentar e criar scripts mínimos para executar jobs locais e monitoramento básico (logs) para processos longos.
   - Labels: `priority:high`, `complexity:medium`, `area:infra`

9. **Documentação de APIs (OpenAPI)**
   - Descrição: Garantir endpoints mock com OpenAPI/Swagger atualizados para consumo pelo frontend.
   - Labels: `priority:high`, `complexity:low`, `area:docs`

---

## Próximos passos sugeridos
- Importar os itens acima como Issues (CSV) e atribuir Epic/Sprint.
- Iniciar sprint de 1–2 semanas com os itens 1–3 como foco principal.
- Revisar prioridades com PM/advogada e ajustar labels de compliance.

---

Arquivo gerado em: 2026-06-28
