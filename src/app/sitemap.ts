import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: 'https://amiereve.com', lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
    { url: 'https://amiereve.com/about', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://amiereve.com/services', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: 'https://amiereve.com/media', lastModified: new Date(), changeFrequency: 'weekly', priority: 0.7 },
    { url: 'https://amiereve.com/cases', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://amiereve.com/contact', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
  ]
}
