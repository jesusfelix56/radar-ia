import { softwareAffiliates } from '../site.config';

export { affiliateLinkAttrs } from './amazon';

type ToolLike = {
  id: string;
  data: {
    website: string;
    affiliateUrl?: string;
    name: string;
  };
};

/**
 * URL del botón "Probar". Prioridad: variable de entorno del programa de
 * afiliados → `affiliateUrl` del markdown → web oficial.
 */
export function resolveToolCta(tool: ToolLike) {
  const fromProgram = softwareAffiliates[tool.id];
  const href = fromProgram || tool.data.affiliateUrl || tool.data.website;
  const isAffiliate = Boolean(fromProgram || tool.data.affiliateUrl);
  return { href, isAffiliate, name: tool.data.name };
}
