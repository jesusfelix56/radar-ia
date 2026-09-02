import type { APIContext } from 'astro';
import { ads } from '../site.config';

/**
 * Archivo que Google AdSense exige en la raíz del dominio.
 * El ID de vendedor autorizado `f08c47fec0942fa0` es el de Google; no lo cambies.
 */
export function GET(_context: APIContext) {
  const raw = ads.client.trim();
  if (!raw || raw.includes('0000000000000000')) {
    return new Response('# Todavía no hay sistemas publicitarios autorizados.\n', {
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
        'Cache-Control': 'public, max-age=86400',
      },
    });
  }

  const publisher = raw.replace(/^ca-/, '');
  const body = `google.com, ${publisher}, DIRECT, f08c47fec0942fa0
`;

  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=86400',
    },
  });
}
