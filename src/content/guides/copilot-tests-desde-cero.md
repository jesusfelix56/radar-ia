---
title: Cómo pedirle a Copilot que escriba tests (y no un teatro verde)
description: 'El orden: comportamiento actual, un test que falle, implementación. Copilot adora tests que no fallan nunca.'
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
---

Copilot genera `expect(true).toBe(true)` disfrazado. El truco es no pedirle "tests para este archivo". El truco es **TDD asistido**.

## 1. Describe el comportamiento en un comentario

En `iva.test.js`:

```js
// calcularIva(100, 0.21) => 121
// calcularIva(100, 0) => 100
// calcularIva('x') => throw TypeError
```

Luego: `Ctrl+I` — "implementa estos tres tests con vitest, sin implementar calcularIva".

## 2. Ejecuta, mira el rojo

Si los tests ya pasan, están mal. El código de producción no existe o Copilot ha implementado de más. Borra la implementación si se ha adelantado.

## 3. Implementa lo mínimo

Abre `iva.js`, pide: "haz pasar los tests. No añadas otros casos." Tab. Corre el runner.

## 4. El cuarto test lo escribes tú

El caso borde que Copilot no vio (`-1`, `null`, IVA 0.105). Si Copilot lo genera y pasa a la primera sin que tú lo hayas pensado, desconfía: ha copiado un camino feliz.

## 5. Cobertura

No pidas "100% coverage". Pide: "un test de la rama de error de la línea 42". Cobertura es un número; el test de la rama es un comportamiento.

Repos sin runner configurado: primero [instala Copilot](/guias/copilot-vscode-desde-cero), luego configura Vitest o Jest. Copilot no sustituye `npm test` en verde de verdad.

[Análisis de Copilot](/herramientas/github-copilot).
