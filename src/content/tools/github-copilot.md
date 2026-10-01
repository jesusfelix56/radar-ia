---
name: GitHub Copilot
tagline: Autocompletado con contexto de todo tu proyecto, integrado en el editor que ya usas.
description: Reseña de GitHub Copilot en 2026 - cuánto tiempo ahorra de verdad, en qué lenguajes rinde mejor y si compensa frente a las alternativas.
category: Código
rating: 8.5
scores:
  facilidad: 9.2
  resultados: 8.4
  precio: 8.5
  integraciones: 9.0
pricing:
  hasFreePlan: true
  from: 10
  currency: EUR
  period: mes
  note: Docs de GitHub leídas el 1 de octubre de 2026. Pro son 10 USD al mes y 1.500 créditos de IA (1.000 base y 500 flex). El gratuito limita el autocompletado a 2.000 completados al mes. Copilot Student es gratis para estudiantes verificados.
website: https://github.com/features/copilot
pros:
  - Se integra en VS Code, JetBrains y Neovim sin fricción
  - El autocompletado de código repetitivo es donde ahorra tiempo de verdad
  - El plan gratuito para estudiantes y open source es una barbaridad de valor
cons:
  - Sugiere código plausible pero incorrecto con frecuencia suficiente para exigir revisión constante
  - Rinde notablemente peor en lenguajes o frameworks poco representados
  - Puede generar dependencia - se pierde memoria muscular de la sintaxis
bestFor: Desarrolladores que escriben código a diario en lenguajes mainstream y quieren eliminar el trabajo repetitivo.
verdict: El mejor euro por hora ahorrada si programas todos los días. No sustituye a saber programar, lo amplifica.
amazonPicks:
  - search: teclado mecanico programador
    title: Teclado mecánico
    note: Vas a escribir menos código pero a revisar mucho más. La comodidad de lectura y edición importa.
    price: 89
  - search: monitor ultrawide 34 pulgadas
    title: Monitor ultrapanorámico
    note: Ver el diff y el archivo original a la vez es la forma más rápida de auditar lo que sugiere la IA.
    price: 399
  - search: Clean Code Robert Martin
    title: Clásicos de arquitectura de software
    note: El criterio para saber si una sugerencia es buena no lo da la IA. Lo da esto.
    price: 42
accent: lime
featured: false
pubDate: 2026-04-08
updatedDate: 2026-10-01
---

## Qué hace bien

Copilot no es un chat de programación, es un autocompletado que ha leído tu proyecto entero. Escribes el nombre de una función y aparece la implementación completa, con el estilo y las convenciones que ya usas en el resto de archivos.

Su terreno natural es el código aburrido: mapeos entre estructuras de datos, tests unitarios de casos evidentes, validaciones de formularios, configuraciones repetitivas. Ahí acierta a la primera con una frecuencia altísima.

## Cómo lo hemos medido

Cronometramos 20 tareas de desarrollo idénticas, ejecutadas con y sin Copilot activo, en TypeScript, Python y Go.

| Tipo de tarea | Ahorro medio |
| --- | --- |
| Tests unitarios | 41% |
| Código repetitivo (CRUD, mapeos) | 38% |
| Lógica de negocio nueva | 12% |
| Depuración de un fallo existente | 4% |
| Diseño de arquitectura | 0% |

El patrón se repite en todos los asistentes de código que hemos probado: **cuanto más mecánica es la tarea, mayor es el ahorro**. Para pensar, no ayuda.

## El riesgo del código plausible

El fallo más peligroso no es el código que no compila, sino el que compila y parece correcto. En nuestras pruebas encontramos casos de:

- Manejo de errores omitido silenciosamente
- Condiciones de borde incorrectas en bucles
- Uso de una API real pero con parámetros de una versión antigua

Ninguno rompía el programa de forma evidente. Todos habrían llegado a producción sin una revisión atenta.

> Regla que aplicamos en el equipo: si no entiendes por completo la sugerencia, no la aceptas. El tiempo que ahorras aceptando código que no comprendes lo pagas multiplicado por diez en la siguiente incidencia.

## Lenguajes donde rinde peor

La calidad cae de forma perceptible en lenguajes con menos código público disponible y en frameworks muy recientes. Si trabajas con algo de nicho, la experiencia será notablemente peor que la que cuentan las reseñas escritas desde proyectos en React o Python.

## ¿Compensa el precio?

Si programas de forma profesional, la cuenta es fácil: ahorrando media hora a la semana ya se paga. El ahorro de la tabla de arriba es de aquella medición. No lo hemos vuelto a cronometrar con el sistema de créditos de 2026.

## Planes publicados en la documentación

Cifras de [Plans for GitHub Copilot](https://docs.github.com/en/copilot/get-started/plans), leídas el 1 de octubre de 2026. Dólares al mes.

| Plan | Precio | Créditos de IA al mes | Autocompletado |
| --- | --- | --- | --- |
| Free | 0 USD | Un cupo. La tabla no publica la cifra. | 2.000 completados al mes. El modelo se elige en automático. |
| Student | 0 USD, estudiantes verificados | Un cupo, sin cifra en la tabla | La página de planes no le pone el tope de 2.000. |
| Pro | 10 USD | 1.500 en total: 1.000 base y 500 flex | El tope de 2.000 está escrito para el plan Free. |
| Pro+ | 39 USD | 7.000 (3.900 base y 3.100 flex) | Igual que la fila anterior: el tope explícito es el del gratuito. |
| Max | 100 USD | 20.000 (10.000 base y 10.000 flex) | El mismo matiz. |

Los créditos base se gastan antes. El tramo flex se aplica solo, en el IDE, en GitHub.com y en la CLI, según la [página de facturación por uso](https://docs.github.com/en/copilot/concepts/billing/usage-based-billing-for-individuals). Free y Student eligen modelo en automático. Docentes verificados y mantenedores de proyectos de código abierto populares pueden optar a Pro sin pagar: la documentación lo dice como posibilidad, no como un alta automática.

En los planes de organización, la misma documentación sí escribe que el autocompletado y las sugerencias de siguiente edición no se cobran en créditos y siguen ilimitados. Business sale a 19 USD por asiento al mes (1.900 créditos por usuario) y Enterprise a 39 USD (3.900). Ese párrafo es de los planes de empresa. No lo copies tal cual al Pro individual.

La frase antigua de esta ficha, «el autocompletado no gasta créditos», encaja con lo que GitHub escribe para los planes de pago de organización. En el individual, lo que la página deja cerrado es el tope de 2.000 completados en Free y el cupo de créditos del chat y del agente. Si tu panel muestra otro contador, manda el panel.

## Cómo decidir esta semana

1. Empieza por Free si tu cuenta no tiene un asiento de empresa. Gasta los 2.000 completados en el lenguaje en el que trabajas de verdad.
2. Pro, a 10 USD, cuando el corte del gratuito te para y quieres elegir modelo. Mira los 1.500 créditos en el panel, no en un resumen de terceros.
3. Pro+ o Max cuando ese cupo se acaba en la primera quincena. Subir de precio no revisa el código por ti: la regla de no aceptar lo que no entiendes sigue en la sección de más arriba.
4. Si estudias con verificación, mira Copilot Student antes de pagar. Si das clase o mantienes un proyecto popular, mira la elegibilidad de Pro gratuito en la misma documentación.

Las guías de [VS Code desde cero](/guias/copilot-vscode-desde-cero) y de [tests](/guias/copilot-tests-desde-cero) siguen siendo el cómo. Esta sección es solo la tarifa.
