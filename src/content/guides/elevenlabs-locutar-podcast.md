---
title: Cómo locutar un pódcast con ElevenLabs sin que suene a anuncio del supermercado
description: 'De texto a episodio: clonación legal de tu voz, pausas, nombres propios en español y el corte que hay que hacer a mano.'
category: Tutorial
tags:
  - elevenlabs
  - podcast
  - audio
relatedTools:
  - elevenlabs
  - chatgpt
amazonPicks:
  - search: microfono usb condensador podcast
    title: Micrófono USB
    note: Si clonas tu voz, la muestra tiene que ser limpia. El micro del portátil deja un clon nasal que no arregla ningún slider.
    price: 109
featured: true
pubDate: 2026-08-18
---

ElevenLabs genera locución usable. No genera un pódcast. La diferencia es el guion, las pausas y no clonar a nadie sin contrato. Esta guía cubre un episodio de 12 minutos en castellano.

## Legal, antes que nada

Solo clona **tu** voz, o una voz de su catálogo. Clonar la de un locutor de la radio, un familiar o un cliente "para probar" es ilegal y motivo de baneo. Si es para una empresa, el consentimiento por escrito del titular de la voz.

## 1. El guion no se escribe como se habla

ChatGPT o Claude te dejan un artículo. Si lo pegas tal cual, ElevenLabs recita. Reescríbelo en voz alta:

- Frases de 12-16 palabras
- Nada de "en este sentido" ni enumeraciones de cinco niveles
- Los números, en letras si son cortos: "doce minutos", no "12 min"
- Marca pausas con `...` o con el tag de break si usas el editor

Un truco: léelo tú una vez con el cronómetro. Donde te quedes sin aire, hay que cortar la frase.

## 2. Elegir voz o clonar

Catálogo: filtra Spanish (Spain), no Latin America, si tu audiencia es de aquí. Las voces "neutral Spanish" suenan a doblaje.

Clonación: 1-3 minutos leyendo un texto con erres, eñes y diptongos (`ferrocarril`, `piña`, `Europa`). Habitación callada. Un solo micro. Sube esa muestra, no un pódcast viejo con música de fondo.

## 3. Ajustes que sí cambian el resultado

En el editor:

- **Stability** más alta = menos teatro. Para informativos, súbela. Para ficción, bájala un poco.
- **Style exaggeration** en castellano suele pasarse. Casi siempre mejor cerca de cero.
- Velocidad: 0.9–1.0. Por encima, come consonantes finales (`comunida` en vez de `comunidad`).

Genera el primer párrafo diez veces. Quédate con una y no regeneres el episodio entero a cada cambio: mezcla de tomas se nota.

## 4. Nombres propios y marcas

Añade un bloque de pronunciación. ElevenLabs permite lexicon / replacements. Ejemplos que fallan solos: `AENA`, `Moaña`, `Guipúzcoa`, `ChatGPT`. Fóneticamente: "a-e-na", "mo-aña", "guipúzcoa".

## 5. El corte humano que no puedes saltarte

Baja el MP3. En Audacity o similar:

- Recorta respiraciones raras
- Normaliza a -16 LUFS para pódcast
- Añade sintonía **después**. Si la mezclas en ElevenLabs, cada regeneración la destroza

El plan gratuito da para probar. Un episodio semanal de 12 minutos se come el plan de pago pequeño; vigila caracteres. La ficha de [ElevenLabs](/herramientas/elevenlabs) detalla el coste real. El botón Probar es enlace de afiliado.
