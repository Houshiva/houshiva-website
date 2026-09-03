import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';
import { site } from '../data/site';

export async function GET(context: APIContext) {
  const articles = await getCollection('articles');

  return rss({
    title: `${site.name} — مقالات آموزشی`,
    description: 'مقالات آموزشی هوشیوا درباره برنامه‌نویسی، پایگاه‌داده، هوش مصنوعی و نرم‌افزار کسب‌وکار.',
    site: context.site!,
    items: articles
      .sort((a, b) => b.data.publishDate.valueOf() - a.data.publishDate.valueOf())
      .map((article) => ({
        title: article.data.title,
        description: article.data.description,
        pubDate: article.data.publishDate,
        link: `/education/${article.id}/`,
        categories: [article.data.category],
      })),
    customData: '<language>fa-ir</language>',
  });
}
