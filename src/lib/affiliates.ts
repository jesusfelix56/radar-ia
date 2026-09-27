import { toolLinks, type ToolId } from '../data/outbound-links';

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
 * URL del botón "Probar". Sale de `toolLinks`. La etiqueta de afiliado y
 * `rel="sponsored"` solo se aplican si ese enlace tiene `affiliate: true`.
 */
export function resolveToolCta(tool: ToolLike) {
  const link = toolLinks[tool.id as ToolId];
  const href = link?.href ?? tool.data.website;
  const isAffiliate = Boolean(link?.affiliate);
  return { href, isAffiliate, name: tool.data.name };
}
