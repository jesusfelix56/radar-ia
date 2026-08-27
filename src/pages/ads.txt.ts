import type { APIContext } from 'astro';
import { ads } from '../site.config';

/**
 * Archivo que Google AdSense exige en la raíz del dominio.
 * El ID de vendedor autorizado `f08c47fec0942fa0` es el de Google; no lo cambies.
 */
export function GET(_context: APIContext) {
  const publisher = (ads.client || 'ca-pub-0000000000000000').replace(/^ca-/, '');
  const body = `google.com, ${publisher}, DIRECT, f08c47fec0942fa0
`;

  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=86400',
    },
  });
}
