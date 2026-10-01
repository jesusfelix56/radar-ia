---
title: Cómo locutar un vídeo de YouTube en castellano con ElevenLabs
description: Guion para ser oído, bloques cortos y caracteres, no minutos. La sonoridad se mide en el editor; esta página no fija un LUFS oficial.
category: Tutorial
tags:
  - elevenlabs
  - youtube
  - audio
relatedTools:
  - elevenlabs
  - claude
amazonPicks:
  - search: auriculares monitorizacion estudio
    title: Auriculares cerrados
    note: Los seseos y las erres dobles solo se oyen en cascos. El altavoz del portátil miente.
    price: 55
featured: false
pubDate: 2026-08-23
updatedDate: 2026-10-01
---

YouTube perdona mal una voz que se aplana a los diez minutos. ElevenLabs no locuta «un vídeo»: locuta el texto que le pegas, y lo cobra por caracteres. Esta guía corta el guion para que puedas repetir un trozo sin regenerar el resto. No es una prueba de oyentes. El 65 % de la [ficha](/herramientas/elevenlabs) es de una escucha antigua, y la ficha dice que no se ha repetido.

## El guion se escribe para la boca

Pídele a Claude, o reescríbelo tú:

```
Convierte este texto en un guion hablado.
Frases cortas. Tú. Marca [CLIP: ...] cuando haya que enseñar una captura.
No abras con mi nombre ni con «quédate hasta el final».
Las primeras frases: el problema, en concreto.
Números cortos, en letras: «doce minutos», no «12 min».
```

Lee el principio en voz alta. Si no lo dirías así, cámbialo antes de gastar caracteres. Donde te quedas sin aire, la frase es larga.

## Un archivo por bloque

Cada parte del guion, una generación. Si el apellido sale mal en el tercer bloque, regeneras ese archivo. Un monólogo de veinte minutos en una sola pieza te obliga a repetirlo entero.

Nombra `01-apertura.wav`, `02-paso.wav`. WAV si el editor te lo ofrece; si solo puedes exportar MP3, quédate con la calidad más alta que te deje el plan y no vuelvas a comprimir al exportar el vídeo.

## Caracteres, no minutos

La ficha, con [elevenlabs.io/pricing](https://elevenlabs.io/pricing) leída el 1 de octubre de 2026, no convierte créditos en minutos. En la ayuda de modelos que enlaza, Multilingual v2 cuenta un carácter como un crédito e incluye el español. Diez mil créditos del plan gratuito son unos diez mil caracteres de ese modelo, no «unos diez minutos». El minuto depende de cómo esté escrito el guion y de la velocidad.

Pega el guion en un editor, mira el recuento y compáralo con el cupo de tu plan. Un vídeo a la semana puede no caber en el gratuito; eso se ve en el contador, no en una regla de «diez minutos piden el plan de pago». La [documentación de texto a voz](https://elevenlabs.io/docs/overview/capabilities/text-to-speech) que cita la ficha dice que el uso comercial pide un plan de pago. Si el vídeo es el negocio, léelo allí antes de publicar.

## Nombres que se tuercen entre bloques

SEO, el nombre de una herramienta, tu apellido. Si cada archivo los dice de una forma, se nota al pegarlos. La [documentación de diccionarios de pronunciación](https://elevenlabs.io/docs/eleven-api/guides/how-to/text-to-speech/pronunciation-dictionaries), leída el 1 de octubre de 2026, es una guía de la API, no una captura del editor web. Ahí las etiquetas de fonema solo valen en los modelos eleven_v4, eleven_flash_v2 y eleven_v3. En los demás, el diccionario se las salta y toca un alias: otra grafía que suene bien. Para usar IPA o el alfabeto CMU en un idioma que no sea el inglés, la misma página dice que hay que pasar a eleven_v4. Prueba el nombre en un bloque corto. Si en tu pantalla hay otra caja de pronunciación, no des por hecho que un IPA se va a aplicar.

## La mezcla, sin una cifra que YouTube no nos haya confirmado

Esta guía decía antes de llevar la voz a −14 LUFS y la música a −25. No es una medición nuestra. El 1 de octubre de 2026 no hemos dejado esa cifra como norma de YouTube: no la hemos confirmado en una página de ayuda que se abriera del todo. En CapCut, Premiere o DaVinci:

- Deja que la voz se entienda en auriculares, no en el altavoz del portátil.
- Baja la música hasta que deje de competir con las consonantes. Si tienes un medidor, úsalo y anota el valor que te haya funcionado. No lo publiques como si fuera el estándar de YouTube.
- Deja un silencio breve entre bloques. Pegados a hueso, suenan a corte roto.

La miniatura y el título no salen de ElevenLabs. «No vas a creer» no es un título. Una frase que diga el problema, sí.

Si la voz no es la tuya ni una del catálogo con licencia, para. El límite está en la ficha, con la nota de la AEPD del 27 de enero de 2026. Esta página no añade otro artículo.
