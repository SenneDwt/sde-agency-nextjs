import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://sde-agency.com'
  const currentDate = new Date().toISOString()

  const pages: { path: string; changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency']; priority: number }[] = [
    { path: '', changeFrequency: 'daily', priority: 1.0 },
    { path: '/website-development', changeFrequency: 'daily', priority: 0.9 },
    { path: '/ai-automation', changeFrequency: 'daily', priority: 0.9 },
    { path: '/over-ons', changeFrequency: 'daily', priority: 0.7 },
    { path: '/contact', changeFrequency: 'daily', priority: 0.8 },
    { path: '/privacybeleid', changeFrequency: 'yearly', priority: 0.3 },
    { path: '/algemene-voorwaarden', changeFrequency: 'yearly', priority: 0.3 },
    { path: '/cookiebeleid', changeFrequency: 'yearly', priority: 0.3 },
  ]

  return pages.flatMap(({ path, changeFrequency, priority }) => [
    {
      url: `${baseUrl}${path}`,
      lastModified: currentDate,
      changeFrequency,
      priority,
    },
    {
      url: `${baseUrl}/en${path}`,
      lastModified: currentDate,
      changeFrequency,
      priority,
    },
  ])
}
