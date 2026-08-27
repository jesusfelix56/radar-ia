import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';
import { site } from '../site.config';

export async function GET(context: APIContext) {
  const [tools, guides] = await Promise.all([
    getCollection('tools', ({ data }) => !data.draft),
    getCollection('guides', ({ data }) => !data.draft),
  ]);

  const items = [
    ...tools.map((tool) => ({
      title: `Análisis: ${tool.data.name}`,
      description: tool.data.description,
      pubDate: tool.data.updatedDate ?? tool.data.pubDate,
      link: `/herramientas/${tool.id}`,
      categories: [tool.data.category],
    })),
    ...guides.map((guide) => ({
      title: guide.data.title,
      description: guide.data.description,
      pubDate: guide.data.updatedDate ?? guide.data.pubDate,
      link: `/guias/${guide.id}`,
      categories: [guide.data.category, ...guide.data.tags],
    })),
  ].sort((a, b) => b.pubDate.valueOf() - a.pubDate.valueOf());

  return rss({
    title: `${site.name} · ${site.tagline}`,
    description: site.description,
    site: context.site ?? site.url,
    items,
    customData: `<language>${site.lang}</language>`,
  });
}
