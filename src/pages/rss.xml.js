import rss, { pagesGlobToRssItems } from '@astrojs/rss';

export async function get() {
  return rss({
    title: 'IamLucaM. - Blog',
    description: 'Blog di Luca Mattioli',
    site: 'https://iamlucam.surge.sh',
    items: await pagesGlobToRssItems(import.meta.glob('./**/*.md')),
    customData: `<language>it</language>`,
  });
}
