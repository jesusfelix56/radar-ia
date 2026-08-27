---
title: Cómo usar Gemini para vaciar Gmail de hilos que ya no importan
description: Un flujo de una tarde para resumir, etiquetar y archivar correo antiguo en Google Workspace, sin borrar nada por accidente.
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
---

Gemini dentro de Gmail es el único motivo serio para pagarlo si ya vives en Google. Esta guía no es "pídele que te redacte un correo". Es vaciar el atasco de 3.000 no leídos.

Hazlo en una cuenta que no sea la del trabajo si tu empresa bloquea Gemini. Y no borres: archiva. Borrar es irreversible y la IA se equivoca de hilo.

## 1. Activa Gemini en Gmail

En gmail.com, el panel lateral de Gemini tiene que estar visible. Si no sale, tu cuenta no tiene el plan o el admin de Workspace lo ha desactivado. No hay truco.

## 2. Trabaja por remitente, no por "todo mi correo"

El error es pedir "resúmeme el correo de 2024". Se inventa prioridades. El flujo que funciona:

1. Busca `from:amazon.es newer_than:365d`
2. Abre un hilo representativo
3. En Gemini: "Lista los pedidos de este remitente en los últimos 12 meses que no estén entregados o que tengan devolución abierta. Una línea por hilo, con fecha y asunto."

Repite con banco, Seguridad Social, colegio, el proveedor grande. Cinco búsquedas cubren el 80% del ruido.

## 3. El prompt de triaje

Cuando ya tienes la lista:

```
Clasifica estos hilos en tres cubos:
A) Requieren acción mía esta semana
B) Guardar por si Hacienda / garantía
C) Ruido (newsletters, avisos ya resueltos)

No metas en C nada con importe, plazo o "requerimiento".
Devuelve tabla: asunto, fecha, cubo, acción de una frase.
```

Tú ejecutas. Gemini no pulsa Archivar por ti de forma fiable en bloque; si tu interfaz ofrece acciones, revísalas una a una la primera vez.

## 4. Filtros para que no se vuelva a llenar

Con la lista C, crea filtros de Gmail: `from:newsletter@...` → Saltar bandeja, categorizar Promociones. Gemini te redacta el criterio; el filtro lo creas tú en Configuración → Filtros. Ese paso manual evita que "la IA gestione el correo" y archive un requerimiento de Hacienda.

## 5. Lo que Gemini hace mal

Hilos largos con 40 respuestas: resume el último mensaje y se olvida del acuerdo del mensaje 12. Si el hilo es una negociación, ábrelo entero.

Correo en gallego, catalán o con PDF escaneado: baja mucho. Ahí [ChatGPT](/herramientas/chatgpt) con el PDF subido rinde más.

La ficha de [Gemini](/herramientas/gemini) entra en cuándo el plan de pago compensa si solo usas Gmail.
