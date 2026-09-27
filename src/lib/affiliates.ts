import { officialToolUrls, type ToolId } from '../data/outbound-links';
import { softwareAffiliates } from '../site.config';

export { affiliateLinkAttrs } from './amazon';

/** Texto visible junto a cada enlace monetizado, antes del clic (UCPD / LCD). */
export const AFFILIATE_LABEL = 'Enlace comisionado';

type ToolLike = {
  id: string;
  data: {
    website: string;
    affiliateUrl?: string;
    name: string;
  };
};

/**
 * URL del botón "Probar". Prioridad: enlace de referido del entorno → web
 * oficial centralizada → `website` del markdown. Solo es enlace comisionado
 * cuando hay una URL real de afiliado; no se usa `affiliateUrl` del markdown.
 */
export function resolveToolCta(tool: ToolLike) {
  const fromProgram = softwareAffiliates[tool.id];
  const official = officialToolUrls[tool.id as ToolId] ?? tool.data.website;
  const href = fromProgram || official;
  const isAffiliate = Boolean(fromProgram);
  return { href, isAffiliate, name: tool.data.name };
}
