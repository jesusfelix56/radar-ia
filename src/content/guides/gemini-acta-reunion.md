---
title: Cómo sacar el acta de una reunión con Gemini en Google Docs
description: Grabación, transcripción y acta de una página que sí se puede enviar. Incluye el prompt que evita el "la reunión fue muy productiva".
category: Tutorial
tags:
  - gemini
  - docs
  - trabajo
relatedTools:
  - gemini
  - claude
amazonPicks:
  - search: grabadora digital reunion bolsillo
    title: Grabadora de bolsillo
    note: El móvil sirve. Una grabadora con micrófono decente en la mesa salva las reuniones de 8 personas.
    price: 45
featured: false
pubDate: 2026-08-22
---

Gemini en Docs resume lo que le pongas. Si le pones una transcripción sucia, resume sucio. El trabajo está en el audio y en el prompt. Guía para una reunión interna de 45 minutos.

## Consentimiento

Graba solo si todos saben que se graba. En muchas empresas hace falta aviso. En una entrevista de trabajo o con un cliente externo, pregunta. Sin eso, no hay tutorial que valga.

## 1. Audio

Un solo dispositivo en el centro. No grabes "para Gemini" con la cámara del portátil a 4 metros. Si usas Meet, descarga la transcripción nativa cuando exista: ya llega separada por hablante.

## 2. Pasa a texto

Gemini o la transcripción de Meet. Si el texto no distingue quién habla, añade a mano `[Ana]`, `[Luis]` en los primeros minutos. El acta sin responsables es un adorno.

## 3. Prompt en Docs (selecciona la transcripción)

```
Redacta un acta en español, una página máximo.
Reunión: [título, fecha]
Participantes: [lista]

Estructura:
1. Decisiones (frase con verbo en pasado y responsable)
2. Acciones: tabla dueño / tarea / fecha
3. Temas pospuestos (una línea)
4. Lo que se discutió sin decidir (máximo 5 viñetas)

Prohibido: "se comentó la importancia de", "hubo un debate enriquecedor", adjetivos.
Si una decisión no está explícita en la transcripción, ponla en [SIN CERRAR], no la inventes.
```

## 4. El recorte de 5 minutos

Envía el acta el mismo día. Pide a dos asistentes: "¿falta alguna decisión?" No pidas a Gemini que "mejore el tono". El tono corporativo es exactamente lo que hay que quitar.

Si la reunión fue legal o salarial, no uses Gemini con datos sensibles en una cuenta personal. Cuenta de empresa y política de Workspace.

[Análisis de Gemini](/herramientas/gemini) para el encaje con Gmail y Drive.
