---
title: Cómo escribir prompts que funcionan (y por qué los tuyos fallan)
description: Guía práctica de ingeniería de prompts en español, con la estructura de cinco bloques que usamos a diario y ejemplos antes y después.
category: Guía
tags:
  - prompts
  - productividad
  - principiantes
relatedTools:
  - chatgpt
  - claude
amazonPicks:
  - search: libro inteligencia artificial generativa español
    title: Libros de IA generativa en español
    note: Para entender por qué el modelo responde como responde, no solo qué teclas tocar.
    price: 24
featured: true
pubDate: 2026-04-22
updatedDate: 2026-08-14
---

La mayoría de la gente escribe prompts como si buscara en Google: tres palabras sueltas y a esperar. Luego concluye que la IA "no sirve para lo suyo". El problema casi nunca es el modelo.

## La diferencia entre un prompt malo y uno bueno

Un ejemplo real, con la misma herramienta y el mismo día:

**Prompt pobre:**

> Escríbeme un email para un cliente que no ha pagado.

**Prompt trabajado:**

> Eres el responsable de administración de un estudio de diseño pequeño. Escribe un email a un cliente habitual que lleva 12 días de retraso en una factura de 1.400 €. Es la primera vez que se retrasa y queremos conservar la relación. Tono cordial pero inequívoco, máximo 120 palabras, sin disculparte por reclamar, y termina proponiendo dos fechas concretas de pago.

El primero devuelve una plantilla genérica que hay que reescribir entera. El segundo devuelve algo que se envía casi tal cual. La diferencia no es magia: es información.

## La estructura de cinco bloques

Es la plantilla que usamos para cualquier tarea seria. No hace falta usar los cinco siempre, pero cuando un resultado sale mal, casi siempre falta uno de estos:

1. **Rol y contexto**: quién eres tú, para quién es esto, qué situación hay detrás.
2. **Tarea concreta**: un solo objetivo, expresado con un verbo claro.
3. **Restricciones**: longitud, tono, formato, qué evitar explícitamente.
4. **Ejemplo o referencia**: un texto tuyo anterior que sirva de modelo de estilo.
5. **Formato de salida**: tabla, lista, JSON, párrafos... dilo, no lo dejes al azar.

## Los cuatro errores que más vemos

### Pedir varias cosas a la vez

"Analiza este texto, corrígelo, tradúcelo y hazme un resumen" produce cuatro trabajos mediocres. Encadenar cuatro peticiones separadas produce cuatro buenos. El coste en tiempo es prácticamente el mismo.

### No dar ejemplos de lo que quieres

Describir un tono es difícil; enseñarlo es trivial. Pegar dos párrafos tuyos y decir "escribe con este estilo" funciona mejor que cualquier adjetivo.

### Aceptar el primer resultado

La primera respuesta es un borrador. Decir "esto es demasiado genérico, concreta el punto 2 con un ejemplo del sector de la hostelería" es donde se gana la calidad.

### No decir qué NO quieres

Las restricciones negativas son sorprendentemente eficaces: "sin introducciones de contexto general", "sin la palabra 'innovador'", "sin conclusión que resuma lo ya dicho".

## Una técnica que cambia los resultados

Antes de pedir el trabajo, pide preguntas:

> Antes de escribir nada, hazme las cinco preguntas cuya respuesta más mejoraría el resultado.

Obliga al modelo a exponer qué contexto le falta, y te obliga a ti a darlo. Es el truco con mejor relación esfuerzo/resultado de todos los que hemos probado.

## Cómo guardar lo que funciona

Cuando un prompt te dé un buen resultado, guárdalo. Un documento con diez plantillas propias, probadas y ajustadas a tu trabajo, vale más que cualquier lista de "500 prompts virales" de internet.

Si quieres un punto de partida, en nuestro [generador de prompts](/recursos/generador-de-prompts) puedes construir uno con esta misma estructura y copiarlo directamente.
