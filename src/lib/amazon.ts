import { amazon } from '../site.config';

/**
 * Construye una URL de producto de Amazon con el ID de afiliado ya incluido.
 * Amazon exige que el parámetro `tag` viaje en cada enlace; centralizarlo aquí
 * evita que se escape ningún enlace sin comisión.
 */
export function amazonProductUrl(asin: string, extra: Record<string, string> = {}) {
  const url = new URL(`https://www.${amazon.domain}/dp/${asin}`);
  url.searchParams.set('tag', amazon.tag);
  url.searchParams.set('linkCode', 'ogi');
  url.searchParams.set('th', '1');
  url.searchParams.set('psc', '1');
  for (const [key, value] of Object.entries(extra)) url.searchParams.set(key, value);
  return url.toString();
}

/** Enlace a una búsqueda de Amazon, útil cuando no hay un ASIN fijo. */
export function amazonSearchUrl(query: string) {
  const url = new URL(`https://www.${amazon.domain}/s`);
  url.searchParams.set('k', query);
  url.searchParams.set('tag', amazon.tag);
  return url.toString();
}

/**
 * Atributos obligatorios para enlaces monetizados.
 * `sponsored` es lo que exige Google para enlaces de afiliado; sin él arriesgas
 * una acción manual por enlaces artificiales.
 */
export const affiliateLinkAttrs = {
  rel: 'sponsored nofollow noopener',
  target: '_blank',
} as const;
