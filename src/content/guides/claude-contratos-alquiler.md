---
title: Cómo usar Claude para redactar un contrato de alquiler (sin jugar a ser abogado)
description: Paso a paso para que Claude te deje un borrador de contrato de vivienda en España que un profesional pueda revisar, no un texto que firmes a ciegas.
category: Tutorial
tags:
  - claude
  - legal
  - vivienda
relatedTools:
  - claude
  - perplexity
amazonPicks:
  - search: carpeta archivadora documentos A4
    title: Archivador de documentos
    note: El contrato, el inventario y los anexos de fotos tienen que vivir juntos. Un PDF en el móvil no basta el día del desahucio.
    price: 12
featured: true
pubDate: 2026-08-15
---

Un contrato de alquiler generado por IA **no sustituye a un abogado**. Lo que sí hace Claude, mejor que el resto, es dejarte un borrador en castellano jurídico razonable para que el profesional revise en 20 minutos en vez de redactar desde cero.

Esta guía es para vivienda habitual en España. Nada de locales, nada de temporada turística: el régimen es otro.

## Lo que tienes que tener delante antes de abrir Claude

Sin estos datos, el modelo inventa cláusulas de relleno:

- Dirección completa, referencia catastral y si está amueblada
- Duración (mínimo 5 años si el arrendador es persona física, 7 si es empresa, salvo excepciones)
- Renta, fianza (máximo 2 mensualidades en vivienda), cuenta de ingreso
- Quién paga IBI, comunidad y suministros
- Inventario de mobiliario, si lo hay

Si falta algo, Claude lo rellena con "lo habitual". Lo habitual es exactamente lo que luego discute el inquilino.

## El prompt que usamos

Pégalo y sustituye los corchetes. No pidas "un contrato de alquiler" a secas.

```
Actúa como redactor de documentación, no como abogado. Vas a preparar un BORRADOR de contrato de arrendamiento de vivienda habitual en España, sujeto a la LAU vigente.

Datos reales:
- Arrendador: [nombre, NIF, domicilio]
- Arrendatario: [nombre, NIF]
- Inmueble: [dirección, catastro, metros, amueblado sí/no]
- Renta: [importe] pagadera el día [X] en [IBAN]
- Fianza: [importe]
- Duración: [fecha inicio] a [fecha fin]
- Gastos: [quién paga qué]

Reglas:
1. Estructura: comparecencia, objeto, duración, renta, fianza, gastos, obras, cesión, resolución, notificaciones, legislación aplicable.
2. Cada cláusula numerada. Nada de "etcétera".
3. Donde la ley sea imperativa, dímelo entre corchetes: [REVISAR: la LAU no permite X].
4. No inventes jurisprudencia. Si no estás seguro, deja un hueco [COMPLETAR].
5. Al final, lista de anexos que deberíamos adjuntar (cédula, IEE, inventario fotográfico).
6. Añade un recuadro al principio: "Esto es un borrador. No firmar sin revisión profesional."
```

## Qué hace Claude bien (y ChatGPT peor)

Claude mantiene el tono de documento y no se pone literario. En nuestras pruebas, **inventó menos cifras** (índices de actualización, plazos de preaviso) que ChatGPT. Cuando no sabía, dejaba el hueco. ChatGPT rellenaba con un "según ley" genérico que no sirve.

Pídele después un segundo paso: "Ahora genera el anexo de inventario en tabla: estancia, objeto, estado, foto nº". Ese anexo es lo que evita peleas al devolver las llaves.

## Lo que tienes que revisar a mano

- Actualización de renta: muchas plantillas de internet siguen citando el IPC cuando el régimen transitorio puede ser otro. Contrástalo.
- Cláusulas de "el inquilino paga cualquier derrama": a menudo son nulas.
- Duración y prórrogas: Claude a veces copia modelos de 2018.

Cuando tengas el borrador, mándalo a un gestor o abogado con esta frase: "Revisa solo lo que sea nulo o contrario a la LAU. No reescribas el estilo." Sale más barato.

## Si el inmueble no es vivienda habitual

No uses esta guía. Alquiler de temporada, habitaciones y locales tienen normas distintas. Ahí Perplexity te ayuda a localizar la norma vigente; Claude, a redactar. En ese orden.

Si quieres el análisis de por qué Claude escribe mejor en español, está en la [ficha de Claude](/herramientas/claude).
