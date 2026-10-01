---
title: Cómo usar Copilot para entender un repositorio que no has escrito tú
description: 'Primero el árbol y el comando que arranca. Después una sola acción de usuario, archivo por archivo. Si no está abierto, que lo diga.'
category: Tutorial
tags:
  - copilot
  - codigo
  - onboarding
relatedTools:
  - github-copilot
  - chatgpt
amazonPicks:
  - search: pizarra blanca magnetica escritorio
    title: Pizarra pequeña
    note: Dibujar el flujo request → servicio → base de datos a mano evita que Copilot te cuente una arquitectura imaginaria.
    price: 24
featured: false
pubDate: 2026-08-20
updatedDate: 2026-10-01
---

Abrir `index.ts`, seleccionar cuatrocientas líneas y preguntar «explícame esto» produce un cuento coherente. A veces coincide con el repo. A veces describe capas que no existen, con la misma seguridad. En un código que no has escrito, el contexto es lo que está abierto y lo que acabas de ejecutar. Esta guía es ese orden. No es una medición de aciertos.

## Diez minutos sin el chat

Mira el árbol antes de pedir un mapa:

- `package.json`, `pyproject.toml` o `go.mod`: cómo se instala y cómo se arranca.
- El README, solo si el comando de desarrollo funciona. Si no arranca, el README está desfasado y el chat lo va a repetir.
- Dónde está el negocio y dónde está el pegamento: `src`, `app`, `cmd`.
- `tests`. A menudo dicen qué se consideró importante, mejor que un comentario viejo.

Anota el comando y ejecútalo. Si no levanta, la primera pregunta no es «cómo lo mejoro». Es «qué falta para que este comando termine», con el error de la terminal pegado. Un arreglo de arquitectura sobre un proyecto que no arranca es ficción.

Dibuja en un papel, en cuatro cajas, lo que crees que pasa desde que alguien hace clic hasta que se guarda algo. Aunque esté mal. Así tienes con qué discutir la respuesta.

## La primera pregunta, con los archivos a la vista

Abre el README, si has decidido que vale, y el manifiesto. En VS Code, el chat en línea es Ctrl+I (Comando+I en Mac), según la [documentación de GitHub](https://docs.github.com/en/copilot/how-tos/chat-with-copilot/chat-in-ide) leída el 1 de octubre de 2026. Si el archivo ya está en una sesión de chat, la [ayuda de VS Code](https://code.visualstudio.com/docs/copilot/chat/inline-chat) dice que ese atajo puede irse al panel. Para un mapa, el panel viene mejor: cabe más que una línea.

```
Repo: [nombre]. No me expliques el lenguaje.
Con los archivos que tienes abiertos:
1. Comando para desarrollarlo en local.
2. Dónde se define la ruta HTTP o el punto de entrada.
3. Qué carpeta parece de dominio y cuál de infraestructura.
Si no está en los archivos abiertos, escribe «no está en contexto» y dime qué archivo abrir. No lo supongas.
```

Esa última frase es la útil. Una arquitectura hexagonal inventada se reconoce porque no cita un archivo que puedas abrir.

## Una acción, no una clase

Elige algo que haga una persona: entrar, crear una factura, subir una foto.

```
Sigue [acción] desde la ruta hasta donde se guarda.
Lista los archivos en orden. No añadas capas que no veas.
En cada archivo, la función o el símbolo, no un resumen del framework.
```

Abre esa lista. Segunda vuelta, ya con ellos abiertos: «qué pasa si [caso] falla. Cita archivo y símbolo. Si no está, dilo.»

Si hay tests de esa acción, ábrelos y pregunta qué comportamiento fijan y cuál está a medias. Un test que no falla nunca no documenta nada; el método para escribirlos está en [tests desde cero](/guias/copilot-tests-desde-cero).

## Cuándo el chat del editor se queda corto

Un mono-repo con doce servicios, o un YAML de orquestación que no cabe en lo que tienes abierto, no se entiende con una pregunta. Recorta un zip sin secretos —sin `.env`, sin claves— y pide el mismo mapa en otro chat, o sigue servicio por servicio. No subas credenciales para «que tenga contexto». Qué no pegar, también fuera del código, está en [qué no subir a un chat](/guias/que-no-subir-a-un-chat).

Los planes y el tope de completados del gratuito están en la [ficha de Copilot](/herramientas/github-copilot), documentación leída el 1 de octubre de 2026. Entender un repo gasta chat, no solo tabulador. Si el panel se corta a mitad de un flujo, no completes tú el final «porque se veía venir».
