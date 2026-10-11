---
pubDatetime: 2024-06-30T12:00:00-04:00
title: "Planilla de gastos financieros personales - Google Sheets"
description: "La plantilla con la que llevo mis gastos personales desde 2021: flujo de caja, comparación de meses y proyección mensual, con reglas para mantenerla sincronizada y sin romperse."
tags: [herramientas, finanzas]
timezone: "America/Santiago"
---

## Una forma de llevar las finanzas personales

[https://docs.google.com/spreadsheets/d/1N_bAWSQNHbeZNvRvJ86KEjolU8YndTmzphbVjjgLXco/edit?usp=sharing](https://docs.google.com/spreadsheets/d/1N_bAWSQNHbeZNvRvJ86KEjolU8YndTmzphbVjjgLXco/edit?usp=sharing)

[Descargar plantilla Excel — Presupuestos personales](/files/planilla-de-gastos-financieros-personales-google-sheets/presupuestos-personales.xlsx)

Bueno, como proyecto es poco, pero el saber hacer modelos financieros es escaso, al menos el contenido en español. No obstante, esta fue como una práctica básica para llevar mis gastos personales.

Llevo usando esta plantilla desde 2021 y, si bien he realizado muchas modificaciones con el tiempo, llegué a la conclusión de que lo simple es mejor.

También, esta plantilla usualmente la uso en Google Sheets por un tema de comodidad, y sus fórmulas están pensadas para este uso, aunque si se sigue la misma lógica en las fórmulas se puede usar en Excel sin ningún problema.

## Retos y desafíos

Uno de los retos más importantes fue el poder hacer que se actualizara de forma constante y que, cuando se realice alguna modificación, sea retroactiva y sincronizable entre las plantillas, por lo que dejé ciertas reglas al momento de usarla:

- Si se realiza una modificación, debe hacerse en todas las plantillas. Esto, con el objetivo de que las referencias y las fórmulas se mantengan, no se rompan y no den valores o errores.
- Las categorías se dividen entre ingresos, gastos y fondos, ya que hay fórmulas condicionales que requieren que comiencen con esta nomenclatura.
- Si se quiere cambiar el nombre de alguna categoría de ingresos, gastos o fondos, se puede hacer desde la REF 3; esto cambiará automáticamente los condicionales de (NOMBRE DE CUENTA) y en la tabla de resumen de la REF 1.
- Las fórmulas están consideradas para que se actualicen de forma automática según el mes en el que se realiza. Esto no ayuda a entender el flujo de caja, pero sí a tener una proyección de la caja que tendrás para usarla en otros asuntos.

## Imágenes de referencia

Las imágenes adjuntas son valores aleatorios, pero sirven para entender el uso de la plantilla.

### Ref 1 — Comparación de meses

![Ref 1 - Comparación de meses](/images/planilla-de-gastos-financieros-personales-google-sheets/untitled-4.png)

NOTA: Si bien en la columna del 05-2024 está con valores de error, esto es porque está considerado al día de publicación de este post, pero tiene fórmulas automáticas con día =HOY(), por lo que siempre mostrará el mes actual, el mes anterior y el próximo mes para ver una comparación.

### Ref 2 — Registros de flujo

![Ref 2 - Registros de flujo](/images/planilla-de-gastos-financieros-personales-google-sheets/untitled-5.png)

Los colores verdes son una recomendación para saber si ya he realizado ese movimiento de dinero. Esto es de manera manual, aunque no descarto hacer algo en el futuro para hacerlo automático. Ya he realizado cambios usando funciones condicionales con una lista validada, pero no me parecía tan intuitivo como hacerlo de manera manual.

### Ref 3 — Flujo mensual proyectado

![Ref 3 - Flujo mensual proyectado](/images/planilla-de-gastos-financieros-personales-google-sheets/untitled-6.png)
