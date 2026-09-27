import { toolLinks, type ToolId } from '../data/outbound-links';
import { softwareAffiliateOverrides } from '../site.config';

export { affiliateLinkAttrs } from './amazon';

/** Texto visible junto a cada enlace monetizado, antes del clic (UCPD / LCD). */
export const AFFILIATE_LABEL = 'Enlace comisionado';

/** Enlaces de software con `affiliate: true`. Amazon conserva `nofollow` en el suyo. */
export const softwareAffiliateRel = 'sponsored noopener';

/** Divulgación junto al enlace, visible antes del clic. El nombre sale de la ficha. */
export function affiliateDisclosure(name: string) {
  return `Enlace de afiliado: si te suscribes a través de él, recibo una comisión sin coste extra para ti. Soy afiliado independiente de ${name}.`;
}

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
  const href = softwareAffiliateOverrides[tool.id] || link?.href || tool.data.website;
  const isAffiliate = Boolean(link?.affiliate);
  return { href, isAffiliate, name: tool.data.name };
}
