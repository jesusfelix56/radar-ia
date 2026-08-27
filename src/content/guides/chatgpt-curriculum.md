---
title: Cómo reescribir tu currículum con ChatGPT sin que parezca de plantilla
description: De logros medibles a un CV de una página. El modelo hincha; tú recortas. Incluye el prompt que evita el "proactivo y apasionado".
category: Tutorial
tags:
  - chatgpt
  - empleo
  - cotidianas
relatedTools:
  - chatgpt
  - claude
amazonPicks:
  - search: papel 100g blanco CV impresión
    title: Papel de 100 g para imprimir
    note: Si hay entrevista presencial, el PDF bonito se imprime. El de 80 g se transparenta.
    price: 8
featured: false
pubDate: 2026-08-21
---

ChatGPT produce currículums que parecen currículums: verbos de acción, "gestión de equipos", cero cifras. Los de RR. HH. los detectan. Esta guía sale un CV de una página con números tuyos.

## 1. Inventario, no redacción

En un archivo, por cada trabajo:

- Puesto, empresa, fechas
- 2-4 hechos con número: "pasé de 12 a 19 clientes", "bajé incidencias un 30%", "3 personas a cargo"
- Herramientas reales
- Por qué te fuiste, en 5 palabras honestas (no va al CV; va para que el modelo no invente una narrativa heroica)

Si no tienes números, estima en rango y márcalo `[aprox]`. No dejes que ChatGPT ponga "más de 100".

## 2. Prompt

```
Eres editor de currículums en España, no recruiter estadounidense.
Datos:
[inventario]

Oferta a la que opto:
[pega la oferta]

Reglas:
- Una página. Español de España. Tú.
- Cada viñeta = verbo + hecho + cifra si existe
- Prohibido: proactivo, apasionado, dinámico, "capacidad de trabajo en equipo", "orientado a resultados"
- No inventes herramientas ni títulos
- Orden: un extracto de 3 líneas, experiencia, formación, herramientas
- Al final, lista de 5 palabras de la oferta que he usado y 5 que no encajan (para que no fuerce el encaje)
```

## 3. Segunda pasada con Claude

Pega el resultado:

```
Quita hinchazón. Si una viñeta no tiene hecho observable, bórrala o deja un hueco [FALTA CIFRA].
No mejore el ritmo a costa de mentir.
```

Claude recorta mejor. ChatGPT genera. Los dos.

## 4. ATS y diseño

Un columna, Calibri o similar, sin iconos, sin foto si no te la piden. Tablas y barras de "85% inglés" rompen el parseo. El inglés se escribe: "B2 certificado, C1 no".

No pidas a ChatGPT un CV "creativo" en Canva para un puesto de contabilidad.

El [análisis de ChatGPT](/herramientas/chatgpt) no va de empleo; va de cuándo el modelo se inventa datos. Aquí aplica igual.
