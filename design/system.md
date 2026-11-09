# Design system — BastianMR.github.io

Sincronizado desde el código del proyecto. Solo valores encontrados en las fuentes; nada inventado.

## Fuentes leídas

| Fuente | Qué aporta |
| --- | --- |
| `src/styles/theme.css` | tokens de color, registro `@theme` de Tailwind v4, familia tipográfica |
| `src/styles/typography.css` | jerarquía del cuerpo de artículo (`app-prose`), code blocks, blockquote |
| `src/components/Card.astro` | anatomía de la entrada de listado (título enlace + fecha + descripción) |
| `src/components/Header.astro` | cabecera, navegación, estado activo |
| `src/components/Tag.astro` | etiqueta con borde inferior punteado |
| `src/components/Datetime.astro` | línea de fecha con icono |
| `src/components/LinkButton.astro` | botón de navegación (posts, noticias) |
| `src/layouts/Layout.astro` | `app-layout`, ancho de columna |

## Color

Tema oscuro único (`lightAndDarkMode: false`): los tres selectores `:root`, `[data-theme="light"]` y `[data-theme="dark"]` tienen los mismos valores.

| Token | Valor | Uso |
| --- | --- | --- |
| `--background` | `#0d0d0d` | fondo de página |
| `--foreground` | `#ffffff` | texto principal |
| `--accent` | `#00ff85` | enlaces de título, iconos, marcadores de lista, foco |
| `--accent-foreground` | `#0d0d0d` | texto sobre accent |
| `--hover` | `#ff0099` | hover de enlaces y bordes punteados |
| `--muted` | `#1a1a1a` | fondo de `code`, superficies |
| `--muted-foreground` | `#9ca3af` | fechas y metadatos |
| `--border` | `#262626` | separadores, bordes de tabla e imagen |

Regla de contraste: texto siempre `--foreground`; metadatos `--muted-foreground`; nunca accent como color de párrafo.

## Tipografía

| Rol | Valor | Fuente |
| --- | --- | --- |
| familia | `var(--font-google-sans-code)` | `theme.css` (`--font-app`) |
| h1 de página | 1.5rem / 1.875rem desde `sm` | `Main.astro` (`text-2xl sm:text-3xl`) |
| h2 de sección | 1.5rem, `tracking-wide`, semibold | `index.astro` |
| título de entrada | 1.125rem, medium | `Card.astro` (`text-lg`) |
| cuerpo | 1rem, `line-height` heredado | `card.html` / body |
| metadatos | 0.875rem, `--muted-foreground` | `Datetime.astro` |
| h3 de artículo | itálica | `typography.css` |

## Espaciado y forma

| Token | Valor | Fuente |
| --- | --- | --- |
| columna de contenido | `max-w-app` (medida del layout) | `app-layout` |
| entrada de listado | `margin-block` 1.5rem | `Card.astro` (`my-6`) |
| separación de sección | 3rem arriba / 1.5rem abajo | `index.astro` (`pt-12 pb-6`) |
| radio | 0.25rem solo en `code` y botones | `typography.css` |
| sombras | ninguna | — |
| filete | 1px `--border`; subrayado de enlace `2px` punteado | `Tag.astro`, `Header.astro` |

## Componentes

- **Card de listado**: `<li>` → enlace con el título en accent e `underline` punteado al hover → línea de fecha en muted → párrafo descriptivo. Sin borde, sin fondo.
- **Tag**: enlace con icono `#`, `border-bottom: 2px dashed` que pasa a `--hover` en hover.
- **Nav del header**: título del sitio + ítems; el activo lleva subrayado. En móvil colapsa a menú.
- **Botón de navegación**: enlace de texto con icono de flecha.
- **Breadcrumb**: `Inicio » Sección`.
- **Foco visible**: `outline: 2px dashed var(--accent)`, `offset: 2px`.
