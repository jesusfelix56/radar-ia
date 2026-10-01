---
title: Cómo estudiar oposiciones con Claude sin convertir el temario en un resumen inútil
description: Mapa, preguntas a ciegas y vuelta al PDF. El chat no es el temario. Si una ley ha cambiado, se mira en el BOE.
category: Tutorial
tags:
  - claude
  - oposiciones
  - estudio
relatedTools:
  - claude
  - perplexity
amazonPicks:
  - search: temario oposiciones subrayador pastel
    title: Temario en papel y subrayadores
    note: Claude no sustituye el temario oficial. Si estudias solo con el chat, suspendes el tipo test el primero.
    price: 35
featured: true
pubDate: 2026-08-21
updatedDate: 2026-10-01
---

Claude aguanta textos largos. El uso que no estudia es pegar el tema y pedir «resúmeme». El resumen se siente como una tarde de trabajo y no aguanta un tipo test, porque has leído una prosa nueva en vez de recuperar la del temario. Esta página es el ciclo contrario. No es un método medido con opositores ni una promesa de plaza.

## Qué puedes pegar

El tema oficial o el de tu academia, en PDF. Una ley o un boletín, no la entrada de un blog que la comenta. Un simulacro que hayas fallado, con tus respuestas. No pegues apuntes de un canal donde no sabes quién escribe: el modelo los tratará como si fueran la norma.

Si el PDF es un escaneo torcido, dilo en el prompt y desconfía de los plazos. Un número mal leído en una tabla es el fallo más caro. La forma de contrastar una cifra está en [comprobar una cifra](/guias/comprobar-una-cifra-de-ia).

## Una hora corta, un tema

No hace falta que sean cincuenta minutos exactos. Hace falta el orden.

**Primero el esqueleto, con el PDF abierto.**

```
Este es el tema [n] de [oposición]. No lo resumas en prosa.
Devuelve: árbol de epígrafes, tres niveles como máximo; 10 términos que tendría que poder definir sin mirar; 5 pares que se confunden (A frente a B), con el epígrafe donde está cada uno.
Si el PDF está cortado o no se lee una página, dilo. No rellenes el hueco.
```

**Después, cierra el PDF.** Si lo dejas abierto, estás reconociendo, no recordando.

```
Hazme 12 preguntas de cuatro opciones, una correcta, sobre este tema.
No me des la solución todavía.
Al menos cuatro tienen que girar sobre un plazo, una excepción o un «salvo que».
No inventes un artículo que no esté en el texto que te pasé.
```

Contesta en un papel. Luego: «corrige. Cada fallo, en tres líneas, citando el epígrafe del temario. No reescribas el tema.»

**Vuelves al papel, no al resumen.**

```
Con estos fallos, ¿qué epígrafes tengo que releer ahora? Solo el encabezado. No me los reescribas.
```

Esa relectura es el estudio. Si Claude te deja un tema «redactado para un 10», memorizas su prosa. En un oral se nota, y además puede haber alisado una excepción. El legislador no escribe como un chat.

## Cuando el temario y el BOE no dicen lo mismo

Un temario de academia envejece. La pregunta útil no es «explícame el artículo». Es «¿el texto que tengo coincide con el publicado?». Ábrelo tú en el [BOE](https://www.boe.es/). Perplexity puede acercarte la ficha y la fecha; el segundo clic, el del PDF oficial, es tuyo. Si el chat dice que un artículo «cambió en 2026» y no puedes abrir la disposición, no lo estudies. El método está en la guía de comprobar cifras. Claude, si no le has activado una búsqueda y no le has pegado el texto nuevo, se queda en el PDF de la academia.

No le pidas jurisprudencia «a favor de mi caso» para un tema que es de ley. Si el tribunal pregunta la norma, la sentencia no tapa el artículo.

## Lo que esta página no hace

No dice cuántas horas al día, ni qué academia, ni cómo es el tipo test de tu tribunal. Eso está en la convocatoria, que también se publica en el BOE o en la web del organismo. Pégala si quieres que las preguntas se parezcan al formato, y revisa que el modelo no haya cambiado el número de opciones.

El cupo con PDF grandes está en la [ficha de Claude](/herramientas/claude), lectura del 1 de octubre de 2026. Un tema entero puede gastar el plan gratuito en una sentada. Partir el PDF por epígrafes no es solo por el límite: es para no perder el glosario del tema a mitad.
