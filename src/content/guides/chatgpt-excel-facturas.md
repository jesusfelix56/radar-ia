---
title: Cómo usar ChatGPT para limpiar una hoja de facturas en Excel
description: Sube el CSV, pide la limpieza en pasos auditables y baja el archivo. El truco está en no pedirle "arregla esto" a secas.
category: Tutorial
tags:
  - chatgpt
  - excel
  - autonomia
relatedTools:
  - chatgpt
  - claude
amazonPicks:
  - search: curso excel avanzado libro
    title: Manual de Excel
    note: ChatGPT te escribe la fórmula. Tú tienes que saber si un BUSCARX es lo que pediste o un apaño.
    price: 28
featured: false
pubDate: 2026-08-16
---

El análisis de datos de ChatGPT (el que ejecuta Python sobre tu archivo) es la función que más gente tiene pagada y menos usa. Esta guía cubre el caso más común de un autónomo: un Excel de facturas emitidas con fechas mezcladas, IVs mal puestos y clientes duplicados.

## Qué archivo preparar

Exporta a CSV o XLSX. Quita las filas de títulos decorativos ("FACTURACIÓN 2026") **antes** de subirlo. ChatGPT se pierde si la fila 1 no son cabeceras.

Nombres de columna claros: `fecha`, `cliente`, `base`, `iva`, `total`, `pagada`. Si se llaman `Campo1`, el modelo adivina y se equivoca.

## El prompt que no falla

Sube el archivo y pega esto:

```
Eres analista. No reescribas el archivo a ciegas.

1. Dime qué columnas has detectado y 5 filas de ejemplo.
2. Lista problemas: fechas en varios formatos, nulos, duplicados, IVA que no cuadra con base×tipo, totales que no suman.
3. Propón reglas de limpieza (una frase cada una) y espera a que yo diga "adelante".
4. Cuando limpies, dame:
   - el archivo resultante
   - el código Python que has usado
   - un recuento: filas de entrada, filas de salida, filas descartadas y por qué
5. No borres filas dudosas: muévelas a una hoja "revision".
```

El paso 3 es el que cambia el resultado. Si saltas a "límpialo", mezcla criterios.

## Qué comprobar en el archivo de salida

- Suma de `total` antes y después. Si cambia más de lo que explican las filas descartadas, hay un bug.
- Fechas: pide `datetime` ISO (`2026-03-04`). Excel en español te las volverá a pintar como 4/3/26; eso es formato, no dato.
- IVA: en España 21 / 10 / 4. Si ChatGPT "unifica" a 21, está mintiendo.

## Si el archivo pesa más de 20 MB

Pártalo por año. El análisis de datos se atasca o recorta. O usa Claude con el mismo prompt sobre un CSV más corto: escribe peor código, pero se queja antes de inventar.

## Lo que no le pidas

"Hazme la declaración de IVA". No. Limpia datos. El modelo 303 lo rellena tu gestor con el archivo ya coherente.

Más contexto de esta función en el [análisis de ChatGPT](/herramientas/chatgpt).
