/**
 * Punto único de configuración del sitio.
 * Todo lo editable sin tocar componentes vive aquí o en el archivo `.env`.
 */

const env = import.meta.env;

function resolveSiteUrl() {
  const explicit = env.PUBLIC_SITE_URL as string | undefined;
  if (explicit) return explicit.replace(/\/$/, '');
  const vercelProd = env.VERCEL_PROJECT_PRODUCTION_URL as string | undefined;
  if (vercelProd) return `https://${vercelProd.replace(/\/$/, '')}`;
  const vercel = env.VERCEL_URL as string | undefined;
  if (vercel) return `https://${vercel.replace(/\/$/, '')}`;
  const netlify = env.URL as string | undefined;
  if (env.NETLIFY && netlify) return netlify.replace(/\/$/, '');
  const pages = env.CF_PAGES_URL as string | undefined;
  if (pages) return pages.replace(/\/$/, '');
  return 'https://www.radar-ia.com';
}

export const site = {
  name: 'Radar IA',
  shortName: 'RadarIA',
  tagline: 'Reseñas honestas de herramientas de inteligencia artificial',
  description:
    'Analizamos y comparamos herramientas de inteligencia artificial con pruebas reales: precios, límites, alternativas y para quién merece la pena cada una.',
  url: resolveSiteUrl(),
  locale: 'es-ES',
  lang: 'es',
  author: 'Redacción de Radar IA',
  email: 'hola@radar-ia.com',
  twitter: '@radar_ia',
  defaultImage: '/og-default.svg',
} as const;

export const ads = {
  /** Cliente de AdSense (ca-pub-...). */
  client: env.PUBLIC_ADSENSE_CLIENT || '',
  /**
   * Con `false` no se carga ningún script de Google: se muestran huecos simulados.
   * Actívalo solo cuando AdSense apruebe el sitio, así evitas peticiones vacías durante la revisión.
   */
  enabled: env.PUBLIC_ADS_ENABLED === 'true',
  slots: {
    header: env.PUBLIC_ADSENSE_SLOT_HEADER || '',
    inArticle: env.PUBLIC_ADSENSE_SLOT_IN_ARTICLE || '',
    sidebar: env.PUBLIC_ADSENSE_SLOT_SIDEBAR || '',
    footer: env.PUBLIC_ADSENSE_SLOT_FOOTER || '',
  },
} as const;

export const amazon = {
  tag: env.PUBLIC_AMAZON_TAG || 'radarIA-21',
  domain: env.PUBLIC_AMAZON_DOMAIN || 'amazon.es',
} as const;

/**
 * Enlaces de afiliado de software (comisión recurrente si el usuario se suscribe).
 * Pega aquí la URL que te da cada programa (PartnerStack, Rewardful, Impact…).
 * Si está vacío, se usa el `affiliateUrl` del markdown de cada herramienta.
 */
function affiliate(value: string | undefined) {
  const trimmed = value?.trim();
  return trimmed ? trimmed : undefined;
}

export const softwareAffiliates: Record<string, string> = Object.fromEntries(
  (
    [
      ['perplexity', affiliate(env.PUBLIC_AFFILIATE_PERPLEXITY)],
      ['elevenlabs', affiliate(env.PUBLIC_AFFILIATE_ELEVENLABS)],
      ['copy-ai', affiliate(env.PUBLIC_AFFILIATE_COPYAI)],
      ['runway', affiliate(env.PUBLIC_AFFILIATE_RUNWAY)],
    ] as const
  ).filter((entry): entry is [string, string] => Boolean(entry[1])),
);

/** Endpoints de formularios. Vacío = se usa mailto como respaldo. */
export const forms = {
  contact: env.PUBLIC_FORM_URL || '',
  newsletter: env.PUBLIC_NEWSLETTER_URL || '',
} as const;

export const nav = [
  { label: 'Herramientas', href: '/herramientas' },
  { label: 'Comparativas', href: '/comparativas' },
  { label: 'Guías', href: '/guias' },
  { label: 'Recomendados', href: '/recomendados' },
] as const;

export type AdSlot = keyof typeof ads.slots;
