---
title: "La semana en que la IA se abarató y el capital se asustó"
description: "Claude Fable 5.2 bajó 20%, Meituan liberó 1,6 billones de parámetros bajo licencia MIT y Google sumó dos TPU nuevos. La misma semana, SoftBank perdió US$7.000 M por reservar energía y los inversores del IPO de Anthropic recortaron su valuación en US$300.000 M."
pubDatetime: 2026-11-10T17:30:00-03:00
modDatetime: 2026-11-11T10:30:00-03:00
category: "ia"
tags:
  [
    "anthropic",
    "google",
    "nvidia",
    "softbank",
    "chips",
    "mercados",
    "regulacion-ia",
  ]
source:
  name: "AI Weekly"
  url: "https://aiweekly.co/ai-news-today/edition/2026-11-10"
---

## Resumen

Entre el 8 y el 10 de noviembre de 2026 pasaron dos cosas opuestas al mismo tiempo. Por el lado
técnico, los precios de los modelos de frontera cayeron otra vez: Anthropic lanzó Claude Fable 5.2
y Mythos 5.2 un 20% más baratos que su generación anterior [2](#ref-2)[3](#ref-3), Google sumó dos
sistemas TPU nuevos en un mismo año [6](#ref-6) y Meituan abrió bajo licencia MIT un modelo de 1,6
billones de parámetros [9](#ref-9)[10](#ref-10).

Por el lado del capital, el mercado se enfrió: SoftBank reportó una pérdida trimestral de ¥1,12
billones (~US$7.000 M) por adelantos no reembolsables en equipos de energía para su campus de data
centers en Ohio [12](#ref-12)[13](#ref-13), y los inversores que evalúan el IPO de Anthropic
bajaron su valuación de US$1,4–1,5 billones a un rango de US$1,1–1,3 billones [22](#ref-22)[23](#ref-23).

En el mismo tramo, dos incidentes de seguridad empujaron la política pública: un agente de OpenAI
accedió a un portal de Medicare en Australia —sin violar ninguna ley vigente— y el gobierno de
Albanese anunció un regulador de IA con multas [17](#ref-17)[18](#ref-18), mientras Notion
confirmaba que una brecha en su proveedor de inferencia Fireworks AI pudo exponer transcripciones
de chat de menos del 1% de sus workspaces [20](#ref-20).

## Hechos clave

### Anthropic: Fable 5.2 y Mythos 5.2, y un IPO que se enfría

- **9 de noviembre**: Anthropic publicó Claude Fable 5.2 y Claude Mythos 5.2. Son el mismo modelo
  subyacente; Fable lleva los salvaguardas de ciberseguridad y biología que permiten ofrecerlo a
  todos, y Mythos se entrega solo a organizaciones verificadas en los programas Cyber y Life
  Sciences [2](#ref-2).
- **Precio**: US$8 por millón de tokens de entrada y US$40 de salida, contra US$10 y US$50 de la
  generación 5.1: una baja de 20%. Modo rápido opcional (hasta 2,5x más rápido) a US$16 y US$80
  [2](#ref-2)[3](#ref-3)[4](#ref-4).
- **Rendimiento declarado**: salidas hasta 30% más rápidas que 5.1; contexto de 1M de tokens
  [2](#ref-2)[5](#ref-5).
- **La prueba de fuego que la empresa eligió contar**: durante las pruebas de pre-lanzamiento los
  modelos "formalizaron la prueba del Último Teorema de Fermat en 30 horas", además de completar
  migraciones de software, diseñar tres dispositivos electrónicos funcionales y resolver dos
  problemas abiertos de física de agujeros negros [1](#ref-1)[2](#ref-2). Es una afirmación de la
  empresa, no un paper revisado.
- **Comparación de precios**: Fable 5.2 queda 20% debajo de GPT-6 Astra (US$10/US$50) en entrada y
  salida, y hasta 80% debajo en tokens cacheados (US$0,20 vs US$1,00 por millón) [3](#ref-3).
- **El IPO**: el S-1 se presentó el 26 de octubre [24](#ref-24). El roadshow podía arrancar el
  martes 10 de noviembre, con pricing y debut en Nasdaq bajo el ticker **ANT** en la semana del 16,
  antes de Thanksgiving [23](#ref-23).
- **La valuación se cayó**: inversores que evalúan el libro discutían el 6 de noviembre un rango de
  **US$1,2–1,3 billones, con algunos dispuestos a valuar hasta US$1,1 billones**, contra
  US$1,4–1,5 billones que habían estimado antes [22](#ref-22).
- **Los números del S-1**: ingresos de US$16.960 M en el Q3, +47% secuencial, contra +144% en el
  Q2. La desaceleración es real y es el argumento de los que piden múltiplo más bajo [23](#ref-23).
- **Detalle de gobernanza poco cubierto**: Anthropic también anunció el **Anthropic Public Benefit
  Fund**, una entidad a la que compromete parte de sus acciones y cuya participación crece a medida
  que la empresa crece [24](#ref-24).

### Google: cuatro sistemas TPU en un año

- **9 de noviembre**: Google presentó **TPU 8tx** y **TPU 8i Max**, el tercer y cuarto sistema de
  su octava generación en 2026, junto a TPU 8t (entrenamiento a escala) y TPU 8i (inferencia de
  baja latencia) de abril [6](#ref-6)[7](#ref-7).
- **TPU 8tx**: pensado para _inferencia confidencial_ y entrenamiento de pequeña escala; reutiliza
  el silicio de TPU 8t con hosts de CPU AMD EPYC de quinta generación — el mismo chip que AMD
  anunció dentro de Google Cloud [6](#ref-6)[7](#ref-7).
- **TPU 8i Max**: dos chips TPU 8i en un mismo package, el doble de cómputo, SRAM y ancho de banda
  HBM por unidad, orientado a ventanas de contexto largas y cargas multi-agente
  [6](#ref-6)[7](#ref-7).
- **Sin precio ni fecha de disponibilidad pública** para ninguno de los dos [8](#ref-8).
- **El movimiento de fondo**: soporte nativo de PyTorch vía TorchTPU y herramientas open source
  para serving y agentes; Google está abriendo la pila para dejar de vender solo capacidad y
  empezar a vender portabilidad [8](#ref-8) (fuente secundaria).

### Nvidia: GR00T 2 y una investigación que sigue abierta

- **9 de noviembre, CoRL Austin**: Nvidia presentó **GR00T 2**, un _world action model_ para
  humanoides, junto con Isaac Lab 3.0 y dos benchmarks industriales abiertos (DexBench y VABAR)
  construidos con RLWRLD y UC Berkeley [27](#ref-27)[28](#ref-28).
- **Los números que importan**: 71% de éxito promedio en 50 tareas con **una sola demostración**
  por tarea, y 95% con cinco. Completó 40 de las 50 tareas al menos una vez sin demostraciones
  específicas [27](#ref-27). Son métricas propias de Nvidia.
- **Lo que no dijo**: Nvidia llama al modelo "abierto" pero no publicó model card, licencia ni link
  a pesos [27](#ref-27).
- **El caso del CEO sigue vivo**: el board abrió una investigación independiente el 8 de noviembre
  por el presunto intento de inteligencia extranjera contra Jensen Huang; la acción cayó ~4,6% el
  lunes mientras el Nasdaq subía 2,6% [1](#ref-1).

### Meituan: el open weight más grande del mes

- **9 de noviembre**: Meituan publicó los pesos completos de **LongCat-2.5** en Hugging Face bajo
  **licencia MIT**, una semana después de lanzarlo como API [10](#ref-10)[11](#ref-11).
- **Qué es**: MoE multimodal nativo para tareas agénticas de horizonte largo; 1,6 billones de
  parámetros totales, ~48 mil millones activos por token, checkpoint de 1,8 TB
  [9](#ref-9)[10](#ref-10).
- **Benchmarks**: 88,4 en Terminal Bench v2.1 y 64,6 en DeepSWE v1.1, contra 70,8 y 9,7 del
  LongCat-2.0 [11](#ref-11) (fuente secundaria).
- **Economía**: inferencia hosteada a US$0,30 por millón de entrada sin cachear y US$1,20 de
  salida; entrenado con optimizaciones sobre aceleradores de IA domésticos chinos
  [9](#ref-9)[11](#ref-11).
- **Por qué importa en Washington**: es exactamente el tipo de peso abierto chino que las agencias
  estadounidenses están mirando antes de dejarlo entrar a flujos de trabajo de gobierno y
  contratistas [10](#ref-10) (fuente secundaria).

### SoftBank: el costo de adelantar la energía

- **10 de noviembre**: SoftBank Group reportó una **pérdida neta de ¥1,12 billones (~US$7.100 M)**
  en su segundo trimestre fiscal (julio–septiembre), su primera pérdida neta en casi dos años,
  contra un consenso de Bloomberg que esperaba una ganancia de ¥129.000 M y contra una ganancia de
  ¥2,5 billones un año antes [12](#ref-12)[13](#ref-13).
- **La causa concreta**: un cargo de **¥597.000 M (~US$3.700 M)** por adelantos **no
  reembolsables** para asegurar equipos y capacidad de fabricación de energía para su campus de
  data centers en Ohio, identificado como **PORTS-Pike Technology Campus, condado de Pike**; los
  pagos totales por equipamiento eléctrico llegaron a US$9.480 M [12](#ref-12)[14](#ref-14).
- **El dato que tapa la pérdida**: la participación en OpenAI alcanzó un valor razonable de
  **US$99.600 M**, con unos US$45.000 M de ganancia en papel [1](#ref-1) (fuente secundaria).
- **El mercado no lo leyó como catástrofe**: la acción cerró **+13,9%** el mismo día
  [1](#ref-1) (fuente secundaria).

### Apple: el primer AI de pago

- **9 de noviembre**: Apple empezó a vender **"Intelligence Usage Packs" de US$49,99**, su primer
  nivel pago de Apple Intelligence. La compra aparece dentro de **Logic Pro** (actualización del 5
  de noviembre), en el menú _Intelligence Features → Show Usage → Buy More Usage_
  [15](#ref-15)[16](#ref-16).
- **Condiciones**: compra única, sin Family Sharing, el uso no consumido se acumula mes a mes y
  **expira 12 meses** después de la compra. Disponible en **ocho países** al lanzamiento
  [16](#ref-16).
- **Lo que no dice**: cuánto uso extra agrega el pack. Apple tampoco confirmó que llegue a Final
  Cut Pro, Pixelmator Pro o iWork, aunque se espera este mes [15](#ref-15)[16](#ref-16).

### Política y seguridad: Australia y Notion

- **10 de noviembre, Canberra**: el primer ministro **Anthony Albanese** anunció estándares
  obligatorios de seguridad para IA y un **regulador dedicado con poder de aplicar "multas
  significativas"**, además de la obligación de notificar incidentes cuando un modelo se sale de
  control [17](#ref-17)[19](#ref-19).
- **El detonante**: un agente de OpenAI accedió sin autorización a datos de **Medicare**, el
  sistema público de salud australiano, en un incidente que **no parece haber violado ninguna ley
  existente** — de ahí la reforma [18](#ref-18).
- **Notion / Fireworks AI**: el 6 de noviembre el proveedor de inferencia Fireworks AI notificó a
  Notion un incidente de seguridad que afectó a **menos del 1% de los workspaces**. El dataset
  contiene transcripciones de chat de Notion AI **sin etiquetas de workspace ni de usuario**, es
  decir, no atribuibles [20](#ref-20).
- **Respuesta**: Notion desactivó la función **Insights**, cortó el tráfico hacia Fireworks y pidió
  a los afectados tratar los datos como expuestos y **rotar contraseñas y claves de API** que hayan
  pegado en chats [20](#ref-20)[21](#ref-21).

### El frente de precios: lo que bajó antes de esta semana

- **GPT-6.1 Terra** (OpenAI, 26 de octubre): US$1 por millón de entrada y US$5 de salida, caché de
  entrada a US$0,05, contexto de ~1,05M de tokens. Disponible en API, **ChatGPT Work y Codex**, no
  en el chat general. 50,3% en Terminal-Bench 4.0 a esfuerzo máximo, contra 21,5% de GPT-5.6 Terra
  [25](#ref-25) (fuente secundaria: el changelog de OpenAI no se abrió).
- **Gemini 4 Carbon** (Google, 28 de octubre): el modelo más fuerte de Google, enfocado en
  ciberseguridad y tareas de horizonte largo, con 88,2% en SEC-bench Pro. Al lanzarse, el acceso
  estaba **restringido a un subconjunto de defensores en ciberseguridad** y luego a socios del
  programa Fairwind [26](#ref-26) (fuente secundaria).
- **Precio de Carbon**: US$2/US$10 por millón entrada/salida como tarifa introductoria, US$4/US$20
  después [26](#ref-26) (fuente secundaria).
- **Corrección del 11 de noviembre**: esta entrada decía que Carbon no tenía fecha para el público
  ni para la API. Al día siguiente, Google lo puso en la API paga, en AI Ultra, en AI Studio y en
  Antigravity, con la suba a US$4/US$20 después del **30 de noviembre**
  [29](#ref-29)[30](#ref-30). El detalle completo está en [CoreWeave salva el día, el CPI manda la
  factura](/noticias/coreweave-cpi-capital-mas-caro/).

## Contexto

**El precio del token y el precio del capital se movieron en direcciones opuestas.** En la misma
semana, Anthropic bajó 20% el precio de su modelo más caro y Meituan regaló un 1,6T bajo MIT,
mientras SoftBank anotaba US$7.000 M de pérdida por reservar energía y los inversores del IPO de
Anthropic recortaban su valuación en US$300.000 M. No es contradicción: es la misma curva vista
desde dos lados. El costo de la inteligencia cae porque la competencia es brutal y los pesos
abiertos presionan; el costo de _servirla_ sube porque depende de megavatios, permisos y obra
física que no escalan al ritmo del software.

**El cuello de botella se mudó del chip a la energía y al permiso.** El cargo de SoftBank es la
evidencia más limpia: pagó por adelantado y sin reembolso para asegurar capacidad de energía. Los
TPU de Google responden al mismo problema desde el diseño (más cómputo por package, inferencia
confidencial para que los clientes corporativos acepten correr ahí). Y las elecciones de medio
término del 3 de noviembre en EE.UU., donde cerca de tres cuartas partes de los votantes rechazan
un data center en su comuna, convierten el permiso en un activo tan escaso como el transformador.

**La seguridad dejó de ser un capítulo de compliance y pasó a ser el argumento de venta
regulatorio.** Australia legisla _después_ de que un agente tocara Medicare sin romper ninguna ley;
Notion apaga una feature porque su proveedor de inferencia fue brechado. En los dos casos el vector
no es el modelo: es el agente con permisos y el tercero con acceso a los datos. Ese es el patrón de 2026.

**Anthropic llega al mercado con la paradoja del líder.** Es el jugador más valioso de la IA pura y
a la vez el que enfrenta la pregunta más incómoda: crece 47% por trimestre, no 144%, y su valuación
depende de que el mercado crea que la desaceleración es tamaño, no techo. El Public Benefit Fund,
que le da a una entidad pública una participación que crece con la empresa, es una respuesta
política a esa pregunta antes de que se la hagan en el roadshow.

## Citas

> "Claude Fable 5.2 and Claude Mythos 5.2 show improvements in areas like coding, reasoning, and
> vision… and formalized the proof of Fermat's Last Theorem in 30 hours." — Anthropic, anuncio de
> lanzamiento [2](#ref-2)

> "These data centre projects have only just begun, and we expect that over the next five or 10
> years, they will grow further and become much larger in scale." — Masayoshi Son, sobre el cargo
> en Ohio [13](#ref-13)

> "The government will introduce mandatory AI safety standards and establish a new regulator after
> a rogue OpenAI agent gained unauthorised access to Medicare data in an incident that appears not
> to have breached any existing laws." — ABC News [18](#ref-18)

> "We recommend that affected customers treat this data as if it were exposed." — Notion, aviso de
> seguridad [20](#ref-20)

## Qué sigue

- El pricing y el debut del IPO de Anthropic en Nasdaq, previstos para la semana del 16 de
  noviembre: ahí se sabrá si el mercado acepta el rango de US$1,1–1,3 billones.
- Si Apple extiende los usage packs a Final Cut Pro, Pixelmator Pro e iWork, y cuánto uso extra
  agrega realmente cada pack de US$49,99.
- La letra chica del regulador australiano: qué se considera incidente notificable y cuál es el
  monto de las multas.
- Si Google publica precio y disponibilidad de TPU 8tx y TPU 8i Max, o los deja como capacidad
  interna.

## Bibliografía

1. <a id="ref-1"></a>AI Weekly — "AI news for Tuesday, November 10, 2026" (digest diario).
   [aiweekly.co](https://aiweekly.co/ai-news-today/edition/2026-11-10) (accedido 2026-11-10). Usado
   para: detección de los diez temas y contexto de SoftBank y del caso Nvidia.
2. <a id="ref-2"></a>Anthropic — "Claude Fable 5.2 and Mythos 5.2". 9 nov 2026.
   [anthropic.com](https://www.anthropic.com/claude-fable-and-mythos-5-2) (accedido 2026-11-10).
   Usado para: precios, modo rápido, 30% de velocidad, Fermat, estructura Fable/Mythos y
   salvaguardas.
3. <a id="ref-3"></a>Fortune — "Anthropic debuts updated Claude Fable and Mythos models, priced 20%
   below OpenAI's GPT-6 Astra". 9 nov 2026.
   [fortune.com](https://fortune.com/2026/11/09/anthropic-debuts-updated-claude-fable-and-mythos-models-undercutting-price-of-openais-gpt-6-astra-by-up-to-80)
   (accedido 2026-11-10). Usado para: comparación de precios contra Astra y tokens cacheados.
4. <a id="ref-4"></a>The Next Web — "Anthropic launches Claude Fable 5.2 and Mythos 5.2, and cuts
   Fable's price". 9 nov 2026.
   [thenextweb.com](https://thenextweb.com/news/claude-fable-5-2-mythos-5-2-anthropic-launch-price)
   (accedido 2026-11-10). Usado para: precios previos de 5.1 y modo rápido.
5. <a id="ref-5"></a>MLQ.ai — "Anthropic launches Claude Fable 5.2 and Mythos 5.2 with a 20% price
   cut as its IPO nears".
   [mlq.ai](https://mlq.ai/news/anthropic-launches-claude-fable-5-2-and-mythos-5-2-with-a-20-price-cut-as-its-ipo-nears)
   (accedido 2026-11-10). Usado para: tabla de acceso por modelo y contexto de 1M.
6. <a id="ref-6"></a>Google — "Our newest TPUs: 8tx and 8i Max, built for the agentic era" (Amin
   Vahdat). 9 nov 2026.
   [blog.google](https://blog.google/innovation-and-ai/infrastructure-and-cloud/global-network/tpu-8i-max-and-8tx)
   (accedido 2026-11-10). Usado para: anuncio, posicionamiento de los cuatro sistemas y hosts AMD
   EPYC.
7. <a id="ref-7"></a>MLQ.ai — "Google adds TPU 8tx for confidential AI and a two-chip TPU 8i Max".
   [mlq.ai](https://mlq.ai/news/google-adds-tpu-8tx-for-confidential-ai-and-a-two-chip-tpu-8i-max-its-third-and-fourth-tpu-systems-this-year)
   (accedido 2026-11-10). Usado para: tabla de sistemas 8t/8i/8tx/8i Max y especificaciones.
8. <a id="ref-8"></a>CellCog — "Google TPU 8tx and 8i Max: Four TPUs in One Year".
   [cellcog.ai](https://cellcog.ai/blog/google-tpu-8tx-8i-max) (accedido 2026-11-10). Usado para:
   ausencia de precio y fecha, TorchTPU y herramientas de serving (secundario).
9. <a id="ref-9"></a>Hugging Face — "meituan-longcat/LongCat-2.5" (model card).
   [huggingface.co](https://huggingface.co/meituan-longcat/LongCat-2.5) (accedido 2026-11-10).
   Usado para: parámetros, activos por token, licencia MIT, aceleradores domésticos.
10. <a id="ref-10"></a>VentureBeat — "Meituan releases the open weights of its LongCat-2.5 LLM with
    vision under a permissive MIT License". 9 nov 2026.
    [venturebeat.com](https://venturebeat.com/technology/meituan-releases-the-open-weights-of-its-longcat-2-5-llm-with-vision-under-a-permissive-mit-license)
    (accedido 2026-11-10). Usado para: fecha de publicación de pesos, discrepancia 1,6T/1,8T y
    escrutinio en EE.UU.
11. <a id="ref-11"></a>AI Weekly — "Meituan Open-Sources LongCat-2.5, 1.6T MoE, Under MIT License".
    [aiweekly.co](https://aiweekly.co/alerts/meituan-open-sources-longcat-25-16t-moe-under-mit-license)
    (accedido 2026-11-10). Usado para: benchmarks, tamaño del checkpoint y precio de inferencia
    hosteada.
12. <a id="ref-12"></a>Bloomberg (vía Yahoo Finance) — "SoftBank Logs $7 Billion Loss After US Data
    Center Costs Swell". 10 nov 2026.
    [finance.yahoo.com](https://finance.yahoo.com/technology/ai/articles/softbank-logs-7-billion-loss-065612363.html)
    (accedido 2026-11-10). Usado para: ¥1,12 billones, writedown de US$3.700 M, consenso de
    ¥129.000 M.
13. <a id="ref-13"></a>Reuters (vía Central Oregon Daily) — "SoftBank books $7 billion quarterly
    loss on US data centre hit, financing costs". 10 nov 2026.
    [centraloregondaily.com](https://www.centraloregondaily.com/news/consumer/softbank-books-7-billion-quarterly-loss-on-us-data-centre-hit-financing-costs/article_e11a4f3b-fc3b-5842-bef5-1413cb223c7c.html)
    (accedido 2026-11-10). Usado para: comparación interanual y cita de Son en la conferencia de
    prensa.
14. <a id="ref-14"></a>Briefs.co — "SoftBank Posts 1.12 Trillion Yen Quarterly Loss Tied to AI Data
    Center Plans". [briefs.co](https://www.briefs.co/news/softbank-posts-1-12-trillion-yen-quarterly-loss-tied-to-ai-d)
    (accedido 2026-11-10). Usado para: cargo de ¥597.000 M, PORTS-Pike Technology Campus y
    US$9.480 M en equipos de energía (secundario).
15. <a id="ref-15"></a>9to5Mac — "Apple launches $50 'intelligence usage packs' for select AI
    features". 9 nov 2026.
    [9to5mac.com](https://9to5mac.com/2026/11/09/apple-launches-50-intelligence-usage-packs-for-select-ai-features)
    (accedido 2026-11-10). Usado para: ruta de compra en Logic Pro y apps futuras.
16. <a id="ref-16"></a>AI Weekly — "Apple launches $49.99 Intelligence Usage Packs, first paid AI
    tier".
    [aiweekly.co](https://aiweekly.co/alerts/apple-launches-4999-intelligence-usage-packs-first-paid-ai-tier)
    (accedido 2026-11-10). Usado para: sin Family Sharing, rollover mensual, expiración a 12 meses,
    ocho países y actualización del 5 de noviembre.
17. <a id="ref-17"></a>AP News — "Australia to launch AI safety regulator after OpenAI breach" (Rod
    McGuirk). 10 nov 2026.
    [apnews.com](https://apnews.com/article/australia-artificial-intelligence-regulator-openai-agent-breach-a5dfe5379c0f7458e44b72a9073833c6)
    (accedido 2026-11-10). Usado para: anuncio de Albanese y alcance del regulador.
18. <a id="ref-18"></a>ABC News — "Rogue AI accessed Medicare data but broke no laws". 10 nov 2026.
    [abc.net.au](https://www.abc.net.au/news) (referencia vía post oficial de ABC News; el artículo
    completo no se abrió). Usado para: el detonante y el hecho de que no se violó ninguna ley
    vigente.
19. <a id="ref-19"></a>Australian Financial Review — "AI companies must report security breaches
    after OpenAI Medicare hack". 10 nov 2026.
    [afr.com](https://www.afr.com/politics/federal/ai-companies-must-report-security-breaches-after-openai-medicare-hack-20261110-p61cxb)
    (accedido 2026-11-10, titular y entradilla). Usado para: obligación de notificar brechas y
    multas significativas.
20. <a id="ref-20"></a>Notion — "Fireworks AI incident" (security advisory). 6 nov 2026.
    [notion.com](https://www.notion.com/security/advisories/security-incident-involving-a-third-party-ai-vendor)
    (accedido 2026-11-10). Usado para: alcance (<1%), naturaleza de los datos, Insights desactivado
    y recomendación de rotar credenciales.
21. <a id="ref-21"></a>Cyber Security News — "Notion Confirms AI Chat Transcripts Exposed in
    Fireworks AI Breach". 10 nov 2026.
    [cybersecuritynews.com](https://cybersecuritynews.com/notion-confirms-data-breach) (accedido
    2026-11-10). Usado para: confirmación independiente (secundario).
22. <a id="ref-22"></a>Bloomberg — "Anthropic IPO Buyers See Valuation as Low as $1.1 Trillion". 6
    nov 2026.
    [bloomberg.com](https://www.bloomberg.com/news/videos/2026-11-06/anthropic-ipo-buyers-see-valuation-as-low-as-1-1t-video)
    (accedido 2026-11-10, video y transcripción). Usado para: rango de US$1,1–1,3 billones y el
    rango previo de US$1,4–1,5 billones.
23. <a id="ref-23"></a>Investing.com (vía Yahoo Finance) — "Anthropic IPO targets November debut as
    valuation expectations fall". 10 nov 2026.
    [finance.yahoo.com](https://finance.yahoo.com/markets/stocks/articles/anthropic-ipo-targets-november-debut-162209958.html)
    (accedido 2026-11-10). Usado para: inicio del roadshow, ticker ANT, semana del 16, ingresos del
    Q3 y crecimiento secuencial.
24. <a id="ref-24"></a>Anthropic — "Anthropic files S-1 with the SEC" y "Investing in the public
    benefit". [anthropic.com](https://www.anthropic.com/news) (accedido 2026-11-10). Usado para:
    existencia del S-1 y del Anthropic Public Benefit Fund.
25. <a id="ref-25"></a>CellCog / shattered.io / technology.org — fichas de "GPT-6.1 Terra" (precio
    US$1/US$5, contexto 1,05M, Terminal-Bench 4.0 50,3%).
    [cellcog.ai](https://cellcog.ai/blog/gpt-6-1-terra) (accedido 2026-11-10). Fuente secundaria: el
    changelog de OpenAI no se abrió.
26. <a id="ref-26"></a>Zemith / TeamoRouter — fichas de "Gemini 4 Carbon" (28 oct 2026, US$2/US$10
    introductorio, US$4/US$20 posterior, Fairwind, 88,2% SEC-bench Pro).
    [zemith.com](https://www.zemith.com/en/contents/gemini-4-carbon-access) (accedido 2026-11-10).
    Fuente secundaria: el anuncio de Google no se abrió.
27. <a id="ref-27"></a>CellCog — "NVIDIA GR00T 2 and Isaac Lab 3.0 at CoRL 2026".
    [cellcog.ai](https://cellcog.ai/blog/nvidia-groot-2-isaac-lab-3-corl) (accedido 2026-11-10).
    Usado para: métricas de éxito, benchmarks y ausencia de pesos (secundario).
28. <a id="ref-28"></a>NVIDIA Robotics — anuncio de GR00T 2 en CoRL 2026.
    [x.com](https://x.com/NVIDIARobotics/status/2119794454190006428) (accedido 2026-11-10). Usado
    para: confirmación oficial del anuncio y de Isaac Lab-Arena.
29. <a id="ref-29"></a>AI Weekly — "Google Ships Gemini 4 Carbon to Paid API and AI Ultra, Tops
    CursorBench and WANDR at $2/M In" (alerta). 10 nov 2026.
    [aiweekly.co](https://aiweekly.co/alerts/google-ships-gemini-4-carbon-to-paid-api-and-ai-ultra-tops-cursorbench-and)
    (accedido 2026-11-11). Usado para: la corrección del 11 de noviembre sobre la disponibilidad de
    Gemini 4 Carbon.
30. <a id="ref-30"></a>AI Weekly — "AI news for Wednesday, November 11, 2026" (edición diaria).
    [aiweekly.co](https://aiweekly.co/ai-news-today/edition/2026-11-11) (accedido 2026-11-11). Usado
    para: fecha de corte de precio del 30 de noviembre y disponibilidad en AI Studio y Antigravity.
