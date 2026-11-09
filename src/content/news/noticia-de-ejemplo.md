---
title: "Título de la noticia, concreto y sin clickbait"
description: "Una o dos líneas: qué pasó y por qué importa. Es lo que se ve en la card y en el feed."
pubDatetime: 2026-02-18T09:00:00-03:00
category: "ia"
tags: ["ia", "modelos"]
source:
  name: "Nombre del medio o de la empresa"
  url: "https://example.com/nota-original"
draft: true
---

Plantilla de noticia. Mientras `draft: true`, esta entrada no aparece en el sitio,
ni en `/noticias/`, ni en `/noticias/rss.xml`, ni en las tags.

## Qué pasó

El hecho, en dos o tres párrafos. Sin adjetivos de más.

## Por qué importa

El contexto: qué cambia respecto de lo que había antes, a quién le afecta.

## Detalle técnico

Opcional. Acá van números, versiones o benchmarks **citando la fuente**.

- Punto uno
- Punto dos

Fuente original: [Nombre del medio](https://example.com/nota-original).

Para publicar: poné `draft: false` (o borrá la línea) y ajustá `pubDatetime`. El
índice, la paginación, las tags, el feed y el sitemap se regeneran solos.
