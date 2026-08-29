---
pubDatetime: 2024-06-30T12:00:00-04:00
title: "Planilla de gastos financieros personales - Google Sheets"
description: "La plantilla con la que llevo mis gastos personales desde 2021: flujo de caja, comparación de meses y proyección mensual, con reglas para mantenerla sincronizada y sin romperse."
tags: [herramientas, finanzas]
timezone: "America/Santiago"
---

# Una forma de llevar las finanzas personales
[https://docs.google.com/spreadsheets/d/1N_bAWSQNHbeZNvRvJ86KEjolU8YndTmzphbVjjgLXco/edit?usp=sharing](https://docs.google.com/spreadsheets/d/1N_bAWSQNHbeZNvRvJ86KEjolU8YndTmzphbVjjgLXco/edit?usp=sharing)

[Descargar plantilla Excel — Presupuestos personales](/files/planilla-de-gastos-financieros-personales-google-sheets/presupuestos-personales.xlsx)

Bueno como proyecto es poco pero el saber hacer modelos financieros es escaso al menos el contenido en español, no obstante, esta fue como una práctica básica y para llevar mis gastos personales.
Llevo usando esta plantilla alrededor desde 2021 y si bien eh realizado muchas modificaciones con el tiempo llegue a al conclusión que lo simple es mejor.
También que esta plantilla usualmente la uso en google sheets por un tema de comodidad y que sus formulas están pensadas para este uso aunque si se sigue la misma lógica en las formulas se puede usar en excel sin ningún problema.
# Retos y desafíos
Uno de los retos mas importantes fue el poder hacer que se actualizará de forma constante y que cuando realice alguna modificación sea retroactivo y sincronizable entre las plantillas, por lo que deje ciertas reglas al momento de usarla:
- Si se realiza una modificación debe hacerse entre todas las plantillas, esta con el objetivo de hacer que las referencias y las formulas se mantengan y no se rompan y den valores o errores.
- Las categorías se dividen entre ingresos, gastos y fondos ya que hay formulas condicionales que requieran que comiencen con esta nomenclatura.
- Si se quiere cambiar un nombre de alguna categoría de ingresos, gastos o fondos se puede hacer desde la REF 3 esto cambiará automáticamente los condicionales de (NOMBRE DE CUENTA) y en la tabla de resumen de la REF 1.
- Las formulas están consideradas para que se actualicen de forma automatica segun el mes en el que se realiza, esto no ayuda a entender el flujo de caja pero si tener una proyección de la caja que tendrás para usarlas en otros asuntos.

# Imágenes de referencia
Las imagenes adjuntas son valores aleatorios pero sirve para entender el uso de la plantilla.
### Ref 1 - Comparación de meses
![Ref 1 - Comparación de meses](/images/planilla-de-gastos-financieros-personales-google-sheets/untitled-4.png)
NOTA: Si bien en la columna del 05-2024 esta con valores de error esto es porque está considerado al dia de publicación de este post pero tiene formulas automáticas donde tienen formulas de dia =HOY() por lo que siempre mostrará el mes actual, el mes anterior y del próximo mes para ver una comparación.
### Ref 2 - Registros de flujo
![Ref 2 - Registros de flujo](/images/planilla-de-gastos-financieros-personales-google-sheets/untitled-5.png)
Los color verde son una recomendación para saber si ay eh realizado ese movimiento de dinero. Esto es de manera manual aunque no descarto hacer algo en el futuro para hacerlo automatico. Ya eh realizado cambios usando funciones condicionales usando una lista validada pero no me parecía tan intuitivo como hacerlo de manera manual.
### Ref 3 - Flujo mensual proyectado
![Ref 3 - Flujo mensual proyectado](/images/planilla-de-gastos-financieros-personales-google-sheets/untitled-6.png)
