export interface GearPick {
  asin?: string;
  search?: string;
  title: string;
  note: string;
  price?: number;
  currency?: string;
  category: string;
}

/**
 * Catálogo extra de afiliado: productos que recomendamos al margen de una reseña concreta.
 * Cada ficha de herramienta/guía ya aporta los suyos; estos cubren huecos del día a día.
 */
export const extraGear: GearPick[] = [
  {
    search: 'teclado mecanico silencioso oficina',
    title: 'Teclado mecánico silencioso',
    note: 'Si pasas el día dictando a la IA y corrigiendo, un teclado que no castigue las muñecas se nota a las dos semanas.',
    price: 89,
    category: 'Escritorio',
  },
  {
    search: 'webcam 4k autofocus streaming',
    title: 'Webcam 4K con enfoque automático',
    note: 'Los modos de visión de los asistentes funcionan mucho mejor con una imagen nítida que con la cámara del portátil.',
    price: 79,
    category: 'Vídeo',
  },
  {
    search: 'lampara escritorio led regulable CRI 95',
    title: 'Lámpara de escritorio con buen CRI',
    note: 'Para retocar imágenes generadas o calibrar color, la luz del techo miente. Una lámpara decente evita correcciones a ciegas.',
    price: 45,
    category: 'Imagen',
  },
  {
    search: 'cascos bluetooth cancelacion ruido oficina',
    title: 'Cascos con cancelación de ruido',
    note: 'Dictar prompts en voz alta en un espacio compartido es inviable sin aislamiento. Estos cambian el flujo.',
    price: 129,
    category: 'Audio',
  },
  {
    search: 'hub usb c 8 en 1 ethernet hdmi',
    title: 'Hub USB-C con HDMI y Ethernet',
    note: 'El monitor extra y una red estable importan más que cualquier prompt cuando trabajas con archivos grandes.',
    price: 39,
    category: 'Escritorio',
  },
];
