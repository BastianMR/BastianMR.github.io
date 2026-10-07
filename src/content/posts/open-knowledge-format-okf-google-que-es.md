---
pubDatetime: 2026-10-07T00:00:00-03:00
title: "Open Knowledge Format (OKF) de Google: el estándar de conocimiento que ordenó mi caos digital"
description: "Qué es el Open Knowledge Format (OKF) v0.2 de Google, por qué se usa como estándar al crear un repo, cómo pedirle a un agente que trabaje con un bundle en GitHub, cómo validar el frontmatter con Python y cómo preparar el repo con scripts, plantillas y prompts. Guía técnica y personal, también para quien no programa."
tags: [ia, productividad, herramientas, metodologias]
timezone: "America/Santiago"
---

Tengo un problema que quizás compartas: sé mucho más de lo que puedo encontrar en el momento en que lo necesito.

Durante años intenté resolverlo con métodos que ya te conté en otros artículos: P.A.R.A., Notion, un segundo cerebro en Obsidian, capturas rápidas en el celular. Y funcionó… a medias. El problema no era guardar la información, era que cada herramienta la guardaba a su manera. Mis notas eran un silo: vivían bien dentro de su app, pero apenas salían de ahí —o apenas quería que un asistente de IA las leyera— todo se caía.

Hasta que me topé con el **Open Knowledge Format (OKF)** de Google. Y por primera vez sentí que estaba frente a un **estándar**, no a otra app con sus propias reglas. En este artículo te explico qué es, por qué se está usando como estándar al generar un repositorio de conocimiento, cómo hacer que un agente de IA trabaje sobre él, cómo validarlo con Python, cómo preparar el repo con scripts, plantillas y prompts, y cómo empezar **aunque no seas técnico**.

## Tabla de contenidos

## Qué es el Open Knowledge Format (OKF)

OKF es un formato abierto, pensado a la vez para personas y para agentes de IA, que representa conocimiento como **archivos Markdown con un bloque de metadatos YAML (frontmatter)** en la parte de arriba, organizados en carpetas.

