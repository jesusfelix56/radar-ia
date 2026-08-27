import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const amazonProduct = z
  .object({
    /** ASIN exacto del producto. Tiene prioridad sobre `search`. */
    asin: z.string().optional(),
    /** Alternativa al ASIN: enlaza a una búsqueda de Amazon ya etiquetada. */
    search: z.string().optional(),
    title: z.string(),
    note: z.string(),
    price: z.number().optional(),
    currency: z.string().default('EUR'),
  })
  .refine((product) => Boolean(product.asin || product.search), {
    message: 'Cada producto de Amazon necesita un `asin` o un `search`.',
  });

const tools = defineCollection({
  loader: glob({ base: './src/content/tools', pattern: '**/*.md' }),
  schema: z.object({
    name: z.string(),
    tagline: z.string(),
    description: z.string(),
    category: z.enum([
      'Escritura',
      'Imagen',
      'Vídeo',
      'Código',
      'Audio',
      'Productividad',
      'Investigación',
    ]),
    /** Nota global sobre 10. Alimenta el ranking y el JSON-LD de reseña. */
    rating: z.number().min(0).max(10),
    scores: z.object({
      facilidad: z.number().min(0).max(10),
      resultados: z.number().min(0).max(10),
      precio: z.number().min(0).max(10),
      integraciones: z.number().min(0).max(10),
    }),
    pricing: z.object({
      hasFreePlan: z.boolean(),
      from: z.number().nullable(),
      currency: z.string().default('EUR'),
      period: z.enum(['mes', 'año', 'uso']).default('mes'),
      note: z.string().optional(),
    }),
    website: z.string(),
    /** Enlace de afiliado del propio software, si existe programa. */
    affiliateUrl: z.string().optional(),
    pros: z.array(z.string()).min(2),
    cons: z.array(z.string()).min(1),
    bestFor: z.string(),
    verdict: z.string(),
    /** Productos físicos o libros de Amazon que complementan la herramienta. */
    amazonPicks: z.array(amazonProduct).default([]),
    accent: z.enum(['brand', 'accent', 'lime', 'amber', 'rose']).default('brand'),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
  }),
});

const guides = defineCollection({
  loader: glob({ base: './src/content/guides', pattern: '**/*.md' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.enum(['Guía', 'Comparativa', 'Tutorial', 'Opinión']),
    tags: z.array(z.string()).default([]),
    /** IDs de la colección `tools` que se muestran como bloque relacionado. */
    relatedTools: z.array(z.string()).default([]),
    amazonPicks: z.array(amazonProduct).default([]),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
  }),
});

export const collections = { tools, guides };
