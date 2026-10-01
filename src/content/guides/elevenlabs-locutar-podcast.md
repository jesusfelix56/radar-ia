---
title: Cómo locutar un pódcast con ElevenLabs sin que suene a anuncio del supermercado
description: Guion hablado, tu voz o una del catálogo, y el corte en un editor. El cupo se cuenta en caracteres. Sin una norma de LUFS que no hayamos vuelto a leer.
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
updatedDate: 2026-10-01
---

ElevenLabs locuta un texto. Un episodio es el guion, los cortes y no usar una voz que no puedes usar. Doce minutos es un ejemplo de duración, no una prueba. La escucha con oyentes de la [ficha](/herramientas/elevenlabs) es antigua y allí se dice que no se ha repetido en octubre.

## La voz

Locuta con una voz del catálogo o con la tuya, grabada para eso. No clones a un locutor, a un familiar o a un cliente «para probar». La ficha ya deja ese límite fuera de la calidad de la voz y remite a la [nota de la AEPD del 27 de enero de 2026](https://www.aepd.es/prensa-y-comunicacion/notas-de-prensa/aepd-publica-decalogo-recomendaciones-proteger-privacidad-al-usar-ia): no usar imágenes de otras personas para generar contenido, sobre todo si son menores. Una muestra de voz ajena merece el mismo cuidado. Esta guía no añade un artículo del Código Penal ni una cláusula modelo. Si el episodio es para un cliente y la voz es la suya, el permiso va por escrito antes de subir el audio. Qué avisar al publicar un audio sintético está en [publicar una imagen generada](/guias/publicar-una-imagen-generada).

Si clonas la tuya, la muestra se graba en una habitación callada, un solo micro, sin música de fondo. La ficha, en la parte de clonación, dice que con un minuto ya sale un clon reconocible y que la limpieza pesa más que alargar la toma. No conviertas eso en una garantía: es la nota que ya estaba. Lee un texto con erres, eñes y diptongos (`ferrocarril`, `piña`) en el registro en el que luego quieras sonar, no en «voz de anuncio» si el episodio es una conversación.

En el catálogo, filtra el español que corresponda a quien te escucha. Una voz etiquetada como neutra puede sonar a doblaje. Escucha un párrafo tuyo, no la demo del fabricante.

## El texto que se puede decir

Un artículo pegado se recita. Reescríbelo:

- Frases que quepan en una respiración. Doce o dieciséis palabras es una pista, no una regla medida.
- Sin «en este sentido» y sin una lista de cinco niveles.
- Los números cortos, en letras.
- Una pausa marcada donde tú pararías. Si el editor tiene un control de pausa, úsalo; si no, un punto y aparte.

Léelo tú con un reloj. Donde te ahogas, corta. Ese sitio, en la locución, se va a notar igual.

## Los controles, si están en tu pantalla

El editor cambia. No damos por hecho los nombres en inglés de una versión concreta. Si ves estabilidad, exageración de estilo y velocidad, el criterio de redacción es este: más estabilidad y menos exageración para un episodio informativo; la velocidad, cerca de la normal, porque al acelerar se comen las consonantes finales. Genera el primer párrafo varias veces, quédate con una toma y no regeneres el episodio entero cada vez que cambias un adjetivo. La mezcla de tomas de días distintos se oye.

## Nombres

AENA, un topónimo, ChatGPT. La [documentación de diccionarios de pronunciación](https://elevenlabs.io/docs/eleven-api/guides/how-to/text-to-speech/pronunciation-dictionaries), leída el 1 de octubre de 2026, describe la API. Las etiquetas de fonema solo funcionan, según esa página, en eleven_v4, eleven_flash_v2 y eleven_v3. En otros modelos se ignoran y hay que usar un alias, una grafía que suene como quieres. Para IPA o CMU fuera del inglés, la misma página manda a eleven_v4. Prueba el nombre en una frase, no en los doce minutos. Si se lo salta, cambia la grafía de ese bloque.

## El corte, fuera de ElevenLabs

Baja el audio. En Audacity o en el editor que uses, quita los chasquidos y las respiraciones que no parecen humanas. La sintonía se añade aquí. Si la metes en el texto a voz, cada regeneración la mueve.

Esta guía normalizaba a −16 LUFS. No es una cifra que hayamos medido, ni la dejamos como norma de Spotify o de Apple: no la hemos vuelto a leer en la ayuda del distribuidor el 1 de octubre de 2026. Mira el objetivo en esa ayuda el día que publicas, y escucha el episodio en auriculares. El altavoz del portátil no enseña el seseo.

## El cupo

No conviertas el episodio en minutos de tarifa. La ficha, con la página de precios leída el 1 de octubre de 2026, cuenta créditos y, para Multilingual v2, un carácter por crédito, con el español entre los idiomas de ese modelo. Cuenta los caracteres del guion y compáralos con 10.000 del gratuito o con 30.000 del Starter, que son las cifras de esa lectura. Un semanario puede no caber en el gratuito. Lo ves en el contador. El uso comercial, en la documentación que enlaza la ficha, pide un plan de pago.

[Ficha de ElevenLabs](/herramientas/elevenlabs).
