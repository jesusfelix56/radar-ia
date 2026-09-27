/**
 * Punto único de configuración del sitio.
 * Todo lo editable sin tocar componentes vive aquí o en el archivo `.env`.
 */

const env = import.meta.env;

function resolveSiteUrl() {
  const explicit = env.PUBLIC_SITE_URL as string | undefined;
  if (explicit) return explicit.replace(/\/$/, '');
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
  defaultImage: '/og-default.png',
  legalName: 'Jesús Félix Oliva Ballestero',
  nif: '34353770G',
  address: 'Rúa Leopoldo Calvo Sotelo, 94, 27400 Monforte de Lemos (Lugo), España',
  postal: {
    streetAddress: 'Rúa Leopoldo Calvo Sotelo, 94',
    addressLocality: 'Monforte de Lemos',
    addressRegion: 'Lugo',
    postalCode: '27400',
    addressCountry: 'ES',
  },
} as const;

export const ads = {
  /** Cliente de AdSense (ca-pub-...). */
  client: env.PUBLIC_ADSENSE_CLIENT || 'ca-pub-7494588122793199',
  /**
   * Con `false` se reservan los huecos, pero no se insertan unidades de anuncio.
   * El script de AdSense, en cualquier caso, solo se descarga tras el consentimiento.
   * Pásalo a true cuando Google apruebe el sitio y tengas IDs de bloque reales.
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
