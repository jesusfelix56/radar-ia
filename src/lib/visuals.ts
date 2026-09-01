export type ToolCategory =
  | 'Escritura'
  | 'Imagen'
  | 'Vídeo'
  | 'Código'
  | 'Audio'
  | 'Productividad'
  | 'Investigación';

export const categoryVisual: Record<
  ToolCategory,
  { image: string; color: string; label: string }
> = {
  Escritura: { image: '/images/cat-escritura.png', color: '#f59e0b', label: 'Escribir' },
  Imagen: { image: '/images/cat-imagen.png', color: '#e879f9', label: 'Imagen' },
  Vídeo: { image: '/images/cat-video.png', color: '#fb7185', label: 'Vídeo' },
  Código: { image: '/images/cat-codigo.png', color: '#34d399', label: 'Código' },
  Audio: { image: '/images/cat-audio.png', color: '#22d3ee', label: 'Audio' },
  Productividad: { image: '/images/cat-productividad.png', color: '#60a5fa', label: 'Trabajo' },
  Investigación: { image: '/images/cat-investigacion.png', color: '#a78bfa', label: 'Investigar' },
};

export const toolVisual: Record<string, { color: string; color2: string }> = {
  chatgpt: { color: '#10A37F', color2: '#0d8c6c' },
  claude: { color: '#D97757', color2: '#b85c40' },
  gemini: { color: '#4F8EF7', color2: '#A855F7' },
  midjourney: { color: '#1a1a2e', color2: '#5b21b6' },
  'github-copilot': { color: '#818cf8', color2: '#312e81' },
  perplexity: { color: '#20808D', color2: '#0f766e' },
  elevenlabs: { color: '#f8fafc', color2: '#0f172a' },
  runway: { color: '#f97316', color2: '#7f1d1d' },
  'copy-ai': { color: '#f59e0b', color2: '#b45309' },
};

export function visualForTool(id: string, category: ToolCategory) {
  return {
    ...(toolVisual[id] ?? { color: '#22d3ee', color2: '#6366f1' }),
    cover: categoryVisual[category].image,
  };
}
