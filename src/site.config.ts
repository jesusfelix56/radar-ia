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
  return 'https://loprobamosai.es';
}

export const site = {
  name: 'Lo Probamos',
  shortName: 'LoProbamos',
  tagline: 'Reseñas honestas de herramientas de inteligencia artificial',
  description:
    'Analizamos y comparamos herramientas de inteligencia artificial con pruebas reales: precios, límites, alternativas y para quién merece la pena cada una.',
  url: resolveSiteUrl(),
  locale: 'es-ES',
  lang: 'es',
  author: 'Redacción de Lo Probamos',
  email: 'jfballestero0412@gmail.com',
  defaultImage: '/og-default.svg',
  legalName: 'Jesús Félix Oliva Ballestero',
  nif: '34353770G',
  address: 'Rúa Leopoldo Calvo Sotelo, 94, 27400 Monforte de Lemos (Lugo), España',
} as const;

export const ads = {
  /** Cliente de AdSense (ca-pub-...). */
  client: env.PUBLIC_ADSENSE_CLIENT || 'ca-pub-7494588122793199',
  /**
   * Con `false` el código de verificación va en la web, pero no se rellenan
   * bloques de anuncio. Pásalo a true cuando Google apruebe el sitio.
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
  tag: env.PUBLIC_AMAZON_TAG || 'loprobamos09-21',
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

export const softwareAffiliates: Record<string, string> = {};
for (const [id, url] of [
  ['perplexity', affiliate(env.PUBLIC_AFFILIATE_PERPLEXITY)],
  ['elevenlabs', affiliate(env.PUBLIC_AFFILIATE_ELEVENLABS)],
  ['copy-ai', affiliate(env.PUBLIC_AFFILIATE_COPYAI)],
  ['runway', affiliate(env.PUBLIC_AFFILIATE_RUNWAY)],
] as [string, string | undefined][]) {
  if (url) softwareAffiliates[id] = url;
}

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
