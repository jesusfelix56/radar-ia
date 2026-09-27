/**
 * URLs del botón «Probar» de cada herramienta.
 *
 * `affiliate: false` es un enlace normal a la web oficial: sin etiqueta
 * «Enlace comisionado» y sin `rel="sponsored"`.
 * Para activar la divulgación, pon `affiliate: true` y sustituye `href` por
 * el enlace de referido real. No inventar identificadores de afiliado.
 */
export type ToolLink = {
  href: string;
  affiliate: boolean;
};

export const toolLinks = {
  chatgpt: { href: 'https://chatgpt.com', affiliate: false },
  claude: { href: 'https://claude.ai', affiliate: false },
  gemini: { href: 'https://gemini.google.com', affiliate: false },
  midjourney: { href: 'https://www.midjourney.com', affiliate: false },
  'github-copilot': { href: 'https://github.com/features/copilot', affiliate: false },
  perplexity: { href: 'https://www.perplexity.ai', affiliate: false },
  elevenlabs: { href: 'https://try.elevenlabs.io/sqcridu8j1cj', affiliate: true },
  runway: { href: 'https://runway.com', affiliate: false },
  'copy-ai': { href: 'https://www.copy.ai', affiliate: false },
} satisfies Record<string, ToolLink>;

export type ToolId = keyof typeof toolLinks;
