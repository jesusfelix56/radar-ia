import type { ImageMetadata } from 'astro';
import catAudio from '../assets/images/cat-audio.png';
import catCodigo from '../assets/images/cat-codigo.png';
import catEscritura from '../assets/images/cat-escritura.png';
import catImagen from '../assets/images/cat-imagen.png';
import catInvestigacion from '../assets/images/cat-investigacion.png';
import catProductividad from '../assets/images/cat-productividad.png';
import catVideo from '../assets/images/cat-video.png';
import heroRadar from '../assets/images/hero-radar.png';

export type ToolCategory =
  | 'Escritura'
  | 'Imagen'
  | 'Vídeo'
  | 'Código'
  | 'Audio'
  | 'Productividad'
  | 'Investigación';

export const heroImage = heroRadar;

export const categoryVisual: Record<
  ToolCategory,
  { image: ImageMetadata; color: string; label: string }
> = {
  Escritura: { image: catEscritura, color: '#f59e0b', label: 'Escribir' },
  Imagen: { image: catImagen, color: '#e879f9', label: 'Imagen' },
  Vídeo: { image: catVideo, color: '#fb7185', label: 'Vídeo' },
  Código: { image: catCodigo, color: '#34d399', label: 'Código' },
  Audio: { image: catAudio, color: '#22d3ee', label: 'Audio' },
  Productividad: { image: catProductividad, color: '#60a5fa', label: 'Trabajo' },
  Investigación: { image: catInvestigacion, color: '#a78bfa', label: 'Investigar' },
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
