---
title: Cómo planificar un viaje de una semana con ChatGPT (y no con un itinerario de influencer)
description: Presupuesto, trenes reales y tiempos muertos. El modelo rellena monumentos; tú tienes que obligarlo a usar horarios.
category: Tutorial
tags:
  - chatgpt
  - viajes
  - cotidianas
relatedTools:
  - chatgpt
  - perplexity
amazonPicks:
  - search: maleta cabina rígida 55cm
    title: Maleta de cabina
    note: Cuando el itinerario ya no es un PDF de 14 páginas, esto es lo único que hace falta comprar.
    price: 59
featured: false
pubDate: 2026-08-19
---

ChatGPT planifica viajes como si el mundo fuera un parque temático sin colas. Sirve si lo usas como **secretario**, no como guía. Esta guía es una semana en una ciudad europea saliendo de España.

## Datos que tienes que pegar tú

- Fechas fijas y si el vuelo o tren ya está comprado
- Presupuesto diario de comida y de ocio, por separado
- Ritmo: 2 sitios grandes al día o 5
- Restricciones: movilidad, niños, "odio museos"
- Barrio donde duermes, si ya hay hotel

Sin barrio de hotel, te pone el desayuno en un extremo y la cena en el otro.

## Prompt de la primera pasada

```
Eres un planificador práctico, no un copywriter de turismo.
Ciudad: [X]. Fechas: [Y]. Hotel en [barrio]. Presupuesto comida [€]/día.
Reglas:
- Máximo 2 visitas de pago por día
- Incluye tiempos de transporte a pie o en metro, en minutos
- Reserva 90 minutos de comida sentada, no "grab a bite"
- Cada día: mañana / tarde / noche
- Señala qué hay que reservar con antelación
- No inventes precios. Si no los tienes, pon "consultar"
- Devuelve también una lista de cosas que NO haríamos para no saturar
```

## Segunda pasada: la que evita el desastre

Copia el día 2 y pregunta:

```
Este día cruza la ciudad dos veces. Reescribe para que sea geográfico:
mañana en [zona A], tarde en [zona A o colindante], noche cerca del hotel.
Si un monumento cierra ese día de la semana, sustitúyelo y dilo.
```

Luego **Perplexity**: "horario real de [museo] el [fecha]". ChatGPT se inventa cierres por festivo. Perplexity cita la web del museo. Cruza los dos.

## Reservas

Pídele la lista de lo que exige entrada con hora. Tú reservas en la web oficial. No dejes que el chat te mande a un revendedor.

## Lo que no hace bien

Restaurantes "con encanto". Son los mismos 15 de siempre. Pide: "tres sitios de menú del día cerca de [barrio], rango [€], según reseñas recientes, y admite si no tienes fuentes". Si admite que no sabe, mejor.

El [análisis de ChatGPT](/herramientas/chatgpt) cubre cuándo el plan de pago aporta algo aquí (básicamente, si pegas PDFs de reservas).
