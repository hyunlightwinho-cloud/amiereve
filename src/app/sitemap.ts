import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: 'https://amiereve.hyunlight.com', lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
    { url: 'https://amiereve.hyunlight.com/about', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://amiereve.hyunlight.com/services', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: 'https://amiereve.hyunlight.com/cases', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://amiereve.hyunlight.com/contact', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
  ]
}
