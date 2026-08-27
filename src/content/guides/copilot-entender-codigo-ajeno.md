---
title: Cómo usar Copilot para entender un repositorio que no has escrito tú
description: 'El orden correcto: mapa del repo, flujo de una petición, y solo después preguntar "qué hace esta función".'
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
---

El error clásico es abrir `index.ts`, seleccionar 400 líneas y preguntar "explícame esto". Copilot te cuenta un cuento coherente y equivocado. En un repo ajeno, el contexto es el directorio, no el archivo.

## 0. Lo que Copilot no ve

No indexa toda la organización si el archivo no está abierto o referido. Tampoco ve secretos (bien). Si el README miente —y muchos mienten— Copilot repetirá la mentira.

## 1. Mapa en 10 minutos, sin IA

Abre el árbol:

- `package.json` / `pyproject.toml` / `go.mod`: cómo se arranca
- `README`: si el comando de dev funciona, el README vale; si no, ignóralo
- carpeta `src` o `app`: dónde está el negocio
- `tests`: a veces documentan más que el código

Anota el comando que levanta el proyecto. Ejecútalo. Si no arranca, no preguntes a Copilot cómo "mejorarlo": pregunta cómo arranca.

## 2. Primera pregunta útil al chat

Con el README y el `package.json` abiertos:

```
Este repo: [nombre]. No me expliques programación.
1. ¿Cuál es el comando para desarrollarlo en local según los archivos abiertos?
2. ¿Dónde se define la ruta HTTP o el entrypoint?
3. ¿Qué carpeta parece dominio y cuál infraestructura?
Si no puedes verlo en los archivos, di "no está en contexto" y dime qué archivo abrir.
```

Esa última frase evita alucinaciones de arquitectura hexagonal que no existen.

## 3. Sigue un request, no una clase

Elige una acción de usuario: "login", "crear factura", "subir foto".

```
Sigue el flujo de [acción] desde la ruta hasta la base de datos.
Lista archivos por orden. No inventes capas que no veas.
```

Abre esos archivos. Segunda pasada, ya con ellos en contexto: "¿qué pasa si [caso borde]? Cita la línea."

## 4. Tests como oráculo

Si hay tests, ábrelos y pregunta: "estos tests, ¿qué comportamiento congelan? ¿Cuál está incompleto?" Copilot es mejor leyendo tests que leyendo comentarios.

## 5. Cuándo cambiar a ChatGPT

Repos sin tests, con 12 microservicios o con YAML de Kubernetes: el chat de Copilot se queda corto de contexto. Ahí sube un zip recortado a ChatGPT o Claude y pide el mismo mapa. El [análisis de Copilot](/herramientas/github-copilot) entra en el precio frente a no tener nada.
