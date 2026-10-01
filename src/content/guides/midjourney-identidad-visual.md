---
title: Cómo montar una identidad visual mínima con Midjourney (logo, color y lo que no es una marca)
description: Tres anclas en papel, una dirección, contraste de texto según WCAG y el logo trazado aparte. Redacción de octubre de 2026, sin una marca «probada».
category: Tutorial
tags:
  - midjourney
  - marca
  - imagen
relatedTools:
  - midjourney
  - claude
amazonPicks:
  - search: cuaderno pantone o guia color
    title: Guía de color básica
    note: Midjourney no te da CMYK ni pantone. Un abanico barato evita imprimir tarjetas de un verde distinto cada vez.
    price: 18
featured: false
pubDate: 2026-08-27
updatedDate: 2026-10-01
---

Midjourney no te entrega una marca. Te entrega direcciones para mirar. El símbolo vectorial se traza después, el nombre lo pones tú con una fuente cuya licencia hayas leído, y los colores de imprenta no salen del PNG. Esta guía es ese recorte. No es una prueba de un logotipo ni un veredicto de «la mejor dirección».

## Antes del prompt, tres líneas

En un papel, no en un tablero de cuarenta imágenes:

- Un adjetivo que sí quieres: seco, cálido o técnico. Uno.
- Un objeto que puede aparecer: lámpara, trigo, circuito.
- Un no: nada de degradados morados, nada de mascotas, nada de letras.

Si el no no está escrito, el modelo rellena con lo que más ha visto. En 2024 eso era el degradado morado. Sigue mereciendo la pena prohibirlo por escrito.

## Una dirección, y la forma del archivo

La [lista de parámetros](https://docs.midjourney.com/hc/en-us/articles/32859204029709-Parameter-List), leída el 1 de octubre de 2026, dice que los parámetros van al final del texto, con un espacio antes de los guiones y sin comas ni puntos dentro del parámetro. La proporción se cambia con `--ar` o `--aspect`. Las imágenes salen cuadradas si no indicas otra cosa.

```
Dirección de marca para un [oficio] en España, [adjetivo], motivo de [objeto], formas planas, paleta de 3 colores, sin letras, sin eslogan, aspecto de vector --ar 1:1
```

No pongas `--v` con un número inventado. La misma lista trata la versión como un parámetro aparte (`--v`), y la documentación de referencia de imagen cambia según el modelo: en la versión 7 existe Omni Reference (`--oref`); en la 8.x la propia ayuda manda al Edit Model. Para una dirección de marca todavía no necesitas subir una foto. Si más adelante quieres clavar un objeto real, el flujo está en [fotos de producto](/guias/midjourney-fotos-producto).

Genera pocos grids y quédate con una dirección. Cambiar de estilo en cada prompt es no tener identidad. Si el PNG trae letras, descártalo. La documentación no promete texto legible, y un nombre mal escrito en el símbolo se queda.

## El color, fuera del PNG

Pide tres hexadecimales a partir de la imagen elegida, en el chat que uses para eso, y luego compruébalos tú. El criterio público está en las WCAG 2.2, criterio 1.4.3, en la [explicación del W3C](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html), leída el 1 de octubre de 2026: el texto normal necesita un contraste de al menos 4,5:1 con el fondo; el texto grande, al menos 3:1. El texto que forma parte de un logotipo o de un nombre de marca no tiene ese requisito. El texto de una tarjeta, de un botón o de un pie de web, sí.

Un beige sobre otro beige puede ser una dirección bonita y un botón ilegible. Mide el par que vas a usar para escribir, no el par que más te gusta en la ilustración. Midjourney no devuelve CMYK ni una referencia Pantone. Si vas a imprimir, el abanico o la prueba de imprenta van después.

## El nombre no se genera

Pide un símbolo sin texto. Trázalo en Figma, Inkscape o el vectorial que ya tengas. El nombre lo compones tú. Google Fonts sirve para empezar si abres la ficha de esa fuente y lees la licencia antes de ponerla en una tarjeta o en una camiseta. No des por hecho que todas valen para todo uso: la ficha de la fuente es la fuente.

Prueba el símbolo en tres sitios nada más: una tarjeta, la cabecera de una red y un favicon. Si a 32 píxeles no se reconoce, no es un símbolo todavía. No hace falta una papelería de doce piezas para saberlo.

Cuando la marca tenga que vender un objeto, las fotos son otro trabajo. Un logotipo generado no es la foto principal de un anuncio ni de una ficha.

[Análisis de Midjourney](/herramientas/midjourney) para planes y para lo que la ficha ya leyó el 1 de octubre de 2026. Esta página no repite la tarifa.
