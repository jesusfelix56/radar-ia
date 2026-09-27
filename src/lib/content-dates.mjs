import { readdirSync, readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const contentRoot = join(dirname(fileURLToPath(import.meta.url)), '..', 'content');

function readDates(dir) {
  const map = new Map();
  for (const file of readdirSync(dir)) {
    if (!file.endsWith('.md')) continue;
    const raw = readFileSync(join(dir, file), 'utf8');
    const fence = raw.indexOf('\n---', 3);
    const fm = fence === -1 ? raw : raw.slice(0, fence);
    if (/^draft:\s*true\s*$/m.test(fm)) continue;
    const pub = fm.match(/^pubDate:\s*(\d{4}-\d{2}-\d{2})/m)?.[1];
    const updated = fm.match(/^updatedDate:\s*(\d{4}-\d{2}-\d{2})/m)?.[1];
    if (pub) map.set(file.replace(/\.md$/, ''), updated || pub);
  }
  return map;
}

function latest(map) {
  let max = '';
  for (const value of map.values()) {
    if (value > max) max = value;
  }
  return max || undefined;
}

const tools = readDates(join(contentRoot, 'tools'));
const guides = readDates(join(contentRoot, 'guides'));

/** Fechas de páginas estáticas que declaran «Última actualización» en el contenido. */
const staticLastmod = {
  '/legal/cookies': '2026-09-27',
  '/legal/aviso-legal': '2026-09-22',
  '/legal/privacidad': '2026-09-22',
  '/legal/afiliados': '2026-09-27',
  '/metodologia': '2026-09-27',
};

/**
 * lastmod de una ruta del sitemap.
 * Herramientas y guías salen de `updatedDate` o, si no existe, de `pubDate`.
 */
export function lastmodForPath(pathname) {
  const path = pathname.replace(/\/$/, '') || '/';
  const toolId = path.match(/^\/herramientas\/([^/]+)$/)?.[1];
  if (toolId) return tools.get(toolId);
  const guideId = path.match(/^\/guias\/([^/]+)$/)?.[1];
  if (guideId) return guides.get(guideId);

  if (path === '/herramientas' || path === '/comparativas') return latest(tools);
  if (path === '/guias') return latest(guides);
  if (staticLastmod[path]) return staticLastmod[path];

  return latest(new Map([...tools, ...guides]));
}
