---
title: Cómo escribir una reclamación al banco o a una aerolínea con Claude
description: Tono firme, hechos fechados y una sola petición. El modelo tiende a ser educado de más; hay que atarlo.
category: Tutorial
tags:
  - claude
  - reclamaciones
  - cotidianas
relatedTools:
  - claude
  - perplexity
amazonPicks:
  - search: carpeta fuelle documentos acordeon
    title: Carpeta fuelle
    note: Reclamaciones se ganan con el PDF del cargo y la captura del error, no con la prosa.
    price: 11
featured: false
pubDate: 2026-08-19
---

Claude escribe cartas que suenan a persona. En reclamaciones eso es un arma de doble filo: se disculpa, suaviza y pide "valorar la posibilidad". El banco ignora eso. Esta guía es para un cargo duplicado, un vuelo cancelado o una comisión que no te explicaron.

## Carpeta de hechos, no de sentimientos

Antes del prompt, una lista:

1. Qué pasó, en una frase
2. Fechas y horas
3. Importes y últimos cuatro dígitos de cuenta o localizador
4. Qué ya has hecho (llamada, chat, hoja 1)
5. Qué quieres exactamente: devolución de X € en 15 días, no "una solución"

Si no puedes rellenar el punto 5, no escribas la carta.

## Prompt

```
Redacta una reclamación en español de España. Tú.
Hechos (no los adornes):
[lista]

Destinatario: [servicio de atención / AESA / Banco de España, según toque]
Objetivo único: [devolución de X € / reembolso / baja de comisión]

Reglas:
- Párrafo 1: hechos en orden cronológico, con fechas
- Párrafo 2: por qué incumplen (cita la norma solo si te la pego; si no, no inventes artículos)
- Párrafo 3: petición concreta y plazo
- Nada de "espero que comprendan", "no es por el dinero", amenazas de redes sociales
- 250 palabras máximo
- Al final, lista de anexos que debo adjuntar
```

## Segunda pasada

```
Quita cualquier disculpa mía. Quita adjetivos. Si una frase no aporta un hecho o una petición, bórrala.
```

Ese recorte es el 40% del valor. Claude es prudente; la reclamación no debe serlo.

## Dónde se envía

- Banco: servicio de atención al cliente, luego departamento de conducta, luego Banco de España. No empieces por el BdE.
- Vuelo: la aerolínea primero. AESA si no contestan en plazo. Perplexity te localiza el formulario vigente; no copies uno de 2019.

No firmes con "letrado" ni pongas membrete falso. Es una carta tuya.

Más sobre el estilo de Claude en su [análisis](/herramientas/claude).
