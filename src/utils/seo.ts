import { site } from '../data/site';

interface SEOOptions {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article';
}

export function generateMeta(options: SEOOptions = {}) {
  const title = options.title
    ? site.seo.titleTemplate.replace('%s', options.title)
    : site.seo.defaultTitle;

  const description = options.description || site.description;
  const url = options.url || site.siteUrl;
  const image = options.image || site.seo.defaultImage;
  const type = options.type || 'website';

  return {
    title,
    description,
    canonical: url,
    openGraph: {
      basic: {
        title,
        type,
        image,
        url,
      },
      optional: {
        description,
        siteName: site.name,
      },
    },
    twitter: {
      card: 'summary_large_image' as const,
      title,
      description,
      image,
      creator: site.seo.twitterHandle,
    },
  };
}
