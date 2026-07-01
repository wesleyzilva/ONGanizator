# Portfolio de midia social com embed automatico (galeria da ONG)

Objetivo: a ONG tira uma foto e publica no Instagram/Facebook/Google e ela **aparece
automaticamente no site/portfolio** da organizacao, sem retrabalho. O portfolio vira
prova social viva para financiadores.

## 1. Como funciona (conceito)

```
ONG posta foto no Instagram/Facebook/Google Business
        |
        v
[ Feed embutido (embed / widget / API) no site da ONG ]
        |
        v
Portfolio do site atualiza sozinho (galeria de impacto sempre atual)
```

O portfolio da ONG no site/plataforma tem uma secao "Galeria" que puxa as publicacoes
das redes automaticamente.

## 2. Opcoes de embed por rede

### Instagram

- **Embed de post unico (oficial, gratis):** cada post tem "..." -> "Incorporar" -> gera
  um `<blockquote>` + script. Bom para destacar 1 post.

```html
<!-- Instagram: post unico incorporado -->
<blockquote class="instagram-media" data-instgrm-permalink="https://www.instagram.com/p/XXXXXXXXX/">
</blockquote>
<script async src="https://www.instagram.com/embed.js"></script>
```

- **Feed completo (grade automatica):** requer widget de terceiro (ex: EmbedSocial,
  Elfsight, Curator.io, LightWidget) ou a Instagram Basic Display / Graph API para feed
  proprio. Recomendado para portfolio que atualiza sozinho.

```html
<!-- Exemplo com widget LightWidget (grade que atualiza sozinha) -->
<iframe src="https://lightwidget.com/widgets/SEU_ID.html"
  scrolling="no" allowtransparency="true" class="lightwidget-widget"
  style="width:100%;border:0;overflow:hidden;"></iframe>
```

### Facebook

- **Page Plugin (oficial, gratis):** mostra o feed da pagina.

```html
<div id="fb-root"></div>
<script async defer crossorigin="anonymous"
  src="https://connect.facebook.net/pt_BR/sdk.js#xfbml=1&version=v19.0"></script>

<div class="fb-page"
  data-href="https://www.facebook.com/institutosemente"
  data-tabs="timeline" data-width="500" data-height="600"
  data-small-header="false" data-adapt-container-width="true"
  data-hide-cover="false" data-show-facepile="true">
</div>
```

### Google Business Profile

- Nao tem embed oficial de fotos. Opcoes:
  - Embed do **mapa** (Google Maps) com o local da ONG (mostra fotos e avaliacoes ao clicar).
  - Widget de terceiro (EmbedSocial "Google Reviews & Photos", Elfsight Google Reviews)
    para trazer fotos e avaliacoes do perfil.

```html
<!-- Google Maps do local (mostra perfil, fotos e avaliacoes) -->
<iframe src="https://www.google.com/maps/embed?pb=SEU_CODIGO"
  width="100%" height="350" style="border:0;" allowfullscreen=""
  loading="lazy"></iframe>
```

## 3. Arquitetura recomendada para o portfolio

| Camada | Escolha | Motivo |
|---|---|---|
| MVP rapido | Widget de terceiro (Elfsight/EmbedSocial/LightWidget) | zero backend, atualiza sozinho |
| Fase 2 (proprio) | Instagram Graph API + Facebook Graph API -> salvar no banco | controle total, sem dependencia paga |
| Google | Google Maps embed + widget de reviews | unica forma pratica de fotos/avaliacoes |

- No **MVP**, usar widgets (rapido, sem codigo de backend). Alguns sao gratis com marca,
  pagos sem marca (~US$ 5-15/mes).
- Na **fase 2**, criar integracao propria via Graph API: a plataforma guarda os posts no
  banco e monta a galeria — melhor performance e sem custo de widget.

## 4. Onde isso entra no produto (backlog)

- Componente `PortfolioGaleria` na pagina publica da ONG que renderiza os embeds.
- Tela de configuracao onde a ONG cola os links/IDs das redes (Instagram, Facebook, Google).
- Fase 2: conector OAuth com Instagram/Facebook Graph API para feed automatico salvo no banco.
- Cache das imagens para nao depender do uptime das redes.

## 5. Como cobrar (liga com a Secao 15 do backlog)

- Portfolio com embed **incluso** no add-on de midia social (setup + gestao).
- Integracao automatica via API (fase 2) como diferencial dos planos Prata/Ouro.
