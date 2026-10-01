---
title: Cómo hacer que el chat responda solo con el documento que tú subes
description: Un método para resumir, extraer obligaciones o comparar versiones sin que el modelo rellene huecos. Con lo que publican Claude, ChatGPT y Gemini sobre archivos.
category: Tutorial
tags:
  - documentos
  - claude
  - chatgpt
  - gemini
relatedTools:
  - claude
  - chatgpt
  - gemini
pubDate: 2026-10-01
---

Pegar un contrato y pedir «dime qué riesgo tengo» mezcla dos trabajos: leer el archivo y opinar sobre tu vida. El segundo se lo inventa con facilidad. Esta guía se queda en el primero. Es un método de redacción. No hemos medido un porcentaje de acierto nuevo sobre documentos largos: las pruebas antiguas, si las hay, siguen en la ficha de cada herramienta.

Si el archivo identifica a un cliente, a un paciente o a un menor, para antes y lee [qué no subir a un chat](/guias/que-no-subir-a-un-chat). El método de abajo no arregla un documento que no debías pegar.

## Qué permite cada herramienta, según su web

Lo leímos el 1 de octubre de 2026. El cupo y el formato pueden cambiar; manda la página, no este párrafo.

**Claude.** En [claude.com/pricing](https://claude.com/pricing), el plan gratuito incluye proyectos, con un tope de cinco. Pro, Max 5x y Max 20x los marcan como disponibles, sin ese tope en la tabla. También marcan creación y edición de archivos con ejecución de código en todos esos planes. La ventana de contexto figura como «hasta 1 millón», y la propia tabla añade que varía según el modelo. No traduzcas ese «hasta» en «cualquier PDF de 1 millón de tokens entra siempre».

**ChatGPT.** La [FAQ de subida de archivos](https://help.openai.com/en/articles/8555545) dice que se pueden subir documentos, hojas y presentaciones en el plan gratuito y en los de pago, con límites según el plan, en la web y en las apps móviles compatibles. En los planes que no son Enterprise, y para documentos, la misma página dice que la recuperación es de texto: el chat extrae el texto digital y descarta las imágenes. Una tabla que solo está dibujada en un escaneo no va a salir bien por esa vía.

La [ayuda de análisis de datos](https://help.openai.com/en/articles/8437071-advanced-data-analysis) recomienda hojas con nombres de columna claros y un registro por fila, y avisa de que los valores exactos de una tabla hecha con imágenes, de un escaneo o de un diseño visual complejo no salen de forma fiable. Si el número importa, exporta a CSV o a una hoja de cálculo. La guía de [facturas en Excel](/guias/chatgpt-excel-facturas) parte de ese caso.

**Gemini.** La página española de [suscripciones](https://gemini.google/es/subscriptions/?hl=es) habla de subir archivos de hasta 1.500 páginas en el relato de los planes de pago, y de una ventana de 1 millón de tokens al describir Google AI Pro. Es copia de esa página, no una medición nuestra. Gemini dentro de Documentos aparece en el plan Pro de esa misma página; dentro de Gmail, desde Plus. Si el archivo ya vive en Drive, trabajar ahí evita un segundo pegado en otra cuenta.

## El prompt que ata la respuesta al archivo

Sustituye los corchetes. No añadas tu caso real si el documento ya lo contiene.

```
Trabaja solo con el archivo adjunto. Si algo no está en el archivo, escribe «no consta» y no lo completes con conocimiento general.

1. Di qué documento crees haber leído: título, número de páginas o de hojas, y fecha si aparece.
2. Responde a esta pregunta: [una sola pregunta].
3. Después de cada afirmación, cita el fragmento literal y dónde está (página, cláusula o celda).
4. Lista al final lo que has buscado y no has encontrado.
```

Una pregunta por turno. «Riesgos, resumen, traducción y correo al cliente» en el mismo mensaje produce cuatro trabajos flojos. La [guía de prompts](/guias/prompts-que-funcionan) explica por qué, con la estructura de cinco bloques. Aquí el bloque que no se negocia es la cita literal.

Cuando la respuesta llegue, abre el archivo en la página que te ha citado. Si la cita no está, o está retocada, esa afirmación no entra en tu nota. Este paso es el mismo que en [comprobar una cifra](/guias/comprobar-una-cifra-de-ia): el enlace o la página no cuentan hasta que los lees.

## Tres usos que sí salen con este método

### Sacar obligaciones de un contrato

Pide una tabla con tres columnas: obligación, quién la cumple, cita literal. Prohíbe la columna «comentario» en la primera pasada. El comentario lo escribes tú cuando ya has visto la cláusula. En la ficha de [Claude](/herramientas/claude) este uso está entre los que la ventana larga facilita. El método de la cita vale igual en otro chat.

### Comparar dos versiones

Sube las dos e identifica cada una por nombre de archivo. Pide solo diferencias sustantivas, con la frase de la versión A y la frase de la versión B. «Cuál es mejor» es una opinión y se pide en un segundo mensaje, cuando la lista de diferencias ya está revisada.

### Resumir una transcripción de reunión

Pega la transcripción, no un resumen de la transcripción. Pide acuerdos, responsables y plazos, y «no consta» cuando el audio no lo dice. Inventar al responsable que nadie nombró es el fallo típico. La guía del [acta con Gemini](/guias/gemini-acta-reunion) baja al caso de Docs.

## Lo que este método no arregla

- Un PDF escaneado sin texto. ChatGPT, en la FAQ citada, descarta las imágenes del documento en los planes que no son Enterprise. Pásalo antes por un OCR que puedas revisar, o copia a mano las cláusulas que importan.
- Una hoja con celdas combinadas y títulos decorativos. Límpiala tú, o pide primero que te diga qué columnas ve y espera a decir «adelante», como en la guía de facturas.
- Un archivo que no deberías haber subido. Borrar el chat después, si la herramienta lo permite, reduce exposición. No deshace el pegado. La AEPD recomienda eliminar el historial con frecuencia cuando la plataforma lo permite; el enlace está en la otra guía.
- La sensación de que, como hay comillas, la cita es fiel. Las comillas también se fabrican. La comprobación es abrir la página.

## Cómo guardar el resultado

Copia a tu documento la tabla y, debajo, la fecha, el nombre del archivo y la herramienta. Si publicas algo a partir de ese trabajo, la responsabilidad del texto es tuya. Un aviso del tipo «borrador extraído con un asistente y revisado contra el PDF el día tal» deja el rastro claro para quien lo lea dentro de seis meses, cuando nadie recuerde qué versión se subió.
