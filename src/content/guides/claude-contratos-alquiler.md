---
title: Cómo usar Claude para redactar un contrato de alquiler (sin jugar a ser abogado)
description: Un borrador de arrendamiento de vivienda en España para que un profesional lo revise, no un texto para firmar a ciegas.
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
updatedDate: 2026-11-18
---

Un contrato de alquiler generado por IA no sustituye a un abogado. Lo que Claude sí hace, mejor que un chat genérico, es dejarte un borrador en un castellano jurídico razonable. El profesional revisa en un rato. No redacta desde una página en blanco.

Esta guía es para vivienda habitual en España. Locales y alquiler de temporada van por otro régimen. No uses este texto para eso.

## Si falta un dato, rellena «lo habitual»

Y lo habitual es justo lo que luego discute el inquilino. Ten delante, antes de abrir el chat:

- Dirección completa, referencia catastral y si está amueblada
- Duración. El artículo 9 de la LAU, en el [texto consolidado del BOE](https://www.boe.es/buscar/act.php?id=BOE-A-1994-26003) con última actualización publicada el 13 de noviembre de 2026, deja pactar el plazo. Si es inferior a cinco años, o a siete si el arrendador es persona jurídica, se prorroga por años hasta ese mínimo, salvo que el inquilino avise con treinta días de que no renueva
- Renta, cuenta de ingreso, fianza de una mensualidad y, si la hay, la garantía adicional en una línea distinta
- Quién paga IBI, comunidad y suministros
- Inventario de mobiliario, si lo hay

## El encargo, con los huecos a la vista

Pégalo y sustituye los corchetes. No pidas «un contrato de alquiler» a secas.

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
5. Al final, lista de anexos que deberíamos adjuntar (cédula, IEE, inventario fotográfico, documento de finalización del artículo 36.7).
6. Añade un recuadro al principio: "Esto es un borrador. No firmar sin revisión profesional."
7. Fianza de vivienda: una mensualidad. Si hay garantía adicional, cláusula aparte, con el tope del artículo 36.5 marcado como [REVISAR]. No impongas un seguro de impago.
```

## La fianza es una mensualidad

Una versión anterior de esta lista ponía «fianza (máximo 2 mensualidades en vivienda)». El artículo 36.1 del mismo texto consolidado, leído el 18 de noviembre de 2026, dice otra cosa: en vivienda, la fianza en metálico es una mensualidad de renta. Dos mensualidades es la fianza del arrendamiento para uso distinto de vivienda.

El apartado 5 permite, además, una garantía adicional. En vivienda, y en contratos de hasta cinco años, o de hasta siete si el arrendador es persona jurídica, esa garantía no puede pasar de dos mensualidades. Va sumada a la fianza, en otra cláusula. El mismo apartado dice que no se puede exigir al arrendatario un seguro de impago de renta ni una cobertura análoga. En el alquiler temporal, el tope de esa garantía adicional es una mensualidad. Esta página no cubre el temporal: el artículo 9.4 deja su duración en el artículo 9 bis, fuera de los apartados anteriores.

El apartado 7, que la nota del consolidado atribuye a los artículos 3.17 y 3.18 del Real Decreto-ley 29/2026, de 6 de octubre, pide un documento de finalización firmado por las dos partes con el estado de la vivienda al entregar la posesión. Si no se firma, o no anota desperfectos, se presume, salvo prueba en contrario, que se entregó en estado adecuado de conservación. El anexo de inventario de más abajo encaja con ese papel. No lo sustituye esta guía.

El BOE avisa de que el texto consolidado es informativo y no tiene valor jurídico. La publicación oficial es la de cada modificación. Esto no es un dictamen: el profesional sigue revisando el borrador.

## Por qué este chat y no otro para el borrador

Claude mantiene el tono de documento y no se pone literario. Cuando no sabe una cifra (un índice de actualización, un plazo de preaviso) tiende a dejar el hueco. ChatGPT rellena con un «según ley» genérico que no sirve para firmar ni para revisar.

Después, un segundo paso: «Ahora genera el anexo de inventario en tabla: estancia, objeto, estado, foto nº». Ese anexo es lo que evita la pelea al devolver las llaves.

## Tres sitios donde el borrador miente con soltura

La actualización de la renta: muchas plantillas de internet siguen citando el IPC cuando el régimen transitorio puede ser otro. Contrástalo.

Las cláusulas de «el inquilino paga cualquier derrama»: a menudo son nulas.

La duración y las prórrogas: a veces copia modelos de 2018.

Con el borrador en la mano, mándalo a un gestor o a un abogado con esta frase: «Revisa solo lo que sea nulo o contrario a la LAU. No reescribas el estilo.» Sale más barato que encargar la redacción entera.

## Si no es vivienda habitual, para

Alquiler de temporada, habitaciones y locales tienen otras normas. Ahí Perplexity ayuda a localizar la norma vigente y Claude, a redactar. En ese orden.

Por qué la prosa de Claude aguanta mejor un documento largo está en la [ficha de Claude](/herramientas/claude).
