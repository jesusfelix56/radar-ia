---
title: Cómo traducir un documento largo con Claude sin que cambie el sentido
description: Glosario, cláusulas sueltas y un pase que solo lista omisiones. Para borradores internos. La traducción oficial sigue siendo de traductor jurado.
category: Tutorial
tags:
  - claude
  - traduccion
  - documentos
relatedTools:
  - claude
  - chatgpt
amazonPicks:
  - search: diccionario uso espanol
    title: Diccionario de uso
    note: Claude no sustituye saber si "shall" en ese contrato es obligación o futuro. El diccionario jurídico sí ayuda.
    price: 42
featured: false
pubDate: 2026-08-25
updatedDate: 2026-10-01
---

Esta guía es un método de redacción. No es una prueba de traducción ni un ranking. Una versión anterior decía que Claude era el mejor de los que habíamos probado para prosa en español. Esa frase no se sostiene aquí: la [ficha](/herramientas/claude) tiene notas antiguas de redacción, y esta página no las convierte en una nota de traducción jurídica. En un contrato, una prosa más lisa es un riesgo. Alisa, aclara y puede cambiar una obligación.

El trabajo sirve para un borrador interno: un contrato que quieres entender, un manual, un acta. No sirve para el PDF que vas a presentar en un registro.

## El glosario es el encargo

Diez o treinta términos, escritos por ti antes de pegar una cláusula. Si no los tienes, el modelo elige el sinónimo más frecuente, que en un contrato suele ser el peor.

- `landlord` → arrendador, no «casero»
- `notice` → preaviso, no «aviso»
- `shall` → «deberá», cuando en ese documento es un mandato y no un futuro
- Nombres propios, marcas y números de expediente, sin traducir

```
Vas a traducir de [idioma] a español de España. No eres abogado ni traductor jurado.
Glosario obligatorio:
[lista]
Reglas: no suavices obligaciones. No corrijas el original para que «se entienda mejor».
Si hay dos lecturas, marca [AMBIGUO] y copia las palabras originales entre paréntesis.
Traduce solo la sección que te pego. No adelantes el resto. No resumas.
```

«Shall» no tiene una traducción única. Por eso va en tu glosario, no en una regla universal del prompt. Si no sabes qué fuerza tiene en esa cláusula, márcala y pregúntale a quien lleve el contrato. No le pidas al modelo que decida.

## Una sección cada vez

Un contrato entero, de un golpe, es la forma más fácil de perder el glosario a mitad. Pega un artículo o una cláusula. Cuando acabes, pide el control antes de seguir:

```
Compara el original y la traducción de esta cláusula.
Lista solo: omisiones, añadidos y cambios de modalidad (puede / debe / deberá).
No reescribas todavía. Cita la frase original y la traducida, en pares.
```

Tú tachas. Luego: «corrige solo los añadidos y las omisiones que te marco. No toques el resto.» Si en la página doce el modelo ha vuelto a decir «casero», no es un descuido de estilo. Es que el glosario se ha caído. Vuelve a pegarlo.

Guarda el original al lado, no en otro chat. El pase de control sin el texto fuente es un resumen más.

## Cuándo el borrador no basta

El Ministerio de Asuntos Exteriores explica en su [página de traductores e intérpretes jurados](https://www.exteriores.gob.es/es/ServiciosAlCiudadano/Paginas/Traductores-interpretes-jurados.aspx), leída el 1 de octubre de 2026, que las traducciones de una lengua extranjera al castellano y al revés tienen carácter oficial si las hace quien tiene el título que otorga el Ministerio, y que esa persona certifica con firma y sello la fidelidad y exactitud. El listado se consulta en el [buscador de la Oficina de Interpretación de Lenguas](https://www.exteriores.gob.es/es/ServiciosAlCiudadano/Paginas/Buscador-STIJ.aspx). La Oficina no intermedia encargos ni hace traducciones juradas particulares.

Certificados, títulos y escritos que un organismo te pida «traducidos» entran ahí. Claude puede dejarte un borrador para entender el papel el fin de semana. No firmes ese borrador como si fuera la traducción oficial, ni le pongas un sello que no tienes.

Para catalán, gallego y euskera, la misma página del Ministerio dice que desde 1992 no convoca esas pruebas, porque la competencia está en la comunidad autónoma, y enlaza los registros. No uses el buscador del Ministerio para un idioma que esa página te manda a otro sitio.

Si el documento trae datos personales de un tercero, el límite de qué pegar está en [qué no subir a un chat](/guias/que-no-subir-a-un-chat). Un contrato de alquiler, además, tiene una guía propia: [leer un contrato de arrendamiento](/guias/claude-contratos-alquiler).

[Análisis de Claude](/herramientas/claude). El cupo con PDF largos está en la ficha, con la tarifa leída el 1 de octubre de 2026. Esta página no lo recalcula.
