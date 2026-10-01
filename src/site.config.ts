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
   * Con `false` no se insertan unidades de anuncio.
   * adsbygoogle.js se carga siempre que hay cliente: es el que muestra el mensaje
   * de consentimiento certificado de Google. Este sitio no lo retrasa.
   * Pásalo a true cuando AdSense esté aprobado y tengas IDs de bloque reales.
   */
  enabled: env.PUBLIC_ADS_ENABLED === 'true',
  /**
   * Cajas vacías («Espacio reservado para publicidad»). En false no se pintan:
   * un hueco sin anuncio perjudica la revisión de AdSense.
   * El marcado de AdUnit sigue en el código; vuelve a true solo para previsualizar.
   * No afecta al script de consentimiento ni a Consent Mode.
   */
  showPlaceholders: env.PUBLIC_ADS_SHOW_PLACEHOLDERS === 'true',
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
 * Sustituye el `href` de `src/data/outbound-links.ts` si la variable tiene valor.
 * Vacío = se usa la URL por defecto de ese fichero (ElevenLabs ya es el enlace de PartnerStack).
 */
function overrideUrl(value: string | undefined) {
  const trimmed = value?.trim();
  return trimmed ? trimmed : undefined;
}

export const softwareAffiliateOverrides: Record<string, string> = {};
const elevenLabsOverride = overrideUrl(env.PUBLIC_AFFILIATE_ELEVENLABS);
if (elevenLabsOverride) softwareAffiliateOverrides.elevenlabs = elevenLabsOverride;

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
