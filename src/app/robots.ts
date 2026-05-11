import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: '*', allow: '/' },
      { userAgent: 'Yeti', allow: '/', crawlDelay: 1 },
      { userAgent: 'Googlebot', allow: '/' },
    ],
    sitemap: 'https://amiereve.hyunlight.com/sitemap.xml',
  }
}
