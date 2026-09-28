export const dynamic = 'force-static'

import type { MetadataRoute } from 'next'
import { siteConfig } from '@/lib/site-config'

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date(`${siteConfig.fixedSitemapDate}T00:00:00.000Z`)
  const paths = [...new Set(siteConfig.footerLinks.map((item) => item.href))]

  return paths.map((path) => ({
    url: new URL(path, siteConfig.url).toString(),
    lastModified,
    changeFrequency: path === '/' ? 'weekly' : 'monthly',
    priority: path === '/' ? 1 : path === '/services' || path === '/contact' ? 0.8 : 0.6,
  }))
}

