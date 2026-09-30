---
name: ChatGPT
tagline: 'El asistente generalista más completo: escribe, programa, analiza archivos y navega por internet sin cambiar de pestaña.'
description: Análisis de ChatGPT en 2026 - plan gratuito, Go y Plus en España, y qué anuncia OpenAI de la familia GPT-6.
category: Productividad
rating: 9.1
scores:
  facilidad: 9.5
  resultados: 9.0
  precio: 8.0
  integraciones: 9.5
pricing:
  hasFreePlan: true
  from: 23
  currency: EUR
  period: mes
  note: Plus sigue en 23 € al mes en España (22,99 € en la App Store). Go, 7,99 € al mes en esa tienda; el pago en la web puede diferir. La ayuda de OpenAI cita Plus a 20 USD al mes.
website: https://chatgpt.com
pros:
  - Curva de aprendizaje casi nula, cualquiera lo usa el primer día
  - Ecosistema enorme - archivos, imágenes, voz, análisis de datos y GPTs personalizados en un solo sitio
  - El modo de análisis de datos ejecuta código real sobre tus hojas de cálculo
cons:
  - Sigue inventando datos concretos (fechas, cifras, referencias) con total aplomo
  - Los límites de uso del plan de pago no son transparentes
  - En textos largos en español arrastra un tono reconocible que hay que corregir a mano
  - Astra, Sol y Luna no llegan al mismo sitio - el plan, el chat estándar, Work, Codex y la app de escritorio no ofrecen lo mismo
bestFor: Quien quiere una sola herramienta que sirva para casi todo y no le apetece montar un stack de cinco suscripciones.
verdict: Sigue siendo la opción por defecto. Si solo vas a pagar una suscripción de IA este año, que sea esta.
amazonPicks:
  - search: libro prompt engineering español
    title: Manuales de ingeniería de prompts
    note: Si vas a usarlo a diario, un manual estructurado te ahorra semanas de prueba y error.
    price: 22
  - search: auriculares con microfono para videollamadas
    title: Auriculares con micrófono decente
    note: El modo de voz cambia por completo la experiencia, pero necesita un micro que no capte eco.
    price: 45
accent: brand
featured: true
pubDate: 2026-02-14
updatedDate: 2026-09-30
---

## Qué es exactamente ChatGPT en 2026

ChatGPT dejó de ser "un chat que escribe textos" hace tiempo. Hoy es una capa de trabajo donde subes un PDF de 200 páginas, le pides un resumen ejecutivo, le dices que cruce esos datos con un Excel y que te devuelva un gráfico. Todo eso ocurre en la misma conversación.

Esa amplitud es su mayor virtud y también la razón por la que mucha gente lo usa mal: se queda en pedirle correos y nunca descubre el 80% restante.

## Cómo lo hemos probado

Durante seis semanas lo usamos como única herramienta de IA en tres flujos de trabajo reales:

1. **Redacción**: 40 artículos de entre 800 y 2.000 palabras, midiendo cuánta edición manual necesitaba cada uno.
2. **Datos**: 15 hojas de cálculo de facturación, pidiendo limpieza, detección de anomalías y gráficos.
3. **Código**: refactorización de un proyecto pequeño en TypeScript, sin usar un editor con IA integrada.

Anotamos cada error factual y cada vez que hubo que reformular la petición más de dos veces.

## Dónde brilla de verdad

El análisis de datos es la función más infravalorada. Le das un CSV sucio, con fechas en tres formatos distintos y columnas duplicadas, y en un par de vueltas te devuelve el archivo limpio y el código que usó para limpiarlo. Eso último es clave: puedes auditar lo que ha hecho.

En redacción funciona muy bien como **primer borrador y como editor**, no como autor final. Pedirle que critique un texto que ya has escrito da mejores resultados que pedirle que lo escriba desde cero.

> Truco que nos ahorró más tiempo: en lugar de pedir "escribe un artículo sobre X", pedir "hazme cinco preguntas antes de escribir el artículo sobre X". La calidad sube de forma notable porque el contexto lo pones tú.

## Dónde falla

Las alucinaciones no han desaparecido. En nuestras pruebas, **el 18% de los datos numéricos concretos que citó sin acceso a internet eran incorrectos**, y siempre con un tono de absoluta seguridad. Para cualquier cosa publicable, verificar es obligatorio.

El segundo problema es el estilo. En español genera estructuras muy reconocibles: abuso de "en el mundo actual", frases de tres elementos, conclusiones que resumen lo ya dicho. Si publicas sin editar, se nota.

## La familia GPT-6, según OpenAI

Lo de arriba es la prueba de uso de esta ficha. No hemos vuelto a medir porcentajes con la familia GPT-6. Lo que sigue sale de anuncios públicos de OpenAI y de la cobertura del Dev Day, para quien elige entre gratuito, Go, Plus y Pro.

