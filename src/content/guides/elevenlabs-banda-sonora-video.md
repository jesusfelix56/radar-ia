---
title: "BORRADOR – Banda sonora para un vídeo con ElevenLabs (octubre de 2026)"
description: Qué publica ElevenLabs sobre Instant Soundtracks el 15 de octubre de 2026, con la actualización del día 20. Sin prueba propia.
category: Guía
tags:
  - elevenlabs
  - vídeo
  - música
relatedTools:
  - elevenlabs
  - runway
draft: true
pubDate: 2026-10-21
---

> BORRADOR. Falta la parte de prueba propia: Jesús añadirá si lo ha generado, con qué vídeo y qué créditos ha gastado la cuenta. No publicar hasta entonces.

Esto no es una prueba. El 21 de octubre de 2026 leímos el anuncio [Presentamos Instant Soundtracks](https://elevenlabs.io/es/blog/introducing-instant-soundtracks), publicado el 15 de octubre y actualizado el 20. Lo de abajo es lo que dice esa página. La locución, los créditos del texto a voz y la tarifa de la ficha siguen en el [análisis de ElevenLabs](/herramientas/elevenlabs). Un plano generado es otro flujo: [el reel con Runway](/guias/runway-reel-instagram).

## Qué hace, según el anuncio

Subes un vídeo a ElevenCreative. El modelo compone una banda sonora con música original, mira el vídeo en busca de momentos que pidan un efecto y coloca esos efectos en la línea de tiempo, en la marca que corresponde. El ejemplo que ponen es un barrido sincronizado con el logotipo al final de un anuncio.

En el editor de vídeo de la pestaña de música, los efectos van en una capa aparte de la música. Se pueden revisar, añadir más, mover la sincronización o cambiar la música sin empezar de cero. La exportación, dice el anuncio, sale desde ElevenCreative.

También dice que puedes usar el audio que ya trae el vídeo como referencia. El modelo mira género, crescendos, pulsaciones por minuto o instrumentación, y la banda nueva se apoya en eso. El anuncio lo resume así: música que encaja con el carácter de la original, en lugar de empezar de cero.

Sobre el formato corto, el texto dice que la sincronización es más precisa en cortes, transiciones y acciones en pantalla, y que el ambiente puede cambiar entre escenas. El ejemplo es pasar de una escena rápida, con EDM o R&B, a otra lenta, con guitarra acústica. Es su ejemplo, no un vídeo nuestro.

## Dónde está

El anuncio dice que está disponible en tres sitios:

- El editor de vídeo, en la pestaña de música de ElevenCreative, con los efectos en capa aparte y el control para usar el audio como referencia.
- La plataforma ElevenMusic.
- La API de vídeo a música, con tres parámetros nuevos: `add_sfx`, `separate_tracks` y `use_audio_as_reference`.

Con `separate_tracks=true`, la API devuelve un ZIP: la música y los efectos, en archivos distintos, para mezclarlos en otro editor o en Studio.

El tope que publica la página: hasta 10 vídeos por solicitud, 200 MB en total y 10 minutos de vídeo.

## Lo que el anuncio no dice

No publica cuántos créditos gasta una banda sonora, ni en qué plan entra. En [elevenlabs.io/pricing](https://elevenlabs.io/pricing), leída el 21 de octubre de 2026, la lista del gratuito incluye Music y la de Starter añade «Music commercial use», junto con la licencia comercial. No hemos comprobado si Instant Soundtracks sigue esa fila. Si el vídeo es para un anuncio, mira esa casilla en el checkout antes de dar por hecho que el gratuito sirve.

La FAQ de esa página cifra Eleven Music en unos 900 créditos por minuto. El anuncio de Instant Soundtracks no dice que se cobre así. No convertimos el minuto de vídeo en 900 créditos.

La ficha de ElevenLabs ya separa la voz sintética del permiso para usar la de otra persona. Esta página no añade una prueba de oído ni una norma de sonoridad.

## Lo que falta por probar

Lo de arriba es el anuncio. Falta mirarlo con una cuenta y un vídeo real.

- [PENDIENTE PRUEBA PROPIA: créditos que resta un vídeo corto, y si el gratuito lo deja exportar]
- [CAPTURA: la capa de efectos en el editor, con un corte que se vea en pantalla]
- [PENDIENTE: si «Music commercial use» de Starter es el requisito para publicar el resultado]
