---
title: Qué no subir a un chat de IA, y qué poner en su lugar
description: Lista práctica a partir del decálogo de la AEPD y de los controles públicos de ChatGPT y Claude. Redacción de octubre de 2026, sin prueba de uso nueva.
category: Guía
tags:
  - privacidad
  - aepd
  - chatgpt
  - claude
relatedTools:
  - chatgpt
  - claude
  - gemini
pubDate: 2026-10-01
---

Esta guía es de redacción. Ordena lo que publican la Agencia Española de Protección de Datos y los propios fabricantes. No hay una prueba de uso nueva, ni una medición de «cuántas veces se filtra un dato». Si el caso es de tu empresa, manda la política interna. Esto no es un dictamen.

## Lo que la AEPD pide que no pegues

El 27 de enero de 2026 la AEPD publicó el decálogo [«Cuidado con lo que le confIAs»](https://www.aepd.es/prensa-y-comunicacion/notas-de-prensa/aepd-publica-decalogo-recomendaciones-proteger-privacidad-al-usar-ia). El PDF está en [recomendaciones-ia-aepd.pdf](https://www.aepd.es/guias/recomendaciones-ia-aepd.pdf). La nota de prensa resume el consejo en una frase útil: no compartas con la herramienta datos personales ni información delicada.

En esa lista entran, entre otros:

- Nombre completo, dirección, teléfono y DNI o NIE.
- Una imagen tuya, o de otra persona.
- Detalles médicos, financieros o contractuales.
- Geolocalización o el sitio concreto en el que has estado.

La Agencia pide describir un caso ficticio cuando quieras plantear una situación. El objetivo es que la respuesta no dependa de detalles que permitan identificarte.

En el trabajo, el mismo texto pide seguir la política de la organización y no incluir información confidencial de la entidad, de su personal o de sus clientes. Un chat personal, aunque pagues la suscripción de tu bolsillo, no convierte ese material en «uso doméstico» por el hecho de pegarlo.

## Imágenes de otras personas

La nota de la AEPD es explícita: no uses imágenes en las que aparezcan otras personas para generar contenido nuevo, y menos si son menores. La Agencia dice que esas prácticas pueden derivar en una infracción de protección de datos e incluso en un delito. El aviso vale también para el uso que parece un juego.

Si el encargo es un retrato, una foto de producto con modelo o un clon de voz, el camino es un permiso documentado de esa persona, no un recorte de una red social. En la ficha de [ElevenLabs](/herramientas/elevenlabs) el punto legal ya está separado del de la calidad de la voz.

## La respuesta convincente sigue siendo tuya de comprobar

El mismo decálogo dice que la herramienta puede parecer que entiende y que empatiza, y que no lo hace. Si necesitas asesoramiento profesional, emocional o psicológico, la AEPD recomienda acudir a un profesional cualificado.

También pide contrastar en otras fuentes la veracidad de lo que te devuelve el chat. Esa parte tiene guía propia: [cómo comprobar una cifra](/guias/comprobar-una-cifra-de-ia).

Sobre menores, la Agencia pide a madres, padres y tutores explicar qué datos no conviene revelar. Un chatbot no es un juguete que se deja solo.

## Qué hace cada fabricante con el texto, según su propia ayuda

Desactivar el entrenamiento no borra el riesgo de haber pegado un DNI. Solo cambia una palanca que el fabricante documenta. Léela antes de abrir el chat del trabajo.

### ChatGPT

La [ayuda de OpenAI sobre controles de datos](https://help.openai.com/en/articles/7730893-data-controls-faq) explica el interruptor «Improve the model for everyone», en Ajustes, Controles de datos. Con la sesión iniciada, si lo apagas, las conversaciones siguen en el historial y, según esa página, no se usan para entrenar ChatGPT. El ajuste vale para toda la cuenta.

El chat temporal es otra vía. OpenAI indica que no aparece en el historial, no crea recuerdos y no se usa para mejorar los modelos, y que la conversación se conserva 30 días por seguridad y después se borra. La misma ayuda avisa de que un pulgar arriba o abajo puede enviar la conversación asociada a entrenamiento si das esa opinión. Apagar el interruptor y luego valorar una respuesta no es el mismo gesto.

En un plan personal, ese interruptor también cubre las tareas de Codex, según la FAQ. Codex tiene un ajuste aparte para entrenar con entornos completos. Cambiar el de ChatGPT no cambia ese otro.

### Claude

En los planes de consumo (gratuito, Pro y Max), el [centro de privacidad de Anthropic](https://privacy.claude.com/en/articles/10023580-is-my-data-used-for-model-training) dice que usarán chats y sesiones de código para mejorar los modelos si dejas activada esa opción. El interruptor está en Ajustes, Privacidad, «Help improve our AI models». La [guía para cambiarlo](https://privacy.claude.com/en/articles/12109829-how-do-i-change-my-model-improvement-privacy-settings) está fechada el 3 de agosto de 2026.

Si lo apagas, Anthropic dice que no usará los chats y sesiones nuevos para entrenamientos futuros. Lo que ya entró en un entrenamiento en marcha, o en un modelo ya entrenado, sigue ahí. Los chats marcados por sus clasificadores de seguridad pueden usarse para modelos internos de confianza y seguridad aunque hayas apagado el interruptor.

En productos comerciales (Team, Enterprise y la API), la [página de datos de entrenamiento comercial](https://privacy.claude.com/en/articles/7996885-how-do-you-use-personal-data-in-model-training) dice que no usan tus chats para entrenar modelos salvo que entres en un programa en el que lo aceptes, o que envíes un informe explícito (por ejemplo, un pulgar).

La página de [precios de Claude](https://claude.com/pricing) marca «model training» como opt-out en los planes individuales y como «none by default» en Team y Enterprise. El matiz importa: en el consumo, la opción existe y hay que mirarla; en el plan de empresa, el punto de partida publicado es no entrenar.

### Gemini y el correo

Si el material ya está en Gmail o en Drive, pegarlo en otro chat lo saca de la cuenta de Google y lo mete en otro proveedor. La página española de [suscripciones de Gemini](https://gemini.google/es/subscriptions/?hl=es), leída el 1 de octubre de 2026, lista Gemini dentro de Gmail a partir de Google AI Plus, y dentro de Documentos en el plan Pro. Trabajar ahí no dispensa de la lista de la AEPD: un contrato con DNI sigue siendo un contrato con DNI.

## Qué poner en el chat en lugar del dato real

1. Cambia nombres, importes exactos y direcciones por otros inventados, y dilo en la primera línea: «los datos son ficticios».
2. Pide la estructura, no el documento. «Redáctame la escaleta de un correo de reclamación de una factura» se puede hacer sin el PDF del cliente.
3. Si hace falta el documento, súbelo en la herramienta que tu organización haya autorizado, con el entrenamiento desactivado, y borra el chat al terminar si la cuenta lo permite. La AEPD recomienda revisar si la plataforma permite eliminar conversaciones y hacerlo con frecuencia.
4. Para un texto largo que sí puedes compartir, la guía de [trabajar solo con el documento](/guias/trabajar-solo-con-el-documento) explica cómo pedir citas literales del archivo, sin mezclarlo con datos de otra persona.

## Antes de pegar, cuatro preguntas

- ¿Identifica a alguien, aunque sea por la combinación de cargo, ciudad y fecha?
- ¿Es de un cliente, de un paciente, de un alumno o de un menor?
- ¿La cuenta es la de la empresa, o la personal con el interruptor de entrenamiento sin mirar?
- ¿Podría salir el mismo resultado con un caso inventado?

Si alguna respuesta te deja incómodo, no pegues. Reescribe el caso. El modelo no necesita tu DNI para explicarte cómo está organizada una cláusula.