No es un solo modelo. **GPT-6 Astra** es el de más capacidad. En su anuncio, el despliegue llega a Plus, Pro, Business y Enterprise, y a la API como `gpt-6-astra`. El uso entra en la cuota de la suscripción; si no basta, se pueden comprar créditos. Pro, Business y Enterprise incluyen además **GPT-6 Astra Pro**. En Enterprise, OpenAI indica que el acceso puede llegar apagado hasta que un administrador lo active.

**GPT-6 Sol** y **GPT-6 Luna** son el escalón más rápido y barato. El 22 de septiembre de 2026 OpenAI los añadió a la familia. Están en ChatGPT Work y en Codex para Plus, Pro, Business, Enterprise y Edu. El plan gratuito y Go pueden usar Luna en la app de escritorio. En ese anuncio, Sol y Luna todavía no están en el chat estándar. En la API se llaman `gpt-6-sol` y `gpt-6-luna`.

**GPT-6.1 Sol**, anunciado el 29 de septiembre de 2026, es una mejora de Sol. OpenAI dice que se acerca a Astra en programación con agentes, uso del ordenador y trabajo profesional, a una quinta parte del precio estándar de entrada y de salida de Astra en la API (2 USD y 10 USD por millón de tokens). La entrada cacheada sale a 0,10 USD por millón. El identificador es `gpt-6.1-sol`. También va a ChatGPT Work y Codex para Plus y los mismos planes de pago superiores, y OpenAI indica que aún no está en el chat estándar.

**Dots** no es otro modelo de chat. [TechCrunch](https://techcrunch.com/2026/09/29/openai-launches-dots-its-bubbly-agentic-avatar/) recoge el anuncio del Dev Day del 29 de septiembre de 2026: un asistente impulsado por GPT-6 Astra que persigue objetivos en segundo plano, al margen de un chat concreto. Según esa cobertura, empieza en ChatGPT para usuarios Pro y Business Premium en mercados elegibles, y se lanza desde Codex o desde ChatGPT.

| Quién | Qué recoge el anuncio |
| --- | --- |
| Gratuito y Go | Luna en la app de escritorio. El anuncio de Astra no incluye estos planes. Sol y 6.1 Sol, tampoco. |
| Plus | Astra, dentro de la cuota. Sol, Luna y 6.1 Sol en ChatGPT Work y Codex, no en el chat estándar. |
| Pro | Lo de Plus, más Astra Pro. Dots, según TechCrunch, en mercados elegibles. |
| Work y Codex | Sol, Luna y 6.1 Sol para Plus y planes superiores (también Business, Enterprise y Edu). No sustituyen al chat estándar. |

Si el selector de tu cuenta no coincide con esta tabla, manda el selector. Los anuncios describen el acceso por plan y advierten de un despliegue por fases.

Fuentes: [GPT-6 Astra](https://openai.com/index/gpt-6-astra/), [GPT-6 Sol y Luna](https://openai.com/index/introducing-gpt-6-sol-and-luna/), [GPT-6.1 Sol](https://openai.com/index/introducing-gpt-6-1-sol) y la pieza de TechCrunch sobre Dots, enlazada arriba.

## Precio: cuándo compensa pagar

El plan gratuito sirve para probar y para uso esporádico. Entre el gratuito y Plus, OpenAI vende Go. En la App Store de España, [App Price Atlas](https://apppriceatlas.com/subscriptions/chatgpt-plus-monthly/countries/es/) anota Plus a 22,99 € al mes y [Go a 7,99 € al mes](https://apppriceatlas.com/subscriptions/chatgpt-go-monthly/countries/es/) (observación del 25 de septiembre de 2026). Aquí seguimos redondeando Plus a 23 €. El cobro en la web puede no coincidir con el de Apple, y la [ayuda de OpenAI](https://help.openai.com/en/articles/6950777-what-is-chatgpt-plus) sigue citando Plus a 20 USD al mes. Mira el total en la pantalla de pago.

Plus, a esos 23 €, compensa si cumples al menos dos de estas condiciones:

- Lo usas más de 30 minutos al día
- Trabajas con archivos (PDF, Excel, imágenes) de forma habitual
- Necesitas el modelo de más capacidad que OpenAI anuncia para Plus (hoy, GPT-6 Astra) y no te basta Luna en el escritorio

Si solo redactas correos sueltos, el plan gratuito te sobra. Go encaja si el gratuito se te queda corto y no vas a usar Astra, Work ni Codex.

## Alternativas que deberías considerar

Si tu uso principal es **escribir textos largos en español**, Claude devuelve una prosa más natural. Si lo que necesitas es **buscar información con fuentes verificables**, Perplexity está diseñado para eso y ChatGPT no. Y si programas todo el día, un asistente integrado en el editor como Copilot te dará más productividad por euro.
