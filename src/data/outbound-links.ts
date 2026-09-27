/**
 * URLs públicas de cada herramienta.
 *
 * Los cuatro programas de software con comisión recurrente no tienen enlace
 * de referido todavía. Hasta que el titular pegue la URL real en la variable
 * de entorno correspondiente, el botón «Probar» abre la web oficial y no se
 * marca como enlace comisionado. No inventar identificadores de afiliado.
 */
export const officialToolUrls = {
  chatgpt: 'https://chatgpt.com',
  claude: 'https://claude.ai',
  gemini: 'https://gemini.google.com',
  midjourney: 'https://www.midjourney.com',
  'github-copilot': 'https://github.com/features/copilot',
  perplexity: 'https://www.perplexity.ai',
  elevenlabs: 'https://elevenlabs.io',
  runway: 'https://runway.com',
  'copy-ai': 'https://www.copy.ai',
} as const;

export type ToolId = keyof typeof officialToolUrls;

export const pendingSoftwareAffiliates = [
  {
    id: 'perplexity',
    name: 'Perplexity',
    env: 'PUBLIC_AFFILIATE_PERPLEXITY',
    officialUrl: officialToolUrls.perplexity,
  },
  {
    id: 'elevenlabs',
    name: 'ElevenLabs',
    env: 'PUBLIC_AFFILIATE_ELEVENLABS',
    officialUrl: officialToolUrls.elevenlabs,
  },
  {
    id: 'copy-ai',
    name: 'Copy.ai',
    env: 'PUBLIC_AFFILIATE_COPYAI',
    officialUrl: officialToolUrls['copy-ai'],
  },
  {
    id: 'runway',
    name: 'Runway',
    env: 'PUBLIC_AFFILIATE_RUNWAY',
    officialUrl: officialToolUrls.runway,
  },
] as const;
