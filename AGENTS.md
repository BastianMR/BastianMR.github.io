# AGENTS.md — BastianMR.github.io

Personal blog built with AstroPaper, published at <https://bastianmr.github.io>. This is a **public** repository.

## Content isolation (mandatory)

- Everything published from this repo must be **strictly personal**.
- Never reference, quote, paraphrase, or derive content from any work repository, work folder, client engagement, or private/company knowledge base.
- Never include private or work data of any kind: identifiers, monetary amounts, financial or accounting records, client or company names, internal decisions, operational procedures, or infrastructure details.
- When structuring or planning content for this repo, draw **only** from personal sources (this blog, personal notes at a high level, and public references).

## Writing conventions

- Site language is Spanish (`es`). Post bodies are written in Spanish.
- Post frontmatter must match the schema in `src/content.config.ts` (`pubDatetime`, `title`, `description`, `tags`, `timezone`).
- Before finishing a change: run `npm run lint` and `npx prettier --check <changed-file>`.
- Scheduled posts: `postFilter` hides posts whose `pubDatetime` is in the future, so a "future" date means the post builds its OG image but no HTML page. Use a past/current `pubDatetime` to publish.

## Local build on Windows (workaround)

This machine's Application Control policy blocks `node_modules/@astrojs/compiler-binding-win32-x64-msvc/astro.win32-x64-msvc.node`, so `npm run build` fails with "Cannot find native binding". Force the WASI fallback:

```powershell
npm install --no-save --force "@astrojs/compiler-binding-wasm32-wasi@0.4.0"
$env:NAPI_RS_FORCE_WASI = "1"
npm run build
```

The build's final `cp -r dist/pagefind public/` step is Unix-only and fails harmlessly on Windows; CI runs on Linux, so it passes there.
