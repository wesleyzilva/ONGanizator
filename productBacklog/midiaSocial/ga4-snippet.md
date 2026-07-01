# GA4 + Google Tag Manager — snippet e eventos (exemplo)

Guia para instalar medicao no site/landing da ONG e provar alcance a financiadores.

## 1. Google Analytics 4 (GA4) — instalacao direta

Cole no `<head>` de todas as paginas. Troque `G-XXXXXXXXXX` pelo ID de medicao da ONG.

```html
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

## 2. Google Tag Manager (GTM) — alternativa recomendada

Permite gerenciar tags sem mexer no codigo. Troque `GTM-XXXXXXX`.

No `<head>`:

```html
<!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-XXXXXXX');</script>
<!-- End Google Tag Manager -->
```

Logo apos abrir o `<body>`:

```html
<!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-XXXXXXX"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->
```

## 3. Eventos recomendados (impacto mensuravel)

Disparar via `gtag('event', ...)` ou dataLayer.push no GTM.

| Evento | Quando disparar | Por que importa |
|---|---|---|
| `page_view` | automatico | trafego geral |
| `clique_doar` | clique no botao Doar | intencao de doacao |
| `doacao_concluida` | pos-pagamento | conversao real (valor) |
| `download_relatorio` | download de prestacao de contas | transparencia/engajamento |
| `contato_empresa` | envio de form "quero investir" | lead de financiador |
| `inscricao_newsletter` | assinatura de e-mail | base de relacionamento |

Exemplo de disparo do clique em doar:

```html
<button onclick="gtag('event','clique_doar',{campanha:'natal2026'})">
  Doe agora
</button>
```

Exemplo de doacao concluida com valor:

```js
gtag('event', 'doacao_concluida', {
  currency: 'BRL',
  value: 50.00,
  metodo: 'pix'
});
```

## 4. Checklist

- [ ] Propriedade GA4 criada na conta Google da ONG.
- [ ] ID `G-...` (GA4) e/ou `GTM-...` colados no site.
- [ ] Eventos `clique_doar` e `doacao_concluida` configurados.
- [ ] Google Search Console vinculado (SEO).
- [ ] Relatorio mensal de alcance exportado para prestacao de contas.
