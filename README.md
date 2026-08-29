# IA, Finanzas y Código

Blog personal de [Tweakers_BAMR](https://github.com/BastianMR) — inteligencia
artificial, finanzas, proyectos de código y algo de vida de tanque en WoW.

- **URL**: https://bastianmr.github.io
- **Stack**: [Astro](https://astro.build/) + [AstroPaper](https://github.com/satnaing/astro-paper)
- **Tema**: dark-only neón (`#0D0D0D` · `#00FF85` · `#1E90FF` · `#FF0099`)
- **Deploy**: GitHub Pages vía GitHub Actions (`withastro/action`)

## Escribir un post

Crear un archivo `.md` en `src/content/posts/` con frontmatter:

```yaml
---
title: "Título del post"
description: "Resumen del post."
pubDatetime: 2026-08-28T12:00:00-04:00
tags: ["ia", "finanzas", "código"]
---
```

## Comandos

| Comando       | Acción                              |
| ------------- | ----------------------------------- |
| `npm install` | Instalar dependencias               |
| `npm run dev` | Servidor local en `localhost:4321`  |
| `npm run build` | Build de producción a `./dist/`   |
