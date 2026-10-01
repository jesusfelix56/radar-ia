---
title: Cómo escribir una reclamación al banco o a una aerolínea con Claude
description: Hechos, una petición y el cauce que publican el Banco de España y AESA. El borrador no elige el importe ni el artículo. Redacción de octubre de 2026.
category: Tutorial
tags:
  - claude
  - reclamaciones
  - cotidianas
relatedTools:
  - claude
  - perplexity
amazonPicks:
  - search: carpeta fuelle documentos acordeon
    title: Carpeta fuelle
    note: Reclamaciones se ganan con el PDF del cargo y la captura del error, no con la prosa.
    price: 11
featured: false
pubDate: 2026-08-19
updatedDate: 2026-10-01
---

Claude escribe cartas que suenan educadas. En una reclamación, esa educación pide «valorar la posibilidad» y el escrito se archiva. Esta página ata el borrador. No es asesoramiento. Una versión anterior decía que el recorte final era el 40 % del valor. No hay una medición detrás. El recorte se hace igual: fuera disculpas, fuera adjetivos, dentro los hechos.

Sirve para un cargo que no reconoces, una comisión que no estaba en el contrato o un vuelo cancelado. No sirve para inventar la norma. Si no pegas el artículo, el modelo no debe citarlo.

## La carpeta, antes del prompt

1. Qué pasó, en una frase.
2. Fechas y horas.
3. Importes, localizador, últimos cuatro dígitos. El número de cuenta entero no se pega en un chat: está en [qué no subir](/guias/que-no-subir-a-un-chat).
4. Qué has hecho ya: llamada, formulario, número de expediente.
5. Qué quieres, en una línea: la devolución de 84,30 €, no «una solución».

Si el punto 5 no sale, no escribas. No sabes qué estás pidiendo y el modelo lo va a suavizar.

## Banco: primero la entidad

El portal [Cliente Bancario del Banco de España](https://clientebancario.bde.es/pcb/es/menu-horizontal/podemosayudarte/consultasreclama/comorealizarrecl/), leído el 1 de octubre de 2026, pone como paso obligatorio un escrito ante los servicios, departamentos o defensores del cliente de la entidad. Una versión anterior de esta guía metía un «departamento de conducta» entre el banco y el Banco de España. El departamento de conducta de entidades que publica esa página es el del Banco de España, la dirección postal de Alcalá 48, no un escalón interno del banco. No empieces por ahí.

Si no estás de acuerdo con la respuesta, o no la hay, el mismo texto dice que puedes acudir al Banco de España: a los 15 días hábiles si el asunto es un servicio de pago; al mes, en otras reclamaciones, si eres consumidor; a los dos meses si no lo eres. También dice que no se admiten, para consumidores, las reclamaciones presentadas cuando ha pasado un año desde la reclamación a la entidad, y cita el artículo 18.1.e de la Ley 7/2017. Y que no se admite la reclamación si han pasado más de cinco años desde los hechos sin haber reclamado antes a la entidad.

Esos plazos van en tu calendario, no como una amenaza en el primer párrafo. En la carta a la entidad pides la devolución y dejas constancia. Guardas acuse, sello o la respuesta. Sin eso, el paso siguiente no arranca. El formulario y la sede electrónica se leen en esa página el día que reclamas; no los copies de un blog de 2019.

## Vuelo: primero la compañía

Las [preguntas frecuentes de AESA](https://www.seguridadaerea.gob.es/es/preguntas-frecuentes-derechos-pasajeros), con última modificación el 23 de marzo de 2026 y leídas el 1 de octubre de 2026, dicen que antes de acudir a AESA hay que reclamar a la aerolínea por sus canales y guardar el justificante. Hay que esperar al menos un mes. El plazo para reclamar a la compañía es de cinco años desde el vuelo. Para presentar la reclamación ante AESA, un año desde esa reclamación previa.

La misma página resume los derechos del Reglamento (CE) 261/2004 como información, asistencia y reembolso o transporte alternativo, y una compensación económica que puede corresponder según el caso. La cifra que escribe ahí es un rango de 250 a 600 euros. No la copies al borrador como si fuera la tuya: depende de las circunstancias, y Claude no las ha comprobado. Si no tienes el supuesto claro, pide la devolución de lo que pagaste y la asistencia, y deja la compensación en «la que corresponda según el reglamento», o calcúlala tú en la web de AESA.

Otras cosas que esa FAQ separa, y que el borrador no debe mezclar: el bono de la aerolínea exige tu aceptación expresa, y puedes pedir el dinero; el equipaje de mano cobrado en la puerta no es competencia de AESA, sino de consumo; la maleta facturada perdida se reclama a la compañía con el parte de irregularidad, y AESA no lleva ese convenio. Los daños en el hotel de destino tampoco entran en AESA.

El modelo de reclamación previa a la compañía está enlazado desde [Inicia tu reclamación](https://www.seguridadaerea.gob.es/es/ambitos/derechos-de-los-pasajeros/inicia-tu-reclamacion-con-aesa). Usar ese formulario no es lo mismo que enviar una carta literaria. Si la compañía ya tiene un cauce, úsalo. La carta de Claude puede servir para ordenar los hechos que luego pasas al formulario.

## El borrador

```
Redacta una reclamación en español de España. De tú, salvo que el formulario exija un tono neutro: entonces, sin tú ni usted, en frases cortas.
Hechos, sin adornos:
[lista]

Destinatario de ESTE escrito: [servicio de atención de la entidad / aerolínea]
Objetivo único: [devolución de X € / baja de la comisión / reembolso del billete]
No cites normas que no te haya pegado. Si te he pegado un plazo o un rango de AESA, no elijas una cifra dentro del rango.
Párrafo 1: hechos en orden, con fechas.
Párrafo 2: qué pido y para qué fecha.
Nada de «espero que comprendan», «no es por el dinero», ni amenazas de redes.
250 palabras como máximo.
Al final, lista de anexos que debo adjuntar, sin inventar documentos que no te he dicho.
```

Segunda pasada: «quita cualquier disculpa mía y cualquier adjetivo. Si una frase no es un hecho o una petición, bórrala.»

No firmes como letrado ni pongas un membrete que no es tuyo. Es un escrito tuyo. Si el asunto es más grande que un cargo o un vuelo, para y pregunta a quien pueda defenderlo. El estilo de Claude, en general, está en su [análisis](/herramientas/claude).
