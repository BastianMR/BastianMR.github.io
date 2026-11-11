---
title: "Nod: n8n lanza su agente personal open source, y lo pone bajo Apache 2.0"
description: "n8n publicó Nod, un agente personal que corre en tu computadora con su propia máquina virtual y navegador. La noticia no es el 98% de tareas completadas: es que el producto más ambicioso de una compañía de fair-code sale con la licencia más permisiva."
pubDatetime: 2026-11-11T11:30:00-03:00
category: "software"
tags:
  [
    "n8n",
    "agentes",
    "open-source",
    "apache-2.0",
    "computer-use",
    "local-first",
    "privacidad",
    "mcp",
  ]
source:
  name: "n8n Blog"
  url: "https://blog.n8n.io/meet-nod"
---

## Resumen

El 10 de noviembre de 2026 n8n publicó **Nod**, un agente personal que corre en la computadora del
usuario, con su propia máquina virtual y su propio navegador, y que trabaja en las apps conectadas
(Gmail, Calendar, Drive, Slack, Notion, Linear) y en sitios que no tienen integración, hasta
terminar la tarea [1](#ref-1)[2](#ref-2).

Sale como **research preview de n8n Labs**, el equipo que la compañía armó para experimentar fuera
del producto central, en versión **v0.6.2**, gratis y bajo **Apache 2.0** en
`github.com/n8n-io/nod` — no bajo la licencia fair-code del n8n de siempre
[1](#ref-1)[3](#ref-3)[5](#ref-5). La tesis del producto es un corrimiento de escala: n8n automatiza
los procesos compartidos de un equipo; Nod es para una sola persona y sus propios pendientes, y no
necesita cuenta de n8n [1](#ref-1)[2](#ref-2).

El gancho técnico no es el navegador —eso ya lo tienen OpenClaw, Manus y Perplexity— sino la
combinación de tres cosas: código auditable, política de permisos que vive en el servidor y no en el
prompt, y un modelo a elección del usuario, incluido uno local [2](#ref-2)[7](#ref-7).

Las dudas están en el otro lado: la propia compañía admite que el chequeo de permisos "es en sí
mismo un modelo y puede equivocarse", el benchmark que publica se midió con un solo modelo y con
cuentas simuladas, y el agente se detiene cuando la notebook se duerme
[1](#ref-1)[2](#ref-2)[6](#ref-6).

## El lanzamiento: blog un día, binario al otro

- **10 de noviembre, blog de n8n**: "Meet Nod: a standalone personal agent from n8n Labs that runs
  on your computer", firmado por Ophir Prusak, Staff Product Marketing Manager de n8n en Nueva York
  [1](#ref-1).
- **11 de noviembre, 08:22 UTC**: el anuncio formal en el foro de la comunidad, en la categoría n8n
  Labs, firmado por Johan del equipo de producto [5](#ref-5).
- **11 de noviembre, 07:30 UTC**: se publica el release **nod-v0.6.2**, el primero con instaladores
  servidos desde GitHub Releases. El changelog incluye "Desktop: use GitHub Releases for public
  upgrades" y una reescritura completa del README como página de lanzamiento con benchmarks
  [3](#ref-3).
- **No es un v1.0**: la primera versión pública es una **0.6.2** con **1.088 commits** y **246
  estrellas / 33 forks** al momento de esta nota [3](#ref-3). El producto se desarrolló en privado
  durante meses y se abrió ya maduro; el número de commits es evidencia, no prueba de calidad.
- **Descargas del primer día** (release v0.6.2, contadores de GitHub): **1.186** del instalador de
  Windows, **657** del `.dmg` arm64 y **52** del `.dmg` Intel — cerca de **1.900 instaladores** en
  menos de un día [3](#ref-3). Windows por delante de Mac es raro en herramientas para builders;
  puede ser efecto del público n8n, más corporativo.

## Qué hace, en concreto

- **Tiene su propia computadora**: una máquina virtual privada en la máquina del usuario, más un
  Chromium aparte, con lo que puede iniciar sesión en sitios sin integración
  [1](#ref-1)[2](#ref-2).
- **Trabajos que la compañía pone como ejemplo**: cancelar una suscripción y pedir el reembolso,
  vigilar un precio, reservar un hotel, entrar cada mes a los portales de proveedores y bajar las
  facturas para el contador, sacar números de un dashboard que no exporta [1](#ref-1).
- **Trabaja de antemano**: lee las apps conectadas y ofrece tareas; corre varios trabajos en
  paralelo; los que se repiten van en horario [1](#ref-1).
- **Una sola conversación, tres puertas**: app de escritorio, Telegram y WhatsApp [1](#ref-1).
- **Memoria de meses de conversación**, con la opción de ver, editar o borrar cada nota guardada; si
  conectás Gmail, copia tu forma de escribir para los borradores. **LongMemEval-S: 93,2%** contra
  79,0% del código anterior [1](#ref-1)[6](#ref-6).
- **Aprende el procedimiento**: escribe cómo resolvió una tarea, lo reusa la vez siguiente y lo
  corrige cuando el sitio cambia [1](#ref-1).
- **Conecta con n8n si ya lo tenés**: puede construir, probar y correr workflows, y uno nuevo queda
  en borrador hasta que digas "publicalo" [5](#ref-5).

## La parte de confianza, que es donde se juega el producto

- **La política vive en el servidor, no en el prompt**: el chequeo de confianza, el Vault, los pagos
  y los límites de gasto corren del lado del servidor [2](#ref-2).
- **Nada de lo que lee puede darle órdenes**: resultados de apps, web y navegador llegan al modelo
  marcados como **datos**, no como instrucciones, y "ni un mail ni una página web pueden darle
  permiso" [2](#ref-2)[5](#ref-5).
- **Las claves nunca entran al sandbox**: las API keys del proveedor no tocan ni el workspace ni el
  navegador [2](#ref-2).
- **Las contraseñas no las ve el modelo**: logins y tarjetas se guardan cifrados en la máquina y se
  ingresan por formularios privados que el modelo no puede leer [1](#ref-1)[2](#ref-2).
- **Control de gasto**: cada tarea muestra lo que costó y termina con un recibo, hay límite mensual,
  y Nod consulta cuando una tarea pasa los **US$5** (umbral configurable); cada horario muestra su
  costo mensual estimado [1](#ref-1).
- **La advertencia de la propia compañía**: "the permission check is itself a model and can make
  mistakes, which is why Nod asks when your words don't cover an action" [1](#ref-1).

## Los benchmarks, y lo que la letra chica aclara

- **98% de tareas completadas**: 226 encargos, tres intentos cada uno, **678 corridas**, medido el
  **17 de octubre de 2026** con **GPT-6.1 Sol** en cuentas y sitios simulados [6](#ref-6).
- **0 de 678 corridas con una acción insegura** observada; **0 de 13** escenarios de prompt
  injection lograron el efecto prohibido [6](#ref-6).
- **LongMemEval-S 93,2%** sobre 500 preguntas en sesiones nuevas, y **96,4%** sobre las 418
  preguntas que el equipo no tocó durante el desarrollo (antes: 83,7%) [6](#ref-6).
- **WhisperBench: 0 de 216 inyecciones de memoria** (108 casos, dos modos) [6](#ref-6).
- **La letra chica, que es de manual**: los 98% no son "98% de intentos que pasan todo" —hay un pass
  rate más estricto aparte—; las tres repeticiones no son 678 diseños independientes; el resultado
  no establece un ranking contra otros productos; y en las 12 respuestas posteriores que usaron el
  dato del ataque, Nod lo leyó **de nuevo del inbox**, no de la memoria [6](#ref-6).
- **Por qué importa**: que una empresa publique los límites de su propio benchmark es la excepción,
  no la regla.

## Bajo el capó

- **Un proceso Node y unos contenedores Docker** en la misma máquina: servidor Nod (runtime Pi,
  chequeo de confianza, Vault, memoria, horarios), **workspace Linux** en contenedor, **Chromium** en
  otro, **PostgreSQL** [2](#ref-2).
- **Stack declarado**: TypeScript sobre **Node.js 24**, Fastify, React, PostgreSQL con **pg-boss**,
  el runtime de agentes [Pi](https://github.com/earendil-works/pi), **agent-browser**, **Composio**,
  **MCP** y **Electron** [2](#ref-2).
- **Badge de OpenSSF Best Practices** en el repo, y firma Developer ID + notarización de Apple en los
  builds de macOS; los de Windows los firma n8n GmbH [2](#ref-2)[3](#ref-3).
- **La telemetría, con letra chica propia**: los **datos de uso están activados por defecto**
  —pantallas y funciones que usás, respuestas de onboarding, un ID de instalación aleatorio y un
  perfil en PostHog—; las **trazas de conversación están apagadas por defecto** y, cuando se
  activan, se pseudonimizan en la máquina antes de salir. La propia página lo aclara: "traces are
  pseudonymised, not anonymous" — los emails, teléfonos y cuentas se reemplazan por su forma, los
  nombres no siempre [12](#ref-12).
- **Por qué es el detalle más honesto del lanzamiento**: "usage data on by default" no contradice
  "local-first", pero sí obliga a decirlo dos veces. Y lo dicen, con un ejemplo completo de qué
  evento viaja y qué no.

## Plataformas, licencia y lo que no hace

- **macOS 14 o superior**, Apple silicon **e** Intel; **Windows 11 x64 en preview** y con **WSL 2**
  obligatorio. No hay app de escritorio para Linux, aunque se puede **self-hostear en un servidor
  Linux** [1](#ref-1)[5](#ref-5).
- **Apache 2.0**, gratis. El costo es el modelo: API key propia (OpenAI, Anthropic, Gemini,
  OpenRouter, Bedrock, Vertex AI, Azure…), plan **ChatGPT Plus o Pro**, o un modelo local
  [1](#ref-1)[2](#ref-2).
- **No hace**: llamadas telefónicas; **un dueño por instalación**; y **se detiene cuando la notebook
  duerme**, así que los horarios exigen una máquina siempre encendida. La versión hosteada y el uso
  compartido por equipos están en el roadmap [1](#ref-1)[2](#ref-2).

## Recepción: mucha amplificación, ninguna prueba independiente

- **El 11 de noviembre, 8:19 AM**: n8n publica el anuncio en su cuenta de X con un video; a las
  pocas horas el post acumulaba **2.726.642 impresiones** según la API de X [4](#ref-4)[13](#ref-13).
  La captura pública de la página mostraba 646.000 vistas, un número que la API no reproduce; se
  publica el de la API.
- **Product Hunt el mismo día**: "Nod by n8n — Open source personal agent with its own computer",
  séptimo lanzamiento de la cuenta de n8n, que tiene **4,8/5 con 78 reseñas** y 4.000 seguidores
  [14](#ref-14).
- **r/n8n**: el hilo del anuncio iba por **41 upvotes** a las 7 horas [15](#ref-15). En r/selfhosted
  el título fue otro: "n8n is back?" [15](#ref-15) (solo snippets de buscador; Reddit bloqueó la
  extracción).
- **El enjambre promocional**: la búsqueda social devuelve decenas de posts con el mismo guion (prep
  calls / collect invoices / cancel trials / open source), muchos de cuentas que venden cursos o "AI
  automation" [13](#ref-13). El volumen de repetición es un indicador de campaña, no de uso.
- **No hay prensa tecnológica mainstream**: búsquedas dirigidas a TechCrunch, VentureBeat y The
  Verge no devuelven una sola nota sobre Nod al cierre de esta nota; lo que existe es el blog, foro,
  Reddit, LinkedIn, Product Hunt, agregadores y sitios SEO de terceros [16](#ref-16). La ausencia es
  dato, no conclusión: puede ser timing.
- **Jan Oberhauser, CEO, en LinkedIn**: "We created n8n Labs to explore ideas beyond our core
  product and put…" [17](#ref-17) (snippet; LinkedIn bloquea la extracción).
- **La frase que mejor lo resume, de un tercero**: "Spend limits are permissions, not billing
  features" — @salem_sofiene [13](#ref-13).

## La jugada de n8n

- **n8n Labs** es un equipo nuevo dentro de n8n, para ideas fuera del producto central; la compañía
  aclara que Nod **no cambia la dirección de n8n** y que el trabajo en n8n y en el agente de n8n
  sigue como estaba [1](#ref-1)[5](#ref-5).
- **El encuadre comercial**: n8n es "multiplayer", procesos compartidos de una empresa en una
  instancia compartida; Nod es "single player", una persona y sus pendientes [1](#ref-1).
- **Contexto de escala**: n8n vale **US$5.200 M** desde la inversión estratégica de SAP en mayo de
  2026, juntó **US$240 M**, tiene **207.000 estrellas** en GitHub y declaró **1,7 millones de
  builders activos mensuales** y más de **1.400 clientes enterprise** [8](#ref-8). Son cifras de la
  compañía, publicadas en su propio blog y su página de prensa.
- **La licencia es la noticia**: el core de n8n es fair-code (Sustainable Use License); Nod es
  **Apache 2.0** de verdad, con la evaluación también abierta en `evals/`
  [3](#ref-3)[6](#ref-6)[8](#ref-8).

## Citas

> "Nod is for a single player. It's built for one person, connects to that person's accounts, and
> gets their jobs done, whether the job is for their business or their household." — Ophir Prusak,
> blog de n8n [1](#ref-1)

> "The permission check is itself a model and can make mistakes, which is why Nod asks when your
> words don't cover an action." — n8n [1](#ref-1)

> "Some early testers found tasks cost more than they expected, so cost has been a focus of our
> recent releases, and the latest one brought it down substantially." — n8n [1](#ref-1)

> "An email or a web page can't give Nod permission. Only you can." — Johan, equipo de producto de
> n8n, foro de la comunidad [5](#ref-5)

> "Zero observed unsafe actions or successful attacks is a sample result. It is not a guarantee of
> zero risk in production." — docs de Nod, página de benchmarks [6](#ref-6)

> "Traces are pseudonymised, not anonymous." — docs de Nod, página de privacidad [12](#ref-12)

> "Spend limits are permissions, not billing features." — @salem_sofiene, sobre el diseño de Nod
> [13](#ref-13)

## Contexto

**n8n acaba de hacer con los agentes personales lo que hizo con la automatización: llegar tarde, con
menos ruido y con la licencia correcta.** La categoría existe desde principios de 2026 y está
poblada: OpenClaw como framework open source self-hosted, Manus con su app de escritorio "My
Computer" lanzada en marzo, Perplexity con su "Personal Computer" sobre Mac mini gestionado, y los
asistentes de chat de siempre [9](#ref-9)[10](#ref-10). Nod no trae una capacidad nueva. Trae tres
decisiones: Apache 2.0 en vez de fair-code, el modelo lo elige el usuario —incluido uno local— y la
puerta de permisos en el servidor en lugar del prompt. En una categoría donde todos prometen "hace
el trámite por vos", la diferencia auditable es quién controla la política.

**El benchmark es lo más interesante del lanzamiento y no por el 98%.** Lo interesante es el
documento de método: qué se midió, con qué modelo, en qué fecha, sobre cuántas corridas, qué cuenta
como aprobado, y qué **no** prueban los números. Un 98% con tres intentos por tarea no dice que Nod
acierte 98 de cada 100 veces con tu Gmail real; dice que en 226 encargos sintéticos, con GPT-6.1
Sol, en octubre, casi siempre terminó. La parte incómoda está escrita por ellos: el chequeo de
permisos es un modelo, y un modelo que autoriza es un punto de falla que se puede atacar. Por eso el
WhisperBench a cero pesa más que el 98%.

**El costo real no está en el precio, está en la factura del modelo.** Nod es gratis y la compañía
lo dice sin vueltas: "algunos testers encontraron que las tareas costaban más de lo que esperaban".
Un agente que navega, lee, escribe y verifica quema tokens en cada paso, y el límite mensual y el
aviso a los US$5 son la respuesta a un problema que ya tuvieron. Para un solo usuario eso es una
suscripción encubierta a OpenAI o Anthropic, con la diferencia de que acá se ve el recibo por tarea.

**La letra chica operativa define al usuario.** Se detiene cuando la notebook duerme, un dueño por
instalación, sin llamadas telefónicas, Windows todavía en preview y con WSL 2. Todo eso empuja al
mismo perfil: alguien técnico, con una Mac mini o un servidor propio, que ya paga un plan de modelo
y tiene el hábito de leer un log. No es el usuario de n8n cloud. Es, más bien, el que hoy corre
OpenClaw y se cansa de configurarlo.

**Y hay una advertencia sobre el ecosistema de cobertura.** A menos de 24 horas del lanzamiento ya
hay reseñas generadas automáticamente y notas de competidores que afirman que "la fecha de
lanzamiento y el código fuente no están publicados al 11 de noviembre" cuando el repo está público
desde el 10 [11](#ref-11). La búsqueda dirigida a TechCrunch, VentureBeat y The Verge no devuelve ni
una nota; lo que hay es el blog, el foro, Product Hunt, Reddit, LinkedIn y una marea de cuentas que
repiten el mismo guion de tres viñetas
[13](#ref-13)[14](#ref-14)[15](#ref-15)[16](#ref-16). La noticia se puede escribir con el blog y el
repo, o se puede escribir con el resumen del resumen. La diferencia, en una categoría que se mueve
por semana, es la diferencia entre informar y repetir.

**Y el asterisco de privacidad, que acá se puede leer completo.** Nod manda datos de uso a n8n **por
defecto**: pantallas y funciones, respuestas de onboarding, un ID de instalación y un perfil en
PostHog. No manda tus mensajes ni las respuestas de Nod, y las trazas de conversación son opt-in y
se pseudonimizan en tu máquina antes de salir. La página lo dice con una honestidad que no es
habitual: "pseudonymised, not anonymous" — reconoce que los nombres se le pueden escapar al
scrubber. Para una categoría que vende privacidad local, la diferencia entre "tus datos quedan en tu
máquina" y "tus datos quedan en tu máquina salvo la telemetría de producto" es la diferencia entre
un claim y un contrato.

## Qué sigue

- Cómo evolucionan estrellas y descargas a siete días: el número del primer día es una foto, no una
  tendencia.
- La primera reseña con uso real y su costo por tarea. Esta nota tiene especificaciones, benchmarks y
  telemetría, pero ni una hora de uso propio.
- Si la versión hosteada y el uso compartido por equipos salen del roadmap, porque ahí Nod deja de
  ser un producto de un solo dueño por instalación.
- Si la prensa tecnológica mainstream cubre el lanzamiento, o si el patrón de esta categoría es
  lanzar directo a la comunidad y saltear el filtro.

## Bibliografía

1. <a id="ref-1"></a>n8n Blog — "Meet Nod: a standalone personal agent from n8n Labs that runs on
   your computer" (Ophir Prusak). 10 nov 2026. [blog.n8n.io](https://blog.n8n.io/meet-nod) (leído
   completo 2026-11-11). Usado para: qué es Nod, n8n Labs, encuadre multiplayer/single player,
   capacidades, plataformas, confianza, costos y guardarraíles, límites declarados, y las citas de
   Prusak.
2. <a id="ref-2"></a>GitHub — `n8n-io/nod`, README principal y topics.
   [github.com](https://github.com/n8n-io/nod) (leído 2026-11-11). Usado para: descripción del repo,
   arquitectura, stack (Node 24, Fastify, React, PostgreSQL/pg-boss, Pi, agent-browser, Composio,
   MCP, Electron), benchmarks de portada, OpenSSF, licencia Apache 2.0 y estrellas/forks al momento
   de la nota.
3. <a id="ref-3"></a>GitHub API — release `nod-v0.6.2` y su cuerpo.
   [api.github.com](https://api.github.com/repos/n8n-io/nod/releases/latest) (consultado
   2026-11-11). Usado para: versión pública, fecha y hora de publicación (07:30 UTC), requisitos de
   macOS 14 y Windows 11 con WSL 2, firma Developer ID/notarización y firma de n8n GmbH, changelog
   de analytics y Customer.io, y contadores de descargas por instalador.
4. <a id="ref-4"></a>X — @n8n_io, "Meet Nod, your own open-source personal agent from n8n Labs". 11
   nov 2026. [x.com](https://x.com/n8n_io/status/2120431328458076315) (visto 2026-11-11). Usado
   para: hora del anuncio y contenido del post. Complementado con el post de Wall St Engine del
   mismo día, marcado como paid partnership:
   [x.com](https://x.com/wallstengine/status/2120447140849992140).
5. <a id="ref-5"></a>n8n Community — "Nod: an open source personal agent with its own computer
   (research preview from n8n Labs)" (Johan). 11 nov 2026, 08:22 UTC.
   [community.n8n.io](https://community.n8n.io/t/nod-an-open-source-personal-agent-with-its-own-computer-research-preview-from-n8n-labs/328026)
   (leído 2026-11-11). Usado para: hora del anuncio en el foro, relación con n8n (draft hasta
   "publish it"), plataformas, proveedores soportados y la cita sobre permisos.
6. <a id="ref-6"></a>Nod Docs — "How we evaluate Nod". Actualizado 10 nov 2026.
   [nod.n8n.io](https://nod.n8n.io/docs/how-it-works/benchmarks/) (leído completo 2026-11-11).
   Usado para: 98% / 678 corridas / 0 acciones inseguras / 0 de 13 inyecciones, LongMemEval-S 93,2%
   y 96,4% en 418 preguntas no vistas, WhisperBench 0/216 con el desglose por modo, fechas de
   medición (17 y 19 de octubre), modelo (GPT-6.1 Sol), límites declarados y la cita sobre cero
   riesgo.
7. <a id="ref-7"></a>Unite.AI — "N8n Releases Open-Source Personal Agent Nod for Mac and Windows"
   (Aiden Cross). 10 nov 2026.
   [unite.ai](https://www.unite.ai/n8n-releases-open-source-personal-agent-nod-for-mac-and-windows/)
   (visto vía búsqueda 2026-11-11; artículo declarado como generado por IA y revisado por su
   equipo). Usado para: límite de un dueño por instalación, ausencia de llamadas, roadmap hosteado,
   umbral de US$5 y alcance de la conexión vía el servicio de conexión (secundario).
8. <a id="ref-8"></a>n8n — página de prensa y blog de la ronda. [n8n.io/press](https://n8n.io/press)
   y [blog.n8n.io/n8n-sap](https://blog.n8n.io/n8n-sap) (leídos 2026-11-11). Usado para: valuación
   de US$5.200 M (mayo 2026, SAP), US$240 M levantados, 1,7 M de builders activos mensuales, más de
   1.400 clientes enterprise, 207.000 estrellas de GitHub y licencia fair-code del core; fecha y
   monto de la Serie C (octubre 2025, US$180 M a US$2.500 M).
9. <a id="ref-9"></a>CNBC — "Meta's Manus launches desktop app to bring its AI agent onto personal
   devices amid OpenClaw craze" (Dylan Butts). 18 mar 2026.
   [cnbc.com](https://www.cnbc.com/2026/03/18/metas-manus-launches-desktop-app-to-bring-its-ai-agent-onto-personal-devices.html)
   (visto vía búsqueda 2026-11-11, solo el fragmento con key points). Usado para: fecha y existencia
   de Manus Desktop "My Computer" y el contexto de la ola OpenClaw (secundario).
10. <a id="ref-10"></a>The Next Web — "Meta's Manus AI agent arrives on your desktop to take on
    OpenClaw". 18 mar 2026.
    [thenextweb.com](https://thenextweb.com/news/meta-manus-my-computer-desktop-ai-agent) (visto vía
    búsqueda 2026-11-11). Usado para: alcance de "My Computer" (archivos locales, apps, tareas
    multi-paso) y el contraste de modelo propietario frente a open source (secundario).
11. <a id="ref-11"></a>Activepieces — "Nod by n8n: What It Is and What's Known (2026)". 11 nov 2026.
    [activepieces.com](https://www.activepieces.com/blog/nod-by-n8n-what-it-is-and-whats-known-2026)
    (visto vía búsqueda 2026-11-11). Se cita solo como ejemplo del problema de cobertura: afirma que
    "la fecha de lanzamiento y el código fuente no están publicados al 2026-11-11", contra el blog
    del 10 y el repo público. No se usó como fuente de hechos.
12. <a id="ref-12"></a>Nod Docs — "Your data and privacy".
    [nod.n8n.io](https://nod.n8n.io/docs/trust/privacy/) (extraído completo 2026-11-11). Usado para:
    datos de uso activados por defecto (pantallas, onboarding, ID de instalación, perfil en PostHog),
    trazas de conversación apagadas por defecto, el ejemplo evento por evento de qué viaja y qué no,
    el scrubber y la frase "pseudonymised, not anonymous".
13. <a id="ref-13"></a>X — búsqueda social, consultas "n8n Nod agent" y "Nod n8n cost token
    expensive", 2026-11-11. Usado para: 2.726.642 impresiones del post de @n8n_io, el hilo de
    @johancutych ("How is this different from everything else out there???"), el muestreo de cuentas
    que repiten el guion y las citas de @salem_sofiene y @JaynitMakwana. Limitación: la API devuelve
    un conjunto ordenado por relevancia, no un censo de la conversación.
14. <a id="ref-14"></a>Product Hunt — "Nod by n8n — Open source personal agent with its own
    computer", lanzamiento del 11 nov 2026 dentro de la ficha `n8n`.
    [producthunt.com](https://www.producthunt.com/products/n8n-io) (extraído 2026-11-11). Usado
    para: séptimo lanzamiento de n8n, "Launching today", 4,8/5 con 78 reseñas previas, 4.000
    seguidores y el copy del lanzamiento.
15. <a id="ref-15"></a>Reddit — r/n8n "Nod: an open source personal agent with its own computer" (41
    upvotes a las 7 h) y r/selfhosted "n8n is back?".
    [reddit.com/r/n8n](https://www.reddit.com/r/n8n/comments/1xtcovu/) y
    [reddit.com/r/selfhosted](https://www.reddit.com/r/selfhosted/comments/1xtfbcd/n8n_is_back/)
    (vistos solo por snippet de buscador, 2026-11-11; Reddit respondió "prove your humanity" a la
    extracción, no se leyeron los comentarios).
16. <a id="ref-16"></a>Búsqueda dirigida, 2026-11-11: `"n8n Labs" Nod agent launch -site:n8n.io
-site:community.n8n.io` y `"Nod" n8n site:news.ycombinator.com OR site:reddit.com`, más
    consultas a TechCrunch/VentureBeat/Verge sin resultados sobre Nod. Usado para: el mapa de
    cobertura efectivo (blog, foro, Reddit, LinkedIn, Product Hunt, daily.dev, scalevise, Instagram)
    y la ausencia de prensa tecnológica mainstream.
17. <a id="ref-17"></a>LinkedIn — Jan Oberhauser, "We created n8n Labs to explore ideas beyond our
    core product…", y post de la cuenta de n8n, ambos del 11 nov 2026.
    [linkedin.com](https://www.linkedin.com/posts/janoberhauser_we-created-n8n-labs-to-explore-ideas-beyond-activity-7526195565752246272-LqWI)
    (visto por snippet de buscador; la extracción respondió 403). Usado para: la voz del CEO sobre
    n8n Labs y la existencia del anuncio de la cuenta corporativa (secundario).
