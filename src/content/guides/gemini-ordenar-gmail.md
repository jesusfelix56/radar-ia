---
title: Cómo usar Gemini para vaciar Gmail de hilos que ya no importan
description: Operadores de búsqueda de la ayuda de Gmail, tres cubos y filtros que creas tú. Sin archivar a ciegas y sin un porcentaje de ruido.
category: Tutorial
tags:
  - gemini
  - gmail
  - productividad
relatedTools:
  - gemini
  - chatgpt
amazonPicks:
  - search: raton vertical ergonomico inalambrico
    title: Ratón vertical
    note: Archivar 400 hilos es un trabajo de muñeca. El hardware barato aquí sí se nota.
    price: 32
featured: false
pubDate: 2026-08-17
updatedDate: 2026-10-01
---

Vaciar una bandeja no es pedirle a un modelo que «resuma 2024». Es buscar por remitente, decidir qué exige una acción y archivar el resto a mano. Gemini puede ayudarte a leer un hilo. No es un motivo universal para pagar la suscripción: la [ficha](/herramientas/gemini) separa qué plan asocia la página de Google a Gmail y a Docs, con la lectura del 1 de octubre de 2026. Si el panel no aparece, la cuenta no lo tiene o el administrador lo ha quitado. No hay un truco.

Una versión anterior decía que cinco búsquedas cubren el 80 % del ruido. Ese porcentaje no sale de un recuento. Cinco remitentes bien elegidos suelen vaciar más que un resumen de toda la bandeja. Cuántos, lo ves tú en la búsqueda.

Archiva. No borres en bloque. Borrar no se deshace con la misma calma, y un modelo se equivoca de hilo.

## La búsqueda, que sí está documentada

La ayuda de Gmail, [acotar las búsquedas](https://support.google.com/mail/answer/7190?hl=es), leída el 1 de octubre de 2026, documenta operadores que puedes combinar. `from:` limita al remitente. `newer_than:` y `older_than:` usan `d` (día), `m` (mes) y `y` (año); el ejemplo de la ayuda es `newer_than:2d` y `older_than:1y`. `category:promotions`, `category:updates` y `category:purchases` existen si usas las categorías de la bandeja. `has:attachment` y `filename:pdf` sirven cuando lo que buscas es el justificante, no la newsletter. Después de buscar, la misma página dice que puedes crear un filtro con esos resultados.

Ejemplos para una tarde, no para «todo mi correo»:

- `from:pedidos@ejemplo.com newer_than:1y`
- `from:banco@ejemplo.com filename:pdf newer_than:1y`
- `category:promotions older_than:1y`

Sustituye el dominio por el que te escribe de verdad. Abre un hilo y comprueba que la búsqueda no se ha llevado por delante un requerimiento. La ayuda avisa de un límite de los operadores negativos: Gmail puede mostrar una conversación entera si un mensaje coincide, aunque otro mensaje de ese hilo quedara fuera. No archives una conversación solo porque el operador «parecía» excluirla.

## Tres cubos, con una regla que no se negocia

Cuando tengas una lista corta de hilos de ese remitente, puedes pegar los asuntos en el panel, si lo tienes, o leerlos tú:

```
Clasifica estos asuntos en tres cubos.
A) Acción mía esta semana
B) Guardar: importe, plazo, garantía, Hacienda, colegio, Seguridad Social
C) Ruido: avisos ya resueltos, newsletters

No pongas en C nada con importe, plazo o «requerimiento», aunque el tono sea automático.
Tabla: asunto, fecha, cubo, una frase de qué haría yo. Si no se ve en el asunto, [ABRIR].
```

Tú ejecutas. La primera vez, archiva de uno en uno. Si la interfaz te ofrece una acción sobre varios hilos, revísala: el cubo C de un modelo no es una papelera segura.

El cubo B no se archiva en el olvido. Una etiqueta `guardar-2026` y fuera de la bandeja. Lo encuentras luego con `label:guardar-2026`, que es el operador `label:` de la misma ayuda.

## El filtro, para que no vuelva mañana

Con un remitente que ya has decidido que es ruido, crea el filtro desde la búsqueda, como indica la ayuda, o en Ajustes, Filtros. `from:` de esa newsletter, saltar bandeja, categoría Promociones. El criterio lo escribes tú. No dejes que una frase generada archive `from:agencia.tributaria` o un dominio que a veces manda publicidad y a veces un requerimiento. Si el dominio mezcla las dos cosas, no filtres el dominio entero: filtra el asunto de la newsletter, entre comillas, que es el operador de frase exacta.

## Dónde el resumen se deja lo importante

Un hilo con muchas respuestas: el acuerdo suele estar en el medio, no en el último «perfecto, gracias». Ábrelo. Si el panel resume y no cita la fecha o el importe, no archives.

Correo en gallego o catalán, o un PDF escaneado: no des por hecho que el panel ha leído las cifras. Ábrelo. Si el documento es una hoja de facturas, el flujo está en [limpiar facturas](/guias/chatgpt-excel-facturas), no en un resumen de Gmail.

Cuenta del trabajo: si la empresa no ha activado estas funciones, no te lleves los hilos a una cuenta personal para «que Gemini pueda». Eso es sacar correo de la empresa. La ficha entra en cuándo el plan de pago compensa si solo vives en Gmail.
