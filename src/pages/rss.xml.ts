import { getCollection } from 'astro:content';
import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { site } from '../data/site';

export async function GET(context: APIContext) {
  const notes = await getCollection('notes', ({ data }) => !data.draft);
  const sorted = notes.sort((a, b) => b.data.publishedAt.getTime() - a.data.publishedAt.getTime());

  return rss({
    title: `${site.name} — Technical Notes`,
    description: site.description,
    site: context.site ?? site.siteUrl,
    items: sorted.map((note) => ({
      title: note.data.title,
      description: note.data.summary,
      pubDate: note.data.publishedAt,
      link: `/notes/${note.id}/`,
    })),
  });
}
