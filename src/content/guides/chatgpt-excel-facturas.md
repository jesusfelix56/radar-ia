---
title: Cómo usar ChatGPT para limpiar una hoja de facturas en Excel
description: Cabeceras claras, reglas que apruebas tú y una hoja de revisión. Los tipos de IVA, en la Agencia Tributaria. El modelo 303 no se rellena aquí.
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
updatedDate: 2026-10-01
---

La función que analiza un archivo en ChatGPT ejecuta código sobre lo que subes. Sirve para una hoja de facturas con fechas mezcladas, clientes escritos de tres maneras y un total que no cuadra. No sirve para presentar el impuesto. Esta guía es el primer uso. No hemos vuelto a medir un archivo real en octubre.

## Cómo tiene que llegar el archivo

Exporta CSV o XLSX. Quita la fila decorativa («FACTURACIÓN 2026») antes de subirlo. Si la primera fila no son los nombres de columna, el modelo adivina y se equivoca con aplomo.

Nombres aburridos: `fecha`, `cliente`, `base`, `tipo_iva`, `cuota_iva`, `total`, `pagada`. `Campo1` no es un nombre. Una fila, una factura. Si hay dos hojas (emitidas y recibidas), súbelas por separado o di cuál es cuál en el prompt. No las dejes apiladas con un título en medio.

No subas el certificado, el CSV del banco con el IBAN completo ni el de nóminas. Para una limpieza de facturas bastan fecha, cliente, bases y cuotas. El criterio de qué más sobra está en [qué no subir a un chat](/guias/que-no-subir-a-un-chat).

## Para en el paso de las reglas

```
No reescribas el archivo todavía.

1. Di qué columnas ves y copia 5 filas.
2. Lista problemas: fechas en varios formatos, vacíos, duplicados, cuota que no cuadra con base por tipo, totales que no suman.
3. Propón una regla por problema, en una frase, y espera a que yo escriba «adelante».
4. Cuando limpies, devuelve el archivo, el código que has usado y el recuento: filas de entrada, de salida y apartadas, con el motivo.
5. No borres las dudosas. Muévelas a una hoja o a un CSV llamado revision.
```

El paso 3 es el que evita la limpieza sorpresa. «Adelante» solo después de leer las reglas. Si una regla dice «unificar el IVA al 21 %», no es una regla: es un error. La [Agencia Tributaria](https://sede.agenciatributaria.gob.es/Sede/iva/calculo-iva-repercutido-clientes/tipos-impositivos-iva.html), leída el 1 de octubre de 2026, publica el tipo general del 21 % y los reducidos del 10 % y del 4 %, y el 0 % en algunas operaciones. Qué bien o qué servicio lleva cada uno está en el PDF de tipos de esa página, no en un promedio de tu hoja. Si una fila es luz, gas o carburante, no fuerces el general: el PDF de 2026 es el sitio donde mirar si hay un tipo temporal. El chat no lo ha leído.

## Tres comprobaciones en el archivo que baja

Suma `total` antes y después. La diferencia tiene que explicarse con las filas de `revision`. Si no, hay un fallo en el código. Pídelo y léelo. No hace falta ser quien lo haya escrito; hace falta ver si descarta filas por un `NaN` que en realidad era una fecha.

Pide las fechas en `AAAA-MM-DD`. Excel en español te las volverá a pintar como 4/3/26. Eso es el formato de la celda, no un cambio de dato. Compruébalo con una fecha que conozcas, un 4 de marzo y un 3 de abril, porque el día y el mes se cruzan.

Abre `revision` y mira por qué cayó cada fila. Una factura buena con el cliente en blanco no se tira: se completa. Una duplicada de verdad se queda apartada, con las dos copias a la vista.

## Si el archivo no entra o el análisis se corta

Esta guía decía «más de 20 MB». No es un límite que hayamos medido ni una cifra que el 1 de octubre hayamos podido leer en la ayuda de OpenAI: la página de límites de subida no se abrió. Si el archivo no entra o la respuesta se queda a medias, pártelo por año o por trimestre y repite las mismas reglas. No bajes el tope a otra cifra inventada.

El modelo 303 lo rellena quien lleve la contabilidad, con la hoja ya coherente. No le pidas a ChatGPT la declaración. Un libro de Excel sigue haciendo falta para saber si un `BUSCARX` era lo que querías o un parche.

Más contexto de la herramienta, no de Hacienda, en el [análisis de ChatGPT](/herramientas/chatgpt).
