---
title: Cómo hacer fotos de producto caseras con Midjourney (y cuándo es mejor el móvil)
description: La foto que demuestra el objeto es real. La referencia de Midjourney, según la versión que tengas abierta, solo ambienta. Sin política de Amazon inventada.
category: Tutorial
tags:
  - midjourney
  - ecommerce
  - imagen
relatedTools:
  - midjourney
  - runway
amazonPicks:
  - search: kit fotografia producto caja luz
    title: Caja de luz
    note: Tres fotos reales bien iluminadas venden más que doce renders. Midjourney rellena el lifestyle, no la ficha técnica.
    price: 39
featured: false
pubDate: 2026-08-24
updatedDate: 2026-10-01
---

Midjourney se inventa objetos bonitos que no son el tuyo: un asa de más, un logo que no se lee, un plástico que parece cerámica. Para una ficha o una tienda, la imagen que demuestra que el objeto existe es una foto. El render, si lo usas, es el ambiente. Esta guía no mide ventas ni cita una norma de Amazon que no hayamos leído en tu Seller Central.

## La foto que no se genera

Caja de luz o ventana, fondo blanco, el móvil quieto. Esa imagen es la principal. No la sustituyas por un cuadro generado, por muy limpio que salga. Una tableta gráfica puede servir para tapar una etiqueta mal generada; el precio de «unos 80 €» que decía esta página no es una tarifa comprobada. Mira el precio el día que la compres. En [Recomendados](/recomendados) hay material de mesa, no una obligación de comprar.

Haz tres fotos reales antes de abrir Midjourney: el objeto entero, un detalle que importe (la costura, el enchufe, la escala con una mano si el marketplace lo permite) y el conjunto si vendes un pack. Si esas tres no están, el modelo no tiene a qué parecerse.

## Según el modelo que tengas abierto

La documentación no es la misma en todas las versiones. Leída el 1 de octubre de 2026:

En la versión 7, [Omni Reference](https://docs.midjourney.com/hc/en-us/articles/36285124473997-Omni-Reference) mete un personaje, un objeto o un vehículo de una imagen de referencia. En Discord se escribe `--oref` y la URL, una sola imagen. El peso `--ow` va de 1 a 1.000, y el valor por defecto es 100. La propia página recomienda quedarse por debajo de 400 salvo que uses un stylize muy alto, porque si no el resultado se vuelve impredecible. También dice que gasta el doble de tiempo de GPU que una imagen normal de la v7, que no va con Fast, Draft, el modo conversacional ni `--q 4`, y que un logo o un detalle fino puede no coincidir con la referencia. Hace falta un prompt de texto además de la foto. Y hace falta tener derecho a usar esa imagen.

En la 8.x, la [lista de parámetros](https://docs.midjourney.com/hc/en-us/articles/32859204029709-Parameter-List) marca Omni Reference como sustituida por el Edit Model, y la [página del Edit Model](https://docs.midjourney.com/hc/en-us/articles/48495453462797-Edit-Model) dice que genera con hasta cuatro imágenes de referencia. En Discord, `--edit` y las URLs separadas por espacios. La proporción por defecto de ese modo intenta seguir a la primera imagen; si quieres otra, `--ar`. Puedes escribir instrucciones («pon esto sobre una mesa de desayuno») además de describir la escena. `--raw` reduce el adorno automático.

No mezcles los dos parámetros «por si acaso». Mira qué versión estás usando y usa el que documenta esa versión. Los parámetros van al final, con espacio antes de los guiones y sin comas dentro, como explica la lista.

Un prompt de ambiente, no de catálogo, se parece a esto:

```
El mismo objeto que en la referencia, sobre una mesa de madera por la mañana, luz lateral, poca profundidad de campo, sin logos nuevos, sin botones que no estén en la foto --ar 4:5
```

Si cambia el color, la forma o el número de piezas, no lo «arregles» con otro adjetivo. Baja el peso de la referencia o vuelve a la foto real. La ayuda de Omni Reference lo dice a su manera: los detalles finos no tienen por qué coincidir.

## Texto del envase

El texto impreso en el bote va a salir mal. Recórtalo en la foto real o tápalo. No pidas «que el etiquetado se lea». No es el trabajo de este modelo, y un ingrediente inventado en la etiqueta es peor que una etiqueta borrosa.

## Qué mirar en Amazon antes de subir el render

No hemos leído, el 1 de octubre de 2026, la página de requisitos de imagen dentro de una cuenta de Seller Central: pide inicio de sesión y cambia por categoría. Por eso esta guía no te dice que la imagen principal tenga que ser de un blanco RGB concreto ni que el render esté permitido en la posición 5. Eso se lee en la ayuda de tu cuenta, el día que publicas.

Mientras tanto, el criterio de redacción es simple. La imagen que identifica el producto es la foto real. Una escena generada, si la ayuda de tu cuenta la admite, va detrás y no debe parecer la foto de estudio del objeto. Si el render enseña un producto distinto del que envías, no lo subas aunque «quede mejor».

El título y las viñetas de la ficha son otro flujo: [descripciones con Copy.ai](/guias/copyai-descripciones-amazon). El precio y los planes de Midjourney están en la [ficha](/herramientas/midjourney), con la lectura del 1 de octubre de 2026.
