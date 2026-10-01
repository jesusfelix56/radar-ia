---
title: Cómo pedirle a Copilot que escriba tests (y no un teatro verde)
description: 'Primero el comportamiento, luego un test que falle, después el código. Atajo de chat en línea según la documentación de VS Code. Sin una medición nueva.'
category: Tutorial
tags:
  - copilot
  - testing
  - codigo
relatedTools:
  - github-copilot
  - chatgpt
amazonPicks:
  - search: taza cafe programador
    title: Café
    note: Los tests buenos salen despacio. El merchandising es opcional; el tiempo, no.
    price: 14
featured: false
pubDate: 2026-08-25
updatedDate: 2026-10-01
---

Esta guía es un método de redacción y de trabajo. No cronometra Copilot ni repite la tabla de ahorro de la [ficha](/herramientas/github-copilot). Esa tabla es de una medición antigua; la ficha dice que no se ha vuelto a cronometrar. Aquí el objetivo es otro: que el test falle antes de que exista la función.

Copilot puede escribir `expect(true).toBe(true)` con una pinta de test de verdad. No hace falta haberlo contado para evitarlo. El pedido que lo provoca es «tests para este archivo». El pedido que lo evita es más estrecho: estos tres comportamientos, con este runner, y sin implementar la función.

## Una función pequeña, del derecho

Vas a probar `calcularIva`. Todavía no existe, o existe y no te fías. En `iva.test.js` dejas el contrato en comentarios, no la solución:

```js
// calcularIva(100, 0.21) => 121
// calcularIva(100, 0) => 100
// calcularIva('x') => throw TypeError
```

Esos tres casos son tuyos. El 21 % es el tipo general que publica la [Agencia Tributaria](https://sede.agenciatributaria.gob.es/Sede/iva/calculo-iva-repercutido-clientes/tipos-impositivos-iva.html), leída el 1 de octubre de 2026, junto con el 10 %, el 4 % y el 0 % en algunas operaciones. El test no demuestra el impuesto: demuestra que tu función hace lo que tú has escrito. Si el tipo de un producto no es el general, el caso no es `0.21`. Míralo en el PDF de tipos de esa misma página, no se lo preguntes al autocompletado.

## El atajo, y cuándo no abre lo que esperas

En VS Code, la documentación de GitHub sobre [preguntar a Copilot en el IDE](https://docs.github.com/en/copilot/how-tos/chat-with-copilot/chat-in-ide), leída el 1 de octubre de 2026, dice que el chat en línea del editor o de la terminal se abre con Ctrl+I en Windows y Linux, y con Comando+I en Mac. La [ayuda de VS Code del chat en línea](https://code.visualstudio.com/docs/copilot/chat/inline-chat) añade un matiz: si el archivo ya pertenece a una sesión de chat activa, ese mismo atajo puede abrir «Ask in Chat» en el panel, para seguir la conversación, en lugar del chat en línea suelto. Si no se abre donde tú crees, mira el menú Chat. No es que el atajo «haya dejado de existir».

Con el archivo de test enfocado, en VS Code:

`Ctrl+I` — «implementa estos tres comentarios como tests de Vitest. No crees calcularIva. No añadas casos.»

Si trabajas en Visual Studio, la misma página de GitHub no repite ese atajo: el chat en línea se abre con clic derecho y Ask Copilot. No copies el de un editor en el otro.

## El rojo es la comprobación

Lanza el runner. Tiene que fallar porque la función no está, o porque lanza mal. Si los tests pasan a la primera, para. O Copilot ha escrito la implementación en otro archivo, o el test no exige nada. Borra lo que se haya adelantado y vuelve a generar solo el test.

Cuando el rojo sea el que esperabas, abre `iva.js` y pide: «haz pasar estos tests. No añadas otros casos.» Acepta con Tab solo lo que entiendas. Corre otra vez.

El cuarto caso lo escribes tú, en el comentario, antes de pedirlo: un tipo `0.10`, un `null`, un importe negativo. Si Copilot lo propone y pasa sin que tú hayas dicho qué debía pasar, no lo celebres. Ha rellenado un camino que no estaba en el contrato. O lo conviertes en un comentario explícito y lo vuelves a ver fallar, o no entra en la suite.

## Cobertura, sin el número redondo

No pidas «100 % de cobertura». Pide el comportamiento de una rama: «un test para el `throw` de la línea 42, con este mensaje». La cobertura es un informe del runner. El test es una frase que puede ser falsa. Si el informe sube y no puedes explicar qué se ha roto al cambiar una línea, el informe no te ha servido.

Si el repo aún no tiene runner, el orden es el de [instalar Copilot](/guias/copilot-vscode-desde-cero) y, aparte, Vitest o Jest con un `npm test` que tú hayas visto fallar en la terminal. Copilot no sustituye esa salida. Un tick verde dentro del chat no es el runner.

La ficha entra en planes y créditos con la documentación de GitHub leída el mismo 1 de octubre. Esta página no los recalcula.