Suena técnico, pero la idea es simple. Google lo presentó en junio de 2026 (versión 0.1) y en julio de 2026 publicó la versión 0.2, que agregó las llamadas _trust signals_ o señales de confianza. La especificación completa vive en [`GoogleCloudPlatform/open-knowledge-format`](https://github.com/GoogleCloudPlatform/open-knowledge-format). La promesa central es esta:

> Si puedes abrir un archivo con el bloc de notas, puedes leer OKF; si puedes clonar un repositorio, puedes compartirlo.

No hay que instalar nada, no hay que registrarse en ninguna plataforma y no depende de Google ni de ninguna empresa para funcionar. Es un **formato**, como el PDF o el Markdown, no un producto.

Un conjunto de archivos OKF se llama **bundle** (paquete). Y aquí viene el dato más liberador de todo el estándar: **el único campo obligatorio es `type`**. Todo lo demás es opcional. Un archivo con solo `type` ya cumple con la especificación.

### Qué NO es OKF (para que no te confundas)

- **No es una base de datos.** Es una carpeta con archivos de texto.
- **No es un programa.** Describe conocimiento; no ejecuta nada.
- **No es un registro de esquemas central.** Cada quien define sus propios `type`.
- **No reemplaza a Notion, Obsidian ni OpenAPI.** Convive con ellos.

## Anatomía de un bundle OKF

Antes de entrar en el «por qué», vale la pena entender la estructura, porque es lo que hace que el estándar sea tan fácil de adoptar. Un bundle es, literalmente, un árbol de carpetas con archivos `.md`:

```
mi-bundle/
├── index.md                 # opcional: lista el contenido del directorio
├── log.md                   # opcional: historial de cambios
├── conceptos/
│   ├── index.md             # índice de la subcarpeta
│   ├── primer-concepto.md
│   └── segundo-concepto.md
└── referencias/
    └── una-fuente.md
```

Tres reglas estructurales que conviene memorizar:

1. **Un concepto = un archivo.** El tipo de concepto no importa: una tabla, una API, una métrica, un manual. Cada uno es un `.md`.
2. **La ruta es la identidad.** El «ID» de un concepto es su ruta dentro del bundle, sin el `.md`. Eso significa que organizar bien las carpetas _es_ parte de modelar el conocimiento.
3. **Dos nombres están reservados** y nunca deben usarse para conceptos: `index.md` (índice para divulgación progresiva) y `log.md` (historial cronológico). Todo lo demás es contenido.

Los conceptos se enlazan entre sí con **enlaces Markdown normales**, y la forma recomendada es la ruta relativa al bundle, empezando por `/`:

```markdown
Ver la [tabla de clientes](/conceptos/clientes.md) para la clave de unión.
```

Esos enlaces forman un **grafo navegable**: un agente puede recorrerlo de concepto en concepto sin que le expliques la estructura. Y un detalle de diseño elegante: los enlaces rotos **no invalidan** el bundle, porque pueden representar conocimiento que todavía no escribiste.

## Por qué se usa como estándar al generar un repo

Cuando diseñas un repositorio de conocimiento —tuyo, de un equipo o de una empresa— tienes que decidir dónde guardarlo y cómo estructurarlo. La mayoría de las herramientas te obligan a elegir entre «cómodo» o «portable». OKF logra las dos cosas porque apuesta por cuatro propiedades muy concretas:

| Propiedad     | Qué significa en la práctica                                |
| ------------- | ----------------------------------------------------------- |
| **Legible**   | Un humano lo entiende sin herramientas ni SDKs.             |
| **Parseable** | Un agente de IA lo lee sin código a medida.                 |
| **Diffable**  | Como es texto plano en Git, ves qué cambió, cuándo y quién. |
| **Portable**  | No queda atado a una empresa, una app ni una nube.          |

Esa combinación es la razón por la que hoy lo uso como base de mis repos. Cuando el conocimiento vive en un servicio propietario, está atrapado; cuando vive en Markdown dentro de un repo, es **tuyo** y sobrevive a cualquier cambio de herramienta.

Google lo resumió bien: el contexto que necesitan los agentes (esquemas, definiciones, manuales) debería vivir en un formato, no disperso en servicios cerrados ni en bloques de texto sin estructura. Y como muchas de las herramientas de conocimiento que ya usas —Obsidian, Notion, MkDocs, Hugo, Jekyll— hablan Markdown con YAML, tus bundles se pueden ver y editar con lo que ya tienes.

Hay un motivo más profundo: **Git ya resolvió el versionado, la autoría y la auditoría**. Un bundle OKF dentro de un repo hereda gratis el historial completo, la posibilidad de revisar cambios con un `diff` y de saber quién tocó qué. No necesitas construir nada de eso.

## Lo que trajo OKF v0.2 y por qué importa la confianza

La versión 0.1 era minimalista: Markdown más un puñado de campos. La **0.2** agregó vocabulario, no reglas, para responder cinco preguntas que antes no tenían respuesta desde el propio archivo:

1. **¿De dónde salió esto?** → campo `sources` (procedencia).
2. **¿Cuánto debería confiar?** → campos `generated` y `verified`.
3. **¿Sigue siendo verdad?** → campo `stale_after` (frescura).
4. **¿Es la versión actual?** → campo `status` (ciclo de vida).
5. **¿Este número se calculó como dijimos que debía calcularse?** → concepto `Attested Computation`.

![Señales de confianza de OKF v0.2: las cinco preguntas mapeadas a campos del frontmatter (sources, generated y verified, stale_after, status, Attested Computation) y los tres niveles de confianza derivados de verified](/images/open-knowledge-format-okf-google-que-es/senales-confianza-okf-v02.svg)

_Las cinco preguntas de la v0.2 y los niveles de confianza que se derivan de `verified`._

Un ejemplo de frontmatter en v0.2, de un concepto que describe una métrica:

```yaml
---
type: Metric
title: Ingresos del año fiscal
description: Ingresos reconocidos del año fiscal, según la política de finanzas.
tags: [finanzas, ingresos]
status: stable
generated: { by: reference_agent/gemini-2.5-pro, at: 2026-06-28T14:00:00Z }
verified: { by: human:bastian, at: 2026-06-25T09:00:00Z }
stale_after: 2026-12-31T00:00:00Z
sources:
  - id: pol-ingresos
    resource: https://wiki.ejemplo/finanzas/reconocimiento
    title: Política de reconocimiento de ingresos
---
```

### La convención de actores

Fíjate en los valores de `generated.by` y `verified.by`. OKF usa una convención única para identificar quién hizo algo:

| Valor                   | Significa               | Ejemplo                          |
| ----------------------- | ----------------------- | -------------------------------- |
| `<productor>/<versión>` | Un agente o herramienta | `reference_agent/gemini-2.5-pro` |
| `human:<id>`            | Una persona             | `human:bastian`                  |
| `process:<id>`          | Un proceso              | `process:finanzas-nocturno`      |

El prefijo `human:` no es decorativo: de ahí se deriva el nivel de confianza.

### Niveles de confianza

`verified` define tres niveles, de menor a mayor:

- Sin `verified` → **sin verificar**.
- Confirmado solo por actores no humanos → **confirmado por máquina**.
- Confirmado por un actor `human:` → **revisado por humano**.

Dos detalles que me parecen brillantes:

- **Los niveles son señales orientativas, no permisos.** No bloquean el acceso; te dicen qué mirar con cuidado. Así puedes filtrar «solo métricas revisadas por humano» sin inventar un sistema de roles.
- **OKF guarda señales, no puntajes.** No dice «esta fuente vale 8 de 10», porque un puntaje es subjetivo, no se traslada entre consumidores y caduca. Registra hechos objetivos (`author`, `usage_count`, `last_modified`) y deja que quien lee infiera la credibilidad.

### `Attested Computation`: que el número se calcule como debe

La parte más ambiciosa de v0.2 es un tipo de concepto nuevo: **`Attested Computation`**. Sirve para cuando no basta con decir _qué significa_ un valor, sino que necesitas dejar sancionado _cómo se calcula_. El concepto declara un `runtime` (por ejemplo `python` o `bigquery`), sus `parameters`, el `executor` que lo corre y un `attester` que verifica que el cálculo ejecutado sea exactamente el sancionado.

Suena exótico, pero el problema es real: si un agente «inventa» su propia consulta para calcular un número, ¿cómo sabes que es el número correcto? La attestación convierte esa pregunta en una comparación mecánica en lugar de un acto de fe.

## Pedirle a un repositorio de GitHub que trabaje con un agente

Una de las mejores cosas de OKF es que **no necesitas nada especial para usarlo con IA**: el bundle ya es un repo. El flujo es el mismo que usarías con cualquier proyecto de código.

**Paso 1 — Trae el bundle a tu máquina:**

```bash
git clone https://github.com/GoogleCloudPlatform/open-knowledge-format.git
cd open-knowledge-format
```

**Paso 2 — Dale un trabajo acotado al agente.** El truco es pedirle que navegue por los índices antes de leer archivos, así no gasta contexto en todo el bundle:

```text
Lee el index.md de la raíz y sigue los enlaces de cada index.md.
No abras archivos que no estén listados.
Responde con:
  (a) qué conceptos hablan de <tema>, citando la ruta de cada archivo;
  (b) qué conceptos están marcados como deprecated o ya están stale;
  (c) un resumen de una línea por cada concepto relevante.
```

**Paso 3 — Pídele que _escriba_ siguiendo el estándar.** Este es el prompt que me ahorra más tiempo:

```text
En este repositorio OKF v0.2, agrega un concepto nuevo sobre <tema>.
Requisitos:
- Créalo en la carpeta que corresponda a su tipo.
- El frontmatter DEBE incluir `type` (obligatorio) + title, description y tags.
- Añade el enlace del concepto nuevo en el index.md de esa carpeta.
- No inventes campos: usa solo los del estándar.
- Al terminar, muéstrame el diff y valida el frontmatter con validate_okf.py.
```

Fíjate que el tercer prompt ya incluye la validación. Y es que ahí está el verdadero problema de OKF en la práctica.

## Validar el frontmatter YAML con Python

Cuando el conocimiento lo escriben agentes, el punto de falla no es el contenido: es el **YAML**. Los modelos generan frontmatter inválido todo el tiempo, casi siempre de formas aburridas y predecibles:

- Se les olvida el `type`, que es justo el único campo obligatorio.
- Escriben una `description` con dos puntos sin comillas (`description: Nota: importante`) y rompen el parser.
- Usan tabulaciones en vez de espacios para indentar.
- Ponen `tags` como texto (`tags: finanzas, ingresos`) en vez de lista.
- Dejan el bloque sin cerrar, o cierran con `...` en lugar de `---`.
- Escriben fechas sin zona horaria, cuando OKF exige ISO 8601 con offset.

Como la conformidad de OKF son solo tres reglas, un validador honesto cabe en unas setenta líneas de Python. Este es el que uso:

```python
#!/usr/bin/env python3
"""validate_okf.py - Validador minimo de conformidad OKF v0.2."""
import re
import sys
from pathlib import Path

import yaml  # pip install pyyaml

RESERVED = {"index.md", "log.md"}
ISO_RE = re.compile(r"^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d+)?(Z|[+-]\d{2}:\d{2})$")


def is_iso8601(value) -> bool:
    return isinstance(value, str) and bool(ISO_RE.match(value))


def split_frontmatter(text: str):
    """Devuelve (data, error). Tolerante a finales de linea CRLF."""
    if not text.startswith("---"):
        return None, "no empieza con un bloque de frontmatter '---'"
    parts = text.split("---", 2)
    if len(parts) < 3:
        return None, "frontmatter sin cierre '---'"
    try:
        data = yaml.safe_load(parts[1]) or {}
    except yaml.YAMLError as exc:
        return None, f"YAML invalido ({exc})"
    if not isinstance(data, dict):
        return None, "el frontmatter no es un mapa clave-valor"
    return data, None


def check_concept(path: Path) -> list[str]:
    data, error = split_frontmatter(path.read_text(encoding="utf-8"))
    if error:
        return [f"{path}: {error}"]

    errors: list[str] = []
    if not str(data.get("type", "")).strip():
        errors.append(f"{path}: falta el campo obligatorio 'type'")

    generated = data.get("generated")
    if isinstance(generated, dict) and not generated.get("by"):
        errors.append(f"{path}: 'generated' necesita 'by'")

    for key in ("generated", "stale_after"):
        value = data.get(key)
        at = value.get("at") if isinstance(value, dict) else value
        if at is not None and not is_iso8601(at):
            errors.append(f"{path}: '{key}' no es un datetime ISO 8601 con offset")

    verified = data.get("verified")
    if verified is not None:
        entries = verified if isinstance(verified, list) else [verified]
        for entry in entries:
            ok = (
                isinstance(entry, dict)
                and entry.get("by")
                and is_iso8601(entry.get("at", ""))
            )
            if not ok:
                errors.append(f"{path}: cada 'verified' necesita 'by' y 'at' ISO 8601")

    return errors


def validate(bundle: Path) -> int:
    concepts = [p for p in sorted(bundle.rglob("*.md")) if p.name not in RESERVED]
    errors: list[str] = []
    for path in concepts:
        errors.extend(check_concept(path))

    for err in errors:
        print(f"ERROR: {err}")
    print(f"\n{len(concepts)} conceptos, {len(errors)} error(es) de conformidad.")
    return 1 if errors else 0


if __name__ == "__main__":
    target = Path(sys.argv[1] if len(sys.argv) > 1 else ".")
    sys.exit(validate(target))
```

Se usa así:

```bash
pip install pyyaml
python validate_okf.py mi-bundle/
```

Y lo mejor es no dejarlo a la memoria: engánchalo a un **hook de Git** o a una acción de CI para que el bundle no pueda romperse sin que te enteres. Un `pre-commit` mínimo basta:

```bash
#!/bin/sh
# .git/hooks/pre-commit
python validate_okf.py . || {
  echo "Frontmatter OKF invalido: corrige antes de commitear."
  exit 1
}
```

> [!TIP]
> El error más común al empezar es olvidar el campo `type`. Sin él, el archivo no cumple la especificación. Con él, todo lo demás es opcional y puedes ir agregando después.

Si quieres endurecerlo, el mismo script escala: puedes validar que cada `type` esté dentro de una lista permitida, que cada carpeta tenga su `index.md`, o que los enlaces internos apunten a archivos que existen. La conformidad no te obliga, pero un bundle consistente vale más cuando lo lee una máquina.

## Preparar el bundle para que un agente lo use cómodo

Hasta acá el bundle ya es legible por un agente. Pero si además le das **herramientas deterministas**, **plantillas** y **prompts versionados**, dejas de repetirle las mismas instrucciones en cada sesión. La idea es simple: no confíes en que el agente recuerde las reglas, dale archivos que las encarnen.

### Scripts: dale herramientas, no memoria

Un agente improvisa mal las tareas repetitivas. En lugar de pedirle «revisa si ya existe algo parecido», dale un script que lo haga siempre igual. Un ejemplo clásico es la **detección de conceptos duplicados**, que en un bundle que crece es un problema real:

```python
#!/usr/bin/env python3
"""check-duplicates.py - Detecta conceptos duplicados por titulo normalizado."""
import sys
import unicodedata
from collections import defaultdict
from pathlib import Path

import yaml


def normalize(text: str) -> str:
    text = unicodedata.normalize("NFKD", text)
    text = "".join(c for c in text if not unicodedata.combining(c))
    return " ".join(text.lower().split())


def title_of(path: Path) -> str:
    text = path.read_text(encoding="utf-8")
    if not text.startswith("---"):
        return path.stem
    try:
        data = yaml.safe_load(text.split("---", 2)[1]) or {}
    except yaml.YAMLError:
        return path.stem
    return data.get("title") or path.stem


def main(bundle: Path) -> int:
    by_title: dict[str, list[str]] = defaultdict(list)
    for md in sorted(bundle.rglob("*.md")):
        if md.name in {"index.md", "log.md"}:
            continue
        by_title[normalize(title_of(md))].append(str(md.relative_to(bundle)))

    duplicates = {t: p for t, p in by_title.items() if len(p) > 1}
    for title, paths in duplicates.items():
        print(f"DUPLICADO: {title}")
        for p in paths:
            print(f"  - {p}")
    print(f"\n{len(duplicates)} titulo(s) duplicado(s).")
    return 1 if duplicates else 0


if __name__ == "__main__":
    sys.exit(main(Path(sys.argv[1] if len(sys.argv) > 1 else ".")))
```

El agente lo corre antes de crear cualquier concepto:

```bash
python scripts/check-duplicates.py .
```

Y como devuelve un código de salida distinto de cero cuando hay duplicados, sirve tanto en un hook de Git o en CI como dentro del flujo del agente.

### Una estructura de carpetas pensada para agentes

OKF no prescribe nada de esto —solo `index.md` y `log.md` son reservados—, pero con el tiempo adopté una convención de carpetas que le da al agente un lugar predecible donde buscar:

```
mi-bundle/
├── AGENTS.md          # reglas del repo (lo primero que lee el agente)
├── index.md           # mapa de navegación del bundle
├── scripts/           # herramientas deterministas que el agente ejecuta
│   ├── validate_okf.py
│   └── check-duplicates.py
├── templates/         # plantillas por tipo de concepto
│   └── concepto.md
├── prompts/           # prompts reutilizables y versionados
│   └── agregar-concepto.md
└── conceptos/
    └── ...
```

No es una regla del estándar, es una **convención de repo**: separa lo que el agente _lee_ (conceptos), lo que _ejecuta_ (scripts) y lo que _sigue_ (plantillas y prompts).

### Plantillas: que el frontmatter salga bien desde el inicio

Si cada concepto parte de una plantilla, el agente no tiene que recordar qué campos lleva el frontmatter. Un `templates/concepto.md` como este resuelve la mayoría de los errores de YAML:

```markdown
---
type: <tipo> # obligatorio: Receta, API Endpoint, Metric...
title: <título corto>
description: <una sola frase>
tags: [<tag>, <tag>]
---

## Qué es

## Por qué importa

## Referencias
```

El agente copia el archivo, reemplaza los marcadores y el `type` —el único campo obligatorio— ya viene puesto.

### Prompts: instrucciones que viven en el repo

Un prompt guardado es una instrucción que no se te olvida y que queda versionada en Git. Un `prompts/agregar-concepto.md`:

```text
Rol: eres editor de este bundle OKF v0.2.
Tarea: agrega un concepto sobre {{tema}}.
Pasos:
1. Corre `python scripts/check-duplicates.py .`; si ya existe, avisa y detente.
2. Copia `templates/concepto.md` y complétalo.
3. Guarda el archivo en la carpeta que corresponda a su tipo.
4. Agrega el enlace en el `index.md` de esa carpeta.
5. Corre `python scripts/validate_okf.py .` y muéstrame el resultado.
No inventes campos fuera del estándar.
```

Fíjate que el prompt **encadena los scripts**: detectar duplicados, crear desde plantilla y validar. El agente no decide _si_ validar; lo hace porque el flujo lo dice.

### `AGENTS.md`: el contrato con el agente

Los agentes que corren en la terminal —opencode incluido— leen un archivo `AGENTS.md` en la raíz del repo al abrirse. Es el lugar donde le explicas el bundle **una sola vez**. Un `AGENTS.md` para tu bundle podría verse así:

```markdown
# AGENTS.md — mi-bundle

Bundle OKF v0.2. Antes de escribir:

- Oriéntate leyendo `index.md`; no abras archivos que no estén enlazados.
- Todo concepto lleva frontmatter con `type`; parte de `templates/concepto.md`.
- No dupliques conceptos: corre `scripts/check-duplicates.py`.
- Valida con `scripts/validate_okf.py` antes de terminar.
- Escribe en español, frases cortas, sin inventar campos.
```

Con eso, cada sesión nueva del agente arranca sabiendo dónde mirar y qué ejecutar, sin que se lo repitas.

### Envolverlo en un comando (mi caso: opencode en la terminal)

Como uso opencode desde la terminal, convierto ese prompt en un comando propio. En `.opencode/commands/nuevo-concepto.md`:

```markdown
---
description: Agrega un concepto nuevo al bundle OKF
---

Ejecuta el flujo de `prompts/agregar-concepto.md` para el tema: $ARGUMENTS
```

Y desde la interfaz escribo:

```text
/nuevo-concepto cómo validar enlaces rotos
```

opencode reemplaza `$ARGUMENTS` por el tema y ejecuta el prompt. Como los comandos corren en la raíz del proyecto, el agente ya tiene a mano los scripts y las plantillas. Si quieres el mismo comando en todos tus repos, va en `~/.config/opencode/commands/`.

Todavía más útil: los comandos pueden **inyectar la salida de un comando de shell** en el prompt. Así el agente no solo valida, sino que parte del resultado real:

```markdown
---
description: Valida la conformidad OKF del bundle
---

Estado actual del validador:

!`python scripts/validate_okf.py .`

Explica los errores y propone cómo corregirlos.
```

Así el repo deja de ser «una carpeta de archivos» y se convierte en un entorno donde el agente sabe dónde mirar, qué ejecutar y cómo verificar su propio trabajo. Ese es, para mí, el salto real: OKF describe el conocimiento, y estas convenciones describen **cómo trabajar con él**.

## Casos de referencia

No tienes que partir de cero: hay material público para copiar patrones.

- **La especificación canónica.** El `SPEC.md` en [`GoogleCloudPlatform/open-knowledge-format`](https://github.com/GoogleCloudPlatform/open-knowledge-format) es la única fuente autoritativa. Todo lo demás —incluido este artículo— es interpretación. Ojo con un detalle de higiene: existió una copia congelada en `knowledge-catalog/okf/` que ya no se mantiene; usa el repo canónico.
- **Bundles de ejemplo de Google.** Junto con v0.2, Google actualizó bundles de muestra que ejercitan las familias de campos: un caso de e-commerce de GA4, un bundle de Stack Overflow, uno de Bitcoin y el ejemplo de retail que usa en su propio anuncio. Son la mejor referencia para ver frontmatter «de verdad».
- **Round-trip con Knowledge Catalog.** Google mostró un bundle viajando desde disco hacia su Knowledge Catalog (ex Dataplex) y de vuelta, con las señales de confianza preservadas. Es el caso de referencia para quien quiera servir un bundle a un catálogo de datos.
- **Mi caso personal.** Un catálogo de herramientas, mi CV y mis finanzas personales viviendo como bundle OKF v0.2. Lo cuento más abajo.

La adopción todavía es temprana —v0.1 salió recién en junio de 2026—, así que estos ejemplos son el mejor punto de partida disponible.

## Del segundo cerebro en Obsidian al estándar abierto

Aquí quiero ser honesto contigo, porque ya te conté mi historia con Obsidian y con un segundo cerebro personal. Ese enfoque **me sirvió y sigue sirviéndome** para mis notas privadas. Pero tenía límites que OKF resuelve:

- Mi segundo cerebro usaba un **esquema propio** (`created`, `updated`, `categories`, `domain`…). OKF usa un conjunto de campos que **cualquier agente reconoce** de entrada.
- Vivía como un **silo**: para que una IA lo entendiera, había que explicarle mi estructura.
- Sus enlaces internos no eran un estándar; en OKF los conceptos se enlazan con Markdown normal y forman un **grafo navegable** que cualquier herramienta puede recorrer.

La diferencia no es que uno sea bueno y el otro malo. Es que un formato personal optimiza para **una persona**; un estándar abierto optimiza para **que cualquiera —humano o máquina— lo consuma sin traducción**. Y cuando el conocimiento se va a compartir, auditar o alimentar a agentes, esa diferencia lo cambia todo.

## Cómo lo uso todos los días (mi caso personal)

Mi bundle personal se llama `second-brain`. Declara `okf_version: "0.2"` en su índice y hoy cataloga cientos de herramientas, referencias, mi CV y mis finanzas personales. La navegación es _progressive disclosure_ en tres niveles: índice raíz → secciones → notas.

Lo que cambió respecto a mi segundo cerebro en Obsidian no fue el contenido: fue que ahora cualquier agente entra, lee el `index.md`, sigue los enlaces y entiende el contexto **sin que yo le explique nada**. Cuando el conocimiento tiene estructura estándar, dejas de ser el intérprete de tus propias notas. Justamente de eso hablé en [agentes de IA en finanzas](/posts/agentes-de-ia-en-finanzas-la-hoja-de-ruta-definitiva-para-contadores-que-lideran-el-cambio/): el cuello de botella no es el modelo, es el contexto.

## Caso de uso paso a paso para una persona no técnica

Digamos que quieres armar tu propia base de conocimiento —recetas, finanzas del hogar, lo que sea— sin programar. Con OKF basta con esto:

**Paso 1. Crea una carpeta** para tu bundle. Por ejemplo, `mis-recetas/`.

**Paso 2. Dentro, crea un `index.md`** que liste lo que hay (esto es opcional, pero es lo que hace la navegación agradable):

```markdown
# Mis recetas

- [Pan de masa madre](pan-masa-madre.md) - La receta base que uso cada semana.
- [Salsa de tomate](salsa-tomate.md) - Versión rápida para pastas.
```

**Paso 3. Crea un archivo por concepto.** Por ejemplo, `pan-masa-madre.md`:

```markdown
---
type: Receta
title: Pan de masa madre
description: La receta base que uso cada semana.
tags: [panaderia, hogar]
---

Aquí va la receta, los ingredientes y los pasos, en texto plano.
```

Y listo. Ese archivo **ya es OKF válido**. Los campos que puedes usar son:

| Campo         | ¿Obligatorio? | Para qué sirve                                                       |
| ------------- | ------------- | -------------------------------------------------------------------- |
| `type`        | **Sí**        | Qué tipo de concepto es (`Receta`, `CV`, `Oferta`…). Tú lo inventas. |
| `title`       | No            | El nombre que verás al listar.                                       |
| `description` | No            | Resumen de una línea (y el texto que aparece en búsquedas).          |
| `tags`        | No            | Categorías transversales, como hashtags.                             |
| `resource`    | No            | Enlace al recurso original, si aplica.                               |

No necesitas tocar Python ni Git para empezar: con el bloc de notas y una carpeta ya tienes un bundle. Todo lo técnico de este artículo es opcional y lo puedes ir sumando cuando te haga falta.

## Preguntas frecuentes

**¿Necesito saber programar?** No. Si sabes escribir un archivo de texto y usar carpetas, sabes usar OKF. Lo técnico es opcional (por ejemplo, la validación con Python o las _Attested Computations_).

**¿Es gratis?** Sí. Es un estándar abierto con una especificación pública. No pagas licencias ni dependes de una cuenta.

**¿Es lo mismo que Notion u Obsidian?** No. Esas son aplicaciones; OKF es el **formato** en el que guardas el contenido. De hecho, ambas pueden leer o exportar Markdown con frontmatter, así que encajan bien con OKF.

**¿Puedo usar mis propios campos?** Sí. OKF preserva las claves desconocidas en lugar de rechazarlas. Solo `type` es obligatorio; el resto es tu decisión.

**¿Qué pasa si Google abandona el estándar?** Que no pasa nada. Tus archivos son Markdown con texto plano en Git: siguen siendo legibles por cualquier editor y por cualquier IA. Ese es, precisamente, el punto de un formato abierto. (Y de hecho ya puedes ver mi [viaje construyendo un segundo cerebro](/posts/de-contador-a-arquitecto-del-conocimiento-como-construi-mi-segundo-cerebro-para-conquistar-el-caos-digital/) antes de dar el salto a un estándar.)

## Conclusión

OKF me convenció por una razón simple: no me ata. Es ordenado para mí, entendible para las máquinas y mío para siempre, porque vive en archivos de texto que puedo mover a donde quiera. Venía de un segundo cerebro que funcionaba, pero que solo hablaba mi idioma; OKF habla el idioma que el resto del mundo —y la IA— ya saben leer.

Si el año pasado el reto era [documentar lo que aprendemos](/posts/la-importancia-de-documentar-una-leccion-del-mundo-de-programacion/), este año el reto es documentarlo en un formato que se pueda **compartir, auditar y automatizar**. Y por primera vez, tengo la sensación de hacerlo sobre una base estándar, no sobre las reglas de una app.

¿Tienes tu propio sistema de notas? ¿Lo has probado con agentes de IA? Te leo en los comentarios.
